const DCP17900PrepaidCONSTANTS = {
    EXPERIMENT_ID: 'DCP17900Prepaid', // Experiment ID
    PAGES_INCLUDE: [], // ['iphone16'] // pages to be included, if empty observe is not used
    PAGES_EXCLUDE: [], //pages to be excluded
    EXPERIMENT_VARIANT: 'control', // possible values: variant|control|personalisation
    TARGET_ELEMENT: 'body', // Target element to be modified
    TEMPLATE_HTML: ``, // HTML template to be injected
    TEMPLATE_INJECT_TYPE: 'append', // possible values: replace|before|prepend|after|append
    CUSTOM_CSS: ``,
    // CSS to be injected
    INIT_RETRY_INTERVAL: 500, // milliseconds for init retry
    INIT_MAX_RETRIES: 20, // max retries for init
    ELEMENT_EVENT_PAIRS: [
        // '.cta-upgrade:click' // Example of an element event pair, format 'selector:eventType'
    ]
};

let DCP17900PrepaidOBJ = {
  applyChanges: function (el) {
      try {

        // this.buildCSS(); 
        // this.buildTemplate();

        DCP17900PrepaidOBJ.tracking('display');

      } catch (error) {
          console.error('Error in applyChanges function:', error);
          DCP17900PrepaidOBJ.tracking('error applyChanges');
      }
  },
  tracking: function (value) {
      try {
          if (typeof dataLayer !== 'undefined' && dataLayer) { // Check if dataLayer exists
            croWD.utils.launchTracking(
              DCP17900PrepaidCONSTANTS.EXPERIMENT_ID,
              value,
              DCP17900PrepaidCONSTANTS.EXPERIMENT_VARIANT,
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

              const el = document.querySelector(DCP17900PrepaidCONSTANTS.TARGET_ELEMENT);

              if (el && croWD) {
                  clearInterval(int);
                  int = null;
                  DCP17900PrepaidOBJ.applyChanges(el);
              } else {
                  rC++;
                  if (rC >= DCP17900PrepaidCONSTANTS.INIT_MAX_RETRIES) {
                      clearInterval(int);
                      int = null;
                      console.error('Element not found after max retries. DCP17900PrepaidOBJ');
                      DCP17900PrepaidOBJ.tracking('error elementsNotFound');
                  }
              }
          }, DCP17900PrepaidCONSTANTS.INIT_RETRY_INTERVAL);

      } catch (error) {
          console.error('Error in waitForElement function:', error);
          DCP17900PrepaidOBJ.tracking('error waitForElement');
      }
  },
  init: function () {
    DCP17900PrepaidOBJ.waitForElement();
  }

};

DCP17900PrepaidOBJ.init();
 