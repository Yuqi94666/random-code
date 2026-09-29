
const DCP17900ToasterCONSTANTS = {
    EXPERIMENT_ID: 'DCP17900Toaster', // Experiment ID
    PAGES_INCLUDE: [], // ['iphone16'] // pages to be included, if empty observe is not used
    PAGES_EXCLUDE: ['&step=1', '&step=2', 'cart'], //pages to be excluded
    EXPERIMENT_VARIANT: 'variant', // possible values: variant|control|personalisation
    TARGET_ELEMENT: 'body', // Target element to be modified
    TEMPLATE_HTML: `
    <div class="toaster"><div class="toaster-close" aria-label="Close Toaster"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.6462 5.64648C17.8413 5.4513 18.1582 5.4513 18.3533 5.64648C18.5485 5.84181 18.5485 6.15824 18.3533 6.35352L12.7068 12L18.3533 17.6465C18.5485 17.8417 18.5486 18.1584 18.3533 18.3535C18.2558 18.4511 18.1276 18.5 17.9998 18.5C17.8719 18.5 17.7437 18.4511 17.6462 18.3535L11.9998 12.707L6.35327 18.3535C6.25565 18.451 6.12765 18.5 5.99976 18.5C5.87185 18.5 5.74385 18.4511 5.64624 18.3535C5.45104 18.1584 5.45115 17.8417 5.64624 17.6465L11.2927 12L5.64624 6.35352C5.45105 6.15827 5.45118 5.84181 5.64624 5.64648C5.84155 5.4513 6.15796 5.4513 6.35327 5.64648L11.9998 11.293L17.6462 5.64648Z" fill="#333333"/></svg></div>
        <div class="toaster-popup-desktop">
            <div class="pill-container-parent">
                <div class="pill-container">
                    <div class="pill">
                        <b class="status-text">Online only</b>
                    </div>
                </div>
                <b class="heading">Special prepaid offer</b>
                <div class="subheading">Get our $40 Prepaid Plus plan for only $10 on your first recharge. Save $30.</div>
                <div class="tc">28 day expiry. By invite only to selected new connections. Ends 04/10. T&C apply.</div>
            </div>
            <div class="buttons">
                <div class="toaster-buttons">
                    <div class="cta">
                        <div class="content">
                            <div class="button">Get this offer</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="toaster-popup-desktop-child"></div>
        </div>
        <div class="hat-wrapper">Special offer</div>
    </div>
    `, // HTML template to be injected
    TEMPLATE_INJECT_TYPE: 'append', // possible values: replace|before|prepend|after|append
    CUSTOM_CSS: `
	#DCP17900Toaster{position:fixed;left:-50px;top:50%;transform:translateX(-100%) translateY(-50%);transition:transform 300ms ease;z-index:999999;box-sizing:border-box}#DCP17900Toaster.open{transform:translateX(0) translateY(-50%)}#DCP17900Toaster .toaster-close{position:absolute;top:12px;right:12px;background:rgba(0,0,0,0);border:none;font-size:18px;line-height:1;color:#25282b;cursor:pointer;padding:4px;z-index:99}.toaster{position:relative;filter:drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.32));width:100%;display:flex;box-sizing:border-box;text-align:left;font-size:14px;color:#333}.toaster-popup-desktop{width:470px;border-radius:0px 6px 6px 0px;background-color:#fff;display:flex;flex-direction:column;align-items:flex-start;padding:48px 40px;box-sizing:border-box;position:relative;gap:24px}@media(max-width: 768px){.toaster-popup-desktop{width:320px;padding:24px}}.pill-container-parent{align-self:stretch;display:flex;flex-direction:column;align-items:flex-start;gap:16px;z-index:0}.pill-container{display:flex;align-items:flex-start;text-align:center}.pill{border-radius:999px;background-color:#f2f2f2;overflow:hidden;display:flex;align-items:center;justify-content:center;padding:4px 8px;box-sizing:border-box;min-width:80px}.status-text{flex:1;position:relative;line-height:18px;font-family:"VodafoneRegularBold",Arial,sans-serif}.heading{align-self:stretch;position:relative;font-size:28px;line-height:34px;font-family:"VodafoneRegularBold",Arial,sans-serif}@media(max-width: 768px){.heading{font-size:20px;line-height:28px}}.subheading{align-self:stretch;position:relative;font-size:18px;line-height:24px;}.tc{align-self:stretch;position:relative;line-height:18px;font-family:VodafoneLight !important}.buttons{align-self:stretch;display:flex;flex-direction:column;align-items:flex-start;z-index:1;text-align:center;font-size:20px;color:#fff}.toaster-buttons{display:flex;align-items:flex-start}.cta{height:50px;border-radius:6px;background-color:#e60000;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:15px 20px;box-sizing:border-box;min-width:150px;font-family:VodafoneLight,Arial,sans-serif}.cta:hover{background-color:#b80000;cursor:pointer}.content{width:100%;height:24px;display:flex;align-items:center;justify-content:center;max-width:100%}.button{position:relative;line-height:24px}.toaster-popup-desktop-child{width:430px;height:24px;margin:0 !important;position:absolute;top:20px;left:23px;-o-object-fit:cover;object-fit:cover;z-index:2}.hat-wrapper{position:absolute;right:-77px;bottom:73px;display:flex;transform:rotate(-90deg);padding:6px 18px;justify-content:center;align-items:center;border-radius:0 0 6px 6px;background:#9c2aa0;color:var(--Light-GlobalType-Tertiary, #FFF);font-feature-settings:"liga" off,"clig" off;font-family:"VodafoneRegularBold",Arial,sans-serif;font-size:16px;font-style:normal;font-weight:700;line-height:22px}.hat-wrapper:hover{cursor:pointer}
	`, // CSS to be injected
    INIT_RETRY_INTERVAL: 500, // milliseconds for init retry
    INIT_MAX_RETRIES: 20, // max retries for init
    ELEMENT_EVENT_PAIRS: [
        '.cta-upgrade:click' // Example of an element event pair, format 'selector:eventType'
    ]
};

let DCP17900ToasterOBJ = {
    applyChanges: function (el) {
        try {

            DCP17900ToasterOBJ.buildCSS(); 
            DCP17900ToasterOBJ.buildTemplate(); 

            const toasterDismissed = sessionStorage.getItem('DCP17900Dismissed');

            if (!toasterDismissed) {
                setTimeout(function () {
                    DCP17900ToasterOBJ.createSlideToaster();
                }, 20000);
            }

        } catch (error) {
            console.error('Error in applyChanges function:', error);
            DCP17900ToasterOBJ.tracking('error applyChanges');
        }
    },
    createSlideToaster: function () {
        try {
            const container = document.getElementById(`${DCP17900ToasterCONSTANTS.EXPERIMENT_ID}`);

            // helper functions
            const showToaster = () => {
                container.classList.add('open');
                container.classList.remove('visible');

                if (typeof dataLayer !== 'undefined' && dataLayer) {
                    dataLayer.push({
                        event: 'view_promotion',
                        event_params: {
                            promotion_name: 'Prepaid $40 Toaster',
                            promotion_id: 'DCP17900',
                            logged_in: false,
                            creative_slot: 'Popup-toaster'
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
                try { DCP17900ToasterOBJ.tracking('toaster closed'); } catch (err) { }
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
            setTimeout(container.style.left='0', 20);

            // wire up button click to navigate and hide
            const btn = container.querySelector('.cta');
            if (btn) {
                btn.addEventListener('click', (e) => {
                    try {
                        sessionStorage.setItem('DCP17900Dismissed', 'true');
                        window.open('https://www.vodafone.com.au/prepaid/plans/40-plus-offer', '_self', 'noopener');
                        hideToaster();
                        try {
                            DCP17900ToasterOBJ.tracking('toaster link clicked');
                            if (typeof dataLayer !== 'undefined' && dataLayer) {
                                dataLayer.push({
                                    'event': 'select_promotion',
                                    'event_params': {
                                        'promotion_name': 'Prepaid $40 Toaster',
                                        'promotion_id': 'DCP17900',
                                        'logged_in': false,
                                        'creative_slot': 'Prepaid-toaster',
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
                    DCP17900ToasterOBJ.tracking('toaster opened');
                } catch (err) { }
            });

            // optional: add a small 'close on outside click' to hide toaster
            document.addEventListener('click', function docClick(e) {
                if (!container.contains(e.target) && !container.contains(e.target)) {
                    hideToaster();
                }
            });

        } catch (error) {
            console.error('Error creating slide toaster:', error); DCP17900ToasterOBJ.tracking('error createSlideToaster');
        }
    },
    tracking: function (value) {
        try {
            if (typeof dataLayer !== 'undefined' && dataLayer) { // Check if dataLayer exists
                croWD.utils.launchTracking(DCP17900ToasterCONSTANTS.EXPERIMENT_ID,
                    value, DCP17900ToasterCONSTANTS.EXPERIMENT_VARIANT,
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
            styleSheet.setAttribute('id', `${DCP17900ToasterCONSTANTS.EXPERIMENT_ID}-styles`);

            // Remove any existing stylesheet with the same ID
            const existingStyle = document.getElementById(`${DCP17900ToasterCONSTANTS.EXPERIMENT_ID}-styles`);
            if (existingStyle) {
                existingStyle.remove();
            }

            // Append stylesheet to head
            const css = DCP17900ToasterCONSTANTS.CUSTOM_CSS;
            styleSheet.appendChild(document.createTextNode(css));
            document.head.appendChild(styleSheet);
        } catch (error) {
            console.error('Error in buildCSS function:', error); DCP17900ToasterOBJ.tracking('error buildCSS');
        }
    },
    buildTemplate: function () {
        try {
            let template = document.createElement('div');
            template.innerHTML = DCP17900ToasterCONSTANTS.TEMPLATE_HTML;
            template.id = DCP17900ToasterCONSTANTS.EXPERIMENT_ID;

            let mainElements = document.querySelectorAll(DCP17900ToasterCONSTANTS.TARGET_ELEMENT);
            if (mainElements.length < 1) {
                throw new Error('Template location element not found');
            }

            let mainElement = document.querySelector(DCP17900ToasterCONSTANTS.TARGET_ELEMENT);
            // Remove any existing template with the same ID
            const existingTemplate = document.getElementById(`${DCP17900ToasterCONSTANTS.EXPERIMENT_ID}`);
            if (existingTemplate) {
                existingTemplate.remove();
            }
            switch (DCP17900ToasterCONSTANTS.TEMPLATE_INJECT_TYPE) {
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
            console.error('Error in buildTemplate function:', error); DCP17900ToasterOBJ.tracking('error buildTemplate');
        }
    },
    addEventListener: function () {
        try {
            const elementEventPairs = DCP17900ToasterCONSTANTS.ELEMENT_EVENT_PAIRS || [];
            elementEventPairs.forEach(pair => {
                const [selector, eventType] = pair.split(':');
                const elements = document.querySelectorAll(selector);
                if (elements.length > 0) {
                    elements.forEach(el => {
                        el.addEventListener(eventType, () => {
                            DCP17900ToasterOBJ.tracking(eventType + ' ' + el.innerText);
                        });
                    });
                } else {
                    console.warn('Element not found for selector: ' + selector);
                }
            });
        } catch (error) {
            console.error('Error in addEventListener function:', error); DCP17900ToasterOBJ.tracking('error addEventListener');
        }
    },
    observe: function () {
        try {
            // Define the array of URLs to check against
            const includeUrls = DCP17900ToasterCONSTANTS.PAGES_INCLUDE;

            // Define the array of URLs to be excluded
            const excludedUrls = DCP17900ToasterCONSTANTS.PAGES_EXCLUDE;

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
                    DCP17900ToasterOBJ.waitForElement();
                }
            });

        } catch (error) {
            console.error('Error in observe function:', error); DCP17900ToasterOBJ.tracking('error observe');
        }
    },
    waitForElement: function () {
        try {
            let rC = 0;
            let int = setInterval(() => {
                const el = document.querySelector(DCP17900ToasterCONSTANTS.TARGET_ELEMENT);
                const croWD = window.croWD;

                if (el && croWD) {
                    clearInterval(int);
                    int = null; DCP17900ToasterOBJ.applyChanges(el);
                } else {
                    rC++;
                    if (rC >= DCP17900ToasterCONSTANTS.INIT_MAX_RETRIES) {
                        clearInterval(int);
                        int = null;
                        console.error('Element not found after max retries. DCP17900ToasterOBJ'); DCP17900ToasterOBJ.tracking('error elementsNotFound');
                    }
                }
            }, DCP17900ToasterCONSTANTS.INIT_RETRY_INTERVAL);

        } catch (error) {
            console.error('Error in waitForElement function:', error); DCP17900ToasterOBJ.tracking('error waitForElement');
        }
    },
    init: function () {
        if (DCP17900ToasterCONSTANTS.PAGES_INCLUDE.length === 0) {
            DCP17900ToasterOBJ.waitForElement();
        } else if (DCP17900ToasterCONSTANTS.PAGES_INCLUDE.includes(window.location.pathname) === 0) {
            DCP17900ToasterOBJ.waitForElement();
        } else {
            DCP17900ToasterOBJ.observe();
        }
    }

};

DCP17900ToasterOBJ.init();