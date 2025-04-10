// $(document).ready(function() {
//   var tabs = [
//     { title: 'AU12629', testid: 'plan-card-AU12629' },
//     { title: 'AU12630', testid: 'plan-card-AU12630' },
//     { title: 'AU12631', testid: 'plan-card-AU12631' }
//   ];
//   var style = document.createElement('style');
//   var styleString = '#popular-offers-container{background-color:#f4f4f4;}';
//   styleString += '#popular-offers-container .tabs {position: absolute; z-index: -9999; float: none; list-style: none;  margin: 0px auto;  padding:10px 0; text-align: left; max-width:90%; min-height:580px; top: -40px;}';
//   styleString += '#popular-offers-container .tabs li {  float: left;  display: block;}';
//   styleString += '#popular-offers-container .tabs input[type="radio"] {  position: absolute;  top: 0;  left: -9999px;}';
//   styleString += '#popular-offers-container .popular-offers-tabs { max-width:90%; margin:0px auto; z-index:2}';
//   styleString += '#popular-offers-container label.popular-offers-tab {  display: inline-block;  padding: 5px 20px;  border-radius: 2px 2px 0 0;  font-size: 20px;  font-weight: normal;  cursor: pointer;  position: relative;  top: 4px;  -moz-transition: all 0.2s ease-in-out;  -o-transition: all 0.2s ease-in-out;  -webkit-transition: all 0.2s ease-in-out;  transition: all 0.2s ease-in-out;}';
//   styleString += '#popular-offers-container label.popular-offers-tab.checked {border-bottom: 5px solid red;}';
//   styleString += '#popular-offers-container .tabs .tab-content {  z-index: 2;   width: 100%;  font-size: 17px;  line-height: 25px;  padding: 0 0;  position: absolute;  top: 53px;  left: -99999px; }';
//   styleString += '#popular-offers-container [id^="tab"]:checked + label {border-bottom: 1px solid red;}';
//   styleString += '#popular-offers-container [id^="tab"]:checked ~ [id^="tab-content"] {left: 0px;}';

//   style.id = 'offerTabsStyle';
//   style.textContent = styleString;
//   document.head.append(style);

//   var slickStyle = document.createElement('link');
//   slickStyle.rel = 'stylesheet';
//   slickStyle.type = 'text/css';
//   slickStyle.href = 'https://www.vodafone.com.au/content/dam/vha/croassets/slick.min.css';
//   document.body.appendChild(slickStyle);

//   var tabsHTML = '<div id=\'popular-offers-container\'>';
//   tabsHTML += '<div class=\'popular-offers-tabs\'>';
//   for (var i = 0; i < tabs.length; i++) {
//     var tabId = 'tab-' + tabs[i].title;
//     var checked = i === 0 ? 'checked' : '';
//     tabsHTML += `<label class='popular-offers-tab ${checked}' for='${tabId}' role='tab' aria-selected='${i === 0 ? 'true' : 'false'}' aria-controls='panel' tabindex='${i}'>${tabs[i].title}</label>`;
//   }
//   tabsHTML += '</div>';
//   tabsHTML += '<ul id=\'tabs-popular-offers\' class=\'tabs\' role=\'tablist\'>';
//   for (var i = 0; i < tabs.length; i++) {
//     var tabId = 'tab-' + tabs[i].title;
//     var tabContentId = 'tab-content-' + tabs[i].title;
//     var checked = i === 0 ? 'checked' : '';
//     tabsHTML += `<li><input type='radio' name='tabs' id='${tabId}' ${checked} />`;
//     tabsHTML += `<div id='${tabContentId}' class='tab-content' role='tabpanel' aria-labelledby='${tabId}' aria-hidden='${i === 0 ? 'false' : 'true'}'>`;
//     tabsHTML += `</div>`;
//     tabsHTML += '</li>';
//   }
//   tabsHTML += '</ul></div>';
//   // $('[data-testid="plan"]').parents('section').hide();
//   // $('[data-testid="plan"]').before(tabsHTML);
//   $('#carousel-block-view-primaryPlans').hide();
//   $('#carousel-block-view-primaryPlans').before(tabsHTML);
//   setTimeout(function(){
//     console.log('Initializing slick...');
//     jQuery('.popular-offers-tabs').slick({
//     dots: false,
//     infinite: false,
//     speed: 300,
//     variableWidth: true,
//     //centerMode: true,
//     //centerPadding: '20px',
//     prevArrow: '',
//     nextArrow: '',
//     slidesToShow: 5,
//     adaptiveHeight: true,
//     responsive: [
//       {
//       breakpoint: 750,
//       settings: {
//         slidesToShow: 4
//       }
//       },
//       {
//       breakpoint: 540,
//       settings: {
//         slidesToShow: 3
//       }
//       },
//       {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 2
//       }
//       }

//     ]
//     });
//   },300);

//   $('.popular-offers-tabs label.popular-offers-tab').on('click', function() {
//     console.log('Initializing slick...');
//     jQuery('.tab-content').slick('unslick');
//     applySlick();

//     $('.popular-offers-tab.checked').removeClass('checked');
//     $(this).addClass('checked');
//   });

//   function applySlick() {
//     console.log('Initializing slick2...');
//     jQuery('.tab-content').slick({
//       dots: false,
//       infinite: false,
//       speed: 300,
//       slidesToShow: 4,
//       adaptiveHeight: true,
//       responsive: [
//         {
//           breakpoint: 950,
//           settings: {
//             slidesToShow: 3
//           }
//         },
//         {
//           breakpoint: 710,
//           settings: {
//             slidesToShow: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1
//           }
//         }
//       ]
//     });
//   }

//   applySlick();

//   $('#carousel-block-view-primaryPlans').hide();

//   for (var i = 0; i < tabs.length; i++) {
//     var tabContentId = 'tab-content-' + tabs[i].title;
//     var planCard = $(`[data-testid="${tabs[i].testid}"]`);
//     $(`#${tabContentId}`).append(planCard);
//   }
// });




$(document).ready(function () {
  var tabs = [
    { title: "AU12629", testid: "plan-card-AU12629" },
    { title: "AU12630", testid: "plan-card-AU12630" },
    { title: "AU12631", testid: "plan-card-AU12631" },
  ];

  var style = document.createElement("style");
  var styleString =
    "#popular-offers-container{background-color:#f4f4f4;}" +
    "#popular-offers-container .tabs {position: absolute; z-index: -9999; float: none; list-style: none; margin: 0px auto; padding:10px 0; text-align: left; max-width:90%; min-height:580px; top: -40px;}" +
    "#popular-offers-container .tabs li { float: left; display: block;}" +
    "#popular-offers-container .tabs input[type='radio'] { position: absolute; top: 0; left: -9999px;}" +
    "#popular-offers-container .popular-offers-tabs { max-width:90%; margin:0px auto; z-index:2}" +
    "#popular-offers-container label.popular-offers-tab { display: inline-block; padding: 5px 20px; border-radius: 2px 2px 0 0; font-size: 20px; font-weight: normal; cursor: pointer; position: relative; top: 4px; -moz-transition: all 0.2s ease-in-out; -o-transition: all 0.2s ease-in-out; -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out;}" +
    "#popular-offers-container [id^='tab']:checked + label { border-bottom: 5px solid red; }" +
    "#popular-offers-container .tabs .tab-content { z-index: 2; width: 100%; font-size: 17px; line-height: 25px; padding: 0 0; position: absolute; top: 53px; left: -99999px; }" +
    "#popular-offers-container [id^='tab']:checked ~ [id^='tab-content'] { left: 0px; }" + 
    "#popular-offers-container .radio-hidden { position: absolute; top: 0; left: -9999px; background: red}";

  style.id = "offerTabsStyle";
  style.textContent = styleString;
  document.head.append(style);

  var tabsHTML =
    `<div id='popular-offers-container'>` +
    `<div class='popular-offers-tabs'>`;
  for (var i = 0; i < tabs.length; i++) {
    var tabId = "tab-" + tabs[i].title;
    tabsHTML += `<input type='radio' name='tabs' class='radio-hidden' id='${tabId}' ${i === 0 ? "checked" : ""} />`;
    tabsHTML += `<label class='popular-offers-tab' for='${tabId}'>${tabs[i].title}</label>`;
  }
  tabsHTML += `</div>` +
    `<ul id='tabs-popular-offers' class='tabs' role='tablist'>`;
  for (var i = 0; i < tabs.length; i++) {
    var tabContentId = "tab-content-" + tabs[i].title;
    tabsHTML += `<li>` +
      `<div id='${tabContentId}' class='tab-content' role='tabpanel' aria-labelledby='${tabContentId}'></div>` +
      `</li>`;
  }
  tabsHTML += `</ul></div>`;

  if ($("#tabs-popular-offers").length == 0) {
    console.log('#tabs-popular-offers');
    
    // $("#carousel-block-view-primaryPlans").hide();
    $("#carousel-block-view-primaryPlans").before(tabsHTML);
  }

  $('.popular-offers-tabs label.popular-offers-tab').on('click', function (event) {
    event.preventDefault(); 
    var tabId = $(this).attr('for');
    $('#' + tabId).prop('checked', true);
    console.log("Tab clicked:", $(this).text());
  });

  // Initialize slick slider
  setTimeout(function () {
    console.log("Initializing slick...");
    jQuery(".popular-offers-tabs").slick({
      dots: false,
      infinite: false,
      speed: 300,
      variableWidth: true,
      prevArrow: "",
      nextArrow: "",
      slidesToShow: 5,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }, 300);
});
