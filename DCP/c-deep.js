$(document).ready(function() {
    var tabs = [
      { title: 'AU12629', testid: 'plan-card-AU12629' },
      { title: 'AU12630', testid: 'plan-card-AU12630' },
      { title: 'AU12631', testid: 'plan-card-AU12631' }
    ];
    var style = document.createElement('style');
	  var styleString = '#popular-offers-container{background-color:#f4f4f4;}';
	  styleString += '#popular-offers-container .tabs {position: absolute; z-index: -9999; float: none; list-style: none;  margin: 0px auto;  padding:10px 0; text-align: left; max-width:90%; min-height:580px; top: -40px;}';
	  styleString += '#popular-offers-container .tabs li {  float: left;  display: block;}';
	  styleString += '#popular-offers-container .tabs input[type="radio"] {  position: absolute;  top: 0;  left: -9999px;}';
	  styleString += '#popular-offers-container .popular-offers-tabs { max-width:90%; margin:0px auto; z-index:2}';
	  styleString += '#popular-offers-container label.popular-offers-tab {  display: inline-block;  padding: 5px 20px;  border-radius: 2px 2px 0 0;  font-size: 20px;  font-weight: normal;  cursor: pointer;  position: relative;  top: 4px;  -moz-transition: all 0.2s ease-in-out;  -o-transition: all 0.2s ease-in-out;  -webkit-transition: all 0.2s ease-in-out;  transition: all 0.2s ease-in-out;}';
	  styleString += '#popular-offers-container label.popular-offers-tab.checked {border-bottom: 5px solid red;}';
	  styleString += '#popular-offers-container .tabs .tab-content {  z-index: 2;   width: 100%;  font-size: 17px;  line-height: 25px;  padding: 0 0;  position: absolute;  top: 53px;  left: -99999px; }';
	  styleString += '#popular-offers-container [id^="tab"]:checked + label {border-bottom: 1px solid red;}';
	  styleString += '#popular-offers-container [id^="tab"]:checked ~ [id^="tab-content"] {left: 0px;}';
	  styleString += '#popular-offers-container .tabs .tab-content a{text-decoration:none;}';
	  styleString += '#popular-offers-container .tabs .tab-item{color: rgb(51, 51, 51); margin:10px; padding: 16px; background-color:#fff; border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px 0px;}';
	  styleString += '#popular-offers-container .tabs .tab-item img{width: 168px; height: auto; margin: 20px auto;}';
	  styleString += '#popular-offers-container .tabs .tab-item p{margin:0;}';
	  styleString += '#popular-offers-container .tabs .tab-item .brand{font-size: 14px; line-height: 18px; font-family: VodafoneRegular, Arial, sans-serif;}';
	  styleString += '#popular-offers-container .tabs .tab-item .device-name{min-height: 54px; margin-bottom: 0px; color: rgb(51, 51, 51); font-family:VodafoneRegularBold, Arial, sans-serif}';
	  styleString += '#popular-offers-container .tabs .tab-item .device-prefix{font-size: 14px; line-height: 18px;}';
	  styleString += '#popular-offers-container .tabs .tab-item .device-prefix .wasPrice{text-decoration: line-through;}';
	  styleString += '#popular-offers-container .tabs .tab-item .device-price{}';
	  styleString += '#popular-offers-container .tabs .tab-item .device-price .dollar{font-family: VodafoneRegularBold, Arial, sans-serif;display: inline-block; vertical-align: top; font-size: 18px; line-height: 36px;}';
	  styleString += '#popular-offers-container .tabs .tab-item .device-price .device-recurringCharge{font-family: VodafoneRegularBold, Arial, sans-serif; font-size: 40px; line-height: 48px; padding-right: 0px;}';
	  styleString += '#popular-offers-container .tabs .tab-item .device-price .mth{    display: inline-block; font-size: 14px; line-height: 18px; padding: 3px 0px 0px 2px;}';
	  styleString += '#popular-offers-container .tabs .tab-item .device-mincost{margin-top: 12px; font-size: 14px; line-height: 18px;}';
	  styleString += '#popular-offers-container .tabs .tab-item .primaryBtn{min-width: 80%; width: fit-content; height: auto; margin: 30px auto 0 auto; border-radius: 6px; padding: 8px 24px; line-height: 24px; font-family: "VodafoneLight", Arial, sans-serif; font-size: 18px; font-kerning: none; text-align: center; text-overflow: ellipsis; text-decoration: none; outline: none; pointer-events: auto; user-select: none; white-space: nowrap; vertical-align: middle; box-sizing: border-box; background: rgb(230, 0, 0); color: rgb(255, 255, 255); border: 1px solid rgb(230, 0, 0);}';
	  styleString += '#popular-offers-container .tabs .tab-item .primaryBtn:hover{background: rgb(153, 0, 0); border-color: rgb(153, 0, 0);}';
  
	  styleString += '#popular-offers-container .tabs .tab-item .plan-head{display: flex}';
	  styleString += '#popular-offers-container .tabs .tab-item .plan-head .plan-data{padding: 0px 8px; width: 50%;display: inline-flex; justify-content: center; align-items: center; flex-direction: column; background-color: white;}';
	  styleString += '#popular-offers-container .tabs .tab-item .plan-head .plan-data-allowance-amount-section{font-family: VodafoneRegularBold, Arial, sans-serif;  font-size: 16px;}';
	  styleString += '#popular-offers-container .tabs .tab-item .plan-head .plan-data-allowance-amount-section .data{line-height: 40px; font-size: 40px;}';
	  styleString += '#popular-offers-container .tabs .tab-item .plan-head .was-data{text-decoration: line-through; font-family: VodafoneRegular, Arial, sans-serif; font-size: 14px;}';
	  styleString += '#popular-offers-container .tabs .tab-item .plan-head .dominoText{    font-family: VodafoneRegular, Arial, sans-serif; font-size: 11px; line-height: 1; text-align: center;}';
	  styleString += '#popular-offers-container .tabs .tab-item .plan-head hr{border: 1px solid rgb(204, 204, 204); margin: 18px 0px;height: auto;}';
	  styleString += '#popular-offers-container .tabs .tab-item .plan-head .plan-price{padding: 0px 8px; width: 50%;display: inline-flex; justify-content: start; align-items: center; flex-direction: column; background-color: white;}';
	  styleString += '#popular-offers-container .tabs .tab-item .plan-head .plan-price span{}';
	  styleString += '#popular-offers-container .tabs .tab-item .plan-head .plan-price .price{     font-family: VodafoneRegularBold, Arial, sans-serif;font-size: 40px; line-height: 1; color: rgb(230, 0, 0); margin: 0;}';
	  styleString += '#popular-offers-container .tabs .tab-item .plan-head .plan-price .price:before{content:\'$\'; font-size:12px;}';
	  styleString += '#popular-offers-container .tabs .tab-item .plan-head .plan-price .was-price{text-decoration: line-through; font-family: VodafoneRegular, Arial, sans-serif; font-size: 14px;}';
	  styleString += '#popular-offers-container .tabs .tab-item .plan-head .plan-price .expiry{font-family: VodafoneRegular, Arial, sans-serif; font-size: 11px; line-height: 1; text-align: center;}';
	  styleString += '#popular-offers-container .tabs .tab-item .plan-name{background-color: rgb(235, 235, 235); position: relative; margin: 16px -16px; padding: 10px; font-size: 16px;}';
	  styleString += '#popular-offers-container .tabs .tab-item .plan-title{font-family:VodafoneRegularBold, Arial, sans-serif; font-size: 14px; line-height: 1.2;padding-bottom: 10px;}';
	  styleString += '#popular-offers-container .tabs .tab-item .plan-desc{font-family:font-family VodafoneRegular, Arial, sans-serif; font-size: 12px; line-height: 1.2; }';
  
	  styleString += '#popular-offers-container .tabs .slick-arrow{z-index:2; text-indent: -99999px; cursor: pointer; border: none; top: 39%; width: 48px; height: 48px; border-radius: 24px; box-shadow: rgba(130, 130, 130, 0.5) 0px 1px 4px 1px; position: absolute; background-color: rgb(255, 255, 255) !important;}';
	  styleString += '#popular-offers-container .tabs .slick-arrow.slick-prev{left: -10px;}';
	  styleString += '#popular-offers-container .tabs .slick-arrow.slick-prev:before{display: block; content: ""; width: 36px; height: 36px; position: absolute; left: 3px; top: 24px; transform: translateY(-50%) rotate(90deg); background-image: url("data:image/svg+xml, %3Csvg width=\'36\' height=\'36\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cpath fill=\'none\' d=\'M32 0H0v32h32z\' /%3E%3Cpath stroke=\'%23333333\' stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M4.667 11.333L16 22.667l11.333-11.334\' /%3E%3C/g%3E%3C/svg%3E");background-repeat: no-repeat; background-position: right center; background-size: contain;}';
	  styleString += '#popular-offers-container .tabs .slick-arrow.slick-next{right: -10px;}';
	  styleString += '#popular-offers-container .tabs .slick-arrow.slick-next:before{display: block; content: ""; width: 36px; height: 36px; position: absolute; left: 9px; top: 22px; transform: translateY(-50%) rotate(270deg); background-image: url("data:image/svg+xml, %3Csvg width=\'36\' height=\'36\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cpath fill=\'none\' d=\'M32 0H0v32h32z\' /%3E%3Cpath stroke=\'%23333333\' stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M4.667 11.333L16 22.667l11.333-11.334\' /%3E%3C/g%3E%3C/svg%3E");background-repeat: no-repeat; background-position: right center; background-size: contain;}';
	  styleString += '#popular-offers-container .tabs .slick-arrow.slick-disabled{display: none !important;}';
  
	  style.id = 'offerTabsStyle';
	  style.textContent = styleString;
	  document.head.append(style);
  
	  var slickStyle = document.createElement('link');
	  slickStyle.rel = 'stylesheet';
	  slickStyle.type = 'text/css';
	  slickStyle.href = 'https://www.vodafone.com.au/content/dam/vha/croassets/slick.min.css';
	  document.body.appendChild(slickStyle);
  
    var tabsHTML = '<div id=\'popular-offers-container\'>';
    tabsHTML += '<div class=\'popular-offers-tabs\'>';
    for (var i = 0; i < tabs.length; i++) {
      var tabId = 'tab-' + tabs[i].title;
      var checked = i === 0 ? 'checked' : '';
      tabsHTML += `<label class='popular-offers-tab ${checked}' for='${tabId}' role='tab' aria-selected='${i === 0 ? 'true' : 'false'}' aria-controls='panel' tabindex='${i}'>${tabs[i].title}</label>`;
    }
    tabsHTML += '</div>';
    tabsHTML += '<ul id=\'tabs-popular-offers\' class=\'tabs\' role=\'tablist\'>';
    for (var i = 0; i < tabs.length; i++) {
      var tabId = 'tab-' + tabs[i].title;
      var tabContentId = 'tab-content-' + tabs[i].title;
      var checked = i === 0 ? 'checked' : '';
      tabsHTML += `<li><input type='radio' name='tabs' id='${tabId}' ${checked} />`;
      tabsHTML += `<div id='${tabContentId}' class='tab-content' role='tabpanel' aria-labelledby='${tabId}' aria-hidden='${i === 0 ? 'false' : 'true'}'>`;
      tabsHTML += `</div>`;
      tabsHTML += '</li>';
    }
    tabsHTML += '</ul></div>';
  

    $('#carousel-block-view-primaryPlans').before(tabsHTML);
  

    $('.popular-offers-tabs label.popular-offers-tab').on('click', function() {
      jQuery('.tab-content').slick('unslick');
      applySlick();
  
      $('.popular-offers-tab.checked').removeClass('checked');
      $(this).addClass('checked');
    });
  
    function applySlick() {
      jQuery('.tab-content').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 710,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    }
  
    applySlick();
  
    $('#carousel-block-view-primaryPlans').hide();
  
    for (var i = 0; i < tabs.length; i++) {
      var tabContentId = 'tab-content-' + tabs[i].title;
      var planCard = $(`[data-testid="${tabs[i].testid}"]`);
      $(`#${tabContentId}`).append(planCard);
    }
  });