const IL_CONSTANTS = {
    // EXPERIMENT_ID: extension.EXPERIMENT_ID,
    // EXPERIMENT_VARIANT: 'personalisation',
    // TARGET_ELEMENT: extension.POSITION,
    // TEMPLATE_INJECT_TYPE: extension.TEMPLATE_INJECT_TYPE,
    // title: extension.TEXT_TITLE,
    // description: extension.TEXT_DESCRIPTION,
    // tandc: extension.TEXT_TANDC,
    // cta_text: extension.CTA_TEXT,
    // cta_link: extension.CTA_LINK,
    // image: extension.IMAGE_DESKTOP,
    // image_mobile: extension.IMAGE_MOBILE,
    // row_background_color: extension.ROW_BACKGROUND_COLOR,
    // background_color: extension.BACKGROUND_COLOR,
    // text_color: extension.TEXT_COLOR,
    // // text_button_color: extension.TEXT_BUTTON_COLOR,
    // // button_color: extension.BUTTON_COLOR,
    // // button_hover_color: extension.BUTTON_HOVER_COLOR,
    // border_color: extension.BORDER_COLOR,
    // modal_title: extension.MODAL_TITLE,
    // modal_text: extension.MODAL_TEXT,
    // modal_tandc: extension.MODAL_TANDC,

     EXPERIMENT_ID: 'DCP-18154-android-store', // Experiment ID
    EXPERIMENT_VARIANT: 'personalisation', // possible values: variant|control|personalisation
    TARGET_ELEMENT: '.sc-e89ea656-0.jcNYDQ', // Target element to be modified
    TEMPLATE_INJECT_TYPE: 'before', // possible values: replace|before|prepend|after|append
    title: '$100 off Android? Yep. Online only.',
    description: 'Save an extra $100 on selected Android devices when you stay connected to an eligible plan over 24 or 36 mths. Savings off RRP.',
    tandc: 'Ends 07/09. <tandcLink>T&C apply</tandcLink>.',
    image: 'https://vodafone.com.au/images/merch/events/black-friday-2025/1386-bf-iphone-16e-pro-inline-desktop.webp',
    image_mobile: 'https://vodafone.com.au/images/merch/events/black-friday-2025/1386-bf-iphone-16e-inline-mobile.webp',
    cta_text: 'Find out more',
    cta_link: '',
    background_color: '#ebebeb',
    text_button_color: '#ffffff',
    text_color: '#333333',
    button_color: '#e60000',
    button_hover_color: '#b80000',
    border_color: '#bebebe',
    modal_title: 'Modal title',
    modal_text: 'Savings forfeited if cancelled, undiscounted device due in full. Ends 07/09. Min cost and T&C apply.',
    modal_tandc: 'Modal T&C',
  
    TEMPLATE_HTML: `<style>.inline-banner-wrapper{display:block;padding:48px 16px 32px 16px;background-color:#f4f4f4}.inline-banner-wrapper tandcLink{text-decoration:underline}.inline-banner-wrapper tandcLink:hover{text-decoration:none;cursor:pointer}.inline-banner-wrapper div.modal{display:none;position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:830;background-color:rgba(0,0,0,.5);align-items:center;justify-content:center}.inline-banner-wrapper div.modal .tooltip{position:relative;display:flex;flex-direction:column;background-color:#fff;width:80%;max-height:95%;overflow-y:auto;color:#333;padding:40px 60px 48px;border-radius:6px;margin:0px 16px;max-width:1000px}.inline-banner-wrapper div.modal .close-link{border:none;margin:0px;padding:0px;width:auto;background:rgba(0,0,0,0);color:inherit;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch:inherit;font-size:inherit;font-family:inherit;font-optical-sizing:inherit;font-size-adjust:inherit;font-kerning:inherit;font-feature-settings:inherit;font-variation-settings:inherit;line-height:normal;-webkit-appearance:none;-moz-appearance:none;appearance:none;align-self:flex-end;cursor:pointer;z-index:10;position:fixed;margin-top:-30px;margin-right:-50px}.inline-banner-wrapper div.modal .close-link svg.close-icon{position:relative;color:#333;display:block;height:24px;width:24px}.inline-banner-wrapper div.modal h3{margin-bottom:24px;font-size:40px;line-height:48px}.inline-banner-wrapper div.modal h4{font-family:VodafoneRegular,Arial,sans-serif;margin-bottom:15px}.inline-banner-wrapper div.modal ol{margin:-10px 0 20px 0;padding:0px 0px 0px 16px}.inline-banner-wrapper div.modal ol.list2{margin:0 0 20px 0;padding:0px 0px 0px 1px !important;list-style:disc;margin-left:16px}.inline-banner-wrapper div.modal ol.list2 li{padding:8px 0px 8px 0px}.inline-banner-wrapper div.modal p.text{font-size:18px;line-height:24px}.inline-banner-wrapper div.modal p.term{font-size:12px;line-height:16px}.inline-banner-wrapper div.modal .desktop{display:block}.inline-banner-wrapper div.modal .mobile{display:none}@media(max-width: 768px){.inline-banner-wrapper div.modal h3{font-size:24px;line-height:30px}.inline-banner-wrapper div.modal p.text{font-size:16px;line-height:22px}.inline-banner-wrapper div.modal .tooltip{width:100%;margin:0;border-radius:0;padding:24px 16px 32px}.inline-banner-wrapper div.modal .close-link{margin-top:-10px;margin-right:-10px}.inline-banner-wrapper div.modal h3{margin-bottom:16px}.inline-banner-wrapper div.modal .desktop{display:none}.inline-banner-wrapper div.modal .mobile{display:block;max-width:60%;height:auto;margin:auto}}.inline-banner-wrapper .inline-banner{display:flex;align-items:stretch;width:100%;min-height:140px;border-radius:16px;padding:0;max-width:1180px;margin:auto;border:1px solid #bebebe;text-decoration:none}.inline-banner-wrapper .inline-banner__image{flex:0 0 280px;display:flex;align-items:center;justify-content:center;background:#f3f3f3;border-radius:16px 0 0 16px}.inline-banner-wrapper .inline-banner__image .inline-banner__image_cta{position:relative;width:280px;height:100%;overflow:hidden;border-radius:16px 0 0 16px;display:flex}.inline-banner-wrapper .inline-banner__image .inline-banner__image_cta a,.image-wrapper{display:flex;align-items:center;background-repeat:no-repeat;background-position:center center;background-size:cover;width:100%;height:100%}.inline-banner-wrapper .inline-banner__image img.desktop{display:block;border-radius:unset;top:0px;max-width:100%;height:auto}.inline-banner-wrapper .inline-banner__image img.mobile{display:none}.inline-banner-wrapper .inline-banner__container{background-color: inherit;padding:32px 32px 32px 32px;display:flex;color:#333;text-decoration:none;width:100%}.inline-banner-wrapper .inline-banner__content{flex:1 1 0;display:flex;flex-direction:column;justify-content:center;padding-right:32px}.inline-banner-wrapper .inline-banner__title{font-family:"VodafoneRegularBold",Arial,sans-serif;font-size:28px;line-height:34px;margin-bottom:8px}.inline-banner-wrapper .inline-banner__desc{font-family:"VodafoneRegular",Arial,sans-serif;font-size:18px;font-style:normal;font-weight:400;line-height:24px;margin-bottom:8px}.inline-banner-wrapper .inline-banner__tandc{font-size:12px;line-height:16px;margin-bottom:0}.inline-banner-wrapper .inline-banner__cta{display:flex;align-items:center;justify-content:center}.inline-banner-wrapper .inline-banner__button{display:inline-block;background:#e60000;color:#fff;font-family:"Vodafone",Arial,sans-serif;font-size:20px;font-style:normal;font-weight:400;line-height:24px;border:none;border-radius:6px;padding:15px 20px;text-align:center;text-decoration:none;box-shadow:0 1px 2px rgba(0,0,0,.04)}.inline-banner-wrapper .inline-banner__button:hover{background:#b80000}@media(max-width: 1172px){.inline-banner-wrapper .inline-banner__image .inline-banner__image_cta a{display:flex;align-items:center}}@media(max-width: 768px){.inline-banner-wrapper{display:block;margin:auto;padding:32px 16px 32px;min-width:235px}.inline-banner-wrapper .inline-banner{flex-direction:column;min-height:unset;margin:0;border:unset}.inline-banner-wrapper .inline-banner__image{flex:0 0 180px;border-radius:16px 16px 0 0;width:100%;margin:0;padding:0;position:relative;overflow:hidden}.inline-banner-wrapper .inline-banner__image .inline-banner__image_cta{width:100%;border-radius:16px 16px 0 0}.inline-banner-wrapper .inline-banner__image .inline-banner__image_cta a{position:initial}.inline-banner-wrapper .inline-banner__image img.mobile{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:auto;max-width:none}.inline-banner-wrapper .inline-banner__image img.desktop{display:none}.inline-banner-wrapper .inline-banner__container{border:1px solid #bebebe;border-radius:16px;border-top:none;border-top-left-radius:0;border-top-right-radius:0;flex-direction:column;padding:24px 16px 24px 16px}.inline-banner-wrapper .inline-banner__content{text-align:center;padding-right:0}.inline-banner-wrapper .inline-banner__title{font-size:1.25rem;margin-bottom:8px;line-height:28px}.inline-banner-wrapper .inline-banner__desc{font-size:1rem;line-height:22px;margin-bottom:8px}.inline-banner-wrapper .inline-banner__tandc{font-size:12px;line-height:18px;margin-bottom:0}.inline-banner-wrapper .inline-banner__cta{padding:16px 0 0 0;justify-content:center;width:unset}.inline-banner-wrapper .inline-banner__button{width:100%;font-size:18px;padding:15px 18px}}</style>
        <div class="inline-banner-wrapper">
            <div class="modal">
                <div class="tooltip">
                    <div class="text">
                        <h4></h4>
                        <span></span>
                        <p class="term"></p>
                    </div>
                    <div class="close-link">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation" class="close-icon">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M0 0h24v24H0z"></path>
                                <path d="M20 4L4 20M4 4l16 16" stroke="currentColor" stroke-linecap="round"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>   
            <div class="inline-banner">
                <div class="inline-banner__image">
                    <div class="inline-banner__image_cta">
                       <span class="image-wrapper">
                            <img src="" class="mobile" alt="" />
                        </span>
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
            </div>
        </div>`, // HTML template to be injected
    CUSTOM_CSS: ``,
    ELEMENT_EVENT_PAIRS: [
        ''
    ],
    PAGES_INCLUDE: [''], // ['iphone16'] // pages to be included, if empty observe is ignored
    PAGES_EXCLUDE: [''], //pages to be excluded  
    INIT_RETRY_INTERVAL: 500, // milliseconds for init retry
    INIT_MAX_RETRIES: 20 // max retries for init
};

const IL_OBJ = {
    applyChanges: function (el) {
        try {

            IL_OBJ.buildCSS();
            IL_OBJ.buildTemplate();

            const container = document.querySelector('#' + IL_CONSTANTS.EXPERIMENT_ID + ' .inline-banner-wrapper');

            container.style.backgroundColor = IL_CONSTANTS.row_background_color;
            container.querySelector('.modal .tooltip .text h4').innerText = IL_CONSTANTS.modal_title;
            container.querySelector('.modal .tooltip .text span').innerText = IL_CONSTANTS.modal_text;
            container.querySelector('.modal .tooltip .text .term').innerText = IL_CONSTANTS.modal_tandc;
            container.querySelector('img.mobile').src = IL_CONSTANTS.image_mobile;
            container.querySelector('img.mobile').alt = IL_CONSTANTS.title;
            container.querySelector('.inline-banner').style.backgroundColor = IL_CONSTANTS.background_color;
            container.querySelector('.inline-banner').style.border = '1px solid ' + IL_CONSTANTS.border_color;
            container.querySelector('.inline-banner__content').style.color = IL_CONSTANTS.text_color;
            container.querySelector('.inline-banner__title').src = IL_CONSTANTS.title;
            container.querySelector('.inline-banner__desc').alt = IL_CONSTANTS.description;
            container.querySelector('.inline-banner__tandc').alt = IL_CONSTANTS.tandc;
            // container.querySelector('.inline-banner__image_cta A').href = IL_CONSTANTS.cta_link;
            // container.querySelector('.inline-banner__image_cta A').style.backgroundImage = 'url(' + IL_CONSTANTS.image + ')';
            container.querySelector('.inline-banner__title').innerHTML = IL_CONSTANTS.title;
            container.querySelector('.inline-banner__desc').innerHTML = IL_CONSTANTS.description;
            container.querySelector('.inline-banner__tandc').innerHTML = IL_CONSTANTS.tandc;
            container.querySelector('.inline-banner__button').href = IL_CONSTANTS.cta_link;
            container.querySelector('.inline-banner__button').innerText = IL_CONSTANTS.cta_text;
            const imageWrapper = container.querySelector(
                    '.inline-banner__image_cta .image-wrapper'
                );

                imageWrapper.style.backgroundImage =
                    'url(' + IL_CONSTANTS.image + ')';
            const tandcLink = container.querySelector('tandcLink');
            if (tandcLink) {
               tandcLink.addEventListener('click', function (e) {
                    container.querySelector('.modal').style.display = 'flex';
                    IL_OBJ.tracking('click modal open');
                });
                container.querySelector('.modal .close-link').addEventListener('click', function () {
                    container.querySelector('.modal').style.display = 'none';
                });
            }

            IL_OBJ.tracking('display ' + IL_CONSTANTS.EXPERIMENT_ID);


        } catch (error) {
            console.error('Error in applyChanges function:', error);
            IL_OBJ.tracking('error applyChanges');
        }
    },
    tracking: function (value) {
        try {
            if (typeof dataLayer !== 'undefined' && dataLayer) { // Check if dataLayer exists

                dataLayer.push({
                    'event': 'optimizely_event',
                    'optimizely_experiment': IL_CONSTANTS.EXPERIMENT_ID,
                    'optimizely_variant': 'personalisation',
                    'page_referrer': document.referrer, //optional
                    'page_location': document.location.href, //optional
                    'link_text': value,
                    'link_url': ''
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
            const styleSheet = document.createElement('style');
            styleSheet.setAttribute('type', 'text/css');
            styleSheet.setAttribute('id', `${IL_CONSTANTS.EXPERIMENT_ID}-styles`);

            // Remove any existing stylesheet with the same ID
            const existingStyle = document.getElementById(`${IL_CONSTANTS.EXPERIMENT_ID}-styles`);
            if (existingStyle) {
                existingStyle.remove();
            }

            // Append stylesheet to head
            const css = IL_CONSTANTS.CUSTOM_CSS;
            styleSheet.appendChild(document.createTextNode(css));
            document.head.appendChild(styleSheet);
        } catch (error) {
            console.error('Error in buildCSS function:', error); IL_OBJ.tracking('error buildCSS');
        }
    },
    buildTemplate: function () {
        try {
            let template = document.createElement('div');
            template.innerHTML = IL_CONSTANTS.TEMPLATE_HTML;
            template.id = IL_CONSTANTS.EXPERIMENT_ID;

            let mainElement = document.querySelector(IL_CONSTANTS.TARGET_ELEMENT);

            // Remove any existing template with the same ID
            const existingTemplate = document.getElementById(IL_CONSTANTS.EXPERIMENT_ID);
            if (existingTemplate) {
                existingTemplate.remove();
            }
            switch (IL_CONSTANTS.TEMPLATE_INJECT_TYPE) {
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
            console.error('Error in buildTemplate function:', error); IL_OBJ.tracking('error buildTemplate');
        }
    },
    addEventListener: function () {
        try {
            const elementEventPairs = IL_CONSTANTS.ELEMENT_EVENT_PAIRS || [];
            elementEventPairs.forEach(pair => {
                const [selector, eventType] = pair.split(':');
                const elements = document.querySelectorAll(selector);
                if (elements.length > 0) {
                    elements.forEach(el => {
                        el.addEventListener(eventType, () => {
                            IL_OBJ.tracking(eventType + ' ' + el.innerText);
                        });
                    });
                } else {
                    console.warn('Element not found for selector: ' + selector);
                }
            });
        } catch (error) {
            console.error('Error in addEventListener function:', error); 
            IL_OBJ.tracking('error addEventListener');
        }
    },
    observe: function () {
        try {
            // Define the array of URLs to check against
            const includeUrls = IL_CONSTANTS.PAGES_INCLUDE;

            // Define the array of URLs to be excluded
            const excludedUrls = IL_CONSTANTS.PAGES_EXCLUDE;

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
                    IL_OBJ.waitForElement();
                }
            });

        } catch (error) {
            console.error('Error in observe function:', error); IL_OBJ.tracking('error observe');
        }
    },
    waitForElement: function () {
        try {
            let rC = 0;
            let int = setInterval(() => {
                const el = document.querySelector(IL_CONSTANTS.TARGET_ELEMENT);

                if (el) {
                    clearInterval(int);
                    int = null; 
                    IL_OBJ.applyChanges(el);
                } else {
                    rC++;
                    if (rC >= IL_CONSTANTS.INIT_MAX_RETRIES) {
                        clearInterval(int);
                        int = null;
                        console.error('Element not found after max retries. IL_OBJ'); 
                        IL_OBJ.tracking('error elementsNotFound');
                    }
                }
            }, IL_CONSTANTS.INIT_RETRY_INTERVAL);

        } catch (error) {
            console.error('Error in waitForElement function:', error);
            IL_OBJ.tracking('error waitForElement');
        }
    },
    init: function () {
        IL_OBJ.waitForElement();
    }

};

IL_OBJ.init();
