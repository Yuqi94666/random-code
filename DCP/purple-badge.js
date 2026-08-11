const DCP17046CONSTANTS = {
    EXPERIMENT_ID: 'DCP17046',
    PAGES_INCLUDE: ['mobile/mobile-phones/clearance', 'about/test-page/kobie/clearance-test'],
    PAGES_EXCLUDE: ['&step=1', '&step=2', 'cart'],
    EXPERIMENT_VARIANT: 'personalisations',
    DEVICES: [],
    TARGET_ELEMENT_DESKTOP: '.regular.slider > div',
    TARGET_ELEMENT_MOBILE: '.slick-track > div',
    TEMPLATE_INJECT_TYPE: 'before',
    CUSTOM_CSS: `
    .DCP17046-info-extension .device-purple-badge {
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
    @media (max-width: 787px){
.ghEqK .slick-slide{
height: 100%!important;}
    }
    @media (min-width: 640px) {
        .bUwBmH {
            min-height: auto!important;
        }
    }
    `,
    INIT_RETRY_INTERVAL: 500,
    INIT_MAX_RETRIES: 20,
    API_POSTPAID: 'https://api.vodafone.com.au/device/postpaid?serviceType=New',
    API_TABLET: 'https://api.vodafone.com.au/device/tablet?serviceType=New'
};

let DCP17046OBJ = {
    isMobile: function () {
        return window.innerWidth <= 768 || /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    },

    getTargetElement: function () {
        return this.isMobile()
            ? DCP17046CONSTANTS.TARGET_ELEMENT_MOBILE
            : DCP17046CONSTANTS.TARGET_ELEMENT_DESKTOP;
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

        const isExcluded = DCP17046CONSTANTS.PAGES_EXCLUDE.some(excludedUrl =>
            parentUrl.includes(excludedUrl.toLowerCase())
        );
        if (isExcluded) return false;

        if (DCP17046CONSTANTS.PAGES_INCLUDE.length > 0) {
            return DCP17046CONSTANTS.PAGES_INCLUDE.some(includedUrl =>
                parentUrl.includes(includedUrl.toLowerCase()) ||
                parentPath.includes(includedUrl.toLowerCase())
            );
        }
        return true;
    },

    getAPIForCurrentPage: function () {
        const currentUrl = window.location.href.toLowerCase();
        if (currentUrl.includes('devicetypes=[tablets]')) {
            console.log('[DCP17046] using tablet API');
            return DCP17046CONSTANTS.API_TABLET;
        }
        console.log('[DCP17046] using postpaid API');
        return DCP17046CONSTANTS.API_POSTPAID;
    },

    applyChanges: function (el) {
        try {
            const docContext = el.ownerDocument || document;
            this.buildCSS(docContext);
            this.buildTemplate(docContext);
        } catch (error) {
            console.error('[DCP17046] Error in applyChanges:', error);
        }
    },

    tracking: function (value) {
        try {
            if (typeof dataLayer !== 'undefined' && dataLayer) {
                croWD.utils.launchTracking(
                    DCP17046CONSTANTS.EXPERIMENT_ID,
                    value,
                    DCP17046CONSTANTS.EXPERIMENT_VARIANT,
                    ''
                );
            }
        } catch (error) {
            console.error('[DCP17046] Tracking error:', error);
        }
    },

    buildCSS: function (doc) {
        try {
            const styleId = `${DCP17046CONSTANTS.EXPERIMENT_ID}-styles`;
            if (doc.getElementById(styleId)) return;

            const styleSheet = doc.createElement('style');
            styleSheet.id = styleId;
            styleSheet.type = 'text/css';
            styleSheet.innerHTML = DCP17046CONSTANTS.CUSTOM_CSS;
            (doc.head || doc.getElementsByTagName('head')[0]).appendChild(styleSheet);

            console.log('[DCP17046] CSS injected');
        } catch (error) {
            console.error('[DCP17046] Error in buildCSS:', error);
        }
    },

    buildTemplate: function (doc) {
        try {
            const targetSelector = this.getTargetElement();
            const mainElements = doc.querySelectorAll(targetSelector);

            mainElements.forEach((card, index) => {
                if (card.querySelector('.DCP17046-info-extension')) return;

                const cardBrand = card.querySelector('h2');
                if (!cardBrand) {
                    console.warn(`[DCP17046] Card ${index}: missing h2`);
                    return;
                }

                const deviceNameEl = card.querySelector('h2 > div+div');
                if (!deviceNameEl) {
                    console.warn(`[DCP17046] Card ${index}: missing device name`);
                    return;
                }

                const cardDeviceName = deviceNameEl.textContent.trim();
                if (!cardDeviceName) return;

                card.addEventListener('click', () => {
                    this.tracking(`click - ${cardDeviceName}`);
                });

                const matchedDevice = DCP17046CONSTANTS.DEVICES.find(device => device.name === cardDeviceName);
                if (!matchedDevice || !matchedDevice.discountedRecurringCharge) {
                    console.warn(`[DCP17046] No matching device data for "${cardDeviceName}"`);
                    return;
                }

                const savingsAmount = Math.round((matchedDevice.recurringCharge - matchedDevice.discountedRecurringCharge) * 36);
                const savingsText = `Save $${savingsAmount}`;

                console.log(`[DCP17046] Injecting badge for "${cardDeviceName}": ${savingsText}`);

                const templateHTML = `
                    <div class="DCP17046-info-extension">
                        <div class="device-purple-badge">${savingsText}</div>
                    </div>
                `;

                switch (DCP17046CONSTANTS.TEMPLATE_INJECT_TYPE) {
                    case 'before':
                        cardBrand.insertAdjacentHTML('beforebegin', templateHTML);
                        break;
                    case 'after':
                        cardBrand.insertAdjacentHTML('afterend', templateHTML);
                        break;
                    default:
                        cardBrand.insertAdjacentHTML('afterbegin', templateHTML);
                        break;
                }
            });
        } catch (error) {
            console.error('[DCP17046] Error in buildTemplate:', error);
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
                if (rC >= DCP17046CONSTANTS.INIT_MAX_RETRIES) {
                    clearInterval(int);
                    console.error('[DCP17046] Element not found');
                }
            }
        }, DCP17046CONSTANTS.INIT_RETRY_INTERVAL);
    },

    init: function () {
        if (!this.shouldRunOnCurrentPage()) return;

        const api = this.getAPIForCurrentPage();

        return fetch(api)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network error: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then(({ deviceListing }) => {
                const devices = (deviceListing && deviceListing.devices) || [];
                DCP17046CONSTANTS.DEVICES = devices.map(device => ({
                    name: device.name,
                    recurringCharge: device.recurringCharge,
                    discountedRecurringCharge: device.discountedRecurringCharge || null
                }));
                console.log(`[DCP17046] Fetched ${DCP17046CONSTANTS.DEVICES.length} devices`);
            })
            .catch(error => {
                console.error('[DCP17046] Error fetching device data:', error);
                DCP17046CONSTANTS.DEVICES = [];
            })
            .then(() => {
                this.waitForElement();
            });
    }
};

DCP17046OBJ.init();