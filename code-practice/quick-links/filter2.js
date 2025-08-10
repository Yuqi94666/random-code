const DCP15834CONSTANTS = {
    EXPERIMENT_ID: 'DCP15834',
    PAGES_INCLUDE: [],
    PAGES_EXCLUDE: ['&step=1', '&step=2', 'cart'],
    EXPERIMENT_VARIANT: 'variant',
    TARGET_ELEMENT: document.querySelectorAll('[data-testid="plan-card-PRD_PREPAID_$35PREPAID_PLUS_STARTER_PACK"]'),
    TEMPLATE_HTML: `<section class="filter-section">
        <div class="s-12 l-12 ">
            <div id="wrapper-DCP15834-Prepaid-filter">
                <div id="DCP15834-Prepaid-filterHolder">
                    <div class="title">Choose a plan</div>
                    <div id="deviceSelector" role="group">
                        <span>
                            <input id="shortDays" type="checkbox" name="deviceSelector" value="7Day">
                            <label for="shortDays">7 days<span><svg width="16" height="16" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" role="presentation" class="sc-60e24960-0 epKgFn"><g stroke-width="2" fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M20 4L4 20M4 4l16 16" stroke="#FFF" stroke-linecap="round"></path></g></svg></span></label>
                        </span>
                        <span>
                            <input id="midDays" type="checkbox" name="deviceSelector" value="28Day">
                            <label for="midDays">28 days<span><svg width="16" height="16" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" role="presentation" class="sc-60e24960-0 epKgFn"><g stroke-width="2" fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M20 4L4 20M4 4l16 16" stroke="#FFF" stroke-linecap="round"></path></g></svg></span></label>
                        </span>
                        <span>
                            <input id="longDays" type="checkbox" name="deviceSelector" value="longDays">
                            <label for="longDays">Long expiry<span><svg width="16" height="16" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" role="presentation" class="sc-60e24960-0 epKgFn"><g stroke-width="2" fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M20 4L4 20M4 4l16 16" stroke="#FFF" stroke-linecap="round"></path></g></svg></span></label>
                        </span>
                        <span>
                            <input id="featured" type="checkbox" name="deviceSelector" value="featured">
                            <label for="featured">featured<span><svg width="16" height="16" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" role="presentation" class="sc-60e24960-0 epKgFn"><g stroke-width="2" fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M20 4L4 20M4 4l16 16" stroke="#FFF" stroke-linecap="round"></path></g></svg></span></label>
                        </span>
                    </div>
                    <div class="counter">Showing <span class="visible"></span> of <span class="total"></span> results</div>
                </div>
            </div>
        </div>
</section>`,
    TEMPLATE_INJECT_TYPE: 'before',
    CUSTOM_CSS: `.filter-section{background-color:#fff} #wrapper-DCP15834-Prepaid-filter{max-width:1180px; margin:0px auto; padding: 20px 10px;} #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder .title{padding:16px 0 16px 0;font-family:VodafoneRegular,Arial,sans-serif;font-size:18px}section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder .counter{padding:30px 0 10px 0;font-family:VodafoneRegular,Arial,sans-serif;font-size:18px}section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder .counter .total{margin:0}section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder .counter .visible{margin:0;font-family:VodafoneRegularBold,Arial,sans-serif}section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder span{display:inline-block;margin:0px 12px 8px 0px;color:#333}section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder span input{opacity:0;width:0px;height:0px;margin:0px}section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder span label{display:inline-flex;padding:6px 12px 6px 20px;border-radius:20px;border:2px solid rgba(0,0,0,0);background-color:#ebebeb;transition:background-color 250ms;font-size:18px;line-height:24px;cursor:pointer}section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder span label span{display:none;margin:4px 0px 0px 8px}section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder span label span svg{position:relative;display:block;height:16px;width:16px}section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder span input:checked+label{background-color:#e60000;color:#fff} #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder span input:checked+label span{display:block;}.section-hidden{display:none !important}h1{margin:48px 0 32px}@media screen and (max-width: 768px){h1{margin:32px 0 32px}}`,
    INIT_RETRY_INTERVAL: 500,
    INIT_MAX_RETRIES: 20,
};

let DCP15834OBJ = {
    currentFilters: [],
    sliderInitialized: false,
    originalSliderHTML: null, // Store original slider HTML for restoration
    
    isMobile: function () {
        return window.innerWidth < 1024;
    },
    
    applyChanges: function (el) {
        try {
            this.buildCSS();
            this.buildTemplate();
            this.initializeSectionToggler();

            // Store original slider HTML if not already stored
            if (!this.originalSliderHTML) {
                const slider = document.querySelector('.slick-slider');
                if (slider) {
                    this.originalSliderHTML = slider.innerHTML;
                }
            }

            croWD.debug('######### ... DCP15834 ... ###### ...initialised...########');
        } catch (error) {
            console.error('Error in applyChanges function:', error);
            this.tracking('error applyChanges');
        }
    },

    initializeSectionToggler: function () {
        const checkboxes = document.querySelectorAll('input[name="deviceSelector"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const activeFilters = Array.from(checkboxes)
                    .filter(cb => cb.checked)
                    .map(cb => cb.value);
                this.currentFilters = activeFilters;
                this.applyFilters(activeFilters);
            });
        });
        this.applyFilters([]);
    },

    applyFilters: function (activeFilters) {
        const allPlanContainersDesktop = document.querySelectorAll('.slick-slide');
        const allMobilePlanContainers = document.querySelector('#carousel-block-view-primaryPlans')?.querySelectorAll(".sc-ab2edf2a-2");
        const dayFilters = {
            '7Day': ['7 day expiry'],
            '28Day': ['28 day expiry'],
            'longDays': ['185 day expiry', '365 day expiry']
        };
        
        if (this.isMobile()) {
            allMobilePlanContainers?.forEach(container => {
                const plan = container.querySelector('[data-testid*="plan-card-PRD_PREPAID"]');
                console.log("plan mobile:", plan);

                if (!plan) {
                    container.classList.add('section-hidden');
                    return;
                }
                let shouldShow = false;
                for (const filter of activeFilters) {
                    if (filter === 'featured') {
                        const hasBadge = plan.querySelector('[data-testid="plan-card-badge"]');
                        if (hasBadge) {
                            shouldShow = true;
                            break;
                        }
                    } else {
                        const expiryElement = plan.querySelector('.sc-30ffa23d-5 .sc-55aeeeb6-0.hEJzIe');
                        if (expiryElement) {
                            const expiryText = expiryElement.textContent.trim();
                            if (dayFilters[filter] && dayFilters[filter].includes(expiryText)) {
                                shouldShow = true;
                                break;
                            }
                        }
                    }
                }
                if (shouldShow || activeFilters.length === 0) {
                    container.classList.remove('section-hidden');
                } else {
                    container.classList.add('section-hidden');
                }
            });
        } else {
            // Desktop: Apply filter logic
            allPlanContainersDesktop.forEach(dtContainer => {
                const plan = dtContainer.querySelector('[data-testid*="plan-card-PRD_PREPAID"]');
                if (!plan) {
                    dtContainer.style.display = 'none';
                    dtContainer.classList.add('section-hidden');
                    return;
                }
                
                let shouldShow = false;
                for (const filter of activeFilters) {
                    if (filter === 'featured') {
                        const hasBadge = plan.querySelector('[data-testid="plan-card-badge"]');
                        if (hasBadge) {
                            shouldShow = true;
                            break;
                        }
                    } else {
                        const expiryElement = plan.querySelector('.sc-30ffa23d-5 .sc-55aeeeb6-0.hEJzIe');
                        if (expiryElement) {
                            const expiryText = expiryElement.textContent.trim();
                            if (dayFilters[filter] && dayFilters[filter].includes(expiryText)) {
                                shouldShow = true;
                                break;
                            }
                        }
                    }
                }
                
                if (shouldShow || activeFilters.length === 0) {
                    dtContainer.style.display = 'block';
                    dtContainer.classList.remove('section-hidden');
                } else {
                    dtContainer.style.display = 'none';
                    dtContainer.classList.add('section-hidden');
                }
            });

            // Handle carousel based on filters
            this.handleCarousel(activeFilters.length > 0);
        }
        
        this.updateCounter();
    },

    handleCarousel: function(hasFilters) {
        const slider = document.querySelector('.slick-slider');
        if (!slider) return;

        if (hasFilters) {
            // When filters are active, remove carousel restrictions
            this.removeCarouselRestrictions();
        } else {
            // When no filters are active, restore original carousel
            this.restoreOriginalCarousel();
        }
    },

    removeCarouselRestrictions: function() {
        // Force remove carousel restrictions
        document.querySelectorAll('.slick-slide').forEach(slide => {
            slide.style.display = 'block';
            slide.style.width = 'auto';
            slide.style.opacity = '1';
        });

        // Remove carousel interactions (prevent reinitialization)
        const slider = document.querySelector('.slick-slider');
        if (slider) {
            slider.classList.remove('slick-initialized');
            // Keep the slides but remove carousel functionality
            slider.innerHTML = slider.querySelector('.slick-list').innerHTML;
        }
    },

    restoreOriginalCarousel: function() {
        const slider = document.querySelector('.slick-slider');
        if (!slider || !this.originalSliderHTML) return;

        // Restore original HTML
        slider.innerHTML = this.originalSliderHTML;
        
        // Reinitialize slick if jQuery and slick are available
        if (typeof $ !== 'undefined' && typeof $.fn.slick !== 'undefined') {
            try {
                $(slider).slick('unslick'); // Destroy any existing slick instance
            } catch (e) {
                console.log('Error unslicking:', e);
            }
            
            // Reinitialize with original settings
            setTimeout(() => {
                try {
                    $(slider).slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                        dots: true,
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });
                    console.log('Original carousel restored');
                } catch (e) {
                    console.log('Error restoring original carousel:', e);
                }
            }, 200);
        }
    },

    updateCounter: function () {
        let visiblePlans, totalPlans;
        
        if (this.isMobile()) {
            visiblePlans = Array.from(document.querySelectorAll('.sc-ab2edf2a-2:not(.section-hidden)'));
            totalPlans = Array.from(document.querySelectorAll('.sc-ab2edf2a-2'));
        } else {
            visiblePlans = Array.from(document.querySelectorAll('.slick-slide:not(.section-hidden) [data-testid*="plan-card-PRD_PREPAID"]'));
            totalPlans = Array.from(document.querySelectorAll('.slick-slide [data-testid*="plan-card-PRD_PREPAID"]'));
        }
        
        const visibleElement = document.querySelector('.counter .visible');
        const totalElement = document.querySelector('.counter .total');
        
        if (visibleElement) {
            visibleElement.textContent = visiblePlans.length;
        }
        if (totalElement) {
            totalElement.textContent = totalPlans.length;
        }
    },

    tracking: function (value) {
        try {
            if (typeof dataLayer !== 'undefined' && dataLayer) {
                croWD.utils.launchTracking(
                    DCP15834CONSTANTS.EXPERIMENT_ID,
                    value,
                    DCP15834CONSTANTS.EXPERIMENT_VARIANT,
                    ''
                );
            } else {
                console.warn('dataLayer is not defined. Tracking event:', value, 'was not sent.');
            }
        } catch (error) {
            console.error('Error in tracking function:', error);
        }
    },

    buildCSS: function () {
        try {
            const styleSheet = document.createElement('style');
            styleSheet.setAttribute('type', 'text/css');
            styleSheet.setAttribute('id', `${DCP15834CONSTANTS.EXPERIMENT_ID}-styles`);
            const existingStyle = document.getElementById(`${DCP15834CONSTANTS.EXPERIMENT_ID}-styles`);
            if (existingStyle) existingStyle.remove();
            styleSheet.appendChild(document.createTextNode(DCP15834CONSTANTS.CUSTOM_CSS));
            document.head.appendChild(styleSheet);
        } catch (error) {
            console.error('Error in buildCSS function:', error);
            this.tracking('error buildCSS');
        }
    },

    buildTemplate: function () {
        try {
            let template = document.createElement('div');
            template.innerHTML = DCP15834CONSTANTS.TEMPLATE_HTML;
            template.id = 'wrapper-' + DCP15834CONSTANTS.EXPERIMENT_ID;
            let mainElement = document.querySelector('[data-testid="plans"]');
            if (!mainElement) throw new Error('Template location element not found');
            const existingTemplate = document.getElementById(`${DCP15834CONSTANTS.EXPERIMENT_ID}`);
            if (existingTemplate) existingTemplate.remove();
            switch (DCP15834CONSTANTS.TEMPLATE_INJECT_TYPE) {
                case 'replace':
                    mainElement.innerHTML = template.outerHTML;
                    break;
                case 'before':
                    mainElement.insertAdjacentHTML('beforebegin', template.outerHTML);
                    break;
                case 'prepend':
                    mainElement.insertBefore(template, mainElement.firstChild);
                    break;
                case 'after':
                    mainElement.insertAdjacentHTML('afterend', template.outerHTML);
                    break;
                default:
                    mainElement.appendChild(template);
                    break;
            }
        } catch (error) {
            console.error('Error in buildTemplate function:', error);
            this.tracking('error buildTemplate');
        }
    },

    observe: function () {
        try {
            const includeUrls = DCP15834CONSTANTS.PAGES_INCLUDE;
            const excludedUrls = DCP15834CONSTANTS.PAGES_EXCLUDE;
            croWD.hotbed.listen('croPageTrack', function (observable, eventType, data) {
                const currentUrl = window.location.href;
                const matchedUrl = includeUrls.find(url => {
                    const isMatch = currentUrl.toLowerCase().includes(url.toLowerCase());
                    const isExcluded = excludedUrls.some(excludedUrl =>
                        currentUrl.toLowerCase().includes(excludedUrl.toLowerCase())
                    );
                    return isMatch && !isExcluded;
                });
                if (matchedUrl) {
                    DCP15834OBJ.waitForElement();
                }
            });
        } catch (error) {
            console.error('Error in observe function:', error);
            this.tracking('error observe');
        }
    },

    waitForElement: function () {
        try {
            let rC = 0;
            let int = setInterval(() => {
                const el = DCP15834CONSTANTS.TARGET_ELEMENT;
                if (el && croWD) {
                    clearInterval(int);
                    int = null;
                    this.applyChanges(el);
                } else {
                    rC++;
                    if (rC >= DCP15834CONSTANTS.INIT_MAX_RETRIES) {
                        clearInterval(int);
                        int = null;
                        console.error('Element not found after max retries. DCP15834OBJ');
                        this.tracking('error elementsNotFound');
                    }
                }
            }, DCP15834CONSTANTS.INIT_RETRY_INTERVAL);
        } catch (error) {
            console.error('Error in waitForElement function:', error);
            this.tracking('error waitForElement');
        }
    },

    init: function () {
        if (DCP15834CONSTANTS.PAGES_INCLUDE.length === 0) {
            this.waitForElement();
        } else {
            this.observe();
        }
    }
};

DCP15834OBJ.init();