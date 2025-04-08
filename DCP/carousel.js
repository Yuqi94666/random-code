var buildCarousel = function(){

    if(typeof jQuery === 'undefined') {

        var jqueryScript = document.createElement('script');
        jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        jqueryScript.onload = buildCarousel;
        document.head.appendChild(jqueryScript);
        return;
    }

    if(!document.querySelector('link[href*="slick.min.css"]')) {
        var slickStyle = document.createElement('link');
        slickStyle.rel = 'stylesheet';
        slickStyle.type = 'text/css';
        slickStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css';
        document.head.appendChild(slickStyle);
        
        var slickTheme = document.createElement('link');
        slickTheme.rel = 'stylesheet';
        slickTheme.type = 'text/css';
        slickTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css';
        document.head.appendChild(slickTheme);
    }

    if(typeof jQuery.fn.slick === 'undefined') {
        var slickScript = document.createElement('script');
        slickScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
        slickScript.onload = buildCarousel;
        document.head.appendChild(slickScript);
        return;
    }

    var container = document.getElementById('carousel-block-view-primaryPlans');
    if (!container) {
        console.error('Container element not found');
        return;
    }

    if(!container.classList.contains('slick-initialized')) {

        container.style.margin = '20px auto';
        container.style.maxWidth = '1200px';
        
        jQuery(container).slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
        
        console.log('Slick carousel initialized successfully');
    }
};


buildCarousel();