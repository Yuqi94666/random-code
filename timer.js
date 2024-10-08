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
		styleElement.textContent = '.countdown-wrapper{background-color:' + customeTimberExt.backgroundColour +';display: block !important;height: 80px;padding: 13px;color:'+ customeTimberExt.fontColour +';} .countdown-wrapper .h2{color: #fff;font-size: 28px;border-bottom: none;padding-bottom: 0;margin: 0;padding-top: 10px;font-weight: 700;letter-spacing: .2rem;}    .countdown-wrapper .col-xs-3:after{content: \':\';font-family: PlutoSans, Helvetica, sans-serif;font-weight: 700;font-size: 24px;color: white;position: absolute;right: 0;top: 0px;}';

		let bodyElement = document.body;
		bodyElement.appendChild(styleElement);
	},
  	buildTime: function(){
		var countDownEndDate = new Date("2024-08-21T23:59:59+11:00").getTime();
  
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
		template.innerHTML = `<div class="countdown-wrapper">
								<div class="container inside_container text-center">
									<div class="col-md-6 col-xs-12 bf-logo">
										<div class="h2 font__primary">`+ customeTimberExt.endDate + `:</div>
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
							</div>`;

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
				document.querySelector('#customer-alert').remove();
				if (customeTimberExt.closeEnable === 'true') {
					customeTimberExt.createCookie(customeTimberExt.code, 'on', customeTimberExt.daysoff, customeTimberExt.cookieExpire);
				}
			};
		}

	},
	applyBanner: function () {

		if (document.querySelector('#customer-alert')) {
			document.querySelector('#customer-alert').remove();
		}

		this.getAttributes();
		var myCookie = this.getCookie(customeTimberExt.code);

		if (myCookie !== 'on') {
			this.buildCSS();
			this.buildTemplate();
      this.buildTime();
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