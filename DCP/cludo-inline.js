const CAMPAIGN_ID = 'DCP-17502-rsa-eofy-cludo-inline-banner';
const CTA_TEXT = 'Shop Android'; 
const CTA_LINK = 'https://www.vodafone.com.au/mobile/android';
const IMAGE_MOBILE = 'https://www.vodafone.com.au/images/merch/1463-sg-zfold-ultra-inline-mobile.webp';
const IMAGE_DESKTOP = 'https://www.vodafone.com.au/images/merch/1463-sg-zfold-ultra-promo-tile.webp';

const TEXT_TITLE = '$100 off Android? Yep. Online only.';
const TEXT_DESCRIPTION = 'Save an extra $100 on selected Android devices when you stay connected to an eligible plan over 24 or 36 mths. Savings off RRP.';
const TEXT_TANDC = 'Ends 07/09. Min cost and <tandcLink>T&C apply</tandcLink>.';
const BACKGROUND_COLOR = '#ffffff'; 
const TEXT_BUTTON_COLOR = '#ffffff';
const TEXT_COLOR = '#333333';
const BUTTON_COLOR = '#e60000';
const BUTTON_HOVER_COLOR = '#b80000';
const BORDER_COLOR = '#bebebe';
const MODAL_TITLE = '';
const MODAL_TEXT = 'Savings forfeited if cancelled, undiscounted device due in full. Ends 07/09. Min cost and T&C apply.';
const MODAL_TANDC = '';
const TEMPLATE_INJECT_TYPE = 'before';

const CTA_DISPLAY = CTA_TEXT.trim() === '' ? 'style="display:none;"' : '';

const InlinebannerCONSTANTS = {
    EXPERIMENT_ID: CAMPAIGN_ID, // Experiment ID
    EXPERIMENT_VARIANT: 'personalisation', // possible values: variant|control|personalisation
    TARGET_ELEMENT: '#search-results > section > ul > li:nth-child(3)', // Target element to be modified
    TEMPLATE_HTML: `
        <div class="modal">
            <div class="tooltip">
                <div class="text">
                    <p>
                        <h4>` + MODAL_TITLE + `</h4>` + MODAL_TEXT + `<p class=\'term\'>` + MODAL_TANDC + `</p>
                    </p>
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
                    <a href="` + CTA_LINK + `">
                        <img src="` + IMAGE_MOBILE + `" class="mobile" alt="` + TEXT_TITLE + `" />
                        <img src="` + IMAGE_DESKTOP + `" class="desktop" alt="` + TEXT_TITLE + `" />
                    </a>
                </div>
            </div>
            <div class="inline-banner__container">
                <div class="inline-banner__content">
                    <div class="inline-banner__title">` + TEXT_TITLE + `</div>
                    <div class="inline-banner__desc">` + TEXT_DESCRIPTION + `</div>
                    <div class="inline-banner__tandc">` + TEXT_TANDC + `</div>
                </div>
                <div class="inline-banner__cta" ` +  CTA_DISPLAY  + `>
                    <a href="` + CTA_LINK + `" class="inline-banner__button">` + CTA_TEXT + `</a>
                </div>
            </div>
        </div>
    `, 
    CUSTOM_CSS: `
    #wrapper-`+CAMPAIGN_ID+` {
        display: block;
        padding: 32px 0;
        background-color: #ffffff;
        border-bottom: 1px solid #ebebeb;
        width: 100%;
    }

    #wrapper-`+CAMPAIGN_ID+` tandcLink {
        text-decoration: underline;
    }

    #wrapper-`+CAMPAIGN_ID+` tandcLink:hover {
        text-decoration: none;
        cursor: pointer;
    }

    #wrapper-`+CAMPAIGN_ID+` div.modal {
        display: none;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 830;
        background-color: rgba(0, 0, 0, .5);
        align-items: center;
        justify-content: center;
    }

    #wrapper-`+CAMPAIGN_ID+` div.modal .tooltip {
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        width: 80%;
        max-height: 95%;
        overflow-y: auto;
        color: #333;
        padding: 40px 60px 48px;
        border-radius: 6px;
        margin: 0px 16px;
        max-width: 1000px;
    }

    #wrapper-`+CAMPAIGN_ID+` div.modal .close-link {
        border: none;
        margin: 0px;
        padding: 0px;
        width: auto;
        background: rgba(0, 0, 0, 0);
        color: inherit;
        font-style: inherit;
        font-variant: inherit;
        font-weight: inherit;
        font-stretch: inherit;
        font-size: inherit;
        font-family: inherit;
        font-optical-sizing: inherit;
        font-size-adjust: inherit;
        font-kerning: inherit;
        font-feature-settings: inherit;
        font-variation-settings: inherit;
        line-height: normal;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        align-self: flex-end;
        cursor: pointer;
        z-index: 10;
        position: fixed;
        margin-top: -30px;
        margin-right: -50px;
    }

    #wrapper-`+CAMPAIGN_ID+` div.modal .close-link svg.close-icon {
        position: relative;
        color: #333;
        display: block;
        height: 24px;
        width: 24px;
    }

    #wrapper-`+CAMPAIGN_ID+` div.modal h3 {
        margin-bottom: 24px;
        font-size: 40px;
        line-height: 48px;
    }

    #wrapper-`+CAMPAIGN_ID+` div.modal h4 {
        font-family: VodafoneRegular, Arial, sans-serif;
        margin-bottom: 15px;
    }

    #wrapper-`+CAMPAIGN_ID+` div.modal ol {
        margin: -10px 0 20px 0;
        padding: 0px 0px 0px 16px;
    }

    #wrapper-`+CAMPAIGN_ID+` div.modal ol.list2 {
        margin: 0 0 20px 0;
        padding: 0px 0px 0px 1px !important;
        list-style: disc;
        margin-left: 16px;
    }

    #wrapper-`+CAMPAIGN_ID+` div.modal ol.list2 li {
        padding: 8px 0px 8px 0px;
    }

    #wrapper-`+CAMPAIGN_ID+` div.modal p.text {
        font-size: 18px;
        line-height: 24px
    }

    #wrapper-`+CAMPAIGN_ID+` div.modal p.term {
        font-size: 12px;
        line-height: 16px;
    }

    #wrapper-`+CAMPAIGN_ID+` div.modal .desktop {
        display: block;
    }

    #wrapper-`+CAMPAIGN_ID+` div.modal .mobile {
        display: none;
    }

    @media(max-width: 768px) {
        #wrapper-`+CAMPAIGN_ID+` div.modal h3 {
            font-size: 24px;
            line-height: 30px;
        }

        #wrapper-`+CAMPAIGN_ID+` div.modal p.text {
            font-size: 16px;
            line-height: 22px
        }

        #wrapper-`+CAMPAIGN_ID+` div.modal .tooltip {
            width: 100%;
            margin: 0;
            border-radius: 0;
            padding: 24px 16px 32px;
        }

        #wrapper-`+CAMPAIGN_ID+` div.modal .close-link {
            margin-top: -10px;
            margin-right: -10px;
        }

        #wrapper-`+CAMPAIGN_ID+` div.modal h3 {
            margin-bottom: 16px;
        }

        #wrapper-`+CAMPAIGN_ID+` div.modal .desktop {
            display: none;
        }

        #wrapper-`+CAMPAIGN_ID+` div.modal .mobile {
            display: block;
            max-width: 60%;
            height: auto;
            margin: auto;
        }

    }

    #wrapper-`+CAMPAIGN_ID+` .inline-banner {
        display: flex;
        align-items: stretch;
        width: 100%;
        background: ` + BACKGROUND_COLOR + `;
        border-radius: 16px;
        padding: 0;
        max-width: 1180px;
        margin: auto;
        border: 1px solid ` + BORDER_COLOR + `;
        text-decoration: none;
    }
    
    #wrapper-`+CAMPAIGN_ID+` .inline-banner__image {
        flex: 0 0 280px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f3f3f3;
        border-radius: 16px 0 0 16px;
    }

    #wrapper-`+CAMPAIGN_ID+` .inline-banner__image .inline-banner__image_cta {
        position: relative;
        width: 280px;
        height: 100%;
        overflow: hidden;
        border-radius: 16px 0 0 16px;
        display: flex;
        align-items: center;
        background: #e60200;
    }
 #wrapper-`+CAMPAIGN_ID+` .inline-banner__image .inline-banner__image_cta a{
 height:100%;
 display:flex;
 }
    #wrapper-`+CAMPAIGN_ID+` .inline-banner__image img.desktop {
        display: block;
        border-radius: unset;
        width: 100%;
    }

    #wrapper-`+CAMPAIGN_ID+` .inline-banner__image img.mobile {
        display: none;
    }

    #wrapper-`+CAMPAIGN_ID+` .inline-banner__container {
        padding: 32px 32px 32px 32px;
        display: flex;
        color: ` + TEXT_COLOR + `;
        text-decoration: none;
    }

    #wrapper-`+CAMPAIGN_ID+` .inline-banner__content {
        flex: 1 1 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 32px;
    }

    #wrapper-`+CAMPAIGN_ID+` .inline-banner__title {
        font-family: "VodafoneRegularBold", Arial, sans-serif;
        font-size: 28px;
        line-height: 34px;
        margin-bottom: 8px;
    }

    #wrapper-`+CAMPAIGN_ID+` .inline-banner__desc {
        font-family: "VodafoneRegular", Arial, sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 8px;
    }

    #wrapper-`+CAMPAIGN_ID+` .inline-banner__tandc {
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 0;
    }

    #wrapper-`+CAMPAIGN_ID+` .inline-banner__cta {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #wrapper-`+CAMPAIGN_ID+` .inline-banner__button {
        display: inline-block;
        background: ` + BUTTON_COLOR + `;
        color: #fff;
        font-family: "Vodafone", Arial, sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        border: none;
        border-radius: 6px;
        padding: 15px 20px;
        text-align: center;
        text-decoration: none;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .04);
    }

    #wrapper-`+CAMPAIGN_ID+` .inline-banner__button:hover {
        background: ` + BUTTON_HOVER_COLOR + `
    }



    @media(max-width: 768px) {
        #wrapper-`+CAMPAIGN_ID+` {
            display: block;
            margin: auto;
            padding: 32px 16px 32px;
            min-width: 235px;
        }

        #wrapper-`+CAMPAIGN_ID+` .inline-banner {
            flex-direction: column;
            min-height: unset;
            margin: 0;
            border: unset;
        }

        #wrapper-`+CAMPAIGN_ID+` .inline-banner__image {
            flex: 0 0 180px;
            border-radius: 16px 16px 0 0;
            width: 100%;
            margin: 0;
            padding: 0;
            position: relative;
            overflow: hidden;
        }

        #wrapper-`+CAMPAIGN_ID+` .inline-banner__image .inline-banner__image_cta {
            width: 100%;
            border-radius: 16px 16px 0 0;
        }

        #wrapper-`+CAMPAIGN_ID+` .inline-banner__image .inline-banner__image_cta a {
            position: initial;
        }

        #wrapper-`+CAMPAIGN_ID+` .inline-banner__image img.mobile {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 100%;
            width: auto;
            max-width: none;
        }

        #wrapper-`+CAMPAIGN_ID+` .inline-banner__image img.desktop {
            display: none;
            transform: scale(1.2);
    padding-top: 40px;
        }

        #wrapper-`+CAMPAIGN_ID+` .inline-banner__container {
            border: 1px solid ` + BORDER_COLOR + `;
            border-radius: 16px;
            border-top: none;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            flex-direction: column;
            padding: 24px 16px 24px 16px;
        }

        #wrapper-`+CAMPAIGN_ID+` .inline-banner__content {
            text-align: center;
            padding-right: 0;
        }

        #wrapper-`+CAMPAIGN_ID+` .inline-banner__title {
            font-size: 1.25rem;
            margin-bottom: 8px;
            line-height: 28px;
        }

        #wrapper-`+CAMPAIGN_ID+` .inline-banner__desc {
            font-size: 1rem;
            line-height: 22px;
            margin-bottom: 8px;
        }

        #wrapper-`+CAMPAIGN_ID+` .inline-banner__tandc {
            font-size: 12px;
            line-height: 18px;
            margin-bottom: 0;
        }

        #wrapper-`+CAMPAIGN_ID+` .inline-banner__cta {
            padding: 16px 0 0 0;
            justify-content: center;
            width: unset;
        }

        #wrapper-`+CAMPAIGN_ID+` .inline-banner__button {
            width: 100%;
            font-size: 18px;
            padding: 15px 18px;
        }
    }
    `,
    TEMPLATE_INJECT_TYPE: TEMPLATE_INJECT_TYPE, // possible values: replace|before|prepend|after|append
    INIT_RETRY_INTERVAL: 500, // milliseconds for init retry
    INIT_MAX_RETRIES: 20, // max retries for init
};

const InlinebannerOBJ = {
    applyChanges: function () {
        try {

            InlinebannerOBJ.buildCSS();
            InlinebannerOBJ.buildTemplate();

            const wrapper = document.getElementById(
    'wrapper-' + InlinebannerCONSTANTS.EXPERIMENT_ID
);

const tandcLink = wrapper.querySelector('tandcLink');
const modal = wrapper.querySelector('.modal');
const closeBtn = wrapper.querySelector('.modal .close-link');

if (tandcLink) {
    tandcLink.addEventListener('click', function () {
        modal.style.display = 'flex';
        InlinebannerOBJ.tracking('click seeHowItWorks');
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });
}

if (modal) {
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

        } catch (error) {
            console.error('Error in applyChanges function:', error); 
            InlinebannerOBJ.tracking('error applyChanges');
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
                    eventName: "cludo_rss_banner",
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
        } catch (error) {
            console.error('Error in buildCSS function:', error); InlinebannerOBJ.tracking('error buildCSS');
        }
    },
    buildTemplate: function () {
        try {
            let template = document.createElement('div');
            template.innerHTML = InlinebannerCONSTANTS.TEMPLATE_HTML;
            console.log(template)
            template.id = 'wrapper-' + InlinebannerCONSTANTS.EXPERIMENT_ID;

            let mainElement = document.querySelector(InlinebannerCONSTANTS.TARGET_ELEMENT);

            // Remove any existing template with the same ID
            const existingTemplate = document.getElementById('wrapper-' + InlinebannerCONSTANTS.EXPERIMENT_ID);
            if (existingTemplate) {
                existingTemplate.remove();
            }
            switch (InlinebannerCONSTANTS.TEMPLATE_INJECT_TYPE) {
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
            console.error('Error in buildTemplate function:', error); 
            InlinebannerOBJ.tracking('error buildTemplate');
        }
    },
    init: function () {
        try {
            let rC = 0;
            let int = setInterval(() => {
                    const el = document.querySelector(InlinebannerCONSTANTS.TARGET_ELEMENT);

                    if (el && croWD) {
                        clearInterval(int);
                        int = null; 
                        InlinebannerOBJ.applyChanges();
                    } else {
                        rC++;
                        if (rC >= InlinebannerCONSTANTS.INIT_MAX_RETRIES) {
                            clearInterval(int);
                            int = null;
                            console.error('Element not found after max retries. InlinebannerOBJ'); 
                            InlinebannerOBJ.tracking('error elementsNotFound');
                        }
                    }
                }, InlinebannerCONSTANTS.INIT_RETRY_INTERVAL);

        } catch (error) {
            console.error('Error in init function:', error); 
            InlinebannerOBJ.tracking('error init');
        }
    }
};

InlinebannerOBJ.init();

// Expose to global scope so inline `onClick` attributes can call InlinebannerOBJ methods
//window.InlinebannerOBJ = InlinebannerOBJ;