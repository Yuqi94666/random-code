var buildCarousel = function(){
	var slickStyle = document.createElement('link');
	slickStyle.rel = 'stylesheet';
	slickStyle.type = 'text/css';
	slickStyle.href = 'https://www.vodafone.com.au/content/dam/vha/croassets/slick.min.css';
	document.body.appendChild(slickStyle);
  
	if(typeof jQuery === 'undefined' || typeof jQuery.fn.slick === 'undefined') {
	  setTimeout(buildCarousel, 100);
	  return;
	}
   // Get the container element
   var container = document.getElementById('carousel-block-view-primaryPlans');
	
   if (!container) {
	   console.error('Container element not found');
	   return;
   }
   
   // Add some basic styling
   var style = document.createElement('style');
   style.textContent = `
	   .sc-a1f3094c-7.jjyoIn {
		   margin: 20px auto;
		   max-width: 1200px;
	   }
	   .sc-a1f3094c-2 {
		   padding: 0 15px;
	   }
	   .slick-prev:before, .slick-next:before {
		   color: #fb0000 !important;
	   }
	   .slick-dots li button:before {
		   font-size: 12px !important;
	   }
   `;
   document.head.appendChild(style);
   
   // Initialize Slick
   jQuery('#carousel-block-view-primaryPlans').slick({
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
  };
  
  // Start checking for libraries
  setTimeout(buildCarousel, 100);