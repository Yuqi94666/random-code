const DCP17201CONSTANTS = {
  EXPERIMENT_ID: '17201', // Experiment ID
  PAGES_INCLUDE: [
    '/upgrade/mobile/mobile-phones/samsung/samsung-galaxy-s26plus', 
    '/mobile/mobile-phones/samsung/samsung-galaxy-s26plus', 
    '/upgrade/mobile/mobile-phones/samsung/samsung-galaxy-s26-ultra',
    '/mobile/mobile-phones/samsung/samsung-galaxy-s26-ultra',
  ], // ['iphone16'] // pages to be included, if empty observe is not used
  PAGES_EXCLUDE: [], //pages to be excluded
  EXPERIMENT_VARIANT: 'personalisation', // possible values: variant|control|personalisation
  TARGET_ELEMENT: '[data-testid="choose-plan-cta"]', // Target element to be modified
  TEMPLATE_HTML: `<div class="upgrade-options">
    <div class="main-container">
        <div class="hi-fi-dark-price-promise">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <g clip-path="url(#clip0_16165_30753)">
                    <path d="M31.7299 58.6668C29.2869 58.663 26.9417 57.7063 25.1932 56.0001C22.8493 56.5165 20.3966 56.119 18.3357 54.8888C16.2749 53.6586 14.7611 51.6884 14.1032 49.3801C11.8145 48.6565 9.88835 47.0865 8.7181 44.9908C7.54785 42.895 7.22182 40.4315 7.80658 38.1034C6.18931 36.3313 5.30888 34.009 5.34481 31.6101C5.38073 29.2112 6.33031 26.9163 7.99991 25.1934C7.48239 22.8503 7.87857 20.398 9.10758 18.3371C10.3366 16.2761 12.3058 14.7619 14.6132 14.1034C15.3382 11.8149 16.909 9.8892 19.0051 8.71911C21.1012 7.54902 23.5648 7.22272 25.8932 7.80677C27.6644 6.1869 29.987 5.30418 32.3869 5.33888C34.7869 5.37357 37.083 6.32305 38.8066 7.99343C41.1505 7.47703 43.6032 7.87448 45.6641 9.1047C47.725 10.3349 49.2388 12.3052 49.8966 14.6134C52.1853 15.337 54.1115 16.907 55.2817 19.0028C56.452 21.0986 56.778 23.562 56.1932 25.8901C57.8131 27.6612 58.6958 29.9839 58.6611 32.3838C58.6264 34.7837 57.677 37.0799 56.0066 38.8034C56.5238 41.1474 56.1267 43.6005 54.8964 45.6616C53.666 47.7227 51.6953 49.2363 49.3866 49.8934C48.663 52.1829 47.0925 54.1096 44.996 55.2799C42.8994 56.4503 40.4351 56.7758 38.1066 56.1901C37.119 57.0955 35.948 57.7776 34.6732 58.1901C33.7234 58.503 32.73 58.6639 31.7299 58.6668Z" fill="#E60000"/>
                    <g opacity="0.06">
                      <path d="M56.0229 41.949C55.6731 43.6283 54.8694 45.1795 53.6992 46.4337C52.5291 47.6879 51.0373 48.5971 49.3862 49.0624C48.6627 51.3518 47.0921 53.2785 44.9956 54.4489C42.8991 55.6192 40.4348 55.9447 38.1062 55.359C37.1186 56.2644 35.9476 56.9465 34.6729 57.359C33.7227 57.6697 32.7293 57.8284 31.7296 57.829C29.2865 57.8253 26.9414 56.8686 25.1929 55.1624C22.849 55.6788 20.3963 55.2813 18.3354 54.0511C16.2745 52.8209 14.7607 50.8506 14.1029 48.5424C12.2654 47.9614 10.6502 46.8308 9.47541 45.3031C8.30058 43.7754 7.62259 41.9241 7.53289 39.999C7.44001 42.0711 8.03359 44.1158 9.22152 45.8161C10.4095 47.5163 12.1253 48.7769 14.1029 49.4024C14.7648 51.7067 16.2805 53.672 18.341 54.8977C20.4016 56.1234 22.852 56.5172 25.1929 55.999C26.9414 57.7052 29.2865 58.662 31.7296 58.6657C32.7293 58.665 33.7227 58.5064 34.6729 58.1957C35.9476 57.7832 37.1186 57.1011 38.1062 56.1957C40.4348 56.7814 42.8991 56.4558 44.9956 55.2855C47.0921 54.1152 48.6627 52.1885 49.3862 49.899C51.4206 49.3194 53.2008 48.0722 54.4403 46.358C55.6798 44.6439 56.3065 42.5626 56.2196 40.449C56.1941 40.9535 56.1283 41.4551 56.0229 41.949Z" fill="black"/>
                      <path d="M56 37.9732C56.05 38.2032 56.09 38.4366 56.1233 38.6699C56.9844 37.7573 57.6532 36.6809 58.0901 35.5048C58.527 34.3286 58.7231 33.0767 58.6667 31.8232C58.5641 34.1314 57.6147 36.3208 56 37.9732Z" fill="black"/>
                      <path d="M7.80585 37.273C6.90007 36.2844 6.21793 35.1123 5.80585 33.8363C5.53702 33.0268 5.37783 32.1848 5.33252 31.333C5.28528 32.4624 5.43993 33.5912 5.78919 34.6663C6.18333 35.8767 6.82211 36.9932 7.66585 37.9463C7.70252 37.7197 7.74919 37.4963 7.80585 37.273Z" fill="black"/>
                    </g>
                    <path d="M31.0559 38.8361C30.7792 38.8134 30.511 38.7295 30.2707 38.5906C30.0303 38.4517 29.8237 38.2612 29.6659 38.0328L24.7192 32.5595V32.5428L24.6192 32.4195L24.5892 32.3795C24.3707 32.0921 24.2534 31.7405 24.2559 31.3795C24.2568 30.958 24.4246 30.5541 24.7226 30.2561C25.0206 29.9581 25.4245 29.7903 25.8459 29.7895C26.0712 29.7946 26.2931 29.8454 26.4982 29.9388C26.7034 30.0322 26.8874 30.1662 27.0392 30.3328L30.6659 33.4928L38.5526 23.4928C38.68 23.2597 38.8653 23.0633 39.0907 22.9226C39.316 22.7819 39.5738 22.7016 39.8392 22.6895C40.2247 22.6895 40.5943 22.8426 40.8669 23.1151C41.1394 23.3877 41.2926 23.7573 41.2926 24.1428C41.2794 24.4786 41.163 24.8022 40.9592 25.0695L34.2659 35.3028L32.5426 37.8395C32.3326 38.1728 31.8592 38.8361 31.0559 38.8361Z" fill="#EBEBEB"/>
                    <path opacity="0.12" d="M40.9668 24.3793L34.2735 34.6126L32.5501 37.1493C32.3201 37.4826 31.8601 38.1493 31.0568 38.1493C30.7789 38.1255 30.5098 38.0398 30.2693 37.8984C30.0288 37.7571 29.8229 37.5638 29.6668 37.3326L24.7201 31.8726V31.856L24.6201 31.7326L24.5901 31.6926C24.4484 31.494 24.3527 31.2663 24.3101 31.026C24.2863 31.1355 24.274 31.2472 24.2735 31.3593C24.271 31.7203 24.3882 32.072 24.6068 32.3593L24.6368 32.3993L24.7368 32.5226V32.5393L29.6668 38.0326C29.8252 38.263 30.0331 38.4551 30.2754 38.5947C30.5176 38.7342 30.788 38.8178 31.0668 38.8393C31.8701 38.8393 32.3301 38.1726 32.5601 37.8393L34.2835 35.3026L40.9768 25.0693C41.1806 24.8021 41.297 24.4785 41.3101 24.1426C41.3073 24.0198 41.2894 23.8978 41.2568 23.7793C41.2028 23.9972 41.104 24.2016 40.9668 24.3793Z" fill="black"/>
                    <g opacity="0.06">
                      <path d="M32.0007 50.6663C28.3087 50.6663 24.6997 49.5716 21.63 47.5204C18.5603 45.4693 16.1677 42.554 14.7549 39.1431C13.3421 35.7322 12.9724 31.979 13.6927 28.358C14.4129 24.737 16.1908 21.4109 18.8013 18.8004C21.4119 16.1898 24.738 14.4119 28.359 13.6917C31.98 12.9714 35.7332 13.3411 39.1441 14.7539C42.555 16.1668 45.4703 18.5593 47.5214 21.629C49.5725 24.6988 50.6673 28.3078 50.6673 31.9997C50.6673 36.9504 48.7007 41.6983 45.2 45.199C41.6993 48.6997 36.9514 50.6663 32.0007 50.6663ZM32.0007 14.6663C28.5724 14.6663 25.2212 15.6829 22.3708 17.5875C19.5203 19.4922 17.2987 22.1993 15.9867 25.3665C14.6748 28.5338 14.3316 32.0189 15.0004 35.3812C15.6692 38.7436 17.32 41.8321 19.7441 44.2562C22.1683 46.6803 25.2568 48.3312 28.6191 49C31.9814 49.6688 35.4666 49.3255 38.6338 48.0136C41.8011 46.7017 44.5082 44.48 46.4128 41.6296C48.3174 38.7791 49.334 35.4279 49.334 31.9997C49.334 27.4026 47.5078 22.9938 44.2572 19.7432C41.0065 16.4925 36.5977 14.6663 32.0007 14.6663Z" fill="black"/>
                    </g>
                    <g opacity="0.06">
                      <path d="M32.0007 13.9997C36.8941 13.9989 41.5923 15.9197 45.0835 19.3486C48.5748 22.7776 50.5799 27.4403 50.6673 32.333V31.9997C50.6673 27.049 48.7007 22.301 45.2 18.8003C41.6993 15.2997 36.9514 13.333 32.0007 13.333C27.0499 13.333 22.302 15.2997 18.8013 18.8003C15.3006 22.301 13.334 27.049 13.334 31.9997V32.333C13.4214 27.4403 15.4265 22.7776 18.9178 19.3486C22.409 15.9197 27.1072 13.9989 32.0007 13.9997Z" fill="black"/>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_16165_30753">
                      <rect width="64" height="64" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
            <div class="frame-838">
                <div class="online-exclusive">$300 bonus credit. <span class="loggedin-claim">Log in to claim.</span></div>
                <div class="save-300-when-you-upgrade-online">By invite only. Receive an additional $300 bonus credit when you trade in an eligible device and stay connected to an eligible plan over 24 or 36 months. Applied to your first bill.</div>
                <div class="loggedin-info">By invite only. Your additional $300 bonus credit will be applied to your first bill when you trade in an eligible device and stay connected to an eligible plan over 24 or 36 months.</div>
            </div>
        </div>
        <div class="content-container">
            <div class="cta">
                <div class="content">
                    <a href="https://www.vodafone.com.au/upgrade` + window.location.pathname + window.location.search + `" class="button cta-upgrade">Log in to claim</a>
                </div>
            </div>
        </div>
    </div>
</div>`, // HTML template to be injected
  TEMPLATE_INJECT_TYPE: 'after', // possible values: replace|before|prepend|after|append
  CUSTOM_CSS: `
        <div class="content-container">
        <div class="content-container">
   #wrapper-17201 { margin-top: 30px; } #wrapper-17201 .upgrade-options, #wrapper-17201 .upgrade-options * { box-sizing: border-box } #wrapper-17201 .upgrade-options { background: #fff; border-radius: 6px; border-style: solid; border-color: #666; border-width: 1px; padding: 24px; display: flex; flex-direction: column; gap: 24px; align-items: flex-start; justify-content: flex-start; flex-shrink: 0; position: relative } #wrapper-17201 .main-container { display: flex; flex-direction: row; gap: 15px; align-items: center; justify-content: flex-start; align-self: stretch; flex-shrink: 0; position: relative } @media screen and (max-width: 1160px) { .main-container { align-items: start; flex-direction: column!important; } } #wrapper-17201 .hi-fi-dark-price-promise { flex-shrink: 0; position: relative; overflow: hidden; display: flex; align-items: center; } @media screen and (max-width: 1160px) { #wrapper-17201 .hi-fi-dark-price-promise { align-items: start; } } .hi-fi-dark-price-promise-image { width: 64px; display: block } #wrapper-17201 .content-container { display: flex; flex-direction: row; gap: 16px; align-items: center; justify-content: right; flex: 1; position: relative } @media screen and (max-width: 1160px) { #wrapper-17201 .content-container { gap: 24px; justify-content: center; width: 100% } } #wrapper-17201 .frame-838 { display: flex; flex-direction: column; gap: 8px; align-items: flex-start; justify-content: flex-start; flex: 1; position: relative; padding-left: 15px } .online-exclusive { color: #333; text-align: left; font-family: "Vodafone-Bold", sans-serif; font-size: 20px; line-height: 28px; font-weight: 700; position: relative } @media screen and (max-width: 1160px) { #wrapper-17201 .online-exclusive { font-size: 18px; line-height: 24px } } .save-300-when-you-upgrade-online { color: #333; text-align: left; font-family: "Vodafone-Regular", sans-serif; font-size: 18px; line-height: 24px; font-weight: 400; position: relative; align-self: stretch; display: flex; overflow-wrap: break-word; max-width: 261px; } .loggedin-info { display: none; max-width: 400px; } @media screen and (max-width: 1160px) { .save-300-when-you-upgrade-online { font-size: 16px; line-height: 22px; max-width: 100% } } .save-300-when-you-upgrade-online.upgrade { max-width: 100% } #wrapper-17201 .cta { background: #333; border-radius: 6px; padding: 15px 20px 15px 20px; display: flex; flex-direction: column; gap: 8px; align-items: center; justify-content: center; flex-shrink: 0; height: 50px; position: relative; cursor: pointer } #wrapper-17201 .cta:hover { background: #666 } @media screen and (max-width: 1160px) { #wrapper-17201 .cta { width: 100% } } .content { display: flex; flex-direction: row; gap: 4px; align-items: center; justify-content: center; align-self: stretch; flex-shrink: 0; height: 24px; position: relative } #wrapper-17201 .button { color: #fff; text-align: center; font-family: "Vodafone-Regular", sans-serif; font-size: 20px; line-height: 24px; font-weight: 400; position: relative; display: flex; align-items: center; justify-content: center; text-decoration: none; } @media screen and (max-width: 1160px) { #wrapper-17201 .button { font-size: 18px } } .content-container{display:none!important;}
  `,
  // CSS to be injected
  INIT_RETRY_INTERVAL: 500, // milliseconds for init retry
  INIT_MAX_RETRIES: 20, // max retries for init
  ELEMENT_EVENT_PAIRS: [
    '.cta-upgrade:click' // Example of an element event pair, format 'selector:eventType'
  ]
};

let DCP17201OBJ = {
  applyChanges: function (el) {
    try {
      this.buildCSS(); // Build and inject CSS
      this.buildTemplate();
      // Retrieve and display the stored digitalExclusiveCLM
      const EXPERIMENT_ID = sessionStorage.getItem(DCP17201CONSTANTS.EXPERIMENT_ID);
      console.log('Session variable created:', EXPERIMENT_ID);

    } catch (error) {
      console.error('Error in applyChanges function:', error);
      DCP17201OBJ.tracking('error applyChanges');
    }
  },
  isLoggedIn: function () {
    try {
      // Implement your logic to check if the user is logged in
      const serviceType = localStorage.getItem('serviceType');
      console.log('serviceType:',serviceType);
      if (serviceType !== 'New') {
        document.querySelector('.save-300-when-you-upgrade-online').style.display = 'none';
        document.querySelector('.content-container .cta').style.display = 'none';
        document.querySelector('.loggedin-info').style.display = 'block';
      }
    } catch (error) {
      console.error('Error in isLoggedIn function:', error);
    }
  },
  tracking: function (value) {
    try {
      if (typeof dataLayer !== 'undefined' && dataLayer) { // Check if dataLayer exists
        croWD.utils.launchTracking(
          DCP17201CONSTANTS.EXPERIMENT_ID,
          value,
          DCP17201CONSTANTS.EXPERIMENT_VARIANT,
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
      styleSheet.setAttribute('id', `${DCP17201CONSTANTS.EXPERIMENT_ID}-styles`);

      // Remove any existing stylesheet with the same ID
      const existingStyle = document.getElementById(`${DCP17201CONSTANTS.EXPERIMENT_ID}-styles`);
      if (existingStyle) {
        existingStyle.remove();
      }

      // Append stylesheet to head
      const css = DCP17201CONSTANTS.CUSTOM_CSS;
      styleSheet.appendChild(document.createTextNode(css));
      document.head.appendChild(styleSheet);
    } catch (error) {
      console.error('Error in buildCSS function:', error);
      DCP17201OBJ.tracking('error buildCSS');
    }
  },
  buildTemplate: function () {
    try {
      let template = document.createElement('div');
      template.innerHTML = DCP17201CONSTANTS.TEMPLATE_HTML; // Use the constant template HTML
      template.id = 'wrapper-' + DCP17201CONSTANTS.EXPERIMENT_ID;

      let mainElement = document.querySelector(DCP17201CONSTANTS.TARGET_ELEMENT).parentElement.parentElement;
      if (!mainElement) {
        throw new Error('Template location element not found');
      }

      // Remove any existing template with the same ID
      const existingTemplate = document.getElementById(`${DCP17201CONSTANTS.EXPERIMENT_ID}`);
      if (existingTemplate) {
        existingTemplate.remove();
      }
      switch (DCP17201CONSTANTS.TEMPLATE_INJECT_TYPE) {
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
      this.isLoggedIn();
    } catch (error) {
      console.error('Error in buildTemplate function:', error);
      DCP17201OBJ.tracking('error buildTemplate');
    }
  },
  addEventListener: function () {
    try {
      const elementEventPairs = DCP17201CONSTANTS.ELEMENT_EVENT_PAIRS || [];
      elementEventPairs.forEach(pair => {
        const [selector, eventType] = pair.split(':');
        const el = document.querySelector(selector);
        if (el) {
          el.addEventListener(eventType, () => {
            DCP17201OBJ.tracking(eventType + ' ' + el.innerText);
          });
        } else {
          console.warn(`Element not found for selector: ${selector}`);
        }
      });
    } catch (error) {
      console.error('Error in addEventListener function:', error);
      DCP17201OBJ.tracking('error addEventListener');
    }
  },
  observe: function () {
    try {
      // Define the array of URLs to check against
      const includeUrls = DCP17201CONSTANTS.PAGES_INCLUDE;

      // Define the array of URLs to be excluded
      const excludedUrls = DCP17201CONSTANTS.PAGES_EXCLUDE;

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
          DCP17201OBJ.waitForElement();
        }
      });

    } catch (error) {
      console.error('Error in observe function:', error);
      DCP17201OBJ.tracking('error observe');
    }
  },
  waitForElement: function () {
    try {
      let rC = 0;
      let int = setInterval(() => {

        const el = DCP17201CONSTANTS.TARGET_ELEMENT;

        if (el && croWD) {
          clearInterval(int);
          int = null;
          DCP17201OBJ.applyChanges(el);
        } else {
          rC++;
          if (rC >= DCP17201CONSTANTS.INIT_MAX_RETRIES) {
            clearInterval(int);
            int = null;
            console.error('Element not found after max retries. DCP17201OBJ');
            DCP17201OBJ.tracking('error elementsNotFound');
          }
        }
      }, DCP17201CONSTANTS.INIT_RETRY_INTERVAL);

    } catch (error) {
      console.error('Error in waitForElement function:', error);
      DCP17201OBJ.tracking('error waitForElement');
    }
  },
  init: function () {
    if (DCP17201CONSTANTS.PAGES_INCLUDE.length === 0) {
      DCP17201OBJ.waitForElement();
    }
    else if (DCP17201CONSTANTS.PAGES_INCLUDE.includes(window.location.pathname)) {
      DCP17201OBJ.waitForElement();
    } else {
      DCP17201OBJ.observe();
    }
  }

};

DCP17201OBJ.init();