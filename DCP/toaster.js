
const DCP18728ToasterCONSTANTS = {
    EXPERIMENT_ID: 'DCP18728Toaster', // Experiment ID
    PAGES_INCLUDE: [], // ['iphone16'] // pages to be included, if empty observe is not used
    PAGES_EXCLUDE: ['&step=1', '&step=2', 'cart'], //pages to be excluded
    EXPERIMENT_VARIANT: 'variant', // possible values: variant|control|personalisation
    TARGET_ELEMENT: 'body', // Target element to be modified
    TEMPLATE_HTML: `
<div class="toaster">
    <div class="toaster-close" aria-label="Close Toaster">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white"/>
        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="white"/>
        <path d="M5.64644 18.3535C5.74409 18.4511 5.87203 18.5 6.00001 18.5C6.128 18.5 6.25594 18.4511 6.35359 18.3535L12 12.707L17.6465 18.3535C17.744 18.4511 17.8721 18.5 18 18.5C18.1279 18.5 18.256 18.4511 18.3535 18.3535C18.5488 18.1583 18.5488 17.8416 18.3535 17.6464L12.7071 12L18.3535 6.35354C18.5488 6.15823 18.5488 5.8417 18.3535 5.64639C18.1585 5.4512 17.8416 5.4512 17.6465 5.64639L12 11.2929L6.35359 5.64639C6.15828 5.4512 5.84175 5.4512 5.64644 5.64639C5.45119 5.8417 5.45119 6.15823 5.64644 6.35354L11.2929 12L5.64644 17.6464C5.45119 17.8416 5.45119 18.1583 5.64644 18.3535Z" fill-rule="evenodd" clip-rule="evenodd" fill="#25282B"/>
        </svg>
    </div>
    <div class="image-container">
        <img src="https://www.vodafone.com.au/images/merch/events/black-friday-2026/1478-bf-prepaid-exit-intent-desktop.webp"
            alt="Black Friday Offer" class="bf-desktop-image"/>
        <img src="https://www.vodafone.com.au/images/merch/events/black-friday-2026/1478-bf-prepaid-exit-intent-mobile.webp"
            alt="Black Friday Offer" class="bf-mobile-image"/>
    </div>
    <div class="toaster-popup-desktop">
        <div class="pill-container-parent">
            <b class="heading">Get a $40 prepaid plan for $9</b>
            <div class="subheading">Save $31 on your first recharge. Online only.</div>
            <div class="tc">28 day expiry. By invite only to selected new connections. Ends 03/12. T&C apply.</div>
        </div>
      
     
        <div class="cta">
            <div class="content"> Get this offer </div>
        </div>
  
        <div class="toaster-popup-desktop-child"></div>
    </div>
    <div class="hat-wrapper">Black Friday offer</div>
</div>
    `, // HTML template to be injected
    TEMPLATE_INJECT_TYPE: 'append', // possible values: replace|before|prepend|after|append
    CUSTOM_CSS: `
	#DCP18728Toaster {
	position: fixed;
	left: -50px;
	top: 50%;
	transform: translateX(-100%) translateY(-50%);
	transition: transform 300ms ease;
	z-index: 999999;
	box-sizing: border-box
}

#DCP18728Toaster.open {
	transform: translateX(0) translateY(-50%)
}

#DCP18728Toaster .toaster-close {
	position: absolute;
	top: 12px;
	right: 12px;
	background: rgba(0, 0, 0, 0);
	border: none;
	font-size: 18px;
	line-height: 1;
	color: #25282b;
	cursor: pointer;
	padding: 4px;
	z-index: 99
}

.toaster {
	position: relative;
	filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.32));
	width: 100%;
	display: flex;
	box-sizing: border-box;
	text-align: left;
	font-size: 14px;
	color: #333;
	flex-direction: column;
}

.toaster-popup-desktop {
	width: 470px;
	border-radius: 0px 0px 6px 0px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 48px 40px;
	box-sizing: border-box;
	position: relative;
	gap: 24px
}

.pill-container-parent {
	align-self: stretch;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 16px;
	z-index: 0
}

.heading {
	align-self: stretch;
	position: relative;
	font-size: 28px;
	line-height: 34px;
	font-family: "VodafoneRegularBold", Arial, sans-serif
}

.subheading {
	align-self: stretch;
	position: relative;
	font-size: 18px;
	line-height: 24px;
}

.tc {
	align-self: stretch;
	position: relative;
	line-height: 18px;
	font-family: VodafoneLight !important
}

.cta {
    display: flex;
    height: 44px;
    padding: 15px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
	border-radius: 6px;
	background-color: #e60000;
	font-size: 18px;
	color: #fff;
    font-weight: 400;
    line-height: 24px; 
}

.cta:hover {
	background-color: #b80000;
	cursor: pointer
}

.content {
	width: 100%;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 100%
}

.toaster-popup-desktop-child {
	height: 24px;
	margin: 0 !important;
	position: absolute;
	top: 20px;
	left: 23px;
	-o-object-fit: cover;
	object-fit: cover;
	z-index: 2
}

.hat-wrapper {
	position: absolute;
	right: -94px;
	bottom: 73px;
	display: flex;
	transform: rotate(-90deg);
	padding: 6px 18px;
	justify-content: center;
	align-items: center;
	border-radius: 0 0 6px 6px;
	background: #000000;
	color: var(--Light-GlobalType-Tertiary, #FFF);
	font-feature-settings: "liga" off, "clig" off;
	font-family: "VodafoneRegularBold", Arial, sans-serif;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 22px
}

.hat-wrapper:hover {
	cursor: pointer
}
    @media(max-width: 768px) {
	.toaster-popup-desktop {
		width: 320px;
		padding: 24px
	}
    .bf-desktop-image{
        display: none;
    }
    .bf-mobile-image{
        display: block;
        border-radius: 0 6px 0 0;
    }
    .heading {
		font-size: 20px;
		line-height: 28px;
	}

}
@media(min-width: 769px) {
    .bf-desktop-image{
        display: block;
        border-radius: 0 6px 0 0;
    }
    .bf-mobile-image{
        display: none;
    }
    .cta{
        width: fit-content;
    }
}
	`, // CSS to be injected
    INIT_RETRY_INTERVAL: 500, // milliseconds for init retry
    INIT_MAX_RETRIES: 20, // max retries for init
    ELEMENT_EVENT_PAIRS: [
        '.cta-upgrade:click' // Example of an element event pair, format 'selector:eventType'
    ]
};

let DCP18728ToasterOBJ = {
    applyChanges: function (el) {
        try {

            DCP18728ToasterOBJ.buildCSS();
            DCP18728ToasterOBJ.buildTemplate();
            DCP18728ToasterOBJ.tracking('display');
            const toasterDismissed = sessionStorage.getItem('DCP18728Dismissed');

            if (!toasterDismissed) {
                setTimeout(function () {
                    DCP18728ToasterOBJ.createSlideToaster();
                }, 1000);
            }

        } catch (error) {
            console.error('Error in applyChanges function:', error);
            DCP18728ToasterOBJ.tracking('error applyChanges');
        }
    },
    createSlideToaster: function () {
        try {
            const container = document.getElementById(`${DCP18728ToasterCONSTANTS.EXPERIMENT_ID}`);
            let promotionViewed = false;

            // helper functions
            const showToaster = () => {
                container.classList.add('open');
                container.classList.remove('visible');

                if (!promotionViewed && typeof dataLayer !== 'undefined' && dataLayer) {
                    promotionViewed = true;
                    dataLayer.push({
                        event: 'view_promotion',
                        event_params: {
                            promotion_name: 'Prepaid BF Toaster',
                            promotion_id: 'DCP18728',
                            logged_in: false,
                            creative_slot: 'Prepaid-BF-Toaster'
                        }
                    });
                }
            };
            const hideToaster = () => {
                container.classList.remove('open');
                // wait for transition end before showing toggle to avoid overlap
                setTimeout(() => container.classList.add('visible'), 320);
            };
            const closeToaster = () => {
                hideToaster();
                try { DCP18728ToasterOBJ.tracking('toaster closed'); } catch (err) { }
            };
            const closeToasterImmediately = () => {
                container.style.transition = 'none';
                container.classList.remove('open');
                container.classList.add('visible');

                requestAnimationFrame(() => {
                    container.style.transition = '';
                });
            };

            // Browser back navigation can restore this page from the back-forward cache.
            // Reset the cached DOM so the toaster does not remain open on return.
            window.addEventListener('pageshow', function (event) {
                if (event.persisted) {
                    closeToasterImmediately();
                }
            });

            // initial: show toaster
            setTimeout(showToaster, 10);

            //Pulls tag outside after first show
            setTimeout(container.style.left = '0', 20);

            // wire up button click to navigate and hide
            const btn = container.querySelector('.cta');
            if (btn) {
                btn.addEventListener('click', (e) => {
                    try {
                        sessionStorage.setItem('DCP18728Dismissed', 'true');
                        window.open('https://www.vodafone.com.au/prepaid/plans/40-plus-offer', '_self', 'noopener');
                        hideToaster();
                        try {
                            DCP18728ToasterOBJ.tracking('toaster link clicked');
                            if (typeof dataLayer !== 'undefined' && dataLayer) {
                                dataLayer.push({
                                    'event': 'select_promotion',
                                    'event_params': {
                                        'promotion_name': 'Prepaid BF Toaster',
                                        'promotion_id': 'DCP18728',
                                        'logged_in': false,
                                        'creative_slot': 'Prepaid-BF-Toaster',
                                    }
                                });
                            }
                        } catch (err) { }
                    } catch (err) { /* ignore */ }
                });
            }

            // close button handling
            const closeBtn = container.querySelector('.toaster-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    closeToaster();
                });
            }

            // show/hide via toggle
            container.addEventListener('click', (e) => {
                e.preventDefault();
                showToaster();
                try {
                    DCP18728ToasterOBJ.tracking('toaster opened');
                } catch (err) { }
            });

            // optional: add a small 'close on outside click' to hide toaster
            document.addEventListener('click', function docClick(e) {
                if (!container.contains(e.target) && !container.contains(e.target)) {
                    hideToaster();
                }
            });

        } catch (error) {
            console.error('Error creating slide toaster:', error); DCP18728ToasterOBJ.tracking('error createSlideToaster');
        }
    },
    tracking: function (value) {
        try {
            if (typeof dataLayer !== 'undefined' && dataLayer) { // Check if dataLayer exists
                croWD.utils.launchTracking(DCP18728ToasterCONSTANTS.EXPERIMENT_ID,
                    value, DCP18728ToasterCONSTANTS.EXPERIMENT_VARIANT,
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
            const styleSheet = document.createElement('style');
            styleSheet.setAttribute('type', 'text/css');
            styleSheet.setAttribute('id', `${DCP18728ToasterCONSTANTS.EXPERIMENT_ID}-styles`);

            // Remove any existing stylesheet with the same ID
            const existingStyle = document.getElementById(`${DCP18728ToasterCONSTANTS.EXPERIMENT_ID}-styles`);
            if (existingStyle) {
                existingStyle.remove();
            }

            // Append stylesheet to head
            const css = DCP18728ToasterCONSTANTS.CUSTOM_CSS;
            styleSheet.appendChild(document.createTextNode(css));
            document.head.appendChild(styleSheet);
        } catch (error) {
            console.error('Error in buildCSS function:', error); DCP18728ToasterOBJ.tracking('error buildCSS');
        }
    },
    buildTemplate: function () {
        try {
            let template = document.createElement('div');
            template.innerHTML = DCP18728ToasterCONSTANTS.TEMPLATE_HTML;
            template.id = DCP18728ToasterCONSTANTS.EXPERIMENT_ID;

            let mainElements = document.querySelectorAll(DCP18728ToasterCONSTANTS.TARGET_ELEMENT);
            if (mainElements.length < 1) {
                throw new Error('Template location element not found');
            }

            let mainElement = document.querySelector(DCP18728ToasterCONSTANTS.TARGET_ELEMENT);
            // Remove any existing template with the same ID
            const existingTemplate = document.getElementById(`${DCP18728ToasterCONSTANTS.EXPERIMENT_ID}`);
            if (existingTemplate) {
                existingTemplate.remove();
            }
            switch (DCP18728ToasterCONSTANTS.TEMPLATE_INJECT_TYPE) {
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
            console.error('Error in buildTemplate function:', error); DCP18728ToasterOBJ.tracking('error buildTemplate');
        }
    },
    addEventListener: function () {
        try {
            const elementEventPairs = DCP18728ToasterCONSTANTS.ELEMENT_EVENT_PAIRS || [];
            elementEventPairs.forEach(pair => {
                const [selector, eventType] = pair.split(':');
                const elements = document.querySelectorAll(selector);
                if (elements.length > 0) {
                    elements.forEach(el => {
                        el.addEventListener(eventType, () => {
                            DCP18728ToasterOBJ.tracking(eventType + ' ' + el.innerText);
                        });
                    });
                } else {
                    console.warn('Element not found for selector: ' + selector);
                }
            });
        } catch (error) {
            console.error('Error in addEventListener function:', error); DCP18728ToasterOBJ.tracking('error addEventListener');
        }
    },
    observe: function () {
        try {
            // Define the array of URLs to check against
            const includeUrls = DCP18728ToasterCONSTANTS.PAGES_INCLUDE;

            // Define the array of URLs to be excluded
            const excludedUrls = DCP18728ToasterCONSTANTS.PAGES_EXCLUDE;

            croWD.hotbed.listen('croPageTrack', function (observable, eventType, data) {
                const currentUrl = window.location.href;

                // Check if the current URL exists in the array and not in the excluded list
                const matchedUrl = includeUrls.find(url => {
                    const isMatch = currentUrl.toLowerCase().includes(url.toLowerCase());
                    const isExcluded = excludedUrls.some(excludedUrl =>
                        currentUrl.toLowerCase().includes(excludedUrl.toLowerCase())
                    );
                    return isMatch && !isExcluded;
                });

                if (matchedUrl) {
                    DCP18728ToasterOBJ.waitForElement();
                }
            });

        } catch (error) {
            console.error('Error in observe function:', error); DCP18728ToasterOBJ.tracking('error observe');
        }
    },
    waitForElement: function () {
        try {
            let rC = 0;
            let int = setInterval(() => {
                const el = document.querySelector(DCP18728ToasterCONSTANTS.TARGET_ELEMENT);
                const croWD = window.croWD;

                if (el && croWD) {
                    clearInterval(int);
                    int = null; DCP18728ToasterOBJ.applyChanges(el);
                } else {
                    rC++;
                    if (rC >= DCP18728ToasterCONSTANTS.INIT_MAX_RETRIES) {
                        clearInterval(int);
                        int = null;
                        console.error('Element not found after max retries. DCP18728ToasterOBJ'); 
                        DCP18728ToasterOBJ.tracking('error elementsNotFound');
                    }
                }
            }, DCP18728ToasterCONSTANTS.INIT_RETRY_INTERVAL);

        } catch (error) {
            console.error('Error in waitForElement function:', error); 
            DCP18728ToasterOBJ.tracking('error waitForElement');
        }
    },
    init: function () {
        if (DCP18728ToasterCONSTANTS.PAGES_INCLUDE.length === 0) {
            DCP18728ToasterOBJ.waitForElement();
        } else if (DCP18728ToasterCONSTANTS.PAGES_INCLUDE.includes(window.location.pathname) === 0) {
            DCP18728ToasterOBJ.waitForElement();
        } else {
            DCP18728ToasterOBJ.observe();
        }
    }

};

DCP18728ToasterOBJ.init();



const DCP18728PrepaidCONSTANTS = {
    EXPERIMENT_ID: 'DCP18728Toaster', // Experiment ID
    PAGES_INCLUDE: [], // ['iphone16'] // pages to be included, if empty observe is not used
    PAGES_EXCLUDE: [], //pages to be excluded
    EXPERIMENT_VARIANT: 'control', // possible values: variant|control|personalisation
    TARGET_ELEMENT: 'body', // Target element to be modified
    TEMPLATE_HTML: ``, // HTML template to be injected
    TEMPLATE_INJECT_TYPE: 'append', // possible values: replace|before|prepend|after|append
    CUSTOM_CSS: ``,
    // CSS to be injected
    INIT_RETRY_INTERVAL: 500, // milliseconds for init retry
    INIT_MAX_RETRIES: 20, // max retries for init
    ELEMENT_EVENT_PAIRS: [
        // '.cta-upgrade:click' // Example of an element event pair, format 'selector:eventType'
    ]
};

let DCP18728PrepaidOBJ = {
  applyChanges: function (el) {
      try {

        // this.buildCSS(); 
        // this.buildTemplate();

        DCP18728PrepaidOBJ.tracking('display');

      } catch (error) {
          console.error('Error in applyChanges function:', error);
          DCP18728PrepaidOBJ.tracking('error applyChanges');
      }
  },
  tracking: function (value) {
      try {
          if (typeof dataLayer !== 'undefined' && dataLayer) { // Check if dataLayer exists
            croWD.utils.launchTracking(
              DCP18728PrepaidCONSTANTS.EXPERIMENT_ID,
              value,
              DCP18728PrepaidCONSTANTS.EXPERIMENT_VARIANT,
              ''
          );
          } else {
              console.warn('dataLayer is not defined. Tracking event:', value, 'was not sent.');
          }
      } catch (error) {
          console.error('Error in tracking function:', error);
      }
  },
  waitForElement: function () {
      try {
          let rC = 0;
          let int = setInterval(() => {

              const el = document.querySelector(DCP18728PrepaidCONSTANTS.TARGET_ELEMENT);

              if (el && croWD) {
                  clearInterval(int);
                  int = null;
                  DCP18728PrepaidOBJ.applyChanges(el);
              } else {
                  rC++;
                  if (rC >= DCP18728PrepaidCONSTANTS.INIT_MAX_RETRIES) {
                      clearInterval(int);
                      int = null;
                      console.error('Element not found after max retries. DCP18728Toaster');
                      DCP18728PrepaidOBJ.tracking('error elementsNotFound');
                  }
              }
          }, DCP18728PrepaidCONSTANTS.INIT_RETRY_INTERVAL);

      } catch (error) {
          console.error('Error in waitForElement function:', error);
          DCP18728PrepaidOBJ.tracking('error waitForElement');
      }
  },
  init: function () {
    DCP18728PrepaidOBJ.waitForElement();
  }

};

DCP18728PrepaidOBJ.init();
 