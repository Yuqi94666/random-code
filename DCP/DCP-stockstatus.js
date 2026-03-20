'use strict';

/********************************************************************
 * 1) Constants
 ********************************************************************/
const DCPstockDisabledCONSTANTS = {
    EXPERIMENT_ID: 'DCPstockDisabled',
    PAGES_INCLUDE: [],
    PAGES_EXCLUDE: ['&step=1', '&step=2', 'cart'],
    EXPERIMENT_VARIANT: 'variant',
    TARGET_ELEMENT: '#usps',
    CUSTOM_CSS: `
    .cross { position: relative !important; opacity: 0.55 !important; pointer-events: none !important; overflow-y: clip;}
    .cross::after {
    content: "" !important; position: absolute !important; left: 10% !important;
    top: 50% !important; width: 80% !important; height: 2px !important;
    background: #111 !important; transform: translateY(-50%) rotate(-45deg) !important;
    z-index: 2 !important; pointer-events: none !important;
    }
    `,
    INIT_RETRY_INTERVAL: 500,
    INIT_MAX_RETRIES: 20,
    STYLE_ID: "__stock_cross_style__",
    CACHE_KEY_PREFIX: "__vodafone_stock_cache_",
    CACHE_TTL: 10 * 60 * 1000,
    DEBOUNCE_DELAY: 150
};

/********************************************************************
 * 2) Main Object
 ********************************************************************/
let DCPstockDisabledOBJ = {

    __cachedResult: null,
    __debounceTimer: null,
    __firstFire: true, // FIX: tracks whether MutationObserver has fired for the first time

    /********************************************************************
     * CSS
     ********************************************************************/
    buildCSS: function () {
        if (!document.getElementById(DCPstockDisabledCONSTANTS.STYLE_ID)) {
            const style = document.createElement("style");
            style.id = DCPstockDisabledCONSTANTS.STYLE_ID;
            style.textContent = DCPstockDisabledCONSTANTS.CUSTOM_CSS;
            document.head.appendChild(style);
            console.log('[cross] CSS injected ✅');
        }
    },

    /********************************************************************
     * Cache helpers
     ********************************************************************/
    getCacheKey: function () {
        return DCPstockDisabledCONSTANTS.CACHE_KEY_PREFIX + window.location.pathname.split("/").pop();
    },

    setCache: function (data) {
        const cacheObj = { timestamp: Date.now(), data: data };
        localStorage.setItem(DCPstockDisabledOBJ.getCacheKey(), JSON.stringify(cacheObj));
        console.log('[cross] Cache set ✅', cacheObj);
    },

    getCache: function () {
        const raw = localStorage.getItem(DCPstockDisabledOBJ.getCacheKey());
        if (!raw) {
            console.log('[cross] No cache found');
            return null;
        }
        try {
            const parsed = JSON.parse(raw);
            if (Date.now() - parsed.timestamp > DCPstockDisabledCONSTANTS.CACHE_TTL) {
                console.log('[cross] Cache expired, removing');
                localStorage.removeItem(DCPstockDisabledOBJ.getCacheKey());
                return null;
            }
            console.log('[cross] Cache hit ✅', parsed.data);
            return parsed.data;
        } catch (e) {
            console.error('[cross] Cache parse error:', e);
            return null;
        }
    },

    /********************************************************************
     * Fetch logic
     ********************************************************************/
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
        console.log('[cross] Extracted SKU details:', skuDetails);
        return skuDetails;
    },

    checkDeviceStatus: function () {
        const cachedData = DCPstockDisabledOBJ.getCache();
        if (cachedData) {
            console.log("[cross] Using LocalStorage Cache ✅");
            return Promise.resolve(cachedData);
        }

        const deviceName = window.location.pathname.split("/").pop();
        console.log('[cross] Fetching device status for:', deviceName);

        return fetch("https://dsapi.vodafone.com.au/device/postpaid/" + deviceName + "?serviceType=New")
            .then((res) => res.json())
            .then((data) => {
                console.log('[cross] Device API response:', data);
                var deviceStockStatus = data.deviceStockStatus;
                var deviceConfig = data.deviceConfig;
                var skuByColorCapacity = DCPstockDisabledOBJ.extractSKUDetails(deviceConfig);

                var stockStatusByColorCapacity = {};
                var fetchPromises = [];

                for (var color in skuByColorCapacity) {
                    stockStatusByColorCapacity[color] = {};
                    for (var capacity in skuByColorCapacity[color]) {
                        (function (color, capacity, sku) {
                            console.log('[cross] Fetching inventory for SKU:', sku, '| color:', color, '| capacity:', capacity);
                            var p = fetch("https://dsapi.vodafone.com.au/inventory/availability/" + sku)
                                .then((res) => res.json())
                                .then((inv) => {
                                    console.log('[cross] Inventory response for', sku, ':', inv);
                                    stockStatusByColorCapacity[color][capacity] = inv.stockStatus;
                                })
                                .catch((err) => {
                                    console.error('[cross] Inventory fetch failed for SKU:', sku, err);
                                    stockStatusByColorCapacity[color][capacity] = "Unknown";
                                });
                            fetchPromises.push(p);
                        })(color, capacity, skuByColorCapacity[color][capacity]);
                    }
                }

                return Promise.all(fetchPromises).then(() => {
                    const deviceResult = { deviceStockStatus, stockStatusByColorCapacity };
                    DCPstockDisabledOBJ.setCache(deviceResult);
                    console.log("[cross] API Fetch Complete & Cached ✅", deviceResult);
                    return deviceResult;
                });
            })
            .catch((err) => {
                console.error('[cross] checkDeviceStatus fetch failed:', err);
                return null;
            });
    },

    /********************************************************************
     * UI logic
     ********************************************************************/
    getSelectedColor: function () {
        const el =
            document.querySelector('input[name="color"]:checked') ||
            document.querySelector('input[data-testid$="-checked"]') ||
            document.querySelector('label[for="color"] strong');

        const color = ((el && (el.value || el.textContent)) || "").trim();
        console.log('[cross] getSelectedColor:', color, '| element:', el);
        return color;
    },

    resolveLabel: function (input) {
        // No CSS.escape — input IDs can contain spaces e.g. "Jet Black color"
        return (input.id && document.querySelector(`label[for="${input.id}"]`)) ||
            input.closest("label");
    },

    applyCross: function (deviceResult) {
        if (!deviceResult) {
            console.warn('[cross] applyCross called with no deviceResult — skipping');
            return;
        }

        console.log('[cross] applyCross called with:', deviceResult);

        const toggleCrossForInputs = (selector, shouldCross) => {
            const inputs = document.querySelectorAll(selector);
            console.log(`[cross] toggleCross | selector: ${selector} | shouldCross: ${shouldCross} | found: ${inputs.length} inputs`);
            inputs.forEach((input) => {
                const label = DCPstockDisabledOBJ.resolveLabel(input);
                if (!label) {
                    console.warn('[cross] No label found for input:', input);
                    return;
                }
                label.classList.toggle("cross", shouldCross);
                console.log(`[cross] Label toggled | value: "${input.value}" | cross: ${shouldCross}`, label);
            });
        };

        if (deviceResult.deviceStockStatus === "Non-Orderable") {
            console.log('[cross] Device is Non-Orderable — crossing all colors and capacities');
            toggleCrossForInputs('input[name="color"]', true);
            toggleCrossForInputs('input[name="capacity"]', true);
            return;
        }

        console.log('[cross] Device is orderable — checking per-color/capacity stock');
        toggleCrossForInputs('input[name="color"]', false);

        const selectedColor = DCPstockDisabledOBJ.getSelectedColor();
        const stockMap = deviceResult.stockStatusByColorCapacity &&
            deviceResult.stockStatusByColorCapacity[selectedColor];
        console.log("[cross] Selected color:", selectedColor, "| Stock map:", stockMap);

        if (!stockMap) {
            console.warn('[cross] No stock map found for color:', selectedColor, '— clearing capacity crosses');
            toggleCrossForInputs('input[name="capacity"]', false);
            return;
        }

        document.querySelectorAll('input[name="capacity"]').forEach(input => {
            const label = DCPstockDisabledOBJ.resolveLabel(input);
            if (!label) {
                console.warn('[cross] No label found for capacity input:', input);
                return;
            }
            const capVal = (input.value || "").trim();
            const isNonOrderable = stockMap[capVal] === "Non-Orderable";
            console.log(`[cross] Capacity: "${capVal}" | stockStatus: ${stockMap[capVal]} | cross: ${isNonOrderable}`);
            label.classList.toggle("cross", isNonOrderable);
        });
    },

    // FIX: first fire is immediate (no delay) to catch React re-render right after API resolves
    // subsequent fires are debounced to prevent flooding during ongoing re-renders
    applyCrossDebounced: function () {
        if (DCPstockDisabledOBJ.__firstFire) {
            DCPstockDisabledOBJ.__firstFire = false;
            console.log('[cross] MutationObserver first fire — applying immediately');
            DCPstockDisabledOBJ.applyCross(DCPstockDisabledOBJ.__cachedResult);
            return;
        }
        clearTimeout(DCPstockDisabledOBJ.__debounceTimer);
        DCPstockDisabledOBJ.__debounceTimer = setTimeout(() => {
            console.log('[cross] MutationObserver debounce fired');
            DCPstockDisabledOBJ.applyCross(DCPstockDisabledOBJ.__cachedResult);
        }, DCPstockDisabledCONSTANTS.DEBOUNCE_DELAY);
    },

    /********************************************************************
     * Observe & waitForElement
     ********************************************************************/
    observe: function () {
        try {
            const includeUrls = DCPstockDisabledCONSTANTS.PAGES_INCLUDE;
            const excludedUrls = DCPstockDisabledCONSTANTS.PAGES_EXCLUDE;

            croWD.hotbed.listen('croPageTrack', function (observable, eventType, data) {
                const currentUrl = window.location.href;
                console.log('[cross] observe fired | url:', currentUrl);

                const matchedUrl = includeUrls.find(url => {
                    const isMatch = currentUrl.toLowerCase().includes(url.toLowerCase());
                    const isExcluded = excludedUrls.some(excludedUrl =>
                        currentUrl.toLowerCase().includes(excludedUrl.toLowerCase())
                    );
                    return isMatch && !isExcluded;
                });

                if (matchedUrl) {
                    console.log('[cross] Matched URL:', matchedUrl, '— calling waitForElement');
                    DCPstockDisabledOBJ.waitForElement();
                } else {
                    console.log('[cross] URL did not match any include rules — skipping');
                }
            });
        } catch (error) {
            console.error('Error in observe function:', error);
        }
    },

    waitForElement: function () {
        try {
            let rC = 0;
            console.log('[cross] waitForElement started | target:', DCPstockDisabledCONSTANTS.TARGET_ELEMENT);
            let int = setInterval(() => {
                const el = document.querySelector(DCPstockDisabledCONSTANTS.TARGET_ELEMENT);

                if (el && typeof croWD !== 'undefined') {
                    clearInterval(int);
                    int = null;
                    console.log('[cross] Target element found ✅', el);
                    if (DCPstockDisabledOBJ.__cachedResult) {
                        console.log('[cross] __cachedResult available — calling applyCross from waitForElement');
                        DCPstockDisabledOBJ.applyCross(DCPstockDisabledOBJ.__cachedResult);
                    } else {
                        console.warn('[cross] __cachedResult not yet available — applyCross will be called once API resolves');
                    }
                } else {
                    rC++;
                    console.log(`[cross] waitForElement retry ${rC}/${DCPstockDisabledCONSTANTS.INIT_MAX_RETRIES} | el: ${!!el} | croWD: ${typeof croWD !== 'undefined'}`);
                    if (rC >= DCPstockDisabledCONSTANTS.INIT_MAX_RETRIES) {
                        clearInterval(int);
                        int = null;
                        console.error('[cross] Element not found after max retries');
                    }
                }
            }, DCPstockDisabledCONSTANTS.INIT_RETRY_INTERVAL);
        } catch (error) {
            console.error('Error in waitForElement function:', error);
        }
    },

    /********************************************************************
     * Init
     ********************************************************************/
    init: function () {
        console.log('[cross] init started');
        DCPstockDisabledOBJ.buildCSS();

        if (DCPstockDisabledCONSTANTS.PAGES_INCLUDE.length === 0) {
            console.log('[cross] No PAGES_INCLUDE defined — calling waitForElement directly');
            DCPstockDisabledOBJ.waitForElement();
        } else if (DCPstockDisabledCONSTANTS.PAGES_INCLUDE.some(url => window.location.pathname.includes(url))) {
            console.log('[cross] Current page matches PAGES_INCLUDE — calling waitForElement');
            DCPstockDisabledOBJ.waitForElement();
        } else {
            console.log('[cross] Page not in PAGES_INCLUDE — setting up observer');
            DCPstockDisabledOBJ.observe();
        }

        return DCPstockDisabledOBJ.checkDeviceStatus()
            .then(result => {
                DCPstockDisabledOBJ.__cachedResult = result;
                console.log('[cross] checkDeviceStatus resolved — __cachedResult set:', result);

                // FIX: always call applyCross unconditionally after API resolves
                // covers the race where React re-rendered before __cachedResult was set
                console.log('[cross] Calling applyCross immediately after API resolve');
                DCPstockDisabledOBJ.applyCross(DCPstockDisabledOBJ.__cachedResult);

                // Change listener for color/capacity selection
                document.addEventListener("change", e => {
                    if (!e || !e.target) return;
                    if (e.target.name === "color" || e.target.name === "capacity") {
                        console.log('[cross] Change event fired | name:', e.target.name, '| value:', e.target.value);
                        DCPstockDisabledOBJ.applyCross(DCPstockDisabledOBJ.__cachedResult);
                    }
                });

                // MutationObserver — first fire immediate, subsequent fires debounced
                const observer = new MutationObserver(() => DCPstockDisabledOBJ.applyCrossDebounced());
                observer.observe(document.body, { childList: true, subtree: true });
                console.log('[cross] MutationObserver attached ✅');

                // Expose debug helpers to window
                window.__applyCross = () => DCPstockDisabledOBJ.applyCross(DCPstockDisabledOBJ.__cachedResult);
                window.__clearStockCache = () => {
                    localStorage.removeItem(DCPstockDisabledOBJ.getCacheKey());
                    console.log('[cross] Cache cleared ✅');
                };

                console.log("[cross] Initialized ✅");
                return result;
            })
            .catch(e => {
                console.error("[cross] init failed:", e);
            });
    }
};

DCPstockDisabledOBJ.init();
