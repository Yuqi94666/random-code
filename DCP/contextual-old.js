const InlinebannerCONSTANTS = {
    EXPERIMENT_ID: 'DCP-15766', // Experiment ID
    EXPERIMENT_VARIANT: 'personalisation', // possible values: variant|control|personalisation
    TARGET_ELEMENT: 'v522058c877e145a9716f32d7476b54b6c454e58a4f3229f336c855d07040c546', // Target element to be modified
    TEMPLATE_HTML: `<style>
                    #wrapper-DCP-15766 A {
                        text-decoration: none;
                    }

                    #wrapper-DCP-15766 A:hover .inline-banner-preview .cta {
                        background-color: #900000;
                    }

                    #wrapper-DCP-15766 A .inline-banner-preview {
                        width: 100%;
                        position: relative;
                        border-radius: 6px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        padding: 32px 100px;
                        box-sizing: border-box;
                        text-align: left;
                        font-size: 40px;
                        color: #333;
                        font-family: var(--heading-desktop-h4-font-family, "VodafoneLight", sans-serif);
                        box-shadow: rgba(0, 0, 0, .16) 0px 2px 8px 0px;
                        background: #fff;
                    }

                    #wrapper-DCP-15766 A .inline-banner-preview .container {
                        flex: 1;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        gap: 32px;
                        max-width: 980px;
                    }

                    #wrapper-DCP-15766 A .inline-banner-preview .image {
                        width: 180px;
                        position: relative;
                        height: 122px;
                        text-align: right;
                    }

                    #wrapper-DCP-15766 A .inline-banner-preview img {
                        max-width: 100%;
                        max-height: 100%;
                        -o-object-fit: contain;
                        object-fit: contain;
                    }

                    #wrapper-DCP-15766 A .inline-banner-preview .content {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                        gap: 16px;
                    }

                    #wrapper-DCP-15766 A .inline-banner-preview .header-and-sub {
                        align-self: stretch;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                        gap: 12px;
                    }

                    #wrapper-DCP-15766 A .inline-banner-preview .headline {
                        align-self: stretch;
                        position: relative;
                        line-height: 48px;
                        font-weight: 300;
                    }

                    #wrapper-DCP-15766 A .inline-banner-preview .sub-headline {
                        align-self: stretch;
                        position: relative;
                        font-size: 20px;
                        line-height: 28px;
                    }

                    #wrapper-DCP-15766 A .inline-banner-preview .terms {
                        align-self: stretch;
                        position: relative;
                        font-size: 14px;
                        line-height: 18px;
                    }

                    #wrapper-DCP-15766 A .inline-banner-preview .button {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        justify-content: center;
                        padding: 10px;
                        text-align: center;
                        font-size: 20px;
                        color: #fff;
                    }

                    #wrapper-DCP-15766 A .inline-banner-preview .cta {
                        border-radius: 6px;
                        background-color: #e60000;
                        height: 54px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 15px 20px;
                        box-sizing: border-box;
                        min-width: 150px;
                        cursor: pointer;
                        color: #fff;
                        text-decoration: none;
                    }
                    // #wrapper-DCP-15766 A .inline-banner-preview .cta:hover {
                    //     background-color: #900000;
                    // }

                    #wrapper-DCP-15766 A .inline-banner-preview .inline-banner-content {
                        align-self: stretch;
                        height: 24px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                    }

                    #wrapper-DCP-15766 A .inline-banner-preview .inline-banner-button {
                        position: relative;
                        line-height: 24px;
                        color: inherit;
                        text-decoration: inherit;
                    }
#wrapper-DCP-15766 A .nbn-inline-banner{
                        padding: 0px 100px 0 0;
                    }
                    #wrapper-DCP-15766 A .nbn-inline-banner .container{
                        max-width: 100%;
                    }
                    #wrapper-DCP-15766 A .nbn-inline-banner .container .image{
                        width: 280px;
                        height: 214px;
                    }
                    #wrapper-DCP-15766 A .nbn-inline-banner .container .image img{
                        height: 100%;
                        object-fit: cover;
                        border-radius: 6px 0 0 6px;
                    }
                    #wrapper-DCP-15766 A .nbn-inline-banner .container .sub-headline{
                        font-size:18px;
                        line-height:24px;
                    }
                    #wrapper-DCP-15766 A .nbn-inline-banner .container .header-and-sub{
                        padding: 32px 0;
                    }

                    
                    @media(max-width: 1023px) {
					#wrapper-DCP-15766 A .nbn-inline-banner{
                    	padding:0!important;
                    }
                    #wrapper-DCP-15766 A .nbn-inline-banner .container .image{
                    	width:100%;
                    }
                    #wrapper-DCP-15766 A .nbn-inline-banner .container .image img {
                    	    border-radius: 6px 6px 0 0;
                            width: inherit;
                    }
                    #wrapper-DCP-15766 A .nbn-inline-banner .content{
                    	padding: 0 32px!important;
                      margin-top: -32px;
                    }
					#wrapper-DCP-15766 A .inline-banner-preview.nbn-inline-banner .button {
                      padding: 0 42px 42PX!important;
                      margin-top: -32px;
                    }	
                        #wrapper-DCP-15766 A .inline-banner-preview {
                            position: relative;
                            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
                            border-radius: 6px;
                            background-color: #fff;
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            padding: 32px;
                            box-sizing: border-box;
                            gap: 32px;
                            min-width: 320px;
                            max-width: unset;
                            text-align: center;
                            font-size: 24px;
                            color: #333;
                            font-family: var(--heading-desktop-h4-font-family, "VodafoneLight", sans-serif);
                        }
                        #wrapper-DCP-15766 A .inline-banner-preview .container {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            gap: 32px;
                            max-width: unset;
                        }
                        #wrapper-DCP-15766 A .inline-banner-preview .image {
                            width: auto;
                            position: relative;
                            height: 102px;
                            object-fit: cover;
                        }
                        #wrapper-DCP-15766 A .inline-banner-preview .content {
                            align-self: stretch;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            gap: 16px;
                        }
                        #wrapper-DCP-15766 A .inline-banner-preview .header-and-sub {
                            align-self: stretch;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            gap: 12px;
                        }
                        #wrapper-DCP-15766 A .inline-banner-preview .headline {
                            align-self: stretch;
                            position: relative;
                            line-height: 30px;
                            font-weight: 300;
                        }
                        #wrapper-DCP-15766 A .inline-banner-preview .sub-headline {
                            align-self: stretch;
                            position: relative;
                            font-size: 20px;
                            line-height: 28px;
                        }
                        #wrapper-DCP-15766 A .inline-banner-preview .terms {
                            align-self: stretch;
                            position: relative;
                            font-size: 14px;
                            line-height: 18px;
                        }
                        #wrapper-DCP-15766 A .inline-banner-preview .button {
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: flex-end;
                            padding: 10px;
                            box-sizing: border-box;
                            max-width: unset;
                            font-size: 20px;
                            color: #fff;
                        }
                        #wrapper-DCP-15766 A .inline-banner-preview .cta {
                            align-self: stretch;
                            border-radius: 6px;
                            background-color: #e60000;
                            height: 44px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            padding: 15px 20px;
                            box-sizing: border-box;
                            min-width: 150px;
                        }
                        #wrapper-DCP-15766 A .inline-banner-preview .inline-banner-content {
                            align-self: stretch;
                            height: 24px;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                        }
                        #wrapper-DCP-15766 A .inline-banner-preview .inline-banner-button {
                            position: relative;
                            line-height: 24px;
                            color: #fff;
                        }
                    }
                    </style>
                    <vha-section style="background-color: #F4F4F4; padding: 30px 0 0 0;">
                        <vha-grid>
                            <div class="s-12 l-12">
                                <a class="cta" href="/">
                                    <div class="inline-banner-preview">
                                        <div class="container">
                                            <div class="image"><img src="/" alt="/" />
                                            </div>
                                            <div class="content">
                                                <div class="header-and-sub">
                                                    <div class="headline">Title</div>
                                                    <div class="sub-headline">Description</div>
                                                </div>
                                                <!-- <div class="terms">T&C apply.</div> -->
                                            </div>
                                            <div class="button">
                                                <div class="cta">
                                                    <div class="inline-banner-content">
                                                        <div class="inline-banner-button">Claim offer</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </vha-grid>
                    </vha-section>`, // HTML template to be injected
    TEMPLATE_INJECT_TYPE: 'replace', // possible values: replace|before|prepend|after|append
    CUSTOM_CSS: ``,
    INIT_RETRY_INTERVAL: 500, // milliseconds for init retry
    INIT_MAX_RETRIES: 20, // max retries for init
    ELEMENT_EVENT_PAIRS: [
      	''// Example of an element event pair, format 'selector:eventType'
    ],
    VIEWED_PRODUCTS_LOCALSTORAGE: 'viewedProducts', // localStorage variable.
    DEVICES_LIST: [
        {
            'id': 'IPH_17',
            'model': 'iPhone 17',
            'title': 'iPhone 17 caught your eye?',
            'description': 'Check out the latest offers on iPhone 17',
            'url': 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17',
            'image': 'https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fapple%2Fiphone-17%2Fiphone-17-lavender-01-m.webp&w=384&q=75'
        },
        {
            'id': 'IPH_17_AIR',
            'model': 'iPhone Air',
            'title': 'iPhone Air caught your eye?',
            'description': 'Check out the latest offers on iPhone Air',
            'url': 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-air',
            'image': 'https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fapple%2Fiphone-air%2Fiphone-air-sky-blue-01-m.webp&w=384&q=75'
        },
        {
            'id': 'IPH_17_PRO',
            'model': 'iPhone 17 Pro',
            'title': 'iPhone 17 Pro caught your eye?',
            'description': 'Check out the latest offers on iPhone 17 Pro',
            'url': 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro',
            'image': 'https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fapple%2Fiphone-17-pro%2Fiphone-17-pro-cosmic-orange-01-m.webp&w=384&q=75'
        },
        {
            'id': 'IPH_17_PRO_MAX',
            'model': 'iPhone 17 Pro Max',
            'title': 'iPhone 17 Pro Max caught your eye?',
            'description': 'Check out the latest offers on iPhone 17 Pro Max',
            'url': 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro-max',
            'image': 'https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fapple%2Fiphone-17-pro-max%2Fiphone-17-pro-max-cosmic-orange-01-m.webp&w=384&q=75'
        },
		{
            'id': 'CATNBNPLANS',
            'model': 'nbn<sup>®</sup> Plans',
            'title': 'Faster nbn<sup>®</sup> plans are here',
            'description': 'Get even faster internet with our new high-speed nbn<sup>®</sup> plans. At no extra cost, boosted speeds are now available on select plans for new and existing customers with FTTP/HFC connections.',
            'url': 'https://www.vodafone.com.au/home-internet/nbn',
            'image': 'https://www.vodafone.com.au/images/misc/1352-vodafone-nbn-speed-boost-tile.webp'
        }
    ]
};

const InlinebannerOBJ = {
    applyChanges: function (el) {
        // try {
            //Add your logic here
            // InlinebannerOBJ.buildCSS(); 
            //InlinebannerOBJ.addEventListener();

            let viewedProducts = InlinebannerOBJ.checkViewedProducts();
            if (viewedProducts && Array.isArray(viewedProducts) && viewedProducts.length > 0) {
                let findMatchedDevice = InlinebannerOBJ.findMatchedDevice();
                console.log(findMatchedDevice);
                if (findMatchedDevice) {
                    InlinebannerOBJ.buildTemplate();
					if(findMatchedDevice.id === 'CATNBNPLANS'){
                        document.querySelector('#wrapper-DCP-15766 .inline-banner-preview').classList.add('nbn-inline-banner');
                        document.querySelector('#wrapper-DCP-15766 .inline-banner-button').innerHTML = 'Find out more';
                    }else{
                        document.querySelector('#wrapper-DCP-15766 .inline-banner-button').innerHTML = 'Shop now';
                    }
                    document.querySelector('#wrapper-DCP-15766 A').href = findMatchedDevice.url;
                    document.querySelector('#wrapper-DCP-15766 .image img').src = findMatchedDevice.image;
                    document.querySelector('#wrapper-DCP-15766 .image img').alt = findMatchedDevice.model;
                    document.querySelector('#wrapper-DCP-15766 .headline').innerHTML = findMatchedDevice.title;
                    document.querySelector('#wrapper-DCP-15766 .sub-headline').innerHTML = findMatchedDevice.description;
                    document.querySelector('#wrapper-DCP-15766 A').addEventListener('click', function () {
                        InlinebannerOBJ.tracking('click ' + findMatchedDevice.id);

                        window.optimizely = window.optimizely || [];
                        window.optimizely.push({
                            type: 'event',
                            eventName: 'contextual_messaging',
                        });
                    });
                    InlinebannerOBJ.tracking('display ' + findMatchedDevice.id);

                }
            }
        // } catch (error) {
        //     console.error('Error in applyChanges function:', error);
        //     InlinebannerOBJ.tracking('error applyChanges');
        // }
    },
    checkViewedProducts: function (key = InlinebannerCONSTANTS.VIEWED_PRODUCTS_LOCALSTORAGE) {
        const raw = localStorage.getItem(key);
        if (raw === null) {
            console.log(`localStorage key "${key}" not found.`);
            return null;
        }
        // Try to parse JSON
        let parsed;
        try {
            parsed = JSON.parse(raw);
        } catch (e) {
            console.log(`localStorage["${key}"] (raw string):`, raw);
            return raw;
        }
        // Display items line by line
        if (Array.isArray(parsed)) {
            if (parsed.length === 0) {
                console.log('(no items)');
            } else {
                parsed.forEach((item, idx) => console.log(`${idx + 1}:`, item.id));
            }
        }

        return parsed;
    },

    /**
     * Check viewedProducts against DEVICES_LIST and return the first matching device id (string) or null.
     * It iterates viewedProducts in order and returns the first device id that exists in DEVICES_LIST.
     * @param {Array|null} viewedProducts - optional array of viewed product objects (from localStorage). If null the function will call checkViewedProducts().
     * @returns {string|null}
     */
    findMatchedDevice: function (viewedProducts = null) {
        const viewed = Array.isArray(viewedProducts) ? viewedProducts : InlinebannerOBJ.checkViewedProducts();
        if (!Array.isArray(viewed) || viewed.length === 0) return null;

        // Build a Map of device id -> device object for fast lookup
        const deviceMap = new Map(InlinebannerCONSTANTS.DEVICES_LIST.map(d => [d.id, d]));

        for (let i = 0; i < viewed.length; i++) {
            const vp = viewed[i];
            if (!vp || !vp.id) continue;
            if (deviceMap.has(vp.id)) return deviceMap.get(vp.id); // return full device object
        }

        return null;
    },
    tracking: function (value) {
        try {
            if (typeof dataLayer !== 'undefined' && dataLayer) { // Check if dataLayer exists

                dataLayer.push({
                    'event': 'optimizely_event',
                    'optimizely_experiment': InlinebannerCONSTANTS.EXPERIMENT_ID,
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
            console.error('Error in buildTemplate function:', error); InlinebannerOBJ.tracking('error buildTemplate');
        }
    },
    addEventListener: function () {
        try {
            const elementEventPairs = InlinebannerCONSTANTS.ELEMENT_EVENT_PAIRS || [];
            elementEventPairs.forEach(pair => {
                const [selector, eventType] = pair.split(':');
                const elements = document.querySelectorAll(selector);
                if (elements.length > 0) {
                    elements.forEach(el => {
                        el.addEventListener(eventType, () => { InlinebannerOBJ.tracking(eventType + ' ' + el.innerText);
                        });
                    });
                } else {
                    console.warn('Element not found for selector: ' + selector);
                }
            });
        } catch (error) {
            console.error('Error in addEventListener function:', error); InlinebannerOBJ.tracking('error addEventListener');
        }
    },
    waitForElement: function () {
        try {
            let rC = 0;
            let int = setInterval(() => {
                    const el = document.querySelector(InlinebannerCONSTANTS.TARGET_ELEMENT);

                    if (el) {
                        clearInterval(int);
                        int = null; InlinebannerOBJ.applyChanges(el);
                    } else {
                        rC++;
                        if (rC >= InlinebannerCONSTANTS.INIT_MAX_RETRIES) {
                            clearInterval(int);
                            int = null;
                            console.error('Element not found after max retries. InlinebannerOBJ'); InlinebannerOBJ.tracking('error elementsNotFound');
                        }
                    }
                }, InlinebannerCONSTANTS.INIT_RETRY_INTERVAL);

        } catch (error) {
            console.error('Error in waitForElement function:', error); InlinebannerOBJ.tracking('error waitForElement');
        }
    },
    init: function () {
        InlinebannerOBJ.waitForElement();
    }

};

InlinebannerOBJ.init();

// Expose to global scope so inline `onClick` attributes can call InlinebannerOBJ methods
window.InlinebannerOBJ = InlinebannerOBJ;