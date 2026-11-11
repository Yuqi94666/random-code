const CAMPAIGN_ID = 'DCP-18720-esim-banner';
const TEMPLATE_INJECT_TYPE = 'replace';
const InlinebannerCONSTANTS = {
	EXPERIMENT_ID: CAMPAIGN_ID, // Experiment ID
	EXPERIMENT_VARIANT: 'variant', // possible values: variant|control|personalisation
	TARGET_ELEMENT: '#cludo-search-results > div.search-banner > div:nth-child(2) > p > vha-hero-banner', // Target element to be modified
	TEMPLATE_HTML: `
	<div class="cta-container">
		<a class="btn" href="https://www.vodafone.com.au/support/device/replace-sim?tabs=physical-sim-to-an-esim" aria-label="Switch to eSIM" target="_self">Switch to eSIM</a>
		<a class="btn secCTA" style="background: transparent;color: #fff;" href="https://www.vodafone.com.au/support/device/esim" aria-label="Manage your eSIM" target="_self" >Manage your eSIM</a>
	</div>
    `,
	CUSTOM_CSS: `
   .btn{
  display: flex;
height: 50px;
min-width: 150px;
padding: 15px 20px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;
}
    `,
	TEMPLATE_INJECT_TYPE: TEMPLATE_INJECT_TYPE, // possible values: replace|before|prepend|after|append
	INIT_RETRY_INTERVAL: 500, // milliseconds for init retry
	INIT_MAX_RETRIES: 20, // max retries for init
};

const CTAOBJ = {
	applyChanges: function () {
		try {
			console.log('[DCP] applyChanges started');
			CTAOBJ.buildCSS();
			const wrapper = CTAOBJ.buildTemplate();
			console.log('[DCP] Wrapper returned from buildTemplate:', wrapper);
			if (!wrapper) {
				console.error('[DCP] applyChanges stopped: wrapper was not created');
				return;
			}

			const ctas = wrapper.querySelectorAll('.primaryCTA');
			console.log('[DCP] CTA elements found for click tracking:', ctas.length);
			ctas.forEach(function (cta, index) {
				console.log('[DCP] Adding click listener to CTA', index + 1, cta.textContent.trim());
				cta.addEventListener('click', function () {
					console.log('[DCP] CTA clicked:', cta.textContent.trim());
					CTAOBJ.tracking('click ' + cta.textContent.trim());
				});
			});
			CTAOBJ.swapItems();
			console.log('[DCP] applyChanges completed');
		} catch (error) {
			console.error('Error in applyChanges function:', error);
			CTAOBJ.tracking('error applyChanges');
		}
	},
	tracking: function (value) {
		try {
			if (typeof dataLayer !== 'undefined' && dataLayer) { // Check if dataLayer exists
				croWD.utils.launchTracking(InlinebannerCONSTANTS.EXPERIMENT_ID,
					value, InlinebannerCONSTANTS.EXPERIMENT_VARIANT,
					''
				);
				window.optimizely = window.optimizely || [];
				window.optimizely.push({
					type: "event",
					eventName: "cludo_esim_banner_cta_variant",
				});
			} else {
				console.warn('dataLayer is not defined. Tracking event:', value, 'was not sent.');
			}
		} catch (error) {
			console.error('Error in tracking function:', error);
		}
	},
	buildCSS: function () {
		try {
			console.log('[DCP] buildCSS started');
			const styleSheet = document.createElement('style');
			styleSheet.setAttribute('type', 'text/css');
			styleSheet.setAttribute('id', `${InlinebannerCONSTANTS.EXPERIMENT_ID}-styles`);

			// Remove any existing stylesheet with the same ID
			const existingStyle = document.getElementById(`${InlinebannerCONSTANTS.EXPERIMENT_ID}-styles`);
			if (existingStyle) {
				existingStyle.remove();
			}

			// Append stylesheet to head
			const css = InlinebannerCONSTANTS.CUSTOM_CSS;
			styleSheet.appendChild(document.createTextNode(css));
			document.head.appendChild(styleSheet);
			console.log('[DCP] buildCSS completed');
		} catch (error) {
			console.error('Error in buildCSS function:', error); CTAOBJ.tracking('error buildCSS');
		}
	},
	buildTemplate: function () {
		try {
			console.log('[DCP] buildTemplate started; injection mode:', InlinebannerCONSTANTS.TEMPLATE_INJECT_TYPE);
			let template = document.createElement('div');
			template.innerHTML = InlinebannerCONSTANTS.TEMPLATE_HTML;
			console.log('[DCP] Template parsed; CTA count:', template.querySelectorAll('.primaryCTA').length);
			template.id = 'wrapper-' + InlinebannerCONSTANTS.EXPERIMENT_ID;

			let mainElement = document.querySelector(InlinebannerCONSTANTS.TARGET_ELEMENT);
			console.log('[DCP] Banner host lookup:', mainElement);
			console.log('[DCP] inline:', document.querySelector('#search-results > section > ul > li:nth-child(3)'));
			if (!mainElement || !mainElement.shadowRoot) {
				throw new Error('Banner host or its shadow root is unavailable.');
			}
			console.log('[DCP] Banner shadow root found');
			// let ctaContianer = croWD.utils.getEleFromPage(document.getElementsByTagName('vha-hero-banner')[0],
			// 	'vha-button', 1
			// )			
			const shadowRoot = mainElement.shadowRoot;
			let ctaContianer = shadowRoot.querySelector("div > vha-grid > div > div");
			console.log('[DCP] CTA container lookup:', ctaContianer);
			if (!ctaContianer) {
				throw new Error('CTA container was not found inside the banner shadow root.');
			}
			// Remove any existing template with the same ID
			const wrapperId = 'wrapper-' + InlinebannerCONSTANTS.EXPERIMENT_ID;
			const existingTemplate = shadowRoot.querySelector('#' + wrapperId);
			if (existingTemplate) {
				console.log('[DCP] Removing existing injected wrapper');
				existingTemplate.remove();
			}
			console.log('[DCP] Injecting template into CTA container');
			switch (InlinebannerCONSTANTS.TEMPLATE_INJECT_TYPE) {
				case 'replace':
					ctaContianer.insertAdjacentHTML('afterend', template.outerHTML);
					ctaContianer.remove(); // Remove the original element after replacing
					break;
				case 'before':
					ctaContianer.insertAdjacentHTML('beforebegin', template.outerHTML);
					break;
				case 'prepend':
					ctaContianer.insertBefore(template, ctaContianer.firstChild);
					break;
				case 'after':
					ctaContianer.insertAdjacentHTML('afterend', template.outerHTML);
					break;
				default:
					//case 'append'
					ctaContianer.appendChild(template);
					break;
			}
			const injectedWrapper = shadowRoot.querySelector('#' + wrapperId);
			console.log('[DCP] Injected wrapper lookup:', injectedWrapper);
			return injectedWrapper;
		} catch (error) {
			console.error('Error in buildTemplate function:', error);
			CTAOBJ.tracking('error buildTemplate');
			return null;
		}
	},
	init: function () {
		try {
			console.log('[DCP] init started; target selector:', InlinebannerCONSTANTS.TARGET_ELEMENT);
			let rC = 0;
			let lastReadinessState = '';
			let int = setInterval(() => {
				const el = document.querySelector(InlinebannerCONSTANTS.TARGET_ELEMENT);
				const shadowRoot = el && el.shadowRoot;
				const ctaContainer = shadowRoot && shadowRoot.querySelector("div > vha-grid > div > div");
				const hasCroWD = typeof croWD !== 'undefined' && !!croWD;
				rC++;
				const readiness = {
					hostFound: !!el,
					shadowRootFound: !!shadowRoot,
					ctaContainerFound: !!ctaContainer,
					croWDReady: hasCroWD,
				};
				const readinessState = JSON.stringify(readiness);
				if (readinessState !== lastReadinessState) {
					console.log('[DCP] Initialization state changed:', readiness);
					lastReadinessState = readinessState;
				}

				if (el && ctaContainer && hasCroWD) {
					console.log('[DCP] Initialization conditions met');
					clearInterval(int);
					int = null;
					CTAOBJ.applyChanges();
				} else if (rC === InlinebannerCONSTANTS.INIT_MAX_RETRIES) {
					console.warn('[DCP] Still waiting for Cludo search results after', rC, 'checks; will keep waiting:', readiness);
				}
			}, InlinebannerCONSTANTS.INIT_RETRY_INTERVAL);

		} catch (error) {
			console.error('Error in init function:', error);
			CTAOBJ.tracking('error init');
		}
	},

	swapItems: function (retryCount = 0) {
  const maxRetries = 20;
  const retryDelay = 500;

  const ul = document.querySelector('#search-results > section > ul');
  const items = ul ? Array.from(ul.children) : [];

  console.log('[DCP] swapItems attempt:', retryCount + 1, {
    ulFound: !!ul,
    itemCount: items.length
  });

  // Wait until the UL and at least five items are available
  if (!ul || items.length < 5) {
    if (retryCount < maxRetries) {
      setTimeout(function () {
        CTAOBJ.swapItems(retryCount + 1);
      }, retryDelay);
    } else {
      console.warn('[DCP] swapItems stopped: search items were not ready');
    }

    return;
  }

  // Prevent the same list from being reordered more than once
  if (ul.dataset.dcpReordered === 'true') {
    console.log('[DCP] Search results already reordered');
    return;
  }

  // Store original items before changing the DOM
  const item1 = items[0];
  const item2 = items[1];
  const item3 = items[2];
  const item4 = items[3];
  const item5 = items[4];

  // Hide original item 1
  item1.style.setProperty('display', 'none', 'important');
	item3.style.setProperty('display', 'none', 'important');
  // Original: 1, 2, 3, 4, 5, 6...
  // DOM:      5, 1(hidden), 2, 4, 3, 6...
  // Visible:  5, 2, 4, 3, 6...

  ul.insertBefore(item5, item1);
  ul.insertBefore(item4, item3);

  ul.dataset.dcpReordered = 'true';

  console.log('[DCP] Search results reordered successfully', {
    item5,
    item2,
    item4,
    item3,
    hiddenItem: item1,item3
  });
}
};

CTAOBJ.init();