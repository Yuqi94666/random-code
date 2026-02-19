window.DCP16910DeviceCohort = 'popularDevices';//popularDevices || appleDevices || androidDevices 




var DCP16910Fn = {
	aid: 'DCP-16910',
	config: {
		checkingKey: '',
		targetPaths: ['/', '/agents/DCP-16910/', '/cro-demo'],
		popularProductsTitle: 'All the best deals, on all the best dvices',
		htmlCode: `<style>
        /* Slider */
.slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}
.slick-list {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.slick-list:focus {
  outline: none;
}
.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}
.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.slick-track:before,
.slick-track:after {
  display: table;
  content: "";
}
.slick-track:after {
  clear: both;
}
.slick-loading .slick-track {
  visibility: hidden;
}
.slick-slide {
  display: none;
  float: left;
  height: auto;
  min-height: 1px;
}
[dir="rtl"] .slick-slide {
  float: right;
}
.slick-slide img {
  display: block;
}
.slick-slide.slick-loading img {
  display: none;
}
.slick-slide.dragging img {
  pointer-events: none;
}
.slick-initialized .slick-slide {
  display: block;
}
.slick-loading .slick-slide {
  visibility: hidden;
}
.slick-vertical .slick-slide {
  display: block;
  height: auto;
  border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
  display: none;
}

.slick-arrow {
  z-index: 2;
  text-indent: -99999px;
  cursor: pointer;
  border: 2px solid #333333;
  top: 126px;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  position: absolute;
  background-color: rgb(255, 255, 255) !important;
}



.slick-arrow.slick-prev {
  left: -10px;
}
.slick-arrow.slick-prev:before {
  display: block;
  content: "";
  width: 36px;
  height: 36px;
  position: absolute;
  left: 1px;
  top: 24px;
  transform: translateY(-50%) rotate(90deg);
  background-image: url("data:image/svg+xml, %3Csvg width='36' height='36' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' style='stroke-width:2px' fill-rule='evenodd'%3E%3Cpath fill='none' d='M32 0H0v32h32z' /%3E%3Cpath stroke='%23333333' stroke-linecap='round' stroke-linejoin='round' d='M4.667 11.333L16 22.667l11.333-11.334' /%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right center;
  background-size: contain;
}
.slick-arrow.slick-next {
  right: -10px;
}
.slick-arrow.slick-next:before {
  display: block;
  content: "";
  width: 36px;
  height: 36px;
  position: absolute;
  left: 6px;
  top: 20px;
  transform: translateY(-50%) rotate(270deg);
  background-image: url("data:image/svg+xml, %3Csvg width='36' height='36' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' style='stroke-width:2px' fill-rule='evenodd'%3E%3Cpath fill='none' d='M32 0H0v32h32z' /%3E%3Cpath stroke='%23333333' stroke-linecap='round' stroke-linejoin='round' d='M4.667 11.333L16 22.667l11.333-11.334' /%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right center;
  background-size: contain;
}
.slick-arrow:hover{
  border: 2px solid #333333;
  background-color: #333333 !important;
}

.slick-arrow:focus {
  border: 2px solid #007C92;
  background-color: #333333 !important;
}

.slick-arrow.slick-prev:hover:before, .slick-arrow.slick-prev:focus:before{
    background-image: url("data:image/svg+xml, %3Csvg width='36' height='36' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' style='stroke-width:2px' fill-rule='evenodd'%3E%3Cpath fill='none' d='M32 0H0v32h32z' /%3E%3Cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' d='M4.667 11.333L16 22.667l11.333-11.334' /%3E%3C/g%3E%3C/svg%3E");

}
.slick-arrow.slick-next:hover:before, .slick-arrow.slick-next:focus:before {
    background-image: url("data:image/svg+xml, %3Csvg width='36' height='36' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' style='stroke-width:2px' fill-rule='evenodd'%3E%3Cpath fill='none' d='M32 0H0v32h32z' /%3E%3Cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' d='M4.667 11.333L16 22.667l11.333-11.334' /%3E%3C/g%3E%3C/svg%3E");
}

.slick-arrow.slick-disabled {
  display: none !important;
}


#DCP16910Wrapper{
    padding: 60px 0px 0px 0px;
    background: #f4f4f4;
        @media (max-width: 768px) {
                padding: 30px 0px 0px 0px;
        }
}
#DCP16910Wrapper h2#DCP16910WrapperHeading{
    color:  #25282B;
    text-align: center;
    font-size: 44px;
    font-weight: 300;
    line-height: 52px;
    font-family: VodafoneLight, Arial, sans-serif;
    margin: 0;
    @media (max-width: 768px) {
        font-size: 32px;
        line-height: 40px;
    }
}
#DCP16910Wrapper_tabs{

}
#DCP16910Wrapper_tabs ul{
    display: flex;
    gap: 20px;
    justify-content: center;
    border-bottom: 1px solid #CCCCCC;
    margin: 48px 0;
    overflow: auto;
    @media (max-width: 768px) {
        margin: 24px 0;
    }

}

#DCP16910Wrapper_tabs ul li{
    list-style: none;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    padding: 16px 0;
    min-width: 110px;
    max-width: 200px;
    text-align: center;
    cursor: pointer;
}
#DCP16910Wrapper_tabs ul li.active{
    border-bottom: 2px solid red;
}

@media (max-width: 1280px) {
    .planCardContainer .planCard .plan-item {
        min-height: 550px;
    }
}
@media (max-width: 1024px) {
    .planCardContainer .planCard .plan-item {
        min-height: 530px;
    }
}
@media (max-width: 768px) {
    .planCardContainer .planCard .plan-item {
        min-height: auto;
    }
    #DCP16910Wrapper_tabs ul{
        padding: 0;
        justify-content: flex-start;
        margin: 24px 0;
    }
}
.deviceCardModule{
    margin: 50px auto;
}
.deviceCardModule .popular-offers-title {
    font-size: 40px;
    line-height: 1.2;
    font-weight: 400;
    font-family: VodafoneLight, Arial, sans-serif;
    color: rgb(51, 51, 51);
    text-align: center;
    padding: 30px 0 10px 0;
}
.deviceCardModule .popular-offers-desc{
    font-size: 20px;
    line-height: 1.2;
    font-weight: 400;
    font-family: 'VodafoneRegular', Arial, sans-serif;
    color: rgb(51, 51, 51);
    text-align: center;
    padding: 0px 0 50px 0;
    margin: 0;
}
.deviceCardContainer{
    max-width: 1180px;
    margin: auto;
}


.deviceCardContainer .deviceCard{
    text-decoration: none;
    margin:0 10px;
}

@media (min-width: 768px) {
    .deviceCardContainer .deviceCard {
    }
}
@media (min-width: 1024px) {
    .deviceCardContainer .deviceCard {
    }
}
.DCP16910Wrapper_tabItem .itemCard{
    padding: 10px 0;
}
.DCP16910Wrapper_tabItem .itemCard.onlineExclusive:before{
    content: 'Online exclusive';
    background: #9C2AA0;
    padding: 6px 18px;
    bottom: 6px;
    position: relative;
    color: #fff;
    font-size: 16px;
    line-height: 22px;
    border-radius: 6px 6px 6px 0;
}
.DCP16910Wrapper_tabItem .itemCard.XonlineExclusive:before{
    content: ' ';
    background: none;
    padding: 6px 18px;
    bottom: 6px;
    position: relative;
    color: #fff;
    font-size: 16px;
    line-height: 22px;
    border-radius: 6px 6px 6px 0;
}
.deviceCardContainer .deviceCard .device-item {
    color: rgb(51, 51, 51);
    
    padding: 20px 16px 26px 16px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px 0px;
}
.deviceCardContainer .deviceCard .device-item .device-item-badge img{
    margin: 0;
}

@keyframes SeniorEntered {
    100% {
        background-position: left center
    }
}
.deviceCardContainer .deviceCard .device-item .device-saving{
    height: 24px;
    width: fit-content;
    padding: 5px 10px;
    margin: 5px 0px;
    background: linear-gradient(to right, rgb(156, 42, 160) 50%, white 50%) right center / 200% 200%;
    animation: 1s ease 0s 1 normal forwards running SeniorEntered;
    font-size: 14px;
    line-height: 1;
    letter-spacing: normal;
    text-align: center;
    color: rgb(255, 255, 255);
    white-space: nowrap;
    font-family: VodafoneRegular, Arial, sans-serif;
}
.deviceCardContainer .deviceCard .device-item .device-item-badge img {
    width: 45px;
    height: 45px;
    display: inline-block;
}
.deviceCardContainer .deviceCard .device-item img {
    width: 168px;
    height: auto;
    margin: 20px auto;
    display: block;
}
.deviceCardContainer .deviceCard .device-item p {
    margin: 0;
}
.deviceCardContainer .deviceCard .device-item .brand {
    font-size: 14px;
    line-height: 18px;
    font-family: VodafoneRegular, Arial, sans-serif;
}
.deviceCardContainer .deviceCard .device-item .device-name {
    margin-bottom: 0px;
    color: rgb(51, 51, 51);
    font-family: VodafoneRegularBold, Arial, sans-serif;
    margin-bottom: 16px;
    font-size: 18px;
    line-height: 24px;
}
.deviceCardContainer .deviceCard .device-item .device-prefix {
    font-size: 14px;
    line-height: 18px;
    padding-top:10px;
}
.deviceCardContainer .deviceCard .device-item .device-price {
    position: relative;
}
.deviceCardContainer .deviceCard .device-item .device-price .dollar {
    font-family: VodafoneRegularBold, Arial, sans-serif;
    display: inline-block;
    vertical-align: top;
    font-size: 18px;
    line-height: 36px;
}
.deviceCardContainer .deviceCard .device-item .device-price .device-recurringCharge {
    font-family: VodafoneRegularBold, Arial, sans-serif;
    font-size: 40px;
    line-height: 48px;
    padding-right: 0px;
}
.deviceCardContainer .deviceCard .device-item .device-price .device-was-price {
    font-size: 14px;
    line-height: 18px;
    padding: 3px 0px 0px 2px;
    text-decoration: line-through;
    position: absolute;
    top: 3px;
}
.deviceCardContainer .deviceCard .device-item .device-price .mth {
    display: inline-block;
    font-size: 14px;
    line-height: 18px;
    padding: 3px 0px 0px 2px;
}
.deviceCardContainer .deviceCard .device-item .device-mincost {
    margin-top: 12px;
    font-size: 14px;
    line-height: 18px;
}
.deviceCardContainer .deviceCard .device-item .primaryBtn {
    width: 100%;
    height: auto;
    margin: 30px auto 0 auto;
    border-radius: 6px;
    padding: 8px 24px;
    line-height: 24px;
    font-family: "VodafoneLight", Arial, sans-serif;
    font-size: 18px;
    font-kerning: none;
    text-align: center;
    text-overflow: ellipsis;
    text-decoration: none;
    outline: none;
    pointer-events: auto;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    box-sizing: border-box;
    border-color: #e60000;
    background: #e60000;
    color: rgb(255, 255, 255);
}
.deviceCardContainer .deviceCard .device-item .primaryBtn:hover {
    background: #900;
    border-color: #900;
}
.deviceCardContainer .deviceCard .device-item .device-item-offer {
    display: flex;
    padding: 0px 16px;
    background-color: rgb(244, 244, 244);
    min-height: 36px;
    align-content: center;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: unset;
    flex-direction: row;
    width: 100%;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    margin: 20px 0px -16px -16px;
}
.deviceCardContainer .deviceCard .device-item .device-item-offer img{
    margin-right: 12px;
    width: 24px;
    height: 24px;
    flex-grow: 1;
}
.deviceCardContainer .deviceCard .device-item .device-item-offer p{
    margin: 0px;
    font-size: 14px;
    line-height: 18px;
    color: rgb(51, 51, 51);
    max-width: 780px;
    flex-grow: 4;
}


.planCardContainer{
    max-width: 1180px;
    margin: auto;
}
.planCardContainer .planCard{
    text-decoration: none;
    margin:0 10px;
}
.planCardContainer .planCard .plan-item{
    border-radius: 16px;
    border: 2px solid #000;
    background: #FEF1F1;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px 0px;
    overflow: hidden;
    padding-bottom: 50px;
}
.planCardContainer .planCard .plan-item img{
    width: 100%;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;
    margin: 32px 32px 0 32px;
    border: 2px solid #000;
    border-radius: 16px;
    @media (max-width: 1024px) {
        margin: 24px 24px 0 24px;
    }
    @media (max-width: 768px) {
        margin: 16px 16px 0 16px;
        border-radius: 14px;
    }
}
.planCardContainer .planCard .plan-item .plan-text{
    padding: 24px 30px;
    color: #333;
}
.planCardContainer .planCard .plan-item .plan-text .plan-heading{
    margin: 0;
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    font-family: VodafoneRegularBold, Arial, sans-serif !important;
}
.planCardContainer .planCard .plan-item .plan-text  .plan-subheading{
    margin:16px 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
}
.planCardContainer .planCard .plan-item .plan-text  .plan-tc{
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 0;;
}
.planCardContainer .planCard .plan-item .plan-text .plan-tc tooltip{
    text-decoration: underline;
    cursor: pointer;
    color: #E60000;
    position: relative;
    z-index: 1;
    &:hover {
        text-decoration: none;
    }
}
.planCardContainer .planCard .plan-item .plan-text  .plan-link{
    margin-top:24px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color:#EA1A1A;
    padding-right: 30px;
    position: absolute;
    display: inline-block;
    margin-bottom: 0;
}
.planCardContainer .planCard .plan-item .plan-text  .plan-link:after{
    display: block;
    content: '';
    width: 20px;
    height: 20px;
    top: 3px;
    right: 8px;
    position: absolute;
    transform: rotate(270deg);
    background-image: url("data:image/svg+xml, %3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='none' d='M32 0H0v32h32z' /%3E%3Cpath stroke='%23EA1A1A' style='stroke-width:2px' stroke-linecap='round' stroke-linejoin='round' d='M4.667 11.333L16 22.667l11.333-11.334' /%3E%3C/g%3E%3C/svg%3E");
    background-size: 100%;
    transition: all 0.2s ease-in-out 0s;
}
.planCardContainer .planCard .plan-item .plan-text  .plan-link:hover::after {
    transition: all 0.2s ease-in-out;
    right: 0;
}
#DCP16910Wrapper_tabContents{
    position: relative;
    width: 90%;
    max-width: 1180px;
    margin: 0 auto;
    min-height: 600px;
    @media (max-width: 768px) {
        min-height: 550px;
    }
}
.DCP16910Wrapper_tabItem{
    left: -99999px;
    position: absolute;
    width: 100%;
}
.DCP16910Wrapper_tabItem.active{
    left: 0px;
}
.DCP16910Wrapper_tabItem .deviceSet{
    left: -99999px;
    position: absolute;
    width: 100%;
}
.DCP16910Wrapper_tabItem .deviceSet.active{
    left: 0px;
}

div.modal {
    display: none;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 830;
    background-color: rgba(0, 0, 0, .5);
    align-items: center;
    justify-content: center
}

div.modal .tooltip {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 80%;
    max-height: 95%;
    overflow-y: auto;
    color: #333;
    padding: 40px 60px 48px;
    border-radius: 6px;
    margin: 0px 16px;
    max-width: 768px
}

div.modal .close-link {
    border: none;
    margin: 0px;
    padding: 0px;
    width: auto;
    background: rgba(0, 0, 0, 0);
    color: inherit;
    font-style: inherit;
    font-variant: inherit;
    font-weight: inherit;
    font-stretch: inherit;
    font-size: inherit;
    font-family: inherit;
    font-optical-sizing: inherit;
    font-size-adjust: inherit;
    font-kerning: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    line-height: normal;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    align-self: flex-end;
    cursor: pointer;
    z-index: 10;
    position: fixed;
    margin-top: -30px;
    margin-right: -50px
}

div.modal .close-link svg.close-icon {
    position: relative;
    color: #333;
    display: block;
    height: 24px;
    width: 24px
}

div.modal h3 {
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 48px
}

div.modal h4 {
    font-family: VodafoneRegular, Arial, sans-serif;
    margin-bottom: 15px
}

div.modal ol {
    margin: -10px 0 20px 0;
    padding: 0px 0px 0px 16px
}

div.modal ol.list2 {
    margin: -10px 0 20px 0;
    padding: 0px 0px 0px 1px !important;
    list-style: disc;
    margin-left: 16px
}

.list2 li {
    padding: 8px 0px 8px 0px
}

div.modal p.text {
    font-size: 18px;
    line-height: 24px
}

div.modal p.term {
    font-size: 12px;
    line-height: 16px
}

@media(max-width: 768px) {
    div.modal h3 {
        font-size: 24px;
        line-height: 30px
    }

    div.modal p.text {
        font-size: 16px;
        line-height: 22px
    }

    div.modal .tooltip {
        width: 100%;
        margin: 0;
        border-radius: 0;
        padding: 24px 16px 32px
    }

    div.modal .close-link {
        margin-top: -10px;
        margin-right: -10px
    }

    div.modal h3 {
        margin-bottom: 16px
    }
}

        </style>
        <div id="DCP16910Wrapper">
    <h2 id="DCP16910WrapperHeading">Popular offers for you</h2>
    <div id="DCP16910Wrapper_tabs">
        <ul>
            <li data-cat="phones" tabindex="0" class="active">Phones</li>
            <li data-cat="simonly" tabindex="0">SIM only</li>
            <li data-cat="prepaid" tabindex="0">Prepaid</li>
            <li data-cat="homeinternet" tabindex="0">Home internet</li>
        </ul>
    </div>
    <div id="DCP16910Wrapper_tabContents">
        <div class="DCP16910Wrapper_tabItem deviceCardContainer active" data-cat="phones">
            <div class="deviceSet" id="popularDevices"><a class="deviceCard itemCard" title="iPhone Air"
                    href="https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-air" aria-hidden="false">
                    <div class="device-item">
                        <div class="device-item-device">
                            <div class="device-item-badge"><img alt="5G approved device"
                                    src="data:image/svg+xml,%3csvg id='Layer_1' data-name='Layer 1'                                 xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2,.cls-3%7bfill:none;%7d.cls-2,.cls-3%7bstroke:%23333;stroke-width:8px;%7d.cls-2%7bstroke-linecap:round;stroke-linejoin:round;%7d.cls-3%7bstroke-miterlimit:10;%7d%3c/style%3e%3c/defs%3e%3ctitle%3e5g%3c/title%3e%3crect class='cls-1' width='192' height='192'/%3e%3cpath class='cls-2' d='M122,98h14v12a9.57,9.57,0,0,1-7,9.5c-8.28,2.26-25,3.73-25-23.5,0-29.5,26.56-25.9,30.5-18.5' transform='translate(0 0)'/%3e%3ccircle class='cls-3' cx='96' cy='96' r='76'/%3e%3cpath class='cls-2' d='M83.84,72.39H63.5v21l2.19-1.08A14.73,14.73,0,1,1,61.8,117' transform='translate(0 0)'/%3e%3c/svg%3e">
                                <img alt="eSIM-enabled device"
                                    src="data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 26.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='ICON'                                   xmlns='http://www.w3.org/2000/svg'                                   xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 192 192' style='enable-background:new 0 0 192 192;' xml:space='preserve'%3e %3cstyle type='text/css'%3e .st0%7bfill:%23333333;%7d %3c/style%3e %3cg%3e %3cpath class='st0' d='M42.43,93.32c-0.03,0.14-0.05,0.3-0.05,0.47c0,0.73,0.16,1.38,0.49,1.95c0.33,0.57,0.76,1.06,1.3,1.46 c0.54,0.4,1.15,0.7,1.82,0.91c0.68,0.21,1.38,0.31,2.11,0.31c1.32,0,2.48-0.24,3.49-0.73c1.01-0.49,1.91-1.15,2.71-1.98l5.26,4.11 c-1.67,1.77-3.52,3.05-5.57,3.83c-2.05,0.78-4.25,1.17-6.61,1.17c-1.81,0-3.48-0.25-5.02-0.76c-1.54-0.5-2.89-1.25-4.04-2.24 c-1.15-0.99-2.05-2.21-2.71-3.67c-0.66-1.46-0.99-3.12-0.99-5c0-2.22,0.39-4.3,1.17-6.22c0.78-1.93,1.86-3.6,3.23-5.02 c1.37-1.42,3.01-2.54,4.92-3.36c1.91-0.82,4.01-1.22,6.3-1.22c1.7,0,3.25,0.24,4.66,0.73c1.41,0.49,2.61,1.19,3.62,2.11 c1.01,0.92,1.79,2.06,2.34,3.41c0.55,1.35,0.83,2.92,0.83,4.69c0,0.62-0.06,1.41-0.18,2.37c-0.12,0.96-0.29,1.85-0.49,2.68H42.43z M54.24,88.22c0.03-0.17,0.05-0.35,0.05-0.52v-0.52c0-1.15-0.41-2.1-1.22-2.86c-0.82-0.76-1.99-1.15-3.51-1.15 c-0.94,0-1.78,0.17-2.52,0.49c-0.75,0.33-1.4,0.74-1.95,1.22c-0.56,0.49-1.01,1.02-1.35,1.61c-0.35,0.59-0.59,1.16-0.73,1.72H54.24 z'/%3e %3cpath class='st0' d='M85.82,76.76c-0.76-0.97-1.76-1.74-2.99-2.32c-1.23-0.57-2.42-0.86-3.57-0.86c-0.59,0-1.19,0.05-1.8,0.16 c-0.61,0.1-1.15,0.3-1.64,0.6c-0.49,0.3-0.89,0.68-1.22,1.15c-0.33,0.47-0.49,1.07-0.49,1.8c0,0.62,0.13,1.15,0.39,1.56 c0.26,0.42,0.64,0.78,1.15,1.09c0.5,0.31,1.1,0.6,1.8,0.86c0.69,0.26,1.47,0.53,2.34,0.81c1.25,0.42,2.55,0.88,3.9,1.38 c1.35,0.5,2.59,1.17,3.7,2c1.11,0.83,2.03,1.87,2.76,3.1c0.73,1.23,1.09,2.77,1.09,4.61c0,2.12-0.39,3.95-1.17,5.49 c-0.78,1.54-1.83,2.82-3.15,3.83c-1.32,1.01-2.83,1.75-4.53,2.24c-1.7,0.49-3.45,0.73-5.26,0.73c-2.64,0-5.19-0.46-7.65-1.38 c-2.46-0.92-4.51-2.23-6.14-3.93l5.83-5.94c0.9,1.11,2.09,2.04,3.57,2.79c1.47,0.75,2.94,1.12,4.4,1.12c0.66,0,1.3-0.07,1.93-0.21 c0.62-0.14,1.17-0.36,1.64-0.68c0.47-0.31,0.84-0.73,1.12-1.25c0.28-0.52,0.42-1.15,0.42-1.87c0-0.69-0.17-1.28-0.52-1.77 c-0.35-0.49-0.84-0.93-1.48-1.33c-0.64-0.4-1.44-0.76-2.39-1.09c-0.96-0.33-2.04-0.68-3.25-1.07c-1.18-0.38-2.33-0.83-3.46-1.35 c-1.13-0.52-2.13-1.19-3.02-2c-0.88-0.82-1.6-1.8-2.13-2.97c-0.54-1.16-0.81-2.58-0.81-4.24c0-2.05,0.42-3.8,1.25-5.26 c0.83-1.46,1.93-2.66,3.28-3.59c1.35-0.94,2.88-1.62,4.58-2.06c1.7-0.43,3.42-0.65,5.15-0.65c2.08,0,4.21,0.38,6.38,1.15 c2.17,0.76,4.07,1.89,5.7,3.38L85.82,76.76z'/%3e %3crect x='96.21' y='67.19' class='st0' width='8.96' height='36.86'/%3e %3cpolygon class='st0' points='144.26,104.05 144.47,77.96 144.32,77.96 134.74,104.05 128.49,104.05 119.17,77.96 119.01,77.96 119.22,104.05 110.84,104.05 110.84,67.19 123.51,67.19 131.9,90.82 132.11,90.82 140.13,67.19 153.01,67.19 153.01,104.05 '/%3e %3cpath class='st0' d='M158.05,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,135.15,158.05,134.27,158.05,133.18'/%3e %3cpath class='st0' d='M151.44,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,135.15,151.44,134.27,151.44,133.18'/%3e %3cpath class='st0' d='M144.82,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,135.15,144.82,134.27,144.82,133.18'/%3e %3cpath class='st0' d='M138.2,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,135.15,138.2,134.27,138.2,133.18'/%3e %3cpath class='st0' d='M131.59,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,135.15,131.59,134.27,131.59,133.18'/%3e %3cpath class='st0' d='M124.97,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,135.15,124.97,134.27,124.97,133.18'/%3e %3cpath class='st0' d='M118.35,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,135.15,118.35,134.27,118.35,133.18'/%3e %3cpath class='st0' d='M111.74,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,135.15,111.74,134.27,111.74,133.18'/%3e %3cpath class='st0' d='M105.12,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,135.15,105.12,134.27,105.12,133.18'/%3e %3cpath class='st0' d='M98.5,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,135.15,98.5,134.27,98.5,133.18'/%3e %3cpath class='st0' d='M91.89,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,135.15,91.89,134.27,91.89,133.18'/%3e %3cpath class='st0' d='M85.27,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,135.15,85.27,134.27,85.27,133.18'/%3e %3cpath class='st0' d='M78.65,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,135.15,78.65,134.27,78.65,133.18'/%3e %3cpath class='st0' d='M72.04,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,135.15,72.04,134.27,72.04,133.18'/%3e %3cpath class='st0' d='M65.42,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,135.15,65.42,134.27,65.42,133.18'/%3e %3cpath class='st0' d='M58.81,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,135.15,58.81,134.27,58.81,133.18'/%3e %3cpath class='st0' d='M175.35,55.41c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,54.53,176.43,55.41,175.35,55.41'/%3e %3cpath class='st0' d='M175.35,61.82c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,61.82,175.35,61.82'/%3e %3cpath class='st0' d='M175.35,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,68.24,175.35,68.24'/%3e %3cpath class='st0' d='M175.35,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,73.77,176.43,74.65,175.35,74.65'/%3e %3cpath class='st0' d='M175.35,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,80.18,176.43,81.06,175.35,81.06'/%3e %3cpath class='st0' d='M175.35,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,86.6,176.43,87.48,175.35,87.48'/%3e %3cpath class='st0' d='M175.35,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,93.89,175.35,93.89'/%3e %3cpath class='st0' d='M175.35,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,100.3,175.35,100.3'/%3e %3cpath class='st0' d='M175.35,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,105.83,176.43,106.71,175.35,106.71'/%3e %3cpath class='st0' d='M175.35,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,112.25,176.43,113.13,175.35,113.13'/%3e %3cpath class='st0' d='M175.35,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,118.66,176.43,119.54,175.35,119.54'/%3e %3cpath class='st0' d='M12.57,62.05c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 c0,0.54-0.21,1.04-0.57,1.39C13.6,61.83,13.11,62.05,12.57,62.05'/%3e %3cpath class='st0' d='M16.68,57.47c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C18.64,56.58,17.76,57.46,16.68,57.47'/%3e %3cpath class='st0' d='M21.06,53.11c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C23.02,52.22,22.15,53.1,21.06,53.11'/%3e %3cpath class='st0' d='M25.45,48.75c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C27.41,47.86,26.53,48.75,25.45,48.75'/%3e %3cpath class='st0' d='M29.83,44.39c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C31.79,43.5,30.92,44.39,29.83,44.39'/%3e %3cpath class='st0' d='M12.28,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,68.24,12.28,68.24'/%3e %3cpath class='st0' d='M12.28,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,73.77,13.37,74.65,12.28,74.65'/%3e %3cpath class='st0' d='M12.28,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,80.18,13.37,81.06,12.28,81.06'/%3e %3cpath class='st0' d='M12.28,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,86.6,13.37,87.48,12.28,87.48'/%3e %3cpath class='st0' d='M12.28,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,93.89,12.28,93.89'/%3e %3cpath class='st0' d='M12.28,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,100.3,12.28,100.3'/%3e %3cpath class='st0' d='M12.28,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,105.83,13.37,106.71,12.28,106.71'/%3e %3cpath class='st0' d='M12.28,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,112.25,13.37,113.13,12.28,113.13'/%3e %3cpath class='st0' d='M12.28,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,118.66,13.37,119.54,12.28,119.54'/%3e %3cpath class='st0' d='M52.19,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,135.15,52.19,134.27,52.19,133.18'/%3e %3cpath class='st0' d='M45.57,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,135.15,45.57,134.27,45.57,133.18'/%3e %3cpath class='st0' d='M38.96,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,135.15,38.96,134.27,38.96,133.18'/%3e %3cpath class='st0' d='M32.34,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.22,135.15,32.34,134.27,32.34,133.18'/%3e %3cpath class='st0' d='M25.72,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C26.6,135.15,25.72,134.27,25.72,133.18'/%3e %3cpath class='st0' d='M158.05,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,40.02,158.05,39.14,158.05,38.05'/%3e %3cpath class='st0' d='M151.44,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,40.02,151.44,39.14,151.44,38.05'/%3e %3cpath class='st0' d='M144.82,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,40.02,144.82,39.14,144.82,38.05'/%3e %3cpath class='st0' d='M138.2,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,40.02,138.2,39.14,138.2,38.05'/%3e %3cpath class='st0' d='M131.59,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,40.02,131.59,39.14,131.59,38.05'/%3e %3cpath class='st0' d='M124.97,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,40.02,124.97,39.14,124.97,38.05'/%3e %3cpath class='st0' d='M118.35,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,40.02,118.35,39.14,118.35,38.05'/%3e %3cpath class='st0' d='M111.74,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,40.02,111.74,39.14,111.74,38.05'/%3e %3cpath class='st0' d='M105.12,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,40.02,105.12,39.14,105.12,38.05'/%3e %3cpath class='st0' d='M98.5,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,40.02,98.5,39.14,98.5,38.05'/%3e %3cpath class='st0' d='M91.89,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,40.02,91.89,39.14,91.89,38.05'/%3e %3cpath class='st0' d='M85.27,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,40.02,85.27,39.14,85.27,38.05'/%3e %3cpath class='st0' d='M78.65,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,40.02,78.65,39.14,78.65,38.05'/%3e %3cpath class='st0' d='M72.04,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,40.02,72.04,39.14,72.04,38.05'/%3e %3cpath class='st0' d='M65.42,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,40.02,65.42,39.14,65.42,38.05'/%3e %3cpath class='st0' d='M58.81,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,40.02,58.81,39.14,58.81,38.05'/%3e %3cpath class='st0' d='M52.19,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,40.02,52.19,39.14,52.19,38.05'/%3e %3cpath class='st0' d='M45.57,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,40.02,45.57,39.14,45.57,38.05'/%3e %3cpath class='st0' d='M38.96,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,40.02,38.96,39.14,38.96,38.05'/%3e %3cpath class='st0' d='M32.44,38.33c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.32,40.3,32.44,39.42,32.44,38.33'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,38.05c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C165.55,36.08,164.67,36.96,164.67,38.05'/%3e %3cpath class='st0' d='M170.63,41.16c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C171.51,39.19,170.63,40.07,170.63,41.16'/%3e %3cpath class='st0' d='M173.3,47.13c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C174.18,45.16,173.3,46.04,173.3,47.13'/%3e %3cpath class='st0' d='M22.91,133.07c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C22.03,135.03,22.91,134.15,22.91,133.07'/%3e %3cpath class='st0' d='M16.95,129.96c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C16.07,131.93,16.95,131.05,16.95,129.96'/%3e %3cpath class='st0' d='M14.27,123.99c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C13.39,125.96,14.27,125.08,14.27,123.99'/%3e %3c/g%3e %3c/svg%3e">
                            </div><img alt="iPhone Air"
                                srcset="https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fapple%2Fiphone-air%2Fiphone-air-sky-blue-01-m.webp&w=256&q=75, https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fapple%2Fiphone-air%2Fiphone-air-sky-blue-01-m.webp&w=384&q=75 2x">
                            <p class="brand">Apple</p>
                            <p class="device-name">iPhone Air</p>
                            <p class="device-prefix">Device from</p>
                            <p class="device-price"><span class="dollar">$</span><span
                                    class="device-recurringCharge">33.30</span><span
                                    class="device-was-price">$49.94</span><span class="mth">per month</span></p>
                            <p class="device-mincost">Min cost $1,198.80 over 36 months. Plan cost additional.</p>
                            <div class="primaryBtn">Shop now</div>
                        </div>
                    </div>
                </a><a class="deviceCard itemCard" title="iPhone 17 Pro Max"
                    href="https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro-max" aria-hidden="false">
                    <div class="device-item">
                        <div class="device-item-device">
                            <div class="device-item-badge"><img alt="5G approved device"
                                    src="data:image/svg+xml,%3csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2,.cls-3%7bfill:none;%7d.cls-2,.cls-3%7bstroke:%23333;stroke-width:8px;%7d.cls-2%7bstroke-linecap:round;stroke-linejoin:round;%7d.cls-3%7bstroke-miterlimit:10;%7d%3c/style%3e%3c/defs%3e%3ctitle%3e5g%3c/title%3e%3crect class='cls-1' width='192' height='192'/%3e%3cpath class='cls-2' d='M122,98h14v12a9.57,9.57,0,0,1-7,9.5c-8.28,2.26-25,3.73-25-23.5,0-29.5,26.56-25.9,30.5-18.5' transform='translate(0 0)'/%3e%3ccircle class='cls-3' cx='96' cy='96' r='76'/%3e%3cpath class='cls-2' d='M83.84,72.39H63.5v21l2.19-1.08A14.73,14.73,0,1,1,61.8,117' transform='translate(0 0)'/%3e%3c/svg%3e">
                                <img alt="eSIM-enabled device"
                                    src="data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 26.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='ICON' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 192 192' style='enable-background:new 0 0 192 192;' xml:space='preserve'%3e %3cstyle type='text/css'%3e .st0%7bfill:%23333333;%7d %3c/style%3e %3cg%3e %3cpath class='st0' d='M42.43,93.32c-0.03,0.14-0.05,0.3-0.05,0.47c0,0.73,0.16,1.38,0.49,1.95c0.33,0.57,0.76,1.06,1.3,1.46 c0.54,0.4,1.15,0.7,1.82,0.91c0.68,0.21,1.38,0.31,2.11,0.31c1.32,0,2.48-0.24,3.49-0.73c1.01-0.49,1.91-1.15,2.71-1.98l5.26,4.11 c-1.67,1.77-3.52,3.05-5.57,3.83c-2.05,0.78-4.25,1.17-6.61,1.17c-1.81,0-3.48-0.25-5.02-0.76c-1.54-0.5-2.89-1.25-4.04-2.24 c-1.15-0.99-2.05-2.21-2.71-3.67c-0.66-1.46-0.99-3.12-0.99-5c0-2.22,0.39-4.3,1.17-6.22c0.78-1.93,1.86-3.6,3.23-5.02 c1.37-1.42,3.01-2.54,4.92-3.36c1.91-0.82,4.01-1.22,6.3-1.22c1.7,0,3.25,0.24,4.66,0.73c1.41,0.49,2.61,1.19,3.62,2.11 c1.01,0.92,1.79,2.06,2.34,3.41c0.55,1.35,0.83,2.92,0.83,4.69c0,0.62-0.06,1.41-0.18,2.37c-0.12,0.96-0.29,1.85-0.49,2.68H42.43z M54.24,88.22c0.03-0.17,0.05-0.35,0.05-0.52v-0.52c0-1.15-0.41-2.1-1.22-2.86c-0.82-0.76-1.99-1.15-3.51-1.15 c-0.94,0-1.78,0.17-2.52,0.49c-0.75,0.33-1.4,0.74-1.95,1.22c-0.56,0.49-1.01,1.02-1.35,1.61c-0.35,0.59-0.59,1.16-0.73,1.72H54.24 z'/%3e %3cpath class='st0' d='M85.82,76.76c-0.76-0.97-1.76-1.74-2.99-2.32c-1.23-0.57-2.42-0.86-3.57-0.86c-0.59,0-1.19,0.05-1.8,0.16 c-0.61,0.1-1.15,0.3-1.64,0.6c-0.49,0.3-0.89,0.68-1.22,1.15c-0.33,0.47-0.49,1.07-0.49,1.8c0,0.62,0.13,1.15,0.39,1.56 c0.26,0.42,0.64,0.78,1.15,1.09c0.5,0.31,1.1,0.6,1.8,0.86c0.69,0.26,1.47,0.53,2.34,0.81c1.25,0.42,2.55,0.88,3.9,1.38 c1.35,0.5,2.59,1.17,3.7,2c1.11,0.83,2.03,1.87,2.76,3.1c0.73,1.23,1.09,2.77,1.09,4.61c0,2.12-0.39,3.95-1.17,5.49 c-0.78,1.54-1.83,2.82-3.15,3.83c-1.32,1.01-2.83,1.75-4.53,2.24c-1.7,0.49-3.45,0.73-5.26,0.73c-2.64,0-5.19-0.46-7.65-1.38 c-2.46-0.92-4.51-2.23-6.14-3.93l5.83-5.94c0.9,1.11,2.09,2.04,3.57,2.79c1.47,0.75,2.94,1.12,4.4,1.12c0.66,0,1.3-0.07,1.93-0.21 c0.62-0.14,1.17-0.36,1.64-0.68c0.47-0.31,0.84-0.73,1.12-1.25c0.28-0.52,0.42-1.15,0.42-1.87c0-0.69-0.17-1.28-0.52-1.77 c-0.35-0.49-0.84-0.93-1.48-1.33c-0.64-0.4-1.44-0.76-2.39-1.09c-0.96-0.33-2.04-0.68-3.25-1.07c-1.18-0.38-2.33-0.83-3.46-1.35 c-1.13-0.52-2.13-1.19-3.02-2c-0.88-0.82-1.6-1.8-2.13-2.97c-0.54-1.16-0.81-2.58-0.81-4.24c0-2.05,0.42-3.8,1.25-5.26 c0.83-1.46,1.93-2.66,3.28-3.59c1.35-0.94,2.88-1.62,4.58-2.06c1.7-0.43,3.42-0.65,5.15-0.65c2.08,0,4.21,0.38,6.38,1.15 c2.17,0.76,4.07,1.89,5.7,3.38L85.82,76.76z'/%3e %3crect x='96.21' y='67.19' class='st0' width='8.96' height='36.86'/%3e %3cpolygon class='st0' points='144.26,104.05 144.47,77.96 144.32,77.96 134.74,104.05 128.49,104.05 119.17,77.96 119.01,77.96 119.22,104.05 110.84,104.05 110.84,67.19 123.51,67.19 131.9,90.82 132.11,90.82 140.13,67.19 153.01,67.19 153.01,104.05 '/%3e %3cpath class='st0' d='M158.05,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,135.15,158.05,134.27,158.05,133.18'/%3e %3cpath class='st0' d='M151.44,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,135.15,151.44,134.27,151.44,133.18'/%3e %3cpath class='st0' d='M144.82,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,135.15,144.82,134.27,144.82,133.18'/%3e %3cpath class='st0' d='M138.2,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,135.15,138.2,134.27,138.2,133.18'/%3e %3cpath class='st0' d='M131.59,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,135.15,131.59,134.27,131.59,133.18'/%3e %3cpath class='st0' d='M124.97,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,135.15,124.97,134.27,124.97,133.18'/%3e %3cpath class='st0' d='M118.35,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,135.15,118.35,134.27,118.35,133.18'/%3e %3cpath class='st0' d='M111.74,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,135.15,111.74,134.27,111.74,133.18'/%3e %3cpath class='st0' d='M105.12,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,135.15,105.12,134.27,105.12,133.18'/%3e %3cpath class='st0' d='M98.5,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,135.15,98.5,134.27,98.5,133.18'/%3e %3cpath class='st0' d='M91.89,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,135.15,91.89,134.27,91.89,133.18'/%3e %3cpath class='st0' d='M85.27,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,135.15,85.27,134.27,85.27,133.18'/%3e %3cpath class='st0' d='M78.65,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,135.15,78.65,134.27,78.65,133.18'/%3e %3cpath class='st0' d='M72.04,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,135.15,72.04,134.27,72.04,133.18'/%3e %3cpath class='st0' d='M65.42,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,135.15,65.42,134.27,65.42,133.18'/%3e %3cpath class='st0' d='M58.81,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,135.15,58.81,134.27,58.81,133.18'/%3e %3cpath class='st0' d='M175.35,55.41c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,54.53,176.43,55.41,175.35,55.41'/%3e %3cpath class='st0' d='M175.35,61.82c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,61.82,175.35,61.82'/%3e %3cpath class='st0' d='M175.35,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,68.24,175.35,68.24'/%3e %3cpath class='st0' d='M175.35,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,73.77,176.43,74.65,175.35,74.65'/%3e %3cpath class='st0' d='M175.35,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,80.18,176.43,81.06,175.35,81.06'/%3e %3cpath class='st0' d='M175.35,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,86.6,176.43,87.48,175.35,87.48'/%3e %3cpath class='st0' d='M175.35,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,93.89,175.35,93.89'/%3e %3cpath class='st0' d='M175.35,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,100.3,175.35,100.3'/%3e %3cpath class='st0' d='M175.35,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,105.83,176.43,106.71,175.35,106.71'/%3e %3cpath class='st0' d='M175.35,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,112.25,176.43,113.13,175.35,113.13'/%3e %3cpath class='st0' d='M175.35,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,118.66,176.43,119.54,175.35,119.54'/%3e %3cpath class='st0' d='M12.57,62.05c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 c0,0.54-0.21,1.04-0.57,1.39C13.6,61.83,13.11,62.05,12.57,62.05'/%3e %3cpath class='st0' d='M16.68,57.47c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C18.64,56.58,17.76,57.46,16.68,57.47'/%3e %3cpath class='st0' d='M21.06,53.11c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C23.02,52.22,22.15,53.1,21.06,53.11'/%3e %3cpath class='st0' d='M25.45,48.75c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C27.41,47.86,26.53,48.75,25.45,48.75'/%3e %3cpath class='st0' d='M29.83,44.39c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C31.79,43.5,30.92,44.39,29.83,44.39'/%3e %3cpath class='st0' d='M12.28,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,68.24,12.28,68.24'/%3e %3cpath class='st0' d='M12.28,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,73.77,13.37,74.65,12.28,74.65'/%3e %3cpath class='st0' d='M12.28,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,80.18,13.37,81.06,12.28,81.06'/%3e %3cpath class='st0' d='M12.28,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,86.6,13.37,87.48,12.28,87.48'/%3e %3cpath class='st0' d='M12.28,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,93.89,12.28,93.89'/%3e %3cpath class='st0' d='M12.28,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,100.3,12.28,100.3'/%3e %3cpath class='st0' d='M12.28,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,105.83,13.37,106.71,12.28,106.71'/%3e %3cpath class='st0' d='M12.28,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,112.25,13.37,113.13,12.28,113.13'/%3e %3cpath class='st0' d='M12.28,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,118.66,13.37,119.54,12.28,119.54'/%3e %3cpath class='st0' d='M52.19,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,135.15,52.19,134.27,52.19,133.18'/%3e %3cpath class='st0' d='M45.57,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,135.15,45.57,134.27,45.57,133.18'/%3e %3cpath class='st0' d='M38.96,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,135.15,38.96,134.27,38.96,133.18'/%3e %3cpath class='st0' d='M32.34,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.22,135.15,32.34,134.27,32.34,133.18'/%3e %3cpath class='st0' d='M25.72,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C26.6,135.15,25.72,134.27,25.72,133.18'/%3e %3cpath class='st0' d='M158.05,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,40.02,158.05,39.14,158.05,38.05'/%3e %3cpath class='st0' d='M151.44,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,40.02,151.44,39.14,151.44,38.05'/%3e %3cpath class='st0' d='M144.82,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,40.02,144.82,39.14,144.82,38.05'/%3e %3cpath class='st0' d='M138.2,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,40.02,138.2,39.14,138.2,38.05'/%3e %3cpath class='st0' d='M131.59,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,40.02,131.59,39.14,131.59,38.05'/%3e %3cpath class='st0' d='M124.97,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,40.02,124.97,39.14,124.97,38.05'/%3e %3cpath class='st0' d='M118.35,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,40.02,118.35,39.14,118.35,38.05'/%3e %3cpath class='st0' d='M111.74,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,40.02,111.74,39.14,111.74,38.05'/%3e %3cpath class='st0' d='M105.12,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,40.02,105.12,39.14,105.12,38.05'/%3e %3cpath class='st0' d='M98.5,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,40.02,98.5,39.14,98.5,38.05'/%3e %3cpath class='st0' d='M91.89,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,40.02,91.89,39.14,91.89,38.05'/%3e %3cpath class='st0' d='M85.27,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,40.02,85.27,39.14,85.27,38.05'/%3e %3cpath class='st0' d='M78.65,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,40.02,78.65,39.14,78.65,38.05'/%3e %3cpath class='st0' d='M72.04,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,40.02,72.04,39.14,72.04,38.05'/%3e %3cpath class='st0' d='M65.42,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,40.02,65.42,39.14,65.42,38.05'/%3e %3cpath class='st0' d='M58.81,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,40.02,58.81,39.14,58.81,38.05'/%3e %3cpath class='st0' d='M52.19,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,40.02,52.19,39.14,52.19,38.05'/%3e %3cpath class='st0' d='M45.57,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,40.02,45.57,39.14,45.57,38.05'/%3e %3cpath class='st0' d='M38.96,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,40.02,38.96,39.14,38.96,38.05'/%3e %3cpath class='st0' d='M32.44,38.33c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.32,40.3,32.44,39.42,32.44,38.33'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,38.05c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C165.55,36.08,164.67,36.96,164.67,38.05'/%3e %3cpath class='st0' d='M170.63,41.16c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C171.51,39.19,170.63,40.07,170.63,41.16'/%3e %3cpath class='st0' d='M173.3,47.13c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C174.18,45.16,173.3,46.04,173.3,47.13'/%3e %3cpath class='st0' d='M22.91,133.07c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C22.03,135.03,22.91,134.15,22.91,133.07'/%3e %3cpath class='st0' d='M16.95,129.96c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C16.07,131.93,16.95,131.05,16.95,129.96'/%3e %3cpath class='st0' d='M14.27,123.99c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C13.39,125.96,14.27,125.08,14.27,123.99'/%3e %3c/g%3e %3c/svg%3e">
                            </div><img alt="iPhone 17 Pro Max"
                                srcset="https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fapple%2Fiphone-17-pro-max%2Fiphone-17-pro-max-cosmic-orange-01-m.webp&w=256&q=75, https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fapple%2Fiphone-17-pro-max%2Fiphone-17-pro-max-cosmic-orange-01-m.webp&w=384&q=75 2x">
                            <p class="brand">Apple</p>
                            <p class="device-name">iPhone 17 Pro Max</p>
                            <p class="device-prefix">Device from</p>
                            <p class="device-price"><span class="dollar">$</span><span
                                    class="device-recurringCharge">61.08</span><span class="mth">per month</span></p>
                            <p class="device-mincost">Min cost $2,198.88 over 36 months. Plan cost additional.</p>
                            <div class="primaryBtn">Shop now</div>
                        </div>
                    </div>
                </a><a class="deviceCard itemCard" title="iPhone 17 Pro"
                    href="https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro" aria-hidden="false">
                    <div class="device-item">
                        <div class="device-item-device">
                            <div class="device-item-badge"><img alt="5G approved device"
                                    src="data:image/svg+xml,%3csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2,.cls-3%7bfill:none;%7d.cls-2,.cls-3%7bstroke:%23333;stroke-width:8px;%7d.cls-2%7bstroke-linecap:round;stroke-linejoin:round;%7d.cls-3%7bstroke-miterlimit:10;%7d%3c/style%3e%3c/defs%3e%3ctitle%3e5g%3c/title%3e%3crect class='cls-1' width='192' height='192'/%3e%3cpath class='cls-2' d='M122,98h14v12a9.57,9.57,0,0,1-7,9.5c-8.28,2.26-25,3.73-25-23.5,0-29.5,26.56-25.9,30.5-18.5' transform='translate(0 0)'/%3e%3ccircle class='cls-3' cx='96' cy='96' r='76'/%3e%3cpath class='cls-2' d='M83.84,72.39H63.5v21l2.19-1.08A14.73,14.73,0,1,1,61.8,117' transform='translate(0 0)'/%3e%3c/svg%3e">
                                <img alt="eSIM-enabled device"
                                    src="data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 26.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='ICON'   xmlns='http://www.w3.org/2000/svg'   xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 192 192' style='enable-background:new 0 0 192 192;' xml:space='preserve'%3e %3cstyle type='text/css'%3e .st0%7bfill:%23333333;%7d %3c/style%3e %3cg%3e %3cpath class='st0' d='M42.43,93.32c-0.03,0.14-0.05,0.3-0.05,0.47c0,0.73,0.16,1.38,0.49,1.95c0.33,0.57,0.76,1.06,1.3,1.46 c0.54,0.4,1.15,0.7,1.82,0.91c0.68,0.21,1.38,0.31,2.11,0.31c1.32,0,2.48-0.24,3.49-0.73c1.01-0.49,1.91-1.15,2.71-1.98l5.26,4.11 c-1.67,1.77-3.52,3.05-5.57,3.83c-2.05,0.78-4.25,1.17-6.61,1.17c-1.81,0-3.48-0.25-5.02-0.76c-1.54-0.5-2.89-1.25-4.04-2.24 c-1.15-0.99-2.05-2.21-2.71-3.67c-0.66-1.46-0.99-3.12-0.99-5c0-2.22,0.39-4.3,1.17-6.22c0.78-1.93,1.86-3.6,3.23-5.02 c1.37-1.42,3.01-2.54,4.92-3.36c1.91-0.82,4.01-1.22,6.3-1.22c1.7,0,3.25,0.24,4.66,0.73c1.41,0.49,2.61,1.19,3.62,2.11 c1.01,0.92,1.79,2.06,2.34,3.41c0.55,1.35,0.83,2.92,0.83,4.69c0,0.62-0.06,1.41-0.18,2.37c-0.12,0.96-0.29,1.85-0.49,2.68H42.43z M54.24,88.22c0.03-0.17,0.05-0.35,0.05-0.52v-0.52c0-1.15-0.41-2.1-1.22-2.86c-0.82-0.76-1.99-1.15-3.51-1.15 c-0.94,0-1.78,0.17-2.52,0.49c-0.75,0.33-1.4,0.74-1.95,1.22c-0.56,0.49-1.01,1.02-1.35,1.61c-0.35,0.59-0.59,1.16-0.73,1.72H54.24 z'/%3e %3cpath class='st0' d='M85.82,76.76c-0.76-0.97-1.76-1.74-2.99-2.32c-1.23-0.57-2.42-0.86-3.57-0.86c-0.59,0-1.19,0.05-1.8,0.16 c-0.61,0.1-1.15,0.3-1.64,0.6c-0.49,0.3-0.89,0.68-1.22,1.15c-0.33,0.47-0.49,1.07-0.49,1.8c0,0.62,0.13,1.15,0.39,1.56 c0.26,0.42,0.64,0.78,1.15,1.09c0.5,0.31,1.1,0.6,1.8,0.86c0.69,0.26,1.47,0.53,2.34,0.81c1.25,0.42,2.55,0.88,3.9,1.38 c1.35,0.5,2.59,1.17,3.7,2c1.11,0.83,2.03,1.87,2.76,3.1c0.73,1.23,1.09,2.77,1.09,4.61c0,2.12-0.39,3.95-1.17,5.49 c-0.78,1.54-1.83,2.82-3.15,3.83c-1.32,1.01-2.83,1.75-4.53,2.24c-1.7,0.49-3.45,0.73-5.26,0.73c-2.64,0-5.19-0.46-7.65-1.38 c-2.46-0.92-4.51-2.23-6.14-3.93l5.83-5.94c0.9,1.11,2.09,2.04,3.57,2.79c1.47,0.75,2.94,1.12,4.4,1.12c0.66,0,1.3-0.07,1.93-0.21 c0.62-0.14,1.17-0.36,1.64-0.68c0.47-0.31,0.84-0.73,1.12-1.25c0.28-0.52,0.42-1.15,0.42-1.87c0-0.69-0.17-1.28-0.52-1.77 c-0.35-0.49-0.84-0.93-1.48-1.33c-0.64-0.4-1.44-0.76-2.39-1.09c-0.96-0.33-2.04-0.68-3.25-1.07c-1.18-0.38-2.33-0.83-3.46-1.35 c-1.13-0.52-2.13-1.19-3.02-2c-0.88-0.82-1.6-1.8-2.13-2.97c-0.54-1.16-0.81-2.58-0.81-4.24c0-2.05,0.42-3.8,1.25-5.26 c0.83-1.46,1.93-2.66,3.28-3.59c1.35-0.94,2.88-1.62,4.58-2.06c1.7-0.43,3.42-0.65,5.15-0.65c2.08,0,4.21,0.38,6.38,1.15 c2.17,0.76,4.07,1.89,5.7,3.38L85.82,76.76z'/%3e %3crect x='96.21' y='67.19' class='st0' width='8.96' height='36.86'/%3e %3cpolygon class='st0' points='144.26,104.05 144.47,77.96 144.32,77.96 134.74,104.05 128.49,104.05 119.17,77.96 119.01,77.96 119.22,104.05 110.84,104.05 110.84,67.19 123.51,67.19 131.9,90.82 132.11,90.82 140.13,67.19 153.01,67.19 153.01,104.05 '/%3e %3cpath class='st0' d='M158.05,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,135.15,158.05,134.27,158.05,133.18'/%3e %3cpath class='st0' d='M151.44,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,135.15,151.44,134.27,151.44,133.18'/%3e %3cpath class='st0' d='M144.82,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,135.15,144.82,134.27,144.82,133.18'/%3e %3cpath class='st0' d='M138.2,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,135.15,138.2,134.27,138.2,133.18'/%3e %3cpath class='st0' d='M131.59,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,135.15,131.59,134.27,131.59,133.18'/%3e %3cpath class='st0' d='M124.97,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,135.15,124.97,134.27,124.97,133.18'/%3e %3cpath class='st0' d='M118.35,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,135.15,118.35,134.27,118.35,133.18'/%3e %3cpath class='st0' d='M111.74,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,135.15,111.74,134.27,111.74,133.18'/%3e %3cpath class='st0' d='M105.12,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,135.15,105.12,134.27,105.12,133.18'/%3e %3cpath class='st0' d='M98.5,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,135.15,98.5,134.27,98.5,133.18'/%3e %3cpath class='st0' d='M91.89,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,135.15,91.89,134.27,91.89,133.18'/%3e %3cpath class='st0' d='M85.27,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,135.15,85.27,134.27,85.27,133.18'/%3e %3cpath class='st0' d='M78.65,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,135.15,78.65,134.27,78.65,133.18'/%3e %3cpath class='st0' d='M72.04,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,135.15,72.04,134.27,72.04,133.18'/%3e %3cpath class='st0' d='M65.42,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,135.15,65.42,134.27,65.42,133.18'/%3e %3cpath class='st0' d='M58.81,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,135.15,58.81,134.27,58.81,133.18'/%3e %3cpath class='st0' d='M175.35,55.41c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,54.53,176.43,55.41,175.35,55.41'/%3e %3cpath class='st0' d='M175.35,61.82c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,61.82,175.35,61.82'/%3e %3cpath class='st0' d='M175.35,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,68.24,175.35,68.24'/%3e %3cpath class='st0' d='M175.35,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,73.77,176.43,74.65,175.35,74.65'/%3e %3cpath class='st0' d='M175.35,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,80.18,176.43,81.06,175.35,81.06'/%3e %3cpath class='st0' d='M175.35,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,86.6,176.43,87.48,175.35,87.48'/%3e %3cpath class='st0' d='M175.35,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,93.89,175.35,93.89'/%3e %3cpath class='st0' d='M175.35,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,100.3,175.35,100.3'/%3e %3cpath class='st0' d='M175.35,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,105.83,176.43,106.71,175.35,106.71'/%3e %3cpath class='st0' d='M175.35,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,112.25,176.43,113.13,175.35,113.13'/%3e %3cpath class='st0' d='M175.35,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,118.66,176.43,119.54,175.35,119.54'/%3e %3cpath class='st0' d='M12.57,62.05c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 c0,0.54-0.21,1.04-0.57,1.39C13.6,61.83,13.11,62.05,12.57,62.05'/%3e %3cpath class='st0' d='M16.68,57.47c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C18.64,56.58,17.76,57.46,16.68,57.47'/%3e %3cpath class='st0' d='M21.06,53.11c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C23.02,52.22,22.15,53.1,21.06,53.11'/%3e %3cpath class='st0' d='M25.45,48.75c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C27.41,47.86,26.53,48.75,25.45,48.75'/%3e %3cpath class='st0' d='M29.83,44.39c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C31.79,43.5,30.92,44.39,29.83,44.39'/%3e %3cpath class='st0' d='M12.28,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,68.24,12.28,68.24'/%3e %3cpath class='st0' d='M12.28,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,73.77,13.37,74.65,12.28,74.65'/%3e %3cpath class='st0' d='M12.28,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,80.18,13.37,81.06,12.28,81.06'/%3e %3cpath class='st0' d='M12.28,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,86.6,13.37,87.48,12.28,87.48'/%3e %3cpath class='st0' d='M12.28,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,93.89,12.28,93.89'/%3e %3cpath class='st0' d='M12.28,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,100.3,12.28,100.3'/%3e %3cpath class='st0' d='M12.28,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,105.83,13.37,106.71,12.28,106.71'/%3e %3cpath class='st0' d='M12.28,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,112.25,13.37,113.13,12.28,113.13'/%3e %3cpath class='st0' d='M12.28,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,118.66,13.37,119.54,12.28,119.54'/%3e %3cpath class='st0' d='M52.19,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,135.15,52.19,134.27,52.19,133.18'/%3e %3cpath class='st0' d='M45.57,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,135.15,45.57,134.27,45.57,133.18'/%3e %3cpath class='st0' d='M38.96,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,135.15,38.96,134.27,38.96,133.18'/%3e %3cpath class='st0' d='M32.34,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.22,135.15,32.34,134.27,32.34,133.18'/%3e %3cpath class='st0' d='M25.72,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C26.6,135.15,25.72,134.27,25.72,133.18'/%3e %3cpath class='st0' d='M158.05,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,40.02,158.05,39.14,158.05,38.05'/%3e %3cpath class='st0' d='M151.44,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,40.02,151.44,39.14,151.44,38.05'/%3e %3cpath class='st0' d='M144.82,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,40.02,144.82,39.14,144.82,38.05'/%3e %3cpath class='st0' d='M138.2,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,40.02,138.2,39.14,138.2,38.05'/%3e %3cpath class='st0' d='M131.59,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,40.02,131.59,39.14,131.59,38.05'/%3e %3cpath class='st0' d='M124.97,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,40.02,124.97,39.14,124.97,38.05'/%3e %3cpath class='st0' d='M118.35,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,40.02,118.35,39.14,118.35,38.05'/%3e %3cpath class='st0' d='M111.74,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,40.02,111.74,39.14,111.74,38.05'/%3e %3cpath class='st0' d='M105.12,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,40.02,105.12,39.14,105.12,38.05'/%3e %3cpath class='st0' d='M98.5,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,40.02,98.5,39.14,98.5,38.05'/%3e %3cpath class='st0' d='M91.89,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,40.02,91.89,39.14,91.89,38.05'/%3e %3cpath class='st0' d='M85.27,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,40.02,85.27,39.14,85.27,38.05'/%3e %3cpath class='st0' d='M78.65,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,40.02,78.65,39.14,78.65,38.05'/%3e %3cpath class='st0' d='M72.04,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,40.02,72.04,39.14,72.04,38.05'/%3e %3cpath class='st0' d='M65.42,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,40.02,65.42,39.14,65.42,38.05'/%3e %3cpath class='st0' d='M58.81,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,40.02,58.81,39.14,58.81,38.05'/%3e %3cpath class='st0' d='M52.19,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,40.02,52.19,39.14,52.19,38.05'/%3e %3cpath class='st0' d='M45.57,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,40.02,45.57,39.14,45.57,38.05'/%3e %3cpath class='st0' d='M38.96,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,40.02,38.96,39.14,38.96,38.05'/%3e %3cpath class='st0' d='M32.44,38.33c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.32,40.3,32.44,39.42,32.44,38.33'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,38.05c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C165.55,36.08,164.67,36.96,164.67,38.05'/%3e %3cpath class='st0' d='M170.63,41.16c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C171.51,39.19,170.63,40.07,170.63,41.16'/%3e %3cpath class='st0' d='M173.3,47.13c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C174.18,45.16,173.3,46.04,173.3,47.13'/%3e %3cpath class='st0' d='M22.91,133.07c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C22.03,135.03,22.91,134.15,22.91,133.07'/%3e %3cpath class='st0' d='M16.95,129.96c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C16.07,131.93,16.95,131.05,16.95,129.96'/%3e %3cpath class='st0' d='M14.27,123.99c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C13.39,125.96,14.27,125.08,14.27,123.99'/%3e %3c/g%3e %3c/svg%3e">
                            </div><img alt="iPhone 17 Pro"
                                srcset="https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fapple%2Fiphone-17-pro%2Fiphone-17-pro-cosmic-orange-01-m.webp&w=256&q=75, https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fapple%2Fiphone-17-pro%2Fiphone-17-pro-cosmic-orange-01-m.webp&w=384&q=75 2x">
                            <p class="brand">Apple</p>
                            <p class="device-name">iPhone 17 Pro</p>
                            <p class="device-prefix">Device from</p>
                            <p class="device-price"><span class="dollar">$</span><span
                                    class="device-recurringCharge">55.52</span><span class="mth">per month</span></p>
                            <p class="device-mincost">Min cost $1,998.72 over 36 months. Plan cost additional.</p>
                            <div class="primaryBtn">Shop now</div>
                        </div>
                    </div>
                </a><a class="deviceCard itemCard" title="Samsung Galaxy S25 FE"
                    href="https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-s25-fe"
                    aria-hidden="false">
                    <div class="device-item">
                        <div class="device-item-device">
                            <div class="device-item-badge"><img alt="5G approved device"
                                    src="data:image/svg+xml,%3csvg id='Layer_1' data-name='Layer 1'                                                                 xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2,.cls-3%7bfill:none;%7d.cls-2,.cls-3%7bstroke:%23333;stroke-width:8px;%7d.cls-2%7bstroke-linecap:round;stroke-linejoin:round;%7d.cls-3%7bstroke-miterlimit:10;%7d%3c/style%3e%3c/defs%3e%3ctitle%3e5g%3c/title%3e%3crect class='cls-1' width='192' height='192'/%3e%3cpath class='cls-2' d='M122,98h14v12a9.57,9.57,0,0,1-7,9.5c-8.28,2.26-25,3.73-25-23.5,0-29.5,26.56-25.9,30.5-18.5' transform='translate(0 0)'/%3e%3ccircle class='cls-3' cx='96' cy='96' r='76'/%3e%3cpath class='cls-2' d='M83.84,72.39H63.5v21l2.19-1.08A14.73,14.73,0,1,1,61.8,117' transform='translate(0 0)'/%3e%3c/svg%3e">
                                <img alt="eSIM-enabled device"
                                    src="data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 26.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='ICON'                                                                   xmlns='http://www.w3.org/2000/svg'                                                                   xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 192 192' style='enable-background:new 0 0 192 192;' xml:space='preserve'%3e %3cstyle type='text/css'%3e .st0%7bfill:%23333333;%7d %3c/style%3e %3cg%3e %3cpath class='st0' d='M42.43,93.32c-0.03,0.14-0.05,0.3-0.05,0.47c0,0.73,0.16,1.38,0.49,1.95c0.33,0.57,0.76,1.06,1.3,1.46 c0.54,0.4,1.15,0.7,1.82,0.91c0.68,0.21,1.38,0.31,2.11,0.31c1.32,0,2.48-0.24,3.49-0.73c1.01-0.49,1.91-1.15,2.71-1.98l5.26,4.11 c-1.67,1.77-3.52,3.05-5.57,3.83c-2.05,0.78-4.25,1.17-6.61,1.17c-1.81,0-3.48-0.25-5.02-0.76c-1.54-0.5-2.89-1.25-4.04-2.24 c-1.15-0.99-2.05-2.21-2.71-3.67c-0.66-1.46-0.99-3.12-0.99-5c0-2.22,0.39-4.3,1.17-6.22c0.78-1.93,1.86-3.6,3.23-5.02 c1.37-1.42,3.01-2.54,4.92-3.36c1.91-0.82,4.01-1.22,6.3-1.22c1.7,0,3.25,0.24,4.66,0.73c1.41,0.49,2.61,1.19,3.62,2.11 c1.01,0.92,1.79,2.06,2.34,3.41c0.55,1.35,0.83,2.92,0.83,4.69c0,0.62-0.06,1.41-0.18,2.37c-0.12,0.96-0.29,1.85-0.49,2.68H42.43z M54.24,88.22c0.03-0.17,0.05-0.35,0.05-0.52v-0.52c0-1.15-0.41-2.1-1.22-2.86c-0.82-0.76-1.99-1.15-3.51-1.15 c-0.94,0-1.78,0.17-2.52,0.49c-0.75,0.33-1.4,0.74-1.95,1.22c-0.56,0.49-1.01,1.02-1.35,1.61c-0.35,0.59-0.59,1.16-0.73,1.72H54.24 z'/%3e %3cpath class='st0' d='M85.82,76.76c-0.76-0.97-1.76-1.74-2.99-2.32c-1.23-0.57-2.42-0.86-3.57-0.86c-0.59,0-1.19,0.05-1.8,0.16 c-0.61,0.1-1.15,0.3-1.64,0.6c-0.49,0.3-0.89,0.68-1.22,1.15c-0.33,0.47-0.49,1.07-0.49,1.8c0,0.62,0.13,1.15,0.39,1.56 c0.26,0.42,0.64,0.78,1.15,1.09c0.5,0.31,1.1,0.6,1.8,0.86c0.69,0.26,1.47,0.53,2.34,0.81c1.25,0.42,2.55,0.88,3.9,1.38 c1.35,0.5,2.59,1.17,3.7,2c1.11,0.83,2.03,1.87,2.76,3.1c0.73,1.23,1.09,2.77,1.09,4.61c0,2.12-0.39,3.95-1.17,5.49 c-0.78,1.54-1.83,2.82-3.15,3.83c-1.32,1.01-2.83,1.75-4.53,2.24c-1.7,0.49-3.45,0.73-5.26,0.73c-2.64,0-5.19-0.46-7.65-1.38 c-2.46-0.92-4.51-2.23-6.14-3.93l5.83-5.94c0.9,1.11,2.09,2.04,3.57,2.79c1.47,0.75,2.94,1.12,4.4,1.12c0.66,0,1.3-0.07,1.93-0.21 c0.62-0.14,1.17-0.36,1.64-0.68c0.47-0.31,0.84-0.73,1.12-1.25c0.28-0.52,0.42-1.15,0.42-1.87c0-0.69-0.17-1.28-0.52-1.77 c-0.35-0.49-0.84-0.93-1.48-1.33c-0.64-0.4-1.44-0.76-2.39-1.09c-0.96-0.33-2.04-0.68-3.25-1.07c-1.18-0.38-2.33-0.83-3.46-1.35 c-1.13-0.52-2.13-1.19-3.02-2c-0.88-0.82-1.6-1.8-2.13-2.97c-0.54-1.16-0.81-2.58-0.81-4.24c0-2.05,0.42-3.8,1.25-5.26 c0.83-1.46,1.93-2.66,3.28-3.59c1.35-0.94,2.88-1.62,4.58-2.06c1.7-0.43,3.42-0.65,5.15-0.65c2.08,0,4.21,0.38,6.38,1.15 c2.17,0.76,4.07,1.89,5.7,3.38L85.82,76.76z'/%3e %3crect x='96.21' y='67.19' class='st0' width='8.96' height='36.86'/%3e %3cpolygon class='st0' points='144.26,104.05 144.47,77.96 144.32,77.96 134.74,104.05 128.49,104.05 119.17,77.96 119.01,77.96 119.22,104.05 110.84,104.05 110.84,67.19 123.51,67.19 131.9,90.82 132.11,90.82 140.13,67.19 153.01,67.19 153.01,104.05 '/%3e %3cpath class='st0' d='M158.05,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,135.15,158.05,134.27,158.05,133.18'/%3e %3cpath class='st0' d='M151.44,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,135.15,151.44,134.27,151.44,133.18'/%3e %3cpath class='st0' d='M144.82,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,135.15,144.82,134.27,144.82,133.18'/%3e %3cpath class='st0' d='M138.2,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,135.15,138.2,134.27,138.2,133.18'/%3e %3cpath class='st0' d='M131.59,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,135.15,131.59,134.27,131.59,133.18'/%3e %3cpath class='st0' d='M124.97,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,135.15,124.97,134.27,124.97,133.18'/%3e %3cpath class='st0' d='M118.35,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,135.15,118.35,134.27,118.35,133.18'/%3e %3cpath class='st0' d='M111.74,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,135.15,111.74,134.27,111.74,133.18'/%3e %3cpath class='st0' d='M105.12,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,135.15,105.12,134.27,105.12,133.18'/%3e %3cpath class='st0' d='M98.5,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,135.15,98.5,134.27,98.5,133.18'/%3e %3cpath class='st0' d='M91.89,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,135.15,91.89,134.27,91.89,133.18'/%3e %3cpath class='st0' d='M85.27,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,135.15,85.27,134.27,85.27,133.18'/%3e %3cpath class='st0' d='M78.65,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,135.15,78.65,134.27,78.65,133.18'/%3e %3cpath class='st0' d='M72.04,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,135.15,72.04,134.27,72.04,133.18'/%3e %3cpath class='st0' d='M65.42,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,135.15,65.42,134.27,65.42,133.18'/%3e %3cpath class='st0' d='M58.81,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,135.15,58.81,134.27,58.81,133.18'/%3e %3cpath class='st0' d='M175.35,55.41c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,54.53,176.43,55.41,175.35,55.41'/%3e %3cpath class='st0' d='M175.35,61.82c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,61.82,175.35,61.82'/%3e %3cpath class='st0' d='M175.35,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,68.24,175.35,68.24'/%3e %3cpath class='st0' d='M175.35,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,73.77,176.43,74.65,175.35,74.65'/%3e %3cpath class='st0' d='M175.35,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,80.18,176.43,81.06,175.35,81.06'/%3e %3cpath class='st0' d='M175.35,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,86.6,176.43,87.48,175.35,87.48'/%3e %3cpath class='st0' d='M175.35,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,93.89,175.35,93.89'/%3e %3cpath class='st0' d='M175.35,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,100.3,175.35,100.3'/%3e %3cpath class='st0' d='M175.35,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,105.83,176.43,106.71,175.35,106.71'/%3e %3cpath class='st0' d='M175.35,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,112.25,176.43,113.13,175.35,113.13'/%3e %3cpath class='st0' d='M175.35,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,118.66,176.43,119.54,175.35,119.54'/%3e %3cpath class='st0' d='M12.57,62.05c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 c0,0.54-0.21,1.04-0.57,1.39C13.6,61.83,13.11,62.05,12.57,62.05'/%3e %3cpath class='st0' d='M16.68,57.47c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C18.64,56.58,17.76,57.46,16.68,57.47'/%3e %3cpath class='st0' d='M21.06,53.11c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C23.02,52.22,22.15,53.1,21.06,53.11'/%3e %3cpath class='st0' d='M25.45,48.75c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C27.41,47.86,26.53,48.75,25.45,48.75'/%3e %3cpath class='st0' d='M29.83,44.39c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C31.79,43.5,30.92,44.39,29.83,44.39'/%3e %3cpath class='st0' d='M12.28,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,68.24,12.28,68.24'/%3e %3cpath class='st0' d='M12.28,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,73.77,13.37,74.65,12.28,74.65'/%3e %3cpath class='st0' d='M12.28,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,80.18,13.37,81.06,12.28,81.06'/%3e %3cpath class='st0' d='M12.28,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,86.6,13.37,87.48,12.28,87.48'/%3e %3cpath class='st0' d='M12.28,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,93.89,12.28,93.89'/%3e %3cpath class='st0' d='M12.28,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,100.3,12.28,100.3'/%3e %3cpath class='st0' d='M12.28,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,105.83,13.37,106.71,12.28,106.71'/%3e %3cpath class='st0' d='M12.28,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,112.25,13.37,113.13,12.28,113.13'/%3e %3cpath class='st0' d='M12.28,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,118.66,13.37,119.54,12.28,119.54'/%3e %3cpath class='st0' d='M52.19,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,135.15,52.19,134.27,52.19,133.18'/%3e %3cpath class='st0' d='M45.57,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,135.15,45.57,134.27,45.57,133.18'/%3e %3cpath class='st0' d='M38.96,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,135.15,38.96,134.27,38.96,133.18'/%3e %3cpath class='st0' d='M32.34,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.22,135.15,32.34,134.27,32.34,133.18'/%3e %3cpath class='st0' d='M25.72,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C26.6,135.15,25.72,134.27,25.72,133.18'/%3e %3cpath class='st0' d='M158.05,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,40.02,158.05,39.14,158.05,38.05'/%3e %3cpath class='st0' d='M151.44,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,40.02,151.44,39.14,151.44,38.05'/%3e %3cpath class='st0' d='M144.82,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,40.02,144.82,39.14,144.82,38.05'/%3e %3cpath class='st0' d='M138.2,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,40.02,138.2,39.14,138.2,38.05'/%3e %3cpath class='st0' d='M131.59,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,40.02,131.59,39.14,131.59,38.05'/%3e %3cpath class='st0' d='M124.97,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,40.02,124.97,39.14,124.97,38.05'/%3e %3cpath class='st0' d='M118.35,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,40.02,118.35,39.14,118.35,38.05'/%3e %3cpath class='st0' d='M111.74,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,40.02,111.74,39.14,111.74,38.05'/%3e %3cpath class='st0' d='M105.12,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,40.02,105.12,39.14,105.12,38.05'/%3e %3cpath class='st0' d='M98.5,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,40.02,98.5,39.14,98.5,38.05'/%3e %3cpath class='st0' d='M91.89,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,40.02,91.89,39.14,91.89,38.05'/%3e %3cpath class='st0' d='M85.27,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,40.02,85.27,39.14,85.27,38.05'/%3e %3cpath class='st0' d='M78.65,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,40.02,78.65,39.14,78.65,38.05'/%3e %3cpath class='st0' d='M72.04,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,40.02,72.04,39.14,72.04,38.05'/%3e %3cpath class='st0' d='M65.42,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,40.02,65.42,39.14,65.42,38.05'/%3e %3cpath class='st0' d='M58.81,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,40.02,58.81,39.14,58.81,38.05'/%3e %3cpath class='st0' d='M52.19,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,40.02,52.19,39.14,52.19,38.05'/%3e %3cpath class='st0' d='M45.57,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,40.02,45.57,39.14,45.57,38.05'/%3e %3cpath class='st0' d='M38.96,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,40.02,38.96,39.14,38.96,38.05'/%3e %3cpath class='st0' d='M32.44,38.33c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.32,40.3,32.44,39.42,32.44,38.33'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,38.05c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C165.55,36.08,164.67,36.96,164.67,38.05'/%3e %3cpath class='st0' d='M170.63,41.16c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C171.51,39.19,170.63,40.07,170.63,41.16'/%3e %3cpath class='st0' d='M173.3,47.13c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C174.18,45.16,173.3,46.04,173.3,47.13'/%3e %3cpath class='st0' d='M22.91,133.07c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C22.03,135.03,22.91,134.15,22.91,133.07'/%3e %3cpath class='st0' d='M16.95,129.96c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C16.07,131.93,16.95,131.05,16.95,129.96'/%3e %3cpath class='st0' d='M14.27,123.99c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C13.39,125.96,14.27,125.08,14.27,123.99'/%3e %3c/g%3e %3c/svg%3e">
                            </div><img alt="Samsung Galaxy S25 FE"
                                srcset="/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fsamsung%2Fsamsung-galaxy-s25-fe%2Fsamsung-galaxy-s25-fe-navy-01-m.webp&w=256&q=75, /_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fsamsung%2Fsamsung-galaxy-s25-fe%2Fsamsung-galaxy-s25-fe-navy-01-m.webp&w=384&q=75 2x">
                            <p class="brand">Samsung</p>
                            <p class="device-name">Samsung Galaxy S25 FE</p>
                            <p class="device-prefix">Device from</p>
                            <p class="device-price"><span class="dollar">$</span><span
                                    class="device-recurringCharge">20.79</span><span
                                    class="device-was-price">$30.52</span><span class="mth">per month</span></p>
                            <p class="device-mincost">Min cost $748.44 over 36 months. Plan cost additional.</p>
                            <div class="primaryBtn">Shop now</div>
                        </div>
                    </div>
                </a></div>
            <div class="deviceSet" id="appleDevices"><a class="deviceCard itemCard" title="iPhone 17 Pro Max"
                    href="https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro-max" aria-hidden="false">
                    <div class="device-item">
                        <div class="device-item-device">
                            <div class="device-item-badge"><img alt="5G approved device"
                                    src="data:image/svg+xml,%3csvg id='Layer_1' data-name='Layer 1'                 xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2,.cls-3%7bfill:none;%7d.cls-2,.cls-3%7bstroke:%23333;stroke-width:8px;%7d.cls-2%7bstroke-linecap:round;stroke-linejoin:round;%7d.cls-3%7bstroke-miterlimit:10;%7d%3c/style%3e%3c/defs%3e%3ctitle%3e5g%3c/title%3e%3crect class='cls-1' width='192' height='192'/%3e%3cpath class='cls-2' d='M122,98h14v12a9.57,9.57,0,0,1-7,9.5c-8.28,2.26-25,3.73-25-23.5,0-29.5,26.56-25.9,30.5-18.5' transform='translate(0 0)'/%3e%3ccircle class='cls-3' cx='96' cy='96' r='76'/%3e%3cpath class='cls-2' d='M83.84,72.39H63.5v21l2.19-1.08A14.73,14.73,0,1,1,61.8,117' transform='translate(0 0)'/%3e%3c/svg%3e">
                                <img alt="eSIM-enabled device"
                                    src="data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 26.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='ICON'                   xmlns='http://www.w3.org/2000/svg'                   xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 192 192' style='enable-background:new 0 0 192 192;' xml:space='preserve'%3e %3cstyle type='text/css'%3e .st0%7bfill:%23333333;%7d %3c/style%3e %3cg%3e %3cpath class='st0' d='M42.43,93.32c-0.03,0.14-0.05,0.3-0.05,0.47c0,0.73,0.16,1.38,0.49,1.95c0.33,0.57,0.76,1.06,1.3,1.46 c0.54,0.4,1.15,0.7,1.82,0.91c0.68,0.21,1.38,0.31,2.11,0.31c1.32,0,2.48-0.24,3.49-0.73c1.01-0.49,1.91-1.15,2.71-1.98l5.26,4.11 c-1.67,1.77-3.52,3.05-5.57,3.83c-2.05,0.78-4.25,1.17-6.61,1.17c-1.81,0-3.48-0.25-5.02-0.76c-1.54-0.5-2.89-1.25-4.04-2.24 c-1.15-0.99-2.05-2.21-2.71-3.67c-0.66-1.46-0.99-3.12-0.99-5c0-2.22,0.39-4.3,1.17-6.22c0.78-1.93,1.86-3.6,3.23-5.02 c1.37-1.42,3.01-2.54,4.92-3.36c1.91-0.82,4.01-1.22,6.3-1.22c1.7,0,3.25,0.24,4.66,0.73c1.41,0.49,2.61,1.19,3.62,2.11 c1.01,0.92,1.79,2.06,2.34,3.41c0.55,1.35,0.83,2.92,0.83,4.69c0,0.62-0.06,1.41-0.18,2.37c-0.12,0.96-0.29,1.85-0.49,2.68H42.43z M54.24,88.22c0.03-0.17,0.05-0.35,0.05-0.52v-0.52c0-1.15-0.41-2.1-1.22-2.86c-0.82-0.76-1.99-1.15-3.51-1.15 c-0.94,0-1.78,0.17-2.52,0.49c-0.75,0.33-1.4,0.74-1.95,1.22c-0.56,0.49-1.01,1.02-1.35,1.61c-0.35,0.59-0.59,1.16-0.73,1.72H54.24 z'/%3e %3cpath class='st0' d='M85.82,76.76c-0.76-0.97-1.76-1.74-2.99-2.32c-1.23-0.57-2.42-0.86-3.57-0.86c-0.59,0-1.19,0.05-1.8,0.16 c-0.61,0.1-1.15,0.3-1.64,0.6c-0.49,0.3-0.89,0.68-1.22,1.15c-0.33,0.47-0.49,1.07-0.49,1.8c0,0.62,0.13,1.15,0.39,1.56 c0.26,0.42,0.64,0.78,1.15,1.09c0.5,0.31,1.1,0.6,1.8,0.86c0.69,0.26,1.47,0.53,2.34,0.81c1.25,0.42,2.55,0.88,3.9,1.38 c1.35,0.5,2.59,1.17,3.7,2c1.11,0.83,2.03,1.87,2.76,3.1c0.73,1.23,1.09,2.77,1.09,4.61c0,2.12-0.39,3.95-1.17,5.49 c-0.78,1.54-1.83,2.82-3.15,3.83c-1.32,1.01-2.83,1.75-4.53,2.24c-1.7,0.49-3.45,0.73-5.26,0.73c-2.64,0-5.19-0.46-7.65-1.38 c-2.46-0.92-4.51-2.23-6.14-3.93l5.83-5.94c0.9,1.11,2.09,2.04,3.57,2.79c1.47,0.75,2.94,1.12,4.4,1.12c0.66,0,1.3-0.07,1.93-0.21 c0.62-0.14,1.17-0.36,1.64-0.68c0.47-0.31,0.84-0.73,1.12-1.25c0.28-0.52,0.42-1.15,0.42-1.87c0-0.69-0.17-1.28-0.52-1.77 c-0.35-0.49-0.84-0.93-1.48-1.33c-0.64-0.4-1.44-0.76-2.39-1.09c-0.96-0.33-2.04-0.68-3.25-1.07c-1.18-0.38-2.33-0.83-3.46-1.35 c-1.13-0.52-2.13-1.19-3.02-2c-0.88-0.82-1.6-1.8-2.13-2.97c-0.54-1.16-0.81-2.58-0.81-4.24c0-2.05,0.42-3.8,1.25-5.26 c0.83-1.46,1.93-2.66,3.28-3.59c1.35-0.94,2.88-1.62,4.58-2.06c1.7-0.43,3.42-0.65,5.15-0.65c2.08,0,4.21,0.38,6.38,1.15 c2.17,0.76,4.07,1.89,5.7,3.38L85.82,76.76z'/%3e %3crect x='96.21' y='67.19' class='st0' width='8.96' height='36.86'/%3e %3cpolygon class='st0' points='144.26,104.05 144.47,77.96 144.32,77.96 134.74,104.05 128.49,104.05 119.17,77.96 119.01,77.96 119.22,104.05 110.84,104.05 110.84,67.19 123.51,67.19 131.9,90.82 132.11,90.82 140.13,67.19 153.01,67.19 153.01,104.05 '/%3e %3cpath class='st0' d='M158.05,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,135.15,158.05,134.27,158.05,133.18'/%3e %3cpath class='st0' d='M151.44,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,135.15,151.44,134.27,151.44,133.18'/%3e %3cpath class='st0' d='M144.82,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,135.15,144.82,134.27,144.82,133.18'/%3e %3cpath class='st0' d='M138.2,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,135.15,138.2,134.27,138.2,133.18'/%3e %3cpath class='st0' d='M131.59,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,135.15,131.59,134.27,131.59,133.18'/%3e %3cpath class='st0' d='M124.97,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,135.15,124.97,134.27,124.97,133.18'/%3e %3cpath class='st0' d='M118.35,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,135.15,118.35,134.27,118.35,133.18'/%3e %3cpath class='st0' d='M111.74,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,135.15,111.74,134.27,111.74,133.18'/%3e %3cpath class='st0' d='M105.12,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,135.15,105.12,134.27,105.12,133.18'/%3e %3cpath class='st0' d='M98.5,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,135.15,98.5,134.27,98.5,133.18'/%3e %3cpath class='st0' d='M91.89,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,135.15,91.89,134.27,91.89,133.18'/%3e %3cpath class='st0' d='M85.27,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,135.15,85.27,134.27,85.27,133.18'/%3e %3cpath class='st0' d='M78.65,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,135.15,78.65,134.27,78.65,133.18'/%3e %3cpath class='st0' d='M72.04,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,135.15,72.04,134.27,72.04,133.18'/%3e %3cpath class='st0' d='M65.42,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,135.15,65.42,134.27,65.42,133.18'/%3e %3cpath class='st0' d='M58.81,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,135.15,58.81,134.27,58.81,133.18'/%3e %3cpath class='st0' d='M175.35,55.41c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,54.53,176.43,55.41,175.35,55.41'/%3e %3cpath class='st0' d='M175.35,61.82c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,61.82,175.35,61.82'/%3e %3cpath class='st0' d='M175.35,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,68.24,175.35,68.24'/%3e %3cpath class='st0' d='M175.35,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,73.77,176.43,74.65,175.35,74.65'/%3e %3cpath class='st0' d='M175.35,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,80.18,176.43,81.06,175.35,81.06'/%3e %3cpath class='st0' d='M175.35,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,86.6,176.43,87.48,175.35,87.48'/%3e %3cpath class='st0' d='M175.35,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,93.89,175.35,93.89'/%3e %3cpath class='st0' d='M175.35,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,100.3,175.35,100.3'/%3e %3cpath class='st0' d='M175.35,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,105.83,176.43,106.71,175.35,106.71'/%3e %3cpath class='st0' d='M175.35,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,112.25,176.43,113.13,175.35,113.13'/%3e %3cpath class='st0' d='M175.35,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,118.66,176.43,119.54,175.35,119.54'/%3e %3cpath class='st0' d='M12.57,62.05c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 c0,0.54-0.21,1.04-0.57,1.39C13.6,61.83,13.11,62.05,12.57,62.05'/%3e %3cpath class='st0' d='M16.68,57.47c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C18.64,56.58,17.76,57.46,16.68,57.47'/%3e %3cpath class='st0' d='M21.06,53.11c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C23.02,52.22,22.15,53.1,21.06,53.11'/%3e %3cpath class='st0' d='M25.45,48.75c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C27.41,47.86,26.53,48.75,25.45,48.75'/%3e %3cpath class='st0' d='M29.83,44.39c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C31.79,43.5,30.92,44.39,29.83,44.39'/%3e %3cpath class='st0' d='M12.28,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,68.24,12.28,68.24'/%3e %3cpath class='st0' d='M12.28,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,73.77,13.37,74.65,12.28,74.65'/%3e %3cpath class='st0' d='M12.28,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,80.18,13.37,81.06,12.28,81.06'/%3e %3cpath class='st0' d='M12.28,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,86.6,13.37,87.48,12.28,87.48'/%3e %3cpath class='st0' d='M12.28,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,93.89,12.28,93.89'/%3e %3cpath class='st0' d='M12.28,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,100.3,12.28,100.3'/%3e %3cpath class='st0' d='M12.28,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,105.83,13.37,106.71,12.28,106.71'/%3e %3cpath class='st0' d='M12.28,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,112.25,13.37,113.13,12.28,113.13'/%3e %3cpath class='st0' d='M12.28,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,118.66,13.37,119.54,12.28,119.54'/%3e %3cpath class='st0' d='M52.19,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,135.15,52.19,134.27,52.19,133.18'/%3e %3cpath class='st0' d='M45.57,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,135.15,45.57,134.27,45.57,133.18'/%3e %3cpath class='st0' d='M38.96,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,135.15,38.96,134.27,38.96,133.18'/%3e %3cpath class='st0' d='M32.34,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.22,135.15,32.34,134.27,32.34,133.18'/%3e %3cpath class='st0' d='M25.72,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C26.6,135.15,25.72,134.27,25.72,133.18'/%3e %3cpath class='st0' d='M158.05,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,40.02,158.05,39.14,158.05,38.05'/%3e %3cpath class='st0' d='M151.44,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,40.02,151.44,39.14,151.44,38.05'/%3e %3cpath class='st0' d='M144.82,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,40.02,144.82,39.14,144.82,38.05'/%3e %3cpath class='st0' d='M138.2,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,40.02,138.2,39.14,138.2,38.05'/%3e %3cpath class='st0' d='M131.59,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,40.02,131.59,39.14,131.59,38.05'/%3e %3cpath class='st0' d='M124.97,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,40.02,124.97,39.14,124.97,38.05'/%3e %3cpath class='st0' d='M118.35,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,40.02,118.35,39.14,118.35,38.05'/%3e %3cpath class='st0' d='M111.74,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,40.02,111.74,39.14,111.74,38.05'/%3e %3cpath class='st0' d='M105.12,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,40.02,105.12,39.14,105.12,38.05'/%3e %3cpath class='st0' d='M98.5,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,40.02,98.5,39.14,98.5,38.05'/%3e %3cpath class='st0' d='M91.89,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,40.02,91.89,39.14,91.89,38.05'/%3e %3cpath class='st0' d='M85.27,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,40.02,85.27,39.14,85.27,38.05'/%3e %3cpath class='st0' d='M78.65,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,40.02,78.65,39.14,78.65,38.05'/%3e %3cpath class='st0' d='M72.04,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,40.02,72.04,39.14,72.04,38.05'/%3e %3cpath class='st0' d='M65.42,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,40.02,65.42,39.14,65.42,38.05'/%3e %3cpath class='st0' d='M58.81,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,40.02,58.81,39.14,58.81,38.05'/%3e %3cpath class='st0' d='M52.19,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,40.02,52.19,39.14,52.19,38.05'/%3e %3cpath class='st0' d='M45.57,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,40.02,45.57,39.14,45.57,38.05'/%3e %3cpath class='st0' d='M38.96,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,40.02,38.96,39.14,38.96,38.05'/%3e %3cpath class='st0' d='M32.44,38.33c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.32,40.3,32.44,39.42,32.44,38.33'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,38.05c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C165.55,36.08,164.67,36.96,164.67,38.05'/%3e %3cpath class='st0' d='M170.63,41.16c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C171.51,39.19,170.63,40.07,170.63,41.16'/%3e %3cpath class='st0' d='M173.3,47.13c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C174.18,45.16,173.3,46.04,173.3,47.13'/%3e %3cpath class='st0' d='M22.91,133.07c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C22.03,135.03,22.91,134.15,22.91,133.07'/%3e %3cpath class='st0' d='M16.95,129.96c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C16.07,131.93,16.95,131.05,16.95,129.96'/%3e %3cpath class='st0' d='M14.27,123.99c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C13.39,125.96,14.27,125.08,14.27,123.99'/%3e %3c/g%3e %3c/svg%3e">
                            </div><img alt="iPhone 17 Pro Max"
                                srcset="https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fapple%2Fiphone-17-pro-max%2Fiphone-17-pro-max-cosmic-orange-01-m.webp&w=256&q=75, https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fapple%2Fiphone-17-pro-max%2Fiphone-17-pro-max-cosmic-orange-01-m.webp&w=384&q=75 2x">
                            <p class="brand">Apple</p>
                            <p class="device-name">iPhone 17 Pro Max</p>
                            <p class="device-prefix">Device from</p>
                            <p class="device-price"><span class="dollar">$</span><span
                                    class="device-recurringCharge">61.08</span><span class="mth">per month</span></p>
                            <p class="device-mincost">Min cost $2,198.88 over 36 months. Plan cost additional.</p>
                            <div class="primaryBtn">Shop now</div>
                        </div>
                    </div>
                </a><a class="deviceCard itemCard" title="iPhone 17 Pro"
                    href="https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17-pro" aria-hidden="false">
                    <div class="device-item">
                        <div class="device-item-device">
                            <div class="device-item-badge"><img alt="5G approved device"
                                    src="data:image/svg+xml,%3csvg id='Layer_1' data-name='Layer 1'                         xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2,.cls-3%7bfill:none;%7d.cls-2,.cls-3%7bstroke:%23333;stroke-width:8px;%7d.cls-2%7bstroke-linecap:round;stroke-linejoin:round;%7d.cls-3%7bstroke-miterlimit:10;%7d%3c/style%3e%3c/defs%3e%3ctitle%3e5g%3c/title%3e%3crect class='cls-1' width='192' height='192'/%3e%3cpath class='cls-2' d='M122,98h14v12a9.57,9.57,0,0,1-7,9.5c-8.28,2.26-25,3.73-25-23.5,0-29.5,26.56-25.9,30.5-18.5' transform='translate(0 0)'/%3e%3ccircle class='cls-3' cx='96' cy='96' r='76'/%3e%3cpath class='cls-2' d='M83.84,72.39H63.5v21l2.19-1.08A14.73,14.73,0,1,1,61.8,117' transform='translate(0 0)'/%3e%3c/svg%3e">
                                <img alt="eSIM-enabled device"
                                    src="data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 26.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='ICON'                           xmlns='http://www.w3.org/2000/svg'                           xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 192 192' style='enable-background:new 0 0 192 192;' xml:space='preserve'%3e %3cstyle type='text/css'%3e .st0%7bfill:%23333333;%7d %3c/style%3e %3cg%3e %3cpath class='st0' d='M42.43,93.32c-0.03,0.14-0.05,0.3-0.05,0.47c0,0.73,0.16,1.38,0.49,1.95c0.33,0.57,0.76,1.06,1.3,1.46 c0.54,0.4,1.15,0.7,1.82,0.91c0.68,0.21,1.38,0.31,2.11,0.31c1.32,0,2.48-0.24,3.49-0.73c1.01-0.49,1.91-1.15,2.71-1.98l5.26,4.11 c-1.67,1.77-3.52,3.05-5.57,3.83c-2.05,0.78-4.25,1.17-6.61,1.17c-1.81,0-3.48-0.25-5.02-0.76c-1.54-0.5-2.89-1.25-4.04-2.24 c-1.15-0.99-2.05-2.21-2.71-3.67c-0.66-1.46-0.99-3.12-0.99-5c0-2.22,0.39-4.3,1.17-6.22c0.78-1.93,1.86-3.6,3.23-5.02 c1.37-1.42,3.01-2.54,4.92-3.36c1.91-0.82,4.01-1.22,6.3-1.22c1.7,0,3.25,0.24,4.66,0.73c1.41,0.49,2.61,1.19,3.62,2.11 c1.01,0.92,1.79,2.06,2.34,3.41c0.55,1.35,0.83,2.92,0.83,4.69c0,0.62-0.06,1.41-0.18,2.37c-0.12,0.96-0.29,1.85-0.49,2.68H42.43z M54.24,88.22c0.03-0.17,0.05-0.35,0.05-0.52v-0.52c0-1.15-0.41-2.1-1.22-2.86c-0.82-0.76-1.99-1.15-3.51-1.15 c-0.94,0-1.78,0.17-2.52,0.49c-0.75,0.33-1.4,0.74-1.95,1.22c-0.56,0.49-1.01,1.02-1.35,1.61c-0.35,0.59-0.59,1.16-0.73,1.72H54.24 z'/%3e %3cpath class='st0' d='M85.82,76.76c-0.76-0.97-1.76-1.74-2.99-2.32c-1.23-0.57-2.42-0.86-3.57-0.86c-0.59,0-1.19,0.05-1.8,0.16 c-0.61,0.1-1.15,0.3-1.64,0.6c-0.49,0.3-0.89,0.68-1.22,1.15c-0.33,0.47-0.49,1.07-0.49,1.8c0,0.62,0.13,1.15,0.39,1.56 c0.26,0.42,0.64,0.78,1.15,1.09c0.5,0.31,1.1,0.6,1.8,0.86c0.69,0.26,1.47,0.53,2.34,0.81c1.25,0.42,2.55,0.88,3.9,1.38 c1.35,0.5,2.59,1.17,3.7,2c1.11,0.83,2.03,1.87,2.76,3.1c0.73,1.23,1.09,2.77,1.09,4.61c0,2.12-0.39,3.95-1.17,5.49 c-0.78,1.54-1.83,2.82-3.15,3.83c-1.32,1.01-2.83,1.75-4.53,2.24c-1.7,0.49-3.45,0.73-5.26,0.73c-2.64,0-5.19-0.46-7.65-1.38 c-2.46-0.92-4.51-2.23-6.14-3.93l5.83-5.94c0.9,1.11,2.09,2.04,3.57,2.79c1.47,0.75,2.94,1.12,4.4,1.12c0.66,0,1.3-0.07,1.93-0.21 c0.62-0.14,1.17-0.36,1.64-0.68c0.47-0.31,0.84-0.73,1.12-1.25c0.28-0.52,0.42-1.15,0.42-1.87c0-0.69-0.17-1.28-0.52-1.77 c-0.35-0.49-0.84-0.93-1.48-1.33c-0.64-0.4-1.44-0.76-2.39-1.09c-0.96-0.33-2.04-0.68-3.25-1.07c-1.18-0.38-2.33-0.83-3.46-1.35 c-1.13-0.52-2.13-1.19-3.02-2c-0.88-0.82-1.6-1.8-2.13-2.97c-0.54-1.16-0.81-2.58-0.81-4.24c0-2.05,0.42-3.8,1.25-5.26 c0.83-1.46,1.93-2.66,3.28-3.59c1.35-0.94,2.88-1.62,4.58-2.06c1.7-0.43,3.42-0.65,5.15-0.65c2.08,0,4.21,0.38,6.38,1.15 c2.17,0.76,4.07,1.89,5.7,3.38L85.82,76.76z'/%3e %3crect x='96.21' y='67.19' class='st0' width='8.96' height='36.86'/%3e %3cpolygon class='st0' points='144.26,104.05 144.47,77.96 144.32,77.96 134.74,104.05 128.49,104.05 119.17,77.96 119.01,77.96 119.22,104.05 110.84,104.05 110.84,67.19 123.51,67.19 131.9,90.82 132.11,90.82 140.13,67.19 153.01,67.19 153.01,104.05 '/%3e %3cpath class='st0' d='M158.05,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,135.15,158.05,134.27,158.05,133.18'/%3e %3cpath class='st0' d='M151.44,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,135.15,151.44,134.27,151.44,133.18'/%3e %3cpath class='st0' d='M144.82,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,135.15,144.82,134.27,144.82,133.18'/%3e %3cpath class='st0' d='M138.2,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,135.15,138.2,134.27,138.2,133.18'/%3e %3cpath class='st0' d='M131.59,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,135.15,131.59,134.27,131.59,133.18'/%3e %3cpath class='st0' d='M124.97,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,135.15,124.97,134.27,124.97,133.18'/%3e %3cpath class='st0' d='M118.35,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,135.15,118.35,134.27,118.35,133.18'/%3e %3cpath class='st0' d='M111.74,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,135.15,111.74,134.27,111.74,133.18'/%3e %3cpath class='st0' d='M105.12,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,135.15,105.12,134.27,105.12,133.18'/%3e %3cpath class='st0' d='M98.5,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,135.15,98.5,134.27,98.5,133.18'/%3e %3cpath class='st0' d='M91.89,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,135.15,91.89,134.27,91.89,133.18'/%3e %3cpath class='st0' d='M85.27,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,135.15,85.27,134.27,85.27,133.18'/%3e %3cpath class='st0' d='M78.65,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,135.15,78.65,134.27,78.65,133.18'/%3e %3cpath class='st0' d='M72.04,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,135.15,72.04,134.27,72.04,133.18'/%3e %3cpath class='st0' d='M65.42,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,135.15,65.42,134.27,65.42,133.18'/%3e %3cpath class='st0' d='M58.81,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,135.15,58.81,134.27,58.81,133.18'/%3e %3cpath class='st0' d='M175.35,55.41c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,54.53,176.43,55.41,175.35,55.41'/%3e %3cpath class='st0' d='M175.35,61.82c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,61.82,175.35,61.82'/%3e %3cpath class='st0' d='M175.35,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,68.24,175.35,68.24'/%3e %3cpath class='st0' d='M175.35,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,73.77,176.43,74.65,175.35,74.65'/%3e %3cpath class='st0' d='M175.35,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,80.18,176.43,81.06,175.35,81.06'/%3e %3cpath class='st0' d='M175.35,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,86.6,176.43,87.48,175.35,87.48'/%3e %3cpath class='st0' d='M175.35,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,93.89,175.35,93.89'/%3e %3cpath class='st0' d='M175.35,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,100.3,175.35,100.3'/%3e %3cpath class='st0' d='M175.35,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,105.83,176.43,106.71,175.35,106.71'/%3e %3cpath class='st0' d='M175.35,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,112.25,176.43,113.13,175.35,113.13'/%3e %3cpath class='st0' d='M175.35,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,118.66,176.43,119.54,175.35,119.54'/%3e %3cpath class='st0' d='M12.57,62.05c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 c0,0.54-0.21,1.04-0.57,1.39C13.6,61.83,13.11,62.05,12.57,62.05'/%3e %3cpath class='st0' d='M16.68,57.47c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C18.64,56.58,17.76,57.46,16.68,57.47'/%3e %3cpath class='st0' d='M21.06,53.11c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C23.02,52.22,22.15,53.1,21.06,53.11'/%3e %3cpath class='st0' d='M25.45,48.75c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C27.41,47.86,26.53,48.75,25.45,48.75'/%3e %3cpath class='st0' d='M29.83,44.39c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C31.79,43.5,30.92,44.39,29.83,44.39'/%3e %3cpath class='st0' d='M12.28,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,68.24,12.28,68.24'/%3e %3cpath class='st0' d='M12.28,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,73.77,13.37,74.65,12.28,74.65'/%3e %3cpath class='st0' d='M12.28,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,80.18,13.37,81.06,12.28,81.06'/%3e %3cpath class='st0' d='M12.28,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,86.6,13.37,87.48,12.28,87.48'/%3e %3cpath class='st0' d='M12.28,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,93.89,12.28,93.89'/%3e %3cpath class='st0' d='M12.28,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,100.3,12.28,100.3'/%3e %3cpath class='st0' d='M12.28,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,105.83,13.37,106.71,12.28,106.71'/%3e %3cpath class='st0' d='M12.28,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,112.25,13.37,113.13,12.28,113.13'/%3e %3cpath class='st0' d='M12.28,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,118.66,13.37,119.54,12.28,119.54'/%3e %3cpath class='st0' d='M52.19,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,135.15,52.19,134.27,52.19,133.18'/%3e %3cpath class='st0' d='M45.57,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,135.15,45.57,134.27,45.57,133.18'/%3e %3cpath class='st0' d='M38.96,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,135.15,38.96,134.27,38.96,133.18'/%3e %3cpath class='st0' d='M32.34,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.22,135.15,32.34,134.27,32.34,133.18'/%3e %3cpath class='st0' d='M25.72,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C26.6,135.15,25.72,134.27,25.72,133.18'/%3e %3cpath class='st0' d='M158.05,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,40.02,158.05,39.14,158.05,38.05'/%3e %3cpath class='st0' d='M151.44,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,40.02,151.44,39.14,151.44,38.05'/%3e %3cpath class='st0' d='M144.82,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,40.02,144.82,39.14,144.82,38.05'/%3e %3cpath class='st0' d='M138.2,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,40.02,138.2,39.14,138.2,38.05'/%3e %3cpath class='st0' d='M131.59,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,40.02,131.59,39.14,131.59,38.05'/%3e %3cpath class='st0' d='M124.97,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,40.02,124.97,39.14,124.97,38.05'/%3e %3cpath class='st0' d='M118.35,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,40.02,118.35,39.14,118.35,38.05'/%3e %3cpath class='st0' d='M111.74,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,40.02,111.74,39.14,111.74,38.05'/%3e %3cpath class='st0' d='M105.12,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,40.02,105.12,39.14,105.12,38.05'/%3e %3cpath class='st0' d='M98.5,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,40.02,98.5,39.14,98.5,38.05'/%3e %3cpath class='st0' d='M91.89,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,40.02,91.89,39.14,91.89,38.05'/%3e %3cpath class='st0' d='M85.27,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,40.02,85.27,39.14,85.27,38.05'/%3e %3cpath class='st0' d='M78.65,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,40.02,78.65,39.14,78.65,38.05'/%3e %3cpath class='st0' d='M72.04,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,40.02,72.04,39.14,72.04,38.05'/%3e %3cpath class='st0' d='M65.42,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,40.02,65.42,39.14,65.42,38.05'/%3e %3cpath class='st0' d='M58.81,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,40.02,58.81,39.14,58.81,38.05'/%3e %3cpath class='st0' d='M52.19,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,40.02,52.19,39.14,52.19,38.05'/%3e %3cpath class='st0' d='M45.57,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,40.02,45.57,39.14,45.57,38.05'/%3e %3cpath class='st0' d='M38.96,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,40.02,38.96,39.14,38.96,38.05'/%3e %3cpath class='st0' d='M32.44,38.33c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.32,40.3,32.44,39.42,32.44,38.33'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,38.05c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C165.55,36.08,164.67,36.96,164.67,38.05'/%3e %3cpath class='st0' d='M170.63,41.16c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C171.51,39.19,170.63,40.07,170.63,41.16'/%3e %3cpath class='st0' d='M173.3,47.13c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C174.18,45.16,173.3,46.04,173.3,47.13'/%3e %3cpath class='st0' d='M22.91,133.07c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C22.03,135.03,22.91,134.15,22.91,133.07'/%3e %3cpath class='st0' d='M16.95,129.96c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C16.07,131.93,16.95,131.05,16.95,129.96'/%3e %3cpath class='st0' d='M14.27,123.99c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C13.39,125.96,14.27,125.08,14.27,123.99'/%3e %3c/g%3e %3c/svg%3e">
                            </div><img alt="iPhone 17 Pro"
                                srcset="https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fapple%2Fiphone-17-pro%2Fiphone-17-pro-cosmic-orange-01-m.webp&w=256&q=75, https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fapple%2Fiphone-17-pro%2Fiphone-17-pro-cosmic-orange-01-m.webp&w=384&q=75 2x">
                            <p class="brand">Apple</p>
                            <p class="device-name">iPhone 17 Pro</p>
                            <p class="device-prefix">Device from</p>
                            <p class="device-price"><span class="dollar">$</span><span
                                    class="device-recurringCharge">55.52</span><span class="mth">per month</span></p>
                            <p class="device-mincost">Min cost $1,998.72 over 36 months. Plan cost additional.</p>
                            <div class="primaryBtn">Shop now</div>
                        </div>
                    </div>
                </a><a class="deviceCard itemCard" title="iPhone 17"
                    href="https://www.vodafone.com.au/mobile/mobile-phones/apple/iphone-17" aria-hidden="false">
                    <div class="device-item">
                        <div class="device-item-device">
                            <div class="device-item-badge"><img alt="5G approved device"
                                    src="data:image/svg+xml,%3csvg id='Layer_1' data-name='Layer 1'                                         xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2,.cls-3%7bfill:none;%7d.cls-2,.cls-3%7bstroke:%23333;stroke-width:8px;%7d.cls-2%7bstroke-linecap:round;stroke-linejoin:round;%7d.cls-3%7bstroke-miterlimit:10;%7d%3c/style%3e%3c/defs%3e%3ctitle%3e5g%3c/title%3e%3crect class='cls-1' width='192' height='192'/%3e%3cpath class='cls-2' d='M122,98h14v12a9.57,9.57,0,0,1-7,9.5c-8.28,2.26-25,3.73-25-23.5,0-29.5,26.56-25.9,30.5-18.5' transform='translate(0 0)'/%3e%3ccircle class='cls-3' cx='96' cy='96' r='76'/%3e%3cpath class='cls-2' d='M83.84,72.39H63.5v21l2.19-1.08A14.73,14.73,0,1,1,61.8,117' transform='translate(0 0)'/%3e%3c/svg%3e">
                                <img alt="eSIM-enabled device"
                                    src="data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 26.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='ICON'                                           xmlns='http://www.w3.org/2000/svg'                                           xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 192 192' style='enable-background:new 0 0 192 192;' xml:space='preserve'%3e %3cstyle type='text/css'%3e .st0%7bfill:%23333333;%7d %3c/style%3e %3cg%3e %3cpath class='st0' d='M42.43,93.32c-0.03,0.14-0.05,0.3-0.05,0.47c0,0.73,0.16,1.38,0.49,1.95c0.33,0.57,0.76,1.06,1.3,1.46 c0.54,0.4,1.15,0.7,1.82,0.91c0.68,0.21,1.38,0.31,2.11,0.31c1.32,0,2.48-0.24,3.49-0.73c1.01-0.49,1.91-1.15,2.71-1.98l5.26,4.11 c-1.67,1.77-3.52,3.05-5.57,3.83c-2.05,0.78-4.25,1.17-6.61,1.17c-1.81,0-3.48-0.25-5.02-0.76c-1.54-0.5-2.89-1.25-4.04-2.24 c-1.15-0.99-2.05-2.21-2.71-3.67c-0.66-1.46-0.99-3.12-0.99-5c0-2.22,0.39-4.3,1.17-6.22c0.78-1.93,1.86-3.6,3.23-5.02 c1.37-1.42,3.01-2.54,4.92-3.36c1.91-0.82,4.01-1.22,6.3-1.22c1.7,0,3.25,0.24,4.66,0.73c1.41,0.49,2.61,1.19,3.62,2.11 c1.01,0.92,1.79,2.06,2.34,3.41c0.55,1.35,0.83,2.92,0.83,4.69c0,0.62-0.06,1.41-0.18,2.37c-0.12,0.96-0.29,1.85-0.49,2.68H42.43z M54.24,88.22c0.03-0.17,0.05-0.35,0.05-0.52v-0.52c0-1.15-0.41-2.1-1.22-2.86c-0.82-0.76-1.99-1.15-3.51-1.15 c-0.94,0-1.78,0.17-2.52,0.49c-0.75,0.33-1.4,0.74-1.95,1.22c-0.56,0.49-1.01,1.02-1.35,1.61c-0.35,0.59-0.59,1.16-0.73,1.72H54.24 z'/%3e %3cpath class='st0' d='M85.82,76.76c-0.76-0.97-1.76-1.74-2.99-2.32c-1.23-0.57-2.42-0.86-3.57-0.86c-0.59,0-1.19,0.05-1.8,0.16 c-0.61,0.1-1.15,0.3-1.64,0.6c-0.49,0.3-0.89,0.68-1.22,1.15c-0.33,0.47-0.49,1.07-0.49,1.8c0,0.62,0.13,1.15,0.39,1.56 c0.26,0.42,0.64,0.78,1.15,1.09c0.5,0.31,1.1,0.6,1.8,0.86c0.69,0.26,1.47,0.53,2.34,0.81c1.25,0.42,2.55,0.88,3.9,1.38 c1.35,0.5,2.59,1.17,3.7,2c1.11,0.83,2.03,1.87,2.76,3.1c0.73,1.23,1.09,2.77,1.09,4.61c0,2.12-0.39,3.95-1.17,5.49 c-0.78,1.54-1.83,2.82-3.15,3.83c-1.32,1.01-2.83,1.75-4.53,2.24c-1.7,0.49-3.45,0.73-5.26,0.73c-2.64,0-5.19-0.46-7.65-1.38 c-2.46-0.92-4.51-2.23-6.14-3.93l5.83-5.94c0.9,1.11,2.09,2.04,3.57,2.79c1.47,0.75,2.94,1.12,4.4,1.12c0.66,0,1.3-0.07,1.93-0.21 c0.62-0.14,1.17-0.36,1.64-0.68c0.47-0.31,0.84-0.73,1.12-1.25c0.28-0.52,0.42-1.15,0.42-1.87c0-0.69-0.17-1.28-0.52-1.77 c-0.35-0.49-0.84-0.93-1.48-1.33c-0.64-0.4-1.44-0.76-2.39-1.09c-0.96-0.33-2.04-0.68-3.25-1.07c-1.18-0.38-2.33-0.83-3.46-1.35 c-1.13-0.52-2.13-1.19-3.02-2c-0.88-0.82-1.6-1.8-2.13-2.97c-0.54-1.16-0.81-2.58-0.81-4.24c0-2.05,0.42-3.8,1.25-5.26 c0.83-1.46,1.93-2.66,3.28-3.59c1.35-0.94,2.88-1.62,4.58-2.06c1.7-0.43,3.42-0.65,5.15-0.65c2.08,0,4.21,0.38,6.38,1.15 c2.17,0.76,4.07,1.89,5.7,3.38L85.82,76.76z'/%3e %3crect x='96.21' y='67.19' class='st0' width='8.96' height='36.86'/%3e %3cpolygon class='st0' points='144.26,104.05 144.47,77.96 144.32,77.96 134.74,104.05 128.49,104.05 119.17,77.96 119.01,77.96 119.22,104.05 110.84,104.05 110.84,67.19 123.51,67.19 131.9,90.82 132.11,90.82 140.13,67.19 153.01,67.19 153.01,104.05 '/%3e %3cpath class='st0' d='M158.05,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,135.15,158.05,134.27,158.05,133.18'/%3e %3cpath class='st0' d='M151.44,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,135.15,151.44,134.27,151.44,133.18'/%3e %3cpath class='st0' d='M144.82,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,135.15,144.82,134.27,144.82,133.18'/%3e %3cpath class='st0' d='M138.2,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,135.15,138.2,134.27,138.2,133.18'/%3e %3cpath class='st0' d='M131.59,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,135.15,131.59,134.27,131.59,133.18'/%3e %3cpath class='st0' d='M124.97,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,135.15,124.97,134.27,124.97,133.18'/%3e %3cpath class='st0' d='M118.35,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,135.15,118.35,134.27,118.35,133.18'/%3e %3cpath class='st0' d='M111.74,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,135.15,111.74,134.27,111.74,133.18'/%3e %3cpath class='st0' d='M105.12,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,135.15,105.12,134.27,105.12,133.18'/%3e %3cpath class='st0' d='M98.5,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,135.15,98.5,134.27,98.5,133.18'/%3e %3cpath class='st0' d='M91.89,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,135.15,91.89,134.27,91.89,133.18'/%3e %3cpath class='st0' d='M85.27,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,135.15,85.27,134.27,85.27,133.18'/%3e %3cpath class='st0' d='M78.65,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,135.15,78.65,134.27,78.65,133.18'/%3e %3cpath class='st0' d='M72.04,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,135.15,72.04,134.27,72.04,133.18'/%3e %3cpath class='st0' d='M65.42,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,135.15,65.42,134.27,65.42,133.18'/%3e %3cpath class='st0' d='M58.81,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,135.15,58.81,134.27,58.81,133.18'/%3e %3cpath class='st0' d='M175.35,55.41c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,54.53,176.43,55.41,175.35,55.41'/%3e %3cpath class='st0' d='M175.35,61.82c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,61.82,175.35,61.82'/%3e %3cpath class='st0' d='M175.35,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,68.24,175.35,68.24'/%3e %3cpath class='st0' d='M175.35,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,73.77,176.43,74.65,175.35,74.65'/%3e %3cpath class='st0' d='M175.35,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,80.18,176.43,81.06,175.35,81.06'/%3e %3cpath class='st0' d='M175.35,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,86.6,176.43,87.48,175.35,87.48'/%3e %3cpath class='st0' d='M175.35,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,93.89,175.35,93.89'/%3e %3cpath class='st0' d='M175.35,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,100.3,175.35,100.3'/%3e %3cpath class='st0' d='M175.35,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,105.83,176.43,106.71,175.35,106.71'/%3e %3cpath class='st0' d='M175.35,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,112.25,176.43,113.13,175.35,113.13'/%3e %3cpath class='st0' d='M175.35,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,118.66,176.43,119.54,175.35,119.54'/%3e %3cpath class='st0' d='M12.57,62.05c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 c0,0.54-0.21,1.04-0.57,1.39C13.6,61.83,13.11,62.05,12.57,62.05'/%3e %3cpath class='st0' d='M16.68,57.47c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C18.64,56.58,17.76,57.46,16.68,57.47'/%3e %3cpath class='st0' d='M21.06,53.11c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C23.02,52.22,22.15,53.1,21.06,53.11'/%3e %3cpath class='st0' d='M25.45,48.75c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C27.41,47.86,26.53,48.75,25.45,48.75'/%3e %3cpath class='st0' d='M29.83,44.39c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C31.79,43.5,30.92,44.39,29.83,44.39'/%3e %3cpath class='st0' d='M12.28,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,68.24,12.28,68.24'/%3e %3cpath class='st0' d='M12.28,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,73.77,13.37,74.65,12.28,74.65'/%3e %3cpath class='st0' d='M12.28,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,80.18,13.37,81.06,12.28,81.06'/%3e %3cpath class='st0' d='M12.28,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,86.6,13.37,87.48,12.28,87.48'/%3e %3cpath class='st0' d='M12.28,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,93.89,12.28,93.89'/%3e %3cpath class='st0' d='M12.28,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,100.3,12.28,100.3'/%3e %3cpath class='st0' d='M12.28,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,105.83,13.37,106.71,12.28,106.71'/%3e %3cpath class='st0' d='M12.28,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,112.25,13.37,113.13,12.28,113.13'/%3e %3cpath class='st0' d='M12.28,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,118.66,13.37,119.54,12.28,119.54'/%3e %3cpath class='st0' d='M52.19,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,135.15,52.19,134.27,52.19,133.18'/%3e %3cpath class='st0' d='M45.57,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,135.15,45.57,134.27,45.57,133.18'/%3e %3cpath class='st0' d='M38.96,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,135.15,38.96,134.27,38.96,133.18'/%3e %3cpath class='st0' d='M32.34,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.22,135.15,32.34,134.27,32.34,133.18'/%3e %3cpath class='st0' d='M25.72,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C26.6,135.15,25.72,134.27,25.72,133.18'/%3e %3cpath class='st0' d='M158.05,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,40.02,158.05,39.14,158.05,38.05'/%3e %3cpath class='st0' d='M151.44,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,40.02,151.44,39.14,151.44,38.05'/%3e %3cpath class='st0' d='M144.82,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,40.02,144.82,39.14,144.82,38.05'/%3e %3cpath class='st0' d='M138.2,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,40.02,138.2,39.14,138.2,38.05'/%3e %3cpath class='st0' d='M131.59,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,40.02,131.59,39.14,131.59,38.05'/%3e %3cpath class='st0' d='M124.97,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,40.02,124.97,39.14,124.97,38.05'/%3e %3cpath class='st0' d='M118.35,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,40.02,118.35,39.14,118.35,38.05'/%3e %3cpath class='st0' d='M111.74,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,40.02,111.74,39.14,111.74,38.05'/%3e %3cpath class='st0' d='M105.12,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,40.02,105.12,39.14,105.12,38.05'/%3e %3cpath class='st0' d='M98.5,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,40.02,98.5,39.14,98.5,38.05'/%3e %3cpath class='st0' d='M91.89,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,40.02,91.89,39.14,91.89,38.05'/%3e %3cpath class='st0' d='M85.27,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,40.02,85.27,39.14,85.27,38.05'/%3e %3cpath class='st0' d='M78.65,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,40.02,78.65,39.14,78.65,38.05'/%3e %3cpath class='st0' d='M72.04,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,40.02,72.04,39.14,72.04,38.05'/%3e %3cpath class='st0' d='M65.42,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,40.02,65.42,39.14,65.42,38.05'/%3e %3cpath class='st0' d='M58.81,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,40.02,58.81,39.14,58.81,38.05'/%3e %3cpath class='st0' d='M52.19,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,40.02,52.19,39.14,52.19,38.05'/%3e %3cpath class='st0' d='M45.57,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,40.02,45.57,39.14,45.57,38.05'/%3e %3cpath class='st0' d='M38.96,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,40.02,38.96,39.14,38.96,38.05'/%3e %3cpath class='st0' d='M32.44,38.33c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.32,40.3,32.44,39.42,32.44,38.33'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,38.05c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C165.55,36.08,164.67,36.96,164.67,38.05'/%3e %3cpath class='st0' d='M170.63,41.16c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C171.51,39.19,170.63,40.07,170.63,41.16'/%3e %3cpath class='st0' d='M173.3,47.13c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C174.18,45.16,173.3,46.04,173.3,47.13'/%3e %3cpath class='st0' d='M22.91,133.07c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C22.03,135.03,22.91,134.15,22.91,133.07'/%3e %3cpath class='st0' d='M16.95,129.96c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C16.07,131.93,16.95,131.05,16.95,129.96'/%3e %3cpath class='st0' d='M14.27,123.99c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C13.39,125.96,14.27,125.08,14.27,123.99'/%3e %3c/g%3e %3c/svg%3e">
                            </div><img alt="iPhone-16-pro-max"
                                srcset="https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fapple%2Fiphone-17%2Fiphone-17-lavender-01-m.webp&w=256&q=75, https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fapple%2Fiphone-17%2Fiphone-17-lavender-01-m.webp&w=384&q=75 2x">
                            <p class="brand">Apple</p>
                            <p class="device-name">iPhone 17</p>
                            <p class="device-prefix">Device from</p>
                            <p class="device-price"><span class="dollar">$</span><span
                                    class="device-recurringCharge">38.86</span><span class="mth">per month</span></p>
                            <p class="device-mincost">Min cost $1,398.96 over 36 months. Plan cost additional.</p>
                            <div class="primaryBtn">Shop now</div>
                        </div>
                    </div>
                </a></div>
            <div class="deviceSet" id="androidDevices"><a class="deviceCard itemCard" title="Samsung Galaxy S25 Ultra"
                    href="https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-s25-ultra"
                    aria-hidden="false">
                    <div class="device-item">
                        <div class="device-item-device">
                            <div class="device-item-badge"><img alt="5G approved device"
                                    src="data:image/svg+xml,%3csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2,.cls-3%7bfill:none;%7d.cls-2,.cls-3%7bstroke:%23333;stroke-width:8px;%7d.cls-2%7bstroke-linecap:round;stroke-linejoin:round;%7d.cls-3%7bstroke-miterlimit:10;%7d%3c/style%3e%3c/defs%3e%3ctitle%3e5g%3c/title%3e%3crect class='cls-1' width='192' height='192'/%3e%3cpath class='cls-2' d='M122,98h14v12a9.57,9.57,0,0,1-7,9.5c-8.28,2.26-25,3.73-25-23.5,0-29.5,26.56-25.9,30.5-18.5' transform='translate(0 0)'/%3e%3ccircle class='cls-3' cx='96' cy='96' r='76'/%3e%3cpath class='cls-2' d='M83.84,72.39H63.5v21l2.19-1.08A14.73,14.73,0,1,1,61.8,117' transform='translate(0 0)'/%3e%3c/svg%3e">
                                <img alt="eSIM-enabled device"
                                    src="data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 26.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='ICON'   xmlns='http://www.w3.org/2000/svg'   xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 192 192' style='enable-background:new 0 0 192 192;' xml:space='preserve'%3e %3cstyle type='text/css'%3e .st0%7bfill:%23333333;%7d %3c/style%3e %3cg%3e %3cpath class='st0' d='M42.43,93.32c-0.03,0.14-0.05,0.3-0.05,0.47c0,0.73,0.16,1.38,0.49,1.95c0.33,0.57,0.76,1.06,1.3,1.46 c0.54,0.4,1.15,0.7,1.82,0.91c0.68,0.21,1.38,0.31,2.11,0.31c1.32,0,2.48-0.24,3.49-0.73c1.01-0.49,1.91-1.15,2.71-1.98l5.26,4.11 c-1.67,1.77-3.52,3.05-5.57,3.83c-2.05,0.78-4.25,1.17-6.61,1.17c-1.81,0-3.48-0.25-5.02-0.76c-1.54-0.5-2.89-1.25-4.04-2.24 c-1.15-0.99-2.05-2.21-2.71-3.67c-0.66-1.46-0.99-3.12-0.99-5c0-2.22,0.39-4.3,1.17-6.22c0.78-1.93,1.86-3.6,3.23-5.02 c1.37-1.42,3.01-2.54,4.92-3.36c1.91-0.82,4.01-1.22,6.3-1.22c1.7,0,3.25,0.24,4.66,0.73c1.41,0.49,2.61,1.19,3.62,2.11 c1.01,0.92,1.79,2.06,2.34,3.41c0.55,1.35,0.83,2.92,0.83,4.69c0,0.62-0.06,1.41-0.18,2.37c-0.12,0.96-0.29,1.85-0.49,2.68H42.43z M54.24,88.22c0.03-0.17,0.05-0.35,0.05-0.52v-0.52c0-1.15-0.41-2.1-1.22-2.86c-0.82-0.76-1.99-1.15-3.51-1.15 c-0.94,0-1.78,0.17-2.52,0.49c-0.75,0.33-1.4,0.74-1.95,1.22c-0.56,0.49-1.01,1.02-1.35,1.61c-0.35,0.59-0.59,1.16-0.73,1.72H54.24 z'/%3e %3cpath class='st0' d='M85.82,76.76c-0.76-0.97-1.76-1.74-2.99-2.32c-1.23-0.57-2.42-0.86-3.57-0.86c-0.59,0-1.19,0.05-1.8,0.16 c-0.61,0.1-1.15,0.3-1.64,0.6c-0.49,0.3-0.89,0.68-1.22,1.15c-0.33,0.47-0.49,1.07-0.49,1.8c0,0.62,0.13,1.15,0.39,1.56 c0.26,0.42,0.64,0.78,1.15,1.09c0.5,0.31,1.1,0.6,1.8,0.86c0.69,0.26,1.47,0.53,2.34,0.81c1.25,0.42,2.55,0.88,3.9,1.38 c1.35,0.5,2.59,1.17,3.7,2c1.11,0.83,2.03,1.87,2.76,3.1c0.73,1.23,1.09,2.77,1.09,4.61c0,2.12-0.39,3.95-1.17,5.49 c-0.78,1.54-1.83,2.82-3.15,3.83c-1.32,1.01-2.83,1.75-4.53,2.24c-1.7,0.49-3.45,0.73-5.26,0.73c-2.64,0-5.19-0.46-7.65-1.38 c-2.46-0.92-4.51-2.23-6.14-3.93l5.83-5.94c0.9,1.11,2.09,2.04,3.57,2.79c1.47,0.75,2.94,1.12,4.4,1.12c0.66,0,1.3-0.07,1.93-0.21 c0.62-0.14,1.17-0.36,1.64-0.68c0.47-0.31,0.84-0.73,1.12-1.25c0.28-0.52,0.42-1.15,0.42-1.87c0-0.69-0.17-1.28-0.52-1.77 c-0.35-0.49-0.84-0.93-1.48-1.33c-0.64-0.4-1.44-0.76-2.39-1.09c-0.96-0.33-2.04-0.68-3.25-1.07c-1.18-0.38-2.33-0.83-3.46-1.35 c-1.13-0.52-2.13-1.19-3.02-2c-0.88-0.82-1.6-1.8-2.13-2.97c-0.54-1.16-0.81-2.58-0.81-4.24c0-2.05,0.42-3.8,1.25-5.26 c0.83-1.46,1.93-2.66,3.28-3.59c1.35-0.94,2.88-1.62,4.58-2.06c1.7-0.43,3.42-0.65,5.15-0.65c2.08,0,4.21,0.38,6.38,1.15 c2.17,0.76,4.07,1.89,5.7,3.38L85.82,76.76z'/%3e %3crect x='96.21' y='67.19' class='st0' width='8.96' height='36.86'/%3e %3cpolygon class='st0' points='144.26,104.05 144.47,77.96 144.32,77.96 134.74,104.05 128.49,104.05 119.17,77.96 119.01,77.96 119.22,104.05 110.84,104.05 110.84,67.19 123.51,67.19 131.9,90.82 132.11,90.82 140.13,67.19 153.01,67.19 153.01,104.05 '/%3e %3cpath class='st0' d='M158.05,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,135.15,158.05,134.27,158.05,133.18'/%3e %3cpath class='st0' d='M151.44,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,135.15,151.44,134.27,151.44,133.18'/%3e %3cpath class='st0' d='M144.82,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,135.15,144.82,134.27,144.82,133.18'/%3e %3cpath class='st0' d='M138.2,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,135.15,138.2,134.27,138.2,133.18'/%3e %3cpath class='st0' d='M131.59,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,135.15,131.59,134.27,131.59,133.18'/%3e %3cpath class='st0' d='M124.97,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,135.15,124.97,134.27,124.97,133.18'/%3e %3cpath class='st0' d='M118.35,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,135.15,118.35,134.27,118.35,133.18'/%3e %3cpath class='st0' d='M111.74,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,135.15,111.74,134.27,111.74,133.18'/%3e %3cpath class='st0' d='M105.12,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,135.15,105.12,134.27,105.12,133.18'/%3e %3cpath class='st0' d='M98.5,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,135.15,98.5,134.27,98.5,133.18'/%3e %3cpath class='st0' d='M91.89,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,135.15,91.89,134.27,91.89,133.18'/%3e %3cpath class='st0' d='M85.27,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,135.15,85.27,134.27,85.27,133.18'/%3e %3cpath class='st0' d='M78.65,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,135.15,78.65,134.27,78.65,133.18'/%3e %3cpath class='st0' d='M72.04,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,135.15,72.04,134.27,72.04,133.18'/%3e %3cpath class='st0' d='M65.42,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,135.15,65.42,134.27,65.42,133.18'/%3e %3cpath class='st0' d='M58.81,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,135.15,58.81,134.27,58.81,133.18'/%3e %3cpath class='st0' d='M175.35,55.41c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,54.53,176.43,55.41,175.35,55.41'/%3e %3cpath class='st0' d='M175.35,61.82c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,61.82,175.35,61.82'/%3e %3cpath class='st0' d='M175.35,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,68.24,175.35,68.24'/%3e %3cpath class='st0' d='M175.35,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,73.77,176.43,74.65,175.35,74.65'/%3e %3cpath class='st0' d='M175.35,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,80.18,176.43,81.06,175.35,81.06'/%3e %3cpath class='st0' d='M175.35,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,86.6,176.43,87.48,175.35,87.48'/%3e %3cpath class='st0' d='M175.35,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,93.89,175.35,93.89'/%3e %3cpath class='st0' d='M175.35,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,100.3,175.35,100.3'/%3e %3cpath class='st0' d='M175.35,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,105.83,176.43,106.71,175.35,106.71'/%3e %3cpath class='st0' d='M175.35,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,112.25,176.43,113.13,175.35,113.13'/%3e %3cpath class='st0' d='M175.35,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,118.66,176.43,119.54,175.35,119.54'/%3e %3cpath class='st0' d='M12.57,62.05c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 c0,0.54-0.21,1.04-0.57,1.39C13.6,61.83,13.11,62.05,12.57,62.05'/%3e %3cpath class='st0' d='M16.68,57.47c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C18.64,56.58,17.76,57.46,16.68,57.47'/%3e %3cpath class='st0' d='M21.06,53.11c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C23.02,52.22,22.15,53.1,21.06,53.11'/%3e %3cpath class='st0' d='M25.45,48.75c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C27.41,47.86,26.53,48.75,25.45,48.75'/%3e %3cpath class='st0' d='M29.83,44.39c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C31.79,43.5,30.92,44.39,29.83,44.39'/%3e %3cpath class='st0' d='M12.28,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,68.24,12.28,68.24'/%3e %3cpath class='st0' d='M12.28,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,73.77,13.37,74.65,12.28,74.65'/%3e %3cpath class='st0' d='M12.28,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,80.18,13.37,81.06,12.28,81.06'/%3e %3cpath class='st0' d='M12.28,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,86.6,13.37,87.48,12.28,87.48'/%3e %3cpath class='st0' d='M12.28,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,93.89,12.28,93.89'/%3e %3cpath class='st0' d='M12.28,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,100.3,12.28,100.3'/%3e %3cpath class='st0' d='M12.28,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,105.83,13.37,106.71,12.28,106.71'/%3e %3cpath class='st0' d='M12.28,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,112.25,13.37,113.13,12.28,113.13'/%3e %3cpath class='st0' d='M12.28,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,118.66,13.37,119.54,12.28,119.54'/%3e %3cpath class='st0' d='M52.19,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,135.15,52.19,134.27,52.19,133.18'/%3e %3cpath class='st0' d='M45.57,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,135.15,45.57,134.27,45.57,133.18'/%3e %3cpath class='st0' d='M38.96,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,135.15,38.96,134.27,38.96,133.18'/%3e %3cpath class='st0' d='M32.34,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.22,135.15,32.34,134.27,32.34,133.18'/%3e %3cpath class='st0' d='M25.72,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C26.6,135.15,25.72,134.27,25.72,133.18'/%3e %3cpath class='st0' d='M158.05,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,40.02,158.05,39.14,158.05,38.05'/%3e %3cpath class='st0' d='M151.44,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,40.02,151.44,39.14,151.44,38.05'/%3e %3cpath class='st0' d='M144.82,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,40.02,144.82,39.14,144.82,38.05'/%3e %3cpath class='st0' d='M138.2,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,40.02,138.2,39.14,138.2,38.05'/%3e %3cpath class='st0' d='M131.59,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,40.02,131.59,39.14,131.59,38.05'/%3e %3cpath class='st0' d='M124.97,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,40.02,124.97,39.14,124.97,38.05'/%3e %3cpath class='st0' d='M118.35,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,40.02,118.35,39.14,118.35,38.05'/%3e %3cpath class='st0' d='M111.74,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,40.02,111.74,39.14,111.74,38.05'/%3e %3cpath class='st0' d='M105.12,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,40.02,105.12,39.14,105.12,38.05'/%3e %3cpath class='st0' d='M98.5,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,40.02,98.5,39.14,98.5,38.05'/%3e %3cpath class='st0' d='M91.89,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,40.02,91.89,39.14,91.89,38.05'/%3e %3cpath class='st0' d='M85.27,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,40.02,85.27,39.14,85.27,38.05'/%3e %3cpath class='st0' d='M78.65,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,40.02,78.65,39.14,78.65,38.05'/%3e %3cpath class='st0' d='M72.04,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,40.02,72.04,39.14,72.04,38.05'/%3e %3cpath class='st0' d='M65.42,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,40.02,65.42,39.14,65.42,38.05'/%3e %3cpath class='st0' d='M58.81,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,40.02,58.81,39.14,58.81,38.05'/%3e %3cpath class='st0' d='M52.19,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,40.02,52.19,39.14,52.19,38.05'/%3e %3cpath class='st0' d='M45.57,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,40.02,45.57,39.14,45.57,38.05'/%3e %3cpath class='st0' d='M38.96,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,40.02,38.96,39.14,38.96,38.05'/%3e %3cpath class='st0' d='M32.44,38.33c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.32,40.3,32.44,39.42,32.44,38.33'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,38.05c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C165.55,36.08,164.67,36.96,164.67,38.05'/%3e %3cpath class='st0' d='M170.63,41.16c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C171.51,39.19,170.63,40.07,170.63,41.16'/%3e %3cpath class='st0' d='M173.3,47.13c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C174.18,45.16,173.3,46.04,173.3,47.13'/%3e %3cpath class='st0' d='M22.91,133.07c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C22.03,135.03,22.91,134.15,22.91,133.07'/%3e %3cpath class='st0' d='M16.95,129.96c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C16.07,131.93,16.95,131.05,16.95,129.96'/%3e %3cpath class='st0' d='M14.27,123.99c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C13.39,125.96,14.27,125.08,14.27,123.99'/%3e %3c/g%3e %3c/svg%3e">
                            </div><img alt="Samsung Galaxy S25 Ultra"
                                srcset="https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fsamsung%2Fsamsung-galaxy-s25%2Fsamsung-galaxy-s25-ultra-titanium-whitesilver-01-m.webp&w=256&q=75, https://www.vodafone.com.au/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fsamsung%2Fsamsung-galaxy-s25%2Fsamsung-galaxy-s25-ultra-titanium-whitesilver-01-m.webp&w=384&q=75 2x">
                            <p class="brand">Samsung</p>
                            <p class="device-name">Samsung Galaxy S25 Ultra</p>
                            <p class="device-prefix">Device from</p>
                            <p class="device-price"><span class="dollar">$</span><span
                                    class="device-recurringCharge">43.02</span><span
                                    class="device-was-price">$59.69</span><span class="mth">per month</span></p>
                            <p class="device-mincost">Min cost $1,548.72 over 36 months. Plan cost additional.</p>
                            <div class="primaryBtn">Shop now</div>
                        </div>
                    </div>
                </a><a class="deviceCard itemCard" title="Samsung Galaxy Z Fold7"
                    href="https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-z-fold7"
                    aria-hidden="false">
                    <div class="device-item">
                        <div class="device-item-device">
                            <div class="device-item-badge"><img alt="5G approved device"
                                    src="data:image/svg+xml,%3csvg id='Layer_1' data-name='Layer 1'         xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2,.cls-3%7bfill:none;%7d.cls-2,.cls-3%7bstroke:%23333;stroke-width:8px;%7d.cls-2%7bstroke-linecap:round;stroke-linejoin:round;%7d.cls-3%7bstroke-miterlimit:10;%7d%3c/style%3e%3c/defs%3e%3ctitle%3e5g%3c/title%3e%3crect class='cls-1' width='192' height='192'/%3e%3cpath class='cls-2' d='M122,98h14v12a9.57,9.57,0,0,1-7,9.5c-8.28,2.26-25,3.73-25-23.5,0-29.5,26.56-25.9,30.5-18.5' transform='translate(0 0)'/%3e%3ccircle class='cls-3' cx='96' cy='96' r='76'/%3e%3cpath class='cls-2' d='M83.84,72.39H63.5v21l2.19-1.08A14.73,14.73,0,1,1,61.8,117' transform='translate(0 0)'/%3e%3c/svg%3e">
                                <img alt="eSIM-enabled device"
                                    src="data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 26.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='ICON'           xmlns='http://www.w3.org/2000/svg'           xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 192 192' style='enable-background:new 0 0 192 192;' xml:space='preserve'%3e %3cstyle type='text/css'%3e .st0%7bfill:%23333333;%7d %3c/style%3e %3cg%3e %3cpath class='st0' d='M42.43,93.32c-0.03,0.14-0.05,0.3-0.05,0.47c0,0.73,0.16,1.38,0.49,1.95c0.33,0.57,0.76,1.06,1.3,1.46 c0.54,0.4,1.15,0.7,1.82,0.91c0.68,0.21,1.38,0.31,2.11,0.31c1.32,0,2.48-0.24,3.49-0.73c1.01-0.49,1.91-1.15,2.71-1.98l5.26,4.11 c-1.67,1.77-3.52,3.05-5.57,3.83c-2.05,0.78-4.25,1.17-6.61,1.17c-1.81,0-3.48-0.25-5.02-0.76c-1.54-0.5-2.89-1.25-4.04-2.24 c-1.15-0.99-2.05-2.21-2.71-3.67c-0.66-1.46-0.99-3.12-0.99-5c0-2.22,0.39-4.3,1.17-6.22c0.78-1.93,1.86-3.6,3.23-5.02 c1.37-1.42,3.01-2.54,4.92-3.36c1.91-0.82,4.01-1.22,6.3-1.22c1.7,0,3.25,0.24,4.66,0.73c1.41,0.49,2.61,1.19,3.62,2.11 c1.01,0.92,1.79,2.06,2.34,3.41c0.55,1.35,0.83,2.92,0.83,4.69c0,0.62-0.06,1.41-0.18,2.37c-0.12,0.96-0.29,1.85-0.49,2.68H42.43z M54.24,88.22c0.03-0.17,0.05-0.35,0.05-0.52v-0.52c0-1.15-0.41-2.1-1.22-2.86c-0.82-0.76-1.99-1.15-3.51-1.15 c-0.94,0-1.78,0.17-2.52,0.49c-0.75,0.33-1.4,0.74-1.95,1.22c-0.56,0.49-1.01,1.02-1.35,1.61c-0.35,0.59-0.59,1.16-0.73,1.72H54.24 z'/%3e %3cpath class='st0' d='M85.82,76.76c-0.76-0.97-1.76-1.74-2.99-2.32c-1.23-0.57-2.42-0.86-3.57-0.86c-0.59,0-1.19,0.05-1.8,0.16 c-0.61,0.1-1.15,0.3-1.64,0.6c-0.49,0.3-0.89,0.68-1.22,1.15c-0.33,0.47-0.49,1.07-0.49,1.8c0,0.62,0.13,1.15,0.39,1.56 c0.26,0.42,0.64,0.78,1.15,1.09c0.5,0.31,1.1,0.6,1.8,0.86c0.69,0.26,1.47,0.53,2.34,0.81c1.25,0.42,2.55,0.88,3.9,1.38 c1.35,0.5,2.59,1.17,3.7,2c1.11,0.83,2.03,1.87,2.76,3.1c0.73,1.23,1.09,2.77,1.09,4.61c0,2.12-0.39,3.95-1.17,5.49 c-0.78,1.54-1.83,2.82-3.15,3.83c-1.32,1.01-2.83,1.75-4.53,2.24c-1.7,0.49-3.45,0.73-5.26,0.73c-2.64,0-5.19-0.46-7.65-1.38 c-2.46-0.92-4.51-2.23-6.14-3.93l5.83-5.94c0.9,1.11,2.09,2.04,3.57,2.79c1.47,0.75,2.94,1.12,4.4,1.12c0.66,0,1.3-0.07,1.93-0.21 c0.62-0.14,1.17-0.36,1.64-0.68c0.47-0.31,0.84-0.73,1.12-1.25c0.28-0.52,0.42-1.15,0.42-1.87c0-0.69-0.17-1.28-0.52-1.77 c-0.35-0.49-0.84-0.93-1.48-1.33c-0.64-0.4-1.44-0.76-2.39-1.09c-0.96-0.33-2.04-0.68-3.25-1.07c-1.18-0.38-2.33-0.83-3.46-1.35 c-1.13-0.52-2.13-1.19-3.02-2c-0.88-0.82-1.6-1.8-2.13-2.97c-0.54-1.16-0.81-2.58-0.81-4.24c0-2.05,0.42-3.8,1.25-5.26 c0.83-1.46,1.93-2.66,3.28-3.59c1.35-0.94,2.88-1.62,4.58-2.06c1.7-0.43,3.42-0.65,5.15-0.65c2.08,0,4.21,0.38,6.38,1.15 c2.17,0.76,4.07,1.89,5.7,3.38L85.82,76.76z'/%3e %3crect x='96.21' y='67.19' class='st0' width='8.96' height='36.86'/%3e %3cpolygon class='st0' points='144.26,104.05 144.47,77.96 144.32,77.96 134.74,104.05 128.49,104.05 119.17,77.96 119.01,77.96 119.22,104.05 110.84,104.05 110.84,67.19 123.51,67.19 131.9,90.82 132.11,90.82 140.13,67.19 153.01,67.19 153.01,104.05 '/%3e %3cpath class='st0' d='M158.05,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,135.15,158.05,134.27,158.05,133.18'/%3e %3cpath class='st0' d='M151.44,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,135.15,151.44,134.27,151.44,133.18'/%3e %3cpath class='st0' d='M144.82,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,135.15,144.82,134.27,144.82,133.18'/%3e %3cpath class='st0' d='M138.2,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,135.15,138.2,134.27,138.2,133.18'/%3e %3cpath class='st0' d='M131.59,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,135.15,131.59,134.27,131.59,133.18'/%3e %3cpath class='st0' d='M124.97,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,135.15,124.97,134.27,124.97,133.18'/%3e %3cpath class='st0' d='M118.35,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,135.15,118.35,134.27,118.35,133.18'/%3e %3cpath class='st0' d='M111.74,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,135.15,111.74,134.27,111.74,133.18'/%3e %3cpath class='st0' d='M105.12,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,135.15,105.12,134.27,105.12,133.18'/%3e %3cpath class='st0' d='M98.5,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,135.15,98.5,134.27,98.5,133.18'/%3e %3cpath class='st0' d='M91.89,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,135.15,91.89,134.27,91.89,133.18'/%3e %3cpath class='st0' d='M85.27,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,135.15,85.27,134.27,85.27,133.18'/%3e %3cpath class='st0' d='M78.65,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,135.15,78.65,134.27,78.65,133.18'/%3e %3cpath class='st0' d='M72.04,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,135.15,72.04,134.27,72.04,133.18'/%3e %3cpath class='st0' d='M65.42,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,135.15,65.42,134.27,65.42,133.18'/%3e %3cpath class='st0' d='M58.81,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,135.15,58.81,134.27,58.81,133.18'/%3e %3cpath class='st0' d='M175.35,55.41c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,54.53,176.43,55.41,175.35,55.41'/%3e %3cpath class='st0' d='M175.35,61.82c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,61.82,175.35,61.82'/%3e %3cpath class='st0' d='M175.35,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,68.24,175.35,68.24'/%3e %3cpath class='st0' d='M175.35,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,73.77,176.43,74.65,175.35,74.65'/%3e %3cpath class='st0' d='M175.35,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,80.18,176.43,81.06,175.35,81.06'/%3e %3cpath class='st0' d='M175.35,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,86.6,176.43,87.48,175.35,87.48'/%3e %3cpath class='st0' d='M175.35,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,93.89,175.35,93.89'/%3e %3cpath class='st0' d='M175.35,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,100.3,175.35,100.3'/%3e %3cpath class='st0' d='M175.35,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,105.83,176.43,106.71,175.35,106.71'/%3e %3cpath class='st0' d='M175.35,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,112.25,176.43,113.13,175.35,113.13'/%3e %3cpath class='st0' d='M175.35,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,118.66,176.43,119.54,175.35,119.54'/%3e %3cpath class='st0' d='M12.57,62.05c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 c0,0.54-0.21,1.04-0.57,1.39C13.6,61.83,13.11,62.05,12.57,62.05'/%3e %3cpath class='st0' d='M16.68,57.47c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C18.64,56.58,17.76,57.46,16.68,57.47'/%3e %3cpath class='st0' d='M21.06,53.11c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C23.02,52.22,22.15,53.1,21.06,53.11'/%3e %3cpath class='st0' d='M25.45,48.75c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C27.41,47.86,26.53,48.75,25.45,48.75'/%3e %3cpath class='st0' d='M29.83,44.39c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C31.79,43.5,30.92,44.39,29.83,44.39'/%3e %3cpath class='st0' d='M12.28,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,68.24,12.28,68.24'/%3e %3cpath class='st0' d='M12.28,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,73.77,13.37,74.65,12.28,74.65'/%3e %3cpath class='st0' d='M12.28,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,80.18,13.37,81.06,12.28,81.06'/%3e %3cpath class='st0' d='M12.28,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,86.6,13.37,87.48,12.28,87.48'/%3e %3cpath class='st0' d='M12.28,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,93.89,12.28,93.89'/%3e %3cpath class='st0' d='M12.28,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,100.3,12.28,100.3'/%3e %3cpath class='st0' d='M12.28,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,105.83,13.37,106.71,12.28,106.71'/%3e %3cpath class='st0' d='M12.28,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,112.25,13.37,113.13,12.28,113.13'/%3e %3cpath class='st0' d='M12.28,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,118.66,13.37,119.54,12.28,119.54'/%3e %3cpath class='st0' d='M52.19,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,135.15,52.19,134.27,52.19,133.18'/%3e %3cpath class='st0' d='M45.57,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,135.15,45.57,134.27,45.57,133.18'/%3e %3cpath class='st0' d='M38.96,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,135.15,38.96,134.27,38.96,133.18'/%3e %3cpath class='st0' d='M32.34,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.22,135.15,32.34,134.27,32.34,133.18'/%3e %3cpath class='st0' d='M25.72,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C26.6,135.15,25.72,134.27,25.72,133.18'/%3e %3cpath class='st0' d='M158.05,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,40.02,158.05,39.14,158.05,38.05'/%3e %3cpath class='st0' d='M151.44,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,40.02,151.44,39.14,151.44,38.05'/%3e %3cpath class='st0' d='M144.82,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,40.02,144.82,39.14,144.82,38.05'/%3e %3cpath class='st0' d='M138.2,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,40.02,138.2,39.14,138.2,38.05'/%3e %3cpath class='st0' d='M131.59,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,40.02,131.59,39.14,131.59,38.05'/%3e %3cpath class='st0' d='M124.97,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,40.02,124.97,39.14,124.97,38.05'/%3e %3cpath class='st0' d='M118.35,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,40.02,118.35,39.14,118.35,38.05'/%3e %3cpath class='st0' d='M111.74,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,40.02,111.74,39.14,111.74,38.05'/%3e %3cpath class='st0' d='M105.12,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,40.02,105.12,39.14,105.12,38.05'/%3e %3cpath class='st0' d='M98.5,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,40.02,98.5,39.14,98.5,38.05'/%3e %3cpath class='st0' d='M91.89,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,40.02,91.89,39.14,91.89,38.05'/%3e %3cpath class='st0' d='M85.27,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,40.02,85.27,39.14,85.27,38.05'/%3e %3cpath class='st0' d='M78.65,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,40.02,78.65,39.14,78.65,38.05'/%3e %3cpath class='st0' d='M72.04,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,40.02,72.04,39.14,72.04,38.05'/%3e %3cpath class='st0' d='M65.42,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,40.02,65.42,39.14,65.42,38.05'/%3e %3cpath class='st0' d='M58.81,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,40.02,58.81,39.14,58.81,38.05'/%3e %3cpath class='st0' d='M52.19,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,40.02,52.19,39.14,52.19,38.05'/%3e %3cpath class='st0' d='M45.57,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,40.02,45.57,39.14,45.57,38.05'/%3e %3cpath class='st0' d='M38.96,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,40.02,38.96,39.14,38.96,38.05'/%3e %3cpath class='st0' d='M32.44,38.33c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.32,40.3,32.44,39.42,32.44,38.33'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,38.05c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C165.55,36.08,164.67,36.96,164.67,38.05'/%3e %3cpath class='st0' d='M170.63,41.16c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C171.51,39.19,170.63,40.07,170.63,41.16'/%3e %3cpath class='st0' d='M173.3,47.13c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C174.18,45.16,173.3,46.04,173.3,47.13'/%3e %3cpath class='st0' d='M22.91,133.07c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C22.03,135.03,22.91,134.15,22.91,133.07'/%3e %3cpath class='st0' d='M16.95,129.96c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C16.07,131.93,16.95,131.05,16.95,129.96'/%3e %3cpath class='st0' d='M14.27,123.99c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C13.39,125.96,14.27,125.08,14.27,123.99'/%3e %3c/g%3e %3c/svg%3e">
                            </div><img alt="Samsung Galaxy Z Fold7"
                                srcset="/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fsamsung%2Fsamsung-galaxy-zfold7%2Fsamsung-galaxy-z-fold7-blue-shadow-ai-m.webp&w=256&q=75, /_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fsamsung%2Fsamsung-galaxy-zfold7%2Fsamsung-galaxy-z-fold7-blue-shadow-ai-m.webp&w=384&q=75 2x">
                            <p class="brand">Samsung</p>
                            <p class="device-name">Samsung Galaxy Z Fold7</p>
                            <p class="device-prefix">Device from</p>
                            <p class="device-price"><span class="dollar">$</span><span
                                    class="device-recurringCharge">63.85</span><span
                                    class="device-was-price">$80.52</span><span class="mth">per month</span></p>
                            <p class="device-mincost">Min cost $2,298.60 over 36 months. Plan cost additional.</p>
                            <div class="primaryBtn">Shop now</div>
                        </div>
                    </div>
                </a><a class="deviceCard itemCard" title="Samsung Galaxy S25 FE"
                    href="https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-s25-fe"
                    aria-hidden="false">
                    <div class="device-item">
                        <div class="device-item-device">
                            <div class="device-item-badge"><img alt="5G approved device"
                                    src="data:image/svg+xml,%3csvg id='Layer_1' data-name='Layer 1'                                                                 xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2,.cls-3%7bfill:none;%7d.cls-2,.cls-3%7bstroke:%23333;stroke-width:8px;%7d.cls-2%7bstroke-linecap:round;stroke-linejoin:round;%7d.cls-3%7bstroke-miterlimit:10;%7d%3c/style%3e%3c/defs%3e%3ctitle%3e5g%3c/title%3e%3crect class='cls-1' width='192' height='192'/%3e%3cpath class='cls-2' d='M122,98h14v12a9.57,9.57,0,0,1-7,9.5c-8.28,2.26-25,3.73-25-23.5,0-29.5,26.56-25.9,30.5-18.5' transform='translate(0 0)'/%3e%3ccircle class='cls-3' cx='96' cy='96' r='76'/%3e%3cpath class='cls-2' d='M83.84,72.39H63.5v21l2.19-1.08A14.73,14.73,0,1,1,61.8,117' transform='translate(0 0)'/%3e%3c/svg%3e">
                                <img alt="eSIM-enabled device"
                                    src="data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 26.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='ICON'                                                                   xmlns='http://www.w3.org/2000/svg'                                                                   xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 192 192' style='enable-background:new 0 0 192 192;' xml:space='preserve'%3e %3cstyle type='text/css'%3e .st0%7bfill:%23333333;%7d %3c/style%3e %3cg%3e %3cpath class='st0' d='M42.43,93.32c-0.03,0.14-0.05,0.3-0.05,0.47c0,0.73,0.16,1.38,0.49,1.95c0.33,0.57,0.76,1.06,1.3,1.46 c0.54,0.4,1.15,0.7,1.82,0.91c0.68,0.21,1.38,0.31,2.11,0.31c1.32,0,2.48-0.24,3.49-0.73c1.01-0.49,1.91-1.15,2.71-1.98l5.26,4.11 c-1.67,1.77-3.52,3.05-5.57,3.83c-2.05,0.78-4.25,1.17-6.61,1.17c-1.81,0-3.48-0.25-5.02-0.76c-1.54-0.5-2.89-1.25-4.04-2.24 c-1.15-0.99-2.05-2.21-2.71-3.67c-0.66-1.46-0.99-3.12-0.99-5c0-2.22,0.39-4.3,1.17-6.22c0.78-1.93,1.86-3.6,3.23-5.02 c1.37-1.42,3.01-2.54,4.92-3.36c1.91-0.82,4.01-1.22,6.3-1.22c1.7,0,3.25,0.24,4.66,0.73c1.41,0.49,2.61,1.19,3.62,2.11 c1.01,0.92,1.79,2.06,2.34,3.41c0.55,1.35,0.83,2.92,0.83,4.69c0,0.62-0.06,1.41-0.18,2.37c-0.12,0.96-0.29,1.85-0.49,2.68H42.43z M54.24,88.22c0.03-0.17,0.05-0.35,0.05-0.52v-0.52c0-1.15-0.41-2.1-1.22-2.86c-0.82-0.76-1.99-1.15-3.51-1.15 c-0.94,0-1.78,0.17-2.52,0.49c-0.75,0.33-1.4,0.74-1.95,1.22c-0.56,0.49-1.01,1.02-1.35,1.61c-0.35,0.59-0.59,1.16-0.73,1.72H54.24 z'/%3e %3cpath class='st0' d='M85.82,76.76c-0.76-0.97-1.76-1.74-2.99-2.32c-1.23-0.57-2.42-0.86-3.57-0.86c-0.59,0-1.19,0.05-1.8,0.16 c-0.61,0.1-1.15,0.3-1.64,0.6c-0.49,0.3-0.89,0.68-1.22,1.15c-0.33,0.47-0.49,1.07-0.49,1.8c0,0.62,0.13,1.15,0.39,1.56 c0.26,0.42,0.64,0.78,1.15,1.09c0.5,0.31,1.1,0.6,1.8,0.86c0.69,0.26,1.47,0.53,2.34,0.81c1.25,0.42,2.55,0.88,3.9,1.38 c1.35,0.5,2.59,1.17,3.7,2c1.11,0.83,2.03,1.87,2.76,3.1c0.73,1.23,1.09,2.77,1.09,4.61c0,2.12-0.39,3.95-1.17,5.49 c-0.78,1.54-1.83,2.82-3.15,3.83c-1.32,1.01-2.83,1.75-4.53,2.24c-1.7,0.49-3.45,0.73-5.26,0.73c-2.64,0-5.19-0.46-7.65-1.38 c-2.46-0.92-4.51-2.23-6.14-3.93l5.83-5.94c0.9,1.11,2.09,2.04,3.57,2.79c1.47,0.75,2.94,1.12,4.4,1.12c0.66,0,1.3-0.07,1.93-0.21 c0.62-0.14,1.17-0.36,1.64-0.68c0.47-0.31,0.84-0.73,1.12-1.25c0.28-0.52,0.42-1.15,0.42-1.87c0-0.69-0.17-1.28-0.52-1.77 c-0.35-0.49-0.84-0.93-1.48-1.33c-0.64-0.4-1.44-0.76-2.39-1.09c-0.96-0.33-2.04-0.68-3.25-1.07c-1.18-0.38-2.33-0.83-3.46-1.35 c-1.13-0.52-2.13-1.19-3.02-2c-0.88-0.82-1.6-1.8-2.13-2.97c-0.54-1.16-0.81-2.58-0.81-4.24c0-2.05,0.42-3.8,1.25-5.26 c0.83-1.46,1.93-2.66,3.28-3.59c1.35-0.94,2.88-1.62,4.58-2.06c1.7-0.43,3.42-0.65,5.15-0.65c2.08,0,4.21,0.38,6.38,1.15 c2.17,0.76,4.07,1.89,5.7,3.38L85.82,76.76z'/%3e %3crect x='96.21' y='67.19' class='st0' width='8.96' height='36.86'/%3e %3cpolygon class='st0' points='144.26,104.05 144.47,77.96 144.32,77.96 134.74,104.05 128.49,104.05 119.17,77.96 119.01,77.96 119.22,104.05 110.84,104.05 110.84,67.19 123.51,67.19 131.9,90.82 132.11,90.82 140.13,67.19 153.01,67.19 153.01,104.05 '/%3e %3cpath class='st0' d='M158.05,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,135.15,158.05,134.27,158.05,133.18'/%3e %3cpath class='st0' d='M151.44,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,135.15,151.44,134.27,151.44,133.18'/%3e %3cpath class='st0' d='M144.82,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,135.15,144.82,134.27,144.82,133.18'/%3e %3cpath class='st0' d='M138.2,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,135.15,138.2,134.27,138.2,133.18'/%3e %3cpath class='st0' d='M131.59,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,135.15,131.59,134.27,131.59,133.18'/%3e %3cpath class='st0' d='M124.97,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,135.15,124.97,134.27,124.97,133.18'/%3e %3cpath class='st0' d='M118.35,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,135.15,118.35,134.27,118.35,133.18'/%3e %3cpath class='st0' d='M111.74,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,135.15,111.74,134.27,111.74,133.18'/%3e %3cpath class='st0' d='M105.12,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,135.15,105.12,134.27,105.12,133.18'/%3e %3cpath class='st0' d='M98.5,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,135.15,98.5,134.27,98.5,133.18'/%3e %3cpath class='st0' d='M91.89,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,135.15,91.89,134.27,91.89,133.18'/%3e %3cpath class='st0' d='M85.27,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,135.15,85.27,134.27,85.27,133.18'/%3e %3cpath class='st0' d='M78.65,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,135.15,78.65,134.27,78.65,133.18'/%3e %3cpath class='st0' d='M72.04,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,135.15,72.04,134.27,72.04,133.18'/%3e %3cpath class='st0' d='M65.42,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,135.15,65.42,134.27,65.42,133.18'/%3e %3cpath class='st0' d='M58.81,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,135.15,58.81,134.27,58.81,133.18'/%3e %3cpath class='st0' d='M175.35,55.41c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,54.53,176.43,55.41,175.35,55.41'/%3e %3cpath class='st0' d='M175.35,61.82c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,61.82,175.35,61.82'/%3e %3cpath class='st0' d='M175.35,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,68.24,175.35,68.24'/%3e %3cpath class='st0' d='M175.35,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,73.77,176.43,74.65,175.35,74.65'/%3e %3cpath class='st0' d='M175.35,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,80.18,176.43,81.06,175.35,81.06'/%3e %3cpath class='st0' d='M175.35,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,86.6,176.43,87.48,175.35,87.48'/%3e %3cpath class='st0' d='M175.35,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,93.89,175.35,93.89'/%3e %3cpath class='st0' d='M175.35,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,100.3,175.35,100.3'/%3e %3cpath class='st0' d='M175.35,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,105.83,176.43,106.71,175.35,106.71'/%3e %3cpath class='st0' d='M175.35,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,112.25,176.43,113.13,175.35,113.13'/%3e %3cpath class='st0' d='M175.35,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,118.66,176.43,119.54,175.35,119.54'/%3e %3cpath class='st0' d='M12.57,62.05c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 c0,0.54-0.21,1.04-0.57,1.39C13.6,61.83,13.11,62.05,12.57,62.05'/%3e %3cpath class='st0' d='M16.68,57.47c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C18.64,56.58,17.76,57.46,16.68,57.47'/%3e %3cpath class='st0' d='M21.06,53.11c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C23.02,52.22,22.15,53.1,21.06,53.11'/%3e %3cpath class='st0' d='M25.45,48.75c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C27.41,47.86,26.53,48.75,25.45,48.75'/%3e %3cpath class='st0' d='M29.83,44.39c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C31.79,43.5,30.92,44.39,29.83,44.39'/%3e %3cpath class='st0' d='M12.28,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,68.24,12.28,68.24'/%3e %3cpath class='st0' d='M12.28,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,73.77,13.37,74.65,12.28,74.65'/%3e %3cpath class='st0' d='M12.28,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,80.18,13.37,81.06,12.28,81.06'/%3e %3cpath class='st0' d='M12.28,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,86.6,13.37,87.48,12.28,87.48'/%3e %3cpath class='st0' d='M12.28,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,93.89,12.28,93.89'/%3e %3cpath class='st0' d='M12.28,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,100.3,12.28,100.3'/%3e %3cpath class='st0' d='M12.28,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,105.83,13.37,106.71,12.28,106.71'/%3e %3cpath class='st0' d='M12.28,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,112.25,13.37,113.13,12.28,113.13'/%3e %3cpath class='st0' d='M12.28,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,118.66,13.37,119.54,12.28,119.54'/%3e %3cpath class='st0' d='M52.19,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,135.15,52.19,134.27,52.19,133.18'/%3e %3cpath class='st0' d='M45.57,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,135.15,45.57,134.27,45.57,133.18'/%3e %3cpath class='st0' d='M38.96,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,135.15,38.96,134.27,38.96,133.18'/%3e %3cpath class='st0' d='M32.34,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.22,135.15,32.34,134.27,32.34,133.18'/%3e %3cpath class='st0' d='M25.72,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C26.6,135.15,25.72,134.27,25.72,133.18'/%3e %3cpath class='st0' d='M158.05,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,40.02,158.05,39.14,158.05,38.05'/%3e %3cpath class='st0' d='M151.44,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,40.02,151.44,39.14,151.44,38.05'/%3e %3cpath class='st0' d='M144.82,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,40.02,144.82,39.14,144.82,38.05'/%3e %3cpath class='st0' d='M138.2,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,40.02,138.2,39.14,138.2,38.05'/%3e %3cpath class='st0' d='M131.59,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,40.02,131.59,39.14,131.59,38.05'/%3e %3cpath class='st0' d='M124.97,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,40.02,124.97,39.14,124.97,38.05'/%3e %3cpath class='st0' d='M118.35,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,40.02,118.35,39.14,118.35,38.05'/%3e %3cpath class='st0' d='M111.74,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,40.02,111.74,39.14,111.74,38.05'/%3e %3cpath class='st0' d='M105.12,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,40.02,105.12,39.14,105.12,38.05'/%3e %3cpath class='st0' d='M98.5,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,40.02,98.5,39.14,98.5,38.05'/%3e %3cpath class='st0' d='M91.89,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,40.02,91.89,39.14,91.89,38.05'/%3e %3cpath class='st0' d='M85.27,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,40.02,85.27,39.14,85.27,38.05'/%3e %3cpath class='st0' d='M78.65,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,40.02,78.65,39.14,78.65,38.05'/%3e %3cpath class='st0' d='M72.04,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,40.02,72.04,39.14,72.04,38.05'/%3e %3cpath class='st0' d='M65.42,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,40.02,65.42,39.14,65.42,38.05'/%3e %3cpath class='st0' d='M58.81,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,40.02,58.81,39.14,58.81,38.05'/%3e %3cpath class='st0' d='M52.19,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,40.02,52.19,39.14,52.19,38.05'/%3e %3cpath class='st0' d='M45.57,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,40.02,45.57,39.14,45.57,38.05'/%3e %3cpath class='st0' d='M38.96,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,40.02,38.96,39.14,38.96,38.05'/%3e %3cpath class='st0' d='M32.44,38.33c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.32,40.3,32.44,39.42,32.44,38.33'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,38.05c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C165.55,36.08,164.67,36.96,164.67,38.05'/%3e %3cpath class='st0' d='M170.63,41.16c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C171.51,39.19,170.63,40.07,170.63,41.16'/%3e %3cpath class='st0' d='M173.3,47.13c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C174.18,45.16,173.3,46.04,173.3,47.13'/%3e %3cpath class='st0' d='M22.91,133.07c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C22.03,135.03,22.91,134.15,22.91,133.07'/%3e %3cpath class='st0' d='M16.95,129.96c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C16.07,131.93,16.95,131.05,16.95,129.96'/%3e %3cpath class='st0' d='M14.27,123.99c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C13.39,125.96,14.27,125.08,14.27,123.99'/%3e %3c/g%3e %3c/svg%3e">
                            </div><img alt="Samsung Galaxy S25 FE"
                                srcset="/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fsamsung%2Fsamsung-galaxy-s25-fe%2Fsamsung-galaxy-s25-fe-navy-01-m.webp&w=256&q=75, /_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fsamsung%2Fsamsung-galaxy-s25-fe%2Fsamsung-galaxy-s25-fe-navy-01-m.webp&w=384&q=75 2x">
                            <p class="brand">Samsung</p>
                            <p class="device-name">Samsung Galaxy S25 FE</p>
                            <p class="device-prefix">Device from</p>
                            <p class="device-price"><span class="dollar">$</span><span
                                    class="device-recurringCharge">30.52</span><span
                                    class="device-was-price">$15.25</span><span class="mth">per month</span></p>
                            <p class="device-mincost">Min cost $698.40 over 36 months. Plan cost additional.</p>
                            <div class="primaryBtn">Shop now</div>
                        </div>
                    </div>
                </a><a class="deviceCard itemCard" title="Samsung Galaxy A36 5G"
                    href="https://www.vodafone.com.au/mobile/mobile-phones/samsung/samsung-galaxy-a36-5g"
                    aria-hidden="false">
                    <div class="device-item">
                        <div class="device-item-device">
                            <div class="device-item-badge"><img alt="5G approved device"
                                    src="data:image/svg+xml,%3csvg id='Layer_1' data-name='Layer 1'                                                                 xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2,.cls-3%7bfill:none;%7d.cls-2,.cls-3%7bstroke:%23333;stroke-width:8px;%7d.cls-2%7bstroke-linecap:round;stroke-linejoin:round;%7d.cls-3%7bstroke-miterlimit:10;%7d%3c/style%3e%3c/defs%3e%3ctitle%3e5g%3c/title%3e%3crect class='cls-1' width='192' height='192'/%3e%3cpath class='cls-2' d='M122,98h14v12a9.57,9.57,0,0,1-7,9.5c-8.28,2.26-25,3.73-25-23.5,0-29.5,26.56-25.9,30.5-18.5' transform='translate(0 0)'/%3e%3ccircle class='cls-3' cx='96' cy='96' r='76'/%3e%3cpath class='cls-2' d='M83.84,72.39H63.5v21l2.19-1.08A14.73,14.73,0,1,1,61.8,117' transform='translate(0 0)'/%3e%3c/svg%3e">
                                <img alt="eSIM-enabled device"
                                    src="data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 26.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='ICON'                                                                   xmlns='http://www.w3.org/2000/svg'                                                                   xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 192 192' style='enable-background:new 0 0 192 192;' xml:space='preserve'%3e %3cstyle type='text/css'%3e .st0%7bfill:%23333333;%7d %3c/style%3e %3cg%3e %3cpath class='st0' d='M42.43,93.32c-0.03,0.14-0.05,0.3-0.05,0.47c0,0.73,0.16,1.38,0.49,1.95c0.33,0.57,0.76,1.06,1.3,1.46 c0.54,0.4,1.15,0.7,1.82,0.91c0.68,0.21,1.38,0.31,2.11,0.31c1.32,0,2.48-0.24,3.49-0.73c1.01-0.49,1.91-1.15,2.71-1.98l5.26,4.11 c-1.67,1.77-3.52,3.05-5.57,3.83c-2.05,0.78-4.25,1.17-6.61,1.17c-1.81,0-3.48-0.25-5.02-0.76c-1.54-0.5-2.89-1.25-4.04-2.24 c-1.15-0.99-2.05-2.21-2.71-3.67c-0.66-1.46-0.99-3.12-0.99-5c0-2.22,0.39-4.3,1.17-6.22c0.78-1.93,1.86-3.6,3.23-5.02 c1.37-1.42,3.01-2.54,4.92-3.36c1.91-0.82,4.01-1.22,6.3-1.22c1.7,0,3.25,0.24,4.66,0.73c1.41,0.49,2.61,1.19,3.62,2.11 c1.01,0.92,1.79,2.06,2.34,3.41c0.55,1.35,0.83,2.92,0.83,4.69c0,0.62-0.06,1.41-0.18,2.37c-0.12,0.96-0.29,1.85-0.49,2.68H42.43z M54.24,88.22c0.03-0.17,0.05-0.35,0.05-0.52v-0.52c0-1.15-0.41-2.1-1.22-2.86c-0.82-0.76-1.99-1.15-3.51-1.15 c-0.94,0-1.78,0.17-2.52,0.49c-0.75,0.33-1.4,0.74-1.95,1.22c-0.56,0.49-1.01,1.02-1.35,1.61c-0.35,0.59-0.59,1.16-0.73,1.72H54.24 z'/%3e %3cpath class='st0' d='M85.82,76.76c-0.76-0.97-1.76-1.74-2.99-2.32c-1.23-0.57-2.42-0.86-3.57-0.86c-0.59,0-1.19,0.05-1.8,0.16 c-0.61,0.1-1.15,0.3-1.64,0.6c-0.49,0.3-0.89,0.68-1.22,1.15c-0.33,0.47-0.49,1.07-0.49,1.8c0,0.62,0.13,1.15,0.39,1.56 c0.26,0.42,0.64,0.78,1.15,1.09c0.5,0.31,1.1,0.6,1.8,0.86c0.69,0.26,1.47,0.53,2.34,0.81c1.25,0.42,2.55,0.88,3.9,1.38 c1.35,0.5,2.59,1.17,3.7,2c1.11,0.83,2.03,1.87,2.76,3.1c0.73,1.23,1.09,2.77,1.09,4.61c0,2.12-0.39,3.95-1.17,5.49 c-0.78,1.54-1.83,2.82-3.15,3.83c-1.32,1.01-2.83,1.75-4.53,2.24c-1.7,0.49-3.45,0.73-5.26,0.73c-2.64,0-5.19-0.46-7.65-1.38 c-2.46-0.92-4.51-2.23-6.14-3.93l5.83-5.94c0.9,1.11,2.09,2.04,3.57,2.79c1.47,0.75,2.94,1.12,4.4,1.12c0.66,0,1.3-0.07,1.93-0.21 c0.62-0.14,1.17-0.36,1.64-0.68c0.47-0.31,0.84-0.73,1.12-1.25c0.28-0.52,0.42-1.15,0.42-1.87c0-0.69-0.17-1.28-0.52-1.77 c-0.35-0.49-0.84-0.93-1.48-1.33c-0.64-0.4-1.44-0.76-2.39-1.09c-0.96-0.33-2.04-0.68-3.25-1.07c-1.18-0.38-2.33-0.83-3.46-1.35 c-1.13-0.52-2.13-1.19-3.02-2c-0.88-0.82-1.6-1.8-2.13-2.97c-0.54-1.16-0.81-2.58-0.81-4.24c0-2.05,0.42-3.8,1.25-5.26 c0.83-1.46,1.93-2.66,3.28-3.59c1.35-0.94,2.88-1.62,4.58-2.06c1.7-0.43,3.42-0.65,5.15-0.65c2.08,0,4.21,0.38,6.38,1.15 c2.17,0.76,4.07,1.89,5.7,3.38L85.82,76.76z'/%3e %3crect x='96.21' y='67.19' class='st0' width='8.96' height='36.86'/%3e %3cpolygon class='st0' points='144.26,104.05 144.47,77.96 144.32,77.96 134.74,104.05 128.49,104.05 119.17,77.96 119.01,77.96 119.22,104.05 110.84,104.05 110.84,67.19 123.51,67.19 131.9,90.82 132.11,90.82 140.13,67.19 153.01,67.19 153.01,104.05 '/%3e %3cpath class='st0' d='M158.05,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,135.15,158.05,134.27,158.05,133.18'/%3e %3cpath class='st0' d='M151.44,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,135.15,151.44,134.27,151.44,133.18'/%3e %3cpath class='st0' d='M144.82,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,135.15,144.82,134.27,144.82,133.18'/%3e %3cpath class='st0' d='M138.2,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,135.15,138.2,134.27,138.2,133.18'/%3e %3cpath class='st0' d='M131.59,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,135.15,131.59,134.27,131.59,133.18'/%3e %3cpath class='st0' d='M124.97,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,135.15,124.97,134.27,124.97,133.18'/%3e %3cpath class='st0' d='M118.35,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,135.15,118.35,134.27,118.35,133.18'/%3e %3cpath class='st0' d='M111.74,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,135.15,111.74,134.27,111.74,133.18'/%3e %3cpath class='st0' d='M105.12,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,135.15,105.12,134.27,105.12,133.18'/%3e %3cpath class='st0' d='M98.5,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,135.15,98.5,134.27,98.5,133.18'/%3e %3cpath class='st0' d='M91.89,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,135.15,91.89,134.27,91.89,133.18'/%3e %3cpath class='st0' d='M85.27,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,135.15,85.27,134.27,85.27,133.18'/%3e %3cpath class='st0' d='M78.65,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,135.15,78.65,134.27,78.65,133.18'/%3e %3cpath class='st0' d='M72.04,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,135.15,72.04,134.27,72.04,133.18'/%3e %3cpath class='st0' d='M65.42,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,135.15,65.42,134.27,65.42,133.18'/%3e %3cpath class='st0' d='M58.81,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,135.15,58.81,134.27,58.81,133.18'/%3e %3cpath class='st0' d='M175.35,55.41c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,54.53,176.43,55.41,175.35,55.41'/%3e %3cpath class='st0' d='M175.35,61.82c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,61.82,175.35,61.82'/%3e %3cpath class='st0' d='M175.35,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,68.24,175.35,68.24'/%3e %3cpath class='st0' d='M175.35,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,73.77,176.43,74.65,175.35,74.65'/%3e %3cpath class='st0' d='M175.35,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,80.18,176.43,81.06,175.35,81.06'/%3e %3cpath class='st0' d='M175.35,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,86.6,176.43,87.48,175.35,87.48'/%3e %3cpath class='st0' d='M175.35,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,93.89,175.35,93.89'/%3e %3cpath class='st0' d='M175.35,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S176.43,100.3,175.35,100.3'/%3e %3cpath class='st0' d='M175.35,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,105.83,176.43,106.71,175.35,106.71'/%3e %3cpath class='st0' d='M175.35,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,112.25,176.43,113.13,175.35,113.13'/%3e %3cpath class='st0' d='M175.35,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C177.31,118.66,176.43,119.54,175.35,119.54'/%3e %3cpath class='st0' d='M12.57,62.05c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 c0,0.54-0.21,1.04-0.57,1.39C13.6,61.83,13.11,62.05,12.57,62.05'/%3e %3cpath class='st0' d='M16.68,57.47c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C18.64,56.58,17.76,57.46,16.68,57.47'/%3e %3cpath class='st0' d='M21.06,53.11c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C23.02,52.22,22.15,53.1,21.06,53.11'/%3e %3cpath class='st0' d='M25.45,48.75c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C27.41,47.86,26.53,48.75,25.45,48.75'/%3e %3cpath class='st0' d='M29.83,44.39c-1.09,0.01-1.97-0.87-1.98-1.96c-0.01-1.09,0.87-1.97,1.96-1.98c1.09-0.01,1.97,0.87,1.98,1.96 C31.79,43.5,30.92,44.39,29.83,44.39'/%3e %3cpath class='st0' d='M12.28,68.24c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,68.24,12.28,68.24'/%3e %3cpath class='st0' d='M12.28,74.65c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,73.77,13.37,74.65,12.28,74.65'/%3e %3cpath class='st0' d='M12.28,81.06c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,80.18,13.37,81.06,12.28,81.06'/%3e %3cpath class='st0' d='M12.28,87.48c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,86.6,13.37,87.48,12.28,87.48'/%3e %3cpath class='st0' d='M12.28,93.89c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,93.89,12.28,93.89'/%3e %3cpath class='st0' d='M12.28,100.3c-1.09,0-1.97-0.88-1.97-1.97s0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 S13.37,100.3,12.28,100.3'/%3e %3cpath class='st0' d='M12.28,106.71c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,105.83,13.37,106.71,12.28,106.71'/%3e %3cpath class='st0' d='M12.28,113.13c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,112.25,13.37,113.13,12.28,113.13'/%3e %3cpath class='st0' d='M12.28,119.54c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97 C14.25,118.66,13.37,119.54,12.28,119.54'/%3e %3cpath class='st0' d='M52.19,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,135.15,52.19,134.27,52.19,133.18'/%3e %3cpath class='st0' d='M45.57,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,135.15,45.57,134.27,45.57,133.18'/%3e %3cpath class='st0' d='M38.96,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,135.15,38.96,134.27,38.96,133.18'/%3e %3cpath class='st0' d='M32.34,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.22,135.15,32.34,134.27,32.34,133.18'/%3e %3cpath class='st0' d='M25.72,133.18c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C26.6,135.15,25.72,134.27,25.72,133.18'/%3e %3cpath class='st0' d='M158.05,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C158.93,40.02,158.05,39.14,158.05,38.05'/%3e %3cpath class='st0' d='M151.44,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C152.32,40.02,151.44,39.14,151.44,38.05'/%3e %3cpath class='st0' d='M144.82,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C145.7,40.02,144.82,39.14,144.82,38.05'/%3e %3cpath class='st0' d='M138.2,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C139.08,40.02,138.2,39.14,138.2,38.05'/%3e %3cpath class='st0' d='M131.59,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C132.47,40.02,131.59,39.14,131.59,38.05'/%3e %3cpath class='st0' d='M124.97,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C125.85,40.02,124.97,39.14,124.97,38.05'/%3e %3cpath class='st0' d='M118.35,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C119.23,40.02,118.35,39.14,118.35,38.05'/%3e %3cpath class='st0' d='M111.74,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C112.62,40.02,111.74,39.14,111.74,38.05'/%3e %3cpath class='st0' d='M105.12,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C106,40.02,105.12,39.14,105.12,38.05'/%3e %3cpath class='st0' d='M98.5,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C99.38,40.02,98.5,39.14,98.5,38.05'/%3e %3cpath class='st0' d='M91.89,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C92.77,40.02,91.89,39.14,91.89,38.05'/%3e %3cpath class='st0' d='M85.27,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C86.15,40.02,85.27,39.14,85.27,38.05'/%3e %3cpath class='st0' d='M78.65,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C79.54,40.02,78.65,39.14,78.65,38.05'/%3e %3cpath class='st0' d='M72.04,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C72.92,40.02,72.04,39.14,72.04,38.05'/%3e %3cpath class='st0' d='M65.42,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C66.3,40.02,65.42,39.14,65.42,38.05'/%3e %3cpath class='st0' d='M58.81,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C59.69,40.02,58.81,39.14,58.81,38.05'/%3e %3cpath class='st0' d='M52.19,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C53.07,40.02,52.19,39.14,52.19,38.05'/%3e %3cpath class='st0' d='M45.57,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C46.45,40.02,45.57,39.14,45.57,38.05'/%3e %3cpath class='st0' d='M38.96,38.05c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C39.84,40.02,38.96,39.14,38.96,38.05'/%3e %3cpath class='st0' d='M32.44,38.33c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C33.32,40.3,32.44,39.42,32.44,38.33'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,133.06c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C165.55,135.03,164.67,134.15,164.67,133.06'/%3e %3cpath class='st0' d='M170.63,129.96c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C171.51,131.92,170.63,131.04,170.63,129.96'/%3e %3cpath class='st0' d='M173.3,123.99c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97c0,1.09-0.88,1.97-1.97,1.97 C174.18,125.95,173.3,125.07,173.3,123.99'/%3e %3cpath class='st0' d='M164.67,38.05c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C165.55,36.08,164.67,36.96,164.67,38.05'/%3e %3cpath class='st0' d='M170.63,41.16c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C171.51,39.19,170.63,40.07,170.63,41.16'/%3e %3cpath class='st0' d='M173.3,47.13c0,1.09,0.88,1.97,1.97,1.97c1.09,0,1.97-0.88,1.97-1.97c0-1.09-0.88-1.97-1.97-1.97 C174.18,45.16,173.3,46.04,173.3,47.13'/%3e %3cpath class='st0' d='M22.91,133.07c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C22.03,135.03,22.91,134.15,22.91,133.07'/%3e %3cpath class='st0' d='M16.95,129.96c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C16.07,131.93,16.95,131.05,16.95,129.96'/%3e %3cpath class='st0' d='M14.27,123.99c0-1.09-0.88-1.97-1.97-1.97c-1.09,0-1.97,0.88-1.97,1.97c0,1.09,0.88,1.97,1.97,1.97 C13.39,125.96,14.27,125.08,14.27,123.99'/%3e %3c/g%3e %3c/svg%3e">
                            </div><img alt="Samsung Galaxy A36 5G"
                                srcset="/_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fsamsung%2Fsamsung-galaxy-a36-5g%2Fsamsung-galaxy-a36-5g-awesome-lavender-01-m.webp&w=256&q=75, /_next/image?url=https%3A%2F%2Fwww.vodafone.com.au%2Fimages%2Fdevices%2Fsamsung%2Fsamsung-galaxy-a36-5g%2Fsamsung-galaxy-a36-5g-awesome-lavender-01-m.webp&w=384&q=75 2x">
                            <p class="brand">Samsung</p>
                            <p class="device-name">Samsung Galaxy A36 5G</p>
                            <p class="device-prefix">Device from</p>
                            <p class="device-price"><span class="dollar">$</span><span
                                    class="device-recurringCharge">4.00</span><span
                                    class="device-was-price">$15.25</span><span class="mth">per month</span></p>
                            <p class="device-mincost">Min cost $144.00 over 36 months. Plan cost additional.</p>
                            <div class="primaryBtn">Shop now</div>
                        </div>
                    </div>
                </a></div>
        </div>
        <div class="DCP16910Wrapper_tabItem planCardContainer" data-cat="simonly">
            <a
                class="planCard itemCard XonlineExclusive" title="Small SIM Only Plan"
                href="https://www.vodafone.com.au/mobile/sim-only-phone-plans" aria-hidden="false">
                <div class="plan-item"><img
                        src="https://www.vodafone.com.au/images/merch/1412-simonly-small-tile.webp"
                        alt="Small SIM Only Plan">
                    <div class="plan-text">
                        <h3 class="plan-heading">Save $14/mth on plan fees.</h3>
                        <p class="plan-subheading">For the first 12 months on a Small SIM Only plan.</p>
                        <p class="plan-tc">New connections only. Ends 02/03/26 (unless extended). <tooltip copy="Reverts to standard pricing after 12 months. T&C apply.">T&C apply.</tooltip>
                        </p>
                        <p class="plan-link">Shop now</p>
                    </div>
                </div>
            </a><a class="planCard itemCard XonlineExclusive" title="Medium SIM Only Plan"
                href="https://www.vodafone.com.au/mobile/sim-only-phone-plans" aria-hidden="false">
                <div class="plan-item"><img
                        src="https://www.vodafone.com.au/images/merch/1412-simonly-medium-tile.webp"
                        alt="">
                    <div class="plan-text">
                        <h3 class="plan-heading">Save $14/mth on plan fees.</h3>
                        <p class="plan-subheading">For the first 12 months on a Medium SIM Only plan.</p>
                        <p class="plan-tc">New connections only. Ends 02/03/26 (unless extended). <tooltip copy="Reverts to standard pricing after 12 months. T&C apply.">T&C apply.</tooltip>
                        </p>
                        <p class="plan-link">Shop now</p>
                    </div>
                </div>
            </a></div>
        <div class="DCP16910Wrapper_tabItem planCardContainer" data-cat="prepaid"><a
                class="planCard itemCard XonlineExclusive" title="$200 Prepaid Plus Starter Pack"
                href="https://www.vodafone.com.au/prepaid/plans/320-plus"
                aria-hidden="false">
                <div class="plan-item"><img
                        src="https://www.vodafone.com.au/images/merch/1415-feb-offers-starter-pack-250-tile.webp"
                        alt="$200 Prepaid Starter Pack">
                    <div class="plan-text">
                        <h3 class="plan-heading">Get our $320 Prepaid Plus SIM for $199. Online only.</h3>
                        <p class="plan-subheading">That's 300GB on activation only. 220GB thereafter.</p>
                        <p class="plan-tc">Ends 14/04 (unless extended). T&C apply</p>
                        <p class="plan-link">Shop now</p>
                    </div>
                </div>
            </a><a class="planCard itemCard XonlineExclusive" title="$35 Prepaid Plus Starter Pack"
                href="https://www.vodafone.com.au/prepaid/plans/45-plus"
                aria-hidden="false">
                <div class="plan-item"><img
                        src="https://www.vodafone.com.au/images/merch/1415-feb-offers-starter-pack-35-tile.webp"
                        alt="">
                    <div class="plan-text">
                        <h3 class="plan-heading">Get our $45 Prepaid Plus SIM for $15. Online only.</h3>
                        <p class="plan-subheading">That's 100GB for your first 3 recharges. 35GB thereafter.</p>
                        <p class="plan-tc">Ends 14/04 (unless extended). T&C apply.</p>
                        <p class="plan-link">Shop now</p>
                    </div>
                </div>
            </a></div>
        <div class="DCP16910Wrapper_tabItem planCardContainer" data-cat="homeinternet"><a
                class="planCard itemCard XonlineExclusive" title="5G Home Internet"
                href="https://www.vodafone.com.au/home-internet/4g-5g-plans" aria-hidden="false">
                <div class="plan-item"><img
                        src="https://www.vodafone.com.au/images/merch/1403-summer-switch-5g-tile.webp"
                        alt="5G Home Internet">
                    <div class="plan-text">
                        <h3 class="plan-heading">High-speed 5G $55/mth for a year.</h3>
                        <p class="plan-subheading">Save $180 over 12 months when you have a mobile plan with us.</p>
                        <p class="plan-tc">Ends 04/03 (unless extended). New connections in select areas only. <tooltip copy="5G Premium - 100Mbps (max and typical evening speed 7-11pm). Speeds vary. Reverts to $65/mth. Min cost $195 (1 mth plan fee + $140 mesh) if you return the modem. New connections in select areas only. Additional mesh ($144 over 36 mths) may be required. Ends 04/03 (unless extended). T&C apply.">T&C apply</tooltip>.
                        </p>
                        <p class="plan-link">Shop now</p>
                    </div>
                </div>
            </a><a class="planCard itemCard XonlineExclusive" title="nbn® Home Fast+"
                href="https://www.vodafone.com.au/home-internet/nbn" aria-hidden="false">
                <div class="plan-item"><img
                        src="https://www.vodafone.com.au/images/merch/fwa-nbn-offer-04-11/1400-nbn-tile.webp"
                        alt="nbn® Home Fast+">
                    <div class="plan-text">
                        <h3 class="plan-heading">500Mbps nbn® $74/mth for a year.</h3>
                        <p class="plan-subheading">When you have a mobile plan with us. Save $180 over 12 months.</p>
                        <p class="plan-tc">Ends 25/02 (unless extended). New connections in select areas only. <tooltip copy="New FTTP/HFC connections only. Reverts to $89/mth. nbn® Essential+ plan with speed upgrade to 500Mbps (typical evening speed 7-11pm). Speeds vary. High speed compatible modem required (fee may apply). Min cost $548 (1 month plan fees + $336 modem + $138 mesh). Ends 25/02. T&C apply.">T&C apply</tooltip>.</p>
                        <p class="plan-link">Shop now</p>
                    </div>
                </div>
            </a></div>
        <div class="modal">
            <div class="tooltip">
                <div class="text">
                    <p class="copy"></p>
                </div>
                <div class="close-link"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation"
                        class="close-icon">
                        <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <path d="M20 4L4 20M4 4l16 16" stroke="currentColor" stroke-linecap="round"></path>
                        </g>
                    </svg></div>
            </div>
        </div>
    </div>
</div>`
	},
	observe: function () {
		console.log('###### DCP16910Fn observe ######');
		croWD.hotbed.listen('croPageTrack', function (observable, eventType, data) {
			console.log('#########croPageTrack DATA####:', data);
			DCP16910Fn.init('1');
		});
		if (DCP16910Fn.config.targetPaths.includes(window.location.pathname)) {
			DCP16910Fn.init('0');
		}
	},
	init: function (s) {
		console.log('###### DCP16910Fn init ######', s);
		if (DCP16910Fn.config.targetPaths.includes(window.location.pathname) && $('#tabs-popular-offers').length == 0) {
			$('vha-popular-products').before(DCP16910Fn.config.htmlCode);
			var DCP16910WrapperWatch = setInterval(function () {
				if ($('#DCP16910Wrapper').length > 0 && jQuery.fn.slick) {
					clearInterval(DCP16910WrapperWatch);
					$('.DCP16910Wrapper_tabItem .deviceSet').removeClass('active');
					$('.DCP16910Wrapper_tabItem #' + DCP16910DeviceCohort).addClass('active');
					DCP16910Fn.applySlick();
					DCP16910Fn.assignClicks();
				}
			}, 200);

			croWD.utils.launchTracking('DCP16910 BF:Popular Phones Expansion', 'Solution initialised');
		}
	},
	openModal: function (copyText) {
		DCP16910Fn.closeModal();
		var modal = document.querySelector('#DCP16910Wrapper .modal');
		if (modal && copyText) {
			modal.querySelector('.copy').innerHTML = copyText;
			modal.style.display = 'flex';
		}
	},
	closeModal: function () {
		var modal = document.querySelector('#DCP16910Wrapper .modal');
		if (modal) {
			modal.querySelector('.copy').innerHTML = '';
			modal.style.display = 'none';
		}
	},
	assignClicks: function () {
		$('html').on('click', '#DCP16910Wrapper_tabs ul li', function () {
			$('#DCP16910Wrapper_tabs ul li').removeClass('active');
			$('.DCP16910Wrapper_tabItem').removeClass('active');
			$(this).addClass('active');
			$('.DCP16910Wrapper_tabItem[data-cat= \'' + $(this).attr('data-cat') + '\']').addClass('active');
			croWD.utils.launchTracking('DCP16910 BF:Popular Phones Expansion', 'Tab Click - ' + $(this).attr('data-cat'));
		});
		$('html').on('click', '.DCP16910Wrapper_tabItem a', function () {
			croWD.utils.launchTracking('DCP16910 BF:Popular Phones Expansion', 'Item Click - ' + $(this).attr('title'));
		});

		var tabs = document.querySelectorAll('#DCP16910Wrapper_tabs ul li');
		tabs.forEach(function (tab, index) {
			tab.addEventListener('keydown', (event) => {
				if (event.key === 'Enter') {
					event.preventDefault();
					DCP16910Fn.tabClick(tab.attributes['data-cat'].value);
				}
			});
		})

		var tooltips = document.querySelectorAll('#DCP16910Wrapper tooltip');
		tooltips.forEach(function (el) {
			el.addEventListener('click', function (event) {
				event.stopPropagation();
				event.preventDefault();
				var copyText = el.getAttribute('copy') || '';
				if (copyText) {
					DCP16910Fn.openModal(copyText);
				}
			});
		});

		var closeLink = document.querySelector('#DCP16910Wrapper .modal .close-link');
		if (closeLink) {
			closeLink.addEventListener('click', function (event) {
				event.stopPropagation();
				event.preventDefault();
				DCP16910Fn.closeModal();
			});
		}

		var modalOverlay = document.querySelector('#DCP16910Wrapper .modal');
		if (modalOverlay) {
			modalOverlay.addEventListener('click', function (event) {
				if (event.target === modalOverlay) {
					DCP16910Fn.closeModal();
				}
			});
		}

		document.addEventListener('keydown', function (event) {
			if (event.key === 'Escape') {
				DCP16910Fn.closeModal();
			}
		});

	},
	tabClick: function (val) {
		$('#DCP16910Wrapper_tabs ul li').removeClass('active');
		$('.DCP16910Wrapper_tabItem').removeClass('active');
		$('#DCP16910Wrapper_tabs ul li[data-cat=\'' + val + '\']').addClass('active');
		$('.DCP16910Wrapper_tabItem[data-cat= \'' + val + '\']').addClass('active');
		croWD.utils.launchTracking('DCP16910 BF:Popular Phones Expansion', 'Tab Click - ' + val);
	},
	applySlick: function () {
		console.log('#### applySlick');
		try {
			jQuery('.DCP16910Wrapper_tabItem.deviceCardContainer .deviceSet ').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 4,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 1170,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 870,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
			jQuery('.DCP16910Wrapper_tabItem.planCardContainer').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 2,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
		}
		catch (e) {
			console.log('####', e);
			jQuery('.DCP16910Wrapper_tabItem.deviceCardContainer .deviceSet').slick('unslick');
			jQuery('.DCP16910Wrapper_tabItem.deviceCardContainer .deviceSet').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 4,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 1170,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 870,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
			jQuery('.DCP16910Wrapper_tabItem.planCardContainer').slick('unslick');
			jQuery('.DCP16910Wrapper_tabItem.planCardContainer').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 2,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
		}
	},
};



var crowdMaxDCP16910 = 100;
var crowdFinderDCP16910 = setInterval(function () {
	crowdMaxDCP16910--;
	try {
		if (croWD && jQuery && $('vha-popular-products').length > 0) {
			var slickScript = document.createElement('script');
			slickScript.setAttribute('src', 'https://www.vodafone.com.au/content/dam/vha/croassets/slick.min.js');
			document.body.appendChild(slickScript);
			clearInterval(crowdFinderDCP16910);
			crowdFinderDCP16910 = null;
			$('vha-popular-products').hide();
			DCP16910Fn.observe();
		}
		if (crowdMaxDCP16910 <= 0) {
			clearInterval(crowdFinderDCP16910);
			crowdFinderDCP16910 = null;
		}
	} catch (e) { }
}, 100);