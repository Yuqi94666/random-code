const PURPLBADGECONSTANTS = {
	EXPERIMENT_ID: `${extension.experimentId}`,
	PAGES_INCLUDE: JSON.parse(extension.targetUrl.replace(/'/g, '"')),
	PAGES_EXCLUDE: ['&step=1', '&step=2', 'cart'],
	EXPERIMENT_VARIANT: 'personalisations',
	DEVICES: [],
	TARGET_ELEMENT_DESKTOP: '.regular.slider > div',
	TARGET_ELEMENT_MOBILE: '.slick-track > div',
	TEMPLATE_INJECT_TYPE: 'before',
	CUSTOM_CSS: `
	.${extension.experimentId}-info-extension {
	    padding: 0px 16px;
	}
    .${extension.experimentId}-info-extension .device-purple-badge {
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
            height: 100%!important;
        }
    }
    @media (min-width: 640px) {
        .bUwBmH {
            min-height: auto!important;
        }
    }
    `,
	INIT_RETRY_INTERVAL: 1000,
	INIT_MAX_RETRIES: 50,
	API_POSTPAID: 'https://api.vodafone.com.au/device/postpaid?serviceType=New',
	API_TABLET: 'https://api.vodafone.com.au/device/tablet?serviceType=New'
};

let purpleBadgeOBJ = {
	isMobile: function () {
		return window.innerWidth <= 768 || /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
	},

	getTargetElement: function () {
		return this.isMobile()
			? PURPLBADGECONSTANTS.TARGET_ELEMENT_MOBILE
			: PURPLBADGECONSTANTS.TARGET_ELEMENT_DESKTOP;
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
		const parsedTargetUrl = JSON.parse(extension.targetUrl.replace(/'/g, '"'));

		//console.log('[DCP17046] extension.targetUrl parsed:', extension.targetUrl);
		//console.log('[DCP17046] typeof parsedTargetUrl:', typeof extension.targetUrl);
		//console.log('[DCP17046] isArray:', Array.isArray(extension.targetUrl));

		const parentUrl = this.getParentURL().toLowerCase();
		const parentPath = this.getParentPathname().toLowerCase();

		const isExcluded = PURPLBADGECONSTANTS.PAGES_EXCLUDE.some(excludedUrl =>
			parentUrl.includes(excludedUrl.toLowerCase())
		);
		if (isExcluded) return false;

		if (PURPLBADGECONSTANTS.PAGES_INCLUDE.length > 0) {
			return PURPLBADGECONSTANTS.PAGES_INCLUDE.some(includedUrl =>
				parentUrl.includes(includedUrl.toLowerCase()) ||
				parentPath.includes(includedUrl.toLowerCase())
			);
		}
		return true;
	},

	getAPIForCurrentPage: function () {
		const currentUrl = window.location.href.toLowerCase();
		if (currentUrl.includes('devicetypes=[tablets]')) {
			//console.log('[DCP17046] using tablet API');
			return PURPLBADGECONSTANTS.API_TABLET;
		}
		//console.log('[DCP17046] using postpaid API');
		return PURPLBADGECONSTANTS.API_POSTPAID;
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
					PURPLBADGECONSTANTS.EXPERIMENT_ID,
					value,
					PURPLBADGECONSTANTS.EXPERIMENT_VARIANT,
					''
				);
			}
		} catch (error) {
			console.error('[DCP17046] Tracking error:', error);
		}
	},

	buildCSS: function (doc) {
		try {
			const styleId = `${PURPLBADGECONSTANTS.EXPERIMENT_ID}-styles`;
			if (doc.getElementById(styleId)) return;

			const styleSheet = doc.createElement('style');
			styleSheet.id = styleId;
			styleSheet.type = 'text/css';
			styleSheet.innerHTML = PURPLBADGECONSTANTS.CUSTOM_CSS;
			(doc.head || doc.getElementsByTagName('head')[0]).appendChild(styleSheet);

			//console.log('[DCP17046] CSS injected');
		} catch (error) {
			console.error('[DCP17046] Error in buildCSS:', error);
		}
	},

	addCurrentIframeHeightOnMobile: function (doc) {
		try {
			//console.log('[DCP17046] addCurrentIframeHeightOnMobile called');

			if (!this.isMobile()) {
				//console.log('[DCP17046] Not mobile view, skip iframe height update');
				return;
			}

			const frameEl =
				(doc && doc.defaultView && doc.defaultView.frameElement) ||
				window.frameElement;

			if (!frameEl) {
				//console.log('[DCP17046] No parent iframe element found');
				return;
			}

			const iframeDoc = frameEl.contentDocument || (frameEl.contentWindow && frameEl.contentWindow.document);
			if (!iframeDoc) {
				//console.log('[DCP17046] iframe document unavailable');
				return;
			}

			const body = iframeDoc.body;
			const html = iframeDoc.documentElement;

			const contentHeight = Math.max(
				body ? body.scrollHeight : 0,
				html ? html.scrollHeight : 0,
				body ? body.offsetHeight : 0,
				html ? html.offsetHeight : 0
			);

			frameEl.style.height = (contentHeight + 10) + 'px';

			// //console.log('[DCP17046] iframe height set from content height', {
			// 	contentHeight: contentHeight,
			// 	newHeight: frameEl.style.height
			// });
		} catch (error) {
			console.error('[DCP17046] Error in addCurrentIframeHeightOnMobile:', error);
		}
	},

	buildTemplate: function (doc) {
		try {
			const targetSelector = this.getTargetElement();
			const mainElements = doc.querySelectorAll(targetSelector);
			let badgeAdded = false;

			mainElements.forEach((card, index) => {
				if (card.querySelector(`.${extension.experimentId}-info-extension`)) return;

				const cardBrand = card.querySelector('h2').parentElement;
				//console.log(`[DCP17046] cardBrand  : ${cardBrand}`);
				if (!cardBrand) {
					//console.log(`[DCP17046] Card ${index}: missing brand element`);
					return;
				}

				const deviceNameEl = card.querySelector('h2 > a div');
				//console.log(`[DCP17046] Card ${index}: found device name element`, deviceNameEl);
				if (!deviceNameEl) {
					//console.log(`[DCP17046] Card ${index}: missing device name`);
					return;
				}

				const cardDeviceName = deviceNameEl.textContent.trim();
				if (!cardDeviceName) return;

				card.addEventListener('click', () => {
					this.tracking(`click - ${cardDeviceName}`);
				});

				const matchedDevice = PURPLBADGECONSTANTS.DEVICES.find(device => device.name === cardDeviceName);
				if (!matchedDevice || !matchedDevice.discountedRecurringCharge) {
					//console.log(`[DCP17046] No matching device data for "${cardDeviceName}"`);
					return;
				}

				const savingsAmount = Math.round((matchedDevice.recurringCharge - matchedDevice.discountedRecurringCharge) * 36);
				const savingsText = `Save $${savingsAmount}`;

				//console.log(`[DCP17046] Injecting badge for "${cardDeviceName}": ${savingsText}`);

				const templateHTML = `
                    <div class="${extension.experimentId}-info-extension">
                        <div class="device-purple-badge">${savingsText}</div>
                    </div>
                `;

				switch (PURPLBADGECONSTANTS.TEMPLATE_INJECT_TYPE) {
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

				badgeAdded = true;
			});

			if (badgeAdded && this.isMobile()) {
				//console.log('[DCP17046] Badge added on mobile, updating iframe heights');

				setTimeout(() => {
					this.addCurrentIframeHeightOnMobile(doc);
				}, 300);

			}
		} catch (error) {
			console.error('[DCP17046] Error in buildTemplate:', error);
		}
	},

	waitForElement: function () {
		let rC = 0;
		let int = setInterval(() => {
			const targetSelector = this.getTargetElement();
			//console.log('[DCP17046] Waiting for target element:', targetSelector);
			const el = document.querySelector(targetSelector);
			//console.log('[DCP17046] Found target element:', el);
			if (el) {
				clearInterval(int);
				this.applyChanges(el);
			} else {
				rC++;
				if (rC >= PURPLBADGECONSTANTS.INIT_MAX_RETRIES) {
					clearInterval(int);
					console.error('[DCP17046] Element not found');
				}
			}
		}, PURPLBADGECONSTANTS.INIT_RETRY_INTERVAL);
	},

	init: function () {
		//console.log("[DCP17046] Initializing purpleBadgeOBJ");
		if (!this.shouldRunOnCurrentPage()) return;

		const api = this.getAPIForCurrentPage();
		//console.log("[DCP17046] started fetching device data from API:", api);
		return fetch(api)
			.then(response => {
				if (!response.ok) {
					throw new Error(`Network error: ${response.status} ${response.statusText}`);
				}
				return response.json();
			})
			.then(({ deviceListing }) => {
				const devices = (deviceListing && deviceListing.devices) || [];
				PURPLBADGECONSTANTS.DEVICES = devices.map(device => ({
					name: device.name,
					recurringCharge: device.recurringCharge,
					discountedRecurringCharge: device.discountedRecurringCharge || null
				}));
				//console.log(`[DCP17046] Fetched ${PURPLBADGECONSTANTS.DEVICES.length} devices`);
			})
			.catch(error => {
				console.error('[DCP17046] Error fetching device data:', error);
				PURPLBADGECONSTANTS.DEVICES = [];
			})
			.then(() => {
				this.waitForElement();
			});
	}
};
purpleBadgeOBJ.init();