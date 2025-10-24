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
	TEMPLATE_INJECT_TYPE: `before`,
	CUSTOM_CSS: `#newPlans .slick-dots{display:flex; justify-content: center;}.slick-track .slick-slide > div .sc-ab2edf2a-1 { height: 100%;}.slick-arrow { width: 48px; height: 48px; border-radius: 24px; box-shadow: rgba(130, 130, 130, 0.5) 0px 1px 4px 1px; top: 180px; position: absolute; z-index: 800; right: -66px; background-color: rgb(255, 255, 255) !important; } .slick-arrow.slick-next:after, .slick-arrow.slick-prev:after { display: block; content: ""; width: 36px; height: 36px; position: absolute; left: 9px; top: 5px; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36'%3E%3Cpath d='M12 8l10 10-10 10' stroke='%23333' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right center; background-size: contain; } .slick-arrow.slick-prev:after { transform: translateY(0%) rotate(180deg); } .filter-section { background-color: #fff } #wrapper-DCP15834-Prepaid-filter { max-width: 1180px; margin: 0px auto; padding: 20px 10px; } #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder .title { padding: 16px 0 16px 0; font-family: VodafoneRegular, Arial, sans-serif; font-size: 18px } section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder .counter { padding: 30px 0 10px 0; font-family: VodafoneRegular, Arial, sans-serif; font-size: 18px } section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder .counter .total { margin: 0 } section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder .counter .visible { margin: 0; font-family: VodafoneRegularBold, Arial, sans-serif } section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder span { display: inline-block; margin: 0px 12px 8px 0px; color: #333 } section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder span input { opacity: 0; width: 0px; height: 0px; margin: 0px } section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder span label { display: inline-flex; padding: 6px 12px 6px 20px; border-radius: 20px; border: 2px solid rgba(0, 0, 0, 0); background-color: #ebebeb; transition: background-color 250ms; font-size: 18px; line-height: 24px; cursor: pointer } section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder span label span { display: none; margin: 4px 0px 0px 8px } section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder span label span svg { position: relative; display: block; height: 16px; width: 16px } section #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder span input:checked+label { background-color: #e60000; color: #fff } #wrapper-DCP15834-Prepaid-filter #DCP15834-Prepaid-filterHolder span input:checked+label span { display: block; } .section-hidden { display: none !important } h1 { margin: 48px 0 32px } #newPlans .rah-static--height-zero { height: 0px !important; } #newPlans .rah-static--height-auto { height: auto !important; } #newPlans .chervonUp:after { transform: translateY(-50%) rotate(180deg); } /* Hide arrows and dots when not needed */ #newPlans .slick-arrow.slick-hidden, #newPlans .slick-dots li.slick-hidden { display: none !important; } @media screen and (max-width: 768px) { h1 { margin: 32px 0 32px } }`,
	INIT_RETRY_INTERVAL: 500,
	INIT_MAX_RETRIES: 20,
};

let DCP15834OBJ = {
	currentFilters: [],
	sliderInitialized: false,
	arrowObserver: null,
	newCarouselBuilt: false,
	originalSlidesData: [],
	trackStyleObserver: null,

	isMobile: function () {
		return window.innerWidth < 1024;
	},

	loadSlickCarousel: function () {
		return new Promise((resolve) => {
			if (window.jQuery && window.jQuery.fn.slick) {
				resolve();
				return;
			}

			let script = document.createElement('script');
			script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js');
			script.onload = () => resolve();
			document.body.appendChild(script);
		});
	},



	setupNewCarouselEvents: function () {
		if (!window.jQuery) return;

		const $ = window.jQuery;

		// 展开/收起按钮事件
		$('#newPlans [role="contentinfo"] button').off('click').on('click', function () {
			$(this).toggleClass("chervonUp");
			$(this).next('div').toggleClass("rah-static--height-auto");
			$(this).next('div').find('div').eq(0).toggle();
		});

		// **使用辅助函数处理所有按钮**
		const buttonsToHandle = ['#prepaidplusmaxspeed', '#databank', '#autorecharge', '#zone1', '[data-testid="select-plan-cta"]'];

		buttonsToHandle.forEach(buttonId => {
			$('html').off('click', `#newPlans ${buttonId}`).on('click', `#newPlans ${buttonId}`, function (e) {
				e.preventDefault();
				e.stopPropagation();
				this.triggerCorrectOriginalElement(buttonId);
			}.bind(this));
		});
	},

	// 新增辅助函数：触发正确的原始元素
	triggerCorrectOriginalElement: function (elementId) {
		console.log(`Triggering ${elementId} from correct DOM`);

		// 使用正确的DOM路径（第二个slick-slider）
		const correctElement = document.querySelectorAll('#primaryPlans .slick-slider')[1]?.querySelector(elementId);

		if (correctElement) {
			console.log(`Found and clicking ${elementId} in second slick-slider`);
			correctElement.click();
		} else if(elementId ==='[data-testid="select-plan-cta"]'){
			console.log(`${elementId} not found in second slick-slider`);

			// 备用方案：尝试第一个slick-slider
			const fallbackElement = document.querySelectorAll('#primaryPlans .slick-slider')[1].querySelectorAll('[data-testid="select-plan-cta"]');
			if (fallbackElement) {
				console.log(`Found and clicking ${elementId} in first slick-slider as fallback`);
				fallbackElement.click();
			} else {
				console.log(`${elementId} not found in any slick-slider`);
			}
		}
	},


	applyChanges: function (el) {
		try {
			this.buildCSS();
			this.buildTemplate();

			if (!this.isMobile()) {
				this.buildNewCarousel();
			}

			this.initializeSectionToggler();

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

				if (checkbox.checked) {
					this.tracking(`filter_${checkbox.value}`);
				}

				this.applyFilters(activeFilters);
			});
		});
		this.applyFilters([]);
	},

	applyFilters: function (activeFilters) {
		if (this.isMobile()) {
			this.applyMobileFilters(activeFilters);
		} else {
			if (this.newCarouselBuilt) {
				this.rebuildFilteredCarousel(activeFilters);
			} else {
				this.applyDesktopFilters(activeFilters);
			}
		}
		this.updateCounter();
	},

	applyMobileFilters: function (activeFilters) {
		const allMobilePlanContainers = document.querySelector('#carousel-block-view-primaryPlans')?.querySelectorAll(".sc-ab2edf2a-2");
		if (!allMobilePlanContainers) return;

		const dayFilters = {
			'7Day': ['7 day expiry'],
			'28Day': ['28 day expiry'],
			'longDays': ['185 day expiry', '365 day expiry']
		};

		allMobilePlanContainers.forEach(container => {
			const plan = container.querySelector('[data-testid*="plan-card-PRD_PREPAID"]');
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
	},

	applyDesktopFilters: function (activeFilters) {
		const allPlanContainersDesktop = document.querySelectorAll('.slick-slide');
		const dayFilters = {
			'7Day': ['7 day expiry'],
			'28Day': ['28 day expiry'],
			'longDays': ['185 day expiry', '365 day expiry']
		};

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
	},
	buildNewCarousel: function () {
		if (this.newCarouselBuilt || this.isMobile()) return;

		this.loadSlickCarousel().then(() => {
			if (!window.jQuery) return;

			const $ = window.jQuery;
			const primaryPlansContainer = $('#primaryPlans');
			const originalSliderContainer = $('#primaryPlans .sc-ab2edf2a-6');

			if (primaryPlansContainer.length === 0 || originalSliderContainer.length === 0) return;

			const slickTrack = $('#primaryPlans .slick-track');
			if (slickTrack.length === 0) return;

			// 存储原始slides数据
			this.originalSlidesData = [];
			const originalSlides = slickTrack.find('.slick-slide:not(.slick-cloned)');

			originalSlides.each((index, slide) => {
				const $slide = $(slide);
				// **使用clone(true, true)来复制事件**
				const slideContent = $slide.find('> div').clone(true, true).html();
				const plan = $slide.find('[data-testid*="plan-card-PRD_PREPAID"]');

				const slideData = {
					content: slideContent,
					hasplan: plan.length > 0
				};

				if (slideData.hasplan) {
					slideData.hasBadge = plan.find('[data-testid="plan-card-badge"]').length > 0;
					const expiryElement = plan.find('.sc-30ffa23d-5 .sc-55aeeeb6-0.hEJzIe');
					slideData.expiryText = expiryElement.length > 0 ? expiryElement.text().trim() : '';
				}

				this.originalSlidesData.push(slideData);
			});

			// **使用clone(true, true)复制完整内容包括事件**
			const clonedContent = slickTrack.clone(true, true).html();

			$('#primaryPlans .slick-slider').hide();

			const newCarouselHtml = `
            <div id="newPlans" style="height:1140px;">
                ${clonedContent}
            </div>
        `;

			originalSliderContainer.prepend(newCarouselHtml);

			setTimeout(() => {
				$('#newPlans').slick({
					infinite: false,
					slidesToShow: 3,
					slidesToScroll: 1,
					adaptiveHeight: true,
					dots: true,
					arrows: true,
					responsive: [
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
					]
				});

				this.newCarouselBuilt = true;

				setTimeout(() => {
					this.setupNewCarouselEvents();
				}, 200);
			}, 300);
		});
	},


	rebuildFilteredCarousel: function (activeFilters) {
		if (!window.jQuery || !this.newCarouselBuilt || !this.originalSlidesData.length) return;

		const $ = window.jQuery;
		const dayFilters = {
			'7Day': ['7 day expiry'],
			'28Day': ['28 day expiry'],
			'longDays': ['185 day expiry', '365 day expiry']
		};

		let filteredHtml = '';

		// 使用存储的原始数据进行过滤
		this.originalSlidesData.forEach(slideData => {
			if (!slideData.hasplan) return;

			let shouldShow = activeFilters.length === 0;

			if (!shouldShow) {
				for (const filter of activeFilters) {
					if (filter === 'featured') {
						if (slideData.hasBadge) {
							shouldShow = true;
							break;
						}
					} else {
						if (slideData.expiryText && dayFilters[filter] && dayFilters[filter].includes(slideData.expiryText)) {
							shouldShow = true;
							break;
						}
					}
				}
			}

			if (shouldShow) {
				filteredHtml += `<div><div>${slideData.content}</div></div>`;
			}
		});

		// 完全销毁并重新创建
		$('#newPlans').slick('unslick');
		$('#newPlans').html(filteredHtml);

		setTimeout(() => {
			$('#newPlans').slick({
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				adaptiveHeight: true,
				dots: true,
				arrows: true,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});

			// **关键修复：在slick初始化后再绑定事件**
			setTimeout(() => {
				this.forceTrackStyle();
				this.startTrackStyleMonitor();

				// **重新绑定事件 - 这是关键！**
				this.setupNewCarouselEvents();
			}, 100);
		}, 50);
	},


	startTrackStyleMonitor: function () {
		if (this.trackStyleObserver) {
			this.trackStyleObserver.disconnect();
		}

		const trackElement = document.querySelector('#newPlans .slick-track');
		if (!trackElement) return;

		this.trackStyleObserver = new MutationObserver((mutations) => {
			let shouldFix = false;
			mutations.forEach((mutation) => {
				if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
					const currentTransform = trackElement.style.transform;
					const currentWidth = trackElement.style.width;

					if (currentTransform !== 'translate3d(0px, 0px, 0px)' || currentWidth !== '2758px') {
						shouldFix = true;
					}
				}
			});

			if (shouldFix) {
				setTimeout(() => {
					this.forceTrackStyle();
				}, 10);
			}
		});

		this.trackStyleObserver.observe(trackElement, {
			attributes: true,
			attributeFilter: ['style']
		});
	},
	forceTrackStyle: function () {
		if (window.jQuery && this.newCarouselBuilt) {
			const $ = window.jQuery;
			$('#newPlans .slick-track').css({
				'width': '2758px',
				// 'transform': 'translate3d(0px, 0px, 0px)'
			});
		}
	},

	updateCounter: function () {
		let visibleCount, totalCount;

		if (this.isMobile()) {
			// Mobile保持原样
			const visiblePlans = Array.from(document.querySelectorAll('.sc-ab2edf2a-2:not(.section-hidden)'));
			const totalPlans = Array.from(document.querySelectorAll('.sc-ab2edf2a-2'));
			visibleCount = visiblePlans.length;
			totalCount = totalPlans.length;
		} else {
			// 桌面端：直接使用newPlans中的slides数量
			if (this.newCarouselBuilt) {
				const visibleSlides = document.querySelectorAll('#newPlans .slick-slide:not(.slick-cloned)');
				visibleCount = visibleSlides.length;

				// 总数从存储的原始数据获取
				totalCount = this.originalSlidesData.filter(slide => slide.hasplan).length;
			} else {
				// 如果newCarousel还没有构建，使用原始的计算方式
				const visiblePlans = Array.from(document.querySelectorAll('.slick-slide:not(.section-hidden) [data-testid*="plan-card-PRD_PREPAID"]'));
				const totalPlans = Array.from(document.querySelectorAll('.slick-slide [data-testid*="plan-card-PRD_PREPAID"]'));
				visibleCount = visiblePlans.length;
				totalCount = totalPlans.length;
			}
		}

		const visibleElement = document.querySelector('.counter .visible');
		const totalElement = document.querySelector('.counter .total');

		if (visibleElement) {
			visibleElement.textContent = visibleCount;
		}
		if (totalElement) {
			totalElement.textContent = totalCount;
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