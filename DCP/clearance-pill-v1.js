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
	cachedDocs:null,

	getCandidateDocs: function () {
		if(pillOBJ.cachedDocs) return pillOBJ.cachedDocs;
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
	getTargets: function () {
		let docs = pillOBJ.getCandidateDocs();
		let cards = [];
		docs.forEach(doc => {
			let root = doc.getElementsByTagName('vha-tabs-open')[0] || doc.body;
			let foundCards = croWD.utils.getEleFromPage(root, pillCONSTANTS.CARD_SELECTOR, 1);
			if (foundCards && foundCards.length) {
				cards = cards.concat(foundCards);
			}
		});

		if (cards && cards.length) {
			return { isListing: true, elements: cards };
		}
		let singles = [];
		docs.forEach(doc => {
			let root = doc.getElementsByTagName('vha-tabs-open')[0] || doc.body;
			let foundSingles = croWD.utils.getEleFromPage(root, pillCONSTANTS.NAME_SELECTOR, 1);
			if (foundSingles && foundSingles.length) {
				singles = singles.concat(foundSingles);
			}
		});
		console.log(`cards:${cards}, singles:${singles}`);
		
		return { isListing: false, elements: singles.length ? singles[0] : [] };
	},

	findInsideElDeep: function (el, selector) {
		if (!el || !selector) return null;
		let results = croWD.utils.getEleFromPage(el, selector, 1);
		return results.length ? results[0] : null;
	},

	getTitleEl: function (el) {
		if (!el) return null;

		if (
			pillCONSTANTS.CARD_SELECTOR &&
			pillCONSTANTS.NAME_SELECTOR &&
			pillCONSTANTS.CARD_SELECTOR !== pillCONSTANTS.NAME_SELECTOR
		) {
			return pillOBJ.findInsideElDeep(el, pillCONSTANTS.NAME_SELECTOR);
		}
		return el;
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
			let targets = pillOBJ.getTargets();
			let isListing = targets.isListing;
			let elements = targets.elements;
			if (!isListing) {
				if (pillOBJ.isPdpInjected) return;
				let el = elements[0];
				if (!el) return;

				let titleEl = pillOBJ.getTitleEl(el);
				let name = pillOBJ.getName(titleEl);
				if (!name) return;

				if (!data || typeof data.hasDevice !== 'function' || !data.hasDevice(name)) return;

				pillOBJ.injectPill(titleEl);
				pillOBJ.isPdpInjected = true;
				return;
			}

			for (let i = 0; i < elements.length; i++) {
				let card = elements[i];
				let title = pillOBJ.getTitleEl(card);
				if (!title) continue;

				let deviceName = pillOBJ.getName(title);
				if (!deviceName) continue;
				if (!data || typeof data.hasDevice !== 'function' || !data.hasDevice(deviceName)) continue;

				pillOBJ.injectPill(card);
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

		let p = targetEl.parentNode;
		switch (pillCONSTANTS.INJECT_TYPE) {
			case 'before':
				if (p) p.insertBefore(pill, targetEl);
				break;
			case 'after':
				if (p) p.insertBefore(pill, targetEl.nextSibling);
				break;
			case 'prepend':
				targetEl.prepend(pill);
				break;
			case 'append':
				targetEl.append(pill);
				break;
			default:
				if (p) p.insertBefore(pill, targetEl);
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
			console.log('[pill] data received', data);
			pillOBJ.lastData = data;
			pillOBJ.buildCSS(document);
			pillOBJ.observeContexts();
			pillOBJ.render(data);
		});

		return true;
	},

	init: function () {
		console.log('[pill] init');
console.log('[pill] checking target type:', pillCONSTANTS.TARGET_TYPE);
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