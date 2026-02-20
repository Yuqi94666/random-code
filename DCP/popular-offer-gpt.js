window.DCP16910DeviceCohort = 'popularDevices'; // popularDevices || appleDevices || androidDevices

var DCP16910Fn = {
	aid: 'DCP-16910',
	phoneConfig: {
		popularDevices: [
			{ name: 'iPhone Air', href: 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-air' },
			{ name: 'iPhone 17 Pro Max', href: 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro-max' },
			{ name: 'iPhone 17 Pro', href: 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro' },
			{ name: 'Samsung Galaxy S25 FE', href: 'https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-s25-fe' }
		],
		appleDevices: [
			{ name: 'iPhone 17 Pro Max', href: 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro-max' },
			{ name: 'iPhone 17 Pro', href: 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro' },
			{ name: 'iPhone 17', href: 'https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17' }
		],
		androidDevices: [
			{ name: 'Samsung Galaxy S25 Ultra', href: 'https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-s25-ultra' },
			{ name: 'Samsung Galaxy Z Fold7', href: 'https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-z-fold7' },
			{ name: 'Samsung Galaxy S25 FE', href: 'https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-s25-fe' },
			{ name: 'Samsung Galaxy A36 5G', href: 'https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-a36-5g' }
		]
	},

	// ─────────────────────────────────────────────
	// DATA STORE
	// ─────────────────────────────────────────────
	data: {
		phones: {
			popularDevices: [],
			appleDevices: [],
			androidDevices: []
		},
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
		homeinternet: [
			{
				title: '5G Home Internet',
				href: 'https://www.vodafone.com.au/home-internet/4g-5g-plans',
				image: 'https://www.vodafone.com.au/images/merch/1403-summer-switch-5g-tile.webp',
				imageAlt: '5G Home Internet',
				onlineExclusive: false,
				heading: 'High-speed 5G $55/mth for a year.',
				subheading: 'Save $180 over 12 months when you have a mobile plan with us.',
				tc: 'Ends 04/03 (unless extended). New connections in select areas only.',
				tcTooltip: '5G Premium - 100Mbps (max and typical evening speed 7-11pm). Speeds vary. Reverts to $65/mth. Min cost $195 (1 mth plan fee + $140 mesh) if you return the modem. New connections in select areas only. Additional mesh ($144 over 36 mths) may be required. Ends 04/03 (unless extended). T&C apply.',
			},
			{
				title: 'nbn® Home Fast+',
				href: 'https://www.vodafone.com.au/home-internet/nbn',
				image: 'https://www.vodafone.com.au/images/merch/fwa-nbn-offer-04-11/1400-nbn-tile.webp',
				imageAlt: 'nbn® Home Fast+',
				onlineExclusive: false,
				heading: '500Mbps nbn® $74/mth for a year.',
				subheading: 'When you have a mobile plan with us. Save $180 over 12 months.',
				tc: 'Ends 25/02 (unless extended). New connections in select areas only.',
				tcTooltip: 'New FTTP/HFC connections only. Reverts to $89/mth. nbn® Essential+ plan with speed upgrade to 500Mbps (typical evening speed 7-11pm). Speeds vary. High speed compatible modem required (fee may apply). Min cost $548 (1 month plan fees + $336 modem + $138 mesh). Ends 25/02. T&C apply.',
			},
		],
	},

	// ─────────────────────────────────────────────
	// DATA SERVICE (API + COHORT BUILDER)
	// ─────────────────────────────────────────────
	dataService: {
		fetchDevices: function () {
			return fetch('https://api.vodafone.com.au/device/postpaid?serviceType=New')
				.then(res => {
					if (!res.ok) throw new Error(res.status);
					return res.json();
				})
				.then(json => {
					var devices = (json.deviceListing && json.deviceListing.devices) || [];
					return DCP16910Fn.dataService.buildApiMap(devices);
				})
				.catch(err => {
					console.error('[DCP16910] API failed, using fallback', err);
					return null;
				});
		},

		buildApiMap: function (devices) {
			var map = {};
			devices.forEach(d => {
				map[d.name] = d;
			});
			console.log('[DCP16910] API map built:', map);
			return map;
		},

		buildCohort: function (whitelist, apiMap) {
			return whitelist.map(config => {
				if (!apiMap || !apiMap[config.name]) {
					return {
						title: config.name,
						brand: '',
						image: '',
						recurringCharge: '',
						wasPrice: null,
						href: config.href
					};
				}

				var api = apiMap[config.name];

				return {
					title: api.name,
					brand: api.manufacturer || '',
					image: api.imageUrl || '',
					recurringCharge: api.discountedRecurringCharge || api.recurringCharge || '',
					wasPrice: api.discountedRecurringCharge ? api.recurringCharge : null,
					href: config.href
				};

			});

		},

		populatePhoneCohorts: function (apiMap) {
			var cfg = DCP16910Fn.phoneConfig;
			var target = DCP16910Fn.data.phones;

			target.popularDevices = this.buildCohort(cfg.popularDevices, apiMap);
			target.appleDevices = this.buildCohort(cfg.appleDevices, apiMap);
			target.androidDevices = this.buildCohort(cfg.androidDevices, apiMap);

		}

	},

	// ─────────────────────────────────────────────
	// TEMPLATE BUILDERS
	// ─────────────────────────────────────────────
	templates: {
		srcset: function (url) {
			var base = 'https://www.vodafone.com.au/_next/image?url=' + encodeURIComponent(url);
			return base + '&w=256&q=75,' + base + '&w=384&q=75 2x';
		},

		generateDeviceCard: function (d) {
			var minCost = (d.wasPrice && d.recurringCharge)
				? ((d.wasPrice - d.recurringCharge) * 36)
				: '';

			return `
			<a class="itemCard" title="${d.title}" href="${d.href}">
				<div class="device-item">
					<img alt="${d.title}" srcset="${DCP16910Fn.templates.srcset(d.image)}" />
					<p class="brand">${d.brand}</p>
					<p class="device-name">${d.title}</p>
					<p class="device-prefix">Device from</p>
					<p class="device-price">
						<span class="dollar">$</span>
						<span class="device-recurringCharge">${d.recurringCharge}</span>
						${d.wasPrice ? `<span class="device-was-price">${d.wasPrice}</span>` : ''}
						<span class="mth">per month</span>
						p>
						${minCost ? `
					<p class="device-mincost">Min cost $${minCost} over 36 months. Plan cost additional.
					</p>` : ''}
					<div class="primaryBtn">Shop now</div>
				</div>
			</a>
			`;
		},

		deviceSet: function (id, devices) {
			return `
			<div class="deviceSet" id="${id}">
				${devices.map(DCP16910Fn.templates.generateDeviceCard).join('')}
			</div>
			`;
		},

		phonesContent: function () {

			var p = DCP16910Fn.data.phones;

			return (
				this.deviceSet('popularDevices', p.popularDevices) +
				this.deviceSet('appleDevices', p.appleDevices) +
				this.deviceSet('androidDevices', p.androidDevices)
			);
		}

	},

	// ─────────────────────────────────────────────
	// RENDER
	// ─────────────────────────────────────────────
	renderContent: function () {

		$('[data-cat="phones"].deviceCardContainer')
			.html(DCP16910Fn.templates.phonesContent());

	},

	// ─────────────────────────────────────────────
	// INIT (重构后更清晰)
	// ─────────────────────────────────────────────
	init: function (s) {
  console.log('###### DCP16910Fn init ######', s);
		if (!DCP16910Fn.config.targetPaths.includes(window.location.pathname)) return;
		if ($('#tabs-popular-offers').length > 0) return;

		var watch = setInterval(function () {

			if ($('#DCP16910Wrapper').length > 0 && jQuery.fn.slick) {

				clearInterval(watch);

				DCP16910Fn.dataService.fetchDevices()
					.then(function (apiMap) {

						DCP16910Fn.dataService.populatePhoneCohorts(apiMap);

						DCP16910Fn.renderContent();

						$('.deviceSet').removeClass('active');
						$('#' + DCP16910DeviceCohort).addClass('active');

						DCP16910Fn.applySlick();
						DCP16910Fn.assignClicks();

					});

			}

		}, 200);

	},

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
	openModal: function (copyText) {
		DCP16910Fn.closeModal();
		var modal = document.querySelector('#DCP16910Wrapper .modal');
		if (modal && copyText) {
			modal.querySelector('.copy').innerHTML = copyText;
			modal.style.display = 'flex';
		}
	},
	closeModal: function () {
		var modal = document.querySelector('#DCP16910Wrapper .modal');
		if (modal) {
			modal.querySelector('.copy').innerHTML = '';
			modal.style.display = 'none';
		}
	},
	assignClicks: function () {
		$('html').on('click', '#DCP16910Wrapper_tabs ul li', function () {
			$('#DCP16910Wrapper_tabs ul li').removeClass('active');
			$('.DCP16910Wrapper_tabItem').removeClass('active');
			$(this).addClass('active');
			$('.DCP16910Wrapper_tabItem[data-cat= \'' + $(this).attr('data-cat') + '\']').addClass('active');
			croWD.utils.launchTracking('DCP16910 BF:Popular Phones Expansion', 'Tab Click - ' + $(this).attr('data-cat'));
		});
		$('html').on('click', '.DCP16910Wrapper_tabItem a', function () {
			croWD.utils.launchTracking('DCP16910 BF:Popular Phones Expansion', 'Item Click - ' + $(this).attr('title'));
		});

		var tabs = document.querySelectorAll('#DCP16910Wrapper_tabs ul li');
		tabs.forEach(function (tab, index) {
			tab.addEventListener('keydown', (event) => {
				if (event.key === 'Enter') {
					event.preventDefault();
					DCP16910Fn.tabClick(tab.attributes['data-cat'].value);
				}
			});
		})

		var tooltips = document.querySelectorAll('#DCP16910Wrapper tooltip');
		tooltips.forEach(function (el) {
			el.addEventListener('click', function (event) {
				event.stopPropagation();
				event.preventDefault();
				var copyText = el.getAttribute('copy') || '';
				if (copyText) {
					DCP16910Fn.openModal(copyText);
				}
			});
		});

		var closeLink = document.querySelector('#DCP16910Wrapper .modal .close-link');
		if (closeLink) {
			closeLink.addEventListener('click', function (event) {
				event.stopPropagation();
				event.preventDefault();
				DCP16910Fn.closeModal();
			});
		}

		var modalOverlay = document.querySelector('#DCP16910Wrapper .modal');
		if (modalOverlay) {
			modalOverlay.addEventListener('click', function (event) {
				if (event.target === modalOverlay) {
					DCP16910Fn.closeModal();
				}
			});
		}

		document.addEventListener('keydown', function (event) {
			if (event.key === 'Escape') {
				DCP16910Fn.closeModal();
			}
		});

	},
	tabClick: function (val) {
		$('#DCP16910Wrapper_tabs ul li').removeClass('active');
		$('.DCP16910Wrapper_tabItem').removeClass('active');
		$('#DCP16910Wrapper_tabs ul li[data-cat=\'' + val + '\']').addClass('active');
		$('.DCP16910Wrapper_tabItem[data-cat= \'' + val + '\']').addClass('active');
		croWD.utils.launchTracking('DCP16910 BF:Popular Phones Expansion', 'Tab Click - ' + val);
	},
	applySlick: function () {
		console.log('#### applySlick');
		try {
			jQuery('.DCP16910Wrapper_tabItem.deviceCardContainer .deviceSet ').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 4,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 1170,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 870,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
			jQuery('.DCP16910Wrapper_tabItem.planCardContainer').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 2,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
		}
		catch (e) {
			console.log('####', e);
			jQuery('.DCP16910Wrapper_tabItem.deviceCardContainer .deviceSet').slick('unslick');
			jQuery('.DCP16910Wrapper_tabItem.deviceCardContainer .deviceSet').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 4,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 1170,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 870,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
			jQuery('.DCP16910Wrapper_tabItem.planCardContainer').slick('unslick');
			jQuery('.DCP16910Wrapper_tabItem.planCardContainer').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 2,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
		}
	},
};



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