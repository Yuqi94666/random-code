/**
  * Author: Fabio Toledo
  * Date: 21/03/2024
  * Description: DigLabs Optimizely Extension for customer alerts'
  */

let customeTimberExt = {
	aid: 'customeTimberExt',
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
		customeTimberExt.icon = extension.icon;
		customeTimberExt.endDate = extension.endDate;
		customeTimberExt.code = extension.trackingCode;
		customeTimberExt.dismiss = extension.dismiss;
		customeTimberExt.closeEnable = extension.closeEnable;
		customeTimberExt.daysoff = parseInt(extension.daysoff);
		customeTimberExt.cookieExpire = extension.cookieExpire;
		customeTimberExt.backgroundColour = extension.backgroundColour;
		customeTimberExt.fontColour = extension.fontColour;
		customeTimberExt.position = extension.position;
	},
	buildCSS: function () {
		let styleElement = document.createElement('style');
		styleElement.textContent = '.countdown-wrapper{min-height:51px;} .contanier{background-color:' + customeTimberExt.backgroundColour + ';width:100%}.info-alert-contanier .alert{font-size:14px!important;border:0!important;border-radius:0!important;margin:0 auto!important;background-color:' + customeTimberExt.backgroundColour + ';text-align:center;display:flex;flex-direction:row;gap:10px;justify-content:center;align-items:center;max-width:960px}.info-alert-contanier .alert span,.info-alert-contanier .alert span a{color:' + customeTimberExt.fontColour + '!important}.info-alert-contanier .alert span a{text-decoration:underline}.info-alert-contanier .alert-dismissable .close,.info-alert-contanier .alert-dismissible .iii-cross{cursor:pointer}.info-alert-contanier .alert::after,.info-alert-contanier .alert::before{height:0!important;width:0!important}.info-alert-contanier .alert .fa{font-size:1.3em;position:relative;top:0;padding-right:1px}.info-alert-contanier .close{opacity:1!important;text-shadow:0 0 0 ' + customeTimberExt.backgroundColour + '!important}';

		let bodyElement = document.body;
		bodyElement.appendChild(styleElement);
	},
	buildTemplate: function () {
		let template = document.createElement('div');
		template.innerHTML = `<div id="countdown-wrapper">
								<div class="container inside_container text-center">
									<div class="col-md-6 col-xs-12 bf-logo">
										<div class="h2 font__primary">EOFY Sale ends in:</div>
									</div>
									<div class="col-md-6 col-xs-12 bf-counter">
										<div class="col-xs-3 wrap_days">
											<div class="numerator h1 font__primary"></div>
											<div class="descriptor font__tertiary">Days</div>
										</div>
										<div class="col-xs-3 wrap_hrs">
											<div class="numerator h1 font__primary"></div>
											<div class="descriptor font__tertiary">Hours</div>
										</div>
										<div class="col-xs-3 wrap_mins">
											<div class="numerator h1 font__primary"></div>
											<div class="descriptor font__tertiary">Mins</div>
										</div>
										<div class="col-xs-3 wrap_secs">
											<div class="numerator h1 font__primary"></div>
											<div class="descriptor font__tertiary">Secs</div>
										</div>
									</div>
								</div>
							</div>
		  <span>`+ customeTimberExt.endDate + `</span>`;

		let mainElement = document.querySelectorAll(customeTimberExt.position)[0];
		mainElement.insertBefore(template, mainElement.firstChild);
		this.tracking('display', 'customerAlert');


		if (document.querySelector('.msg a')) {
			document.querySelectorAll('.msg a').forEach((el) => {
				el.onclick = function () {
					customeTimberExt.tracking('click', el.innerText);
				};
			});
		}

		if (document.querySelector('.close-bt')) {
			document.querySelector('.close-bt').onclick = function () {
				customeTimberExt.tracking('click', 'closeBt');
				document.querySelector('#countdown-wrapper').remove();
				if (customeTimberExt.closeEnable === 'true') {
					customeTimberExt.createCookie(customeTimberExt.code, 'on', customeTimberExt.daysoff, customeTimberExt.cookieExpire);
				}
			};
		}

	},
	applyBanner: function () {

		if (document.querySelector('#countdown-wrapper')) {
			document.querySelector('#countdown-wrapper').remove();
		}

		this.getAttributes();
		var myCookie = this.getCookie(customeTimberExt.code);

		if (myCookie !== 'on') {
			this.buildCSS();
			this.buildTemplate();
			if (customeTimberExt.dismiss === 'true') {
				if (customeTimberExt.daysoff > 0) {
					this.createCookie(customeTimberExt.code, 'on', customeTimberExt.daysoff, customeTimberExt.cookieExpire);
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
				customeTimberExt.applyBanner();
			}
			if (c <= 0) {
				clearInterval(i);
				i = null;
				console.log('DigLab - times up!!!');
			}
		}, 500);

	}
};

customeTimberExt.init();