const targetDevices = [
  'IPH_16E',
  'SM_G_S25+_5G',
  'SM_G_Z_FLIP7_FE 5G',
  'SM_G_A36_5G',
  'IPH_16_PLUS',
  'SM_G_S25_EDGE_5G',
  'SM_G_S25_ULTRA_5G',
  'SM_G_S25_5G'
];
const CONSTANTS ={
	EXPERIMENT_ID: extension.experimentId,
	TARGET_DEVICES: extension.targetDevices,
}
function injectBadges() {
  document.querySelectorAll('[data-product-id]').forEach(card => {
	croWD.debug(`[purple badge module] card: `, card);
    const productId = card.dataset.productId;
	croWD.debug(`[purple badge module] CONSTANTS.TARGET_DEVICES: `, CONSTANTS.TARGET_DEVICES);
    if (!CONSTANTS.TARGET_DEVICES.includes(productId)) return;

    const link = card.querySelector('a[data-focus-role="title"]');
    if (!link || link.querySelector('.savexx-badge')) return;

    const recurringCharge = parseFloat(
      card.querySelector('[data-testid$="-recurringCharge"]').textContent || 0
    );

    const wasPrice = parseFloat(
      (card.querySelector('[data-testid$="-was-price"]').textContent || '0')
        .replace(/[$,]/g, '')
    );
    const month = card.querySelector('[data-product-listing-minimum-cost-body="true"]').textContent.match(/over\s+(\d+)\s+months/i)[1];
    //console.log('[DCP PUPRLE]', month);
    const totalSaving = Math.round((wasPrice - recurringCharge) *  month);

    if (totalSaving <= 0) return;

    const badge = document.createElement('div');
    badge.className = 'savexx-badge';
    badge.textContent = `Save $${totalSaving}`;

    badge.style.cssText = `
      padding: 4px 16px;
      border-radius: 4px;
      background: #9C2AA0;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      margin: 10px 16px 16px 0;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0;
      font-family: 'VodafoneRegularBold';
      height: 28px;
    `;

    link.appendChild(badge);
  });
}

// Initial run
injectBadges();

// Watch for React/Next.js renders
const observer = new MutationObserver(() => {
	croWD.debug(`[purple badge module] observer triggered: `);
  injectBadges();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});