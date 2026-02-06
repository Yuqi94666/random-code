const DCP16586CONSTANTS = {
  EXPERIMENT_ID: 'DCP16586',
  PAGES_INCLUDE: ['mobile/mobile-phones/clearance'],
  PAGES_EXCLUDE: ['&step=1', '&step=2', 'cart'],
  EXPERIMENT_VARIANT: 'personalisations',
  DEVICES: [],
  TARGET_ELEMENT_DESKTOP: '.regular.slider > div',
  TARGET_ELEMENT_MOBILE: '.slick-track > div',
  SAVINGS_AMOUNTS: ['Save $1,314', 'Save $800', 'Save $700'],
  TEMPLATE_INJECT_TYPE: 'before',
  CUSTOM_CSS: `
    .slider {
        justify-content: flex-start !important;
    }
    .DCP16586-info-extension .device-purple-badge {
        padding: 4px 16px;
        border-radius: 4px;
        background: #9C2AA0;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        margin: 0 16px 16px 0px;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0px;
        font-family: 'VodafoneRegularBold';
        height: 28px;
    }
    `,
  INIT_RETRY_INTERVAL: 500,
  INIT_MAX_RETRIES: 20
};

let DCP16586OBJ = {
  isMobile: function () {
    return window.innerWidth <= 768 || /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  },

  getTargetElement: function () {
    return this.isMobile()
      ? DCP16586CONSTANTS.TARGET_ELEMENT_MOBILE
      : DCP16586CONSTANTS.TARGET_ELEMENT_DESKTOP;
  },

  getParentURL: function () {
    try {
      return (window.parent && window.parent !== window) ? window.parent.location.href : window.location.href;
    } catch (e) {
      return window.location.href;
    }
  },

  getParentPathname: function () {
    try {
      return (window.parent && window.parent !== window) ? window.parent.location.pathname : window.location.pathname;
    } catch (e) {
      return window.location.pathname;
    }
  },

  shouldRunOnCurrentPage: function () {
    const parentUrl = this.getParentURL().toLowerCase();
    const parentPath = this.getParentPathname().toLowerCase();

    const isExcluded = DCP16586CONSTANTS.PAGES_EXCLUDE.some(excludedUrl =>
      parentUrl.includes(excludedUrl.toLowerCase())
    );

    if (isExcluded) return false;

    if (DCP16586CONSTANTS.PAGES_INCLUDE.length > 0) {
      return DCP16586CONSTANTS.PAGES_INCLUDE.some(includedUrl =>
        parentUrl.includes(includedUrl.toLowerCase()) ||
        parentPath.includes(includedUrl.toLowerCase())
      );
    }
    return true;
  },

  applyChanges: function (el) {
    try {
      const docContext = el.ownerDocument || document;

      console.log('DCP16586: Device type:', this.isMobile() ? 'Mobile' : 'Desktop');
      console.log('DCP16586: Applying changes to document:', docContext);

      this.buildCSS(docContext);
      this.buildTemplate(docContext);

    } catch (error) {
      console.error('DCP16586: Error in applyChanges:', error);
      this.tracking('error applyChanges');
    }
  },

  tracking: function (value) {
    try {
      if (typeof dataLayer !== 'undefined' && dataLayer) {
        croWD.utils.launchTracking(DCP16586CONSTANTS.EXPERIMENT_ID, value, DCP16586CONSTANTS.EXPERIMENT_VARIANT, '');
      }
    } catch (error) {
      console.error('DCP16586: Tracking error:', error);
    }
  },

  buildCSS: function (doc) {
    try {
      const styleId = `${DCP16586CONSTANTS.EXPERIMENT_ID}-styles`;

      if (doc.getElementById(styleId)) {
        console.log('DCP16586: CSS already exists in this context.');
        return;
      }

      const styleSheet = doc.createElement('style');
      styleSheet.id = styleId;
      styleSheet.type = 'text/css';
      styleSheet.innerHTML = DCP16586CONSTANTS.CUSTOM_CSS;

      (doc.head || doc.getElementsByTagName('head')[0]).appendChild(styleSheet);
      console.log("DCP16586: CSS successfully injected.");
    } catch (error) {
      console.error('DCP16586: Error in buildCSS:', error);
    }
  },
  buildTemplate: function (doc) {
    try {
      const targetSelector = this.getTargetElement();
      let mainElements = doc.querySelectorAll(targetSelector);

      console.log("DCP16586: Cards found:", mainElements.length);

      mainElements.forEach((card, index) => {
        if (card.querySelector('.DCP16586-info-extension')) return;

        const cardBrand = card.querySelector('h2');
        const cardDeviceName = card.querySelector('h2 > div+div').textContent.trim();
        console.log("DCP16586: Card brand found:", cardBrand ? cardBrand.textContent : "None");
        console.log("DCP16586: Card name found:", cardDeviceName);

        if (!cardBrand) return;
        const matchedDevice = DCP16586CONSTANTS.DEVICES.find(device => device.name === cardDeviceName);
        if (!matchedDevice || !matchedDevice.discountedRecurringCharge) {
          console.warn(`DCP16586: No matching device data for "${cardDeviceName}"`);
          return;
        }
        const savingsAmount = (matchedDevice.recurringCharge - matchedDevice.discountedRecurringCharge) * 36;
        const savingsText = `Save $${savingsAmount.toFixed(2)}`;
        console.log();

        let templateHTML = `<div class="DCP16586-info-extension">
          <div class="device-purple-badge">${savingsText}</div>
        </div>`;

        switch (DCP16586CONSTANTS.TEMPLATE_INJECT_TYPE) {
          case 'before':
            cardBrand.insertAdjacentHTML('beforebegin', templateHTML);
            break;
          case 'after':
            cardBrand.insertAdjacentHTML('afterend', templateHTML);
            break;
          default:
            cardBrand.insertAdjacentHTML('afterbegin', templateHTML);
        }
      });
    } catch (error) {
      console.error('DCP16586: Error in buildTemplate:', error);
    }
  },

  waitForElement: function () {
    let rC = 0;
    let int = setInterval(() => {
      const targetSelector = this.getTargetElement();
      const el = document.querySelector(targetSelector);

      if (el) {
        clearInterval(int);
        this.applyChanges(el);
      } else {
        rC++;
        if (rC >= DCP16586CONSTANTS.INIT_MAX_RETRIES) {
          clearInterval(int);
          console.error('DCP16586: Element not found');
        }
      }
    }, DCP16586CONSTANTS.INIT_RETRY_INTERVAL);
  },

  //   init: async function () {
  //     if (!this.shouldRunOnCurrentPage()) return;
  //     try {
  //       const response = await fetch('https://api.vodafone.com.au/device/postpaid?serviceType=New');
  //       const data = await response.json();

  //       DCP16586OBJ.DEVICES = data.deviceListing.devices.map(device => ({
  //         name: device.name,
  //         recurringCharge: device.recurringCharge,
  //         discountedRecurringCharge: device.discountedRecurringCharge || null
  //       }));
  //     } catch (error) {
  //       console.error('Error fetching device data:', error);
  //       return [];
  //     }
  //     this.waitForElement();
  //   }
  // };

  init() {
    if (!this.shouldRunOnCurrentPage()) return;

    return fetch('https://api.vodafone.com.au/device/postpaid?serviceType=New')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(({ deviceListing }) => {
        const devices = (deviceListing && deviceListing.devices) || [];
        DCP16586OBJ.DEVICES = devices.map(device => ({
          name: device.name,
          recurringCharge: device.recurringCharge,
          discountedRecurringCharge: device.discountedRecurringCharge || null
        }));
      })
      .catch(error => {
        console.error('Error fetching device data:', error);
        DCP16586OBJ.DEVICES = [];
        return [];
      })
      .then(() => {
        this.waitForElement();
      });
  },
}

  DCP16586OBJ.init();