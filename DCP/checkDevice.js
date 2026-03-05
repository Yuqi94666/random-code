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
      }
    `;
		document.head.appendChild(style);
	}

	const getCacheKey = function () {
		return CACHE_KEY_PREFIX + window.location.pathname.split("/").pop();
	};

	/********************************************************************
	 * 2) LocalStorage Helpers
	 ********************************************************************/
	function setCache(data) {
		try {
			const cacheObj = { timestamp: Date.now(), data: data };
			localStorage.setItem(getCacheKey(), JSON.stringify(cacheObj));
		} catch (e) { console.warn("[cross] Cache write failed", e); }
	}

	function getCache() {
		try {
			const raw = localStorage.getItem(getCacheKey());
			if (!raw) return null;
			const parsed = JSON.parse(raw);
			if (Date.now() - parsed.timestamp > CACHE_TTL) {
				localStorage.removeItem(getCacheKey());
				return null;
			}
			return parsed.data;
		} catch (e) { return null; }
	}

	/********************************************************************
	 * 3) Fetch Logic (Using .then)
	 ********************************************************************/
	function checkDeviceStatus() {
		const cachedData = getCache();
		if (cachedData) {
			console.log("[cross] Using LocalStorage Cache :white_check_mark:");
			return Promise.resolve(cachedData); // 返回已解析的 Promise
		}

		const deviceName = window.location.pathname.split("/").pop();
		console.log("[cross] Fetching API data...");

		return fetch("https://dsapi.vodafone.com.au/device/postpaid/" + deviceName + "?serviceType=New")
			.then(function (res) { return res.json(); })
			.then(function (data) {
				const deviceConfig = data.deviceConfig;
				const stockStatusMap = {};
				const fetchPromises = [];

				for (let color in deviceConfig) {
					stockStatusMap[color] = {};
					for (let capacity in deviceConfig[color]) {
						const sku = deviceConfig[color][capacity][0] && deviceConfig[color][capacity][0].SKU;
						if (sku) {
							const p = fetch("https://dsapi.vodafone.com.au/inventory/availability/" + sku)
								.then(function (res) { return res.json(); })
								.then(function (d) { stockStatusMap[color][capacity] = d.stockStatus; })
								.catch(function () { stockStatusMap[color][capacity] = "Unknown"; });
							fetchPromises.push(p);
						}
					}
				}

				return Promise.all(fetchPromises).then(function () {
					const result = { stockStatusByColorCapacity: stockStatusMap };
					setCache(result);
					return result;
				});
			});
	}

	/********************************************************************
	 * 4) UI Application Logic
	 ********************************************************************/
	function getSelectedColor() {
		const el = document.querySelector('input[name="color"]:checked') ||
			document.querySelector('input[data-testid$="-checked"]') ||
			document.querySelector('label[for="color"] strong');
		return (el && (el.value || el.textContent) || "").trim();
	}

	function applyCross(deviceResult) {
		if (!deviceResult) return;
		const selectedColor = getSelectedColor();
		const stockMap = deviceResult.stockStatusByColorCapacity[selectedColor];
		if (!stockMap) return;

		const inputs = document.querySelectorAll('input[name="capacity"]');
		for (let i = 0; i < inputs.length; i++) {
			const input = inputs[i];
			const label = document.querySelector('label[for="' + CSS.escape(input.id) + '"]') || input.closest("label");
			if (label) {
				const isNonOrderable = stockMap[input.value.trim()] === "Non-Orderable";
				if (isNonOrderable) {
					label.classList.add("cross");
				} else {
					label.classList.remove("cross");
				}
			}
		}
	}

	/********************************************************************
	 * 5) Execution (Initialization)
	 ********************************************************************/
	let __globalResult = null;

	function init() {
		checkDeviceStatus().then(function (deviceResult) {
			__globalResult = deviceResult;
			let attempts = 0;
			const poll = setInterval(function () {
				applyCross(__globalResult);
				if (document.querySelector(".cross") || attempts++ > 15) {
					clearInterval(poll);
				}
			}, 300);

			document.addEventListener("change", function (e) {
				if (e.target.name === "color" || e.target.name === "capacity") {
					applyCross(__globalResult);
				}
			});
			const observer = new MutationObserver(function () {
				applyCross(__globalResult);
			});
			observer.observe(document.body, { childList: true, subtree: true });

			window.__applyCross = function () { applyCross(__globalResult); };
		}).catch(function (err) {
			console.error("[cross] Init failed", err);
		});
	}

	init();
})();


// deepseek
(() => {
	/********************************************************************
	 * 0) 
	 ********************************************************************/
	const STORAGE_PREFIX = "__vodafone_device_";
	const CACHE_TTL = 24 * 60 * 60 * 1000; 

	function getCachedDeviceData(deviceName) {
		try {
			const key = STORAGE_PREFIX + deviceName;
			const stored = localStorage.getItem(key);
			if (!stored) return null;
			const parsed = JSON.parse(stored);
			if (Date.now() - parsed.timestamp < CACHE_TTL) {
				return parsed.data; 
			} else {
				localStorage.removeItem(key); 
			}
		} catch (e) {
			console.warn("[cross] reading failed", e);
		}
		return null;
	}

	function setCachedDeviceData(deviceName, data) {
		try {
			const key = STORAGE_PREFIX + deviceName;
			const toStore = {
				timestamp: Date.now(),
				data: data
			};
			localStorage.setItem(key, JSON.stringify(toStore));
		} catch (e) {
			console.warn("[cross] write failed", e);
		}
	}

	/********************************************************************
	 * 1) CSS: inject cross style (only once)
	 ********************************************************************/
	const STYLE_ID = "__stock_cross_style__";
	if (!document.getElementById(STYLE_ID)) {
		const style = document.createElement("style");
		style.id = STYLE_ID;
		style.textContent = `
      .cross {
        position: relative !important;
        opacity: 0.55 !important;
      }
      .cross::after {
        content: "" !important;
        position: absolute !important;
        left: 10% !important;
        width: 100% !important;
        height: 2px !important;
        background: #111 !important;
        transform-origin: center !important;
        z-index: 2 !important;
        pointer-events: none !important;
      }
      .cross::before { transform: translateY(-50%) rotate(45deg) !important; }
      .cross::after  { transform: translateY(-50%) rotate(-45deg) !important; }
    `;
		document.head.appendChild(style);
	}

	/********************************************************************
	 * 
	 ********************************************************************/
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

	function checkDeviceStatus(ignoreCache = false) {
		const deviceName = window.location.pathname.split("/").pop();

		if (!ignoreCache) {
			const cached = getCachedDeviceData(deviceName);
			if (cached) {
				console.log("[cross] 使用缓存数据 for", deviceName);
				return Promise.resolve(cached);
			}
		}

		return fetch(
			"https://dsapi.vodafone.com.au/device/postpaid/" +
			deviceName +
			"?serviceType=New"
		)
			.then(function (res) {
				return res.json();
			})
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
							var p = fetch(
								"https://dsapi.vodafone.com.au/inventory/availability/" + sku
							)
								.then(function (res) {
									return res.json();
								})
								.then(function (data) {
									stockStatusByColorCapacity[color][capacity] = data.stockStatus;
								})
								.catch(function () {
									stockStatusByColorCapacity[color][capacity] = "Unknown";
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
						stockStatusByColorCapacity: stockStatusByColorCapacity,
					};
					console.log("Processed device details:", deviceResult);
					setCachedDeviceData(deviceName, deviceResult);

					return deviceResult;
				});
			})
			.catch(function (error) {
				console.error("Error fetching device status:", error);
				throw error;
			});
	}

	/********************************************************************
	 * 3) UI logic: detect selected color
	 ********************************************************************/
	function getSelectedColor() {
		// A) Standard: checked radio input
		const checkedRadio = document.querySelector('input[name="color"]:checked');
		if (checkedRadio && checkedRadio.value) return checkedRadio.value.trim();

		// B) Your site hint: data-testid ends with "-checked"
		const checkedByTestId = document.querySelector(
			'input[name="color"][data-testid$="-checked"], input[data-testid^="color-input-"][data-testid$="-checked"]'
		);
		if (checkedByTestId && checkedByTestId.value) return checkedByTestId.value.trim();

		// C) Label text: <label for="color">...<strong>COLOR</strong></label>
		const labelStrong = document.querySelector('label[for="color"] strong');
		if (labelStrong && labelStrong.textContent) return labelStrong.textContent.trim();

		return "";
	}

	/********************************************************************
	 * 4) Capacity mapping: add cross to Non-Orderable capacities
	 ********************************************************************/
	const CAPACITY_INPUT_SELECTOR = 'input[name="capacity"]';

	function getLabelForInput(input) {
		if (!input || !input.id) return null;
		return document.querySelector(`label[for="${CSS.escape(input.id)}"]`);
	}

	function applyCrossForSelectedColor(deviceResult) {
		if (!deviceResult || !deviceResult.stockStatusByColorCapacity) return;

		const selectedColor = getSelectedColor();
		if (!selectedColor) {
			console.warn("[cross] No selected color detected yet.");
			return;
		}

		const stockByCapacity = deviceResult.stockStatusByColorCapacity[selectedColor];
		if (!stockByCapacity) {
			console.warn("[cross] No stock map found for color:", selectedColor);
			return;
		}

		const capacityInputs = Array.from(
			document.querySelectorAll(CAPACITY_INPUT_SELECTOR)
		);

		if (!capacityInputs.length) {
			console.warn(
				"[cross] No capacity inputs found. Update CAPACITY_INPUT_SELECTOR."
			);
			return;
		}

		// Clear old crosses
		capacityInputs.forEach((input) => {
			const target =
				getLabelForInput(input) || input.closest("label") || input.parentElement;
			if (target) target.classList.remove("cross");
		});

		// Apply crosses where status is Non-Orderable
		capacityInputs.forEach((input) => {
			const cap = (input.value || "").trim(); // expects "256GB" etc.
			const status = stockByCapacity[cap];

			if (status === "Non-Orderable") {
				const target =
					getLabelForInput(input) || input.closest("label") || input.parentElement;
				if (target) target.classList.add("cross");
			}
		});

		console.log("[cross] Applied for color:", selectedColor, stockByCapacity);
	}

	/********************************************************************
	 * 5) Init: run fetch, then attach listeners + observer
	 ********************************************************************/
	let __deviceResultCache = null;
	let __observer = null;

	function init() {
		console.log("[cross] Fetching device status...");
		return checkDeviceStatus().then((deviceResult) => {
			__deviceResultCache = deviceResult;

			// First apply
			applyCrossForSelectedColor(__deviceResultCache);
			requestAnimationFrame(() => applyCrossForSelectedColor(__deviceResultCache));

			// Change listeners
			document.addEventListener("change", (e) => {
				if (
					e.target &&
					(e.target.matches('input[name="color"]') ||
						e.target.matches(CAPACITY_INPUT_SELECTOR))
				) {
					applyCrossForSelectedColor(__deviceResultCache);
					requestAnimationFrame(() => applyCrossForSelectedColor(__deviceResultCache));
				}
			});

			// Mutation observer for React re-renders
			if (__observer) __observer.disconnect();
			__observer = new MutationObserver(() => {
				// throttle-ish: run once per frame
				if (init._raf) cancelAnimationFrame(init._raf);
				init._raf = requestAnimationFrame(() => {
					applyCrossForSelectedColor(__deviceResultCache);
				});
			});

			__observer.observe(document.body, { childList: true, subtree: true });

			console.log("[cross] Initialized :white_check_mark:");
			console.log("[cross] Tip: call window.__applyCross() to re-run manually.");
			return deviceResult;
		});
	}

	// Expose helpers for quick testing
	window.__deviceCross = {
		init,
		checkDeviceStatus: (ignoreCache) => checkDeviceStatus(ignoreCache),
		apply: () => __deviceResultCache && applyCrossForSelectedColor(__deviceResultCache),
		getSelectedColor,
		stop: () => __observer && __observer.disconnect(),
		// 新增：手动清除当前设备缓存
		clearCache: (deviceName) => {
			const name = deviceName || window.location.pathname.split("/").pop();
			localStorage.removeItem(STORAGE_PREFIX + name);
			console.log("[cross] 缓存已清除 for", name);
		}
	};
	window.__applyCross = window.__deviceCross.apply;

	// Auto run now
	init();
})();