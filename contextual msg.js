
'use strict';

// LOCAL TEST FIXTURE — remove or leave; the live extension object takes precedence
if (typeof extension === 'undefined') {
    var extension = {
        subscriber:   'iPhoneNPIEmitter',
        extensionID:  'DCP18198contextual',
        devicesList:  JSON.stringify([
            {
                'id': 'IPH_17_PRO',
                'title': 'EOFY deals on iPhone 17 Pro.',
                'description': 'Take another look and save with our EOFY offers.',
                'tandc': 'Ends 30/06. T&C apply.',
                'image': 'https://www.vodafone.com.au/images/merch/events/eofy-2026/generic/1441-eofy-iphone-17-pro-inline-desktop.webp',
                'image_mobile': 'https://www.vodafone.com.au/images/merch/events/eofy-2026/generic/1441-eofy-iphone-17-pro-inline-mobile.webp',
                'cta_text': 'Shop now',
                'cta_link': 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro'
            },
            {
                'id': 'IPH_17_PRO_MAX',
                'title': 'EOFY deals on iPhone 17 Pro Max.',
                'description': 'Take another look and save with our EOFY offers.',
                'tandc': 'Ends 30/06. T&C apply.',
                'image': 'https://www.vodafone.com.au/images/merch/events/eofy-2026/generic/1441-eofy-iphone-17-pro-max-inline-desktop.webp',
                'image_mobile': 'https://www.vodafone.com.au/images/merch/events/eofy-2026/generic/1441-eofy-iphone-17-pro-max-inline-mobile.webp',
                'cta_text': 'Shop now',
                'cta_link': 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro-max'
            }
        ])
    };
}

const CONTEXTUAL_CONSTANTS = {
    EXPERIMENT_ID: extension.extensionID, // Experiment ID
    TEMPLATE_INJECT_TYPE: 'replace' // possible values: replace|before|prepend|after|append
};

const CONTEXTUAL = {
    DEVICES_LIST: (function () {
        var ext = typeof extension !== 'undefined' ? extension : {};
        if (!ext.devicesList) { return []; }
        try { return JSON.parse(ext.devicesList); } catch (e) { return []; }
    })(),
    applyChanges: function (device) {
        try {
            if (!device || !device.id) { return; }

            CONTEXTUAL.buildCSS();
            CONTEXTUAL.buildTemplate();

            const bannerInlineContainer = document.querySelector('#contextual');

            if (!bannerInlineContainer) {
                console.error('Contextual Message: Banner container not found after template build.');
                return;
            }

            const mobileImg = bannerInlineContainer.querySelector('.inline-banner img.mobile');
            if (mobileImg) {
                mobileImg.src = device.image_mobile;
                mobileImg.alt = device.title;
            }

            const imageCtaLink = bannerInlineContainer.querySelector('.inline-banner__image_cta a');
            if (imageCtaLink) {
                imageCtaLink.href = device.cta_link;
                imageCtaLink.style.backgroundImage = 'url(' + device.image + ')';
                imageCtaLink.addEventListener('click', function () {
                    CONTEXTUAL.tracking('click image ' + device.id);
                    window.optimizely = window.optimizely || [];
                    window.optimizely.push({ type: 'event', eventName: 'contextual_messaging' });
                });
            }

            const titleEl = bannerInlineContainer.querySelector('.inline-banner__title');
            if (titleEl) { titleEl.innerHTML = device.title; }

            const descEl = bannerInlineContainer.querySelector('.inline-banner__desc');
            if (descEl) { descEl.innerHTML = device.description; }

            const tandcEl = bannerInlineContainer.querySelector('.inline-banner__tandc');
            if (tandcEl) { tandcEl.innerHTML = device.tandc; }

            const ctaButton = bannerInlineContainer.querySelector('.inline-banner__button');
            if (ctaButton) {
                ctaButton.href = device.cta_link;
                ctaButton.innerText = device.cta_text;
                ctaButton.addEventListener('click', function () {
                    CONTEXTUAL.tracking('click cta ' + device.id);
                    window.optimizely = window.optimizely || [];
                    window.optimizely.push({ type: 'event', eventName: 'contextual_messaging' });
                });
            }

            CONTEXTUAL.tracking('display ' + device.id);
        } catch (error) {
            console.error('Error in applyChanges function:', error);
            CONTEXTUAL.tracking('error applyChanges');
        }
    },
    tracking: function (value) {
        try {
            croWD.utils.launchTracking(CONTEXTUAL_CONSTANTS.EXPERIMENT_ID, value, 'personalisation', '');
        } catch (error) {
            console.error('Error in tracking function:', error);
        }
    },
    buildCSS: function () {
        try {
            const styleSheet = document.createElement('style');
            styleSheet.setAttribute('type', 'text/css');
            styleSheet.setAttribute('id', 'contextual-styles');

            // Remove any existing stylesheet with the same ID
            const existingStyle = document.getElementById('contextual-styles');
            if (existingStyle) {
                existingStyle.remove();
            }

            // Check for CSP nonce to avoid violations
            const existingStyleNonce = document.querySelector('style[nonce]');
            const existingScript = document.querySelector('script[nonce]');
            const nonce = (existingStyleNonce && existingStyleNonce.nonce) || (existingScript && existingScript.nonce) || (existingStyleNonce && existingStyleNonce.getAttribute('nonce')) || (existingScript && existingScript.getAttribute('nonce'));
            if (nonce) {
                styleSheet.setAttribute('nonce', nonce);
            }

            // Append stylesheet to head
            const css = `#contextual{display:block;padding:48px 0 32px;background-color:#f4f4f4}#contextual .inline-banner{display:flex;align-items:stretch;width:100%;min-height:140px;background:#fff;border-radius:16px;padding:0;max-width:1180px;margin:auto;border:1px solid #bebebe;text-decoration:none}#contextual .inline-banner__image{flex:0 0 280px;display:flex;align-items:center;justify-content:center;background:#f3f3f3;border-radius:16px 0 0 16px}#contextual .inline-banner__image .inline-banner__image_cta{position:relative;width:280px;height:100%;overflow:hidden;border-radius:16px 0 0 16px;display:flex}#contextual .inline-banner__image .inline-banner__image_cta a{display:flex;align-items:center;background-repeat:no-repeat;background-position:center center;background-size:cover;width:100%;height:100%}#contextual .inline-banner__image img.mobile{display:none}#contextual .inline-banner__container{padding:32px;display:flex;color:#333;text-decoration:none;width:100%}#contextual .inline-banner__content{flex:1 1 0;display:flex;flex-direction:column;justify-content:center;padding-right:32px}#contextual .inline-banner__title{font-family:"VodafoneRegularBold",Arial,sans-serif;font-size:28px;line-height:34px;margin-bottom:8px}#contextual .inline-banner__desc{font-family:"VodafoneRegular",Arial,sans-serif;font-size:18px;font-style:normal;font-weight:400;line-height:24px;margin-bottom:8px}#contextual .inline-banner__tandc{font-size:12px;line-height:16px;margin-bottom:0}#contextual .inline-banner__cta{display:flex;align-items:center;justify-content:center}#contextual .inline-banner__button{display:inline-block;background:#e60000;color:#fff;font-family:"Vodafone",Arial,sans-serif;font-size:20px;font-style:normal;font-weight:400;line-height:24px;border:none;border-radius:6px;padding:15px 20px;text-align:center;text-decoration:none;box-shadow:0 1px 2px rgba(0,0,0,.04)}#contextual .inline-banner__button:hover{background:#b80000}@media(max-width:1172px){#contextual .inline-banner__image .inline-banner__image_cta a{display:flex;align-items:center}}@media(max-width:768px){#contextual{display:block;margin:auto;padding:32px 0;min-width:235px}#contextual .inline-banner{flex-direction:column;min-height:unset;margin:0;border:unset}#contextual .inline-banner__image{flex:0 0 180px;border-radius:16px 16px 0 0;width:100%;margin:0;padding:0;position:relative;overflow:hidden}#contextual .inline-banner__image .inline-banner__image_cta{width:100%;border-radius:16px 16px 0 0}#contextual .inline-banner__image .inline-banner__image_cta a{position:initial}#contextual .inline-banner__image img.mobile{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:auto;max-width:none}#contextual .inline-banner__container{border:1px solid #bebebe;border-radius:16px;border-top:none;border-top-left-radius:0;border-top-right-radius:0;flex-direction:column;padding:24px 16px}#contextual .inline-banner__content{text-align:center;padding-right:0}#contextual .inline-banner__title{font-size:1.25rem;margin-bottom:8px;line-height:28px}#contextual .inline-banner__desc{font-size:1rem;line-height:22px;margin-bottom:8px}#contextual .inline-banner__tandc{font-size:12px;line-height:18px;margin-bottom:0}#contextual .inline-banner__cta{padding:16px 0 0 0;justify-content:center;width:unset}#contextual .inline-banner__button{width:100%;font-size:18px;padding:15px 18px}}`;
            styleSheet.appendChild(document.createTextNode(css));
            document.head.appendChild(styleSheet);
        } catch (error) {
            console.error('Error in buildCSS function:', error); CONTEXTUAL.tracking('error buildCSS');
        }
    },
    buildTemplate: function () {
        try {
            const mainElement = document.querySelector('vha-previously-viewed');
            if (!mainElement) {
                console.error('Contextual Message: Target element not found:', 'vha-previously-viewed');
                return;
            }

            let template = document.createElement('div');
            template.innerHTML = `<div class="inline-banner">
                        <div class="inline-banner__image">
                            <div class="inline-banner__image_cta">
                                <a href="">
                                    <img src="" class="mobile" alt="" />
                                </a>
                            </div>
                        </div>
                        <div class="inline-banner__container">
                            <div class="inline-banner__content">
                                <div class="inline-banner__title"></div>
                                <div class="inline-banner__desc"></div>
                                <div class="inline-banner__tandc"></div>
                            </div>
                            <div class="inline-banner__cta">
                                <a href="" class="inline-banner__button"></a>
                            </div>
                        </div>
                    </div>`;
            template.id = 'contextual';

            // Remove any existing template with the same ID
            const existingTemplate = document.getElementById('contextual');
            if (existingTemplate) {
                existingTemplate.remove();
            }
            switch (CONTEXTUAL_CONSTANTS.TEMPLATE_INJECT_TYPE) {
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
            console.error('Error in buildTemplate function:', error); CONTEXTUAL.tracking('error buildTemplate');
        }
    }
};

var crowdMaxContextual = 10;
var crowdFinderContextual = setInterval(function () {
    crowdMaxContextual--;

    if (typeof croWD !== 'undefined') {
        clearInterval(crowdFinderContextual);
        var subscriber = typeof extension !== 'undefined' && extension.subscriber;
        if (subscriber) {
            croWD.hotbed.listen(subscriber, function (observable, eventType, device) {
                CONTEXTUAL.applyChanges(device);
            });
        } else {
            // fallback for local testing where croWD exists but no subscriber is configured
            CONTEXTUAL.applyChanges(null);
        }
        croWD.cmdr(CONTEXTUAL_CONSTANTS.EXPERIMENT_ID, 'inject');
    }

    if (crowdMaxContextual <= 0) {
        clearInterval(crowdFinderContextual);
    }
}, 1000);