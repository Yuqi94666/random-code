/**
 * Author:  Yuqi Sui
 * Date: 2026-09-30
 * Description: Adds custom pills to popular product cards
 * */
'use strict';

let pillCONSTANTS = {
	EXPERIMENT_ID: extension.id,
	PILL_COPY: extension.pillCopy || '',
	PILL_COLOR: extension.pillColor || '',
	PILL_BG_COLOR: extension.pillBgColor || '',
	PILL_IMAGE: extension.pillImage || '',
	PILL_SVG_ICON: extension.pillSvgIcon || '',
	INJECT_TYPE: extension.templateInjectType || '',
	TRIGGER_NAME: extension.subscriber || '',

	LISTING_SEL: 'div[data-product-id]',
	NAME_SEL: 'h2 a > div',
	INJECT_POS_SEL: 'div:has(+ h2)',

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
		font-family: 'VodafoneRegularBold';
		font-size: 14px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px;
		margin-left: 4px;
		}
		`
};

// croWD may live on the top window when this runs inside an iframe
function getCro() {
	if (typeof croWD !== 'undefined' && croWD.hotbed) return croWD;
	var wins = [window.top, window.parent];
	for (var i = 0; i < wins.length; i++) {
		try {
			if (wins[i] && wins[i] !== window && wins[i].croWD && wins[i].croWD.hotbed) {
				return wins[i].croWD;
			}
		} catch (e) { /* cross-origin */ }
	}
	return null;
}

let pillOBJ = {
	aid: 'Ext-clearance-pill-v1',
	cro: null,
	lastData: null,
	observerStarted: false,
	frameObserver: null,
	observedFrameBody: null,
	observedFrame: null,

	log: function () {
		try {
			if (pillOBJ.cro && typeof pillOBJ.cro.debug === 'function') {
				pillOBJ.cro.debug.apply(pillOBJ.cro, arguments);
			}
		} catch (e) { /* ignore */ }
	},

	getName: function (titleEl) {
		return titleEl && titleEl.textContent ? titleEl.textContent.trim() : '';
	},

	buildCSS: function (doc) {
		doc = doc || document;
		if (!doc.head) return;
		let id = pillCONSTANTS.EXPERIMENT_ID + '-style';
		if (doc.getElementById(id)) return;
		let style = doc.createElement('style');
		style.id = id;
		style.innerHTML = pillCONSTANTS.CUSTOM_CSS;
		doc.head.appendChild(style);
	},

	injectPill: function (targetEl) {
		pillOBJ.log('[pill] injectPill()');
		if (!targetEl) return;
		if (targetEl.dataset && targetEl.dataset.pillInjected === 'true') return;
		if (targetEl.querySelector('.' + extension.id + '-extension')) return;

		let pill = targetEl.ownerDocument.createElement('span');
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
		pillOBJ.log('[pill] injectPill injected:', targetEl);
	},

	getPopularFrame: function () {
		let host = document.querySelector('vha-popular-products');
		return document.querySelector('iframe[src*="/iframe/popular-products"]') ||
			(host && (host.querySelector('iframe') ||
				(host.shadowRoot && host.shadowRoot.querySelector('iframe'))));
	},

	getPopularDocument: function () {
		let frame = pillOBJ.getPopularFrame();
		try {
			return frame && frame.contentDocument;
		} catch (e) {
			return null;
		}
	},

	render: function (data) {
		try {
			pillOBJ.log('[pill] render()');
			if (!data || typeof data.hasDevice !== 'function') return;
			let listingDoc = pillOBJ.getPopularDocument() || document;
			let cards = listingDoc.querySelectorAll(pillCONSTANTS.LISTING_SEL);
			if (cards.length) pillOBJ.buildCSS(listingDoc);

			cards.forEach(function (card, i) {
				const nameEl = card.querySelector(pillCONSTANTS.NAME_SEL);
				const nameText = pillOBJ.getName(nameEl);
				const injectPosition = card.querySelector(pillCONSTANTS.INJECT_POS_SEL);
				const eligible = data.hasDevice(nameText);
				pillOBJ.log('[pill] card', i, 'name:', nameText, 'eligible:', eligible, 'pos:', injectPosition);
				if (!injectPosition || !eligible) return;
				pillOBJ.injectPill(injectPosition);
			});

		} catch (e) {
			console.error('[pill] render() error', e);
		}
	},

	startMutationObserver: function () {
		if (pillOBJ.observerStarted) return;
		pillOBJ.observerStarted = true;
		let mo = new MutationObserver(function () {
			pillOBJ.observePopularFrame();
			pillOBJ.render(pillOBJ.lastData);
		});
		mo.observe(document.body, { childList: true, subtree: true });
		pillOBJ.observePopularFrame();
	},

	observePopularFrame: function () {
		let frame = pillOBJ.getPopularFrame();
		if (frame && frame !== pillOBJ.observedFrame) {
			pillOBJ.observedFrame = frame;
			frame.addEventListener('load', function () {
				pillOBJ.observePopularFrame();
				pillOBJ.render(pillOBJ.lastData);
			});
		}
		let frameDoc = pillOBJ.getPopularDocument();
		if (!frameDoc || !frameDoc.body || frameDoc.body === pillOBJ.observedFrameBody) return;
		if (pillOBJ.frameObserver) pillOBJ.frameObserver.disconnect();
		pillOBJ.observedFrameBody = frameDoc.body;
		pillOBJ.frameObserver = new MutationObserver(function () {
			pillOBJ.render(pillOBJ.lastData);
		});
		pillOBJ.frameObserver.observe(frameDoc.body, { childList: true, subtree: true });
		pillOBJ.render(pillOBJ.lastData);
	},

	observe: function () {
		pillOBJ.cro.hotbed.listen(pillCONSTANTS.TRIGGER_NAME, function (_, __, data) {
			pillOBJ.log('[pill] ' + pillCONSTANTS.TRIGGER_NAME, data);
			pillOBJ.lastData = data;
			pillOBJ.buildCSS();
			pillOBJ.render(data);
		});
		pillOBJ.startMutationObserver();
	},

	// Used only if croWD is not found anywhere (needs extension.targetDevices as a JSON array string)
	fallback: function () {
		try {
			let devices = JSON.parse(extension.targetDevices || '[]').map(function (d) {
				return String(d).toLowerCase().trim();
			});
			if (!devices.length) return;
			let data = {
				devices: devices,
				hasDevice: function (n) {
					return devices.indexOf(String(n || '').toLowerCase().trim()) > -1;
				}
			};
			pillOBJ.lastData = data;
			pillOBJ.buildCSS();
			pillOBJ.render(data);
			pillOBJ.startMutationObserver();
		} catch (e) {
			console.error('[pill] fallback error', e);
		}
	}
};

// ------------------------------
// Finder structure
// ------------------------------
var crowdMaxPillCounter = 2000; // 200 x 50ms = 10s
var crowdFinderPill = setInterval(function () {
	crowdMaxPillCounter--;
	var cro = getCro();

	if (cro && typeof cro.hotbed.listen === 'function') {
		clearInterval(crowdFinderPill);
		pillOBJ.cro = cro;
		pillOBJ.observe();
		if (typeof cro.cmdr === 'function') {
			cro.cmdr(pillOBJ.aid, 'inject');
		}
		return;
	}

	if (crowdMaxPillCounter <= 0) {
		clearInterval(crowdFinderPill);
		console.warn('[pill] finder stopped: max retries reached, using fallback');
		pillOBJ.fallback();
	}
}, 50);