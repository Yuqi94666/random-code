'use strict';
var INFOCONSTANTS = {
	EXPERIMENT_ID: extension.id,
	EXPERIMENT_VARIANT: 'extension',
	NAME_SELECTOR: extension.nameSelector,
	CONTAINER_SELECTOR: extension.containerSelector,
	// UI config
	INFO_TITLE: extension.infoTitle,
	INFO_COPY: extension.infoCopy,
	INFO_IMAGE: extension.infoImage,
	INFO_SVG_ICON: extension.infoSvgIcon,
	INJECT_TYPE: extension.templateInjectType,

	CUSTOM_CSS: `
		.${extension.id}-extension {
        font-family:VodafoneRegular,Arial,sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        display: flex;
        align-items: center;
        width: -moz-fit-content;
        width: fit-content;
        padding: 24px;
        border-radius: 15px;
        margin: 40px 0 0px 0;
       box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
    }
    .mb-20{
        margin-bottom: 20px;
    }
    .${extension.id}-extension .info-container{
        display: flex;
        border-radius: 500px;
        align-items: center;
    }
    .${extension.id}-extension .info-container svg{
        margin-right:8px;
        flex: 0 0 12%;
    }   
    .${extension.id}-extension .info-content-container{
        display: flex;

        flex-direction: column;
    }
    .${extension.id}-extension .info-container-des{
        font-size: 18px;
        line-height: 24px;
    }
    .${extension.id}-extension .info-container-title{
        font-size: 20px;
        font-style: normal;
        font-family: 'VodafoneRegularBold';
        line-height: 28px;
    }
    .hidden{
        display: none;
    }
	`
};

var INFOOBJ = {
	getTargets: function () {
		var cards = document.querySelectorAll(INFOCONSTANTS.CONTAINER_SELECTOR);

		if (cards.length) {
			console.log('[info] listing targets:', cards.length);
			return Array.from(cards);
		}

		var deviceName = document.querySelector(INFOCONSTANTS.NAME_SELECTOR);
		console.log('[info] PDP fallback:', deviceName);

		return deviceName ? [deviceName] : [];
	},

	getTitleEl: function (el) {
		if (INFOCONSTANTS.CONTAINER_SELECTOR !== INFOCONSTANTS.NAME_SELECTOR) {
			return el.querySelector(INFOCONSTANTS.NAME_SELECTOR);
		}
		return el;
	},

	getName: function (titleEl) {
		return titleEl ? titleEl.textContent.trim() : '';
	},

	render: function (data) {
		var containerEl= document.querySelector(`${INFOCONSTANTS.CONTAINER_SELECTOR}`);
		var nameEl= document.querySelector(`${INFOCONSTANTS.NAME_SELECTOR}`);
		if (!containerEl) return;

		var name = INFOOBJ.getName(nameEl);

		console.log('[info] checking:', name);

		if (data.hasDevice(name)) {
			console.log('[info] matched:', name);
			INFOOBJ.injectinfo(containerEl);
		}
	},

	injectinfo: function (titleEl) {
		if (!titleEl) return;
		if (titleEl.parentElement.querySelector(`.${INFOCONSTANTS.EXPERIMENT_ID}-extension`)) return;

		var info = document.createElement('span');
		info.className = `${INFOCONSTANTS.EXPERIMENT_ID}-extension`;

		info.innerHTML = `
		<div class="info-container" id="info-container">
            ${INFOCONSTANTS.INFO_IMAGE ? `<img src="${INFOCONSTANTS.INFO_IMAGE}" />` : INFOCONSTANTS.INFO_SVG_ICON}
                <div class='info-content-container'>
                    <div class="info-container-title mb-20">${INFOCONSTANTS.INFO_TITLE}</div>
                    <div class="info-container-des">${INFOCONSTANTS.INFO_COPY}</div>
                </div>
            </div>
		`;
		console.log("info:", info);
		let targetEl = titleEl;
		console.log("targetEl", targetEl.parentNode)
		// Insert based on specified type
		switch (INFOCONSTANTS.INJECT_TYPE) {
			case 'before':
				targetEl.parentNode.insertBefore(info, targetEl);
				break;
			case 'after':
				targetEl.parentNode.insertBefore(info, targetEl.nextSibling);
				break;
			case 'prepend':
				targetEl.prepend(info);
				break;
			case 'append':
				targetEl.append(info);
				break;
			case 'replace':
				targetEl.parentNode.replaceChild(info, targetEl);
				break;
			default:
				targetEl.parentNode.insertBefore(info, targetEl);
		}
	},

	buildCSS: function () {
		var styleId = INFOCONSTANTS.EXPERIMENT_ID + '-style';
		if (document.getElementById(styleId)) return;
		var style = document.createElement('style');
		style.id = styleId;
		style.innerHTML = INFOCONSTANTS.CUSTOM_CSS;
		document.head.appendChild(style);
	},

	init: function () {
		console.log('[info] init');
		croWD.hotbed.listen('targetDevicesReady', function (observable, eventType, data) {
			INFOOBJ.buildCSS();
			INFOOBJ.render(data);
			new MutationObserver(function () {
				requestAnimationFrame(function () {
					INFOOBJ.render(data);
				});
			}).observe(document.body, { childList: true, subtree: true });
		});
	},
};

INFOOBJ.init();
