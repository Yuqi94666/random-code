'use strict';

let pillCONSTANTS = {
	EXPERIMENT_ID: extension.id,
	PILL_COPY: extension.pillCopy || '',
	PILL_COLOR: extension.pillColor || '',
	PILL_BG_COLOR: extension.pillBgColor || '',
	PILL_IMAGE: extension.pillImage || '',
	PILL_SVG_ICON: extension.pillSvgIcon || '',
	INJECT_TYPE: extension.templateInjectType || '',
	TARGET_TYPE: extension.targetType || '',
	TRIGGER_NAME: extension.triggerName || '',

	LISTING_SEL_1: '[data-testid="device-listing"] > div',
	LISTING_SEL_2: '[data-testid="lean-devices"] > div',
	NAME_SEL: 'a h2 > div:nth-of-type(2)',
	INJECT_POS_SEL: 'a h2 > div:first-child',

	CUSTOM_CSS: `
	.${extension.id}-extension {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 10px;
	}
	.${extension.id}-container {
	display: flex;
	padding: 4px 12px 4px 4px;
	justify-content: center;
	align-items: center;
	border-radius: 16px;
	}
	.${extension.id}-container img,
	.${extension.id}-container svg {
	width: 20px;
	height: 20px;
	}
	.${extension.id}-font {
	font-family: 'VodafoneRegular';
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 20px;
	margin-left: 4px;
	}
	`
};

let pillOBJ = {
	aid: 'Ext-clearance-pill-v1',
	isPdpInjected: false,
	lastData: null,

	getName: function (titleEl) {
		return titleEl && titleEl.textContent ? titleEl.textContent.trim() : '';
	},

	buildCSS: function () {
		if (!document.head) return;
		let id = pillCONSTANTS.EXPERIMENT_ID + '-style';
		if (document.getElementById(id)) return;
		let style = document.createElement('style');
		style.id = id;
		style.innerHTML = pillCONSTANTS.CUSTOM_CSS;
		document.head.appendChild(style);
	},

	injectPill: function (targetEl) {
		console.log(`[pill] injectPill()`);
		if (!targetEl) return;
		if (targetEl.dataset && targetEl.dataset.pillInjected === 'true') return;
		if (targetEl.querySelector('.' + extension.id + '-extension')) return;

		let pill = document.createElement('span');
		pill.className = extension.id + '-extension';
		pill.innerHTML =
			'<span class="' + extension.id + '-container" style="background:' + pillCONSTANTS.PILL_BG_COLOR + '">' +
			(pillCONSTANTS.PILL_IMAGE
				? '<img src="' + pillCONSTANTS.PILL_IMAGE + '" />'
				: (pillCONSTANTS.PILL_SVG_ICON || '')
			) +
			'<span style="color:' + pillCONSTANTS.PILL_COLOR + '" class="' + extension.id + '-font">' +
			(pillCONSTANTS.PILL_COPY || '') +
			'</span></span>';

		if (targetEl.dataset) targetEl.dataset.pillInjected = 'true';

		switch (pillCONSTANTS.INJECT_TYPE) {
			case 'before': targetEl.insertAdjacentElement('beforebegin', pill); break;
			case 'after': targetEl.insertAdjacentElement('afterend', pill); break;
			case 'prepend': targetEl.prepend(pill); break;
			case 'append': targetEl.append(pill); break;
			default: targetEl.insertAdjacentElement('beforebegin', pill);
		}
		console.log(`[pill] injectPill jejected:`, targetEl);
	},

	render: function (data) {
		try {
			console.log(`[pill] render()`);
			if (pillCONSTANTS.TARGET_TYPE === 'isPdp') {
				if (pillOBJ.isPdpInjected) return;
				let targetEl = document.querySelector('[data-testid="mobile-phone-title"]');
				if (!targetEl) return;

				const name = pillOBJ.getName(targetEl);
				if (!data || typeof data.hasDevice !== 'function' || !data.hasDevice(name)) return;

				pillOBJ.injectPill(targetEl);
				pillOBJ.isPdpInjected = true;

			} else if (pillCONSTANTS.TARGET_TYPE === 'isListing') {
				let cards = document.querySelectorAll(pillCONSTANTS.LISTING_SEL_1);
				if (!cards.length) cards = document.querySelectorAll(pillCONSTANTS.LISTING_SEL_2);

				cards.forEach(function (card, i) {
					const nameEl = card.querySelector(pillCONSTANTS.NAME_SEL);
					const nameText = pillOBJ.getName(nameEl);
					const injectPosition = card.querySelector(pillCONSTANTS.INJECT_POS_SEL);
					const eligible = !!(data && typeof data.hasDevice === 'function' && data.hasDevice(nameText));

					if (!injectPosition || !eligible) return;
					pillOBJ.injectPill(injectPosition);
				});
			}
		} catch (e) {
			console.error('[pill] render() error', e);
		}
	},

	observe: function () {
		croWD.hotbed.listen(`${pillCONSTANTS.TRIGGER_NAME}`, function (_, __, data) {
			console.log(`[pill] ${pillCONSTANTS.TRIGGER_NAME}`, data);
			
			pillOBJ.lastData = data;
			pillOBJ.buildCSS();
			pillOBJ.render(data);
		});
		let mo = new MutationObserver(function () {
			pillOBJ.render(pillOBJ.lastData);
		});
		mo.observe(document.body, { childList: true, subtree: true });
	}
};

// ------------------------------
// Finder structure
// ------------------------------
var crowdMaxPillCounter = 15;
var crowdFinderPill = setInterval(function () {
	crowdMaxPillCounter--;
	if (typeof croWD !== 'undefined' && croWD.hotbed && typeof croWD.hotbed.listen === 'function') {
		clearInterval(crowdFinderPill);
		pillOBJ.observe();

		if (typeof croWD.cmdr === 'function') {
			croWD.cmdr(pillOBJ.aid, 'inject');
		}
	}

	if (crowdMaxPillCounter <= 0) {
		clearInterval(crowdFinderPill);
		console.warn('[pill] finder stopped: max retries reached');
	}
}, 50);