const pillCONSTANTS = {
    EXPERIMENT_ID: extension.code, // Experiment ID
    EXPERIMENT_VARIANT: 'extention', // possible values: variant|control|personalisation
    TARGET_ELEMENT: extension.targetElement, // Target element to be modified
    TEMPLATE_COPY: extension.templateCopy, // HTML template to be injected
    TEMPLATE_INJECT_TYPE: extension.templateInjectType, // possible values: replace|before|prepend|after|append
    CUSTOM_CSS: `
		.pill-extension {
		font-family: VodafoneRegular, Arial, sans-serif;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 10px;
    font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height:20px;
		margin-left: 4px;
	}

	.pill-extension:hover {
		cursor: pointer
	}
	.pill-extension .pill-container{
		display: flex;
		padding:4px 12px 4px 12px;
		justify-content: center;
		align-items: center;
		border-radius: 16px;
	}
	.pill-container img{
	width:20px;height:20px;margin-right:8px;
	}
	.hidden{
		display: none;
	}
	`, // CSS to be injected
    SCROLL_TO_ELEMENT: extension.scrollToElement,
    TEMPLATE_COLOR: extension.templateColor,
    TEMPLATE_BG_COLOR: extension.templateBgColor,
    TEMPLATE_IMAGE: extension.templateImage,
    INIT_RETRY_INTERVAL: 500, // milliseconds for init retry
    INIT_MAX_RETRIES: 20, // max retries for init
};

let pillOBJ = {
    applyChanges: function (el) {
        try {
            //Add your logic here
            pillOBJ.buildCSS();
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

            // Append stylesheet to head
            const css = pillCONSTANTS.CUSTOM_CSS;
            styleSheet.appendChild(document.createTextNode(css));
            document.head.appendChild(styleSheet);
        } catch (error) {
            console.error('Error in buildCSS function:', error);
            pillOBJ.tracking('error buildCSS');
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
            if (document.querySelector('.pill-extension')) {
                return;
            }

            // Create pill element from HTML string
            let pill = document.createElement('div');
			pill.innerHTML = `
			<div style="background-color:${pillCONSTANTS.TEMPLATE_BG_COLOR}" class="pill-container" id="pill-container">
			<img src="${pillCONSTANTS.TEMPLATE_IMAGE}" alt="Pill Icon"/>
			<span style="color:${pillCONSTANTS.TEMPLATE_COLOR }">${pillCONSTANTS.TEMPLATE_COPY}</span>
			</div>
			`;
console.log('TEMPLATE_COLOR =', pillCONSTANTS?.TEMPLATE_COLOR);
            pill.className = 'pill-extension';
			if (pillCONSTANTS.TEMPLATE_IMAGE === '') {
				pill.querySelector('img').classList.add('hidden');
				pill.querySelector('.pill-extension .pill-container').style.padding = '4px 12px';
			}

            // Insert based on specified type
            switch (pillCONSTANTS.TEMPLATE_INJECT_TYPE) {
                case 'before':
                    eTarget.parentNode.insertBefore(pill, eTarget);
                    break;
                case 'after':
                    eTarget.parentNode.insertBefore(pill, eTarget.nextSibling);
                    break;
                case 'prepend':
                    eTarget.prepend(pill);
                    break;
                case 'append':
                    eTarget.append(pill);
                    break;
                case 'replace':
                    eTarget.parentNode.replaceChild(pill, eTarget);
                    break;
                default:
                    eTarget.parentNode.insertBefore(pill, eTarget);
            }

            // Add click event if needed
            if (pillCONSTANTS.SCROLL_TO_ELEMENT) {
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