'use strict';
// if (typeof extension === 'undefined') {
//   var extension = {
//     id: 'DCP18198contextual',
//     subscriber: 'iPhoneNPIEmitter',
//     devicesList: JSON.stringify([
//       {
//         id: 'IPH_17_PRO',
//         title: 'EOFY deals on iPhone 17 Pro.',
//         description: 'Take another look and save with our EOFY offers.',
//         tandc: 'Ends 30/06. T&amp;C apply.',
//         image: 'https://www.vodafone.com.au/images/merch/events/eofy-2026/generic/1441-eofy-iphone-17-pro-inline-desktop.webp',
//         image_mobile: 'https://www.vodafone.com.au/images/merch/events/eofy-2026/generic/1441-eofy-iphone-17-pro-inline-mobile.webp',
//         cta_text: 'Shop now',
//         cta_link: 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro'
//       },
//       {
//         id: 'IPH_17_PRO_MAX',
//         title: 'EOFY deals on iPhone 17 Pro Max.',
//         description: 'Take another look and save with our EOFY offers.',
//         tandc: 'Ends 30/06. T&amp;C apply.',
//         image: 'https://www.vodafone.com.au/images/merch/events/eofy-2026/generic/1441-eofy-iphone-17-pro-max-inline-desktop.webp',
//         image_mobile: 'https://www.vodafone.com.au/images/merch/events/eofy-2026/generic/1441-eofy-iphone-17-pro-max-inline-mobile.webp',
//         cta_text: 'Shop now',
//         cta_link: 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro-max'
//       }
//     ])
//   };
// }

var extensionRoot = typeof extension !== 'undefined' && extension ? extension : {};
var extensionId = extensionRoot.id || extensionRoot.extensionID || 'DCP18198contextual';

var CONTEXTUALCONSTANTS = {
  EXPERIMENT_ID: extensionRoot.extensionID || extensionId,
  EXPERIMENT_VARIANT: 'extension',
  TRIGGER_NAME: extensionRoot.subscriber,
  STORAGE_KEY: 'viewedProducts',
  TARGET_SELECTOR: 'vha-previously-viewed',
  BANNER_ID: extensionId + '-extension',
  DEVICES_LIST: extensionRoot.devicesList,

  CUSTOM_CSS: `
        .${extensionId}-extension {
            display: block;
            padding: 48px 16px 32px;
            background-color: #f4f4f4;
            box-sizing: border-box;
        }

        .${extensionId}-extension .inline-banner {
            display: flex;
            align-items: stretch;
            width: 100%;
            min-height: 140px;
            max-width: 1180px;
            margin: auto;
            padding: 0;
            overflow: hidden;
            background: #fff;
            border: 1px solid #bebebe;
            border-radius: 16px;
            box-sizing: border-box;
        }

        .${extensionId}-extension .inline-banner__image {
            display: flex;
            flex: 0 0 280px;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: #f3f3f3;
            border-radius: 16px 0 0 16px;
        }

        .${extensionId}-extension .inline-banner__image-cta {
            position: relative;
            display: flex;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .${extensionId}-extension .inline-banner__image-link {
            display: block;
            width: 100%;
            min-height: 140px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }

        .${extensionId}-extension .inline-banner__mobile-image {
            display: none;
        }

        .${extensionId}-extension .inline-banner__container {
            display: flex;
            flex: 1 1 auto;
            align-items: center;
            width: 100%;
            padding: 32px;
            color: #333;
            box-sizing: border-box;
        }

        .${extensionId}-extension .inline-banner__content {
            display: flex;
            flex: 1 1 auto;
            flex-direction: column;
            justify-content: center;
            padding-right: 32px;
        }

        .${extensionId}-extension .inline-banner__title {
            margin-bottom: 8px;
            font-family: "VodafoneRegularBold", Arial, sans-serif;
            font-size: 28px;
            line-height: 34px;
        }

        .${extensionId}-extension .inline-banner__description {
            margin-bottom: 8px;
            font-family: "VodafoneRegular", Arial, sans-serif;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
        }

        .${extensionId}-extension .inline-banner__terms {
            margin-bottom: 0;
            font-family: "VodafoneRegular", Arial, sans-serif;
            font-size: 12px;
            line-height: 16px;
        }

        .${extensionId}-extension .inline-banner__cta {
            display: flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
        }

        .${extensionId}-extension .inline-banner__button {
            display: inline-block;
            padding: 15px 20px;
            color: #fff;
            background: #e60000;
            border: none;
            border-radius: 6px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
            font-family: "VodafoneRegular", Arial, sans-serif;
            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
            text-align: center;
            text-decoration: none;
            white-space: nowrap;
        }

        .${extensionId}-extension .inline-banner__button:hover {
            background: #b80000;
        }

        .${extensionId}-extension .inline-banner__button:focus-visible,
        .${extensionId}-extension .inline-banner__image-link:focus-visible {
            outline: 3px solid #007c92;
            outline-offset: 3px;
        }

        @media (max-width: 768px) {
            .${extensionId}-extension {
                min-width: 235px;
                margin: auto;
                padding: 32px 16px;
            }

            .${extensionId}-extension .inline-banner {
                flex-direction: column;
                min-height: auto;
            }

            .${extensionId}-extension .inline-banner__image {
                position: relative;
                flex: 0 0 180px;
                width: 100%;
                border-radius: 16px 16px 0 0;
            }

            .${extensionId}-extension .inline-banner__image-link {
                min-height: 180px;
                background-image: none !important;
            }

            .${extensionId}-extension .inline-banner__mobile-image {
                position: absolute;
                inset: 0;
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .${extensionId}-extension .inline-banner__container {
                flex-direction: column;
                align-items: stretch;
                padding: 24px 16px;
            }

            .${extensionId}-extension .inline-banner__content {
                padding-right: 0;
                text-align: center;
            }

            .${extensionId}-extension .inline-banner__title {
                margin-bottom: 8px;
                font-size: 20px;
                line-height: 28px;
            }

            .${extensionId}-extension .inline-banner__description {
                margin-bottom: 8px;
                font-size: 16px;
                line-height: 22px;
            }

            .${extensionId}-extension .inline-banner__terms {
                font-size: 12px;
                line-height: 18px;
            }

            .${extensionId}-extension .inline-banner__cta {
                width: 100%;
                padding-top: 16px;
            }

            .${extensionId}-extension .inline-banner__button {
                width: 100%;
                padding: 15px 18px;
                font-size: 18px;
                box-sizing: border-box;
            }
        }
    `
};

var CONTEXTUALOBJ = {
  devices: [],
  observer: null,
  matchedDevice: null,
  displayTrackedDeviceId: null,

  normalise: function (value) {
    return String(value || '').trim().toLowerCase();
  },

  parseDevicesList: function () {
    var rawDevices = CONTEXTUALCONSTANTS.DEVICES_LIST;
    croWD.debug('[contextual] rawDevices:', rawDevices);
    if (!rawDevices) {
      croWD.debug('[contextual] devicesList is empty');
      return [];
    }

    if (Array.isArray(rawDevices)) {
      return rawDevices;
    }

    try {
      var parsedDevices = JSON.parse(rawDevices);
      croWD.debug('[contextual] parsedDevices:', parsedDevices);
      if (!Array.isArray(parsedDevices)) {
        console.error('[contextual] devicesList is not an array:', parsedDevices);
        return [];
      }
      return parsedDevices;
    } catch (error) {
      console.error('[contextual] Failed to parse devicesList:', error, rawDevices);
      return [];
    }
  },

  getViewedProducts: function () {
    var rawViewedProducts;

    try {
      rawViewedProducts = localStorage.getItem(CONTEXTUALCONSTANTS.STORAGE_KEY);
    } catch (error) {
      console.error('[contextual] Unable to access localStorage:', error);
      return [];
    }

    if (!rawViewedProducts) {
      croWD.debug('[contextual] viewedProducts does not exist');
      return [];
    }

    try {
      var viewedProducts = JSON.parse(rawViewedProducts);

      if (Array.isArray(viewedProducts)) {
        return viewedProducts;
      }

      if (viewedProducts && Array.isArray(viewedProducts.products)) {
        return viewedProducts.products;
      }

      if (viewedProducts && Array.isArray(viewedProducts.viewedProducts)) {
        return viewedProducts.viewedProducts;
      }

      croWD.debug('[contextual] viewedProducts is not an array:', viewedProducts);
      return [];
    } catch (error) {
      console.error('[contextual] Failed to parse viewedProducts:', error, rawViewedProducts);
      return [];
    }
  },

  getViewedProductId: function (product) {
    if (typeof product === 'string' || typeof product === 'number') {
      return String(product);
    }

    if (!product || typeof product !== 'object') {
      return '';
    }
    return (
      product.id ||
      product.productId ||
      product.productID ||
      product.deviceId ||
      product.deviceID ||
      product.sku ||
      product.code ||
      product.productCode ||
      ''
    );
  },

  getMatchingDevice: function () {
    var viewedProducts =
      CONTEXTUALOBJ.getViewedProducts();

    croWD.debug('[contextual] viewedProducts:', viewedProducts);

    if (
      !Array.isArray(viewedProducts) ||
      viewedProducts.length === 0
    ) {
      croWD.debug('[contextual] viewedProducts is empty. No banner.');
      return null;
    }

    var viewedProductIds = viewedProducts
      .map(function (product) {
        return CONTEXTUALOBJ.normalise(
          CONTEXTUALOBJ.getViewedProductId(
            product
          )
        );
      })
      .filter(function (productId) {
        return Boolean(productId);
      });

    croWD.debug('[contextual] viewed product IDs:', viewedProductIds);

    var matchedDevice = CONTEXTUALOBJ.devices.find(
      function (configuredDevice) {
        if (
          !configuredDevice ||
          !configuredDevice.id
        ) {
          return false;
        }

        var configuredDeviceId =
          CONTEXTUALOBJ.normalise(
            configuredDevice.id
          );

        return (
          viewedProductIds.indexOf(
            configuredDeviceId
          ) !== -1
        );
      }
    );

    if (!matchedDevice) {
      croWD.debug('[contextual] No configured device matched viewedProducts');

      croWD.debug('[contextual] Configured device IDs:', CONTEXTUALOBJ.devices.map(
        function (device) {
          return device.id;
        }
      )
      );

      return null;
    }

    croWD.debug('[contextual] Matched device:', matchedDevice);

    return matchedDevice;
  },

  buildCSS: function () {
    var styleId = CONTEXTUALCONSTANTS.EXPERIMENT_ID + '-style';

    if (document.getElementById(styleId)) {
      return;
    }

    var style = document.createElement('style');

    style.id = styleId;
    style.type = 'text/css';


    var nonceElement = document.querySelector('style[nonce], script[nonce]');

    if (nonceElement) {
      var nonce = nonceElement.nonce || nonceElement.getAttribute('nonce');
      if (nonce) {
        style.setAttribute('nonce', nonce);
      }
    }

    style.textContent = CONTEXTUALCONSTANTS.CUSTOM_CSS;
    document.head.appendChild(style);
    croWD.debug('[contextual] CSS added');
  },
  createBanner: function (device) {
    var banner = document.createElement('section');

    banner.id = CONTEXTUALCONSTANTS.BANNER_ID;
    banner.className = CONTEXTUALCONSTANTS.EXPERIMENT_ID + '-extension';

    banner.innerHTML = `
      <div class="inline-banner">
        <div class="inline-banner__image">
          <div class="inline-banner__image-cta">
            <a
              class="inline-banner__image-link"
              href="${device.cta_link || '#'}"
              aria-label="${device.title || 'View offer'}"
              style="background-image: url('${device.image || ''}')"
            ></a>
            <img
              class="inline-banner__mobile-image"
              src="${device.image_mobile || ''}"
              alt="${device.title || ''}"
            />
          </div>
        </div>

        <div class="inline-banner__container">
          <div class="inline-banner__content">
            <div class="inline-banner__title">
              ${device.title || ''}
            </div>

            <div class="inline-banner__description">
              ${device.description || ''}
            </div>

            <div class="inline-banner__terms">
              ${device.tandc || ''}
            </div>
          </div>

          <div class="inline-banner__cta">
            <a
              class="inline-banner__button"
              href="${device.cta_link || '#'}"
              aria-label="${device.cta_text || 'Shop now'}"
            >
              ${device.cta_text || 'Shop now'}
            </a>
          </div>
        </div>
      </div>
    `;

    var imageLink = banner.querySelector('.inline-banner__image-link');
    var ctaButton = banner.querySelector('.inline-banner__button');

    if (imageLink) {
      imageLink.addEventListener('click', function () {
        CONTEXTUALOBJ.tracking('click image ' + device.id);
      });
    }

    if (ctaButton) {
      ctaButton.addEventListener('click', function () {
        CONTEXTUALOBJ.tracking('click cta ' + device.id);
      });
    }

    return banner;
  },

  populateBanner: function (banner, device) {
    var imageLink = banner.querySelector(
      '.inline-banner__image-link'
    );

    var mobileImage = banner.querySelector(
      '.inline-banner__mobile-image'
    );

    var titleElement = banner.querySelector(
      '.inline-banner__title'
    );

    var descriptionElement =
      banner.querySelector(
        '.inline-banner__description'
      );

    var termsElement = banner.querySelector(
      '.inline-banner__terms'
    );

    var ctaButton = banner.querySelector(
      '.inline-banner__button'
    );

    banner.setAttribute(
      'data-contextual-device-id',
      device.id
    );

    banner.setAttribute(
      'aria-label',
      device.title || 'Recommended offer'
    );

    if (imageLink) {
      imageLink.href = device.cta_link || '#';

      imageLink.style.backgroundImage =
        'url("' + (device.image || '') + '")';

      imageLink.setAttribute(
        'aria-label',
        device.title || 'View offer'
      );

      imageLink.onclick = function () {
        CONTEXTUALOBJ.tracking('click image ' + device.id);
      };
    }

    if (mobileImage) {
      mobileImage.src =
        device.image_mobile || '';

      mobileImage.alt = device.title || '';
    }

    if (titleElement) {
      titleElement.textContent =
        device.title || '';
    }

    if (descriptionElement) {
      descriptionElement.textContent =
        device.description || '';
    }

    if (termsElement) {

      termsElement.innerHTML =
        device.tandc || '';
    }

    if (ctaButton) {
      ctaButton.href =
        device.cta_link || '#';

      ctaButton.textContent =
        device.cta_text || 'Shop now';

      ctaButton.onclick = function () {
        CONTEXTUALOBJ.tracking('click cta ' + device.id);
      };
    }
  },

  injectBanner: function (device) {
    /*
     * Prevent duplicate banners.
     */
    var existingBanner =
      document.getElementById(
        CONTEXTUALCONSTANTS.BANNER_ID
      );

    if (existingBanner) {
      CONTEXTUALOBJ.populateBanner(
        existingBanner,
        device
      );

      croWD.debug(
        '[contextual] Existing banner updated:',
        device.id
      );

      return true;
    }

    var targetElement =
      document.querySelector(
        CONTEXTUALCONSTANTS.TARGET_SELECTOR
      );

    if (!targetElement) {
      croWD.debug(
        '[contextual] Target not available yet:',
        CONTEXTUALCONSTANTS.TARGET_SELECTOR
      );

      return false;
    }

    var banner = CONTEXTUALOBJ.createBanner(device);
    targetElement.replaceWith(banner);

    croWD.debug(
      '[contextual] Replaced previously viewed component:',
      device.id
    );

    if (
      CONTEXTUALOBJ.displayTrackedDeviceId !==
      device.id
    ) {
      CONTEXTUALOBJ.displayTrackedDeviceId =
        device.id;

      CONTEXTUALOBJ.tracking(
        'display ' + device.id
      );
    }

    return true;
  },

  waitForTarget: function (device) {

    if (CONTEXTUALOBJ.observer) {
      croWD.debug(
        '[contextual] Target observer already running'
      );

      return;
    }

    if (!document.body) {
      document.addEventListener(
        'DOMContentLoaded',
        function () {
          CONTEXTUALOBJ.waitForTarget(
            device
          );
        },
        { once: true }
      );

      return;
    }

    croWD.debug(
      '[contextual] Waiting for target:',
      CONTEXTUALCONSTANTS.TARGET_SELECTOR
    );

    CONTEXTUALOBJ.observer =
      new MutationObserver(function () {
        var targetElement =
          document.querySelector(
            CONTEXTUALCONSTANTS.TARGET_SELECTOR
          );

        if (!targetElement) {
          return;
        }

        requestAnimationFrame(function () {
          var injected =
            CONTEXTUALOBJ.injectBanner(
              device
            );

          if (
            injected &&
            CONTEXTUALOBJ.observer
          ) {
            CONTEXTUALOBJ.observer.disconnect();

            CONTEXTUALOBJ.observer =
              null;

            croWD.debug(
              '[contextual] Target observer disconnected'
            );
          }
        });
      });

    CONTEXTUALOBJ.observer.observe(
      document.body,
      {
        childList: true,
        subtree: true
      }
    );
  },

  render: function () {
    croWD.debug(
      '[contextual] render() called'
    );

    var matchedDevice =
      CONTEXTUALOBJ.getMatchingDevice();

    if (!matchedDevice) {
      return;
    }

    CONTEXTUALOBJ.matchedDevice =
      matchedDevice;

    CONTEXTUALOBJ.buildCSS();

    var injected =
      CONTEXTUALOBJ.injectBanner(
        matchedDevice
      );


    if (!injected) {
      CONTEXTUALOBJ.waitForTarget(
        matchedDevice
      );
    }
  },

  tracking: function (value) {
    try {
      if (typeof croWD !== 'undefined' && croWD.utils && typeof croWD.utils.launchTracking === 'function') {
        croWD.utils.launchTracking(CONTEXTUALCONSTANTS.EXPERIMENT_ID, value, 'personalisation', '');

        return;
      }

      croWD.debug('[contextual] Tracking unavailable:', value);
    } catch (error) {
      console.error('[contextual] Tracking error:', error);
    }
  },

  init: function () {
    CONTEXTUALOBJ.devices =
      CONTEXTUALOBJ.parseDevicesList();

    croWD.debug(
      '[contextual] Initialising:',
      {
        experimentId:
          CONTEXTUALCONSTANTS.EXPERIMENT_ID,

        subscriber:
          CONTEXTUALCONSTANTS.TRIGGER_NAME,

        storageKey:
          CONTEXTUALCONSTANTS.STORAGE_KEY,

        targetSelector:
          CONTEXTUALCONSTANTS.TARGET_SELECTOR,

        configuredDevices:
          CONTEXTUALOBJ.devices
      }
    );

    if (!CONTEXTUALOBJ.devices.length) {
      croWD.debug(
        '[contextual] No valid configured devices'
      );

      return;
    }

    CONTEXTUALOBJ.render();

    if (CONTEXTUALCONSTANTS.TRIGGER_NAME) {
      croWD.hotbed.listen(
        CONTEXTUALCONSTANTS.TRIGGER_NAME,
        function (
          observable,
          eventType,
          data
        ) {
          croWD.debug(
            '[contextual] Subscriber event received:',
            {
              subscriber:
                CONTEXTUALCONSTANTS.TRIGGER_NAME,

              observable: observable,
              eventType: eventType,
              data: data
            }
          );

          CONTEXTUALOBJ.render();
        }
      );

      croWD.debug(
        '[contextual] Listener registered:',
        CONTEXTUALCONSTANTS.TRIGGER_NAME
      );
    } else {
      croWD.debug(
        '[contextual] No subscriber configured'
      );
    }
  },

  destroy: function () {
    if (CONTEXTUALOBJ.observer) {
      CONTEXTUALOBJ.observer.disconnect();

      CONTEXTUALOBJ.observer = null;
    }
  }
};

window.CONTEXTUALOBJ = CONTEXTUALOBJ;

var crowdMaxCallCounter = 15;
var crowdFinderCall = setInterval(
  function () {
    crowdMaxCallCounter--;

    if (typeof croWD !== 'undefined' && croWD.hotbed && typeof croWD.hotbed.listen === 'function') {
      clearInterval(crowdFinderCall);
      croWD.debug('[contextual] croWD found');
      CONTEXTUALOBJ.init();
      if (typeof croWD.cmdr === 'function') {
        croWD.cmdr(
          CONTEXTUALCONSTANTS.EXPERIMENT_ID,
          'inject'
        );
        croWD.debug('[contextual] Inject command sent:', CONTEXTUALCONSTANTS.EXPERIMENT_ID);
      }
      return;
    }

    if (crowdMaxCallCounter <= 0) {
      clearInterval(crowdFinderCall);

      croWD.debug('[contextual] Finder stopped: maximum retries reached');
    }
  },
  50
);