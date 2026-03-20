'use strict';

const DCPstockDisabledCONSTANTS = {
    EXPERIMENT_ID: 'DCPstockDisabled', // Experiment ID
    PAGES_INCLUDE: [], // ['iphone16'] // pages to be included, if empty observe is not used
    PAGES_EXCLUDE: ['&step=1', '&step=2', 'cart'], //pages to be excluded
    EXPERIMENT_VARIANT: 'variant', // possible values: variant|control|personalisation
    TARGET_ELEMENT: '#usps', // Target element to be modified
    TEMPLATE_HTML: `<div><div class="title">Title</div><div class="text"><p class="subtitle">Subtitle</p><p class="description">Description</p></div></div>`, // HTML template to be injected
    TEMPLATE_INJECT_TYPE: 'before', // possible values: replace|before|prepend|after|append
    CUSTOM_CSS: `
    .cross { position: relative !important; opacity: 0.55 !important; pointer-events: none !important; overflow-y: clip;}
    .cross::after {
    content: "" !important; position: absolute !important; left: 10% !important;
    top: 50% !important; width: 80% !important; height: 2px !important;
    background: #111 !important; transform: translateY(-50%) rotate(-45deg) !important;
    z-index: 2 !important; pointer-events: none !important;
    } 
    `, // CSS to be injected
    INIT_RETRY_INTERVAL: 500, // milliseconds for init retry
    INIT_MAX_RETRIES: 20, // max retries for init
    STYLE_ID: "__stock_cross_style__",
    CACHE_KEY_PREFIX: "__vodafone_stock_cache_",
    CACHE_TTL: 10 * 60 * 1000
};

let DCPstockDisabledOBJ = {
    applyChanges: function (el) {
        try {
            //Add your logic here
            DCPstockDisabledOBJ.buildCSS();
            DCPstockDisabledOBJ.buildTemplate();

        } catch (error) {
            console.error('Error in applyChanges function:', error);
            DCPstockDisabledOBJ.tracking('error applyChanges');
        }
    },
    getCacheKey: function (key) {
        return DCPstockDisabledCONSTANTS.CACHE_KEY_PREFIX + window.location.pathname.split("/").pop();
    },
    setCache: function (data) {
        const cacheObj = { timestamp: Date.now(), data: data };
        localStorage.setItem(DCPstockDisabledOBJ.getCacheKey(), JSON.stringify(cacheObj));
    },
    getCache: function () {
        const raw = localStorage.getItem(getCacheKey());
        if (!raw) return null;
        try {
            const parsed = JSON.parse(raw);
            const timestamp = parsed.timestamp;
            const data = parsed.data;

            if (Date.now() - timestamp > CACHE_TTL) {
                localStorage.removeItem(getCacheKey());
                return null;
            }
            return data;
        } catch (e) {
            return null;
        }
    },
    checkDeviceStatus: function () {
        const cachedData = DCPstockDisabledOBJ.getCache();
        if (cachedData) {
            console.log("[cross] Using LocalStorage Cache ✅");
            return Promise.resolve(cachedData);
        }

        const deviceName = window.location.pathname.split("/").pop();

        return fetch("https://dsapi.vodafone.com.au/device/postpaid/" + deviceName + "?serviceType=New")
            .then((res) => res.json())
            .then((data) => {
                var deviceStockStatus = data.deviceStockStatus;
                var deviceConfig = data.deviceConfig;

                var skuByColorCapacity = DCPstockDisabledOBJ.extractSKUDetails(deviceConfig);

                var stockStatusByColorCapacity = {};
                var fetchPromises = [];

                for (var color in skuByColorCapacity) {
                    stockStatusByColorCapacity[color] = {};
                    for (var capacity in skuByColorCapacity[color]) {
                        (function (color, capacity, sku) {
                            var p = fetch("https://dsapi.vodafone.com.au/inventory/availability/" + sku)
                                .then((res) => res.json())
                                .then((inv) => {
                                    stockStatusByColorCapacity[color][capacity] = inv.stockStatus;
                                })
                                .catch(() => {
                                    stockStatusByColorCapacity[color][capacity] = "Unknown";
                                });
                            fetchPromises.push(p);
                        })(color, capacity, skuByColorCapacity[color][capacity]);
                    }
                }

                return Promise.all(fetchPromises).then(() => {
                    const deviceResult = { deviceStockStatus, stockStatusByColorCapacity };
                    DCPstockDisabledOBJ.setCache(deviceResult);
                    console.log("[cross] API Fetch Complete & Cached", deviceResult);
                    return deviceResult;
                });
            });
    },
    extractSKUDetails: function (deviceConfig) {
        var skuDetails = {};
        for (var color in deviceConfig) {
            skuDetails[color] = {};
            for (var capacity in deviceConfig[color]) {
                var configArray = deviceConfig[color][capacity];
                if (Array.isArray(configArray) && configArray.length > 0) {
                    skuDetails[color][capacity] = configArray[0].SKU;
                }
            }
        }
        return skuDetails;
    },
    getSelectedColor: function () {
        const el =
            document.querySelector('input[name="color"]:checked') ||
            document.querySelector('input[data-testid$="-checked"]') ||
            document.querySelector('label[for="color"] strong');

        return ((el && (el.value || el.textContent)) || "").trim();
    },

    applyCross: function (deviceResult) {
        if (!deviceResult) return;

        const resolveLabel = (input) =>
            (input.id && document.querySelector(`label[for="${CSS.escape(input.id)}"]`)) ||
            input.closest("label");

        const toggleCrossForInputs = (selector, shouldCross) => {
            document.querySelectorAll(selector).forEach((input) => {
                const label = resolveLabel(input);
                if (!label) return;
                label.classList.toggle("cross", shouldCross);
            });
        };

        if (deviceResult.deviceStockStatus === "Non-Orderable") {
            toggleCrossForInputs('input[name="color"]', true);
            toggleCrossForInputs('input[name="capacity"]', true);
            return;
        }

        // Ensure color labels are reset when device-level stock is orderable.
        toggleCrossForInputs('input[name="color"]', false);

        const selectedColor = DCPstockDisabledOBJ.getSelectedColor();
        const stockMap = deviceResult.stockStatusByColorCapacity &&
            deviceResult.stockStatusByColorCapacity[selectedColor];
        console.log("[cross] Selected color:", selectedColor, "Stock map:", stockMap);

        if (!stockMap) {
            toggleCrossForInputs('input[name="capacity"]', false);
            return;
        }

        document.querySelectorAll('input[name="capacity"]').forEach(input => {
            const label = resolveLabel(input);

            if (!label) return;

            const capVal = (input.value || "").trim();
            const isNonOrderable = stockMap[capVal] === "Non-Orderable";
            label.classList.toggle("cross", isNonOrderable);
        });
    },
    buildCSS: function () {
        try {
            const styleSheet = document.createElement('style');
            styleSheet.setAttribute('type', 'text/css');
            styleSheet.setAttribute('id', `${DCPstockDisabledCONSTANTS.EXPERIMENT_ID}-styles`);

            // Remove any existing stylesheet with the same ID
            const existingStyle = document.getElementById(`${DCPstockDisabledCONSTANTS.EXPERIMENT_ID}-styles`);
            if (existingStyle) {
                existingStyle.remove();
            }

            // Append stylesheet to head
            const css = DCPstockDisabledCONSTANTS.CUSTOM_CSS;
            styleSheet.appendChild(document.createTextNode(css));
            document.head.appendChild(styleSheet);
        } catch (error) {
            console.error('Error in buildCSS function:', error); DCPstockDisabledOBJ.tracking('error buildCSS');
        }
    },
    buildTemplate: function () {
        try {
            let template = document.createElement('div');
            template.innerHTML = DCPstockDisabledCONSTANTS.TEMPLATE_HTML;
            template.id = 'wrapper-' + DCPstockDisabledCONSTANTS.EXPERIMENT_ID;

            let mainElement = DCPstockDisabledCONSTANTS.TARGET_ELEMENT;
            let mainElements = document.querySelectorAll(DCPstockDisabledCONSTANTS.TARGET_ELEMENT);
            if (mainElements.length > 0) {
                throw new Error('Template location element not found');
            }

            // Remove any existing template with the same ID
            const existingTemplate = document.getElementById(`${DCPstockDisabledCONSTANTS.EXPERIMENT_ID}`);
            if (existingTemplate) {
                existingTemplate.remove();
            }
            switch (DCPstockDisabledCONSTANTS.TEMPLATE_INJECT_TYPE) {
                case 'replace':
                    mainElement.insertAdjacentHTML('afterend', template.outerHTML);
                    mainElement.remove(); // Remove the original element after replacing
                    break;
                case 'before':
                    mainElement.insertAdjacentHTML('beforebegin', template.outerHTML);
                    break;
                case 'prepend':
                    mainElement.insertBefore(template, mainElement.firstChild);
                    break;
                case 'after':
                    mainElement.insertAdjacentHTML('afterend', template.outerHTML);
                    break;
                default:
                    //case 'append'
                    mainElement.appendChild(template);
                    break;
            }
        } catch (error) {
            console.error('Error in buildTemplate function:', error); DCPstockDisabledOBJ.tracking('error buildTemplate');
        }
    },
    observe: function () {
        try {
            // Define the array of URLs to check against
            const includeUrls = DCPstockDisabledCONSTANTS.PAGES_INCLUDE;

            // Define the array of URLs to be excluded
            const excludedUrls = DCPstockDisabledCONSTANTS.PAGES_EXCLUDE;

            croWD.hotbed.listen('croPageTrack', function (observable, eventType, data) {
                const currentUrl = window.location.href;

                // Check if the current URL exists in the array and not in the excluded list
                const matchedUrl = includeUrls.find(url => {
                    const isMatch = currentUrl.toLowerCase().includes(url.toLowerCase());
                    const isExcluded = excludedUrls.some(excludedUrl =>
                        currentUrl.toLowerCase().includes(excludedUrl.toLowerCase())
                    );
                    return isMatch && !isExcluded;
                });

                if (matchedUrl) {
                    DCPstockDisabledOBJ.waitForElement();
                }
            });

        } catch (error) {
            console.error('Error in observe function:', error); DCPstockDisabledOBJ.tracking('error observe');
        }
    },
    waitForElement: function () {
        try {
            let rC = 0;
            let int = setInterval(() => {
                const el = document.querySelector(DCPstockDisabledCONSTANTS.TARGET_ELEMENT);

                if (el && typeof croWD !== 'undefined') {
                    clearInterval(int);
                    int = null; DCPstockDisabledOBJ.applyChanges(el);
                } else {
                    rC++;
                    if (rC >= DCPstockDisabledCONSTANTS.INIT_MAX_RETRIES) {
                        clearInterval(int);
                        int = null;
                        console.error('Element not found after max retries. DCPstockDisabledOBJ'); DCPstockDisabledOBJ.tracking('error elementsNotFound');
                    }
                }
            }, DCPstockDisabledCONSTANTS.INIT_RETRY_INTERVAL);

        } catch (error) {
            console.error('Error in waitForElement function:', error); DCPstockDisabledOBJ.tracking('error waitForElement');
        }
    },
    __cachedResult: null,
    init: function () {
        if (DCPstockDisabledCONSTANTS.PAGES_INCLUDE.length === 0) {
            DCPstockDisabledOBJ.waitForElement();
        } else if (DCPstockDisabledCONSTANTS.PAGES_INCLUDE.includes(window.location.pathname) === 0) {
            DCPstockDisabledOBJ.waitForElement();
        } else {
            DCPstockDisabledOBJ.observe();
        }
        return DCPstockDisabledOBJ.checkDeviceStatus()
            .then(result => {
                DCPstockDisabledOBJ.__cachedResult = result;

                // Poll a few times to catch late-rendered React DOM
                let attempts = 0;
                const poll = setInterval(() => {
                    DCPstockDisabledOBJ.applyCross(DCPstockDisabledOBJ.__cachedResult);
                    if (document.querySelector(".cross") || attempts++ > 10) clearInterval(poll);
                }, 300);

                // Change listener
                document.addEventListener("change", e => {
                    if (!e || !e.target) return;
                    if (e.target.name === "color" || e.target.name === "capacity") {
                        DCPstockDisabledOBJ.applyCross(DCPstockDisabledOBJ.__cachedResult);
                    }
                });

                // MutationObserver
                const observer = new MutationObserver(() => DCPstockDisabledOBJ.applyCross(DCPstockDisabledOBJ.__cachedResult));
                observer.observe(document.body, { childList: true, subtree: true });

                // Expose helpers
                window.__applyCross = () => DCPstockDisabledOBJ.applyCross(DCPstockDisabledOBJ.__cachedResult);
                window.__clearStockCache = () => localStorage.removeItem(DCPstockDisabledOBJ.getCacheKey());

                console.log("[cross] Initialized ✅");
                return result;
            })
            .catch(e => {
                console.error("[cross] init failed:", e);
            });
    }

};

DCPstockDisabledOBJ.init();