const DCP18154CONSTANTS = {
	EXPERIMENT_ID: 'DCP18154-call',
	PAGES_INCLUDE: [
		'/google/google-pixel-11',
		'google-pixel-10-pro-xl',
		'/samsung/samsung-galaxy-z-fold8',
		'/samsung/samsung-galaxy-z-fold8-ultra',
		'/samsung/samsung-galaxy-z-flip8',
		'samsung-galaxy-z-fold7',
		'samsung-galaxy-z-flip7',
		'/samsung-galaxy-s26', '/samsung-galaxy-s25', '/oppo-find-n6-5g','/samsung/samsung-galaxy-s25-fe','/motorola/motorola-signature-5g','/samsung-galaxy-s25-edge'
	],
	PAGES_EXCLUDE: ['&step=1', '&step=2', 'cart'],
	EXPERIMENT_VARIANT: 'variant',
	TARGET_ELEMENT: '.sc-bc292866-6.loTWeO',
	TEMPLATE_HTML: `
            <div class="info-container" id="info-container">
                <div class='title-container'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.10156 5.08573C10.3676 3.7533 12.4821 3.69877 13.8145 4.96464C14.0155 5.16509 14.9802 6.30707 15.999 10.6648C16.3388 9.2365 17.206 5.9436 18.1738 4.97733C19.518 3.69999 21.6315 3.75438 22.8975 5.08671C24.1206 6.37419 24.1213 8.39107 22.8984 9.6785C22.8946 9.68254 22.8906 9.68636 22.8867 9.69022C22.7766 9.80044 22.3445 10.1734 21.1455 10.6668H28.667C29.0352 10.6668 29.334 10.9656 29.334 11.3338V15.3338C29.3338 15.7018 29.0351 15.9998 28.667 15.9998H27.9707V27.3338C27.9705 27.7017 27.6717 27.9997 27.3037 27.9998H4.63672C4.26871 27.9997 3.9699 27.7018 3.96973 27.3338V15.9998H3.33398C2.96597 15.9997 2.66716 15.7018 2.66699 15.3338V11.3338C2.66699 10.9656 2.96586 10.6668 3.33398 10.6668H10.8467C10.0996 10.3666 9.45815 10.0346 9.11328 9.68925C9.1094 9.68536 9.10528 9.6815 9.10156 9.67753C7.87867 8.39019 7.87884 6.37318 9.10156 5.08573ZM14.667 26.6668H17.334V15.9998H14.667V26.6668ZM18.667 26.6668H26.6367V15.9998H18.667V26.6668ZM5.30371 26.6668H13.334V15.9998H5.30371V26.6668ZM14.667 14.6668H17.334V11.9998H16.5469C16.5411 11.9999 16.5351 12.0008 16.5293 12.0008C16.526 12.0008 16.5228 11.9998 16.5195 11.9998H14.667V14.6668ZM18.667 14.6668H28.001V11.9998H18.667V14.6668ZM4.00098 14.6668H13.334V11.9998H4.00098V14.6668ZM20.4805 5.38358C19.9857 5.38368 19.4898 5.5655 19.1035 5.93241C18.5949 6.44066 17.8974 8.60678 17.4307 10.4334C19.2512 9.96799 21.4102 9.27161 21.9375 8.7537C22.6652 7.98097 22.6634 6.77503 21.9316 6.00468C21.5392 5.59161 21.0098 5.38358 20.4805 5.38358ZM12.8838 5.91972C12.0961 5.17179 10.8281 5.20445 10.0684 6.0037C9.3366 6.77405 9.33481 7.97995 10.0625 8.75272C10.5901 9.2706 12.7489 9.96609 14.5693 10.4314C14.1023 8.60451 13.4022 6.43744 12.8838 5.91972Z" fill="#E60000"/>
                    </svg>
                    <div class="info-container-title">$100 off Android? Yep. Online only.</div>
                </div>
                <div class="info-container-des" id="copy1">Save $100 on this device when you stay connected to an eligible plan over 24 or 36 months. Savings forfeited if cancelled, undiscounted device due in full. Ends 07/09. Min cost and T&C apply.</div>
                <div class="info-container-des" id="copy2">Save an extra $100 on this device when you stay connected to an eligible plan over 24 or 36 months. Total save value shown includes extra $100 device discount. Savings forfeited if cancelled, undiscounted device due in full. Ends 07/09. Min cost and T&C apply.</div>

            </div>
    `,
	TEMPLATE_INJECT_TYPE: 'before',
	CUSTOM_CSS: `
    .DCP18154-info-extension {
        font-family:VodafoneRegular,Arial,sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        display: flex;
        align-items: center;
        width: -moz-fit-content;
        width: fit-content;
        padding: 32px 16px 32px 24px;
        border-radius: 15px;
        margin-bottom: 20px;
        border: 1px solid #999;
    }

    .DCP18154-info-extension .info-container{
        display: flex;
        border-radius: 500px;
        flex-direction: column;
    }
    .DCP18154-info-extension .info-container svg{
        width:32px;
        height:32px;
        margin-right:8px;
    }   
    .DCP18154-info-extension .title-container{
        display: flex;
    }
    .DCP18154-info-extension .info-container-des{
        padding: 10px 40px 0;
        font-size: 18px;
        line-height: 24px;
    }
    .DCP18154-info-extension .info-container-title{
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 34px;
				font-family: 'VodafoneRegularBold';
    }
    .hidden{
        display: none;
    }
    `,
	INIT_RETRY_INTERVAL: 500,
	INIT_MAX_RETRIES: 20,
	DEVICES_COPY_FIRST: [ 'Samsung Galaxy S26', 'Samsung Galaxy Z Fold7', 'Samsung Galaxy Z Flip7', 'Samsung Galaxy S25 Edge', 'Google Pixel 10 Pro XL','Motorola signature 5G','Samsung Galaxy S25 FE', 'OPPO Find N6 5G'],
	DEVICES_COPY_SECOND: ['Samsung Galaxy Z Fold8', 'Samsung Galaxy Z Flip8', 'Samsung Galaxy Z Fold8 Ultra', 'Samsung Galaxy S26+', 'Samsung Galaxy S26 Ultra', 'Samsung Galaxy S25 Ultra', 'Samsung Galaxy S25+', 'Google Pixel 10 Pro XL', 'Google Pixel 11','Google Pixel 11 Pro XL','Samsung Galaxy S25'],
	//DEVICES_COPY_THIRD: ['Samsung Galaxy S25 Ultra',],
};

let DCP18154OBJ = {
	applyChanges: function (el) {
		try {
			DCP18154OBJ.buildCSS();
			DCP18154OBJ.buildTemplate();
			DCP18154OBJ.decideCopy();
		} catch (error) {
			console.error('Error in applyChanges function:', error);
			DCP18154OBJ.tracking('error applyChanges');
		}
	},
	tracking: function (value) {
		try {
			if (typeof dataLayer !== 'undefined' && dataLayer) {
				croWD.utils.launchTracking(DCP18154CONSTANTS.EXPERIMENT_ID,
					value, DCP18154CONSTANTS.EXPERIMENT_VARIANT,
					''
				);
			} else {
				console.warn('dataLayer is not defined. Tracking event:', value, 'was not sent.');
			}
		} catch (error) {
			console.error('Error in tracking function:', error);
		}
	},

	decideCopy: function () {
		// Get device name and the main wrapper element

		const titleElement = document.querySelector('[data-testid="mobile-phone-title"]');
		croWD.debug('[DCP18154-call]title element', titleElement);
		if (!titleElement) {
			croWD.debug('[DCP18154-call]title not found');
			return;
		}
		const deviceName = titleElement.textContent.trim();
		const wrapper = document.getElementById(`wrapper-${DCP18154CONSTANTS.EXPERIMENT_ID}-info-extension`);
		croWD.debug(`[DCP18154-call]: Device name detected: "${deviceName}"`);
		// Identify the copy elements
		const copy1 = document.querySelector('#copy1');
		const copy2 = document.querySelector('#copy2');
		//const copy3 = document.querySelector('#copy3');
		if (!copy1 || !copy2 || !wrapper) {
			return;
		}

		let isDeviceMatched = false;

		// Logic for Copy 1 devices: Hide Copy 2
		if (DCP18154CONSTANTS.DEVICES_COPY_FIRST.includes(deviceName)) {
			copy2.classList.add('hidden');
			// copy3.classList.add('hidden'); 
			copy1.classList.remove('hidden');
			isDeviceMatched = true;
		}
		// Logic for Copy 2 devices: Hide Copy 1
		else if (DCP18154CONSTANTS.DEVICES_COPY_SECOND.includes(deviceName)) {
			copy1.classList.add('hidden');
			//copy3.classList.add('hidden'); 
			copy2.classList.remove('hidden');
			isDeviceMatched = true;
		}
		// Logic for Copy 3 devices: Hide Copy 1,2 
		//else if (DCP18154CONSTANTS.DEVICES_COPY_THIRD.includes(deviceName)) {
		// copy1.classList.add('hidden'); 
		//copy2.classList.add('hidden'); 
		//copy3.classList.remove('hidden'); 
		//isDeviceMatched = true;
		// }

		// The Fix: If no match is found and the wrapper exists, hide the whole feature.
		if (!isDeviceMatched && wrapper) {
			wrapper.classList.add('hidden');
			console.warn(`DCP18154: Device "${deviceName}" not in any list. Hiding entire promotion.`);
		}
	},

	buildCSS: function () {
		try {
			const styleSheet = document.createElement('style');
			styleSheet.setAttribute('type', 'text/css');
			styleSheet.setAttribute('id', `${DCP18154CONSTANTS.EXPERIMENT_ID}-styles`);

			const existingStyle = document.getElementById(`${DCP18154CONSTANTS.EXPERIMENT_ID}-styles`);
			if (existingStyle) {
				existingStyle.remove();
			}

			const css = DCP18154CONSTANTS.CUSTOM_CSS;
			styleSheet.appendChild(document.createTextNode(css));
			document.head.appendChild(styleSheet);
		} catch (error) {
			console.error('Error in buildCSS function:', error);
			DCP18154OBJ.tracking('error buildCSS');
		}
	},
	buildTemplate: function () {
		try {
			let mainElement = document.querySelector(DCP18154CONSTANTS.TARGET_ELEMENT);
			if (!mainElement) {
				throw new Error('Template location element not found');
			}
			// Remove any existing template with the same ID
			const existingTemplate = document.getElementById(`wrapper-${DCP18154CONSTANTS.EXPERIMENT_ID}-info-extension`);
			if (existingTemplate) {
				existingTemplate.remove();
			}

			// Create template as HTML string
			let templateHTML = `<div id="wrapper-${DCP18154CONSTANTS.EXPERIMENT_ID}-info-extension" class="DCP18154-info-extension">${DCP18154CONSTANTS.TEMPLATE_HTML}</div>`;
			switch (DCP18154CONSTANTS.TEMPLATE_INJECT_TYPE) {
				case 'replace':
					mainElement.insertAdjacentHTML('afterend', templateHTML);
					mainElement.remove();
					break;
				case 'before':
					mainElement.insertAdjacentHTML('beforebegin', templateHTML);
					break;
				case 'prepend':
					mainElement.insertAdjacentHTML('afterbegin', templateHTML);
					break;
				case 'after':
					mainElement.insertAdjacentHTML('afterend', templateHTML);
					break;
				default:
					mainElement.insertAdjacentHTML('beforeend', templateHTML);
					break;
			}
		} catch (error) {
			console.error('Error in buildTemplate function:', error);
			DCP18154OBJ.tracking('error buildTemplate');
		}
	},

	observe: function () {
		let currentUrl = location.href;

		const observer = new MutationObserver(function () {

			if (currentUrl === location.href) {
				return;
			}

			currentUrl = location.href;
			croWD.debug('[DCP18154-call] URL changed:', currentUrl);
			const existing = document.getElementById(
				`wrapper-${DCP18154CONSTANTS.EXPERIMENT_ID}-info-extension`
			);

			if (existing) {
				existing.remove();
			}

			const shouldRun =
				DCP18154CONSTANTS.PAGES_INCLUDE.some(function (url) {
					return currentUrl.toLowerCase().includes(url.toLowerCase());
				});

			if (shouldRun) {
				setTimeout(function () {
					DCP18154OBJ.waitForElement();
				}, 500);
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	},
	waitForElement: function () {
		try {
			let rC = 0;
			let int = setInterval(() => {
				const el = document.querySelector(DCP18154CONSTANTS.TARGET_ELEMENT);

				if (el && typeof croWD !== 'undefined') {
					clearInterval(int);
					int = null;
					DCP18154OBJ.applyChanges(el);
				} else {
					rC++;
					if (rC >= DCP18154CONSTANTS.INIT_MAX_RETRIES) {
						clearInterval(int);
						int = null;
						console.error('Element not found after max retries. DCP18154OBJ');
						DCP18154OBJ.tracking('error elementsNotFound');
					}
				}
			}, DCP18154CONSTANTS.INIT_RETRY_INTERVAL);

		} catch (error) {
			console.error('Error in waitForElement function:', error);
			DCP18154OBJ.tracking('error waitForElement');
		}
	},
	init: function () {
		const currentUrl = window.location.href.toLowerCase();
		const shouldRun = DCP18154CONSTANTS.PAGES_INCLUDE.some(function (url) {
			return currentUrl.includes(url.toLowerCase());
		});

		if (shouldRun) {
			DCP18154OBJ.waitForElement();
		}

		DCP18154OBJ.observe();
	}
};

DCP18154OBJ.init();


const alertModalCONSTANTS = {
	EXPERIMENT_ID: 'DCP18154-alert', // unique experiment identifier
	PAGES_INCLUDE: ['/google/google-pixel-11',
		'/samsung/samsung-galaxy-z-fold8',
		'/samsung/samsung-galaxy-z-fold8-ultra',
		'/samsung/samsung-galaxy-z-flip8',
		'/samsung-galaxy-s26', '/samsung-galaxy-s25'], // URL substrings to include (empty = all pages)
	PAGES_EXCLUDE: ['&step=1', '&step=2', 'cart', '/oppo-find-n6-5g','/samsung/samsung-galaxy-s25-fe'], // URL substrings to exclude
	EXPERIMENT_VARIANT: 'variant', // variant|control|personalisation
	TARGET_ELEMENT: 'body',
	PRODUCT_OFFERS: [
		{
			match: 'pixel 11 pro xl',
			discountValue: 1000,
			imageSrc: 'https://www.vodafone.com.au/images/devices/google/google-pixel-11/google-pixel-11-frost-01-l.webp',
			modalHtml: `
			<div class="watch-modal__content">
				<p class="content-title">$1,000 savings is based on:</p>
				<p class="text-wrapper"><span class="dot">∙</span> $900 device discount</p>
				<p class="text-wrapper"><span class="dot">∙</span> Extra $100 device discount on selected Android devices</p>
				<p class="watch-modal__footnote">Online only. Savings forfeited if cancelled and undiscounted device due in full. Ends 02/09 (unless extended). Extra $100 off selected Android devices ends 07/09. Min cost and T&C apply.</p>
			</div>
			`
		},
		{
			match: 'pixel 11',
			discountValue: 750,
			imageSrc: 'https://www.vodafone.com.au/images/devices/google/google-pixel-11/google-pixel-11-black-01-l.webp',
			modalHtml: `
			<div class="watch-modal__content">
				<p class="content-title">$750 savings is based on:</p>
				<p class="text-wrapper"><span class="dot">∙</span> $650 device discount</p>
				<p class="text-wrapper"><span class="dot">∙</span> Extra $100 device discount on selected Android devices</p>
				<p class="watch-modal__footnote">Online only. Savings forfeited if cancelled and undiscounted device due in full. Ends 30/09 (unless extended). Extra $100 off selected Android devices ends 07/09. Min cost and T&C apply.</p>
			</div>
			`
		},
		{
			match: 'z fold8 ultra',
			discountValue: 600,
			imageSrc: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-z-fold8-ultra/samsung-galaxy-z-fold8-ultra-violet-shadow-01-m.webp',
			modalHtml: `
			<div class="watch-modal__content">
				<p class="content-title">$600 savings is based on:</p>
				<p class="text-wrapper"><span class="dot">∙</span> $500 device discount</p>
				<p class="text-wrapper"><span class="dot">∙</span> Extra $100 device discount on selected Android devices</p>
				<p class="watch-modal__footnote">Online only. Savings forfeited if cancelled and undiscounted device due in full. Ends 07/09 (unless extended). Extra $100 off selected Android devices ends 07/09. Min cost and T&C apply.</p>
			</div>
			`
		},
		{
			match: 'z fold8',
			discountValue: 600,
			imageSrc: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-z-fold-8/samsung-galaxy-z-fold8-lavender-01-m.webp',
			modalHtml: `
			<div class="watch-modal__content">
				<p class="content-title">$600 savings is based on:</p>
				<p class="text-wrapper"><span class="dot">∙</span> $500 device discount</p>
				<p class="text-wrapper"><span class="dot">∙</span> Extra $100 device discount on selected Android devices</p>
				<p class="watch-modal__footnote">Online only. Savings forfeited if cancelled and undiscounted device due in full. Ends 07/09 (unless extended). Extra $100 off selected Android devices ends 07/09. Min cost and T&C apply.</p>
			</div>
			`
		},
		{
			match: 'z flip8',
			discountValue: 400,
			imageSrc: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-z-flip-8/samsung-galaxy-z-flip8-pink-01-m.webp',
			modalHtml: `
			<div class="watch-modal__content">
				<p class="content-title">$400 savings is based on:</p>
				<p class="text-wrapper"><span class="dot">∙</span> $300 device discount</p>
				<p class="text-wrapper"><span class="dot">∙</span> Extra $100 device discount on selected Android devices</p>
				<p class="watch-modal__footnote">Online only. Savings forfeited if cancelled and undiscounted device due in full. Ends 07/09 (unless extended). Extra $100 off selected Android devices ends 07/09. Min cost and T&C apply.</p>
			</div>
			`
		},
		{
			match: 's26+',
			discountValue: 500,
			imageSrc: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-s26-plus/samsung-galaxy-s26-plus-cobalt-violet-01-l.webp',
			modalHtml: `
			<div class="watch-modal__content">
				<p class="content-title">$500 savings is based on:</p>
				<p class="text-wrapper"><span class="dot">∙</span> $400 device discount</p>
				<p class="text-wrapper"><span class="dot">∙</span> Extra $100 device discount on selected Android devices</p>
				<p class="watch-modal__footnote">Online only. New connections only. Savings forfeited if cancelled and undiscounted device due in full. Ends 07/09 (unless extended). Extra $100 off selected Android devices ends 07/09. Min cost and T&C apply.</p>
			</div>
			`
		},
		{
			match: 's26 ultra',
			discountValue: 600,
			imageSrc: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-s26-ultra/samsung-galaxy-s26-ultra-cobalt-violet-01-l.webp',
			modalHtml: `
			<div class="watch-modal__content">
				<p class="content-title">$600 savings is based on:</p>
				<p class="text-wrapper"><span class="dot">∙</span> $500 device discount</p>
				<p class="text-wrapper"><span class="dot">∙</span> Extra $100 device discount on selected Android devices</p>
				<p class="watch-modal__footnote">Online only. New connections only. Savings forfeited if cancelled and undiscounted device due in full. Ends 07/09 (unless extended). Extra $100 off selected Android devices ends 07/09. Min cost and T&C apply.</p>
			</div>
			`
		},
		{
			match: 's25 ultra',
			discountValue: 900,
			imageSrc: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-s25-ultra/samsung-galaxy-s25-ultra-cobalt-violet-01-l.webp',
			modalHtml: `
			<div class="watch-modal__content">
				<p class="content-title">$900 savings is based on:</p>
				<p class="text-wrapper"><span class="dot">∙</span> $800 device discount</p>
				<p class="text-wrapper"><span class="dot">∙</span> Extra $100 device discount on selected Android devices</p>
				<p class="watch-modal__footnote">Online only. Savings forfeited if cancelled and undiscounted device due in full. Available while stock lasts. Extra $100 off selected Android devices ends 07/09. Min cost and T&C apply.</p>
			</div>
			`
		},
		// {
		// 	match: 's25 fe',
		// 	discountValue: 849,
		// 	imageSrc: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-s25-fe/samsung-galaxy-s25-fe-navy-01-l.webp.webp',
		// 	modalHtml: `
		// 	<div class="watch-modal__content">
		// 		<p class="content-title">$849 savings is based on:</p>
		// 		<p class="text-wrapper"><span class="dot">∙</span> $749 device discount</p>
		// 		<p class="text-wrapper"><span class="dot">∙</span> Extra $100 device discount on selected Android devices</p>
		// 		<p class="watch-modal__footnote">Online only. Savings forfeited if cancelled and undiscounted device due in full. End 31/08 (unless extended). Extra $100 off selected Android devices ends 07/09. Min cost and T&C apply.
		// 		</p>
		// 	</div>
		// 	`
		// },
		{
			match: 's25',
			discountValue: 700,
			imageSrc: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-s25/samsung-galaxy-s25-navy-01-l.webp.webp',
			modalHtml: `
			<div class="watch-modal__content">
				<p class="content-title">$700 savings is based on:</p>
				<p class="text-wrapper"><span class="dot">∙</span> $600 device discount</p>
				<p class="text-wrapper"><span class="dot">∙</span> Extra $100 device discount on selected Android devices</p>
				<p class="watch-modal__footnote">Online only. Savings forfeited if cancelled and undiscounted device due in full. Available while stock lasts. Extra $100 off selected Android devices ends 07/09. Min cost and T&C apply.</p>
			</div>
			`
		},
		{
			match: 's25+',
			discountValue: 800,
			imageSrc: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-s25-plus/samsung-galaxy-s25-plus-cobalt-violet-01-l.webp',
			modalHtml: `
			<div class="watch-modal__content">
				<p class="content-title">$800 savings is based on:</p>
				<p class="text-wrapper"><span class="dot">∙</span> $700 device discount</p>
				<p class="text-wrapper"><span class="dot">∙</span> Extra $100 device discount on selected Android devices</p>
				<p class="watch-modal__footnote">Online only. Savings forfeited if cancelled and undiscounted device due in full. Available while stock lasts. Extra $100 off selected Android devices ends 07/09. Min cost and T&C apply.</p>
			</div>
			`
		},
        {
			match: 's25 edge',
			discountValue: 600,
			imageSrc: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-s25-edge/samsung-galaxy-s25-edge-cobalt-violet-01-l.webp',
			modalHtml: `
			<div class="watch-modal__content">
				<p class="content-title">$600 savings is based on:</p>
				<p class="text-wrapper"><span class="dot">∙</span> $500 device discount</p>
				<p class="text-wrapper"><span class="dot">∙</span> Extra $100 device discount on selected Android devices</p>
				<p class="watch-modal__footnote">Online only. Savings forfeited if cancelled and undiscounted device due in full. Available while stock lasts. Extra $100 off selected Android devices ends 07/09. Min cost and T&C apply.</p>
			</div>
			`
		},
		// {
		// 	match: 'find n6',
		// 	discountValue: 900,
		// 	imageSrc: 'https://www.vodafone.com.au/images/devices/oppo/oppo-find-n6/oppo-find-n6-cobalt-violet-01-l.webp',
		// 	modalHtml: `
		// 	<div class="watch-modal__content">
		// 		<p class="content-title">$900 savings is based on:</p>
		// 		<p class="text-wrapper"><span class="dot">∙</span> $400 device discount</p>
		// 		<p class="text-wrapper"><span class="dot">∙</span> $400 bonus trade-in credit</p>
		// 		<p class="text-wrapper"><span class="dot">∙</span> Extra $100 device discount on selected Android devices</p>
		// 		<p class="watch-modal__footnote">Online only. Savings forfeited if cancelled and undiscounted device (less trade-in value) due in full. Ends 31/08 (unless extended). Trade-in by 14/09. Extra $100 off selected Android devices ends 07/09. Min cost and T&C apply.</p>
		// 	</div>
		// 	`
		// },

	],
	TEMPLATE_HTML: `
        <section class="wrapper-component" aria-label="Offer notification">
            <div class="offer-notification" role="region" aria-live="polite">
                <span class="offer-notification__icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 1.99951C17.5139 1.99951 21.9998 6.48568 22 11.9995C22 17.5135 17.514 21.9995 12 21.9995C6.48617 21.9993 2 17.5134 2 11.9995C2.00024 6.48582 6.48631 1.99975 12 1.99951ZM12 2.99951C7.0377 2.99975 3.00024 7.03721 3 11.9995C3 16.962 7.03755 20.9993 12 20.9995C16.9626 20.9995 21 16.9622 21 11.9995C20.9998 7.03707 16.9625 2.99951 12 2.99951ZM12 6.28857C12.276 6.28857 12.4998 6.51265 12.5 6.78857V7.75146C13.2831 7.93142 13.8871 8.42781 14.2803 8.85303C14.4676 9.05579 14.4548 9.37262 14.252 9.56006C14.0494 9.74736 13.7335 9.73445 13.5459 9.53174C13.1983 9.15562 12.6371 8.703 11.9395 8.68213C11.2149 8.66168 10.4866 9.13908 10.3857 9.7085C10.2884 10.2575 10.3649 10.6916 10.6143 10.9985C10.8912 11.3394 11.3888 11.5371 12.0146 11.5562C12.9309 11.5832 13.6914 11.9121 14.1562 12.481C14.4608 12.8539 14.7863 13.5201 14.6035 14.5757C14.4399 15.4992 13.5423 16.2471 12.5 16.3999V17.2241C12.4998 17.5001 12.276 17.7241 12 17.7241C11.7242 17.7239 11.5002 17.4999 11.5 17.2241V16.356C10.8581 16.2066 10.2522 15.8338 9.72168 15.2573C9.53473 15.0542 9.5478 14.7382 9.75098 14.5513C9.9541 14.3644 10.2699 14.3772 10.457 14.5806C10.7993 14.9526 11.3568 15.4016 12.0664 15.4292C12.7943 15.4508 13.5175 14.9714 13.6182 14.4028C13.7129 13.8558 13.6333 13.4215 13.3818 13.1138C13.1033 12.7727 12.607 12.5746 11.9844 12.5562C11.0635 12.5281 10.3018 12.1988 9.83887 11.6294C9.53583 11.2565 9.21313 10.5896 9.40039 9.53369C9.56392 8.61115 10.4604 7.86213 11.5 7.70947V6.78857C11.5002 6.5128 11.7242 6.28881 12 6.28857Z" fill="#F4F4F4"/>
                    </svg>
                </span>
                <p class="offer-notification__copy">
                    Save $__TOTAL_SAVING_NO_DECIMALS__ when you stay connected to an eligible plan over 24 or 36 months.
                    <button type="button" class="bundle-offer-trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="offer-breakdown-modal">Find out how</button>.
                </p>
                <button type="button" class="offer-notification__dismiss" aria-label="Dismiss offer notification">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6464 5.64638C17.8415 5.45121 18.1584 5.4512 18.3535 5.64638C18.5486 5.84168 18.5487 6.15814 18.3535 6.35341L12.707 11.9999L18.3535 17.6464C18.5487 17.8416 18.5487 18.1583 18.3535 18.3534C18.256 18.451 18.1278 18.4999 18 18.4999C17.8721 18.4999 17.7439 18.451 17.6464 18.3534L12 12.7069L6.35347 18.3534C6.25585 18.451 6.12789 18.4999 5.99995 18.4999C5.87202 18.4999 5.74407 18.451 5.64644 18.3534C5.45119 18.1582 5.45119 17.8416 5.64644 17.6464L11.2929 11.9999L5.64644 6.35341C5.45119 6.1581 5.45119 5.84169 5.64644 5.64638C5.84175 5.45124 6.15817 5.45121 6.35347 5.64638L12 11.2929L17.6464 5.64638Z" fill="white"/>
                    </svg>
                </button>
            </div>

            <div class="wrapper-modal" hidden aria-hidden="true">
				<article class="watch-modal" id="offer-breakdown-modal" role="dialog" aria-modal="true"
					aria-labelledby="offer-breakdown-title" tabindex="-1">
					<header class="watch-modal__header">
						<h2 class="watch-modal__title" id="offer-breakdown-title">Offer breakdown</h2>
						<button type="button" class="watch-modal-close" aria-label="Close offer breakdown modal">
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
								<path
									d="M23.5282 7.52868C23.7882 7.26843 24.2105 7.26843 24.4705 7.52868C24.7309 7.7891 24.7309 8.21066 24.4705 8.47107L16.9412 15.9994L24.4705 23.5287C24.731 23.7889 24.731 24.2108 24.4705 24.4711C24.3406 24.6011 24.1702 24.6663 23.9998 24.6664C23.8293 24.6664 23.6582 24.6013 23.5282 24.4711L15.9989 16.9418L8.47151 24.4711C8.34137 24.6012 8.17041 24.6663 7.99983 24.6664C7.82919 24.6664 7.65835 24.6013 7.52815 24.4711C7.26789 24.2109 7.26803 23.7889 7.52815 23.5287L15.0565 15.9994L7.52815 8.47107C7.26793 8.21073 7.26807 7.78911 7.52815 7.52868C7.78857 7.26843 8.2111 7.26843 8.47151 7.52868L15.9989 15.057L23.5282 7.52868Z"
									fill="#333333" />
							</svg>
						</button>
					</header>

					<div class="watch-modal__content_container">
						__MODAL_HTML__
					</div>
				</article>
			</div>
        </section>
    `,
	TEMPLATE_INJECT_TYPE: 'prepend', // replace|before|prepend|after|append
	CUSTOM_CSS: `
        #wrapper-alert-modal .wrapper-component {
            background: #9c2aa0;
            color: #ffffff;
            font-family: VodafoneRegular, Arial, sans-serif;
            padding: 16px;
        }

        #wrapper-alert-modal .wrapper-component .offer-notification {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            gap: 16px;
            max-width: 1180px;
            margin: 0 auto;
        }

        #wrapper-alert-modal .wrapper-component .offer-notification__icon {
            width: 24px;
            height: 24px;
            flex: 0 0 24px;
            margin-top: 1px;
        }

        #wrapper-alert-modal .wrapper-component .offer-notification__copy {
            margin: 0;
            flex: 0 1 auto;
            text-align: center;
            font-size: 18px;
            line-height: 24px;
            color: #ffffff;
        }

        #wrapper-alert-modal .wrapper-component .bundle-offer-trigger {
            border: 0;
            background: transparent;
            color: #ffffff;
            cursor: pointer;
            font: inherit;
            line-height: inherit;
            padding: 0;
            margin: 0;
            text-decoration: underline;
        }

        #wrapper-alert-modal .wrapper-component .bundle-offer-trigger:hover {
            text-decoration: none;
        }

        #wrapper-alert-modal .wrapper-component .offer-notification__dismiss {
            border: 0;
            background: transparent;
            color: inherit;
            width: 24px;
            height: 24px;
            flex: 0 0 24px;
            padding: 0;
            cursor: pointer;
            margin-top: 1px;
        }

        #wrapper-alert-modal .wrapper-component .offer-notification__dismiss svg,
        #wrapper-alert-modal .wrapper-component .watch-modal-close svg {
            display: block;
        }

        #wrapper-alert-modal .wrapper-component .wrapper-modal {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.78);
        }

        #wrapper-alert-modal .wrapper-component .wrapper-modal[hidden] {
            display: none;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal {
            width: min(816px, 100%);
            background: #ffffff;
            color: #333333;
            border-radius: 6px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
            padding: 32px 64px;
            max-height: calc(100vh - 32px);
            overflow: auto;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__title {
            margin: 32px 0 0;
            font-size: 24px;
            line-height: 48px;
            font-weight: 300;
            color: #333333;
            font-family: VodafoneRegular, Arial, sans-serif;
        }       
		#wrapper-alert-modal .wrapper-component .content-title {
            font-size: 18px;
            line-height: 24px;
            font-weight: 700;
        }
		#wrapper-alert-modal .wrapper-component .text-wrapper {
            font-size: 16px;
            line-height: 22px;
            font-weight: 400;
			margin: 0;
        }
		#wrapper-alert-modal .wrapper-component .text-wrapper .dot {
            font-size: 30px;
			line-height: 1;
			vertical-align: middle;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal-close {
            border: 0;
            background: transparent;
            width: 32px;
            height: 32px;
            padding: 0;
            margin-top: 2px;
            cursor: pointer;
            flex: 0 0 32px;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__content {
            display: flex;
            align-items: flex-start;
			flex-direction: column;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__footnote {
            margin:20px  0;
            font-size: 12px;
            line-height: 16px;
            color: #333333;
 
        }

        @media (max-width: 767px) {
            #wrapper-alert-modal .wrapper-component {
                padding: 16px;
            }

            #wrapper-alert-modal .wrapper-component .offer-notification {
                gap: 16px;
                max-width: 100%;
            }

            #wrapper-alert-modal .wrapper-component .offer-notification__copy {
                text-align: left;
            }

            #wrapper-alert-modal .wrapper-component .watch-modal {
                width: 100%;
                padding: 24px 16px 32px;
            }

            #wrapper-alert-modal .wrapper-component .watch-modal__header {
                margin-bottom: 20px;
            }

            #wrapper-alert-modal .wrapper-component .watch-modal__title {
                margin-top: 32px;
                font-size: 24px;
                line-height: 30px;
            }

            #wrapper-alert-modal .wrapper-component .watch-modal__content {
                flex-direction: column;
            }

            #wrapper-alert-modal .wrapper-component .watch-modal__footnote {
                max-width: 100%;
            }
        }
    `,
	INIT_RETRY_INTERVAL: 500,
	INIT_MAX_RETRIES: 20,
	ELEMENT_EVENT_PAIRS: [
		'.bundle-offer-trigger:click alert-bar',
		'.watch-modal-close:click offer-breakdown-close',
		'.offer-notification__dismiss:click alert-bar-dismiss'
	]
};

const alertModalOBJ = {
	lastFocusedElement: null,
	previousBodyOverflow: '',
	isValidPage: function () {
		const url = location.pathname.toLowerCase();

		const isExcluded = alertModalCONSTANTS.PAGES_EXCLUDE.some(function (page) {
			return url.includes(page.toLowerCase());
		});

		if (isExcluded) {
			return false;
		}

		return alertModalCONSTANTS.PAGES_INCLUDE.some(function (page) {
			return url.includes(page.toLowerCase());
		});
	},
	applyChanges: function (el) {
		try {
			// Add your logic here
			if (!alertModalOBJ.isValidPage()) {
				document.getElementById('wrapper-alert-modal').remove();
				return;
			}
			alertModalOBJ.buildCSS();
			alertModalOBJ.buildTemplate(el);
			alertModalOBJ.bindModalControls();
			// alertModalOBJ.addEventListeners();
		} catch (error) {
			console.error('Error in applyChanges:', error);
			alertModalOBJ.tracking('error applyChanges');
		}
	},
	tracking: function (value) {
		try {
			if (typeof window.croWD !== 'undefined' && typeof dataLayer !== 'undefined') {
				window.croWD.utils.launchTracking(
					alertModalCONSTANTS.EXPERIMENT_ID,
					value,
					alertModalCONSTANTS.EXPERIMENT_VARIANT,
					''
				);
			} else {
				console.warn(alertModalCONSTANTS.EXPERIMENT_ID + ' tracking skipped — dependencies not available:', value);
			}
		} catch (error) {
			console.error('Error in tracking:', error);
		}
	},
	getOfferData: function () {
		const titleElement = document.querySelector('h1[data-testid="mobile-phone-title"], h1');
		const titleText = (titleElement && titleElement.textContent ? titleElement.textContent : '').toLowerCase();
		const matchedOffer = alertModalCONSTANTS.PRODUCT_OFFERS.find(function (offer) {
			croWD.debug(`[DCP-18154-alert] MatchedL: ${JSON.stringify(offer)}. Title text: ${titleText}, Match: ${offer.match}`);

			return titleText.includes(offer.match);
		});

		return matchedOffer || null;
	},
	formatMoney: function (value) {
		return Number(value || 0).toLocaleString('en-AU', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		});
	},
	buildTemplateHtml: function (offerData) {
		const discountValue = Number(offerData.discountValue || 0);
		const modalHtml = offerData.modalHtml || `
			<div class="watch-modal__content">
				<p class="content-title">$__DEVICE_DISCOUNT__ savings is based on:</p>
				<p class="text-wrapper"><span class="dot">∙</span> $__BASE_DEVICE_DISCOUNT__ device discount</p>
				<p class="text-wrapper"><span class="dot">∙</span> Extra $100 device discount on selected Android devices</p>
				<p class="watch-modal__footnote">Online only. New connections only. Savings forfeited if cancelled and undiscounted device due in full. Ends 07/09 (unless extended). Extra $100 off selected Android devices ends 07/09. Min cost and T&C apply.</p>
			</div>
		`;
		const totalSaving = discountValue;
		const totalSavingNoDecimals = Number(totalSaving || 0).toLocaleString('en-AU', {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		});
		const formattedDeviceDiscount = alertModalOBJ.formatMoney(discountValue).replace(/\.00$/, '');
		const formattedTotalSaving = alertModalOBJ.formatMoney(totalSaving);
		const formattedBaseDeviceDiscount = alertModalOBJ.formatMoney(discountValue - 100).replace(/\.00$/, '');
		const resolvedModalHtml = modalHtml
			.replaceAll('__DEVICE_DISCOUNT__', formattedDeviceDiscount)
			.replaceAll('__BASE_DEVICE_DISCOUNT__', formattedBaseDeviceDiscount)
			.replaceAll('__TOTAL_SAVING__', formattedTotalSaving)
			.replaceAll('__TOTAL_SAVING_NO_DECIMALS__', totalSavingNoDecimals);

		return alertModalCONSTANTS.TEMPLATE_HTML
			.replaceAll('__PRODUCT_IMAGE_SRC__', offerData.imageSrc)
			.replaceAll('__DEVICE_DISCOUNT__', formattedDeviceDiscount)
			.replaceAll('__TOTAL_SAVING_NO_DECIMALS__', totalSavingNoDecimals)
			.replaceAll('__TOTAL_SAVING__', formattedTotalSaving)
			.replaceAll('__BASE_DEVICE_DISCOUNT__', formattedBaseDeviceDiscount)
			.replaceAll('__MODAL_HTML__', resolvedModalHtml);
	},
	buildCSS: function () {
		if (!alertModalCONSTANTS.CUSTOM_CSS) return; // Nothing to inject

		try {
			const id = 'alertModal-styles';

			// Remove any existing stylesheet with the same ID
			const existingStyle = document.getElementById(id);
			if (existingStyle) existingStyle.remove();

			const resolvedCss = alertModalCONSTANTS.CUSTOM_CSS.replaceAll(
				'#wrapper-alert-modal',
				'#wrapper-alert-modal'
			);

			const styleSheet = document.createElement('style');
			styleSheet.id = id;
			styleSheet.textContent = resolvedCss;
			document.body.appendChild(styleSheet);
		} catch (error) {
			console.error('Error in buildCSS:', error);
			alertModalOBJ.tracking('error buildCSS');
		}
	},
	buildTemplate: function (targetEl) {
		if (!alertModalCONSTANTS.TEMPLATE_HTML) return; // Nothing to inject

		try {
			const wrapperId = 'wrapper-alert-modal';
			const offerData = alertModalOBJ.getOfferData();

			// Remove any existing template with the same ID
			const existingTemplate = document.getElementById(wrapperId);
			if (existingTemplate) existingTemplate.remove();

			const template = document.createElement('div');
			template.innerHTML = alertModalOBJ.buildTemplateHtml(offerData);
			template.id = wrapperId;

			switch (alertModalCONSTANTS.TEMPLATE_INJECT_TYPE) {
				case 'replace':
					targetEl.insertAdjacentElement('afterend', template);
					targetEl.remove();
					break;
				case 'before':
					targetEl.insertAdjacentElement('beforebegin', template);
					break;
				case 'prepend':
					targetEl.prepend(template);
					break;
				case 'after':
					targetEl.insertAdjacentElement('afterend', template);
					break;
				default: // append
					targetEl.appendChild(template);
					break;
			}
		} catch (error) {
			console.error('Error in buildTemplate:', error);
			alertModalOBJ.tracking('error buildTemplate');
		}
	},
	bindModalControls: function () {
		try {
			const wrapper = document.getElementById('wrapper-alert-modal');

			if (!wrapper) {
				console.warn(alertModalCONSTANTS.EXPERIMENT_ID + ' — wrapper not found');
				return;
			}

			const trigger = wrapper.querySelector('.bundle-offer-trigger');
			const wrapperComponent = wrapper.querySelector('.wrapper-component');
			const modalWrapper = wrapper.querySelector('.wrapper-modal');
			const modal = wrapper.querySelector('.watch-modal');
			const closeButton = wrapper.querySelector('.watch-modal-close');
			const dismissButton = wrapper.querySelector('.offer-notification__dismiss');

			if (!trigger || !wrapperComponent || !modalWrapper || !modal || !closeButton || !dismissButton) {
				console.warn(alertModalCONSTANTS.EXPERIMENT_ID + ' — modal controls not found');
				return;
			}

			if (!trigger.hasAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-modal-open')) {
				trigger.setAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-modal-open', 'true');
				trigger.addEventListener('click', function () {
					alertModalOBJ.openModal(trigger, modalWrapper, modal);
				});
				trigger.addEventListener('keydown', function (event) {
					if (event.key === 'Enter' || event.key === ' ') {
						event.preventDefault();
						alertModalOBJ.openModal(trigger, modalWrapper, modal);
					}
				});
			}

			if (!closeButton.hasAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-modal-close')) {
				closeButton.setAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-modal-close', 'true');
				closeButton.addEventListener('click', function () {
					alertModalOBJ.closeModal(trigger, modalWrapper);
				});
			}

			if (!dismissButton.hasAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-notification-close')) {
				dismissButton.setAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-notification-close', 'true');
				dismissButton.addEventListener('click', function () {
					alertModalOBJ.tracking('click dismiss alert');
					alertModalOBJ.hideNotification(wrapperComponent, modalWrapper, trigger);
				});
			}

			if (!modalWrapper.hasAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-modal-backdrop-close')) {
				modalWrapper.setAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-modal-backdrop-close', 'true');
				modalWrapper.addEventListener('click', function (event) {
					if (event.target === modalWrapper) {
						alertModalOBJ.closeModal(trigger, modalWrapper);
					}
				});
			}

			if (!modal.hasAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-modal-trap')) {
				modal.setAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-modal-trap', 'true');
				modal.addEventListener('keydown', function (event) {
					alertModalOBJ.handleModalKeydown(event, trigger, modalWrapper, modal);
				});
			}
		} catch (error) {
			console.error('Error in bindModalControls:', error);
			alertModalOBJ.tracking('error bindModalControls');
		}
	},
	openModal: function (trigger, modalWrapper, modal) {
		alertModalOBJ.lastFocusedElement = document.activeElement || trigger;
		alertModalOBJ.previousBodyOverflow = document.body.style.overflow;
		modalWrapper.hidden = false;
		modalWrapper.setAttribute('aria-hidden', 'false');
		trigger.setAttribute('aria-expanded', 'true');
		document.body.style.overflow = 'hidden';

		const focusableElements = alertModalOBJ.getFocusableElements(modal);
		const firstFocusable = focusableElements[0] || modal;
		firstFocusable.focus();

		alertModalOBJ.tracking('click open alert modal');
	},
	closeModal: function (trigger, modalWrapper) {
		modalWrapper.hidden = true;
		modalWrapper.setAttribute('aria-hidden', 'true');
		trigger.setAttribute('aria-expanded', 'false');
		document.body.style.overflow = alertModalOBJ.previousBodyOverflow;

		if (alertModalOBJ.lastFocusedElement && typeof alertModalOBJ.lastFocusedElement.focus === 'function') {
			alertModalOBJ.lastFocusedElement.focus();
		}
	},
	hideNotification: function (wrapperComponent, modalWrapper, trigger) {
		if (modalWrapper && !modalWrapper.hidden) {
			alertModalOBJ.closeModal(trigger, modalWrapper);
		}

		wrapperComponent.hidden = true;
		wrapperComponent.setAttribute('aria-hidden', 'true');
	},
	getFocusableElements: function (container) {
		return Array.prototype.slice.call(
			container.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]')
		).filter(function (element) {
			return !element.hasAttribute('hidden') && element.getAttribute('aria-hidden') !== 'true';
		});
	},
	handleModalKeydown: function (event, trigger, modalWrapper, modal) {
		if (event.key === 'Escape') {
			event.preventDefault();
			alertModalOBJ.closeModal(trigger, modalWrapper);
			return;
		}

		if (event.key !== 'Tab') return;

		const focusableElements = alertModalOBJ.getFocusableElements(modal);
		if (focusableElements.length === 0) {
			event.preventDefault();
			modal.focus();
			return;
		}

		const firstFocusable = focusableElements[0];
		const lastFocusable = focusableElements[focusableElements.length - 1];

		if (focusableElements.length === 1) {
			event.preventDefault();
			firstFocusable.focus();
			return;
		}

		if (event.shiftKey && document.activeElement === firstFocusable) {
			event.preventDefault();
			lastFocusable.focus();
		} else if (!event.shiftKey && document.activeElement === lastFocusable) {
			event.preventDefault();
			firstFocusable.focus();
		}
	},
	addEventListeners: function () {
		try {
			const wrapper = document.getElementById('wrapper-' + alertModalCONSTANTS.EXPERIMENT_ID);
			if (!wrapper) {
				console.warn(alertModalCONSTANTS.EXPERIMENT_ID + ' — wrapper not found for event bindings');
				return;
			}

			const pairs = alertModalCONSTANTS.ELEMENT_EVENT_PAIRS || [];
			pairs.forEach(function (pair) {
				const parts = pair.split(':');
				const selector = parts[0];
				const eventType = parts[1];
				const elements = wrapper.querySelectorAll(selector);

				if (elements.length === 0) {
					console.warn(alertModalCONSTANTS.EXPERIMENT_ID + ' — element not found for: ' + selector);
					return;
				}

				elements.forEach(function (el) {
					// Prevent duplicate listeners by marking the element
					const flag = 'data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-' + eventType;
					if (el.hasAttribute(flag)) return;
					el.setAttribute(flag, 'true');

					el.addEventListener(eventType, function () {
						alertModalOBJ.tracking(eventType + ' ' + el.innerText);
					});
				});
			});
		} catch (error) {
			console.error('Error in addEventListeners:', error);
			alertModalOBJ.tracking('error addEventListeners');
		}
	},
	waitForElement: function () {
		try {
			let retryCount = 0;
			const interval = setInterval(function () {
				const el = document.querySelector(alertModalCONSTANTS.TARGET_ELEMENT);
				const hasCroWD = typeof window.croWD !== 'undefined';

				if (el && hasCroWD) {
					clearInterval(interval);
					alertModalOBJ.applyChanges(el);
				} else if (++retryCount >= alertModalCONSTANTS.INIT_MAX_RETRIES) {
					clearInterval(interval);
					console.error(alertModalCONSTANTS.EXPERIMENT_ID + ' — target element not found after max retries');
					alertModalOBJ.tracking('error elementsNotFound');
				}
			}, alertModalCONSTANTS.INIT_RETRY_INTERVAL);
		} catch (error) {
			console.error('Error in waitForElement:', error);
			alertModalOBJ.tracking('error waitForElement');
		}
	},

	observePageChanges: function () {
		let currentUrl = location.href;
		const observer = new MutationObserver(function () {
			if (currentUrl === location.href) {
				return;
			}
			currentUrl = location.href;
			croWD.debug('[DCP-18154-alert] URL changed', currentUrl);

			alertModalOBJ.applyChanges(document.body);
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	},
	init: function () {
		alertModalOBJ.waitForElement();
		alertModalOBJ.observePageChanges();
	}
};

alertModalOBJ.init();