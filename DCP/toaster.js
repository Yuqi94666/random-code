
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
        <rect width="24" height="24" rx="12" fill="black" fill-opacity="0.83"/>
        <path d="M17.6466 5.6463C17.8416 5.45119 18.1586 5.45114 18.3536 5.6463C18.5487 5.84158 18.5487 6.15805 18.3536 6.35333L12.7071 11.9998L18.3536 17.6463C18.5488 17.8415 18.5488 18.1582 18.3536 18.3533C18.2561 18.4509 18.1279 18.4998 18.0001 18.4998C17.8722 18.4998 17.7441 18.4509 17.6466 18.3533L12.0001 12.7068L6.35359 18.3533C6.25599 18.4509 6.128 18.4998 6.00007 18.4998C5.87214 18.4998 5.74419 18.4509 5.64656 18.3533C5.45131 18.1581 5.45131 17.8415 5.64656 17.6463L11.293 11.9998L5.64656 6.35333C5.45131 6.15802 5.45131 5.84161 5.64656 5.6463C5.84188 5.45122 6.15831 5.45115 6.35359 5.6463L12.0001 11.2928L17.6466 5.6463Z" fill="white"/>
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
                            promotion_name: 'Prepaid $40 Toaster',
                            promotion_id: 'DCP18728',
                            logged_in: false,
                            creative_slot: 'Prepaid-toaster'
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
                                        'promotion_name': 'Prepaid BF $40 Toaster',
                                        'promotion_id': 'DCP18728',
                                        'logged_in': false,
                                        'creative_slot': 'Prepaid-BF-toaster',
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