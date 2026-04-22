'use strict';
let pillCONSTANTS = {
	EXPERIMENT_ID: extension.id,
	CARD_SELECTOR: extension.cardSelector || '',
	NAME_SELECTOR: extension.nameSelector || '',
	PILL_COPY: extension.pillCopy || '',
	PILL_COLOR: extension.pillColor || '',
	PILL_BG_COLOR: extension.pillBgColor || '',
	PILL_IMAGE: extension.pillImage || '',
	PILL_SVG_ICON: extension.pillSvgIcon || '',
	INJECT_TYPE: extension.templateInjectType || '',
	TARGET_TYPE: extension.targetType || '',
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
	}`
};

let pillOBJ = {
	isPdpInjected: false,
	isListenerBound: false,
	observedDocs: new WeakSet(),
	lastData: null,
	renderRaf: null,
	cachedDocs: null,

	getCandidateDocs: function () {
		if (pillOBJ.cachedDocs) return pillOBJ.cachedDocs;
		let docs = [document];
		let panels = document.querySelectorAll('vha-tabpanel');
		panels.forEach(panel => {
			let iframes = croWD.utils.getEleFromPage(panel, 'iframe', 1);
			iframes.forEach(iframe => {
				try {
					if (iframe.contentDocument) {
						docs.push(iframe.contentDocument);
					}
				} catch (e) {
					console.error('[pill] cannot access iframe document', e);
				}
			});
		});
		pillOBJ.cachedDocs = docs;
		return docs;
	},

	findInsideElDeep: function (el, selector) {
		if (!el || !selector) return null;
		let results = croWD.utils.getEleFromPage(el, selector, 1);
		return results.length ? results[0] : null;
	},

	getName: function (titleEl) {
		return titleEl && titleEl.textContent ? titleEl.textContent.trim() : '';
	},

	scheduleRender: function () {
		if (!pillOBJ.lastData) return;
		if (pillOBJ.renderRaf) return;

		pillOBJ.renderRaf = requestAnimationFrame(function () {
			pillOBJ.renderRaf = null;
			pillOBJ.render(pillOBJ.lastData);
		});
	},

	render: function (data) {
		try {
			if (pillCONSTANTS.TARGET_TYPE === 'isPdp') {

				if (pillOBJ.isPdpInjected) return;
				pillOBJ.isPdpInjected = true;
				let targetEl = document.querySelector('[data-testid="mobile-phone-title"]');
				if (targetEl) {
					const name = pillOBJ.getName(targetEl);
					if (!data || typeof data.hasDevice !== 'function' || !data.hasDevice(name)) return;
					pillOBJ.injectPill(targetEl);
				}
			} else if (pillCONSTANTS.TARGET_TYPE === 'isListing') {
				let targetCards = document.querySelectorAll('[data-testid="device-listing"] > div');
				if (!targetCards.length) {
					targetCards = document.querySelectorAll('[data-testid="lean-devices"] > div');
				}
				if (targetCards && targetCards.length) {
					targetCards.forEach(card => {
						const name = card.querySelector('a h2>div:nth-of-type(2)');
						const nameText = pillOBJ.getName(name);
						const injectPosition = card.querySelector('a h2>div:first-child');
						if (!data || typeof data.hasDevice !== 'function' || !data.hasDevice(nameText)) return;
						pillOBJ.injectPill(injectPosition);
					})
				}
			}
		} catch (e) {
			console.error('[pill] render error:', e);
		}
	},

	injectPill: function (targetEl) {
		if (!targetEl) return;
		
		if (targetEl.dataset && targetEl.dataset.pillInjected === 'true') return;

		if (targetEl.querySelector && targetEl.querySelector('.' + extension.id + '-extension')) return;

		let doc = targetEl.ownerDocument || document;
		pillOBJ.buildCSS(doc);

		let pill = doc.createElement('span');
		pill.className = extension.id + '-extension';
		pill.innerHTML =
			'<span class="' + extension.id + '-container" style="background:' + pillCONSTANTS.PILL_BG_COLOR + '">' +
			(pillCONSTANTS.PILL_IMAGE ? ('<img src="' + pillCONSTANTS.PILL_IMAGE + '" />') : (pillCONSTANTS.PILL_SVG_ICON || '')) +
			'<span style="color:' + pillCONSTANTS.PILL_COLOR + '" class="' + extension.id + '-font">' +
			(pillCONSTANTS.PILL_COPY || '') +
			'</span></span>';

		if (targetEl.dataset) targetEl.dataset.pillInjected = 'true';

		switch (pillCONSTANTS.INJECT_TYPE) {
			case 'before':
				targetEl.insertAdjacentElement('beforebegin', pill);
				break;
			case 'after':
				targetEl.insertAdjacentElement('afterend', pill);
				break;
			case 'prepend':
				targetEl.prepend(pill);
				break;
			case 'append':
				targetEl.append(pill);
				break;
			default:
				targetEl.insertAdjacentElement('beforebegin', pill);
		}
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

	observeDoc: function (doc) {
		if (!doc || !doc.body || pillOBJ.observedDocs.has(doc)) return;
		pillOBJ.observedDocs.add(doc);

		let mo = new MutationObserver(function () {
			pillOBJ.scheduleRender();
		});

		mo.observe(doc.body, { childList: true, subtree: true });
	},

	observeContexts: function () {
		let docs = pillOBJ.getCandidateDocs();
		docs.forEach(doc => {
			pillOBJ.observeDoc(doc);
		});

		let panels = document.querySelectorAll('vha-tabpanel');
		panels.forEach(panel => {
			let iframes = croWD.utils.getEleFromPage(panel, 'iframe', 1);
			iframes.forEach(iframe => {
				if (iframe.dataset.loadBound) return;
				iframe.dataset.loadBound = 'true';
				iframe.addEventListener('load', function () {
					pillOBJ.cachedDocs = null;
					pillOBJ.observeContexts();
					pillOBJ.scheduleRender();
				});
			});
		});
	},

	bindHotbedListener: function () {
		if (pillOBJ.isListenerBound) return true;
		if (!window.croWD || !croWD.hotbed || typeof croWD.hotbed.listen !== 'function') return false;

		pillOBJ.isListenerBound = true;

		croWD.hotbed.listen('targetDevicesReady', function (_, __, data) {
			pillOBJ.lastData = data;
			pillOBJ.buildCSS(document);
			pillOBJ.observeContexts();
			pillOBJ.render(data);
		});

		return true;
	},

	init: function () {
		if (pillOBJ.bindHotbedListener()) return;

		let started = Date.now();
		let t = setInterval(function () {
			if (pillOBJ.bindHotbedListener()) {
				clearInterval(t);
				return;
			}
			if (Date.now() - started > 15000) {
				clearInterval(t);
				console.error('[pill] hotbed.listen never became available (15s)');
			}
		}, 100);

		window.addEventListener('load', function () {
			pillOBJ.bindHotbedListener();
			pillOBJ.observeContexts();
		}, { once: true });
	}
};

pillOBJ.init();