'use strict';
window.DCP16910DeviceCohort = 'popularDevices'; // popularDevices || appleDevices || androidDevices

// ═══════════════════════════════════════════════════════════
// 1. PHONE WHITELIST CONFIG
//    Only this section needs to be updated in the future
var DCP16910PhoneConfig = {
  popularDevices: [
    { name: 'Samsung Galaxy S25 Ultra', href: 'https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-s25-ultra', },
    { name: 'Samsung Galaxy S25 FE', href: 'https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-s25-fe', },
    { name: 'iPhone 17 Pro', href: 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro', },
    { name: 'iPhone 17 Pro Max', href: 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro-max', },
  ],
  appleDevices: [
    { name: 'iPhone 16e', href: 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-16e', },
    { name: 'iPhone 17 Pro Max', href: 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro-max', },
    { name: 'iPhone 17 Pro', href: 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro', },
    { name: 'iPhone 17', href: 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17', },
  ],
  androidDevices: [
    { name: 'Samsung Galaxy S25 Ultra', href: 'https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-s25-ultra', },
    { name: 'Samsung Galaxy Z Fold7', href: 'https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-z-fold7', },
    { name: 'Samsung Galaxy S25 FE', href: 'https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-s25-fe', },
    { name: 'Samsung Galaxy A36 5G', href: 'https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-a36-5g', },
  ],
};


// ═══════════════════════════════════════════════════════════
// 2. PLAN & HOME INTERNET DATA
//    Update content here when offers change
// ═══════════════════════════════════════════════════════════
var DCP16910PlanData = {
  simonly: [
    {
      title: 'Small SIM Only Plan',
      href: 'https://www.vodafone.com.au/mobile/sim-only-phone-plans',
      image: 'https://www.vodafone.com.au/images/merch/1412-simonly-small-tile.webp',
      imageAlt: 'Small SIM Only Plan',
      onlineExclusive: false,
      heading: 'Save $14/mth on plan fees.',
      subheading: 'For the first 12 months on a Small SIM Only plan.',
      tc: 'New connections only. Ends 02/03/26 (unless extended).',
      tcTooltip: 'Reverts to standard pricing after 12 months. T&C apply.',
    },
    {
      title: 'Medium SIM Only Plan',
      href: 'https://www.vodafone.com.au/mobile/sim-only-phone-plans',
      image: 'https://www.vodafone.com.au/images/merch/1412-simonly-medium-tile.webp',
      imageAlt: 'Medium SIM Only Plan',
      onlineExclusive: false,
      heading: 'Save $14/mth on plan fees.',
      subheading: 'For the first 12 months on a Medium SIM Only plan.',
      tc: 'New connections only. Ends 02/03/26 (unless extended).',
      tcTooltip: 'Reverts to standard pricing after 12 months. T&C apply.',
    },
  ],
  prepaid: [
    {
      title: '$200 Prepaid Plus Starter Pack',
      href: 'https://www.vodafone.com.au/prepaid/plans/320-plus',
      image: 'https://www.vodafone.com.au/images/merch/1415-feb-offers-starter-pack-250-tile.webp',
      imageAlt: '$200 Prepaid Starter Pack',
      onlineExclusive: false,
      heading: 'Get our $320 Prepaid Plus SIM for $199. Online only.',
      subheading: "That's 300GB on activation only. 220GB thereafter.",
      tc: 'Ends 14/04 (unless extended). T&C apply',
      tcTooltip: null,
    },
    {
      title: '$35 Prepaid Plus Starter Pack',
      href: 'https://www.vodafone.com.au/prepaid/plans/45-plus',
      image: 'https://www.vodafone.com.au/images/merch/1415-feb-offers-starter-pack-35-tile.webp',
      imageAlt: '$35 Prepaid Starter Pack',
      onlineExclusive: false,
      heading: 'Get our $45 Prepaid Plus SIM for $15. Online only.',
      subheading: "That's 100GB for your first 3 recharges. 35GB thereafter.",
      tc: 'Ends 14/04 (unless extended). T&C apply.',
      tcTooltip: null,
    },
  ],
  accessories: [
    {
      title: 'Samsung Galaxy Buds4 Pro',
      href: 'https://www.vodafone.com.au/accessories/buds/samsung-galaxy-buds4-pro',
      image: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-buds-4-pro/1417-samsung-galaxy-buds4-pro-tile.webp',
      imageAlt: 'Samsung Galaxy Buds4 Pro',
      onlineExclusive: false,
      heading: 'New Samsung Galaxy Buds4 Pro. Save $160.',
      subheading: 'When you pre-order and stay connected to an Accessories Payment Plan over 24 or 36 months.',
      tc: 'Postpaid plan costs additional. Ends 08/04 (unless extended). T&C apply.',
      tcTooltip: null,
    },
    {
      title: 'Samsung Galaxy Buds4',
      href: 'https://www.vodafone.com.au/accessories/buds/samsung-galaxy-buds4',
      image: 'https://www.vodafone.com.au/images/devices/samsung/samsung-galaxy-buds-4/1417-samsung-galaxy-buds4-tile.webp',
      imageAlt: 'Samsung Galaxy Buds4',
      onlineExclusive: false,
      heading: 'New Samsung Galaxy Buds4. Save $100.',
      subheading: 'When you pre-order and stay connected to an Accessories Payment Plan over 24 or 36 months.',
      tc: 'Postpaid plan costs additional. Ends 08/04 (unless extended). T&C apply.',
      tcTooltip: null,
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// 4. TEMPLATE BUILDERS
// ═══════════════════════════════════════════════════════════
var DCP16910Templates = {
  srcset: function (url) {
    var base = 'https://www.vodafone.com.au/_next/image?url=' + encodeURIComponent(url);
    return base + '&w=256&q=75,\n                  ' + base + '&w=384&q=75 2x';
  },

  generateDeviceCard: function (d) {
    let minCost = (d.recurringCharge * 36).toFixed(2);
    return `
    <a class="deviceCard itemCard" title="${d.title}" href="${d.href}" aria-hidden="false">
	<div class="device-item">
		<div class="device-item-device">
			<div class="device-item-badge">
				<img src="https://www.vodafone.com.au/images/icons/5g.svg" />
				<img src="https://www.vodafone.com.au/images/icons/e-sim-logo.svg" />
			</div>
			<img alt="${d.title}" srcset="${DCP16910Templates.srcset(d.image)}" />
			<p class="brand">${d.brand}</p>
			<p class="device-name">${d.title}</p>
			<p class="device-prefix">Device from</p>
			<p class="device-price"><span class="dollar">$</span>
      <span class="device-recurringCharge">${d.recurringCharge}</span>
      ${d.wasPrice ? `<span class="device-was-price">${d.wasPrice}</span>` : ''}
      <span class="mth">per month</span>
			</p>
			<p class="device-mincost">Min cost $${minCost} over 36 months. Plan cost additional.</p>
			<div class="primaryBtn">Shop now</div>
		</div>
	</div>
</a>
    `
  },

  generatePlanCard: function (p) {
    var exclusiveClass = p.onlineExclusive ? 'onlineExclusive' : 'XonlineExclusive';
    var tooltipHtml = p.tcTooltip
      ? '<tooltip copy="' + p.tcTooltip.replace(/"/g, '&quot;') + '">T&amp;C apply.</tooltip>'
      : '';
    return `
    <a class="planCard itemCard ${exclusiveClass}" title="${p.title}" href="${p.href}" aria-hidden="false">
	<div class="plan-item">
		<img src="${p.image}" alt="${p.imageAlt || ''}" />
		<div class="plan-text">
			<h3 class="plan-heading">${p.heading}</h3>
			<p class="plan-subheading">${p.subheading}</p>
			<p class="plan-tc">${p.tc} ${tooltipHtml}</p>
			<p class="plan-link">Shop now</p>
		</div>
	</div>
</a>
    `
  },

  deviceSet: function (id, devices) {
    return '<div class="deviceSet" id="' + id + '">' +
      devices.map(DCP16910Templates.generateDeviceCard).join('') +
      '</div>';
  },

  phonesContent: function (phones) {
    return DCP16910Templates.deviceSet('popularDevices', phones.popularDevices) +
      DCP16910Templates.deviceSet('appleDevices', phones.appleDevices) +
      DCP16910Templates.deviceSet('androidDevices', phones.androidDevices);
  },

  planContent: function (plans) {
    return plans.map(DCP16910Templates.generatePlanCard).join('');
  },
};


// ═══════════════════════════════════════════════════════════
// 5. CSS
// ═══════════════════════════════════════════════════════════
var DCP16910CSS = `/* ── Slick core ── */
.slick-slider {
  position: relative; display: block; box-sizing: border-box;
  -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;
  -webkit-touch-callout: none; -khtml-user-select: none;
  -ms-touch-action: pan-y; touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}
.slick-list { position: relative; display: block; overflow: hidden; margin: 0; padding: 0; }
.slick-list:focus { outline: none; }
.slick-list.dragging { cursor: pointer; cursor: hand; }
.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0,0,0); -moz-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0); -o-transform: translate3d(0,0,0); transform: translate3d(0,0,0);
}
.slick-track { position: relative; top: 0; left: 0; display: block; margin-left: auto; margin-right: auto; }
.slick-track:before, .slick-track:after { display: table; content: ""; }
.slick-track:after { clear: both; }
.slick-loading .slick-track { visibility: hidden; }
.slick-slide { display: none; float: left; height: auto; min-height: 1px; }
[dir="rtl"] .slick-slide { float: right; }
.slick-slide img { display: block; }
.slick-slide.slick-loading img { display: none; }
.slick-slide.dragging img { pointer-events: none; }
.slick-initialized .slick-slide { display: block; }
.slick-loading .slick-slide { visibility: hidden; }
.slick-vertical .slick-slide { display: block; height: auto; border: 1px solid transparent; }
.slick-arrow.slick-hidden { display: none; }

/* ── Slick arrows ── */
.slick-arrow {
  z-index: 2; text-indent: -99999px; cursor: pointer;
  border: 2px solid #333; top: 126px; width: 48px; height: 48px;
  border-radius: 24px; box-shadow: 0 2px 12px 0 rgba(0,0,0,0.08);
  position: absolute; background-color: #fff !important;
}
.slick-arrow.slick-prev { left: -10px; }
.slick-arrow.slick-next { right: -10px; }
.slick-arrow.slick-prev:before {
  display: block; content: ""; width: 36px; height: 36px;
  position: absolute; left: 1px; top: 24px;
  transform: translateY(-50%) rotate(90deg);
  background-image: url("data:image/svg+xml, %3Csvg width='36' height='36' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' style='stroke-width:2px' fill-rule='evenodd'%3E%3Cpath fill='none' d='M32 0H0v32h32z' /%3E%3Cpath stroke='%23333333' stroke-linecap='round' stroke-linejoin='round' d='M4.667 11.333L16 22.667l11.333-11.334' /%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right center; background-size: contain;
}
.slick-arrow.slick-next:before {
  display: block; content: ""; width: 36px; height: 36px;
  position: absolute; left: 6px; top: 20px;
  transform: translateY(-50%) rotate(270deg);
  background-image: url("data:image/svg+xml, %3Csvg width='36' height='36' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' style='stroke-width:2px' fill-rule='evenodd'%3E%3Cpath fill='none' d='M32 0H0v32h32z' /%3E%3Cpath stroke='%23333333' stroke-linecap='round' stroke-linejoin='round' d='M4.667 11.333L16 22.667l11.333-11.334' /%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right center; background-size: contain;
}
.slick-arrow:hover, .slick-arrow:focus { border: 2px solid #333; background-color: #333 !important; }
.slick-arrow:focus { border-color: #007C92; }
.slick-arrow.slick-prev:hover:before, .slick-arrow.slick-prev:focus:before,
.slick-arrow.slick-next:hover:before, .slick-arrow.slick-next:focus:before {
  background-image: url("data:image/svg+xml, %3Csvg width='36' height='36' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' style='stroke-width:2px' fill-rule='evenodd'%3E%3Cpath fill='none' d='M32 0H0v32h32z' /%3E%3Cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' d='M4.667 11.333L16 22.667l11.333-11.334' /%3E%3C/g%3E%3C/svg%3E");
}
.slick-arrow.slick-disabled { display: none !important; }

/* ── Wrapper & heading ── */
#DCP16910Wrapper { padding: 60px 0 0 0; background: #f4f4f4; }
#DCP16910Wrapper h2#DCP16910WrapperHeading {
  color: #25282B; text-align: center;
  font-size: 44px; font-weight: 300; line-height: 52px;
  font-family: VodafoneLight, Arial, sans-serif; margin: 0;
}

/* ── Tabs ── */
#DCP16910Wrapper_tabs ul {
  display: flex; gap: 20px; justify-content: center;
  border-bottom: 1px solid #CCC; margin: 48px 0; overflow: auto;
}
#DCP16910Wrapper_tabs ul li {
  list-style: none; font-size: 18px; font-weight: 400; line-height: 24px;
  padding: 16px 0; min-width: 110px; max-width: 200px; text-align: center; cursor: pointer;
}
#DCP16910Wrapper_tabs ul li.active { border-bottom: 2px solid red; }

/* ── Tab contents ── */
#DCP16910Wrapper_tabContents {
  position: relative; width: 90%; max-width: 1180px; margin: 0 auto; min-height: 600px;
}
.DCP16910Wrapper_tabItem { left: -99999px; position: absolute; width: 100%; }
.DCP16910Wrapper_tabItem.active { left: 0; }
.DCP16910Wrapper_tabItem .deviceSet { left: -99999px; position: absolute; width: 100%; }
.DCP16910Wrapper_tabItem .deviceSet.active { left: 0; }

/* ── Device cards ── */
.deviceCardContainer { max-width: 1180px; margin: auto; }
.deviceCardContainer .deviceCard { text-decoration: none; margin: 0 10px; }
.DCP16910Wrapper_tabItem .itemCard { padding: 10px 0; }
.DCP16910Wrapper_tabItem .itemCard.onlineExclusive:before {
  content: 'Online exclusive'; background: #9C2AA0; padding: 6px 18px;
  bottom: 6px; position: relative; color: #fff; font-size: 16px;
  line-height: 22px; border-radius: 6px 6px 6px 0;
}
.DCP16910Wrapper_tabItem .itemCard.XonlineExclusive:before {
  content: ' '; background: none; padding: 6px 18px; bottom: 6px;
  position: relative; color: #fff; font-size: 16px; line-height: 22px; border-radius: 6px 6px 6px 0;
}
.deviceCardContainer .deviceCard .device-item {
  color: rgb(51,51,51); padding: 20px 16px 26px; background-color: #fff;
  border-radius: 6px; box-shadow: rgba(0,0,0,0.16) 0px 2px 8px 0px;
}
.deviceCardContainer .deviceCard .device-item .device-item-badge img { margin: 0; width: 45px; height: 45px; display: inline-block; }
.deviceCardContainer .deviceCard .device-item img { width: 168px; height: auto; margin: 20px auto; display: block; }
.deviceCardContainer .deviceCard .device-item p { margin: 0; }
.deviceCardContainer .deviceCard .device-item .brand { font-size: 14px; line-height: 18px; font-family: VodafoneRegular, Arial, sans-serif; }
.deviceCardContainer .deviceCard .device-item .device-name { color: rgb(51,51,51); font-family: VodafoneRegularBold, Arial, sans-serif; margin-bottom: 16px; font-size: 18px; line-height: 24px; }
.deviceCardContainer .deviceCard .device-item .device-prefix { font-size: 14px; line-height: 18px; padding-top: 10px; }
.deviceCardContainer .deviceCard .device-item .device-price { position: relative; }
.deviceCardContainer .deviceCard .device-item .device-price .dollar { font-family: VodafoneRegularBold, Arial, sans-serif; display: inline-block; vertical-align: top; font-size: 18px; line-height: 36px; }
.deviceCardContainer .deviceCard .device-item .device-price .device-recurringCharge { font-family: VodafoneRegularBold, Arial, sans-serif; font-size: 40px; line-height: 48px; }
.deviceCardContainer .deviceCard .device-item .device-price .device-was-price { font-size: 14px; line-height: 18px; padding: 3px 0 0 2px; text-decoration: line-through; position: absolute; top: 3px; }
.deviceCardContainer .deviceCard .device-item .device-price .mth { display: inline-block; font-size: 14px; line-height: 18px; padding: 3px 0 0 2px; }
.deviceCardContainer .deviceCard .device-item .device-mincost { margin-top: 12px; font-size: 14px; line-height: 18px; }
.deviceCardContainer .deviceCard .device-item .primaryBtn {
  width: 100%; height: auto; margin: 30px auto 0; border-radius: 6px;
  padding: 8px 24px; line-height: 24px; font-family: VodafoneLight, Arial, sans-serif;
  font-size: 18px; text-align: center; text-decoration: none; outline: none;
  pointer-events: auto; user-select: none; white-space: nowrap; vertical-align: middle;
  box-sizing: border-box; border-color: #e60000; background: #e60000; color: #fff;
}
.deviceCardContainer .deviceCard .device-item .primaryBtn:hover { background: #900; border-color: #900; }
@keyframes SeniorEntered { 100% { background-position: left center; } }
.deviceCardContainer .deviceCard .device-item .device-saving {
  height: 24px; width: fit-content; padding: 5px 10px; margin: 5px 0;
  background: linear-gradient(to right, rgb(156,42,160) 50%, white 50%) right center / 200% 200%;
  animation: 1s ease 0s 1 normal forwards running SeniorEntered;
  font-size: 14px; line-height: 1; text-align: center; color: #fff;
  white-space: nowrap; font-family: VodafoneRegular, Arial, sans-serif;
}

/* ── Plan cards ── */
.planCardContainer { max-width: 1180px; margin: auto; }
.planCardContainer .planCard { text-decoration: none; margin: 0 10px; }
.planCardContainer .planCard .plan-item {
  border-radius: 16px; border: 2px solid #000; background: #FEF1F1;
  box-shadow: rgba(0,0,0,0.16) 0px 2px 8px 0px; overflow: hidden; padding-bottom: 50px;
}
.planCardContainer .planCard .plan-item img {
  width: 100%; width: -moz-available; width: -webkit-fill-available; width: stretch;
  margin: 32px 32px 0; border: 2px solid #000; border-radius: 16px;
}
.planCardContainer .planCard .plan-item .plan-text { padding: 24px 30px; color: #333; }
.planCardContainer .planCard .plan-item .plan-text .plan-heading { margin: 0; font-size: 24px; line-height: 30px; font-weight: 700; font-family: VodafoneRegularBold, Arial, sans-serif !important; }
.planCardContainer .planCard .plan-item .plan-text .plan-subheading { margin: 16px 0; font-size: 18px; font-weight: 400; line-height: 24px; }
.planCardContainer .planCard .plan-item .plan-text .plan-tc { font-size: 14px; font-weight: 400; line-height: 18px; margin-bottom: 0; }
.planCardContainer .planCard .plan-item .plan-text .plan-tc tooltip { text-decoration: underline; cursor: pointer; color: #E60000; position: relative; z-index: 1; }
.planCardContainer .planCard .plan-item .plan-text .plan-tc tooltip:hover { text-decoration: none; }
.planCardContainer .planCard .plan-item .plan-text .plan-link {
  margin-top: 24px; font-size: 18px; font-weight: 700; line-height: 24px;
  color: #EA1A1A; padding-right: 30px; position: absolute; display: inline-block; margin-bottom: 0;
}
.planCardContainer .planCard .plan-item .plan-text .plan-link:after {
  display: block; content: ''; width: 20px; height: 20px; top: 3px; right: 8px;
  position: absolute; transform: rotate(270deg);
  background-image: url("data:image/svg+xml, %3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='none' d='M32 0H0v32h32z' /%3E%3Cpath stroke='%23EA1A1A' style='stroke-width:2px' stroke-linecap='round' stroke-linejoin='round' d='M4.667 11.333L16 22.667l11.333-11.334' /%3E%3C/g%3E%3C/svg%3E");
  background-size: 100%; transition: all 0.2s ease-in-out;
}
.planCardContainer .planCard .plan-item .plan-text .plan-link:hover::after { right: 0; }

/* ── Modal ── */
div.modal {
  display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  z-index: 830; background-color: rgba(0,0,0,0.5); align-items: center; justify-content: center;
}
div.modal .tooltip {
  position: relative; display: flex; flex-direction: column; background-color: #fff;
  width: 80%; max-height: 95%; overflow-y: auto; color: #333;
  padding: 40px 60px 48px; border-radius: 6px; margin: 0 16px; max-width: 768px;
}
div.modal .close-link {
  border: none; margin: 0; padding: 0; width: auto; background: rgba(0,0,0,0);
  line-height: normal; -webkit-appearance: none; -moz-appearance: none; appearance: none;
  align-self: flex-end; cursor: pointer; z-index: 10; position: fixed;
  margin-top: -30px; margin-right: -50px;
}
div.modal .close-link svg.close-icon { position: relative; color: #333; display: block; height: 24px; width: 24px; }
div.modal h3 { margin-bottom: 24px; font-size: 40px; line-height: 48px; }
div.modal p.text { font-size: 18px; line-height: 24px; }
div.modal p.term { font-size: 12px; line-height: 16px; }

/* ── Responsive ── */
@media (max-width: 1280px) {
  .planCardContainer .planCard .plan-item { min-height: 550px; }
}
@media (max-width: 1024px) {
  .planCardContainer .planCard .plan-item { min-height: 530px; }
  .planCardContainer .planCard .plan-item img { margin: 24px 24px 0; }
}
@media (max-width: 768px) {
  #DCP16910Wrapper { padding: 30px 0 0 0; }
  #DCP16910Wrapper h2#DCP16910WrapperHeading { font-size: 32px; line-height: 40px; }
  #DCP16910Wrapper_tabs ul { padding: 0; justify-content: flex-start; margin: 24px 0; }
  #DCP16910Wrapper_tabContents { min-height: 550px; }
  .planCardContainer .planCard .plan-item { min-height: auto; }
  .planCardContainer .planCard .plan-item img { margin: 16px 16px 0; border-radius: 14px; }
  div.modal h3 { font-size: 24px; line-height: 30px; margin-bottom: 16px; }
  div.modal p.text { font-size: 16px; line-height: 22px; }
  div.modal .tooltip { width: 100%; margin: 0; border-radius: 0; padding: 24px 16px 32px; }
  div.modal .close-link { margin-top: -10px; margin-right: -10px; }
}`;


// ═══════════════════════════════════════════════════════════
// 6. HTML SKELETON
// ═══════════════════════════════════════════════════════════
var DCP16910TABHTML = `<div id="DCP16910Wrapper">
  <h2 id="DCP16910WrapperHeading">Popular offers for you</h2>
  <div id="DCP16910Wrapper_tabs">
    <ul>
      <li data-cat="phones" tabindex="0" class="active">Phones</li>
      <li data-cat="simonly" tabindex="0">SIM only</li>
      <li data-cat="prepaid" tabindex="0">Prepaid</li>
      <li data-cat="accessories" tabindex="0">Accessories</li>
    </ul>
  </div>
  <div id="DCP16910Wrapper_tabContents">
    <div class="DCP16910Wrapper_tabItem deviceCardContainer active" data-cat="phones"></div>
    <div class="DCP16910Wrapper_tabItem planCardContainer" data-cat="simonly"></div>
    <div class="DCP16910Wrapper_tabItem planCardContainer" data-cat="prepaid"></div>
    <div class="DCP16910Wrapper_tabItem planCardContainer" data-cat="accessories"></div>
    <div class="modal">
      <div class="tooltip">
        <div class="text"><p class="copy"></p></div>
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
  </div>
</div>`;


// ═══════════════════════════════════════════════════════════
// 7. MAIN CONTROLLER
// ═══════════════════════════════════════════════════════════
var DCP16910Fn = {
  aid: 'DCP-16910',
  config: {
    checkingKey: '',
    targetPaths: ['/', '/agents/DCP-16910/', '/cro-demo',],
  },

  // ── Observe ──────────────────────────────────
  observe: function () {
    console.log('###### DCP16910Fn observe ######');
    croWD.hotbed.listen('croPageTrack', function (observable, eventType, data) {
      console.log('#########croPageTrack DATA####:', data);
      DCP16910Fn.init('1');
    });
    if (DCP16910Fn.config.targetPaths.includes(window.location.pathname)) {
      DCP16910Fn.init('0');
    }
  },

  // ── Init ─────────────────────────────────────
  init: function (s) {
    console.log('###### DCP16910Fn init ######', s);
    if (DCP16910Fn.config.targetPaths.includes(window.location.pathname) && $('#DCP16910Wrapper').length === 0) {
      $('<style>' + DCP16910CSS + '</style>').appendTo('head');
      $('vha-popular-products').before(DCP16910TABHTML);

      var watch = setInterval(function () {
        if ($('#DCP16910Wrapper').length > 0 && jQuery.fn.slick) {
          clearInterval(watch);
          DCP16910Fn.fetchDevices().then(function (phones) {
            DCP16910Fn.renderContent(phones);
            $('.DCP16910Wrapper_tabItem .deviceSet').removeClass('active');
            $('.DCP16910Wrapper_tabItem #' + DCP16910DeviceCohort).addClass('active');
            DCP16910Fn.applySlick();
            DCP16910Fn.assignClicks();
          });
        }
      }, 200);

      croWD.utils.launchTracking('DCP16910 BF:Popular Phones Expansion', 'Solution initialised');
    }
  },

  // ── API fetch ─────────────────────────────────
  fetchDevices: function () {
    return fetch('https://api.vodafone.com.au/device/postpaid?serviceType=New')
      .then(function (response) {
        if (!response.ok) throw new Error('Network error: ' + response.status);
        return response.json();
      })
      .then(function (json) {
        var apiDevices = (json.deviceListing && json.deviceListing.devices) || [];
        var apiMap = {};
        apiDevices.forEach(function (d) { apiMap[d.name] = d; });
        return DCP16910Fn.buildAllCohorts(apiMap, false);
      })
      .catch(function (err) {
        console.error('[DCP16910] fetchDevices failed, using fallback:', err);
        return DCP16910Fn.buildAllCohorts(null, true);
      });
  },

  buildAllCohorts: function (apiMap, useFallback) {
    return {
      popularDevices: DCP16910Fn.buildCohort(DCP16910PhoneConfig.popularDevices, apiMap, useFallback),
      appleDevices: DCP16910Fn.buildCohort(DCP16910PhoneConfig.appleDevices, apiMap, useFallback),
      androidDevices: DCP16910Fn.buildCohort(DCP16910PhoneConfig.androidDevices, apiMap, useFallback),
    };
  },

  buildCohort: function (whitelist, apiMap, useFallback) {
    return whitelist.reduce(function (acc, cfg) {
      if (useFallback) {
        acc.push({ title: cfg.name, brand: '', image: '', recurringCharge: '', wasPrice: null, href: cfg.href, badges: cfg.badges, mincost: cfg.mincost });
        return acc;
      }
      var api = apiMap[cfg.name];
      if (!api) { console.warn('[DCP16910] Device not found in API:', cfg.name); return acc; }
      acc.push({
        title: api.name,
        brand: api.manufacturer || '',
        image: api.imageUrl || '',
        recurringCharge: api.discountedRecurringCharge || api.recurringCharge || '',
        wasPrice: api.discountedRecurringCharge ? api.recurringCharge : null,
        href: cfg.href,
        badges: cfg.badges,
        mincost: cfg.mincost,
      });
      return acc;
    }, []);
  },

  // ── Render ────────────────────────────────────
  renderContent: function (phones) {
    $('[data-cat="phones"].deviceCardContainer').html(DCP16910Templates.phonesContent(phones));
    $('[data-cat="simonly"].planCardContainer').html(DCP16910Templates.planContent(DCP16910PlanData.simonly));
    $('[data-cat="prepaid"].planCardContainer').html(DCP16910Templates.planContent(DCP16910PlanData.prepaid));
    $('[data-cat="accessories"].planCardContainer').html(DCP16910Templates.planContent(DCP16910PlanData.accessories));
  },

  // ── Modal ─────────────────────────────────────
  openModal: function (copyText) {
    DCP16910Fn.closeModal();
    var modal = document.querySelector('#DCP16910Wrapper .modal');
    if (modal && copyText) { modal.querySelector('.copy').innerHTML = copyText; modal.style.display = 'flex'; }
  },

  closeModal: function () {
    var modal = document.querySelector('#DCP16910Wrapper .modal');
    if (modal) { modal.querySelector('.copy').innerHTML = ''; modal.style.display = 'none'; }
  },

  // ── Events ────────────────────────────────────
  assignClicks: function () {
    $('html').on('click', '#DCP16910Wrapper_tabs ul li', function () {
      $('#DCP16910Wrapper_tabs ul li').removeClass('active');
      $('.DCP16910Wrapper_tabItem').removeClass('active');
      $(this).addClass('active');
      $('.DCP16910Wrapper_tabItem[data-cat="' + $(this).attr('data-cat') + '"]').addClass('active');
      croWD.utils.launchTracking('DCP16910 BF:Popular Phones Expansion', 'Tab Click - ' + $(this).attr('data-cat'));
    });

    $('html').on('click', '.DCP16910Wrapper_tabItem a', function () {
      croWD.utils.launchTracking('DCP16910 BF:Popular Phones Expansion', 'Item Click - ' + $(this).attr('title'));
    });

    document.querySelectorAll('#DCP16910Wrapper_tabs ul li').forEach(function (tab) {
      tab.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); DCP16910Fn.tabClick(tab.dataset.cat); }
      });
    });

    document.querySelectorAll('#DCP16910Wrapper tooltip').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.stopPropagation(); e.preventDefault();
        var copy = el.getAttribute('copy') || '';
        if (copy) DCP16910Fn.openModal(copy);
      });
    });

    var closeLink = document.querySelector('#DCP16910Wrapper .modal .close-link');
    if (closeLink) closeLink.addEventListener('click', function (e) { e.stopPropagation(); e.preventDefault(); DCP16910Fn.closeModal(); });

    var overlay = document.querySelector('#DCP16910Wrapper .modal');
    if (overlay) overlay.addEventListener('click', function (e) { if (e.target === overlay) DCP16910Fn.closeModal(); });

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') DCP16910Fn.closeModal(); });
  },

  tabClick: function (val) {
    $('#DCP16910Wrapper_tabs ul li').removeClass('active');
    $('.DCP16910Wrapper_tabItem').removeClass('active');
    $('#DCP16910Wrapper_tabs ul li[data-cat="' + val + '"]').addClass('active');
    $('.DCP16910Wrapper_tabItem[data-cat="' + val + '"]').addClass('active');
    croWD.utils.launchTracking('DCP16910 BF:Popular Phones Expansion', 'Tab Click - ' + val);
  },

  // ── Slick ─────────────────────────────────────
  applySlick: function () {
    console.log('#### applySlick');
    var deviceOpts = {
      dots: false, infinite: false, speed: 300, slidesToShow: 4, adaptiveHeight: true,
      responsive: [
        { breakpoint: 1170, settings: { slidesToShow: 3 } },
        { breakpoint: 870, settings: { slidesToShow: 2 } },
        { breakpoint: 550, settings: { slidesToShow: 1 } },
      ],
    };
    var planOpts = {
      dots: false, infinite: false, speed: 300, slidesToShow: 2, adaptiveHeight: true,
      responsive: [{ breakpoint: 550, settings: { slidesToShow: 1 } }],
    };
    try {
      jQuery('.DCP16910Wrapper_tabItem.deviceCardContainer .deviceSet').slick(deviceOpts);
      jQuery('.DCP16910Wrapper_tabItem.planCardContainer').slick(planOpts);
    } catch (e) {
      console.log('#### slick retry', e);
      jQuery('.DCP16910Wrapper_tabItem.deviceCardContainer .deviceSet').slick('unslick').slick(deviceOpts);
      jQuery('.DCP16910Wrapper_tabItem.planCardContainer').slick('unslick').slick(planOpts);
    }
  },
};


// ═══════════════════════════════════════════════════════════
// 8. BOOTSTRAP
// ═══════════════════════════════════════════════════════════
var crowdMaxDCP16910 = 100;
var crowdFinderDCP16910 = setInterval(function () {
  crowdMaxDCP16910--;
  try {
    if (croWD && jQuery && $('vha-popular-products').length > 0) {
      var slickScript = document.createElement('script');
      slickScript.setAttribute('src', 'https://www.vodafone.com.au/content/dam/vha/croassets/slick.min.js');
      document.body.appendChild(slickScript);
      clearInterval(crowdFinderDCP16910);
      crowdFinderDCP16910 = null;
      $('vha-popular-products').hide();
      DCP16910Fn.observe();
    }
    if (crowdMaxDCP16910 <= 0) {
      clearInterval(crowdFinderDCP16910);
      crowdFinderDCP16910 = null;
    }
  } catch (e) { }
}, 100);