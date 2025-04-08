/**
  * Author: Fabio Toledo
  * Date: 17/03/2024
  * Description: A/B Test Quick Links Home Page arrow versus no arrow.'
  */

var DCP11943 = {
	aid: 'DCP11943',
	tracking: function (event, value) {
		dataLayer.push({
			'event': 'optimizely_event',
			'optimizely_experiment': 'quicklinks-abtest-arrow',
			'optimizely_variant': 'variant',
			'page_referrer': document.referrer, //optional
			'page_location': document.location.href, //optional
			'link_text': event + '-' + value,
			'link_url': '',
		});
	},
	buildCSS: function () {
		var style = document.createElement('style');
		style.textContent = `
		#digital-labs-quicklinks ul {
		  list-style: none;
		  display: flex;
		  -webkit-padding-start: 0;
		  padding-inline-start: 0;
		}
		@media screen and (max-width: 767px) {
		  #digital-labs-quicklinks ul {
			flex-direction: column;
		  }
		}
		#digital-labs-quicklinks ul li {
		  display: flex;
		  width: 220px;
		  height: 198px;
		  padding: 24px;
		  flex-direction: column;
		  justify-content: center;
		  align-items: center;
		  margin-right: 20px;
		  border-radius: 16px;
		  background: #fff;
		  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .16);
		}
		#digital-labs-quicklinks ul li:last-child {
		  margin-right: 0;
		}
		@media screen and (max-width: 767px) {
		  #digital-labs-quicklinks ul li {
			width: 100%;
			height: 84px;
			padding: 12px 20px;
			align-items: flex-start;
			margin-right: 0;
			margin-bottom: 12px;
		  }
		  #digital-labs-quicklinks ul li:last-child {
			margin-bottom: 0;
		  }
		}
		#digital-labs-quicklinks ul li a {
		  color: #333;
		  text-decoration: none;
		  display: flex;
		  flex-flow: column;
		  justify-content: center;
		  align-items: center;
		}
		#digital-labs-quicklinks ul li a:hover {
		  text-decoration: underline;
		}
		@media screen and (max-width: 767px) {
		  #digital-labs-quicklinks ul li a {
			flex-flow: row;
			width: 100%;
			justify-content: left;
		  }
		  #digital-labs-quicklinks ul li a:last-child {
			margin-bottom: 0;
		  }
		}
		#digital-labs-quicklinks ul li a div {
		  max-width: 100px;
		  max-height: 100px;
		  margin-bottom: 20px;
		}
		#digital-labs-quicklinks ul li a div img {
		  width: 100%;
		  height: 100%;
		}
		@media screen and (max-width: 767px) {
		  #digital-labs-quicklinks ul li a div {
			max-width: 60px;
			max-height: 60px;
			margin-bottom: 0;
			margin-right: 10px;
		  }
		}
		#digital-labs-quicklinks ul li a span {
		  font-family: VodafoneRegular, Arial, sans-serif;
		  font-size: 20px;
		  font-style: normal;
		  font-weight: 700;
		  line-height: 28px;
		  display: inline-block;
		  position: relative;
		}
		#digital-labs-quicklinks ul li a span::after {
		  display: block;
		  content: "";
		  width: 20px;
		  height: 20px;
		  top: 3px;
		  right: -25px;
		  position: absolute;
		  transform: rotate(270deg);
		  background-image: url('data:image/svg+xml, %3Csvg width="32" height="32" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cpath fill="none" d="M32 0H0v32h32z" /%3E%3Cpath stroke="%23E60000" stroke-linecap="round" stroke-linejoin="round" d="M4.667 11.333L16 22.667l11.333-11.334" /%3E%3C/g%3E%3C/svg%3E');
		  background-size: 100%;
		  transition: all .2s ease-in-out 0s;
		}
		#digital-labs-quicklinks ul li a span:hover::after {
		  transition: all .2s ease-in-out;
		  right: -33px;
		}
		@media screen and (max-width: 767px) {
		  #digital-labs-quicklinks ul li a span {
			font-size: 18px;
			line-height: 24px;
		  }
		}
	  `;

		return style;
	},
	applyChanges: function () {

		var newQuickLinks = document.createElement('div');
		newQuickLinks.id = 'digital-labs-quicklinks';
		newQuickLinks.innerHTML = `<ul>
		  <li><a id="quicklinksMobile" href="https://www.vodafone.com.au/mobile/mobile-phones" target="_self"><div><img src="https://www.vodafone.com.au/images/icons/quicklinksMobile.png" alt="Mobile phones" /></div><span>Mobile phones</span></a></li>
		  <li><a id="quicklinksSimonly" href="https://www.vodafone.com.au/mobile/sim-only-phone-plans" target="_self"><div><img src="https://www.vodafone.com.au/images/icons/quicklinksSimonly.png" alt="Sim Only" /></div><span>Sim Only</span></a></li>
		  <li><a id="quicklinksPrepaid" href="https://www.vodafone.com.au/prepaid/plans" target="_self"><div><img src="https://www.vodafone.com.au/images/icons/quicklinksPrepaid.png" alt="Prepaid" /></div><span>Prepaid</span></a></li>
		  <li><a id="quicklinksiPad" href="https://www.vodafone.com.au/mobile/tablets" target="_self"><div><img src="https://www.vodafone.com.au/images/icons/quicklinksiPad.png" alt="iPad & Tablets" /></div><span>iPad & Tablets</span></a></li>
		  <li><a id="quicklinksNBN" href="https://www.vodafone.com.au/home-internet/plans" target="_self"><div><img src="https://www.vodafone.com.au/images/icons/quicklinksNBN.png" alt="nbn(r) & Internet" /></div><span>nbn &reg; & Internet</span></a></li>
		</ul>`;

		let quicklinks = document.querySelector('vha-button-link-group');
		quicklinks.parentNode.insertBefore(newQuickLinks, quicklinks);

		let style = DCP11943.buildCSS();
		newQuickLinks.appendChild(style);

		quicklinks.style.display = 'none';

		let links = document.querySelectorAll('#digital-labs-quicklinks ul li a');
		if (links) {
			for (const element of links) {
				element.onclick = function () {
					DCP11943.tracking('click', element.id);
					window.optimizely = window.optimizely || [];
					window.optimizely.push({
						type: 'event',
						eventName: element.id
					});

					DCP11943.tracking('click', 'quicklinks');
					window.optimizely = window.optimizely || [];
					window.optimizely.push({
						type: 'event',
						eventName: 'quicklinks'
					});
				};
			}
		}

		//DCP11943.tracking('display', 'quicklinks');

	},
	init: function () {

		var c = 20;
		var i = setInterval(function () {

			var e = document.querySelector('vha-button-link-group');

			c--;
			if (e) {
				clearInterval(i);
				i = null;

				DCP11943.applyChanges();

			}
			
			if (c <= 0) {
				clearInterval(i);
				i = null;
				console.log('DigLab - times up!!!');
			}

		}, 500);

	}
};

DCP11943.init();
