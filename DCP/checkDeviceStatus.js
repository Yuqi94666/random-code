function checkDeviceStatus() {
    const deviceName = window.location.pathname.split('/').pop();
    return fetch('https://dsapi.vodafone.com.au/device/postpaid/' + deviceName + '?serviceType=New')
        .then(function (res) { return res.json(); })
        .then(function (data) {
            var deviceStockStatus = data.deviceStockStatus;
            var deviceConfig = data.deviceConfig;

            // Extract SKUs
            var skuByColorCapacity = extractSKUDetails(deviceConfig);

            // Prepare all stock status fetches
            var stockStatusByColorCapacity = {};
            var fetchPromises = [];
            for (var color in skuByColorCapacity) {
                stockStatusByColorCapacity[color] = {};
                for (var capacity in skuByColorCapacity[color]) {
                    (function (color, capacity, sku) {
                        var p = fetch('https://dsapi.vodafone.com.au/inventory/availability/' + sku)
                            .then(function (res) { return res.json(); })
                            .then(function (data) {
                                stockStatusByColorCapacity[color][capacity] = data.stockStatus;
                            })
                            .catch(function () {
                                stockStatusByColorCapacity[color][capacity] = 'Unknown';
                            });
                        fetchPromises.push(p);
                    })(color, capacity, skuByColorCapacity[color][capacity]);
                }
            }

            // Wait for all stock status fetches to complete
            return Promise.all(fetchPromises).then(function () {
                var deviceResult = {
                    deviceStockStatus: deviceStockStatus,
                    skuByColorCapacity: skuByColorCapacity,
                    stockStatusByColorCapacity: stockStatusByColorCapacity
                };
                console.log('Processed device details:', deviceResult);
                return deviceResult;
            });
        })
        .catch(function (error) {
            console.error('Error fetching device status:', error);
            throw error;
        });
}

function extractSKUDetails(deviceConfig) {
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
}

function checkDeviceStatus() {
    const deviceName = window.location.pathname.split('/').pop();
    return fetch('https://dsapi.vodafone.com.au/device/postpaid/' + deviceName + '?serviceType=New')
        .then(function (res) { return res.json(); })
        .then(function (data) {
            var deviceStockStatus = data.deviceStockStatus;
            var deviceConfig = data.deviceConfig;

            // Extract SKUs
            var skuByColorCapacity = extractSKUDetails(deviceConfig);

            // Prepare all stock status fetches
            var stockStatusByColorCapacity = {};
            var fetchPromises = [];
            for (var color in skuByColorCapacity) {
                stockStatusByColorCapacity[color] = {};
                for (var capacity in skuByColorCapacity[color]) {
                    (function (color, capacity, sku) {
                        var p = fetch('https://dsapi.vodafone.com.au/inventory/availability/' + sku)
                            .then(function (res) { return res.json(); })
                            .then(function (data) {
                                stockStatusByColorCapacity[color][capacity] = data.stockStatus;
                            })
                            .catch(function () {
                                stockStatusByColorCapacity[color][capacity] = 'Unknown';
                            });
                        fetchPromises.push(p);
                    })(color, capacity, skuByColorCapacity[color][capacity]);
                }
            }

            // Wait for all stock status fetches to complete
            return Promise.all(fetchPromises).then(function () {
                var deviceResult = {
                    deviceStockStatus: deviceStockStatus,
                    skuByColorCapacity: skuByColorCapacity,
                    stockStatusByColorCapacity: stockStatusByColorCapacity
                };
                console.log('Processed device details:', deviceResult);
                return deviceResult;
            });
        })
        .catch(function (error) {
            console.error('Error fetching device status:', error);
            throw error;
        });
}

function extractSKUDetails(deviceConfig) {
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
}

// gemeni
(() => {
    /********************************************************************
     * 1) CSS & Constants
     ********************************************************************/
    const STYLE_ID = "__stock_cross_style__";
    const CACHE_KEY_PREFIX = "__vodafone_stock_cache_";
    const CACHE_TTL = 10 * 60 * 1000;

    if (!document.getElementById(STYLE_ID)) {
        const style = document.createElement("style");
        style.id = STYLE_ID;
        style.textContent = `
.cross { position: relative !important; opacity: 0.55 !important; pointer-events: none !important; }
.cross::after {
content: "" !important; position: absolute !important; left: 10% !important;
top: 50% !important; width: 80% !important; height: 2px !important;
background: #111 !important; transform: translateY(-50%) rotate(-45deg) !important;
z-index: 2 !important; pointer-events: none !important;
}`;
        document.head.appendChild(style);
    }

    const getCacheKey = () => CACHE_KEY_PREFIX + window.location.pathname.split("/").pop();

    /********************************************************************
     * 2) LocalStorage Helpers
     ********************************************************************/
    function setCache(data) {
        const cacheObj = { timestamp: Date.now(), data: data };
        localStorage.setItem(getCacheKey(), JSON.stringify(cacheObj));
    }

    function getCache() {
        const raw = localStorage.getItem(getCacheKey());
        if (!raw) return null;
        try {
            const { timestamp, data } = JSON.parse(raw);
            if (Date.now() - timestamp > CACHE_TTL) {
                localStorage.removeItem(getCacheKey());
                return null;
            }
            return data;
        } catch (e) { return null; }
    }

    /********************************************************************
     * 3) Enhanced Fetch logic (with Cache)
     ********************************************************************/
    function checkDeviceStatus() {
        const cachedData = getCache();
        if (cachedData) {
            console.log("[cross] Using LocalStorage Cache :white_check_mark:");
            return Promise.resolve(cachedData);
        }

        const deviceName = window.location.pathname.split("/").pop();
        return fetch("https://dsapi.vodafone.com.au/device/postpaid/" + deviceName + "?serviceType=New")
            .then(res => res.json())
            .then(data => {
                const deviceConfig = data.deviceConfig;
                const stockStatusByColorCapacity = {};
                const fetchPromises = [];

                for (let color in deviceConfig) {
                    stockStatusByColorCapacity[color] = {};
                    for (let capacity in deviceConfig[color]) {
                        const sku = deviceConfig[color][capacity][0]?.SKU;
                        if (sku) {
                            const p = fetch("https://dsapi.vodafone.com.au/inventory/availability/" + sku)
                                .then(res => res.json())
                                .then(d => { stockStatusByColorCapacity[color][capacity] = d.stockStatus; })
                                .catch(() => { stockStatusByColorCapacity[color][capacity] = "Unknown"; });
                            fetchPromises.push(p);
                        }
                    }
                }

                return Promise.all(fetchPromises).then(() => {
                    const deviceResult = { stockStatusByColorCapacity };
                    setCache(deviceResult);
                    console.log("[cross] API Fetch Complete & Cached", deviceResult);
                    return deviceResult;
                });
            });
    }

    /********************************************************************
     * 4) UI & Application Logic
     ********************************************************************/
    function getSelectedColor() {
        const el = document.querySelector('input[name="color"]:checked') ||
            document.querySelector('input[data-testid$="-checked"]') ||
            document.querySelector('label[for="color"] strong');
        return (el?.value || el?.textContent || "").trim();
    }

    function applyCross(deviceResult) {
        if (!deviceResult) return;
        const selectedColor = getSelectedColor();
        const stockMap = deviceResult.stockStatusByColorCapacity[selectedColor];
        if (!stockMap) return;

        document.querySelectorAll('input[name="capacity"]').forEach(input => {
            const label = document.querySelector(`label[for="${CSS.escape(input.id)}"]`) || input.closest("label");
            if (!label) return;

            const isNonOrderable = stockMap[input.value.trim()] === "Non-Orderable";
            label.classList.toggle("cross", isNonOrderable);
        });
    }

    /********************************************************************
     * 5) Init & Watchers (Fixed for Optimizely)
     ********************************************************************/
    let __cachedResult = null;

    async function init() {
        __cachedResult = await checkDeviceStatus();


        let attempts = 0;
        const poll = setInterval(() => {
            applyCross(__cachedResult);
            if (document.querySelector(".cross") || attempts++ > 10) clearInterval(poll);
        }, 300);

        document.addEventListener("change", (e) => {
            if (e.target.name === "color" || e.target.name === "capacity") {
                applyCross(__cachedResult);
            }
        });


        const observer = new MutationObserver(() => applyCross(__cachedResult));
        observer.observe(document.body, { childList: true, subtree: true });


        window.__applyCross = () => applyCross(__cachedResult);
        window.__clearStockCache = () => localStorage.removeItem(getCacheKey());
    }

    init();
})();