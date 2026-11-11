const DCP18720ESIMCONSTANTS = {
	EXPERIMENT_ID: 'DCP-18720-esim-banner', // Experiment ID
	PAGES_INCLUDE: [], // ['iphone16'] // pages to be included, if empty observe is not used
	PAGES_EXCLUDE: [], //pages to be excluded
	EXPERIMENT_VARIANT: 'control', // possible values: variant|control|personalisation
	TARGET_ELEMENT: '#cludo-search-results > div.search-banner > div:nth-child(2) > p > vha-hero-banner',
	TEMPLATE_HTML: ``, // HTML template to be injected
	TEMPLATE_INJECT_TYPE: 'append', // possible values: replace|before|prepend|after|append
	CUSTOM_CSS: ``,
	// CSS to be injected
	INIT_RETRY_INTERVAL: 500, // milliseconds for init retry
	INIT_MAX_RETRIES: 20, // max retries for init
};

let DCP18720ESIMOBJ = {
	applyChanges: function (el) {
		try {

			// this.buildCSS(); 
			// this.buildTemplate();

			DCP18720ESIMOBJ.tracking('display');
			const ctas = wrapper.querySelector('.primaryCTA');
			console.log('[DCP] CTA elements found for click tracking:', ctas);
		} catch (error) {
			console.error('Error in applyChanges function:', error);
			DCP18720ESIMOBJ.tracking('error applyChanges');
		}
	},
	tracking: function (value) {
		try {
			if (typeof dataLayer !== 'undefined' && dataLayer) { // Check if dataLayer exists
				croWD.utils.launchTracking(
					DCP18720ESIMCONSTANTS.EXPERIMENT_ID,
					value,
					DCP18720ESIMCONSTANTS.EXPERIMENT_VARIANT,
					''
				);
			} else {
				console.warn('dataLayer is not defined. Tracking event:', value, 'was not sent.');
			}
		} catch (error) {
			console.error('Error in tracking function:', error);
		}
	},
	waitForElement: function () {
		try {
			let rC = 0;
			let int = setInterval(() => {

				const el = document.querySelector(DCP18720ESIMCONSTANTS.TARGET_ELEMENT);

				if (el && croWD) {
					clearInterval(int);
					int = null;
					DCP18720ESIMOBJ.applyChanges(el);
				} else {
					rC++;
					if (rC >= DCP18720ESIMCONSTANTS.INIT_MAX_RETRIES) {
						clearInterval(int);
						int = null;
						console.error('Element not found after max retries. DCP18720ESIMOBJ');
						DCP18720ESIMOBJ.tracking('error elementsNotFound');
					}
				}
			}, DCP18720ESIMCONSTANTS.INIT_RETRY_INTERVAL);

		} catch (error) {
			console.error('Error in waitForElement function:', error);
			DCP18720ESIMOBJ.tracking('error waitForElement');
		}
	},
	init: function () {
		DCP18720ESIMOBJ.waitForElement();
	}

};

DCP18720ESIMOBJ.init();
