function lonelyinteger(a) {
	// Write your code here
	if (a.length < 99 && a.length > 1) {
		let result = 0;
		for (let num of a) {
			result ^= num;
		}
		return result;
	}
}
function lonelyinteger(a) {
	// Write your code here
	if (a.length < 99 && a.length > 1) {
		let count = {};
		for (let num of a) {
			if (count[num]) {
				count[num]++;
			} else {
				count[num] =1;
			}
		}
		for (let num in count) {
			if (count[num] === 1) {
				return parseInt(num);
			}
		}
	}
}

function diagonalDifference(matrix) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonal += matrix[i][i]; // top-left to bottom-right
        secondaryDiagonal += matrix[i][matrix.length - 1 - i]; // top-right to bottom-left
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
}
createTooltip: function () {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip-modal';
        tooltip.textContent = modalExt.tooltipText;

        const button = document.querySelector('tooltip-modal');

        document.body.appendChild(tooltip);

        function positionTooltip() {
            const rect = button.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
            tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 16}px`;
        }

        // Show the tooltip on hover
        button.addEventListener('mouseenter', () => {
            positionTooltip();
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });

        // Hide the tooltip when not hovering
        button.addEventListener('mouseleave', () => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });

        // Reposition the tooltip on window resize
        window.addEventListener('resize', positionTooltip);
    },
    getAttributes: function () {

        modalExt.image = image;
        modalExt.title = title;
        modalExt.dismiss = dismiss;
        modalExt.closeEnable = closeEnable;
        modalExt.daysoff = daysoff;
        modalExt.cookieExpire = cookieExpire;
        modalExt.description = description;
        modalExt.tAndC = tAndC;
        modalExt.ctaCopy1 = ctaCopy1;
        modalExt.ctaUrl1 = ctaUrl1;
        modalExt.ctaCopy2 = ctaCopy2;
        modalExt.ctaUrl2 = ctaUrl2;
        modalExt.tooltipText = tooltipText;

    },

        let styleElement = document.createElement('style');
        styleElement.textContent = '#digitalLabModal{display:block}#digitalLabModal #backgroundOverride{display:flex;position:fixed;z-index:99;top:0px;left:0px;width:100%;height:100%;background-color:rgba(0,0,0,.5);align-items:center;justify-content:center;padding:80px}@media only screen and (max-width: 767px){#digitalLabModal #backgroundOverride{padding:80px 40px 40px 40px}}#digitalLabModal #backgroundOverride #modalWindow{display:flex;background-color:#fff;border-radius:6px;overflow:hidden;max-width:980px;position:relative}#digitalLabModal #backgroundOverride #modalWindow #closeButton{border:none !important;position:absolute;font-size:18px;line-height:20px;cursor:pointer;top:7px;right:7px}#digitalLabModal #backgroundOverride #modalWindow #closeButton .close-icon{color:#000;display:block;height:24px;width:24px}@media only screen and (max-width: 1023px){#digitalLabModal #backgroundOverride #modalWindow #closeButton .close-icon{color:#fff}}@media only screen and (max-width: 1023px){#digitalLabModal #backgroundOverride #modalWindow{flex-direction:column;max-width:620px}}#digitalLabModal #backgroundOverride #modalWindow #modalWindowLeft img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #modalContent{padding-top:10px}@media only screen and (max-width: 1023px){#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #modalContent{padding-top:0}}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #modalContent #modalTitle{display:block;font-family:VodafoneLight,Arial,sans-serif;padding:30px 24px 16px;font-size:33px;line-height:35px}@media only screen and (max-width: 1023px){#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #modalContent #modalTitle{padding:20px 24px 16px}}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #modalContent #modalTitle a{color:inherit}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #modalContent #modalTitle a:hover{text-decoration:none}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #modalContent #modalText{color:#333;background-color:rgba(0,0,0,0);padding:0 24px}@media only screen and (max-width: 1023px){#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #modalContent #modalText{padding:0 24px}}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #modalContent #modalText #modalSubtitle{font-size:16px;line-height:20px;margin:0px 0px 16px}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #modalContent #modalText #modalSubtitle a{color:inherit}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #modalContent #modalText #modalSubtitle a:hover{text-decoration:none}@media only screen and (max-width: 1023px){#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #modalContent #modalText #modalSubtitle{font-size:16px;line-height:22px;margin:0px 0px 8px}}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #modalContent #modalText #modalDescription{font-size:12px;line-height:14px;margin:0px 0px 32px}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #modalContent #modalText #modalDescription a{color:inherit}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #modalContent #modalText #modalDescription a:hover{text-decoration:none}@media only screen and (max-width: 1023px){#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #modalContent #modalText #modalDescription{font-size:14px;line-height:20px;margin:0px 0px 8px}}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper{min-width:488px;padding:0 24px 30px;display:flex;align-items:center}@media only screen and (max-width: 1023px){#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper{min-width:0;flex-direction:column;padding:16px 24px 24px 24px}}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta{display:block;font-family:VodafoneRegular,Arial,sans-serif;border-radius:6px;transition:background-color 250ms ease-out 0s;cursor:pointer;background:#e60000;color:#fff;border:1px solid #e60000;font-size:18px;line-height:24px;width:210px;padding:10px 18px;text-align:center;text-decoration:none;margin:0 10px 0 0}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta.primary{border-color:#e60000;background:#e60000;color:#fff}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta.primary:visited{background:#e60000}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta.primary:active{background:#900}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta.primary:focus{background:#900}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta.primary:hover{background:#900;border-color:#900}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta.secondary{border:none;background:#333;color:#fff}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta.secondary:visited{background:#333}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta.secondary:active{background:#666}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta.secondary:focus{background:#666}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta.secondary:hover{background:#666}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta.tertiary{background:#fff;color:#333;border:solid 1px}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta.tertiary:visited{border-color:#999;background:#fff}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta.tertiary:active{border-color:#007c92;color:#333;background:#f4f4f4}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta.tertiary:focus{border-color:#333;color:#333;background:#f4f4f4}#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta.tertiary:hover{border-color:#333;color:#333;background:#f4f4f4}@media only screen and (max-width: 1023px){#digitalLabModal #backgroundOverride #modalWindow #modalWindowRight #buttonWrapper .modalWindowCta{width:100%;margin:0 0 16px 0}}.tooltip-modal{position:fixed;background:#333;color:#fff;padding:8px;border-radius:4px;font-size:14px;white-space:normal;box-shadow:0 2px 4px rgba(0,0,0,.2);visibility:hidden;transition:opacity .2s ease;opacity:0;width:50%;display:block;z-index:9999}tooltip-modal{text-decoration:underline;cursor:pointer}tooltip-modal:hover{text-decoration:none}';

        let bodyElement = document.body;
        bodyElement.appendChild(styleElement);
        let body = document.querySelector('BODY');
        body.append(modalWindow);

        //Text links
        let textLinks = document.querySelectorAll('#modalContent a');
        if (textLinks) {
            textLinks.forEach((link) => {
                link.onclick = function () {
                    modalExt.tracking(link.id);
                };
            });
        }

        //CTAs events setup
        let primaryCta = document.querySelector('.modalWindowCta.primary');
        if (primaryCta) {
            primaryCta.onclick = function () {
                let copy = primaryCta.innerText.replaceAll(' ', '-').toLowerCase();
                modalExt.tracking(copy);
                window.optimizely = window.optimizely || [];
                window.optimizely.push({
                    type: 'event',
                    eventName: 'modal-window-cta-one',
                    tags: {
                        url: copy
                    }
                });
            };

        let secondaryCta = document.querySelector('.modalWindowCta.secondary');
        if (secondaryCta) {
            secondaryCta.onclick = function () {
                let copy = secondaryCta.innerText.replaceAll(' ', '-').toLowerCase();
                modalExt.tracking(copy);
                window.optimizely = window.optimizely || [];
                window.optimizely.push({
                    type: 'event',
                    eventName: 'modal-window-cta-two',
                    tags: {
                        url: copy
                    }
                });
            };

        let closeBt = document.querySelector('.close-bt-modal');
        if (closeBt) {
            closeBt.onclick = function () {
                modalExt.tracking('closeBt');
                window.optimizely.push({
                    type: 'event',
                    eventName: 'modal-window-close-bt'

        document.querySelector('#backgroundOverride').onclick = function (event) {
            const isOutside = !event.target.closest('#modalWindow');
            if (isOutside) {
                modalExt.tracking('closeBackground');
                window.optimizely.push({
                    type: 'event',
                    eventName: 'modal-window-close-bg'

            }
        }

        //Tooltip
        const tooltipModal = document.querySelector('tooltip-modal'); 
        if (tooltipModal) {
            this.createTooltip();
        } 

    },