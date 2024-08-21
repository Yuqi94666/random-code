/**
  * Author: Fabio Toledo
  * Date: 21/03/2024
  * Description: DigLabs Optimizely Extension for customer alerts'
  */

let customerAlertsExt = {
	aid: 'customerAlertsExt',
	tracking: function (event, value) {
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
	getAttributes: function () {
		customerAlertsExt.icon = extension.icon;
		customerAlertsExt.message = extension.message;
		customerAlertsExt.code = extension.trackingCode;
		customerAlertsExt.dismiss = extension.dismiss;
		customerAlertsExt.closeEnable = extension.closeEnable;
		customerAlertsExt.daysoff = parseInt(extension.daysoff);
		customerAlertsExt.cookieExpire = extension.cookieExpire;
		customerAlertsExt.backgroundColour = extension.backgroundColour;
		customerAlertsExt.fontColour = extension.fontColour;
		customerAlertsExt.position = extension.position;
	},
	buildCSS: function () {
		let styleElement = document.createElement('style');
		styleElement.textContent = '.main-alert-container{min-height:51px;} .info-alert-contanier{background-color:' + customerAlertsExt.backgroundColour + ';width:100%}.info-alert-contanier .alert{font-size:14px!important;border:0!important;border-radius:0!important;margin:0 auto!important;background-color:' + customerAlertsExt.backgroundColour + ';text-align:center;display:flex;flex-direction:row;gap:10px;justify-content:center;align-items:center;max-width:960px}.info-alert-contanier .alert span,.info-alert-contanier .alert span a{color:' + customerAlertsExt.fontColour + '!important}.info-alert-contanier .alert span a{text-decoration:underline}.info-alert-contanier .alert-dismissable .close,.info-alert-contanier .alert-dismissible .iii-cross{cursor:pointer}.info-alert-contanier .alert::after,.info-alert-contanier .alert::before{height:0!important;width:0!important}.info-alert-contanier .alert .fa{font-size:1.3em;position:relative;top:0;padding-right:1px}.info-alert-contanier .close{opacity:1!important;text-shadow:0 0 0 ' + customerAlertsExt.backgroundColour + '!important}';

		let bodyElement = document.body;
		bodyElement.appendChild(styleElement);
	},
	buildScript: function () {
			// time in UTC
	var countDownEndDate = new Date("2024-08-16T23:59:59+11:00").getTime();
  
	// Update the count down every 1 second
	var x = setInterval(function () {
	  // Get today's date and time
	  var now = new Date().getTime();
  
	  // Find the distance between now and the count down date
	  var distance = countDownEndDate - now;
  
	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
	  if (days < 10) days = "0" + days;
	  if (hours < 10) hours = "0" + hours;
	  if (minutes < 10) minutes = "0" + minutes;
	  if (seconds < 10) seconds = "0" + seconds;
  
	  // Display the result in the element with id="demo"
	  $(".wrap_days .numerator").text(days);
	  $(".wrap_hrs .numerator").text(hours);
	  $(".wrap_mins .numerator").text(minutes);
	  $(".wrap_secs .numerator").text(seconds);
  
	  // If the count down is finished, write some text
	  if (distance > 0) {
		$(".countdown-wrapper").slideDown();
	  } else {
		clearInterval(x);
	  }
	}, 1000);
	},
	buildTemplate: function () {
		let template = document.createElement('div');
		template.innerHTML = `<div id="customer-alert">
		  <div class="col-sm-12 info-alert-contanier optimizely-alert-tpg">
	  <div class="container alert alert-warning font__tertiary" role="alert">
		  <span>`+ customerAlertsExt.message + `</span>
		  <button type="button" class="close-bt close ui-dialog-titlebar-close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
	  </div>
  </div>
	  </div>`;

		let mainElement = document.querySelectorAll(customerAlertsExt.position)[0];
		mainElement.insertBefore(template, mainElement.firstChild);
		this.tracking('display', 'customerAlert');


		if (document.querySelector('.msg a')) {
			document.querySelectorAll('.msg a').forEach((el) => {
				el.onclick = function () {
					customerAlertsExt.tracking('click', el.innerText);
				};
			});
		}

		if (document.querySelector('.close-bt')) {
			document.querySelector('.close-bt').onclick = function () {
				customerAlertsExt.tracking('click', 'closeBt');
				document.querySelector('#customer-alert').remove();
				if (customerAlertsExt.closeEnable === 'true') {
					customerAlertsExt.createCookie(customerAlertsExt.code, 'on', customerAlertsExt.daysoff, customerAlertsExt.cookieExpire);
				}
			};
		}

	},
	applyBanner: function () {

		if (document.querySelector('#customer-alert')) {
			document.querySelector('#customer-alert').remove();
		}

		this.getAttributes();
		var myCookie = this.getCookie(customerAlertsExt.code);

		if (myCookie !== 'on') {
			this.buildCSS();
			this.buildTemplate();
			if (customerAlertsExt.dismiss === 'true') {
				if (customerAlertsExt.daysoff > 0) {
					this.createCookie(customerAlertsExt.code, 'on', customerAlertsExt.daysoff, customerAlertsExt.cookieExpire);
				}
			}
		}

	},
	init: function () {
		let c = 20;
		let i = setInterval(function () {
			let e = document.querySelectorAll(extension.position);
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

	}
};

customerAlertsExt.init();