(() => {
  const TARGET_ID = 'plan-card-PRD_PREPAID_$40PREPAID_PLUS2_STARTER_PACK';

  const updateCarousel = () => {
    const card = document.getElementById(TARGET_ID);
    if (!card) {
      return false;
    }

    const slide = card.closest('.slick-slide');
    const track = card.closest('.slick-track');

    if (!slide || !track) {
      return false;
    }

    // Prevent running twice
    if (track.dataset.croUpdated === 'true') {
      return true;
    }

    const slides = [...track.querySelectorAll('.slick-slide:not(.slick-cloned)')];

    const oldCount = slides.length;

    const currentWidth = parseFloat(track.style.width) || parseFloat(getComputedStyle(track).width);

    console.log('Old slide count:', oldCount);
    console.log('Old track width:', currentWidth);

    // ========================================
    // 1. Remove unwanted slide
    // ========================================

    slide.remove();
    const newCount = oldCount - 1;
    console.log('New slide count:', newCount);

    // ========================================
    // 2. Update track grid
    // ========================================
    track.style.setProperty(
      'grid-template-columns',
      `repeat(${newCount}, 1fr)`,
      'important'
    );

    // ========================================
    // 3. Recalculate track width
    //
    // 3264 / 8 = 408
    // 408 * 7 = 2856
    // ========================================

    if (currentWidth && oldCount > 0) {
      const slideWidth = currentWidth / oldCount;
      const newWidth = slideWidth * newCount;

      track.style.setProperty(
        'width',
        `${newWidth}px`,
        'important'
      );

      console.log('New track width:', newWidth);
    }

    // ========================================
    // 4. Get carousel
    // ========================================

    const carousel = track.closest('.slick-slider') || track.parentElement.parentElement;

    if (!carousel) {
      track.dataset.croUpdated = 'true';
      return true;
    }

    // ========================================
    // 5. Deal with dots
    //
    // DON'T remove dot 0.
    //
    // The last dot is now the obsolete
    // navigation position.
    // ========================================

    const dots = [...carousel.querySelectorAll('.slick-dots li')];

    console.log('Dots before:', dots.length);

    if (dots.length > newCount) {
      dots[dots.length - 1].remove();
    }

    // ========================================
    // 6. Re-index remaining dots
    // ========================================

    const remainingDots = [...carousel.querySelectorAll('.slick-dots li')];

    remainingDots.forEach((dot, index) => {
      // Reset active state
      dot.classList.remove('slick-active');

      dot.setAttribute('data-index', index);

      const button = dot.querySelector('button');

      if (button) {
        button.setAttribute('data-index', index);

        button.setAttribute(
          'aria-label',
          `${index + 1} of ${newCount}`
        );

        button.setAttribute(
          'aria-selected',
          index === 0 ? 'true' : 'false'
        );
      }
    });

    // ========================================
    // 7. First slide/dot should now be active
    // ========================================

    if (remainingDots[0]) {
      remainingDots[0].classList.add('slick-active');

      const firstButton =
        remainingDots[0].querySelector('button');

      if (firstButton) {
        firstButton.setAttribute(
          'aria-selected',
          'true'
        );
      }
    }

    // ========================================
    // 8. Reset track position
    //
    // Since original slide 0 was removed,
    // new slide 0 should be at the beginning.
    // ========================================

    track.style.setProperty(
      'transform',
      'translate3d(0px, 0px, 0px)',
      'important'
    );

    // ========================================
    // 9. Re-index remaining slides
    // ========================================

    const remainingSlides = [
      ...track.querySelectorAll(
        '.slick-slide:not(.slick-cloned)'
      )
    ];

    remainingSlides.forEach((slide, index) => {
      slide.setAttribute('data-slick-index', index);

      slide.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
    });

    // ========================================
    // Prevent duplicate execution
    // ========================================

    track.dataset.croUpdated = 'true';

    console.log('Final slides:', remainingSlides.length);

    console.log('Final dots:', remainingDots.length);

    return true;
  };

  // Try immediately
  if (updateCarousel()) {
    return;
  }

  // ========================================
  // Wait for SPA/carousel rendering
  // ========================================

  const observer = new MutationObserver(() => {
    if (updateCarousel()) {
      observer.disconnect();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Safety cleanup
  setTimeout(() => {
    observer.disconnect();
  }, 15000);
})();