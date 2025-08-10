var DCPXXXXXXFn = {
  aid: 'DCP-XXXXXX',
  config:{
      checkingKey:'',
      targetPaths: ['/'],
      loadedData: false,
      requiredItems:{
          //'CATMBBMODEMPOSTPAIDSIMOPLANS':   ['AU12486', 'AU12487'],
          //'CATMBBTABLETPOSTPAIDSIMOPLANS':  ['AU12486', 'AU12487'],
          'CATPOSTPAIDSIMOPLANS': ['AU12629', 'AU12630', 'AU12631', ],
          //'CATMBBTABLETPOSTPAIDPLANS':  ['AU12484', 'AU12485'],
          //'CATPOSTPAIDHANDSETPLANS':  ['AU12626', 'AU12627', 'AU12628'],
          //'CATNBNPLANS': ['AU12587', 'AU12588', 'AU12589', 'AU12590', 'AU12595'],
          //'CATFHWPLANS':  ['AU12604',],
          //'CAT5GFHWPLANS':  ['AU12605', 'AU12606', 'AU12607'],
          //'CATPREPAIDCOMBOPLUSPLANS':  ['PRD_PREPAID_$250PREPAID_PLUS_STARTER_PACK', 'PRD_PREPAID_$35PREPAID_PLUS_STARTER_PACK'],
          //'CATPREPAIDPAYANDGOPLANS': [],
          //'CATPOSTPAIDSIMOPLANSTPGSM': [],
          'CATPOSTPAIDHANDSETS': ['IPH_16E', 'IPH_16_PRO_MAX', 'SM_G_S25_ULTRA_5G', 'PXL_9_PRO_5G', 'PXL_9_PRO_XL_5G'],
          'CATMBBPOSTPAIDTABLETS': ['IPAD_11_GEN_A16_2025','13_INCH_IPAD_AIR_M3_2025', '11_INCH_IPAD_PRO_M4_2024', 'SAM_GAL_TAB_S10_ULTRA_5G', 'SAM_GAL_TAB_S9_5G', '11_INCH_IPAD_AIR_M3_2025'],
          'CATPOSTPAIDWEARABLES': ['AW_SERIES_10', 'AW_SERIES_ULTRA2','AW_SERIES_SE_2GEN','SW_SERIES_ULTRA1', 'SW_SERIES_5'],
          'CATPREPAIDHANDSETS': ['HS_PREPAID_PULSE+_4G_BDL', 'HS_PREPAID_MOTOROLA_E14_4G_BDL', 'HS_PREPAID_OPPO_A60_5G_BDL', 'HS_PREPAID_V_PRO_2_4G_BDL', 'HS_PREPAID_V_LITE_2_4G_BDL']
      },
      endpoints: {
          'CATMBBMODEMPOSTPAIDSIMOPLANS':   'https://api.vodafone.com.au/plan/mbb-postpaid-simo-modem?serviceType=New',
          'CATMBBTABLETPOSTPAIDSIMOPLANS':  'https://api.vodafone.com.au/plan/mbb-postpaid-simo-tablet?serviceType=New',
          'CATPOSTPAIDSIMOPLANS': 'https://api.vodafone.com.au/plan/postpaid-simo?serviceType=New',
          'CATMBBTABLETPOSTPAIDPLANS':  'https://api.vodafone.com.au/plan/tablet?serviceType=New',
          'CATPOSTPAIDHANDSETPLANS':  'https://api.vodafone.com.au/plan/postpaid?serviceType=New',
          'CATNBNPLANS': 'https://api.vodafone.com.au/plan/nbn?serviceType=New',
          'CATFHWPLANS':  'https://api.vodafone.com.au/plan/fhw-4g?serviceType=New',
          'CAT5GFHWPLANS':  'https://api.vodafone.com.au/plan/fhw-5g?serviceType=New',
          'CATPREPAIDCOMBOPLUSPLANS':  'https://api.vodafone.com.au/plan/prepaid-combo-plus?serviceType=New',
          'CATPREPAIDPAYANDGOPLANS': 'https://api.vodafone.com.au/plan/prepaid-pay-and-go?serviceType=New',
          'CATPOSTPAIDSIMOPLANSTPGSM': 'https://api.vodafone.com.au/plan/postpaid-simo-tpg-sm?serviceType=New',
          'CATPOSTPAIDHANDSETS': 'https://api.vodafone.com.au/device/postpaid?serviceType=New',
          'CATMBBPOSTPAIDTABLETS': 'https://api.vodafone.com.au/device/tablet?serviceType=New',
          'CATPOSTPAIDWEARABLES': 'https://api.vodafone.com.au/device/wearables?serviceType=New',
          'CATPREPAIDHANDSETS': 'https://api.vodafone.com.au/device/prepaid?serviceType=New',
      }
  },
  observe: function(){
    croWD.debug('###### observe');
    croWD.hotbed.listen('croPageTrack', function(observable, eventType, data) {
      croWD.debug('#########DATA', data);
      DCPXXXXXXFn.init(data.href);
    });
    if(DCPXXXXXXFn.config.targetPaths.includes(window.location.pathname)){
      DCPXXXXXXFn.init(document.location.href);
    }
  },
  drawTabCanvas: function(){
    //style for tabs
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


    //html placeholder for tabs
    var tabsHTML = '<div id=\'popular-offers-container\'>';
    tabsHTML += '<div class=\'popular-offers-tabs\'>';
    tabsHTML += '<label class=\'popular-offers-tab checked\' for=\'tab-Phones\' role=\'tab\' aria-selected=\'true\'  aria-controls=\'panel\'  tabindex=\'0\'>Phones</label>';
    tabsHTML += '<label class=\'popular-offers-tab\' for=\'tab-SIMO\' role=\'tab\' aria-selected=\'false\'  aria-controls=\'panel\'  tabindex=\'1\'>SIM Only Plans</label>';
    tabsHTML += '<label class=\'popular-offers-tab\' for=\'tab-Prepaid\' role=\'tab\' aria-selected=\'false\'  aria-controls=\'panel\'  tabindex=\'2\'>Prepaid</label>';
    //tabsHTML += '<label class=\'popular-offers-tab\' for=\'tab-NBNInternet\' role=\'tab\' aria-selected=\'false\'  aria-controls=\'panel\'  tabindex=\'3\'>nbn® and Internet</label>';
    tabsHTML += '<label class=\'popular-offers-tab\' for=\'tab-Tablet\' role=\'tab\' aria-selected=\'false\'  aria-controls=\'panel\'  tabindex=\'4\'>iPad and Tablets</label>';
    tabsHTML += '<label class=\'popular-offers-tab\' for=\'tab-Accessories\' role=\'tab\' aria-selected=\'false\'  aria-controls=\'panel\'  tabindex=\'5\'>Accessories</label>';
    //tabsHTML += '<label class=\'popular-offers-tab\' for=\'tab-CustomerBenefits\' role=\'tab\' aria-selected=\'false\'  aria-controls=\'panel\'  tabindex=\'6\'>Customer Benefits</label>';
    tabsHTML +=' </div>';

    tabsHTML += '<ul id=\'tabs-popular-offers\' class=\'tabs\' role=\'tablist\'>';
    tabsHTML += '<li><input type=\'radio\' name=\'tabs\' id=\'tab-Phones\' checked />';     
//     tabsHTML += '<label for=\'tab-Phones\' role=\'tab\' aria-selected=\'true\'  aria-controls=\'panel\'  tabindex=\'0\'>Phones</label>';
    tabsHTML += '<div id=\'tab-content-Phones\' class=\'tab-content\' role=\'tabpanel\'  aria-labelledby=\'Phones\'  aria-hidden=\'false\'>';
    tabsHTML += '</div>';
    tabsHTML += '</li>';

    tabsHTML += '<li><input type=\'radio\' name=\'tabs\' id=\'tab-SIMO\' />';     
//     tabsHTML += '<label for=\'tab-SIMO\' role=\'tab\' aria-selected=\'false\'  aria-controls=\'panel\'  tabindex=\'1\'>SIM Only Plans</label>';
    tabsHTML += '<div id=\'tab-content-SIMO\' class=\'tab-content\' role=\'tabpanel\'  aria-labelledby=\'SIMO\'  aria-hidden=\'true\'>';
    tabsHTML += '</div>';
    tabsHTML += '</li>';

    tabsHTML += '<li><input type=\'radio\' name=\'tabs\' id=\'tab-Prepaid\' />';     
//     tabsHTML += '<label for=\'tab-Prepaid\' role=\'tab\' aria-selected=\'false\'  aria-controls=\'panel\'  tabindex=\'2\'>Prepaid</label>';
    tabsHTML += '<div id=\'tab-content-Prepaid\' class=\'tab-content\' role=\'tabpanel\'  aria-labelledby=\'Prepaid\'  aria-hidden=\'true\'>';
    tabsHTML += '</div>';
    tabsHTML += '</li>';

//     tabsHTML += '<li><input type=\'radio\' name=\'tabs\' id=\'tab-NBNInternet\' />';
// //     tabsHTML += '<label for=\'tab-NBNInternet\' role=\'tab\' aria-selected=\'false\'  aria-controls=\'panel\'  tabindex=\'3\'>nbn® and Internet</label>';
//     tabsHTML += '<div id=\'tab-content-NBNInternet\' class=\'tab-content\' role=\'tabpanel\'  aria-labelledby=\'NBNInternet\'  aria-hidden=\'true\'>';
//     tabsHTML += '</div>';
//     tabsHTML += '</li>';

    tabsHTML += '<li><input type=\'radio\' name=\'tabs\' id=\'tab-Tablet\' />';     
//     tabsHTML += '<label for=\'tab-Tablet\' role=\'tab\' aria-selected=\'false\'  aria-controls=\'panel\'  tabindex=\'4\'>iPad and Tablets</label>';
    tabsHTML += '<div id=\'tab-content-Tablet\' class=\'tab-content\' role=\'tabpanel\'  aria-labelledby=\'Tablet\'  aria-hidden=\'true\'>';
    tabsHTML += '</div>';
    tabsHTML += '</li>';

    tabsHTML += '<li><input type=\'radio\' name=\'tabs\' id=\'tab-Accessories\' />';
//     tabsHTML += '<label for=\'tab-Accessories\' role=\'tab\' aria-selected=\'false\'  aria-controls=\'panel\'  tabindex=\'5\'>Accessories</label>';
    tabsHTML += '<div id=\'tab-content-Accessories\' class=\'tab-content\' role=\'tabpanel\'  aria-labelledby=\'Accessories\'  aria-hidden=\'true\'>';
    tabsHTML += '</div>';
    tabsHTML += '</li>';

//     tabsHTML += '<li><input type=\'radio\' name=\'tabs\' id=\'tab-CustomerBenefits\' />';
// //     tabsHTML += '<label for=\'tab-CustomerBenefits\' role=\'tab\' aria-selected=\'false\'  aria-controls=\'panel\'  tabindex=\'6\'>Customer Benefits</label>';
//     tabsHTML += '<div id=\'tab-content-CustomerBenefits\' class=\'tab-content\' role=\'tabpanel\'  aria-labelledby=\'CustomerBenefits\'  aria-hidden=\'true\'>';
//     tabsHTML += '</div>';
//     tabsHTML += '</li>';


    tabsHTML += '</ul></div>';

    if($('#tabs-popular-offers').length == 0){
      $('vha-popular-products').hide();
      $('vha-popular-products').before(tabsHTML);
      setTimeout(function(){
        jQuery('.popular-offers-tabs').slick({
          dots: false,
          infinite: false,
          speed: 300,
          variableWidth: true,
          //centerMode: true,
          //centerPadding: '20px',
          prevArrow: '',
          nextArrow: '',
          slidesToShow: 5,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2
              }
            }

          ]
        });
      },300);
    }

    $('.popular-offers-tabs label.popular-offers-tab').on('click', function(){
      jQuery('.tab-content').slick('unslick');
      DCPXXXXXXFn.applySlick();

      $('.popular-offers-tab.checked').removeClass('checked');
      $(this).addClass('checked');
    });
  },
  clearCode(inputStr){
    croWD.debug('inputStrinputStrinputStrinputStrinputStr');
    var parser = new DOMParser();
    var decodedStr = parser.parseFromString(inputStr, 'text/html').documentElement.textContent;
    var noTagsStr = decodedStr.replace(/<.*?>/g, '');
    var clearStr = noTagsStr
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')

    return clearStr;
  },
  drawCard: function(sortedData){
    var html = '';
    switch (sortedData.catalog) {
//       case "CATMBBMODEMPOSTPAIDSIMOPLANS":
//         sortedData.items.forEach(function(item){
//           var altText = item.planImage.altText? item.planImage.altText : item.planName;
//           var planImg = item.planImage.imageUrl? item.planImage.imageUrl : 'https://www.vodafone.com.au/images/icons/case-study.svg';
//           html += '<div class=\'tab-item\'><img width=\'60px\' height=\'60px\' alt=' + altText + ' src='+ planImg +'>';
//           html += '<h4>' + item.planName + '</h4>';
//           html += '<a class=\'popular-phones-cta primary\' href=\'??????????????\'>'+ item.ctaLabel +'</a>';
//           html += '</div>';
//         })

//         break;
//       case "CATMBBTABLETPOSTPAIDSIMOPLANS":
//         sortedData.items.forEach(function(item){
//           var altText = item.planImage.altText? item.planImage.altText : item.planName;
//           var planImg = item.planImage.imageUrl? item.planImage.imageUrl : 'https://www.vodafone.com.au/images/icons/case-study.svg';
//           html += '<div class=\'tab-item\'><img width=\'60px\' height=\'60px\' alt=' + altText + ' src='+ planImg +'>';
//           html += '<h4>' + item.planName + '</h4>';
//           html += '<a class=\'popular-phones-cta primary\' href=\'??????????????\'>'+ item.ctaLabel +'</a>';
//           html += '</div>';
//         })

//         break;
      case "CATPOSTPAIDSIMOPLANS":
         sortedData.items.forEach(function(item){
          var altText = item.planImage.altText? item.planImage.altText : item.planName;
          var planImg = item.planImage.imageUrl? item.planImage.imageUrl : 'https://www.vodafone.com.au/images/icons/case-study.svg';
          html += '<a class=\'popular-phones-cta primary\' href=\'https://www.vodafone.com.au/cart?plan='+item.planId+'&planType=prepaid-combo-plus\'>';
          html += '<div class=\'tab-item\'>';
          html += '<div class=\'plan-head\'><div class=\'plan-data\'>';
          if(item.includePromotionPlanData){
            html += '<div class=\'plan-data-allowance-amount-section\'><span class=\'data\'>'+item.includePromotionPlanData.replace('GB', '')+'</span><span>GB</span></div><div class=\'was-data\'>'+item.planData+'</div>';
          }
          else{
            html += '<div class=\'plan-data-allowance-amount-section\'><span class=\'data\'>'+item.planData.replace('GB', '')+'</span><span>GB</span></div><div>&nbsp;</div>';
          }
//           html += '<div class=\'dominoText\'>'+item.subHeadingPrimary+'</div>'
          html+= '</div>';
          html += '<hr><div class=\'plan-price\'>';
          if(item.discountedRecurringCharge){
            html +=' <h5 class=\'price\'>'+item.discountedRecurringCharge+'</h5> <div class=\'was-price\'>$'+item.recurringCharge+'</div>';
          }
          else{
            html +=' <h5 class=\'price\'>'+item.recurringCharge+'</h5> <div >&nbsp;</div>';
          }
          //html += '<div class=\'expiry\'>'+item.validity.replace('days', 'day')+' expiry</div>';
          html +=' </div></div>';
          html += '<div data-testid=\'plan-card-title-'+item.planId+'\' class=\'plan-name\' ><span>'+item.planName+'</span></div>';
          html += '<div class=\'plan-title\'>'+item.planTitle+'</div>';
          html += '<div class=\'plan-desc\'>'+DCPXXXXXXFn.clearCode(item.planDescription)+'</div>';
          
          html += '<div class=\'primaryBtn\'>'+ item.ctaLabel +'</div>';
          html += '</div></a>';
        })
        $('#tab-content-SIMO').append(html);
        break;
//       case "CATMBBTABLETPOSTPAIDPLANS":
//         sortedData.items.forEach(function(item){
//           var altText = item.planImage.altText? item.planImage.altText : item.planName;
//           var planImg = item.planImage.imageUrl? item.planImage.imageUrl : 'https://www.vodafone.com.au/images/icons/case-study.svg';
//           html += '<div class=\'tab-item\'><img width=\'60px\' height=\'60px\' alt=' + altText + ' src='+ planImg +'>';
//           html += '<h4>' + item.planName + '</h4>';
//           html += '<a class=\'popular-phones-cta primary\' href=\'??????????????\'>'+ item.ctaLabel +'</a>';
//           html += '</div>';
//         })
//         
//         break;
//       case "CATPOSTPAIDHANDSETPLANS":
//         sortedData.items.forEach(function(item){
//           var altText = item.planImage.altText? item.planImage.altText : item.planName;
//           var planImg = item.planImage.imageUrl? item.planImage.imageUrl : 'https://www.vodafone.com.au/images/icons/case-study.svg';
//           html += '<div class=\'tab-item\'><img width=\'60px\' height=\'60px\' alt=' + altText + ' src='+ planImg +'>';
//           html += '<h4>' + item.planName + '</h4>';
//           html += '<a class=\'popular-phones-cta primary\' href=\'??????????????\'>'+ item.ctaLabel +'</a>';
//           html += '</div>';
//         })
//         
//         break;
//       case "CATNBNPLANS":
//         croWD.debug('######', sortedData);
//         sortedData.items.forEach(function(item){
//           var altText = item.planImage.altText? item.planImage.altText : item.planName;
//           var planImg = item.planImage.imageUrl? item.planImage.imageUrl : 'https://www.vodafone.com.au/images/icons/case-study.svg';
//           html += '<div class=\'tab-item\'><img width=\'60px\' height=\'60px\' alt=' + altText + ' src='+ planImg +'>';
//           html += '<h4>' + item.planName + '</h4>';
//           html += '<a class=\'popular-phones-cta primary\' href=\'??????????????\'>'+ item.ctaLabel +'</a>';
//           html += '</div>';
//         });
//         $('#tab-content-NBNInternet').append(html);
//         break;
//       case "CATFHWPLANS":
//         sortedData.items.forEach(function(item){
//           var altText = item.planImage.altText? item.planImage.altText : item.planName;
//           var planImg = item.planImage.imageUrl? item.planImage.imageUrl : 'https://www.vodafone.com.au/images/icons/case-study.svg';
//           html += '<div class=\'tab-item\'><img width=\'60px\' height=\'60px\' alt=' + altText + ' src='+ planImg +'>';
//           html += '<h4>' + item.planName + '</h4>';
//           html += '<a class=\'popular-phones-cta primary\' href=\'??????????????\'>'+ item.ctaLabel +'</a>';
//           html += '</div>';
//         })
//         $('#tab-content-NBNInternet').append(html);
//         break;
//       case "CAT5GFHWPLANS":
//         sortedData.items.forEach(function(item){
//           var altText = item.planImage.altText? item.planImage.altText : item.planName;
//           var planImg = item.planImage.imageUrl? item.planImage.imageUrl : 'https://www.vodafone.com.au/images/icons/case-study.svg';
//           html += '<div class=\'tab-item\'><img width=\'60px\' height=\'60px\' alt=' + altText + ' src='+ planImg +'>';
//           html += '<h4>' + item.planName + '</h4>';
//           html += '<a class=\'popular-phones-cta primary\' href=\'??????????????\'>'+ item.ctaLabel +'</a>';
//           html += '</div>';
//         })
//         $('#tab-content-NBNInternet').append(html);
//         break;
      case "CATPREPAIDCOMBOPLUSPLANS":
        sortedData.items.forEach(function(item){
          var altText = item.planImage.altText? item.planImage.altText : item.planName;
          var planImg = item.planImage.imageUrl? item.planImage.imageUrl : 'https://www.vodafone.com.au/images/icons/case-study.svg';
          html += '<a class=\'popular-phones-cta primary\' href=\'https://www.vodafone.com.au/cart?plan='+item.planId+'&planType=prepaid-combo-plus\'>';
          html += '<div class=\'tab-item\'>';
          html += '<div class=\'plan-head\'><div class=\'plan-data\'>';
          if(item.includePromotionPlanData){
            html += '<div class=\'plan-data-allowance-amount-section\'><span class=\'data\'>'+item.includePromotionPlanData.replace('GB', '')+'</span><span>GB</span></div><div class=\'was-data\'>'+item.planData+'</div>';
          }
          else{
            html += '<div class=\'plan-data-allowance-amount-section\'><span class=\'data\'>'+item.planData.replace('GB', '')+'</span><span>GB</span></div><div>&nbsp;</div>';
          }
          html += '<div class=\'dominoText\'>'+item.subHeadingPrimary+'</div></div>';
          html += '<hr><div class=\'plan-price\'>';
          if(item.discountedOneTimeCharge){
            html +=' <h5 class=\'price\'>'+item.discountedOneTimeCharge+'</h5> <div class=\'was-price\'>$'+item.oneTimeCharge+'</div>';
          }
          else{
            html +=' <h5 class=\'price\'>'+item.oneTimeCharge+'</h5> <div >&nbsp;</div>';
          }
          html += '<div class=\'expiry\'>'+item.validity.replace('days', 'day')+' expiry</div></div></div>';
          html += '<div data-testid=\'plan-card-title-'+item.planId+'\' class=\'plan-name\' ><span>'+item.planName+'</span></div>';
          html += '<div class=\'plan-title\'>'+item.planTitle+'</div>';
          html += '<div class=\'plan-desc\'>'+DCPXXXXXXFn.clearCode(item.planDescription)+'</div>';
          
          html += '<div class=\'primaryBtn\'>'+ item.ctaLabel +'</div>';
          html += '</div></a>';
        })
        $('#tab-content-Prepaid').append(html);
        break;
//       case "CATPREPAIDPAYANDGOPLANS":
//         sortedData.items.forEach(function(item){
//           var altText = item.planImage.altText? item.planImage.altText : item.planName;
//           var planImg = item.planImage.imageUrl? item.planImage.imageUrl : 'https://www.vodafone.com.au/images/icons/case-study.svg';
//           html += '<div class=\'tab-item\'><img width=\'60px\' height=\'60px\' alt=' + altText + ' src='+ planImg +'>';
//           html += '<h4>' + item.planName + '</h4>';
//           html += '<a class=\'popular-phones-cta primary\' href=\'??????????????\'>'+ item.ctaLabel +'</a>';
//           html += '</div>';
//         })
//         
//         break;
//       case "CATPOSTPAIDSIMOPLANSTPGSM":
//         sortedData.items.forEach(function(item){
//           var altText = item.planImage.altText? item.planImage.altText : item.planName;
//           var planImg = item.planImage.imageUrl? item.planImage.imageUrl : 'https://www.vodafone.com.au/images/icons/case-study.svg';
//           html += '<div class=\'tab-item\'><img width=\'60px\' height=\'60px\' alt=' + altText + ' src='+ planImg +'>';
//           html += '<h4>' + item.planName + '</h4>';
//           html += '<a class=\'popular-phones-cta primary\' href=\'??????????????\'>'+ item.ctaLabel +'</a>';
//           html += '</div>';
//         })
//         
//         break;
      case "CATPOSTPAIDHANDSETS":
        sortedData.items.forEach(function(item){
          var minCost = parseFloat(item.recurringCharge) * 36;
          minCost =  minCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          html += '<a class=\'hyperCard\' href=\'https://www.vodafone.com.au/mobile/mobile-phones/'+ item.manufacturer.toLowerCase()+'/'+ item.slug+'\'>';
          html += '<div class=\'tab-item\'><img width=\'60px\' height=\'60px\' alt=' + item.name + '  src=' + item.imageUrl+ '>';
          html += '<p class=\'brand\'>' + item.manufacturer + '</p>';
          html += '<p class=\'device-name\'>' + item.name + '</p>';
          html += '<p class=\'device-prefix\'>Device from</p>';
          html += '<p class=\'device-price\'><span class=\'dollar\'>$</span><span class=\'device-recurringCharge\'>'+ item.recurringCharge+'</span><span class=\'mth\'>per month</span></p>';
          html += '<p class=\'device-mincost\'>Min cost $'+ minCost +' over 36 months. Plan cost additional.</p>';
          html += '<div class=\'primaryBtn\'>Select this device</div>';
          html += '</div>';
          html += '</a>';
        })
        $('#tab-content-Phones').append(html);
        break;
      case "CATMBBPOSTPAIDTABLETS":
        sortedData.items.forEach(function(item){
          var minCost = parseFloat(item.recurringCharge) * 36;
          minCost =  minCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          html += '<a class=\'hyperCard\' href=\'https://www.vodafone.com.au/mobile/mobile-phones/'+ item.manufacturer.toLowerCase()+'/'+ item.slug+'\'>';
          html += '<div class=\'tab-item\'><img width=\'60px\' height=\'60px\' alt=' + item.name + '  src=' + item.imageUrl+ '>';
          html += '<p class=\'brand\'>' + item.manufacturer + '</p>';
          html += '<p class=\'device-name\'>' + item.name + '</p>';
          html += '<p class=\'device-prefix\'>Device from</p>';
          html += '<p class=\'device-price\'><span class=\'dollar\'>$</span><span class=\'device-recurringCharge\'>'+ item.recurringCharge+'</span><span class=\'mth\'>per month</span></p>';
          html += '<p class=\'device-mincost\'>Min cost $'+ minCost +' over 36 months. Plan cost additional.</p>';
          html += '<div class=\'primaryBtn\'>Select this device</div>';
          html += '</div>';
          html += '</a>';
        })
        $('#tab-content-Tablet').append(html);
        break;
      case "CATPOSTPAIDWEARABLES":
        sortedData.items.forEach(function(item){
          var minCost = parseFloat(item.recurringCharge) * 36;
          minCost =  minCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          html += '<a class=\'hyperCard\' href=\'https://www.vodafone.com.au/mobile/mobile-phones/'+ item.manufacturer.toLowerCase()+'/'+ item.slug+'\'>';
          html += '<div class=\'tab-item\'><img width=\'60px\' height=\'60px\' alt=' + item.name + '  src=' + item.imageUrl+ '>';
          html += '<p class=\'brand\'>' + item.manufacturer + '</p>';
          html += '<p class=\'device-name\'>' + item.name + '</p>';
          html += '<p class=\'device-prefix\'>Device from</p>';
          html += '<p class=\'device-price\'><span class=\'dollar\'>$</span><span class=\'device-recurringCharge\'>'+ item.recurringCharge+'</span><span class=\'mth\'>per month</span></p>';
          html += '<p class=\'device-mincost\'>Min cost $'+ minCost +' over 36 months. Plan cost additional.</p>';
          html += '<div class=\'primaryBtn\'>Select this device</div>';
          html += '</div>';
          html += '</a>';
        })
        $('#tab-content-Accessories').append(html);
        break;
      case "CATPREPAIDHANDSETS":
        sortedData.items.forEach(function(item){
          var minCost = parseFloat(item.recurringCharge) * 36;
          minCost =  minCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          html += '<a class=\'hyperCard\' href=\'https://www.vodafone.com.au/mobile/mobile-phones/'+ item.manufacturer.toLowerCase()+'/'+ item.slug+'\'>';
          html += '<div class=\'tab-item\'><img width=\'60px\' height=\'60px\' alt=' + item.name + '  src=' + item.imageUrl+ '>';
          html += '<p class=\'brand\'>' + item.manufacturer + '</p>';
          html += '<p class=\'device-name\'>' + item.name + '</p>';
          if(item.discountedRecurringCharge){
            html += '<p class=\'device-prefix\'><span class=\'wasPrice\'>$'+ item.oneTimeCharge+'</span></p>';
            html += '<p class=\'device-price\'><span class=\'dollar\'>$</span><span class=\'device-recurringCharge\'>'+ item.discountedRecurringCharge+'</span></p>';
          }
          else{
            html += '<p class=\'device-prefix\'>&nbsp;</p>';
            html += '<p class=\'device-price\'><span class=\'dollar\'>$</span><span class=\'device-recurringCharge\'>'+ item.oneTimeCharge+'</span></p>';
          }
          //html += '<p class=\'device-mincost\'></p>';
          html += '<div class=\'primaryBtn\'>Select this device</div>';
          html += '</div>';
          html += '</a>';
        })
        $('#tab-content-Prepaid').append(html);
        break;
    }
    if(DCPXXXXXXFn.config.loadedData){
      setTimeout(function(){
        DCPXXXXXXFn.applySlick();
        $('#tabs-popular-offers').css({'position': 'relative', 'zIndex': '1' });
      }, 500);
    }
  },
  applySlick: function(){
    jQuery('.tab-content').slick({
      dots: false,
      infinite: false,
      speed: 300,
      //centerMode: true,
      //centerPadding: '20px',
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
  },
  getData: function(res){
    var sortedData = {'catalog':'', 'items':[]};
    try{
      key = res.faqs.identifier
    }
    catch(e){
      key = res.catalogCode;
    }
    sortedData.catalog = key;
    switch (key) {
      case "CATMBBMODEMPOSTPAIDSIMOPLANS":
        res.planListing.plans.forEach(function(item){
          if(DCPXXXXXXFn.config.requiredItems[key].includes(item.id)){
            sortedData.items.push(item);
          }
        })
        croWD.debug(key + ' sortedData: ', sortedData);
        DCPXXXXXXFn.drawCard(sortedData);
        break;
      case "CATMBBTABLETPOSTPAIDSIMOPLANS":
        res.planListing.plans.forEach(function(item){
          if(DCPXXXXXXFn.config.requiredItems[key].includes(item.id)){
            sortedData.items.push(item);
          }
        })
        croWD.debug(key + ' sortedData: ', sortedData);
        DCPXXXXXXFn.drawCard(sortedData);
        break;
      case "CATPOSTPAIDSIMOPLANS":
        res.planListing.plans.forEach(function(item){
          if(DCPXXXXXXFn.config.requiredItems[key].includes(item.id)){
            sortedData.items.push(item);
          }
        })
        croWD.debug(key + ' sortedData: ', sortedData);
        DCPXXXXXXFn.drawCard(sortedData);
        break;
      case "CATMBBTABLETPOSTPAIDPLANS":
        res.planListing.plans.forEach(function(item){
          if(DCPXXXXXXFn.config.requiredItems[key].includes(item.id)){
            sortedData.items.push(item);
          }
        })
        croWD.debug(key + ' sortedData: ', sortedData);
        DCPXXXXXXFn.drawCard(sortedData);
        break;
      case "CATPOSTPAIDHANDSETPLANS":
        res.planListing.plans.forEach(function(item){
          if(DCPXXXXXXFn.config.requiredItems[key].includes(item.id)){
            sortedData.items.push(item);
          }
        })
        croWD.debug(key + ' sortedData: ', sortedData);
        DCPXXXXXXFn.drawCard(sortedData);
        break;
      case "CATNBNPLANS":
        res.planListing.plans.forEach(function(item){
          if(DCPXXXXXXFn.config.requiredItems[key].includes(item.id)){
            sortedData.items.push(item);
          }
        })
        croWD.debug(key + ' sortedData: ', sortedData);
        DCPXXXXXXFn.drawCard(sortedData);
        break;
      case "CATFHWPLANS":
        res.planListing.plans.forEach(function(item){
          if(DCPXXXXXXFn.config.requiredItems[key].includes(item.id)){
            sortedData.items.push(item);
          }
        })
        croWD.debug(key + ' sortedData: ', sortedData);
        DCPXXXXXXFn.drawCard(sortedData);
        break;
      case "CAT5GFHWPLANS":
        res.planListing.plans.forEach(function(item){
          if(DCPXXXXXXFn.config.requiredItems[key].includes(item.id)){
            sortedData.items.push(item);
          }
        })
        croWD.debug(key + ' sortedData: ', sortedData);
        DCPXXXXXXFn.drawCard(sortedData);
        break;
      case "CATPREPAIDCOMBOPLUSPLANS":
        res.planListing.plans.forEach(function(item){
          if(DCPXXXXXXFn.config.requiredItems[key].includes(item.id)){
            sortedData.items.push(item);
          }
        })
        croWD.debug(key + ' sortedData: ', sortedData);
        DCPXXXXXXFn.drawCard(sortedData);
        break;
      case "CATPREPAIDPAYANDGOPLANS":
        res.planListing.plans.forEach(function(item){
          if(DCPXXXXXXFn.config.requiredItems[key].includes(item.id)){
            sortedData.items.push(item);
          }
        })
        croWD.debug(key + ' sortedData: ', sortedData);
        DCPXXXXXXFn.drawCard(sortedData);
        break;
      case "CATPOSTPAIDSIMOPLANSTPGSM":
        res.planListing.plans.forEach(function(item){
          if(DCPXXXXXXFn.config.requiredItems[key].includes(item.id)){
            sortedData.items.push(item);
          }
        })
        croWD.debug(key + ' sortedData: ', sortedData);
        DCPXXXXXXFn.drawCard(sortedData);
        break;
      case "CATPOSTPAIDHANDSETS":
        res.deviceListing.devices.forEach(function(item){
          if(DCPXXXXXXFn.config.requiredItems[key].includes(item.id)){
            sortedData.items.push(item);
          }
        })
        croWD.debug(key + ' sortedData: ', sortedData);
        DCPXXXXXXFn.drawCard(sortedData);
        break;
      case "CATMBBPOSTPAIDTABLETS":
        res.deviceListing.devices.forEach(function(item){
          if(DCPXXXXXXFn.config.requiredItems[key].includes(item.id)){
            sortedData.items.push(item);
          }
        })
        croWD.debug(key + ' sortedData: ', sortedData);
        DCPXXXXXXFn.drawCard(sortedData);
        break;
      case "CATPOSTPAIDWEARABLES":
        res.deviceListing.devices.forEach(function(item){
          if(DCPXXXXXXFn.config.requiredItems[key].includes(item.id)){
            sortedData.items.push(item);
          }
        })
        croWD.debug(key + ' sortedData: ', sortedData);
        DCPXXXXXXFn.drawCard(sortedData);
        break;
      case "CATPREPAIDHANDSETS":
        res.deviceListing.devices.forEach(function(item){
          if(DCPXXXXXXFn.config.requiredItems[key].includes(item.id)){
            sortedData.items.push(item);
          }
        })
        croWD.debug(key + ' sortedData: ', sortedData);
        DCPXXXXXXFn.drawCard(sortedData);
        break;
    }
  },
  init: function()
  {
    croWD.debug('###### init');
    if(DCPXXXXXXFn.config.targetPaths.includes(window.location.pathname) && $('#tabs-popular-offers').length == 0){
      DCPXXXXXXFn.drawTabCanvas();
      for (const [key, value] of Object.entries(DCPXXXXXXFn.config.requiredItems)) {
        croWD.debug('#####RequiredItems#####', key, value);
        if(value.length > 0){
          croWD.debug('#######endpoints for ' + key  , DCPXXXXXXFn.config.endpoints[key]);
          croWD.utils.fetchData(DCPXXXXXXFn.config.endpoints[key], DCPXXXXXXFn.getData)
        }
      }
      DCPXXXXXXFn.config.loadedData = true;
      // detect if any tab has zero item
      $('[role="tabpanel"]').each(function(ind, tab){
          if($(tab).find('.slick-slide').length == 0){
              $('.popular-offers-tabs .slick-slide').eq(ind).hide();
          }
      });
    }
  }
};
var crowdMaxDCPXXXXXX = 5;
var crowdFinderDCPXXXXXX = setInterval(function () {
  crowdMaxDCPXXXXXX --;
  if(croWD && jQuery){
    clearInterval(crowdFinderDCPXXXXXX);
    crowdFinderDCPXXXXXX = null;
    let slickScript = document.createElement( 'script' );
    slickScript.setAttribute( 'src', 'https://www.vodafone.com.au/content/dam/vha/croassets/slick.min.js');
    document.body.appendChild( slickScript );
    DCPXXXXXXFn.observe();
  }
  if(crowdMaxDCPXXXXXX <= 0){
    clearInterval(crowdFinderDCPXXXXXX);
    crowdFinderDCPXXXXXX = null;
  }
}, 1000);
