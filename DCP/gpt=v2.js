const DCP17201CONSTANTS = {
  EXPERIMENT_ID: '17201',
  PAGES_INCLUDE: [],
  PAGES_EXCLUDE: [],
  EXPERIMENT_VARIANT: 'personalisation',
  TARGET_ELEMENT: 'DIV[data-testid="Upgrade-hub"]',

  TEMPLATE_HTML: `
    <div class="upgrade-options">
      <div class="main-container">
        <div class="hi-fi-dark-price-promise">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#E60000"></circle>
          </svg>

          <div class="frame-838">
            <div class="online-exclusive">$300 bonus credit</div>
            <div class="save-300-when-you-upgrade-online">
              Log in to claim your bonus credit, which will be applied on your first bill. Ends 14/04.
            </div>
          </div>
        </div>

        <div class="content-container">
          <div class="cta">
            <div class="content">
              <a href="#" class="button cta-upgrade">Log in to claim</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  TEMPLATE_INJECT_TYPE: 'replace',

  CUSTOM_CSS: `
    .upgrade-options { background:#fff; border:1px solid #666; border-radius:6px; padding:24px }
    .main-container { display:flex; gap:16px; align-items:center }
    .frame-838 { padding-left:16px }
    .online-exclusive { font-weight:700; font-size:20px }
    .save-300-when-you-upgrade-online { font-size:16px }
    .cta { background:#333; border-radius:6px; padding:14px 20px }
    .cta:hover { background:#666 }
    .button { color:#fff; text-decoration:none; font-size:18px }
  `,

  INIT_RETRY_INTERVAL: 500,
  INIT_MAX_RETRIES: 20
};

let DCP17201OBJ = {

  applyChanges: function () {
    try {
      this.buildCSS();
      this.buildTemplate();
      this.toggleUpgradeCTA(); // ✅ SIMPLE LOGIC HERE
    } catch (e) {
      console.error('applyChanges error', e);
    }
  },

  // ✅ VERY SIMPLE COOKIE CHECK
  toggleUpgradeCTA: function () {
    const match = document.cookie.match(/vfe\.existingCustomer=([^;]+)/);
    const existingCustomer = match ? match[1] : null;

    const cta = document.querySelector('.cta-upgrade');
    const container = document.querySelector('.content-container');
    if (!cta || !container) return;

    // always set correct href
    cta.href =
      'https://www.vodafone.com.au/upgrade' +
      window.location.pathname +
      window.location.search;

    // show ONLY when explicitly false
    if (existingCustomer === 'false') {
      container.style.display = '';
      console.log('[DCP17201] CTA shown');
    } else {
      container.style.display = 'none';
      console.log('[DCP17201] CTA hidden');
    }
  },

  buildCSS: function () {
    const id = DCP17201CONSTANTS.EXPERIMENT_ID + '-style';
    const old = document.getElementById(id);
    if (old) old.remove();

    const style = document.createElement('style');
    style.id = id;
    style.innerHTML = DCP17201CONSTANTS.CUSTOM_CSS;
    document.head.appendChild(style);
  },

  buildTemplate: function () {
    const target = document.querySelector(DCP17201CONSTANTS.TARGET_ELEMENT);
    if (!target) return;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = DCP17201CONSTANTS.TEMPLATE_HTML;

    target.insertAdjacentElement('afterend', wrapper);
    target.remove();
  },

  waitForElement: function () {
    let tries = 0;
    const timer = setInterval(() => {
      const el = document.querySelector(DCP17201CONSTANTS.TARGET_ELEMENT);
      if (el) {
        clearInterval(timer);
        this.applyChanges();
      }
      if (++tries >= DCP17201CONSTANTS.INIT_MAX_RETRIES) {
        clearInterval(timer);
      }
    }, DCP17201CONSTANTS.INIT_RETRY_INTERVAL);
  },

  init: function () {
    this.waitForElement();
  }
};

DCP17201OBJ.init();