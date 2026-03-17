(() => {
  /********************************************************************
   * 0) Settings (edit if needed)
   ********************************************************************/
  const SETTINGS = {
    // Capacity radios: confirmed on your page as input[name="capacity"]
    CAPACITY_INPUT_SELECTOR: 'input[name="capacity"]',
    COLOR_INPUT_SELECTOR: 'input[name="color"]',

    // Only log heavily when true
    VERBOSE: true,

    // If true, apply cross only to visible targets (helps if page has duplicates)
    VISIBLE_ONLY: false,
  };

  const log = (...args) => console.log("%c[cross]", "color:#7b61ff;font-weight:700", ...args);
  const warn = (...args) => console.warn("%c[cross]", "color:#d97706;font-weight:700", ...args);
  const err = (...args) => console.error("%c[cross]", "color:#dc2626;font-weight:700", ...args);

  const vlog = (...args) => SETTINGS.VERBOSE && log(...args);

  /********************************************************************
   * 1) CSS: inject cross style (only once)
   * NOTE: You said CSS doesn't matter; still keep minimal for visibility
   ********************************************************************/
  const STYLE_ID = "__stock_cross_style__";
  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .cross { position: relative !important; opacity: 0.55 !important; }
      .cross::before, .cross::after {
        content: "" !important;
        position: absolute !important;
        left: 10% !important;
        top: 50% !important;
        width: 80% !important;
        height: 2px !important;
        background: #111 !important;
        z-index: 9999 !important;
        pointer-events: none !important;
        transform-origin: center !important;
      }
      .cross::before { transform: translateY(-50%) rotate(45deg) !important; }
      .cross::after  { transform: translateY(-50%) rotate(-45deg) !important; }
    `;
    document.head.appendChild(style);
    vlog("Injected CSS");
  }

  /********************************************************************
   * 2) Fetch logic (your code)
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

  function checkDeviceStatus() {
    const deviceName = window.location.pathname.split("/").pop();
    vlog("deviceName:", deviceName);

    return fetch("https://dsapi.vodafone.com.au/device/postpaid/" + deviceName + "?serviceType=New")
      .then((res) => res.json())
      .then((data) => {
        var deviceStockStatus = data.deviceStockStatus;
        var deviceConfig = data.deviceConfig;

        var skuByColorCapacity = extractSKUDetails(deviceConfig);

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
          var deviceResult = {
            deviceStockStatus,
            skuByColorCapacity,
            stockStatusByColorCapacity,
          };
          log("Processed device details:", deviceResult);
          return deviceResult;
        });
      })
      .catch((error) => {
        err("Error fetching device status:", error);
        throw error;
      });
  }

  /********************************************************************
   * 3) Selected color detection (with detailed logs)
   ********************************************************************/
  function getSelectedColor() {
    const checkedRadio = document.querySelector(`${SETTINGS.COLOR_INPUT_SELECTOR}:checked`);
    if (checkedRadio?.value) {
      vlog("Selected color from :checked:", checkedRadio.value);
      return checkedRadio.value.trim();
    }

    const checkedByTestId = document.querySelector(
      'input[name="color"][data-testid$="-checked"], input[data-testid^="color-input-"][data-testid$="-checked"]'
    );
    if (checkedByTestId?.value) {
      vlog("Selected color from data-testid *-checked:", checkedByTestId.value, checkedByTestId.getAttribute("data-testid"));
      return checkedByTestId.value.trim();
    }

    const labelStrong = document.querySelector('label[for="color"] strong');
    if (labelStrong?.textContent) {
      vlog("Selected color from label strong:", labelStrong.textContent);
      return labelStrong.textContent.trim();
    }

    warn("Could not detect selected color");
    return "";
  }

  /********************************************************************
   * 4) Capacity targeting helpers (robust + logs)
   ********************************************************************/
  function isVisible(el) {
    return !!(el && el.offsetParent !== null);
  }

  function getLabelForInput(input) {
    if (!input?.id) return null;
    return document.querySelector(`label[for="${CSS.escape(input.id)}"]`);
  }

  // Return all possible "targets" for the cross class (label/wrapper)
  function getTargetsForCapacityInput(input) {
    const targets = [];

    // A) <label for="ID">
    const byFor = getLabelForInput(input);
    if (byFor) targets.push(byFor);

    // B) label wrapping input
    const wrapped = input.closest("label");
    if (wrapped) targets.push(wrapped);

    // C) sibling label in same container
    const siblingLabel = input.parentElement?.querySelector?.(`label[for="${CSS.escape(input.id)}"]`);
    if (siblingLabel) targets.push(siblingLabel);

    // D) common wrapper
    if (input.parentElement) targets.push(input.parentElement);

    // Deduplicate
    const uniq = [];
    targets.forEach(t => { if (t && !uniq.includes(t)) uniq.push(t); });

    return SETTINGS.VISIBLE_ONLY ? uniq.filter(isVisible) : uniq;
  }

  function capacityGroupKey(input) {
    // Helps detect duplicates / different render areas
    const rg = input.closest('[role="radiogroup"]');
    const container = input.closest('[data-testid*="capacity"], [data-testid*="storage"], [id*="capacity"], [id*="storage"]');
    return [
      rg ? `rg:${rg.id || rg.getAttribute("data-testid") || "?"}` : "rg:na",
      container ? `wrap:${container.getAttribute("data-testid") || container.id || container.className || "?"}` : "wrap:na",
    ].join(" | ");
  }

  function debugCapacityInputs() {
    const inputs = [...document.querySelectorAll(SETTINGS.CAPACITY_INPUT_SELECTOR)];
    log("Capacity inputs found:", inputs.length, "| selector:", SETTINGS.CAPACITY_INPUT_SELECTOR);

    const groupCount = {};
    inputs.forEach(i => {
      const k = capacityGroupKey(i);
      groupCount[k] = (groupCount[k] || 0) + 1;
    });

    log("Capacity group summary (duplicates indicator):", groupCount);

    inputs.forEach(i => {
      const label = getLabelForInput(i);
      const targets = getTargetsForCapacityInput(i);
      vlog("Capacity input:", {
        value: i.value,
        id: i.id,
        checked: i.checked,
        hiddenInput: i.offsetParent === null,
        group: capacityGroupKey(i),
        labelFound: !!label,
        targetsCount: targets.length,
        targets: targets.map(t => ({
          tag: t.tagName,
          class: t.className,
          hidden: t.offsetParent === null,
          hasCross: t.classList.contains("cross"),
        })),
      });
    });

    return inputs;
  }

  function debugOneCapacity(value = "256GB") {
    const inputs = [...document.querySelectorAll(`${SETTINGS.CAPACITY_INPUT_SELECTOR}[value="${CSS.escape(value)}"]`)];
    log(`Debug capacity "${value}" inputs found:`, inputs.length);

    inputs.forEach((i, idx) => {
      const label = getLabelForInput(i);
      const targets = getTargetsForCapacityInput(i);
      log(`[${value}] #${idx + 1}`, {
        value: i.value,
        id: i.id,
        name: i.name,
        checked: i.checked,
        hiddenInput: i.offsetParent === null,
        group: capacityGroupKey(i),
        labelFound: !!label,
        targetsCount: targets.length,
      });
      targets.forEach((t, j) => {
        log(`   target[${j}]`, {
          tag: t.tagName,
          class: t.className,
          hidden: t.offsetParent === null,
          hasCross: t.classList.contains("cross"),
          outerHTML: t.outerHTML?.slice(0, 140) + "…",
        });
      });
    });
  }

  /********************************************************************
   * 5) Apply cross logic (with detailed step logs)
   ********************************************************************/
  function applyCrossForSelectedColor(deviceResult) {
    if (!deviceResult?.stockStatusByColorCapacity) {
      warn("No deviceResult/stockStatusByColorCapacity yet");
      return;
    }

    const selectedColor = getSelectedColor();
    log("selectedColor:", selectedColor);

    if (!selectedColor) return;

    const stockByCapacity = deviceResult.stockStatusByColorCapacity[selectedColor];
    if (!stockByCapacity) {
      warn("No stock map found for color:", selectedColor, "Available colors:", Object.keys(deviceResult.stockStatusByColorCapacity || {}));
      return;
    }

    // Log what we expect to apply
    log("[stock] Map for selected color:", stockByCapacity);

    // Collect capacity inputs (maybe duplicates)
    const inputs = [...document.querySelectorAll(SETTINGS.CAPACITY_INPUT_SELECTOR)];
    log("Capacity inputs selected:", inputs.length);

    // Clear crosses only on targets related to those inputs
    let cleared = 0;
    inputs.forEach(input => {
      const targets = getTargetsForCapacityInput(input);
      targets.forEach(t => {
        if (t.classList.contains("cross")) {
          t.classList.remove("cross");
          cleared++;
        }
      });
    });
    vlog("Cleared previous cross classes:", cleared);

    // Apply crosses for Non-Orderable capacities
    let appliedCount = 0;
    let attempted = 0;

    Object.keys(stockByCapacity).forEach(capKey => {
      const status = stockByCapacity[capKey];

      // Log each capacity status
      vlog(`Capacity status: ${capKey} -> ${status}`);

      if (status !== "Non-Orderable") return;

      const matches = [...document.querySelectorAll(`${SETTINGS.CAPACITY_INPUT_SELECTOR}[value="${CSS.escape(capKey)}"]`)];
      log(`Non-Orderable capacity "${capKey}" -> matching inputs:`, matches.length);

      matches.forEach(input => {
        attempted++;
        const targets = getTargetsForCapacityInput(input);

        if (!targets.length) {
          warn("No targets found for input:", { value: input.value, id: input.id, group: capacityGroupKey(input) });
          return;
        }

        targets.forEach(t => {
          t.classList.add("cross");
          appliedCount++;
          vlog("Applied cross to target:", {
            cap: capKey,
            inputId: input.id,
            targetTag: t.tagName,
            targetClass: t.className,
            hidden: t.offsetParent === null,
          });
        });
      });
    });

    log(`[result] attempted inputs: ${attempted}, cross targets applied: ${appliedCount}`);
    log("[cross] Applied for color:", selectedColor, stockByCapacity);

    // Extra: check if any .cross exists after apply
    const crossEls = document.querySelectorAll(".cross");
    log("Total elements with .cross after apply:", crossEls.length);

    // Extra: highlight first few crossed elements in console
    if (crossEls.length && SETTINGS.VERBOSE) {
      const sample = [...crossEls].slice(0, 5).map(el => ({
        tag: el.tagName,
        class: el.className,
        hidden: el.offsetParent === null,
        html: el.outerHTML.slice(0, 120) + "…",
      }));
      vlog("Sample crossed elements:", sample);
    }
  }

  /********************************************************************
   * 6) Init: fetch then attach listeners + observer
   ********************************************************************/
  let __deviceResultCache = null;
  let __observer = null;

  function init() {
    log("Init: fetching device status...");
    return checkDeviceStatus().then(deviceResult => {
      __deviceResultCache = deviceResult;

      // Apply now and next frame
      applyCrossForSelectedColor(__deviceResultCache);
      requestAnimationFrame(() => applyCrossForSelectedColor(__deviceResultCache));

      // Listen changes
      document.addEventListener("change", e => {
        if (!e.target) return;
        if (e.target.matches(SETTINGS.COLOR_INPUT_SELECTOR) || e.target.matches(SETTINGS.CAPACITY_INPUT_SELECTOR)) {
          vlog("Change event:", { name: e.target.name, value: e.target.value, checked: e.target.checked });
          applyCrossForSelectedColor(__deviceResultCache);
          requestAnimationFrame(() => applyCrossForSelectedColor(__deviceResultCache));
        }
      }, true);

      // Observe DOM changes (React)
      if (__observer) __observer.disconnect();
      __observer = new MutationObserver(mutations => {
        // throttle to one per frame
        if (init._raf) cancelAnimationFrame(init._raf);
        init._raf = requestAnimationFrame(() => applyCrossForSelectedColor(__deviceResultCache));
      });
      __observer.observe(document.body, { childList: true, subtree: true });

      log("Initialized ✅");
      log("Commands: __applyCross(), __deviceCross.debugCapacities(), __deviceCross.debugOne('256GB')");
      return deviceResult;
    });
  }

  /********************************************************************
   * 7) Expose helpers
   ********************************************************************/
  window.__deviceCross = {
    init,
    apply: () => __deviceResultCache && applyCrossForSelectedColor(__deviceResultCache),
    stop: () => __observer && __observer.disconnect(),
    getSelectedColor,
    debugCapacities: debugCapacityInputs,
    debugOne: debugOneCapacity,
    settings: SETTINGS,
    get deviceResult() { return __deviceResultCache; }
  };
  window.__applyCross = window.__deviceCross.apply;

  // Auto-run once
  init();
})();