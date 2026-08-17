const tradeAnchorCONSTANTS = {
    EXPERIMENT_ID: 'tradeAnchor', // Experiment ID
    PAGES_INCLUDE: [], // ['iphone16'] // pages to be included, if empty observe is not used
    PAGES_EXCLUDE: [], //pages to be excluded
    EXPERIMENT_VARIANT: 'variant', // possible values: variant|control|personalisation
    TARGET_ELEMENT: 'form > div.sc-a600e772-0.bIvpux > div:nth-child(3)', // Target element to be modified
    TEMPLATE_HTML: `<div class="preorder-upgrade-options">
                        <div class="main-container">
                            <div class="midrenderplaceholder">
                            </div>
                            <div class="content-container">
                                <div class="systemprice-tag-parent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M28.1667 2.91797C28.4272 2.65755 28.8497 2.65772 29.1101 2.91797C29.3701 3.17832 29.3702 3.60006 29.1101 3.86035L26.4548 6.51562C26.5678 6.76604 26.6326 7.04288 26.6326 7.33496V15.6396C26.6311 16.1722 26.4228 16.6734 26.0457 17.0498L14.906 28.1895C14.7599 28.3355 14.5966 28.4546 14.4226 28.5459C14.3065 28.6069 14.1851 28.6548 14.0613 28.6914C13.8757 28.7462 13.6839 28.7744 13.4919 28.7744L13.3005 28.7656C13.1091 28.7473 12.9197 28.7012 12.739 28.6279C12.679 28.6037 12.6201 28.5762 12.5623 28.5459C12.388 28.4545 12.2241 28.3357 12.0779 28.1895L3.77222 19.8848C3.72364 19.8361 3.67802 19.7856 3.6355 19.7334C3.46493 19.5241 3.34332 19.2877 3.27026 19.04C3.23375 18.9163 3.20917 18.7897 3.19702 18.6621C3.1849 18.5348 3.18491 18.4066 3.19702 18.2793C3.20917 18.1518 3.23375 18.0251 3.27026 17.9014C3.3615 17.592 3.52874 17.3003 3.77222 17.0566L14.9177 5.91992C14.9618 5.87591 15.0081 5.83426 15.0554 5.79492C15.0783 5.77589 15.1021 5.75815 15.1257 5.74023C15.1493 5.72232 15.1727 5.70429 15.197 5.6875C15.2205 5.67123 15.2452 5.6568 15.2693 5.6416C15.3052 5.61899 15.3415 5.59735 15.3787 5.57715C15.391 5.57046 15.4033 5.56404 15.4158 5.55762C15.4556 5.53707 15.4958 5.51778 15.5369 5.5C15.5541 5.49252 15.5712 5.48453 15.5886 5.47754C15.63 5.46099 15.6721 5.44634 15.7146 5.43262C15.7325 5.42682 15.7502 5.42032 15.7683 5.41504C15.8034 5.40481 15.8391 5.39697 15.8748 5.38867C15.9017 5.38239 15.9285 5.37528 15.9558 5.37012C16.0141 5.35909 16.073 5.35058 16.1326 5.34473L16.3318 5.33496H24.6326C24.7014 5.33496 24.7696 5.33791 24.8367 5.34473C24.9712 5.35841 25.1019 5.3857 25.2273 5.4248C25.3338 5.45801 25.4358 5.50111 25.5339 5.55078L28.1667 2.91797ZM16.2009 6.68066C16.0727 6.70605 15.9546 6.76894 15.8601 6.86328L4.71558 18C4.55371 18.1622 4.49345 18.3879 4.53394 18.5977C4.55824 18.7236 4.61837 18.844 4.71558 18.9414L13.0212 27.2471C13.2809 27.5062 13.7029 27.5062 13.9626 27.2471L25.1023 16.1064C25.2282 15.9807 25.2977 15.8147 25.2986 15.6377V7.67285L23.6257 9.3457C23.8537 9.73453 23.9871 10.1856 23.9871 10.668C23.9871 12.1153 22.8094 13.2928 21.3621 13.293C19.9146 13.293 18.7371 12.1154 18.7371 10.668C18.7371 9.22054 19.9146 8.04297 21.3621 8.04297C21.8437 8.04302 22.294 8.17596 22.6824 8.40332L24.4177 6.66797H16.3328L16.2009 6.68066ZM21.3621 9.37598C20.6498 9.37598 20.0701 9.95574 20.0701 10.668C20.0701 11.3802 20.6498 11.96 21.3621 11.96C22.0742 11.9598 22.6531 11.3801 22.6531 10.668C22.6531 10.5608 22.6387 10.457 22.614 10.3574L21.8337 11.1387C21.7036 11.2688 21.5325 11.3339 21.3621 11.334C21.1915 11.334 21.0206 11.2688 20.8904 11.1387C20.63 10.8784 20.6303 10.4567 20.8904 10.1963L21.6707 9.41504C21.5716 9.39063 21.4685 9.376 21.3621 9.37598Z" fill="#9C2AA0"></path></svg>
                                    <b class="trade-in-and">Trade in and save.</b>
                                </div>
                                <div class="frame-parent">
                                    <div class="find-out-how-much-you-can-save-wrapper">
                                        <div class="find-out-how">Find out how much you can save when you trade in your phones, tablets, and smart watches in Good Working Order. Plus, you could get a $300 bonus credit when you trade in an eligible device. T&C apply.</div>
                                    </div>
                                    <div class="cta">
                                        <div class="content">
                                            <img alt="" title="" src="http://vodafone.com.au/images/icon/trade-in-system.svg">
                                            <div class="button-trade">Check your trade-in estimate</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `, // HTML template to be injected
    TEMPLATE_INJECT_TYPE: 'append', // possible values: replace|before|prepend|after|append
    CUSTOM_CSS: `#wrapper-tradeAnchor{padding-top:30px}#wrapper-tradeAnchor .preorder-upgrade-options{width:100%;position:relative;border-radius:8px;background-color:rgba(156,42,160,.06);display:flex;flex-direction:column;align-items:flex-start;padding:32px 16px 32px 24px;box-sizing:border-box;text-align:left;font-size:28px;color:#333;font-family:VodafoneRegular,Arial,sans-serif}#wrapper-tradeAnchor .main-container{align-self:stretch;display:flex;align-items:flex-start;gap:15px}#wrapper-tradeAnchor .midrenderplaceholder{height:36px;width:36px;position:relative;overflow:hidden;flex-shrink:0;display:none}#wrapper-tradeAnchor .content-container{flex:1;display:flex;flex-direction:column;align-items:flex-start;gap:16px}#wrapper-tradeAnchor .systemprice-tag-parent{align-self:stretch;display:flex;align-items:flex-start;gap:8px}#wrapper-tradeAnchor .systemprice-tag-icon{height:32px;width:32px;position:relative;-o-object-fit:cover;object-fit:cover}#wrapper-tradeAnchor .trade-in-and{position:relative;line-height:34px;font-family:VodafoneRegularBold,Arial,sans-serif}#wrapper-tradeAnchor .frame-parent{align-self:stretch;display:flex;flex-direction:column;align-items:flex-start;padding:0px 40px;gap:32px;font-size:18px}#wrapper-tradeAnchor .find-out-how-much-you-can-save-wrapper{align-self:stretch;display:flex;align-items:center;justify-content:center;padding:0}#wrapper-tradeAnchor .find-out-how{flex:1;position:relative;line-height:24px}#wrapper-tradeAnchor .cta{height:50px;border-radius:6px;border:1px solid #999;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:15px 40px;min-width:150px;text-align:center;font-size:20px}#wrapper-tradeAnchor .cta:hover{cursor:pointer}#wrapper-tradeAnchor .content{height:24px;display:flex;align-items:center;justify-content:center;gap:4px}#wrapper-tradeAnchor .systemtrade-in-icon{height:24px;width:24px;position:relative;-o-object-fit:cover;object-fit:cover}#wrapper-tradeAnchor .button-trade{position:relative;line-height:24px}#wrapper-tradeAnchor img{height:24px}@media(max-width: 768px){#wrapper-tradeAnchor .find-out-how-much-you-can-save-wrapper{padding:0 40px}#wrapper-tradeAnchor .frame-parent{padding:0px}#wrapper-tradeAnchor .cta{padding:15px 0;width:100%}}`,
    // CSS to be injected
    INIT_RETRY_INTERVAL: 500, // milliseconds for init retry
    INIT_MAX_RETRIES: 20, // max retries for init
    ELEMENT_EVENT_PAIRS: [
        // '.cta-upgrade:click' // Example of an element event pair, format 'selector:eventType'
    ]
};

let tradeAnchorOBJ = {
  applyChanges: function (el) {
      try {

        this.buildCSS(); 
        this.buildTemplate();
        
        tradeAnchorOBJ.tracking('display');

        document.querySelector('#wrapper-tradeAnchor .cta').addEventListener('click', () => {
            document.querySelector('div[data-testid="tradeIn-card"]').scrollIntoView({ behavior: 'smooth' });
            tradeAnchorOBJ.tracking('click Check your trade-in estimate');
        });

      } catch (error) {
          console.error('Error in applyChanges function:', error);
          tradeAnchorOBJ.tracking('error applyChanges');
      }
  },
  tracking: function (value) {
      try {
          if (typeof dataLayer !== 'undefined' && dataLayer) { // Check if dataLayer exists
            croWD.utils.launchTracking(
              tradeAnchorCONSTANTS.EXPERIMENT_ID,
              value,
              tradeAnchorCONSTANTS.EXPERIMENT_VARIANT,
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
          styleSheet.setAttribute('id', `${tradeAnchorCONSTANTS.EXPERIMENT_ID}-styles`);
          
          // Remove any existing stylesheet with the same ID
          const existingStyle = document.getElementById(`${tradeAnchorCONSTANTS.EXPERIMENT_ID}-styles`);
          if (existingStyle) {
              existingStyle.remove();
          }

          // Append stylesheet to head
          const css = tradeAnchorCONSTANTS.CUSTOM_CSS;
          styleSheet.appendChild(document.createTextNode(css));
          document.head.appendChild(styleSheet);
      } catch (error) {
          console.error('Error in buildCSS function:', error);
          tradeAnchorOBJ.tracking('error buildCSS');
      }
  },
  buildTemplate: function () {
      try {
          let template = document.createElement('div');
          template.innerHTML = tradeAnchorCONSTANTS.TEMPLATE_HTML;
          template.id = 'wrapper-' + tradeAnchorCONSTANTS.EXPERIMENT_ID;

          let mainElement = document.querySelector(tradeAnchorCONSTANTS.TARGET_ELEMENT);
          if (!mainElement) {
              throw new Error('Template location element not found');
          }
          
          // Remove any existing template with the same ID
          const existingTemplate = document.getElementById(`${tradeAnchorCONSTANTS.EXPERIMENT_ID}`);
          if (existingTemplate) {
              existingTemplate.remove();
          }
          switch (tradeAnchorCONSTANTS.TEMPLATE_INJECT_TYPE) {
              case 'replace':
                mainElement.insertAdjacentHTML('afterend', template.outerHTML);
                mainElement.style.display = 'none';// Remove the original element after replacing
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
          tradeAnchorOBJ.tracking('error buildTemplate');
      }
  },
  addEventListener: function () {
    try {
        const elementEventPairs = tradeAnchorCONSTANTS.ELEMENT_EVENT_PAIRS || [];
        elementEventPairs.forEach(pair => {
            const [selector, eventType] = pair.split(':');
            const el = document.querySelector(selector);
            if (el) {
                el.addEventListener(eventType, () => {
                    tradeAnchorOBJ.tracking(eventType + ' ' + el.innerText);
                });
            } else {
                console.warn(`Element not found for selector: ${selector}`);
            }
        });
    } catch (error) {
        console.error('Error in addEventListener function:', error);
        tradeAnchorOBJ.tracking('error addEventListener');
    }
},
  observe: function () {
      try {
          // Define the array of URLs to check against
          const includeUrls = tradeAnchorCONSTANTS.PAGES_INCLUDE;

          // Define the array of URLs to be excluded
          const excludedUrls = tradeAnchorCONSTANTS.PAGES_EXCLUDE;

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
                  tradeAnchorOBJ.waitForElement();
              }
          });

      } catch (error) {
          console.error('Error in observe function:', error);
          tradeAnchorOBJ.tracking('error observe');
      }
  },
  waitForElement: function () {
      try {
          let rC = 0;
          let int = setInterval(() => {

              const el = document.querySelector(tradeAnchorCONSTANTS.TARGET_ELEMENT);
              const croWD = window.croWD;

              if (el && croWD) {
                  clearInterval(int);
                  int = null;
                  tradeAnchorOBJ.applyChanges(el);
              } else {
                  rC++;
                  if (rC >= tradeAnchorCONSTANTS.INIT_MAX_RETRIES) {
                      clearInterval(int);
                      int = null;
                      console.error('Element not found after max retries. tradeAnchorOBJ');
                      tradeAnchorOBJ.tracking('error elementsNotFound');
                  }
              }
          }, tradeAnchorCONSTANTS.INIT_RETRY_INTERVAL);

      } catch (error) {
          console.error('Error in waitForElement function:', error);
          tradeAnchorOBJ.tracking('error waitForElement');
      }
  },
  init: function () {
      if (tradeAnchorCONSTANTS.PAGES_INCLUDE.length === 0) {
          tradeAnchorOBJ.waitForElement();
      } else if (tradeAnchorCONSTANTS.PAGES_INCLUDE.includes(window.location.pathname)) {
          tradeAnchorOBJ.waitForElement();
      } else {
          tradeAnchorOBJ.observe();
      }
  }

};

tradeAnchorOBJ.init();

//--------------------------------------------


const alertModalCONSTANTS = {
    EXPERIMENT_ID: 'DCP18045', // unique experiment identifier
    PAGES_INCLUDE: [], // URL substrings to include (empty = all pages)
    PAGES_EXCLUDE: ['&step=1', '&step=2', 'cart'], // URL substrings to exclude
    EXPERIMENT_VARIANT: 'variant', // variant|control|personalisation
    TARGET_ELEMENT: 'body',
    BONUS_TRADE_IN_VALUE: 300,
    PRODUCT_OFFERS: [
        {
            match: 'z fold8 ultra',
            discountValue: 700,
            imageSrc: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-z-fold8-ultra/samsung-galaxy-z-fold8-ultra-violet-shadow-01-m.webp'
        },
        {
            match: 'z fold8',
            discountValue: 700,
            imageSrc: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-z-fold-8/samsung-galaxy-z-fold8-lavender-01-m.webp'
        },
        {
            match: 'z flip8',
            discountValue: 500,
            imageSrc: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-z-flip-8/samsung-galaxy-z-flip8-pink-01-m.webp'
        }
    ],
    TEMPLATE_HTML: `
        <section class="wrapper-component" aria-label="Offer notification">
            <div class="offer-notification" role="region" aria-live="polite">
                <span class="offer-notification__icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 1.99951C17.5139 1.99951 21.9998 6.48568 22 11.9995C22 17.5135 17.514 21.9995 12 21.9995C6.48617 21.9993 2 17.5134 2 11.9995C2.00024 6.48582 6.48631 1.99975 12 1.99951ZM12 2.99951C7.0377 2.99975 3.00024 7.03721 3 11.9995C3 16.962 7.03755 20.9993 12 20.9995C16.9626 20.9995 21 16.9622 21 11.9995C20.9998 7.03707 16.9625 2.99951 12 2.99951ZM12 6.28857C12.276 6.28857 12.4998 6.51265 12.5 6.78857V7.75146C13.2831 7.93142 13.8871 8.42781 14.2803 8.85303C14.4676 9.05579 14.4548 9.37262 14.252 9.56006C14.0494 9.74736 13.7335 9.73445 13.5459 9.53174C13.1983 9.15562 12.6371 8.703 11.9395 8.68213C11.2149 8.66168 10.4866 9.13908 10.3857 9.7085C10.2884 10.2575 10.3649 10.6916 10.6143 10.9985C10.8912 11.3394 11.3888 11.5371 12.0146 11.5562C12.9309 11.5832 13.6914 11.9121 14.1562 12.481C14.4608 12.8539 14.7863 13.5201 14.6035 14.5757C14.4399 15.4992 13.5423 16.2471 12.5 16.3999V17.2241C12.4998 17.5001 12.276 17.7241 12 17.7241C11.7242 17.7239 11.5002 17.4999 11.5 17.2241V16.356C10.8581 16.2066 10.2522 15.8338 9.72168 15.2573C9.53473 15.0542 9.5478 14.7382 9.75098 14.5513C9.9541 14.3644 10.2699 14.3772 10.457 14.5806C10.7993 14.9526 11.3568 15.4016 12.0664 15.4292C12.7943 15.4508 13.5175 14.9714 13.6182 14.4028C13.7129 13.8558 13.6333 13.4215 13.3818 13.1138C13.1033 12.7727 12.607 12.5746 11.9844 12.5562C11.0635 12.5281 10.3018 12.1988 9.83887 11.6294C9.53583 11.2565 9.21313 10.5896 9.40039 9.53369C9.56392 8.61115 10.4604 7.86213 11.5 7.70947V6.78857C11.5002 6.5128 11.7242 6.28881 12 6.28857Z" fill="#F4F4F4"/>
                    </svg>
                </span>
                <p class="offer-notification__copy">
                    Save $__TOTAL_SAVING_NO_DECIMALS__ when you pre-order and trade-in an eligible device.
                    <button type="button" class="bundle-offer-trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="offer-breakdown-modal">See how it works</button>.
                </p>
                <button type="button" class="offer-notification__dismiss" aria-label="Dismiss offer notification">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6464 5.64638C17.8415 5.45121 18.1584 5.4512 18.3535 5.64638C18.5486 5.84168 18.5487 6.15814 18.3535 6.35341L12.707 11.9999L18.3535 17.6464C18.5487 17.8416 18.5487 18.1583 18.3535 18.3534C18.256 18.451 18.1278 18.4999 18 18.4999C17.8721 18.4999 17.7439 18.451 17.6464 18.3534L12 12.7069L6.35347 18.3534C6.25585 18.451 6.12789 18.4999 5.99995 18.4999C5.87202 18.4999 5.74407 18.451 5.64644 18.3534C5.45119 18.1582 5.45119 17.8416 5.64644 17.6464L11.2929 11.9999L5.64644 6.35341C5.45119 6.1581 5.45119 5.84169 5.64644 5.64638C5.84175 5.45124 6.15817 5.45121 6.35347 5.64638L12 11.2929L17.6464 5.64638Z" fill="white"/>
                    </svg>
                </button>
            </div>

            <div class="wrapper-modal" hidden aria-hidden="true">
                <article class="watch-modal" id="offer-breakdown-modal" role="dialog" aria-modal="true" aria-labelledby="offer-breakdown-title" tabindex="-1">
                    <header class="watch-modal__header">
                        <h2 class="watch-modal__title" id="offer-breakdown-title">Offer breakdown</h2>
                        <button type="button" class="watch-modal-close" aria-label="Close offer breakdown modal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M23.5282 7.52868C23.7882 7.26843 24.2105 7.26843 24.4705 7.52868C24.7309 7.7891 24.7309 8.21066 24.4705 8.47107L16.9412 15.9994L24.4705 23.5287C24.731 23.7889 24.731 24.2108 24.4705 24.4711C24.3406 24.6011 24.1702 24.6663 23.9998 24.6664C23.8293 24.6664 23.6582 24.6013 23.5282 24.4711L15.9989 16.9418L8.47151 24.4711C8.34137 24.6012 8.17041 24.6663 7.99983 24.6664C7.82919 24.6664 7.65835 24.6013 7.52815 24.4711C7.26789 24.2109 7.26803 23.7889 7.52815 23.5287L15.0565 15.9994L7.52815 8.47107C7.26793 8.21073 7.26807 7.78911 7.52815 7.52868C7.78857 7.26843 8.2111 7.26843 8.47151 7.52868L15.9989 15.057L23.5282 7.52868Z" fill="#333333"/>
                            </svg>
                        </button>
                    </header>

                    <div class="watch-modal__content">
                        <div class="watch-modal__product">
                            <img src="__PRODUCT_IMAGE_SRC__" alt="Featured Samsung device" class="watch-modal__image" />
                        </div>

                        <div class="watch-modal__details">
                            <div class="watch-modal__price-card" role="group" aria-label="Offer prices">
                                <div class="watch-modal__line-item">
                                    <span class="watch-modal__item-name">Device discount</span>
                                    <span class="watch-modal__item-price">$__DEVICE_DISCOUNT__  <span class="watch-modal__item-price-rrp">off RRP</span></span>
                                </div>
                                <hr class="watch-modal__divider" />
                                <div class="watch-modal__line-item">
                                    <span class="watch-modal__item-name">Bonus trade-in credit</span>
                                    <span class="watch-modal__item-price">$__TRADE_IN_BONUS__  <span class="watch-modal__item-price-rrp">off RRP</span></span>
                                </div>
                            </div>

                            <section class="watch-modal__summary" aria-label="Total saving">
                                <h3 class="watch-modal__summary-title">Total saving</h3>
                                <p class="watch-modal__summary-value">$__TOTAL_SAVING__</p>
                                <p class="watch-modal__summary-note">When you stay connected to an eligible<br />plan over 24 or 36 months.</p>
                            </section>

                            <p class="watch-modal__footnote">Savings forfeited if cancelled and undiscounted device (less trade-in value) due in full. Ends 13/08, trade in by 27/08. Min cost and T&C apply.</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    `,
    TEMPLATE_INJECT_TYPE: 'prepend', // replace|before|prepend|after|append
    CUSTOM_CSS: `
        #wrapper-alert-modal .wrapper-component {
            background: #9c2aa0;
            color: #ffffff;
            font-family: VodafoneRegular, Arial, sans-serif;
            padding: 16px;
        }

        #wrapper-alert-modal .wrapper-component .offer-notification {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            gap: 16px;
            max-width: 1180px;
            margin: 0 auto;
        }

        #wrapper-alert-modal .wrapper-component .offer-notification__icon {
            width: 24px;
            height: 24px;
            flex: 0 0 24px;
            margin-top: 1px;
        }

        #wrapper-alert-modal .wrapper-component .offer-notification__copy {
            margin: 0;
            flex: 0 1 auto;
            text-align: center;
            font-size: 18px;
            line-height: 24px;
            color: #ffffff;
        }

        #wrapper-alert-modal .wrapper-component .bundle-offer-trigger {
            border: 0;
            background: transparent;
            color: #ffffff;
            cursor: pointer;
            font: inherit;
            line-height: inherit;
            padding: 0;
            margin: 0;
            text-decoration: underline;
        }

        #wrapper-alert-modal .wrapper-component .bundle-offer-trigger:hover {
            text-decoration: none;
        }

        #wrapper-alert-modal .wrapper-component .offer-notification__dismiss {
            border: 0;
            background: transparent;
            color: inherit;
            width: 24px;
            height: 24px;
            flex: 0 0 24px;
            padding: 0;
            cursor: pointer;
            margin-top: 1px;
        }

        #wrapper-alert-modal .wrapper-component .offer-notification__dismiss svg,
        #wrapper-alert-modal .wrapper-component .watch-modal-close svg {
            display: block;
        }

        #wrapper-alert-modal .wrapper-component .wrapper-modal {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.78);
        }

        #wrapper-alert-modal .wrapper-component .wrapper-modal[hidden] {
            display: none;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal {
            width: min(816px, 100%);
            background: #ffffff;
            color: #333333;
            border-radius: 6px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
            padding: 32px 64px;
            max-height: calc(100vh - 32px);
            overflow: auto;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 24px;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__title {
            margin: 32px 0 0;
            font-size: 40px;
            line-height: 48px;
            font-weight: 300;
            color: #333333;
            font-family: VodafoneRegularBold, Arial, sans-serif;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal-close {
            border: 0;
            background: transparent;
            width: 32px;
            height: 32px;
            padding: 0;
            margin-top: 2px;
            cursor: pointer;
            flex: 0 0 32px;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__content {
            display: flex;
            gap: 32px;
            align-items: flex-start;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__product {
            width: 200px;
            flex: 0 0 200px;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__image {
            width: 100%;
            height: auto;
            display: block;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__details {
            flex: 1 1 auto;
            min-width: 0;
            width: 100%;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__price-card {
            border: 1px solid #999999;
            border-radius: 12px;
            padding: 24px 16px;
            margin-bottom: 16px;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__line-item {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 8px;
            font-size: 16px;
            line-height: 22px;
            color: #0d0d0d;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__item-name {
            font-size: 16px;
            line-height: 22px;
            font-weight: 400;
            color: #333333;
            font-family: VodafoneRegular, Arial, sans-serif;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__item-price {
            text-align: right;
            font-size: 14px;
            line-height: 18px;
            white-space: nowrap;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__item-price {
            font-size: 18px;
            line-height: 24px;
            font-weight: 700;
            letter-spacing: 0;
            font-family: VodafoneRegularBold, Arial, sans-serif;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__item-price-rrp {
            font-size: 14px;
            line-height: 18px;
            font-weight: 400;
            font-family: VodafoneRegular, Arial, sans-serif;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__divider {
            border: 0;
            border-top: 1px solid #cccccc;
            margin: 16px 0;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__summary {
            background: #f2f2f2;
            border-radius: 12px;
            padding: 16px;
            margin-bottom: 16px;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__summary-title {
            margin: 0 0 16px;
            font-size: 18px;
            line-height: 24px;
            font-weight: 400;
            color: #0d0d0d;
            font-family: VodafoneRegular, Arial, sans-serif;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__summary-value {
            margin: 0;
            text-align: right;
            font-size: 28px;
            line-height: 34px;
            font-weight: 700;
            color: #0d0d0d;
            font-family: VodafoneRegularBold, Arial, sans-serif;
     }
            

        #wrapper-alert-modal .wrapper-component .watch-modal__summary-note {
            margin: 4px 0 0;
            text-align: right;
            font-size: 12px;
            line-height: 16px;
            color: #0d0d0d;
            font-family: VodafoneRegular, Arial, sans-serif;
        }

        #wrapper-alert-modal .wrapper-component .watch-modal__footnote {
            margin: 0;
            font-size: 12px;
            line-height: 16px;
            color: #333333;
            
        }

        @media (max-width: 767px) {
            #wrapper-alert-modal .wrapper-component {
                padding: 16px;
            }

            #wrapper-alert-modal .wrapper-component .offer-notification {
                gap: 16px;
                max-width: 100%;
            }

            #wrapper-alert-modal .wrapper-component .offer-notification__copy {
                text-align: left;
            }

            #wrapper-alert-modal .wrapper-component .watch-modal {
                width: 100%;
                padding: 24px 16px 32px;
            }

            #wrapper-alert-modal .wrapper-component .watch-modal__header {
                margin-bottom: 20px;
            }

            #wrapper-alert-modal .wrapper-component .watch-modal__title {
                margin-top: 32px;
                font-size: 24px;
                line-height: 30px;
            }

            #wrapper-alert-modal .wrapper-component .watch-modal__content {
                flex-direction: column;
                gap: 24px;
            }

            #wrapper-alert-modal .wrapper-component .watch-modal__product {
                width: 145px;
                margin: 0 auto;
                flex: auto;
            }

            #wrapper-alert-modal .wrapper-component .watch-modal__price-card {
                margin-bottom: 24px;
            }

            #wrapper-alert-modal .wrapper-component .watch-modal__item-price strong {
                font-size: 18px;
                line-height: 24px;
            }

            #wrapper-alert-modal .wrapper-component .watch-modal__summary-value {
                font-size: 20px;
                line-height: 28px;
            }

            #wrapper-alert-modal .wrapper-component .watch-modal__footnote {
                max-width: 100%;
            }
        }
    `,
    INIT_RETRY_INTERVAL: 500,
    INIT_MAX_RETRIES: 20,
    ELEMENT_EVENT_PAIRS: [
        '.bundle-offer-trigger:click alert-bar',
        '.watch-modal-close:click offer-breakdown-close',
        '.offer-notification__dismiss:click alert-bar-dismiss'
    ]
};

const alertModalOBJ = {
    lastFocusedElement: null,
    previousBodyOverflow: '',
    applyChanges: function (el) {
        try {
            // Add your logic here

            alertModalOBJ.buildCSS();
            alertModalOBJ.buildTemplate(el);
            alertModalOBJ.bindModalControls();
            // alertModalOBJ.addEventListeners();
        } catch (error) {
            console.error('Error in applyChanges:', error);
            alertModalOBJ.tracking('error applyChanges');
        }
    },
    tracking: function (value) {
        try {
            if (typeof window.croWD !== 'undefined' && typeof dataLayer !== 'undefined') {
                window.croWD.utils.launchTracking(
                    alertModalCONSTANTS.EXPERIMENT_ID,
                    value,
                    alertModalCONSTANTS.EXPERIMENT_VARIANT,
                    ''
                );
            } else {
                console.warn(alertModalCONSTANTS.EXPERIMENT_ID + ' tracking skipped — dependencies not available:', value);
            }
        } catch (error) {
            console.error('Error in tracking:', error);
        }
    },
    getOfferData: function () {
        const titleElement = document.querySelector('h1[data-testid="mobile-phone-title"], h1');
        const titleText = (titleElement && titleElement.textContent ? titleElement.textContent : '').toLowerCase();
        const matchedOffer = alertModalCONSTANTS.PRODUCT_OFFERS.find(function (offer) {
            return titleText.includes(offer.match);
        });

        return matchedOffer || alertModalCONSTANTS.PRODUCT_OFFERS[0];
    },
    formatMoney: function (value) {
        return Number(value || 0).toLocaleString('en-AU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    },
    buildTemplateHtml: function (offerData) {
        const discountValue = Number(offerData.discountValue || 0);
        const tradeInBonus = Number(alertModalCONSTANTS.BONUS_TRADE_IN_VALUE || 0);
        const totalSaving = discountValue + tradeInBonus;
        const totalSavingNoDecimals = Number(totalSaving || 0).toLocaleString('en-AU', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });

        return alertModalCONSTANTS.TEMPLATE_HTML
            .replaceAll('__PRODUCT_IMAGE_SRC__', offerData.imageSrc)
            .replaceAll('__DEVICE_DISCOUNT__', alertModalOBJ.formatMoney(discountValue))
            .replaceAll('__TRADE_IN_BONUS__', alertModalOBJ.formatMoney(tradeInBonus))
            .replaceAll('__TOTAL_SAVING_NO_DECIMALS__', totalSavingNoDecimals)
            .replaceAll('__TOTAL_SAVING__', alertModalOBJ.formatMoney(totalSaving));
    },
    buildCSS: function () {
        if (!alertModalCONSTANTS.CUSTOM_CSS) return; // Nothing to inject

        try {
            const id = 'alertModal-styles';

            // Remove any existing stylesheet with the same ID
            const existingStyle = document.getElementById(id);
            if (existingStyle) existingStyle.remove();

            const resolvedCss = alertModalCONSTANTS.CUSTOM_CSS.replaceAll(
                '#wrapper-alert-modal',
                '#wrapper-alert-modal'
            );

            const styleSheet = document.createElement('style');
            styleSheet.id = id;
            styleSheet.textContent = resolvedCss;
            document.body.appendChild(styleSheet);
        } catch (error) {
            console.error('Error in buildCSS:', error);
            alertModalOBJ.tracking('error buildCSS');
        }
    },
    buildTemplate: function (targetEl) {
        if (!alertModalCONSTANTS.TEMPLATE_HTML) return; // Nothing to inject

        try {
            const wrapperId = 'wrapper-alert-modal';
            const offerData = alertModalOBJ.getOfferData();

            // Remove any existing template with the same ID
            const existingTemplate = document.getElementById(wrapperId);
            if (existingTemplate) existingTemplate.remove();

            const template = document.createElement('div');
            template.innerHTML = alertModalOBJ.buildTemplateHtml(offerData);
            template.id = wrapperId;

            switch (alertModalCONSTANTS.TEMPLATE_INJECT_TYPE) {
                case 'replace':
                    targetEl.insertAdjacentElement('afterend', template);
                    targetEl.remove();
                    break;
                case 'before':
                    targetEl.insertAdjacentElement('beforebegin', template);
                    break;
                case 'prepend':
                    targetEl.prepend(template);
                    break;
                case 'after':
                    targetEl.insertAdjacentElement('afterend', template);
                    break;
                default: // append
                    targetEl.appendChild(template);
                    break;
            }
        } catch (error) {
            console.error('Error in buildTemplate:', error);
            alertModalOBJ.tracking('error buildTemplate');
        }
    },
    bindModalControls: function () {
        try {
            const wrapper = document.getElementById('wrapper-alert-modal');

            if (!wrapper) {
                console.warn(alertModalCONSTANTS.EXPERIMENT_ID + ' — wrapper not found');
                return;
            }

            const trigger = wrapper.querySelector('.bundle-offer-trigger');
            const wrapperComponent = wrapper.querySelector('.wrapper-component');
            const modalWrapper = wrapper.querySelector('.wrapper-modal');
            const modal = wrapper.querySelector('.watch-modal');
            const closeButton = wrapper.querySelector('.watch-modal-close');
            const dismissButton = wrapper.querySelector('.offer-notification__dismiss');

            if (!trigger || !wrapperComponent || !modalWrapper || !modal || !closeButton || !dismissButton) {
                console.warn(alertModalCONSTANTS.EXPERIMENT_ID + ' — modal controls not found');
                return;
            }

            if (!trigger.hasAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-modal-open')) {
                trigger.setAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-modal-open', 'true');
                trigger.addEventListener('click', function () {
                    alertModalOBJ.openModal(trigger, modalWrapper, modal);
                });
                trigger.addEventListener('keydown', function (event) {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        alertModalOBJ.openModal(trigger, modalWrapper, modal);
                    }
                });
            }

            if (!closeButton.hasAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-modal-close')) {
                closeButton.setAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-modal-close', 'true');
                closeButton.addEventListener('click', function () {
                    alertModalOBJ.closeModal(trigger, modalWrapper);
                });
            }

            if (!dismissButton.hasAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-notification-close')) {
                dismissButton.setAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-notification-close', 'true');
                dismissButton.addEventListener('click', function () {
                    alertModalOBJ.tracking('click dismiss alert');
                    alertModalOBJ.hideNotification(wrapperComponent, modalWrapper, trigger);
                });
            }

            if (!modalWrapper.hasAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-modal-backdrop-close')) {
                modalWrapper.setAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-modal-backdrop-close', 'true');
                modalWrapper.addEventListener('click', function (event) {
                    if (event.target === modalWrapper) {
                        alertModalOBJ.closeModal(trigger, modalWrapper);
                    }
                });
            }

            if (!modal.hasAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-modal-trap')) {
                modal.setAttribute('data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-modal-trap', 'true');
                modal.addEventListener('keydown', function (event) {
                    alertModalOBJ.handleModalKeydown(event, trigger, modalWrapper, modal);
                });
            }
        } catch (error) {
            console.error('Error in bindModalControls:', error);
            alertModalOBJ.tracking('error bindModalControls');
        }
    },
    openModal: function (trigger, modalWrapper, modal) {
        alertModalOBJ.lastFocusedElement = document.activeElement || trigger;
        alertModalOBJ.previousBodyOverflow = document.body.style.overflow;
        modalWrapper.hidden = false;
        modalWrapper.setAttribute('aria-hidden', 'false');
        trigger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';

        const focusableElements = alertModalOBJ.getFocusableElements(modal);
        const firstFocusable = focusableElements[0] || modal;
        firstFocusable.focus();

        alertModalOBJ.tracking('click open alert modal');
    },
    closeModal: function (trigger, modalWrapper) {
        modalWrapper.hidden = true;
        modalWrapper.setAttribute('aria-hidden', 'true');
        trigger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = alertModalOBJ.previousBodyOverflow;

        if (alertModalOBJ.lastFocusedElement && typeof alertModalOBJ.lastFocusedElement.focus === 'function') {
            alertModalOBJ.lastFocusedElement.focus();
        }
    },
    hideNotification: function (wrapperComponent, modalWrapper, trigger) {
        if (modalWrapper && !modalWrapper.hidden) {
            alertModalOBJ.closeModal(trigger, modalWrapper);
        }

        wrapperComponent.hidden = true;
        wrapperComponent.setAttribute('aria-hidden', 'true');
    },
    getFocusableElements: function (container) {
        return Array.prototype.slice.call(
            container.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]')
        ).filter(function (element) {
            return !element.hasAttribute('hidden') && element.getAttribute('aria-hidden') !== 'true';
        });
    },
    handleModalKeydown: function (event, trigger, modalWrapper, modal) {
        if (event.key === 'Escape') {
            event.preventDefault();
            alertModalOBJ.closeModal(trigger, modalWrapper);
            return;
        }

        if (event.key !== 'Tab') return;

        const focusableElements = alertModalOBJ.getFocusableElements(modal);
        if (focusableElements.length === 0) {
            event.preventDefault();
            modal.focus();
            return;
        }

        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        if (focusableElements.length === 1) {
            event.preventDefault();
            firstFocusable.focus();
            return;
        }

        if (event.shiftKey && document.activeElement === firstFocusable) {
            event.preventDefault();
            lastFocusable.focus();
        } else if (!event.shiftKey && document.activeElement === lastFocusable) {
            event.preventDefault();
            firstFocusable.focus();
        }
    },
    addEventListeners: function () {
        try {
            const wrapper = document.getElementById('wrapper-' + alertModalCONSTANTS.EXPERIMENT_ID);
            if (!wrapper) {
                console.warn(alertModalCONSTANTS.EXPERIMENT_ID + ' — wrapper not found for event bindings');
                return;
            }

            const pairs = alertModalCONSTANTS.ELEMENT_EVENT_PAIRS || [];
            pairs.forEach(function (pair) {
                const parts = pair.split(':');
                const selector = parts[0];
                const eventType = parts[1];
                const elements = wrapper.querySelectorAll(selector);

                if (elements.length === 0) {
                    console.warn(alertModalCONSTANTS.EXPERIMENT_ID + ' — element not found for: ' + selector);
                    return;
                }

                elements.forEach(function (el) {
                    // Prevent duplicate listeners by marking the element
                    const flag = 'data-' + alertModalCONSTANTS.EXPERIMENT_ID + '-' + eventType;
                    if (el.hasAttribute(flag)) return;
                    el.setAttribute(flag, 'true');

                    el.addEventListener(eventType, function () {
                        alertModalOBJ.tracking(eventType + ' ' + el.innerText);
                    });
                });
            });
        } catch (error) {
            console.error('Error in addEventListeners:', error);
            alertModalOBJ.tracking('error addEventListeners');
        }
    },
    waitForElement: function () {
        try {
            let retryCount = 0;
            const interval = setInterval(function () {
                const el = document.querySelector(alertModalCONSTANTS.TARGET_ELEMENT);
                const hasCroWD = typeof window.croWD !== 'undefined';

                if (el && hasCroWD) {
                    clearInterval(interval);
                    alertModalOBJ.applyChanges(el);
                } else if (++retryCount >= alertModalCONSTANTS.INIT_MAX_RETRIES) {
                    clearInterval(interval);
                    console.error(alertModalCONSTANTS.EXPERIMENT_ID + ' — target element not found after max retries');
                    alertModalOBJ.tracking('error elementsNotFound');
                }
            }, alertModalCONSTANTS.INIT_RETRY_INTERVAL);
        } catch (error) {
            console.error('Error in waitForElement:', error);
            alertModalOBJ.tracking('error waitForElement');
        }
    },
    init: function () {
        alertModalOBJ.waitForElement();
    }
};

alertModalOBJ.init();

//--------------------------------------------


const tags2CONSTANTS = {    
    EXPERIMENT_ID: 'DCP17963tag2', // Experiment ID
    EXPERIMENT_VARIANT: 'personalisation', // possible values: variant|control|personalisation
    TARGET_ELEMENT: '.dZRKKD', // Target element to be modified
    TEMPLATE_COPY: `<style>@media (max-width:768px){.badges2{display: flex!important;}}.badges2{display: none;padding: 32px 0 0 0;align-items: center;gap: 4px;margin-bottom: 12px;font-size: 16px;font-family: VodafoneRegular, Arial, sans-serif;color: #333333;}</style><div class="badges2"><span>5G</span> | <span>eSIM</span></div>`, // HTML template to be injected
    TEMPLATE_INJECT_TYPE: 'before', // possible values: replace|before|prepend|after|append
    INIT_RETRY_INTERVAL: 500, // milliseconds for init retr
    INIT_MAX_RETRIES: 20, // max retries for init
};

let tags2OBJ = {
    applyChanges: function (el) {
        try {
            //Add your logic here
            tags2OBJ.buildTemplate();
        } catch (error) {
            console.error('Error in applyChanges function:', error);
        }
    },
    buildTemplate: function () {
        try {
            let eTarget = document.querySelector(tags2CONSTANTS.TARGET_ELEMENT);

            // Check if target element exists
            if (!eTarget) {
                console.error('Target element mobile title is not found');
                return;
            }

            // Check if tags already exists
            if (document.querySelector(`#${tags2CONSTANTS.EXPERIMENT_ID}`)) {
                return;
            }

            // Create tags element from HTML string
            let tags = document.createElement('div');
            tags.id = tags2CONSTANTS.EXPERIMENT_ID;
            tags.innerHTML = tags2CONSTANTS.TEMPLATE_COPY;

            // Insert based on specified type
            switch (tags2CONSTANTS.TEMPLATE_INJECT_TYPE) {
                case 'before':
                    eTarget.parentNode.insertBefore(tags, eTarget);
                    break;
                case 'after':
                    eTarget.parentNode.insertBefore(tags, eTarget.nextSibling);
                    break;
                case 'prepend':
                    eTarget.prepend(tags);
                    break;
                case 'append':
                    eTarget.append(tags);
                    break;
                case 'replace':
                    eTarget.parentNode.replaceChild(tags, eTarget);
                    break;
                default:
                    eTarget.parentNode.insertBefore(tags, eTarget);
            }

        } catch (error) {
            console.error('Error in buildTemplate function:', error);
            tags2OBJ.tracking('error buildTemplate');
        }
    },
    waitForElement: function () {
        try {
            let rC = 0;
            let int = setInterval(() => {
                const el = document.querySelector(tags2CONSTANTS.TARGET_ELEMENT);
                if (el && croWD) {
                    clearInterval(int);
                    int = null;
                    tags2OBJ.applyChanges(el);
                } else {
                    rC++;
                    if (rC >= tags2CONSTANTS.INIT_MAX_RETRIES) {
                        clearInterval(int);
                        int = null;
                        console.error('Element not found after max retries. tags2OBJ');
                        tags2OBJ.tracking('error elementsNotFound');
                    }
                }
            }, tags2CONSTANTS.INIT_RETRY_INTERVAL);

        } catch (error) {
            console.error('Error in waitForElement function:', error);
            tags2OBJ.tracking('error waitForElement');
        }
    },
    init: function () {
        tags2OBJ.waitForElement();
    }

};

tags2OBJ.init();

//--------------------------------------------


const tagsCONSTANTS = {    
    EXPERIMENT_ID: 'DCP17963tag', // Experiment ID
    EXPERIMENT_VARIANT: 'personalisation', // possible values: variant|control|personalisation
    TARGET_ELEMENT: '.lpfjpa', // Target element to be modified
    TEMPLATE_COPY: `<style>@media (max-width:768px){.badges{display: none!important;}} .badges{display: flex;padding: 0 0 0 25px;align-items: center;gap: 4px;margin-bottom: 12px;font-size: 16px;font-family: VodafoneRegular, Arial, sans-serif;color: #333333;}</style><div class="badges"><span>5G</span> | <span>eSIM</span></div>`, // HTML template to be injected
    TEMPLATE_INJECT_TYPE: 'before', // possible values: replace|before|prepend|after|append
    INIT_RETRY_INTERVAL: 500, // milliseconds for init retr
    INIT_MAX_RETRIES: 20, // max retries for init
};

let tagsOBJ = {
    applyChanges: function (el) {
        try {
            //Add your logic here
            document.querySelector('.kHPnkr').remove();
            tagsOBJ.buildTemplate();
        } catch (error) {
            console.error('Error in applyChanges function:', error);
        }
    },
    buildTemplate: function () {
        try {
            let eTarget = document.querySelector(tagsCONSTANTS.TARGET_ELEMENT);

            // Check if target element exists
            if (!eTarget) {
                console.error('Target element mobile title is not found');
                return;
            }

            // Check if tags already exists
            if (document.querySelector(`#${tagsCONSTANTS.EXPERIMENT_ID}`)) {
                return;
            }

            // Create tags element from HTML string
            let tags = document.createElement('div');
            tags.id = tagsCONSTANTS.EXPERIMENT_ID;
            tags.innerHTML = tagsCONSTANTS.TEMPLATE_COPY;

            // Insert based on specified type
            switch (tagsCONSTANTS.TEMPLATE_INJECT_TYPE) {
                case 'before':
                    eTarget.parentNode.insertBefore(tags, eTarget);
                    break;
                case 'after':
                    eTarget.parentNode.insertBefore(tags, eTarget.nextSibling);
                    break;
                case 'prepend':
                    eTarget.prepend(tags);
                    break;
                case 'append':
                    eTarget.append(tags);
                    break;
                case 'replace':
                    eTarget.parentNode.replaceChild(tags, eTarget);
                    break;
                default:
                    eTarget.parentNode.insertBefore(tags, eTarget);
            }

        } catch (error) {
            console.error('Error in buildTemplate function:', error);
            tagsOBJ.tracking('error buildTemplate');
        }
    },
    waitForElement: function () {
        try {
            let rC = 0;
            let int = setInterval(() => {
                const el = document.querySelector(tagsCONSTANTS.TARGET_ELEMENT);
                if (el && croWD) {
                    clearInterval(int);
                    int = null;
                    tagsOBJ.applyChanges(el);
                } else {
                    rC++;
                    if (rC >= tagsCONSTANTS.INIT_MAX_RETRIES) {
                        clearInterval(int);
                        int = null;
                        console.error('Element not found after max retries. tagsOBJ');
                        tagsOBJ.tracking('error elementsNotFound');
                    }
                }
            }, tagsCONSTANTS.INIT_RETRY_INTERVAL);

        } catch (error) {
            console.error('Error in waitForElement function:', error);
            tagsOBJ.tracking('error waitForElement');
        }
    },
    init: function () {
        tagsOBJ.waitForElement();
    }

};

tagsOBJ.init();


//--------------------------------------------



const familyDropdownCONSTANTS = {
	EXPERIMENT_ID: 'DCP18122',
	PAGES_INCLUDE: [],
	PAGES_EXCLUDE: [],
	EXPERIMENT_VARIANT: 'variant',
	TARGET_ELEMENT: 'h1',
    
	TEMPLATE_HTML: `
        <div id="familyDropdownHolderSamsung">
            <select id="device-model" name="device-model" aria-hidden="true" tabindex="-1">
                <option value="galaxy-z-range">Samsung Galaxy Z range</option>
                <option value="galaxy-z-fold8-ultra">Samsung Galaxy Z Fold8 Ultra</option>
                <option value="galaxy-z-fold8">Samsung Galaxy Z Fold8</option>
                <option value="galaxy-z-flip8">Samsung Galaxy Z Flip8</option>
            </select>
            <div id="custom-select-wrapper">
                <div id="custom-select-trigger" tabindex="0" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="custom-dropdown" aria-label="Choose Galaxy Z model">
                    <span id="custom-select-label">Samsung Galaxy Z range</span>
                    <span class="arrow-icon" aria-hidden="true"></span>
                </div>
                <div id="custom-dropdown" role="menu" aria-label="Galaxy Z model options">
                    <a id="familyDropdown-option-galaxy-z-fold8-ultra" class="custom-dropdown-item" href="https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-z-fold8-ultra" role="menuitem" tabindex="-1">Samsung Galaxy Z Fold8 Ultra</a>
                    <a id="familyDropdown-option-galaxy-z-fold8" class="custom-dropdown-item" href="https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-z-fold8" role="menuitem" tabindex="-1">Samsung Galaxy Z Fold8</a>
                    <a id="familyDropdown-option-galaxy-z-flip8" class="custom-dropdown-item" href="https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-z-flip8" role="menuitem" tabindex="-1">Samsung Galaxy Z Flip8</a>
                </div>
            </div>
        </div>
    `,
	TEMPLATE_INJECT_TYPE: 'after',
	CUSTOM_CSS: `
    @media (max-width: 767px) {
        #wrapper-__EXPERIMENT_ID__ {
            margin: 16px 0 -10px 0 !important;
            width: 100% !important;
        }
        #familyDropdownHolderSamsung {
            width: 100% !important;
            margin-top: 0 !important;
        }
		#custom-dropdown .custom-dropdown-item {
			font-size: 16px!important;
		}
		#custom-select-label{
			font-size: 16px!important;
		}
    }
    #wrapper-__EXPERIMENT_ID__ {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 32px;
        width: max-content;
    }
    #familyDropdownHolderSamsung {
        position: relative;
        display: inline-block;
        font-family: 'VodafoneRegular';
        cursor: pointer;
        margin-bottom: 16px;
    }
    /* hide original select */
    #familyDropdownHolderSamsung #device-model {
        display: none;
    }
    /* ===== custom dropdown styles ===== */
    #custom-select-wrapper {
        position: relative;
        display: flex;
        padding: 0 16px;
        gap: 10px;
        align-self: stretch;
        border-radius: 4px;
        border: 1px solid #7E7E7E;
        background: #FFF;
        box-sizing: border-box;
    }
    /* blue border when open */
    #familyDropdownHolderSamsung.open #custom-select-wrapper {
        outline: 2px solid #00B0CA;
		border-color: transparent;
		box-shadow: none;
		border-radius: 4px 4px 0 0;
    }
    /* blue border when keyboard focus is inside */
    #custom-select-wrapper:focus-within {
  	box-shadow: 0 0 0 2px #fff, 0 0 0 4px #00B0CA;
    }
    #custom-select-trigger {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        user-select: none;
        color: #0D0D0D;
        width: 100%;
        font-family: 'VodafoneRegular';
        font-size: 18px;
        min-height: 46px;
        box-sizing: border-box;
        min-width: 220px;
    }
    #custom-select-trigger[aria-expanded="true"] .arrow-icon {
        transform: rotate(180deg);
    }
    #custom-select-trigger:focus {
        outline: none;
    }
    #custom-select-trigger .arrow-icon {
        width: 24px;
        height: 24px;
        flex: 0 0 24px;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path fill-rule='evenodd' clip-rule='evenodd' d='M20.1464 7.39639C20.3415 7.2012 20.6584 7.2012 20.8534 7.39639C21.0487 7.59171 21.0487 7.90813 20.8534 8.10342L12.3534 16.6034C12.2559 16.701 12.1278 16.7499 11.9999 16.7499C11.872 16.7499 11.744 16.701 11.6464 16.6034L3.14639 8.10342C2.95117 7.90814 2.95124 7.59171 3.14639 7.39639C3.3417 7.2012 3.65811 7.2012 3.85342 7.39639L11.9999 15.5429L20.1464 7.39639Z' fill='%23E60000'/></svg>");
        background-repeat: no-repeat;
        background-position: center;
        transition: transform 0.2s ease;
    }
    #custom-dropdown {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        min-width: 100%;
        width: 100%;
        margin: 0;
        padding: 16px 0;
        background: #fff;
        border-radius: 0 0 4px 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
        z-index: 9999;
        display: none;
        font-size: 18px;
        line-height: 22px;
        box-sizing: border-box;
    }
    #custom-select-label {
        padding: 12px 0;
        font-size: 18px;
        line-height: 22px;
    }
    #custom-dropdown.open {
        display: block;
        animation: dropdownFadeIn 0.15s ease;
        max-height: 208px;
        overflow: auto;
    }
	#custom-dropdown.open .arrow-icon{
        transform: rotate(180deg);
    }
    @keyframes dropdownFadeIn {
        from {
            opacity: 0;
            transform: translateY(-6px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    #custom-dropdown .custom-dropdown-item {
        display: block;
        text-decoration: none;
        padding: 12px 16px;
        cursor: pointer;
        color: #0D0D0D;
        transition: background 0.1s ease;
        white-space: nowrap;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        outline: none;
  		margin: 0 8px;
        box-sizing: border-box;
    }
    #custom-dropdown .custom-dropdown-item:hover{
        background: rgba(13, 13, 13, 0.15);
     	border-radius: var(--form-radius-default, 8px);
        color: #0D0D0D;
    }
	#custom-dropdown .custom-dropdown-item:focus {
	border-radius: var(--form-radius-default, 4px);
background: var(--color-states-mono-hovered, rgba(13, 13, 13, 0.15));
		outline: var(--border-width-focused, 2px) solid var(--color-border-focused, #0096AD);
	}
    #custom-dropdown .custom-dropdown-item.selected {
        background: #EBEBEB;
    }
    /* optional custom scrollbar */
    #custom-dropdown.open::-webkit-scrollbar {
        width: 16px;
		height: 57px;
    }
    #custom-dropdown.open::-webkit-scrollbar-thumb {
        background: #C7C7C7;
        border-radius: 8px;
		border: 6px solid transparent;
		background-clip: padding-box;
		min-height: 57px;
    }
    #custom-dropdown.open::-webkit-scrollbar-track {
        background: transparent;
    }
    `,
	INIT_RETRY_INTERVAL: 500,
	INIT_MAX_RETRIES: 20
};

let familyDropdownOBJ = {
	_outsideClickHandler: null,
	_focusInHandler: null,

	applyChanges() {
		try {
			this.buildCSS();
			this.buildTemplate();
			this.triggerCustomDropdown();
		} catch (error) {
			console.error('[familyDropdown] Error in applyChanges():', error);
			this.tracking('error applyChanges');
		}
	},

	triggerCustomDropdown() {
		try {
            const select = document.querySelector('#device-model');
			const holder = document.querySelector('#familyDropdownHolderSamsung');
			const trigger = document.querySelector('#custom-select-trigger');
			const dropdown = document.querySelector('#custom-dropdown');
			const options = dropdown ? Array.from(dropdown.querySelectorAll('.custom-dropdown-item')) : [];

			if (!select || !holder || !trigger || !dropdown || options.length === 0) {
				console.warn('[familyDropdown] Required elements not found');
				return;
			}
			if (holder.dataset.familyDropdownBound === 'true') return;
			holder.dataset.familyDropdownBound = 'true';

			let focusedIndex = -1;

			const isOpen = () => dropdown.classList.contains('open');
			const openDropdown = () => {
				dropdown.classList.add('open');
				holder.classList.add('open');
				trigger.setAttribute('aria-expanded', 'true');
			};
			const closeDropdown = () => {
				dropdown.classList.remove('open');
				holder.classList.remove('open');
				trigger.setAttribute('aria-expanded', 'false');
				focusedIndex = -1;
				options.forEach(opt => opt.setAttribute('tabindex', '-1'));
			};

			const setSelectedUI = (value) => {
				const matched = options.find(opt => opt.dataset.value === value);
				if (matched) {
					select.value = value;
					options.forEach(opt => opt.classList.remove('selected'));
					matched.classList.add('selected');
				}
			};

			const focusOption = (index) => {
				if (!options.length) return;
				if (index < 0) index = options.length - 1;
				if (index >= options.length) index = 0;
				focusedIndex = index;
				options.forEach(opt => opt.setAttribute('tabindex', '-1'));
				options[focusedIndex].setAttribute('tabindex', '0');
				options[focusedIndex].focus();
			};

			const selectAndNavigate = (optionEl) => {
				const value = optionEl.dataset.value;
				setSelectedUI(value);
				//closeDropdown();
				this.tracking('familyDropdown drop down selected device ' + value);
				window.location.href = optionEl.href;
			};

			holder.addEventListener('click', (e) => {
				const item = e.target.closest('.custom-dropdown-item');
				if (item) {
					e.preventDefault();
					selectAndNavigate(item);
					return;
				}
				if (e.target.closest('#custom-select-wrapper')) {
					isOpen() ? closeDropdown() : openDropdown();
				}
			});

			trigger.addEventListener('keydown', (e) => {
				const key = e.key;
				if (key === 'Enter' || key === ' ') {
					e.preventDefault();
					isOpen() ? closeDropdown() : openDropdown();
					return;
				}
				if (key === 'ArrowDown' || key === 'ArrowUp') {
					e.preventDefault();
					if (!isOpen()) openDropdown();
					const currentIdx = options.findIndex(opt => opt.classList.contains('selected'));
					const delta = key === 'ArrowDown' ? 1 : -1;
					focusOption(currentIdx !== -1 ? currentIdx + delta : (delta === 1 ? 0 : options.length - 1));
					return;
				}
				if (key === 'Home') {
					e.preventDefault();
					if (!isOpen()) openDropdown();
					focusOption(0);
				} else if (key === 'End') {
					e.preventDefault();
					if (!isOpen()) openDropdown();
					focusOption(options.length - 1);
				} else if (key === 'Escape') {
					e.preventDefault();
					closeDropdown();
				} else if (key === 'Tab') {
					closeDropdown();
				}
			});

			dropdown.addEventListener('keydown', (e) => {
				const item = e.target.closest('.custom-dropdown-item');
				if (!item) return;
				const key = e.key;
				const idx = options.indexOf(item);
				if (key === 'Enter' || key === ' ') {
					e.preventDefault();
					selectAndNavigate(item);
				} else if (key === 'ArrowDown') {
					e.preventDefault();
					focusOption(idx + 1);
				} else if (key === 'ArrowUp') {
					e.preventDefault();
					focusOption(idx - 1);
				} else if (key === 'Home') {
					e.preventDefault();
					focusOption(0);
				} else if (key === 'End') {
					e.preventDefault();
					focusOption(options.length - 1);
				} else if (key === 'Escape') {
					e.preventDefault();
					closeDropdown();
					trigger.focus();
				} else if (key === 'Tab') {
					closeDropdown();
				}
			});

			if (this._outsideClickHandler) document.removeEventListener('click', this._outsideClickHandler, true);
			if (this._focusInHandler) document.removeEventListener('focusin', this._focusInHandler, true);

			this._outsideClickHandler = (e) => {
				const currentHolder = document.querySelector('#familyDropdownHolderSamsung');
				if (currentHolder && !currentHolder.contains(e.target)) closeDropdown();
			};
			this._focusInHandler = (e) => {
				const currentHolder = document.querySelector('#familyDropdownHolderSamsung');
				if (currentHolder && !currentHolder.contains(e.target)) closeDropdown();
			};
			document.addEventListener('click', this._outsideClickHandler, true);
			document.addEventListener('focusin', this._focusInHandler, true);
		} catch (error) {
			console.error('[familyDropdown] Error in triggerCustomDropdown():', error);
			this.tracking('error triggerCustomDropdown');
		}
	},

	tracking(value) {
		try {
			if (typeof dataLayer !== 'undefined' && croWD.utils.launchTracking) {
				croWD.utils.launchTracking(
					familyDropdownCONSTANTS.EXPERIMENT_ID,
					value,
					familyDropdownCONSTANTS.EXPERIMENT_VARIANT,
					''
				);
			} else {
				console.warn('[familyDropdown] Tracking not available:', value);
			}
		} catch (error) {
			console.error('[familyDropdown] Error in tracking():', error);
		}
	},

	buildCSS() {
		try {
			const styleId = familyDropdownCONSTANTS.EXPERIMENT_ID + '-styles';
			const existingStyle = document.getElementById(styleId);
            if (existingStyle) {
                existingStyle.remove();
            }
            const cssWithExperimentId = familyDropdownCONSTANTS.CUSTOM_CSS.replaceAll(
                '__EXPERIMENT_ID__',
                familyDropdownCONSTANTS.EXPERIMENT_ID
            );
			const styleSheet = document.createElement('style');
            styleSheet.setAttribute('type', 'text/css');
            styleSheet.setAttribute('id', styleId);
            styleSheet.appendChild(document.createTextNode(cssWithExperimentId));
            document.head.appendChild(styleSheet);
		} catch (error) {
			console.error('[familyDropdown] Error in buildCSS():', error);
			this.tracking('error buildCSS');
		}
	},

	buildTemplate() {
		try {
			const target = document.querySelector(familyDropdownCONSTANTS.TARGET_ELEMENT);
			if (!target) throw new Error('[familyDropdown] Target element not found');
			const wrapperId = 'wrapper-' + familyDropdownCONSTANTS.EXPERIMENT_ID;
			const existingWrapper = document.getElementById(wrapperId);
			if (existingWrapper) {
				existingWrapper.remove();
			}
			const wrapper = Object.assign(document.createElement('div'), { id: wrapperId });
			wrapper.innerHTML = familyDropdownCONSTANTS.TEMPLATE_HTML;
			const injectType = familyDropdownCONSTANTS.TEMPLATE_INJECT_TYPE;
			if (injectType === 'replace') {
				target.insertAdjacentElement('afterend', wrapper);
				target.remove();
			} else if (injectType === 'before') {
				target.insertAdjacentElement('beforebegin', wrapper);
			} else if (injectType === 'prepend') {
				target.insertBefore(wrapper, target.firstChild);
			} else {
				target.insertAdjacentElement('afterend', wrapper);
			}
		} catch (error) {
			console.error('[familyDropdown] Error in buildTemplate():', error);
			this.tracking('error buildTemplate');
		}
	},

	observe() {
		try {
			const { PAGES_INCLUDE: include, PAGES_EXCLUDE: exclude } = familyDropdownCONSTANTS;
			croWD.hotbed.listen('croPageTrack', () => {
				const url = location.href.toLowerCase();
				const isExcluded = exclude.some(e => url.includes(e.toLowerCase()));
				const isIncluded = include.length === 0 || include.some(i => url.includes(i.toLowerCase()));
				if (isIncluded && !isExcluded) this.waitForElement();
			});
		} catch (error) {
			console.error('[familyDropdown] Error in observe():', error);
			this.tracking('error observe');
		}
	},

	waitForElement() {
		try {
			const check = () => {
				if (document.querySelector(familyDropdownCONSTANTS.TARGET_ELEMENT) && typeof croWD !== 'undefined') {
					this.applyChanges();
					return true;
				}
				return false;
			};
			if (check()) return;
			let retries = 0;
			const max = familyDropdownCONSTANTS.INIT_MAX_RETRIES;
			const interval = familyDropdownCONSTANTS.INIT_RETRY_INTERVAL;
			const observer = new MutationObserver(() => check() && observer.disconnect());
			observer.observe(document.body, { childList: true, subtree: true });
			const timer = setInterval(() => {
				if (check() || ++retries >= max) {
					clearInterval(timer);
					observer.disconnect();
					if (retries >= max) console.error('[familyDropdown] Element not found after timeout');
				}
			}, interval);
		} catch (error) {
			console.error('[familyDropdown] Error in waitForElement():', error);
			this.tracking('error waitForElement');
		}
	},

	init() {
		try {
			const url = location.href.toLowerCase();
			const { PAGES_INCLUDE: include, PAGES_EXCLUDE: exclude } = familyDropdownCONSTANTS;
			if (exclude.some(e => url.includes(e.toLowerCase()))) {
				console.warn('[familyDropdown] URL excluded');
				return;
			}
			if (include.length === 0 || include.some(i => url.includes(i.toLowerCase()))) {
				this.waitForElement();
			} else {
				this.observe();
			}
		} catch (error) {
			console.error('[familyDropdown] Error in init():', error);
			this.tracking('error init');
		}
	}
}




//--------------------------------------------



const pillCONSTANTS = {
    
    // EXPERIMENT_ID: extension.code, // Experiment ID
    
    EXPERIMENT_ID: 'DCP17963', // Experiment ID
    EXPERIMENT_VARIANT: 'personalisation', // possible values: variant|control|personalisation
    TARGET_ELEMENT: 'h1[data-testid="mobile-phone-title"]', // Target element to be modified
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
            familyDropdownOBJ.init();
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