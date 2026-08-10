const pillCONSTANTS = {
    
    // EXPERIMENT_ID: extension.code, // Experiment ID
    
    EXPERIMENT_ID: 'DCP17963', // Experiment ID
    EXPERIMENT_VARIANT: 'personalisation', // possible values: variant|control|personalisation
    TARGET_ELEMENT: 'h1', // Target element to be modified
    PILL_BORDER_COLOR: '#e60000',
    PILL_FONT_COLOR: '#ffffff',
    PILL_BG_COLOR: '#e60000',
    PILL_BG_COLOR_HOVER: '#900',
    PILL_ICON: 'https://www.vodafone.com.au/images/icon/system/white/price-tag.svg',
    PILL_LABEL_COPY: 'Introductory offer',
    TEMPLATE_COPY: `<div class="wrapper-component" aria-label="Promotional offer">
        <div
            class="price-tag-pill track-price-tag-pill" aria-label="View EOFY Sale offers">
            <span class="price-tag-pill__icon-wrap" aria-hidden="true">
                <span class="price-tag-pill__icon"></span>
            </span>
            <span class="price-tag-pill__label-wrap">
                <span class="price-tag-pill__label"></span>
            </span>
        </div>
    </div>`, // HTML template to be injected
    TEMPLATE_INJECT_TYPE: 'before', // possible values: replace|before|prepend|after|append
    CUSTOM_CSS: `.bXgROp{position: relative;}.wrapper-component{display:inline-flex;align-items:center;padding-bottom: 16px;}.wrapper-component .price-tag-pill{font-family:VodafoneRegularBold,Arial,sans-serif;font-weight:700;display:inline-flex;align-items:center;gap:7px;width:-moz-fit-content;width:fit-content;padding:6px 16px;border-radius:999px;border:1px solid var(--pill-border-color,#e60000);background:var(--pill-bg-color,#e60000);color:var(--pill-font-color,#ffffff);cursor:default;transition:background-color .2s ease,border-color .2s ease}.wrapper-component .price-tag-pill.is-interactive{cursor:pointer}.wrapper-component .price-tag-pill.is-interactive:hover{background:var(--pill-bg-hover-color,#900);border-color:var(--pill-bg-hover-color,#900)}.wrapper-component .price-tag-pill.is-interactive:focus-visible{outline:2px solid #111;outline-offset:2px}.wrapper-component .price-tag-pill__icon-wrap{display:flex;align-items:center;justify-content:center;width:20px;height:20px;flex:0 0 20px}.wrapper-component .price-tag-pill__icon{width:20px;height:20px;background-color:var(--pill-font-color,#ffffff);-webkit-mask-image:var(--pill-icon);-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;-webkit-mask-size:contain;mask-image:var(--pill-icon);mask-repeat:no-repeat;mask-position:center;mask-size:contain}.wrapper-component .price-tag-pill__label-wrap{display:flex;align-items:center}.wrapper-component .price-tag-pill__label{display:inline-block;white-space:nowrap;font-size:16px;line-height:22px}@media (max-width:768px){.wrapper-component .price-tag-pill__label{font-size:14px;line-height:20px}}`, // CSS to be injected
    ELEMENT_EVENT_PAIRS: ['.track-price-tag-pill:click'],
    // SCROLL_TO_ELEMENT: '*[data-testid="tradeIn-card"]',
    SCROLL_TO_ELEMENT: '',
    
    INIT_RETRY_INTERVAL: 500, // milliseconds for init retr
    INIT_MAX_RETRIES: 20, // max retries for init
};

let pillOBJ = {
    applyChanges: function (el) {
        try {
            //Add your logic here
            pillOBJ.buildTemplate();
        } catch (error) {
            console.error('Error in applyChanges function:', error);
        }
    },
    tracking: function (value) {
        try {
            if (typeof dataLayer !== 'undefined' && dataLayer) { // Check if dataLayer exists
                croWD.utils.launchTracking(
                    pillCONSTANTS.EXPERIMENT_ID,
                    value,
                    pillCONSTANTS.EXPERIMENT_VARIANT,
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
            styleSheet.setAttribute('id', `${pillCONSTANTS.EXPERIMENT_ID}-styles`);

            // Remove any existing stylesheet with the same ID
            const existingStyle = document.getElementById(`${pillCONSTANTS.EXPERIMENT_ID}-styles`);
            if (existingStyle) {
                existingStyle.remove();
            }

            // Scope all selectors to this experiment so multiple pills can coexist on one page
            const css = pillCONSTANTS.CUSTOM_CSS.replaceAll(
                '.wrapper-component',
                `#${pillCONSTANTS.EXPERIMENT_ID} .wrapper-component`
            );
            styleSheet.appendChild(document.createTextNode(css));
            return styleSheet;
        } catch (error) {
            console.error('Error in buildCSS function:', error);
            pillOBJ.tracking('error buildCSS');
            return null;
        }
    },
    buildTemplate: function () {
        try {
            let eTarget = document.querySelector(pillCONSTANTS.TARGET_ELEMENT);

            // Check if target element exists
            if (!eTarget) {
                console.error('Target element mobile title is not found');
                return;
            }

            // Check if pill already exists
            if (document.querySelector(`#${pillCONSTANTS.EXPERIMENT_ID}`)) {
                return;
            }

            // Create pill element from HTML string
            let pill = document.createElement('div');
            pill.id = pillCONSTANTS.EXPERIMENT_ID;
            pill.innerHTML = pillCONSTANTS.TEMPLATE_COPY;

            const styleSheet = pillOBJ.buildCSS();

            const pillButton = pill.querySelector('.price-tag-pill');
            if (pillButton) {
                pillButton.style.setProperty('--pill-border-color', pillCONSTANTS.PILL_BORDER_COLOR);
                pillButton.style.setProperty('--pill-font-color', pillCONSTANTS.PILL_FONT_COLOR);
                pillButton.style.setProperty('--pill-bg-color', pillCONSTANTS.PILL_BG_COLOR);
                pillButton.style.setProperty('--pill-bg-hover-color', pillCONSTANTS.PILL_BG_COLOR_HOVER);
            }

            const pillIcon = pill.querySelector('.price-tag-pill__icon');
            if (pillIcon) {
                pillIcon.style.setProperty('--pill-icon', `url('${pillCONSTANTS.PILL_ICON}')`);
            }

            const pillLabel = pill.querySelector('.price-tag-pill__label');
            if (pillLabel) {
                pillLabel.textContent = pillCONSTANTS.PILL_LABEL_COPY;
            }

            // Insert based on specified type
            switch (pillCONSTANTS.TEMPLATE_INJECT_TYPE) {
                case 'before':
                    if (styleSheet) {
                        eTarget.parentNode.insertBefore(styleSheet, eTarget);
                    }
                    eTarget.parentNode.insertBefore(pill, eTarget);
                    break;
                case 'after':
                    eTarget.parentNode.insertBefore(pill, eTarget.nextSibling);
                    if (styleSheet) {
                        eTarget.parentNode.insertBefore(styleSheet, pill);
                    }
                    break;
                case 'prepend':
                    eTarget.prepend(pill);
                    if (styleSheet) {
                        eTarget.insertBefore(styleSheet, pill);
                    }
                    break;
                case 'append':
                    if (styleSheet) {
                        eTarget.append(styleSheet);
                    }
                    eTarget.append(pill);
                    break;
                case 'replace':
                    if (styleSheet) {
                        eTarget.parentNode.insertBefore(styleSheet, eTarget);
                    }
                    eTarget.parentNode.replaceChild(pill, eTarget);
                    break;
                default:
                    if (styleSheet) {
                        eTarget.parentNode.insertBefore(styleSheet, eTarget);
                    }
                    eTarget.parentNode.insertBefore(pill, eTarget);
            }

            // Add click event if needed
            if (pillCONSTANTS.SCROLL_TO_ELEMENT) {
                if (pillButton) {
                    pillButton.classList.add('is-interactive');
                }

                pill.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetElement = document.querySelector(pillCONSTANTS.SCROLL_TO_ELEMENT);
                    if (!targetElement) { return }

                    const targetPosition = targetElement.getBoundingClientRect().top;
                    const startPosition = window.pageYOffset;
                    const duration = 2000;
                    let startTime = null;

                    const ease = (t, b, c, d) => {
                        t /= d / 2;
                        if (t < 1) return (c / 2) * t * t + b;
                        t--;
                        return (-c / 2) * (t * (t - 2) - 1) + b;
                    };

                    const animation = (currentTime) => {
                        if (startTime === null) startTime = currentTime;
                        const timeElapsed = currentTime - startTime;
                        const run = ease(timeElapsed, startPosition, targetPosition, duration);
                        window.scrollTo(0, run);
                        if (timeElapsed < duration) requestAnimationFrame(animation);
                    };

                    requestAnimationFrame(animation);

                    pillOBJ.tracking('pill ' + pillCONSTANTS.TEMPLATE_COPY);
                });
            }

        } catch (error) {
            console.error('Error in buildTemplate function:', error);
            pillOBJ.tracking('error buildTemplate');
        }
    },
    waitForElement: function () {
        try {
            let rC = 0;
            let int = setInterval(() => {
                const el = document.querySelector(pillCONSTANTS.TARGET_ELEMENT);
                if (el && croWD) {
                    clearInterval(int);
                    int = null;
                    pillOBJ.applyChanges(el);
                } else {
                    rC++;
                    if (rC >= pillCONSTANTS.INIT_MAX_RETRIES) {
                        clearInterval(int);
                        int = null;
                        console.error('Element not found after max retries. pillOBJ');
                        pillOBJ.tracking('error elementsNotFound');
                    }
                }
            }, pillCONSTANTS.INIT_RETRY_INTERVAL);

        } catch (error) {
            console.error('Error in waitForElement function:', error);
            pillOBJ.tracking('error waitForElement');
        }
    },
    init: function () {
        pillOBJ.waitForElement();
    }

};

pillOBJ.init();