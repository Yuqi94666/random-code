$(document).ready(function() {
    var tabs = [
      { title: 'AU12629', testid: 'plan-card-AU12629' },
      { title: 'AU12630', testid: 'plan-card-AU12630' },
      { title: 'AU12631', testid: 'plan-card-AU12631' }
    ];
  
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