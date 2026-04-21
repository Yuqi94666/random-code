'use strict';

var BADGE_CLASS = 'pill-extension';
/**********************
 * config
 **********************/
var cardSelector = '[data-testid="mobile-phone-title"]'; 
var nameSelector = '[data-testid="mobile-phone-title"]';

/**********************
 * UI style（inline badge）
 **********************/
function injectStyle() {
    if (document.getElementById('my-badge-style')) return;

    var style = document.createElement('style');
    style.id = 'my-badge-style';
    style.innerHTML = `
      .pill-extension {
		font-family: VodafoneRegularBold, Arial, sans-serif;
		font-weight: 700;
		font-size: 16px;
		line-height: 18px;
		display: flex;
		align-items: center;
		width: -moz-fit-content;
		width: fit-content;
		border-radius: 15px;
		margin-bottom: 10px
	}

	.pill-extension:hover {
		cursor: pointer
	}
	.pill-extension .pill-container{
		display: flex;
		padding: 4px 12px;
		border-radius: 500px;
	}
	.pill-container img{
	width:20px;height:20px;margin-right:8px;
	}
	.hidden{
		display: none;
	}
    `;
    document.head.appendChild(style);
}

/**********************
 **********************/
function getTargets() {
    // listing page
    if (cardSelector) {
        var cards = document.querySelectorAll(cardSelector);
        console.log('[badge] listing cards found:', cards.length);
        if (cards.length) return Array.from(cards);
    }

    // PDP fallback
    var single = document.querySelector(nameSelector);
    console.log('[badge] PDP fallback element:', single);
    return single ? [single] : [];
}

/**********************
 **********************/
function getTitleEl(el) {
    if (cardSelector && cardSelector !== nameSelector) {
        return el.querySelector(nameSelector);
    }
    return el;
}

/**********************
 **********************/
function getName(titleEl) {
    return titleEl ? titleEl.textContent.trim() : '';
}

/**********************
 **********************/
function applyBadge(titleEl) {
	console.log("11111");
	
    if (!titleEl) return;

    if (titleEl.querySelector('.' + BADGE_CLASS)) return;
	console.log("coming:");
	
    var badge = document.createElement('span');
		console.log("coming11111111:");
    badge.className = BADGE_CLASS;
    badge.innerText = 'NEW';
    titleEl.appendChild(badge);
}

/**********************
 **********************/
function run(payload) {
    var targets = getTargets();
    console.log('[badge] run targets:', targets.length);
    targets.forEach(function (el) {
		console.log('[badge] processing element:', el);
        var titleEl = getTitleEl(el);
        if (!titleEl) return;
        var name = getName(titleEl).toLowerCase().trim();
        console.log('[badge] checking device:', name);
        console.log('[badge] checkingpayload device:', payload.devices);
		console.log("payload.hasDevice(name):", payload.hasDevice(name));
		console.log("payload.hasDevice():", payload.hasDevice());
		
        if (payload.hasDevice(name)) {
            console.log('[badge] matched device:', name);
            applyBadge(titleEl);
        }
    });
}

/**********************
 * listen
 **********************/
croWD.hotbed.listen('targetDevicesReady', function (_, __, payload) {
    console.log('[badge] payload:', payload);
    injectStyle();
    run(payload);
    new MutationObserver(function () {
        requestAnimationFrame(function () {
            run(payload);
        });
    }).observe(document.body, { childList: true, subtree: true });
});