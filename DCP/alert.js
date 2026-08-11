/**
 * Author: Fabio Toledo
 * Date: 16/05/2025
 * Description: DigLabs Optimizely Extension for customer alerts'
 */

let customerAlertsExt = {
  aid: 'customerAlertsExt',
  tracking: function (event, value) {
      dataLayer.push({
          'event': 'optimizely_event',
          'optimizely_experiment': customerAlertsExt.code,
          'optimizely_variant': 'variant',
          'page_referrer': document.referrer, //optional
          'page_location': document.location.href, //optional
          'link_text': 'customer-alert-' + value,
          'link_url': '',
      });
  },
  createCookie: function (cookieName, cookieValue, timeToExpire, typeExpire) {
      const expirationDate = new Date();
      let cookieString = ``;

      if (typeExpire === 'days') {
          expirationDate.setTime(expirationDate.getTime() + (timeToExpire * 24 * 60 * 60 * 1000));
          cookieString = `${cookieName}=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/`;
      } else if (typeExpire === 'hours') {
          expirationDate.setTime(expirationDate.getTime() + (timeToExpire * 60 * 60 * 1000));
          cookieString = `${cookieName}=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/`;
      } else if (typeExpire === 'minutes') {
          expirationDate.setTime(expirationDate.getTime() + (timeToExpire * 60 * 1000));
          cookieString = `${cookieName}=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/`;
      } else if (typeExpire === 'session') {
          cookieString = `${cookieName}=${cookieValue}; path=/`;
      }

      document.cookie = cookieString;
  },
  getCookie: function (name) {
      let dc = document.cookie;
      let prefix = name + '=';
      let begin = dc.indexOf('; ' + prefix);
      let end = document.cookie.indexOf(';', begin);

      if (begin == -1) {
          begin = dc.indexOf(prefix);
          if (begin != 0) return null;
      } else {
          begin += 2;
          end = document.cookie.indexOf(';', begin);
          if (end == -1) {
              end = dc.length;
          }
      }
      return decodeURI(dc.substring(begin + prefix.length, end));
  },
  convertStringToArray: function (inputString) {
      if (!inputString) return []; // Return an empty array if the input is null or empty
      return inputString.split(',').map(item => item.trim()); // Split by comma and trim each item
  },
  getAttributes: function () {
      customerAlertsExt.pagesInclude = this.convertStringToArray(extension.pagesInclude);
      customerAlertsExt.pagesExclude = this.convertStringToArray(extension.pagesExclude);
      customerAlertsExt.iconURL = extension.iconURL;
      customerAlertsExt.iconAlt = extension.iconAlt;
      customerAlertsExt.message = extension.message;
      customerAlertsExt.code = extension.trackingCode;
      customerAlertsExt.dismiss = extension.dismiss;
      customerAlertsExt.closeEnable = extension.closeEnable;
      customerAlertsExt.daysoff = parseInt(extension.daysoff);
      customerAlertsExt.cookieExpire = extension.cookieExpire;
      customerAlertsExt.backgroundColour = extension.backgroundColour;
      customerAlertsExt.fontColour = extension.fontColour;
      customerAlertsExt.position = extension.position;
      customerAlertsExt.modalTitle = extension.modalTitle;
      customerAlertsExt.modalText = extension.modalText;
      customerAlertsExt.tandc = extension.tandc;
  },
  buildCSS: function () {
      let styleElement = document.createElement('style');
      styleElement.textContent = 'div#modal{display:none;position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:830;background-color:rgba(0,0,0,.5);align-items:center;justify-content:center}div#modal #tooltip{position:relative;display:flex;flex-direction:column;background-color:#fff;width:80%;max-height:95%;overflow-y:auto;color:#333;padding:40px 60px 48px;border-radius:6px;margin:0px 16px;max-width:768px}div#modal .close-link{border:none;margin:0px;padding:0px;width:auto;background:rgba(0,0,0,0);color:inherit;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch:inherit;font-size:inherit;font-family:inherit;font-optical-sizing:inherit;font-size-adjust:inherit;font-kerning:inherit;font-feature-settings:inherit;font-variation-settings:inherit;line-height:normal;-webkit-appearance:none;-moz-appearance:none;appearance:none;align-self:flex-end;cursor:pointer;z-index:10;position:fixed;margin-top:-30px;margin-right:-50px}div#modal .close-link svg.close-icon{position:relative;color:#333;display:block;height:24px;width:24px}div#modal h3{margin-bottom:24px;font-size:40px;line-height:48px}div#modal h4{font-family:VodafoneRegular,Arial,sans-serif;margin-bottom:15px}div#modal ol{margin:-10px 0 20px 0;padding:0px 0px 0px 16px}div#modal ol.list2{margin:-10px 0 20px 0;padding:0px 0px 0px 1px !important;list-style:disc;margin-left:16px}.list2 li{padding:8px 0px 8px 0px}div#modal p.text{font-size:18px;line-height:24px}div#modal p.term{font-size:12px;line-height:16px}@media(max-width: 768px){div#modal h3{font-size:24px;line-height:30px}div#modal p.text{font-size:16px;line-height:22px}div#modal #tooltip{width:100%;margin:0;border-radius:0;padding:24px 16px 32px}div#modal .close-link{margin-top:-10px;margin-right:-10px}div#modal h3{margin-bottom:16px}}vha-header>header>ul>li.nav-mega-menu>div.nav-mega-onscreen.menu-open{z-index:3 !important}#customer-alert{padding:14px;background-color:' + customerAlertsExt.backgroundColour + '}@media(min-width: 1440px){#customer-alert{padding-left:0px;padding-right:0px}}#customer-alert .container{display:grid;grid-template-columns:repeat(12, 1fr);grid-auto-flow:dense;gap:16px;max-width:1180px;margin-left:auto;margin-right:auto;padding:0;}@media(min-width: 768px){#customer-alert .container{-moz-column-gap:20px;column-gap:20px;row-gap:20px}}#customer-alert .container .sub-container{grid-column:1/span 12;text-align:left}#customer-alert .container .sub-container .nudge{position:relative;display:flex;align-items:flex-start;justify-content:center}@media(min-width: 768px){#customer-alert .container .sub-container .nudge{align-items:center}}#customer-alert .container .sub-container .nudge .copy{display:flex;align-items:center;color:' + customerAlertsExt.fontColour + '}#customer-alert .container .sub-container .nudge .copy .icon{flex:0 0 32px;position:relative;color:inherit;display:block;height:32px;width:32px;margin-right:16px}#customer-alert .container .sub-container .nudge .copy .icon img{max-width:100%;height:auto}#customer-alert .container .sub-container .nudge .copy .icon img path{fill:inherit}@media(min-width: 768px){#customer-alert .container .sub-container .nudge .copy .icon{margin-bottom:0px}}#customer-alert .container .sub-container .nudge .copy .msg{color:inherit;-webkit-font-smoothing:antialiased;font-size:16px;line-height:20px}@media(max-width: 768px){#customer-alert .container .sub-container .nudge .copy .msg{line-height:19px}}#customer-alert .container .sub-container .nudge .copy .msg .title{margin-right:16px;font-family:VodafoneRegularBold,Arial,sans-serif}@media(max-width: 768px){#customer-alert .container .sub-container .nudge .copy .msg .title{display:block;padding-bottom:2px}}#customer-alert .container .sub-container .nudge .copy .msg .modal-link{color:inherit}#customer-alert .container .sub-container .nudge .copy .msg .modal-link:hover{text-decoration:none}#customer-alert .container .sub-container .nudge .close-bt{margin-left:16px;height:24px;width:24px;cursor:pointer;color:' + customerAlertsExt.fontColour + '}@media(min-width: 768px){#customer-alert .container .sub-container .nudge .close-bt{position:absolute;right:0px}}#customer-alert .container .sub-container .nudge .close-bt .close-icon{position:relative;color:inherit;display:block;height:24px;width:24px}';

      let bodyElement = document.body;
      bodyElement.appendChild(styleElement);
  },
  buildTemplate: function () {
      let template = document.createElement('div');
      let icon = '';

      if (customerAlertsExt.iconURL == '') {
        icon = `<div class="icon"></div>`;
      } else {
        icon = `<div class="icon"><img src=` + customerAlertsExt.iconURL + ` alt="` + customerAlertsExt.iconAlt + `" /></div>`;
      }

      template.innerHTML = `<div id="customer-alert"><div id="modal"><div id="tooltip"><div class="text"><p><h4>` + customerAlertsExt.modalTitle + `</h4>` + customerAlertsExt.modalText + `<p class=\'term\'>` + customerAlertsExt.tandc + `</p></p></div><div class="close-link"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation" class="close-icon"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M20 4L4 20M4 4l16 16" stroke="currentColor" stroke-linecap="round"></path></g></svg></div></div></div>
        <div class="container">
            <div class="sub-container">
                <div class="nudge">
                    <div class="copy">
                      ` + icon + ` 
                      <div class="msg">` + customerAlertsExt.message + `</div>
                    </div>
                    <div class="close-bt"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation" class="close-icon"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M20 4L4 20M4 4l16 16" stroke="currentColor" stroke-linecap="round"></path></g></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

      let mainElement = document.querySelectorAll(customerAlertsExt.position)[0];
      mainElement.insertBefore(template, mainElement.firstChild);
      //   this.tracking('display', 'customerAlert');

    	if (document.querySelector('.modal-link')) {
    
        document.querySelector('.modal-link').addEventListener('click', function () {
          document.querySelector('#modal').style.display = 'flex';
        });

        document.querySelector('#modal .close-link').addEventListener('click', function () {
          document.querySelector('#modal').style.display = 'none';
        });
      
    	}

      if (document.querySelector('.msg a')) {
        document.querySelectorAll('.msg a').forEach((el) => {
          el.onclick = function () {
            customerAlertsExt.tracking('click', el.innerText);
          };
        });
      }

      if (document.querySelector('.close-bt')) {
        document.querySelector('.close-bt').addEventListener('click', function () {
          customerAlertsExt.tracking('click', 'closeBt');
          document.querySelector('#customer-alert').remove();
          if (customerAlertsExt.closeEnable === 'true') {
            customerAlertsExt.createCookie(customerAlertsExt.code, 'on', customerAlertsExt.daysoff, customerAlertsExt.cookieExpire);
          }
        });
      }
  },
  applyBanner: function () {

      if (document.querySelector('#customer-alert')) {
          document.querySelector('#customer-alert').remove();
      }

      var myCookie = this.getCookie(customerAlertsExt.code);

      if (myCookie !== 'on') {
          this.buildTemplate();
          if (customerAlertsExt.dismiss === 'true') {
              if (customerAlertsExt.daysoff > 0) {
                  this.createCookie(customerAlertsExt.code, 'on', customerAlertsExt.daysoff, customerAlertsExt.cookieExpire);
              }
          }
      }

  },
  waitForElement: function () {
      let c = 20;
      let i = setInterval(function () {

          let e = document.querySelectorAll(customerAlertsExt.position);

          c--;
          if (e.length > 0) {
              clearInterval(i);
              i = null;

              customerAlertsExt.applyBanner();

          }
          if (c <= 0) {
              clearInterval(i);
              i = null;
              console.log('DigLab - times up!!!');
          }

      }, 500);
  },
  init: function () {

      customerAlertsExt.getAttributes();
      customerAlertsExt.buildCSS();

      // Define the array of URLs to check against
    //   const urlArray = customerAlertsExt.pagesInclude;
      const urlArray = ['CAMP617711:BTL'];

      // Define URLs to be excluded
      const excludedUrls = customerAlertsExt.pagesExclude

      if (urlArray.length === 0) {
          customerAlertsExt.waitForElement();
      } else {

          const currentUrl = window.location.href;

          // Check if the current URL exists in the array and not in the excluded list
          const matchedUrl = urlArray.find(url => {
              const isMatch = currentUrl.toLowerCase().includes(url.toLowerCase());
              const isExcluded = excludedUrls.some(excludedUrl =>
                  currentUrl.toLowerCase().includes(excludedUrl.toLowerCase())
              );
              return isMatch && !isExcluded;
          });
  
          //console.log('Current URL:', matchedUrl);
  
          if (matchedUrl) {
              customerAlertsExt.waitForElement();
          } else {
              const alertElement = document.getElementById('customer-alert');
              if (alertElement) {
                  alertElement.style.display = 'none';
              }
          }
  
          // Function to monitor URL changes
          function monitorUrlChanges() {
              let previousUrl = window.location.href;
              //console.log('OK');
  
              // Use MutationObserver to monitor DOM changes
              const observer = new MutationObserver(() => {
                  const currentUrl = window.location.href;
                  //console.log(currentUrl);
                  if (currentUrl !== previousUrl) {
                      previousUrl = currentUrl;
  
                      // Check if the current URL exists in the array and not in the excluded list
                      const matchedUrl = urlArray.find(url => {
                          const isMatch = currentUrl.toLowerCase().includes(url.toLowerCase());
                          const isExcluded = excludedUrls.some(excludedUrl =>
                              currentUrl.toLowerCase().includes(excludedUrl.toLowerCase())
                          );
                          return isMatch && !isExcluded;
                      });
  
                      if (matchedUrl) {
                          customerAlertsExt.waitForElement();
                      } else {
                          const alertElement = document.getElementById('customer-alert');
                          if (alertElement) {
                              alertElement.style.display = 'none';
                          }
                      }
                  }
              });
  
              // Observe changes to the <body> element (or any other relevant element)
              observer.observe(document.body, {
                  childList: true,
                  subtree: true
              });
          }
  
          // Initialize the URL monitoring
          monitorUrlChanges();

      }

  }
};

customerAlertsExt.init();