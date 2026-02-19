function checkDeviceStatus() {
    const deviceName = window.location.pathname.split('/').pop();
    return fetch(`https://dsapi.vodafone.com.au/device/postpaid/${deviceName}?serviceType=New`)
        .then(res => res.json())
        .then(({ deviceStockStatus, deviceConfig }) => {
            let deviceResult = {
                deviceStockStatus, deviceConfig,
            };

            console.log('Processed device details:', deviceResult);
            return deviceResult;
        })
        .catch(error => {
            console.error('Error fetching device status:', error);
            throw error;
        });
}