const DCP16880CONSTANTS = {
  EXPERIMENT_ID: 'DCP-17269',
  PAGES_INCLUDE: [],
  PAGES_EXCLUDE: ['&step=1', '&step=2', 'cart'],
  EXPERIMENT_VARIANT: 'variant',
  EXPERIMENT_NAME: "DCP-17269-AB-Simo Carousel",
  TARGET_ELEMENT: '#primaryPlans #carousel-block-view-primaryPlans',
  CUSTOM_CSS: `
       #totoal-number { background: rgb(244, 244, 244); margin: 0px 0 -25px 0; padding: 30px 0 0 16px; } #carousel-tabs { display: flex; justify-content: space-between; } #primaryPlans #carousel-block-view-primaryPlans .slick-track .slick-slide { width: initial !important; margin: 0 5px; } #primaryPlans #carousel-block-view-primaryPlans .slick-arrow { top: 160px; width: 48px; height: 48px; border-radius: 24px; box-shadow: 0px 1px 4px 1px rgba(130, 130, 130, 0.5); position: absolute; z-index: 800; background-color: rgb(255, 255, 255) !important; transition: background-color 0.3s ease, border-color 0.3s ease; } #primaryPlans #carousel-block-view-primaryPlans .slick-arrow:active { background-color: rgb(0, 0, 0) !important; border-color: #333333; } @media (hover: hover) and (pointer: fine) { #primaryPlans #carousel-block-view-primaryPlans .slick-arrow:hover { background-color: rgb(0, 0, 0) !important; border-color: #333333; } } #primaryPlans #carousel-block-view-primaryPlans .slick-arrow.slick-prev { left: -5px; } #primaryPlans #carousel-block-view-primaryPlans .slick-arrow.slick-prev:before { display: block; content: ""; width: 30px; height: 30px; position: absolute; left: 8px; transform: translateY(-50%) rotate(90deg); background-image: url("data:image/svg+xml, %3Csvg width='30' stroke-width='2' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='none' d='M32 0H0v32h32z' /%3E%3Cpath stroke='%23333333' stroke-linecap='round' stroke-linejoin='round' d='M4.667 11.333L16 22.667l11.333-11.334' /%3E%3C/g%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right center; background-size: contain; transition: background-image 0.3s ease; } #primaryPlans #carousel-block-view-primaryPlans .slick-arrow.slick-prev:active:before { background-image: url("data:image/svg+xml, %3Csvg width='30' stroke-width='2' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='none' d='M32 0H0v32h32z' /%3E%3Cpath stroke='%23333333' stroke-linecap='round' stroke-linejoin='round' d='M4.667 11.333L16 22.667l11.333-11.334' /%3E%3C/g%3E%3C/svg%3E"); } @media (hover: hover) and (pointer: fine) { #primaryPlans #carousel-block-view-primaryPlans .slick-arrow.slick-prev:hover:before { background-image: url("data:image/svg+xml, %3Csvg width='30' stroke-width='2' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='none' d='M32 0H0v32h32z' /%3E%3Cpath stroke='%23333333' stroke-linecap='round' stroke-linejoin='round' d='M4.667 11.333L16 22.667l11.333-11.334' /%3E%3C/g%3E%3C/svg%3E"); } } #primaryPlans #carousel-block-view-primaryPlans .slick-arrow.slick-next { right: -10px; } #primaryPlans #carousel-block-view-primaryPlans .slick-arrow.slick-next:before { display: block; content: ""; width: 30px; height: 30px; position: absolute; left: 8px; transform: translateY(-50%) rotate(270deg); background-image: url("data:image/svg+xml, %3Csvg width='30' stroke-width='2' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='none' d='M32 0H0v32h32z' /%3E%3Cpath stroke='%23333333' stroke-linecap='round' stroke-linejoin='round' d='M4.667 11.333L16 22.667l11.333-11.334' /%3E%3C/g%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right center; background-size: contain; transition: background-image 0.3s ease; } #primaryPlans #carousel-block-view-primaryPlans .slick-arrow.slick-next:active:before { background-image: url("data:image/svg+xml, %3Csvg width='30' stroke-width='2' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='none' d='M32 0H0v32h32z' /%3E%3Cpath stroke='%23333333' stroke-linecap='round' stroke-linejoin='round' d='M4.667 11.333L16 22.667l11.333-11.334' /%3E%3C/g%3E%3C/svg%3E"); } @media (hover: hover) and (pointer: fine) { #primaryPlans #carousel-block-view-primaryPlans .slick-arrow.slick-next:hover:before { background-image: url("data:image/svg+xml, %3Csvg width='30' stroke-width='2' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='none' d='M32 0H0v32h32z' /%3E%3Cpath stroke='%23333333' stroke-linecap='round' stroke-linejoin='round' d='M4.667 11.333L16 22.667l11.333-11.334' /%3E%3C/g%3E%3C/svg%3E"); } } #primaryPlans #carousel-block-view-primaryPlans .slick-arrow.slick-disabled { display: none !important; } #primaryPlans #carousel-block-view-primaryPlans .slick-dots { display: flex; justify-content: center; } #primaryPlans #carousel-block-view-primaryPlans .slick-dots li { width: 12px; height: 12px; display: flex; align-items: center; justify-content: center; background-color: #999999; border-radius: 50%; } #primaryPlans #carousel-block-view-primaryPlans .slick-dots li button:before { content: ""; } #primaryPlans #carousel-block-view-primaryPlans .slick-dots .slick-active { width: 12px; height: 12px; border: 2px solid rgb(51, 51, 51); background-color: transparent; } .carousel-tab { background-color: inherit; flex: 1; border: none; cursor: pointer; border-bottom: 1px solid #7E7E7E; padding: 20px; display: flex; flex-direction: column; } .carousel-tab.active-tab { border-bottom: 2px solid red; } .carousel-data { text-align: center; font-size: 14px; font-weight: 700; line-height: 18px; } .price-label { text-align: center; font-size: 28px; font-weight: 700; line-height: 34px; } #primaryPlans #carousel-block-view-primaryPlans .slick-list { transition: height 0.25s ease; will-change: height; } @media (max-width: 1023px) { #primaryPlans #carousel-block-view-primaryPlans { display: grid; } } @media (min-width: 768px) { #carousel-tabs { display: none !important; } #primaryPlans #carousel-block-view-primaryPlans .slick-arrow { display: none !important; } } @media (max-width: 768px) { #primaryPlans #carousel-block-view-primaryPlans .edJbbd::after { content: none !important; } }  @media (max-width: 767px) { #primaryPlans #carousel-block-view-primaryPlans { gap:10px; } }
  `,
  INIT_RETRY_INTERVAL: 500,
  INIT_MAX_RETRIES: 20,
  RESOURCE_LOAD_TIMEOUT: 10000
};

let DCP16880OBJ = {
  isCarouselInitialized: false,
  resizeTimer: null,
  isTemplateBuilt: false,
  hasTrackedVariant: false,
  applyChanges: function (el) {
    try {
      if (!this.isTemplateBuilt) {
        // this.buildTemplate();
        this.isTemplateBuilt = true;
      }

      if (this.isMobileView()) {
        this.loadResources();

        let resourceTimeout = setTimeout(() => {
          clearInterval(waitForResources);
          console.error('Resource loading timeout');
        }, DCP16880CONSTANTS.RESOURCE_LOAD_TIMEOUT);

        let waitForResources = setInterval(() => {
          const planCards = document.querySelectorAll('#primaryPlans #carousel-block-view-primaryPlans [id^="plan-card"]');
          if (window.jQuery && jQuery.fn.slick && planCards.length > 0) {
            clearInterval(waitForResources);
            clearTimeout(resourceTimeout);
            this.buildCSS();
            this.initializeCarousel();
            this.setupAnalyticsTracking();
            if (!this.hasTrackedVariant) {
              this.hasTrackedVariant = true;
              croWD.utils.launchTracking('DCP-17269-AB-Simo Carousel', '', 'variant');
            }
            this.isCarouselInitialized = true;
          }
        }, 200);

      } else {
        this.addDesktopArrowTabIndex();
        console.warn('Not mobile view, skipping carousel initialization');
      }
    } catch (error) {
      console.error('Error in applyChanges function:', error);
    }
  },

  handleResize: function () {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      const isMobile = this.isMobileView();
      const $carousel = jQuery('#carousel-block-view-primaryPlans');

      if (isMobile && !this.isCarouselInitialized) {
        const el = document.querySelector(DCP16880CONSTANTS.TARGET_ELEMENT);
        if (el) {
          this.applyChanges(el);
        }
      } else if (!isMobile && this.isCarouselInitialized) {
        if ($carousel.length && $carousel.hasClass('slick-initialized')) {
          $carousel.slick('unslick');
          this.isCarouselInitialized = false;
        }
        this.addDesktopArrowTabIndex();
      }
    }, 250);
  },

  setupResizeListener: function () {
    window.addEventListener('resize', () => this.handleResize());
  },

  setupAnalyticsTracking: function () {
        jQuery('#carousel-block-view-primaryPlans .slick-next').on('click', () => {
            croWD.utils.launchTracking(DCP16880CONSTANTS.EXPERIMENT_NAME, 'Click Next');
        });
        jQuery('#carousel-block-view-primaryPlans .slick-prev').on('click', () => {
            croWD.utils.launchTracking(DCP16880CONSTANTS.EXPERIMENT_NAME, 'Click Prev');
        });
        jQuery('#carousel-block-view-primaryPlans').on('swipe', (event, slick, direction) => {
            croWD.utils.launchTracking(DCP16880CONSTANTS.EXPERIMENT_NAME, `Swipe ${direction}`);
        });
    },

  isMobileView: function () {
    return window.innerWidth < 768;
  },

  addDesktopArrowTabIndex: function () {
    try {
      if (this.isMobileView()) return;

      setTimeout(() => {
        document.querySelectorAll('#primaryPlans .slick-arrow').forEach(arrow => {
          arrow.setAttribute('tabindex', '0');
          arrow.style.outline = 'none';
        });
      }, 100);
    } catch (error) {
      console.error('Error adding tabindex to desktop arrows:', error);
    }
  },

  loadResources: function () {
    if (document.querySelector('link[href*="slick.min.css"]')) return;

    let slickStyle = document.createElement('link');
    slickStyle.rel = 'stylesheet';
    slickStyle.href = 'https://www.vodafone.com.au/content/dam/vha/croassets/slick.min.css';
    document.head.appendChild(slickStyle);

    let slickScript = document.createElement('script');
    slickScript.src = 'https://www.vodafone.com.au/content/dam/vha/croassets/slick.min.js';
    document.body.appendChild(slickScript);
  },

  initializeCarousel: function () {
    try {
      if (!this.isMobileView()) return;

      const $carousel = jQuery('#carousel-block-view-primaryPlans');
      if (!$carousel.length) return;

      if ($carousel.hasClass('slick-initialized')) return;

      $carousel.slick({
        dots: true,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      });

      const syncSlickListHeight = (() => {
        let timer = null;
        return () => {
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            try {
              const $list = $carousel.find('.slick-list');
              const $activeSlide = $carousel.find('.slick-slide.slick-active');

              if ($list.length && $activeSlide.length) {
                const activeContent = $activeSlide.find('>div>div.sc-17d8e0cd-0.kGlDzp')[0];

                if (activeContent) {
                  const contentHeight = activeContent.scrollHeight;
                  const newHeight = contentHeight + 37;
                  if (newHeight > 0) {
                    $list.css('height', newHeight + 'px');
                  }
                }
              }
            } catch (err) {
              console.warn('syncSlickListHeight error', err);
            }
          }, 50);
        };
      })();

      setTimeout(syncSlickListHeight, 100);
      setTimeout(syncSlickListHeight, 300);
      $carousel.on('afterChange.dcp16880', () => setTimeout(syncSlickListHeight, 30));
      window.addEventListener('load', () => {
        setTimeout(syncSlickListHeight, 100);
        setTimeout(syncSlickListHeight, 300);
      });
      $carousel.on('click', '*', function () {
        setTimeout(syncSlickListHeight, 300);
      });

      this.openActiveAccordion();
    } catch (error) {
      console.error('Error in initializeCarousel function:', error);
    }
  },

  openActiveAccordion: function () {
    try {
      document.querySelectorAll('#primaryPlans #carousel-block-view-primaryPlans [id^="plan-card"]').forEach((card) => {
        const fiberNode = croWD.utils.getReactFiber(card);
        if (fiberNode.memoizedProps.children[2].props.children[2].props.isOpen === false) {
          fiberNode.memoizedProps.children[2].props.children[0].props.onClick();
        }

        setTimeout(() => {
          const accordionContent = card.querySelector('[data-testid="accordion-item"]');
          if (accordionContent) {
            const accordionTrigger = accordionContent.previousElementSibling;
            if (accordionTrigger) {
              accordionTrigger.style.pointerEvents = 'none';
              accordionTrigger.style.cursor = 'default';
            }
          }
        }, 200);
      });

      const container = document.querySelectorAll('#carousel-block-view-primaryPlans .slick-slide');
      container.forEach((card) => {
        const cardBtn = card.querySelector('[data-testid="select-plan-cta"]');

        if (cardBtn && !cardBtn.dataset.trackingAdded) {
          const cardNameElement = card.querySelector('[data-testid="uplifted-plan-title-container"] + span');
          const cardName = cardNameElement ? cardNameElement.textContent : 'Unknown Plan';

          cardBtn.addEventListener('click', () => {
            croWD.utils.launchTracking(DCP16880CONSTANTS.EXPERIMENT_NAME, `${cardName} add to cart`, 'variant');
          });

          cardBtn.dataset.trackingAdded = 'true';
        }
      });
    } catch (error) {
      console.error('Error in openActiveAccordion:', error);
    }
  },

  buildCSS: function () {
    try {
      const existingStyle = document.getElementById(`${DCP16880CONSTANTS.EXPERIMENT_ID}-styles`);
      if (existingStyle) existingStyle.remove();

      const styleSheet = document.createElement('style');
      styleSheet.type = 'text/css';
      styleSheet.id = `${DCP16880CONSTANTS.EXPERIMENT_ID}-styles`;
      styleSheet.appendChild(document.createTextNode(DCP16880CONSTANTS.CUSTOM_CSS));
      document.head.appendChild(styleSheet);
    } catch (error) {
      console.error('Error in buildCSS function:', error);
    }
  },

  waitForElement: function () {
    let rC = 0;
    const int = setInterval(() => {
      const el = document.querySelector(DCP16880CONSTANTS.TARGET_ELEMENT);
      if (el && typeof croWD !== 'undefined') {
        clearInterval(int);
        this.applyChanges(el);
        this.setupResizeListener();
      } else if (++rC >= DCP16880CONSTANTS.INIT_MAX_RETRIES) {
        clearInterval(int);
      }
    }, DCP16880CONSTANTS.INIT_RETRY_INTERVAL);
  },

  init: function () {
    const currentUrl = window.location.href;
    const excludedUrls = DCP16880CONSTANTS.PAGES_EXCLUDE;
    const isExcluded = excludedUrls.some(ex => currentUrl.toLowerCase().includes(ex.toLowerCase()));
    if (isExcluded) return;

    if (DCP16880CONSTANTS.PAGES_INCLUDE.length === 0) {
      this.waitForElement();
    } else if (DCP16880CONSTANTS.PAGES_INCLUDE.some(page => currentUrl.toLowerCase().includes(page.toLowerCase()))) {
      this.waitForElement();
    }
  }
};

DCP16880OBJ.init();