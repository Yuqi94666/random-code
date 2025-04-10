let hackReady = false;
let slickStyle = document.createElement('link');
slickStyle.rel = 'stylesheet';
slickStyle.type = 'text/css';
slickStyle.href = 'https://www.vodafone.com.au/content/dam/vha/croassets/slick.min.css';
document.body.appendChild(slickStyle);

let slickFixStyle = document.createElement('style');
let slickFixCSS = '#primaryPlans #carousel-block-view-primaryPlans{display: none;}';
slickFixCSS += '#primaryPlans #carousel-block-view-primaryPlans .slick-track .slick-slide{width:initial !important; margin: 0 5px;}';
slickFixCSS += '#primaryPlans #carousel-block-view-primaryPlans .slick-arrow{top: 39%; width: 36px; height: 36px; border-radius: 24px; box-shadow: rgba(130, 130, 130, 0.5) 0px 1px 4px 1px;position: absolute;z-index: 800;background-color: rgb(255, 255, 255) !important;}';
slickFixCSS += '#primaryPlans #carousel-block-view-primaryPlans .slick-arrow.slick-prev{left: -10px;}';
slickFixCSS += '#primaryPlans #carousel-block-view-primaryPlans .slick-arrow.slick-prev:before{display: block; content: ""; width: 30px; height: 30px; position: absolute; left: 3px; top: 18px; transform: translateY(-50%) rotate(90deg); background-image: url("data:image/svg+xml, %3Csvg width=\'30\' height=\'30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cpath fill=\'none\' d=\'M32 0H0v32h32z\' /%3E%3Cpath stroke=\'%23333333\' stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M4.667 11.333L16 22.667l11.333-11.334\' /%3E%3C/g%3E%3C/svg%3E");background-repeat: no-repeat; background-position: right center; background-size: contain;}';
slickFixCSS += '#primaryPlans #carousel-block-view-primaryPlans .slick-arrow.slick-next{right: -10px;}';
slickFixCSS += '#primaryPlans #carousel-block-view-primaryPlans .slick-arrow.slick-next:before{display: block; content: ""; width: 30px; height: 30px; position: absolute; left: 3px; top: 19px; transform: translateY(-50%) rotate(270deg); background-image: url("data:image/svg+xml, %3Csvg width=\'30\' height=\'30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cpath fill=\'none\' d=\'M32 0H0v32h32z\' /%3E%3Cpath stroke=\'%23333333\' stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M4.667 11.333L16 22.667l11.333-11.334\' /%3E%3C/g%3E%3C/svg%3E");background-repeat: no-repeat; background-position: right center; background-size: contain;}';
slickFixCSS += '#primaryPlans #carousel-block-view-primaryPlans .slick-arrow.slick-disabled{display: none !important;}';
slickFixCSS += '#primaryPlans #carousel-block-view-primaryPlans .slick-slide [data-testid^=\'plan-card-title-\']:after{display: none;}';
slickFixCSS += '@media (max-width: 1023px){#primaryPlans #carousel-block-view-primaryPlans{display: grid;}}'
slickFixStyle.type = 'text/css';
if (slickFixStyle.styleSheet) {
	slickFixStyle.styleSheet.cssText = slickFixCSS;
} else {
	slickFixStyle.appendChild(document.createTextNode(slickFixCSS));
}
document.body.appendChild(slickFixStyle);

var watchjQueryandCards = setInterval(function () {
	try {
		if (croWD && jQuery && document.querySelectorAll('#primaryPlans #carousel-block-view-primaryPlans [id^=\'plan-card-AU\']').length) {
			//clearInterval(watchjQueryandCards);
			let slickScript = document.createElement('script');
			slickScript.setAttribute('src', 'https://www.vodafone.com.au/content/dam/vha/croassets/slick.min.js');
			document.body.appendChild(slickScript);

			document.querySelectorAll('#primaryPlans #carousel-block-view-primaryPlans [id^=\'plan-card-AU\']').forEach(function (card) {
				const fiberNode = croWD.utils.getReactFiber(card);
				if (!fiberNode.memoizedProps.children[1].props.children[1].props.isOpen) {
					fiberNode.memoizedProps.children[1].props.children[0].props.onClick();
				}
			});
			hackReady = true;
		}
	} catch (e) { }
}, 200);
jQuery('<div id="carousel-tabs" style="display: flex; justify-content: space-between; margin-bottom: 30px;">' +
	'<button class="carousel-tab active-tab" data-slide="0">Tab 1</button>' +
	'<button class="carousel-tab" data-slide="1">Tab 2</button>' +
	'<button class="carousel-tab" data-slide="2">Tab 3</button>' +
	'</div>').insertBefore('#carousel-block-view-primaryPlans');
// Add click event to tabs
jQuery('.carousel-tab').on('click', function () {
	const slideIndex = jQuery(this).data('slide'); // Get the slide index from the tab
	jQuery('#carousel-block-view-primaryPlans').slick('slickGoTo', slideIndex); // Navigate to the slide
});

// Highlight the active tab when the slide changes
jQuery('#carousel-block-view-primaryPlans').on('afterChange', function (event, slick, currentSlide) {
	jQuery('.carousel-tab').removeClass('active-tab'); // Remove active class from all tabs
	jQuery(`.carousel-tab[data-slide="${currentSlide}"]`).addClass('active-tab'); // Add active class to the current tab
});

// Add CSS for the active tab (optional)
jQuery('<style>' +
	'.carousel-tab{ background-color: inherit; flex:1; border: none; cursor: pointer; border-bottom: 1px solid #7E7E7E; }' +
	'.carousel-tab.active-tab { background-color: inherit; border: none; border-bottom: 2px solid red; }' +
	'</style>').appendTo('head');
var watchHackReady = setInterval(function () {
	try {
		if (hackReady && 'slick' in jQuery.fn && document.location.pathname.indexOf('/mobile/sim-only-phone-plans') >= 0 && document.location.search.indexOf('step=') < 0) {
			//clearInterval(watchHackReady);

			jQuery('#carousel-block-view-primaryPlans').slick({
				dots: false,
				infinite: false,
				speed: 300,
				// centerMode: true,
				// centerPadding: '20px',
				slidesToShow: 1,
				adaptiveHeight: true
			});

			//send GA data
			if (jQuery('#primaryPlans #carousel-block-view-primaryPlans [id^=\'plan-card-AU\']').is(':visible')) {
				croWD.utils.launchTracking('DCP-13611-SIMO-Carousel-Solution', 'Initialise solution');
			}
			setTimeout(function () {
				jQuery('#primaryPlans #carousel-block-view-primaryPlans .slick-next').on('click', function () {
					//send GA data
					croWD.utils.launchTracking('DCP-13611-SIMO-Carousel-Solution', 'Click Next');
				})
				jQuery('#primaryPlans #carousel-block-view-primaryPlans .slick-prev').on('click', function () {
					//send GA data
					croWD.utils.launchTracking('DCP-13611-SIMO-Carousel-Solution', 'Click Prev');
				})

				jQuery('#primaryPlans #carousel-block-view-primaryPlans').on('swipe', function (event, slick, direction) {
					//send GA data
					croWD.utils.launchTracking('DCP-13611-SIMO-Carousel-Solution', 'Swipe ' + direction);
				});
				//recalculate height
				jQuery('#carousel-block-view-primaryPlans .slick-list [data-testid="accordion-item-content"] button').on('click', function () {
					jQuery('#carousel-block-view-primaryPlans').find(".slick-list").height("auto");
				});
			}, 300);
		}
	} catch (e) { }
}, 200);