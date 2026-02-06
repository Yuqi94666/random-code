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
