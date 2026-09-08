
const NavCONSTANTS = {
	EXPERIMENT_ID: 'DCP18197', // Experiment ID
	PAGES_INCLUDE: [], // ['iphone16'] // pages to be included, if empty observe is not used
	PAGES_EXCLUDE: [], // ['&step=1', '&step=2', 'cart']pages to be excluded
	EXPERIMENT_VARIANT: 'personalisation', // possible values: variant|control|personalisation
	TARGET_ELEMENT: 'vha-header', // Target element to be modified
	NETWORK_TITLE_COPY: 'Latest Apple', // top nav label/titleCopy replacement
	PRODUCT_ITEMS: [
		{
			href: 'https://www.vodafone.com.au/mobile/mobile-phones/Apple/Apple-iphone-18-pro-max',
			className: 'iPhone-18-Pro-Max',
			titleCopy: 'iPhone 18 Pro Max',
			imgSrc: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-z-fold-8/samsung-galaxy-z-fold8-lavender-01-m.webp',
			imgAlt: 'iPhone 18 Pro Max',
			imgWidth: 100,
			imgHeight: 100
		},
		{
			href: 'https://www.vodafone.com.au/mobile/mobile-phones/Apple/Apple-iphone-18-pro',
			className: 'iPhone-18-Pro',
			titleCopy: 'iPhone 18 Pro',
			imgSrc: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-z-fold-8/samsung-galaxy-z-fold8-lavender-01-m.webp',
			imgAlt: 'iPhone 18 Pro',
			imgWidth: 100,
			imgHeight: 100
		},
		{
			href: 'https://www.vodafone.com.au/mobile/mobile-phones/Apple/Apple-iphone-ultra',
			className: 'iPhone-Ultra',
			titleCopy: 'iPhone Ultra',
			imgSrc: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-z-fold-8/samsung-galaxy-z-fold8-lavender-01-m.webp',
			imgAlt: 'iPhone Ultra',
			imgWidth: 100,
			imgHeight: 100
		},
		// {
		//     href: 'https://www.vodafone.com.au/accessories/smart-watches/Apple/Apple-galaxy-watch-ultra2',
		//     className: 'Galaxy-Watch-Ultra2',
		//     titleCopy: 'Galaxy Watch Ultra2',
		//     imgSrc: 'https://www.vodafone.com.au/images/devices/Apple/Apple-watch-ultra2/Apple-galaxy-watch-ultra2-titanium-silver-01-m.webp',
		//     imgAlt: 'Galaxy Watch Ultra2',
		//     imgWidth: 100,
		//     imgHeight: 100
		// },
		// {
		//     href: 'https://www.vodafone.com.au/accessories/smart-watches/Apple/Apple-galaxy-watch9',
		//     className: 'Galaxy-Watch9',
		//     titleCopy: 'Galaxy Watch9',
		//     imgSrc: 'https://www.vodafone.com.au/images/devices/Apple/Apple-galaxy-watch9/Apple-galaxy-watch9-40mm-cream-01-m.webp',
		//     imgAlt: 'Galaxy Watch9',
		//     imgWidth: 100,
		//     imgHeight: 100
		// }
	],
	QUICK_LINK_ITEMS: [
		{
			href: 'https://www.vodafone.com.au/mobile/apple',
			className: 'Apple-hub',
			titleCopy: 'Apple hub',
			ariaLabel: 'Apple hub',
			imgSrc:'https://www.vodafone.com.au/images/merch/events/apple-npi-2026/apple-logo-mark.svg'
		},
		{
			href: 'https://www.vodafone.com.au/mobile/mobile-phones/apple/compare',
			className: 'Compare-iPhones',
			titleCopy: 'Compare iPhones',
			ariaLabel: 'Compare iPhones',
			imgSrc:'https://www.vodafone.com.au/images/icon/system/grey/mobiles.svg'
		}
	],
	CHEVRON_SVG : '<svg class="system-chevron-right" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.39632 3.14663C7.59163 2.95145 7.90804 2.95145 8.10335 3.14663L16.6033 11.6466C16.7985 11.842 16.7986 12.1585 16.6033 12.3537L8.10335 20.8537C8.00574 20.9511 7.87769 21.0002 7.74983 21.0002C7.62196 21.0001 7.49391 20.9512 7.39632 20.8537C7.20115 20.6586 7.20131 20.3418 7.39632 20.1466L15.5428 12.0002L7.39632 3.85367C7.20116 3.65844 7.20133 3.34197 7.39632 3.14663Z" fill="#E60000" /></svg>',
	TEMPLATE_HTML: `
    <div class="mega-menu">
        <div class="group-5">
            <div class="products">
                {{PRODUCT_ITEMS}}
            </div>
        </div>
    </div>
	 <div class="frame-6 mega-menu-footer">
            {{QUICK_LINK_ITEMS}}
        </div>
	`, // HTML template to be injected
	TEMPLATE_INJECT_TYPE: 'before', // possible values: replace|before|prepend|after|append
	CUSTOM_CSS: `
	<style>
.mega-menu {
	background: var(--color-surface-primary, #ffffff);
	border-color: var(--color-divider-default, #bebebe);
	border: none;
	padding: var(--space-600, 32px) 40px 32px 40px;
	display: flex;
	flex-direction: column;
	gap: 32px;
	justify-content: flex-start;
	flex-shrink: 0;
	max-width: 1260px;
	position: relative
}

.mega-menu .product-name {
	display: flex;
	gap: 8px;
}

.mega-menu .group-5 {
	flex-shrink: 0;
	position: static
}

.mega-menu .products {
	display: flex;
	flex-direction: row;
	gap: 32px;
	align-items: anchor-center;
	justify-content: center;
	align-content: flex-start;
	min-width: 968px;
	position: relative;
	width: 100%
}

.mega-menu a {
	color: var(--palette-light-globaltype-grey-900, #333333);
	text-align: center;
	font-family: var(--label-link-button-large-link-button-text-font-family, "VodafoneRegular", sans-serif);
	font-size: var(--label-link-button-large-link-button-text-font-size, 18px);
	line-height: var(--label-link-button-large-link-button-text-line-height, 24px);
	font-weight: var(--label-link-button-large-link-button-text-font-weight, 400);
	position: relative;
	align-self: stretch;
	text-decoration: none;
	width: 100%
}

.mega-menu a:hover {
	color: var(--palette-light-navigationelements-buttons-primary-default, #e60000);
	text-decoration: underline
}

.mega-menu .product-category {
	background: var(--palette-light-brand-primary-white, #ffffff);
	border-radius: 12px;
	border-style: solid;
	border-color: var(--palette-light-brand-monochrome-grey-400, #cccccc);
	border-width: 1px;
	padding: 32px 16px 27px 16px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	justify-content: center;
	min-width: 15%
}

.mega-menu .mask-group {
	flex-shrink: 0;
	width: 100px;
	height: 100px;
	position: relative;
	overflow: visible
}

.mega-menu .new-i-phone {
	color: var(--link-secondary-color-enabled, #333333);
	text-align: left;
	font-family: var(--heading-desktop-h4-font-family, "VodafoneLight", sans-serif);
	font-size: var(--heading-desktop-h4-font-size, 28px);
	line-height: var(--heading-desktop-h4-line-height, 34px);
	font-weight: var(--heading-desktop-h4-font-weight, 300);
	position: absolute;
	left: 48px;
	top: 24px;
	display: flex;
	align-items: center;
	justify-content: flex-start
}

.mega-menu .frame-6 {
	display: flex;
	flex-direction: row;
	gap: 38px;
	align-items: flex-start;
	justify-content: flex-start;
	flex-shrink: 0;
	width: 1180px;
	position: relative;
	left: -9px
}

.mega-menu .link-button {
	border-radius: 6px;
	padding: 4px 12px 4px 12px;
	display: flex;
	flex-direction: row;
	gap: 10px;
	align-items: center;
	justify-content: flex-start;
	flex-shrink: 0;
	position: relative;
	width: auto
}

.mega-menu .button {
	color: var(--light-globaltype-secondary, #e60000);
	text-align: left;
	font-family: var(--label-link-button-large-link-button-text-font-family, "VodafoneRegular", sans-serif);
	font-size: var(--label-link-button-large-link-button-text-font-size, 18px);
	line-height: var(--label-link-button-large-link-button-text-line-height, 24px);
	font-weight: var(--label-link-button-large-link-button-text-font-weight, 400);
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start
}

.mega-menu .system-chevron-right {
	display: flex;
	width: var(--size-system-icon-medium, 24px);
	height: var(--size-system-icon-medium, 24px);
	justify-content: center;
	align-items: center;
}

.mega-menu-footer {
	display: flex;
	padding: 20px 40px;
	align-items: center;
	gap: 32px;
	align-self: stretch;
	background: var(--Palette-Light-Brand-Monochrome-Grey-50, #F4F4F4);
}

.mega-menu-footer .link-button {
	display: flex;
	align-items: center;
	gap: 8px;
	border-radius: 6px;
}

.mega-menu-footer a {
	text-decoration: none;
	color: var(--link-secondary-color-enabled, #0D0D0D);
	font-feature-settings: 'liga' off, 'clig' off;

	font-family: var(--typography-font-family-default, VodafoneRegular);
	font-size: var(--typography-font-size-450, 18px);
	font-style: normal;
	font-weight: 400;
	line-height: var(--typography-line-height-600, 24px);
	/* 133.333% */
	letter-spacing: var(--typography-letter-spacing-000, 0);
}

.apple-icon {
	flex-shrink: 0;
	width: 24px;
	height: 24px;
	position: relative;
	overflow: visible;
}

@media(max-width: 1023px) {
	.mega-menu-footer {
		display: flex;
		padding: 20px 26px;
		flex-direction: column;
		align-items: flex-start;
		gap: 20px;
		align-self: stretch;
		margin: 0 -20px;
	}

	.mega-menu {
		background: var(--color-surface-primary, #ffffff);
		padding: var(--space-600, 24px) 0px 24px 0px;
		display: flex;
		flex-direction: column;
		gap: 24px;
		justify-content: flex-start;
		width: 100%;
		flex-shrink: 0;
		max-width: 1260px;
		position: relative
	}

	.mega-menu .new-i-phone {
		left: 0;
		font-size: var(--heading-desktop-h4-font-size, 20px);
		line-height: var(--heading-desktop-h4-line-height, 28px)
	}

	.mega-menu .frame-6 {
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: flex-start;
		justify-content: flex-start;
		flex-shrink: 0;
		width: 1180px;
		position: relative;
		left: 0;
		padding: 0
	}

	.mega-menu .group-5 {
		flex-shrink: unset;
		height: unset;
		position: unset
	}

	.mega-menu .products {
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: anchor-center;
		justify-content: center;
		align-content: flex-start;
		min-width: unset;
		position: relative;
		width: 100%
	}

	.mega-menu .product-category {
		background: var(--palette-light-brand-primary-white, #ffffff);
		border-radius: 6px;
		border-style: solid;
		border-color: var(--palette-light-brand-monochrome-grey-400, #cccccc);
		border-width: 1px;
		padding: 12px;
		display: flex;
		flex-direction: row;
		gap: 20px;
		align-items: center;
		justify-content: flex-start;
		min-width: 15%;
		width: 89%
	}

	.mega-menu .mask-group {
		flex-shrink: 0;
		width: 48px;
		height: 48px;
		position: relative;
		overflow: visible
	}

	.mega-menu a {
		color: var(--palette-light-globaltype-grey-900, #333333);
		text-align: left;
		font-family: var(--label-link-button-small-link-button-text-font-family, "VodafoneRegular", sans-serif);
		font-size: var(--label-link-button-small-link-button-text-font-size, 16px);
		line-height: var(--label-link-button-small-link-button-text-line-height, 22px);
		font-weight: var(--label-link-button-small-link-button-text-font-weight, 400);
		position: relative;
		flex: 1
	}

	.mega-menu .link-button {
		padding: 4px 12px 4px 12px
	}

	.mega-menu .button {
		color: var(--light-globaltype-secondary, #e60000);
		text-align: left;
		font-family: var(--label-link-button-large-link-button-text-font-family, "VodafoneRegular", sans-serif);
		font-size: var(--label-link-button-large-link-button-text-font-size, 16px);
		line-height: var(--label-link-button-large-link-button-text-line-height, 24px);
		font-weight: var(--label-link-button-large-link-button-text-font-weight, 400);
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start
	}
}
	</style>
	`, // CSS to be injected
	INIT_RETRY_INTERVAL: 500, // milliseconds for init retry
	INIT_MAX_RETRIES: 20, // max retries for init
	ELEMENT_EVENT_PAIRS: [
		'.cta-upgrade:click' // Example of an element event pair, format 'selector:eventType'
	]
};

let NavOBJ = {
	config: {
		vhaHeader: 'vha-header',
		targetPaths: ['/', '/cro-demo'],
		navUpdated: false
	},
	getProductsMarkup: function () {
		return NavCONSTANTS.PRODUCT_ITEMS.map(function (item) {
			return `<a href="${item.href}" aria-label="${item.titleCopy}" class="${item.className}">
				<div class="product-category">
					<img src="${item.imgSrc}" alt="${item.imgAlt}" width="${item.imgWidth || 100}" height="${item.imgHeight || 100}" class="mask-group" style="color: transparent;" />
					<div class="${item.className} product-name">${item.titleCopy} ${NavCONSTANTS.CHEVRON_SVG}</div>
				</div>
			</a>`;
		}).join('');
	},

	getQuickLinksMarkup: function () {
		// var chevronSvg = '<svg class="system-chevron-right" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.39632 3.14663C7.59163 2.95145 7.90804 2.95145 8.10335 3.14663L16.6033 11.6466C16.7985 11.842 16.7986 12.1585 16.6033 12.3537L8.10335 20.8537C8.00574 20.9511 7.87769 21.0002 7.74983 21.0002C7.62196 21.0001 7.49391 20.9512 7.39632 20.8537C7.20115 20.6586 7.20131 20.3418 7.39632 20.1466L15.5428 12.0002L7.39632 3.85367C7.20116 3.65844 7.20133 3.34197 7.39632 3.14663Z" fill="#E60000" /></svg>';
		return NavCONSTANTS.QUICK_LINK_ITEMS.map(function (item) {
			return `<a class="${item.className} link-button" href="${item.href}" aria-label="${item.ariaLabel}">
			<img src="${item.imgSrc}" alt="${item.imgAlt}" class="apple-icon"/>
				<div class="button">${item.titleCopy} </div>
				
			</a>`;
		}).join('');
	},

	applyChanges: function (el) {
		try {
			NavOBJ.buildCSS();
			NavOBJ.buildTemplate();

			if (!NavOBJ.config.navUpdated) {
				var supportNav = NavOBJ.getTitleList(3, 0, 0);
				var networkNav = NavOBJ.getTitleList(4, 0, 0);
				// relocate network under support 
				var networkLinks = networkNav.lvl2Elements.cloneNode(true);
				setTimeout(function () {
					// set delay here to see if reduce risk of network links in wrong spot
					supportNav.lvl2Elements.parentNode.after(networkLinks);
				}, 600);
				// replace to Deals, both innerHTML and titleCopy need to update otherwise text rollback after clicking
				networkNav.lvl1Title.innerHTML = NavCONSTANTS.NETWORK_TITLE_COPY;
				networkNav.lvl1Elements.titleCopy = NavCONSTANTS.NETWORK_TITLE_COPY;
				//or hide network button from top nav if BEST DEALS no longer needed.
				document.querySelector('vha-header').shadowRoot.querySelector('#\\31 -4 > span.menu-grouper > vha-header-accordion').style.display = 'none';

				NavOBJ.config.navUpdated = true;
			}

			const ul = document.querySelector('vha-header').shadowRoot.querySelector('header > ul > li.nav-mega-menu > div.nav-mega-onscreen > nav > vha-header-accordion');
			if (ul) {
				const fourth = document.querySelector('vha-header').shadowRoot.querySelector('header > ul > li.nav-mega-menu > div.nav-mega-onscreen > nav > vha-header-accordion > li:nth-child(6)');    // 4th item
				const second = document.querySelector('vha-header').shadowRoot.querySelector('header > ul > li.nav-mega-menu > div.nav-mega-onscreen > nav > vha-header-accordion > li:nth-child(6)');    // current Last item
				if (fourth) {
					ul.insertBefore(fourth, second || null);
				}
			}

			const anchors = document.querySelector('vha-header').shadowRoot.querySelectorAll('#wrapper-' + NavCONSTANTS.EXPERIMENT_ID + ' a');
			if (anchors && anchors.length) {
				anchors.forEach(function (anchor) {
					anchor.addEventListener('click', function () {
						const cls = (anchor.getAttribute && anchor.getAttribute('class')) || anchor.className || '';
						const primaryClass = cls.split(/\s+/)[0] || '';
						NavOBJ.tracking('nav-Apple ' + primaryClass);
					});
				});
			}

		} catch (error) {
			console.error('Error in applyChanges function:', error);
			NavOBJ.tracking('error applyChanges');
		}
	},
	getTitleList: function (lvl1Idx, lvl2Idx, lvl3Idx) {
		var catPosition = lvl1Idx ? '1-' + lvl1Idx : '1-0';
		var sevPosition = lvl2Idx ? '2-' + lvl2Idx : '2-0';
		var linkPosition = lvl3Idx ? lvl3Idx : 0;

		var lvl1Elements = document.getElementsByTagName(NavOBJ.config.vhaHeader)[0].shadowRoot.querySelector('header .nav-mega .nav-mega-menu nav [id="' + catPosition + '"]');
		var lvl1Title = lvl1Elements.querySelector('span[slot="title"]');

		var lvl2Elements = lvl1Elements.querySelector('.menu-grouper [classname="menu-level-2"] [id="' + sevPosition + '"]');
		var lvl2Title = lvl2Elements.querySelector('span[slot="title"]');
		var lvl3Label = lvl2Elements.querySelector('.menu-level-3 vha-header-item').shadowRoot.querySelectorAll('.header-item')[lvl3Idx].querySelector('vha-button');
		var lvl3Link = lvl2Elements.querySelector('.menu-level-3 vha-header-item').shadowRoot.querySelectorAll('.header-item')[lvl3Idx].querySelector('vha-button').shadowRoot.querySelector('a');
		return {
			'lvl1Title': lvl1Title,
			'lvl1Elements': lvl1Elements,
			'lvl2Title': lvl2Title,
			'lvl2Elements': lvl2Elements,
			'lvl3Label': lvl3Label,
			'lvl3Link': lvl3Link,
		}
	},
	tracking: function (value) {
		try {
			if (typeof dataLayer !== 'undefined' && dataLayer) { // Check if dataLayer exists
				croWD.utils.launchTracking(NavCONSTANTS.EXPERIMENT_ID,
					value, NavCONSTANTS.EXPERIMENT_VARIANT,
					''
				);
			} else {
				console.warn('dataLayer is not defined. Tracking event:', value, 'was not sent.');
			}
		} catch (error) {
			console.error('Error in tracking function:', error);
		}
	},
	buildCSS: function () {
		try {
			const header = document.querySelector(NavCONSTANTS.TARGET_ELEMENT);
			const shadowRoot = header && header.shadowRoot;
			if (!shadowRoot) {
				throw new Error('Navigation shadow root not found');
			}

			const styleSheet = document.createElement('style');
			styleSheet.setAttribute('type', 'text/css');
			styleSheet.setAttribute('id', `${NavCONSTANTS.EXPERIMENT_ID}-styles`);

			// Remove any existing stylesheet with the same ID
			const existingStyle = shadowRoot.getElementById(`${NavCONSTANTS.EXPERIMENT_ID}-styles`);
			if (existingStyle) {
				existingStyle.remove();
			}

			const css = NavCONSTANTS.CUSTOM_CSS
				.replace(/^\s*<style[^>]*>/i, '')
				.replace(/<\/style>\s*$/i, '');
			styleSheet.textContent = css;
			shadowRoot.appendChild(styleSheet);
		} catch (error) {
			console.error('Error in buildCSS function:', error); NavOBJ.tracking('error buildCSS');
		}
	},
	buildTemplate: function () {
		try {
			let template = document.createElement('div');
			template.id = 'wrapper-' + NavCONSTANTS.EXPERIMENT_ID;
			template.innerHTML = NavCONSTANTS.TEMPLATE_HTML
				.replace('{{PRODUCT_ITEMS}}', NavOBJ.getProductsMarkup())
				.replace('{{QUICK_LINK_ITEMS}}', NavOBJ.getQuickLinksMarkup());

			// let mainElement =  document.querySelector(NavCONSTANTS.TARGET_ELEMENT);
			let mainElement = document.querySelector('vha-header').shadowRoot.querySelector('#\\31 -4 > span.menu-grouper > vha-header-accordion')
			if (!mainElement) {
				throw new Error('Target element not found');
			}

			// Remove any existing template with the same ID
			const existingTemplate = document.getElementById('wrapper-' + NavCONSTANTS.EXPERIMENT_ID);
			if (existingTemplate) {
				existingTemplate.remove();
			}
			switch (NavCONSTANTS.TEMPLATE_INJECT_TYPE) {
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
			console.error('Error in buildTemplate function:', error); NavOBJ.tracking('error buildTemplate');
		}
	},
	waitForElement: function () {
		try {
			let rC = 0;
			let int = setInterval(() => {
				const el = document.querySelector(NavCONSTANTS.TARGET_ELEMENT);

				if (el && croWD) {
					clearInterval(int);
					int = null; NavOBJ.applyChanges(el);
				} else {
					rC++;
					if (rC >= NavCONSTANTS.INIT_MAX_RETRIES) {
						clearInterval(int);
						int = null;
						console.error('Element not found after max retries. NavOBJ'); NavOBJ.tracking('error elementsNotFound');
					}
				}
			}, NavCONSTANTS.INIT_RETRY_INTERVAL);

		} catch (error) {
			console.error('Error in waitForElement function:', error); NavOBJ.tracking('error waitForElement');
		}
	},
	init: function () {
		if (NavCONSTANTS.PAGES_INCLUDE.length === 0) {
			NavOBJ.waitForElement();
		} else if (NavCONSTANTS.PAGES_INCLUDE.includes(window.location.pathname) === 0) {
			NavOBJ.waitForElement();
		} else {
			NavOBJ.observe();
		}
	}

};

//NavOBJ.init();
//VT; you will need to check when croWD is ready on page
var crowdMaxNavCounter = 50;
var crowdFinderNav = setInterval(function () {
	crowdMaxNavCounter = crowdMaxNavCounter - 1;
	try {
		if (croWD && $.fn) {
			clearInterval(crowdFinderNav);
			NavOBJ.init();
			croWD.cmdr('DCP-115666', 'inject', 'Nav initialised');
		}
		if (crowdMaxNavCounter <= 0) {
			clearInterval(crowdFinderNav);
		}
	} catch (e) { }
}, 100);
