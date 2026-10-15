const DCP18662PrepaidCONSTANTS = {
    EXPERIMENT_ID: 'DCP18662Prepaid', // Experiment ID
    PAGES_INCLUDE: [], // ['iphone16'] // pages to be included, if empty observe is not used
    PAGES_EXCLUDE: [], //pages to be excluded
    EXPERIMENT_VARIANT: 'variant', // possible values: variant|control|personalisation
    TARGET_ELEMENT: 'body', // Target element to be modified
    TEMPLATE_HTML: ``, // HTML template to be injected
    TEMPLATE_INJECT_TYPE: 'append', // possible values: replace|before|prepend|after|append
    CUSTOM_CSS: ``,
    // CSS to be injected
    INIT_RETRY_INTERVAL: 500, // milliseconds for init retry
    INIT_MAX_RETRIES: 20, // max retries for init
};

let DCP18662PrepaidOBJ = {
  applyChanges: function (el) {
      try {

        // this.buildCSS(); 
        // this.buildTemplate();

        DCP18662PrepaidOBJ.tracking('display');

      } catch (error) {
          console.error('Error in applyChanges function:', error);
          DCP18662PrepaidOBJ.tracking('error applyChanges');
      }
  },
  tracking: function (value) {
      try {
          if (typeof dataLayer !== 'undefined' && dataLayer) { // Check if dataLayer exists
            croWD.utils.launchTracking(
              DCP18662PrepaidCONSTANTS.EXPERIMENT_ID,
              value,
              DCP18662PrepaidCONSTANTS.EXPERIMENT_VARIANT,
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

              const el = document.querySelector(DCP18662PrepaidCONSTANTS.TARGET_ELEMENT);

              if (el && croWD) {
                  clearInterval(int);
                  int = null;
                  DCP18662PrepaidOBJ.applyChanges(el);
              } else {
                  rC++;
                  if (rC >= DCP18662PrepaidCONSTANTS.INIT_MAX_RETRIES) {
                      clearInterval(int);
                      int = null;
                      console.error('Element not found after max retries. DCP18662PrepaidOBJ');
                      DCP18662PrepaidOBJ.tracking('error elementsNotFound');
                  }
              }
          }, DCP18662PrepaidCONSTANTS.INIT_RETRY_INTERVAL);

      } catch (error) {
          console.error('Error in waitForElement function:', error);
          DCP18662PrepaidOBJ.tracking('error waitForElement');
      }
  },
  init: function () {
    DCP18662PrepaidOBJ.waitForElement();
  }

};

DCP18662PrepaidOBJ.init();
 