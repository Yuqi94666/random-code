async function fetchDeviceInfo() {
  try {
    const response = await fetch('https://api.vodafone.com.au/device/postpaid?serviceType=New');
    const data = await response.json();
    
    return data.deviceListing.devices.map(device => ({
      name: device.name,
      recurringCharge: device.recurringCharge,
      discountedRecurringCharge: device.discountedRecurringCharge || null
    }));
  } catch (error) {
    console.error('Error fetching device data:', error);
    return [];
  }
}

// Usage:
const devices = await fetchDeviceInfo();
console.log(devices);
buildTemplate: function (doc) {
    try {
      const targetSelector = this.getTargetElement();
      let mainElements = doc.querySelectorAll(targetSelector);
      
      console.log("DCP16586: Cards found:", mainElements.length);
 
      mainElements.forEach((card, index) => {
        if (card.querySelector('.DCP16586-info-extension')) return;
 
        const cardBrand = card.querySelector('h2');
        console.log("DCP16586: Card brand found:", cardBrand ? cardBrand.textContent : "None");
        console.log("DCP16586: Card name found:", card.querySelector('h2 > div+div'));

        if (!cardBrand) return;
 
        const savingsText = DCP16586CONSTANTS.SAVINGS_AMOUNTS[index] || 'Save $0';
        let templateHTML = `<div class="DCP16586-info-extension">
          <div class="device-purple-badge">${savingsText}</div>
        </div>`;

        switch (DCP16586CONSTANTS.TEMPLATE_INJECT_TYPE) {
          case 'before':
            cardBrand.insertAdjacentHTML('beforebegin', templateHTML);
            break;
          case 'after':
            cardBrand.insertAdjacentHTML('afterend', templateHTML);
            break;
          default:
            cardBrand.insertAdjacentHTML('afterbegin', templateHTML);
        }
      });
    } catch (error) {
      console.error('DCP16586: Error in buildTemplate:', error);
    }
  },
