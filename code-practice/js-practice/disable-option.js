/*disable devices out of stock*/
(function () {
	let deviceData = null;
	let lastCheckedUrl = '';

	function updateCapacityOptions(selectedColor) {
		if (!deviceData || !selectedColor) return;

		const colorConfig = deviceData.deviceConfig[selectedColor];
		if (!colorConfig) return;

		const capacityChecks = Object.keys(colorConfig).map(capacity => {
			const skuList = colorConfig[capacity];
			const skuChecks = skuList.map(item =>
				fetch(`https://dsapi.vodafone.com.au/inventory/availability/${encodeURIComponent(item.SKU)}`)
					.then(r => r.json())
					.then(d => d.stockStatus === 'Non-Orderable')
					.catch(() => true)
			);

			return Promise.all(skuChecks).then(results => ({
				capacity: capacity,
				outOfStock: results.every(isOut => isOut)
			}));
		});

		Promise.all(capacityChecks).then(results => {
			document.querySelectorAll('input[name="capacity"]').forEach(input => {
				input.disabled = false;
			});

			results.forEach(result => {
				if (result.outOfStock) {
					const input = document.querySelector(`input[name="capacity"][value="${result.capacity}"]`);
					if (input) {
						input.disabled = true;
						console.log(`${selectedColor} ${result.capacity} out of stock,disabled`);
					}
				}
			});
		});
	}

	function checkAndDisable() {
		const currentUrl = window.location.href;
		const deviceName = window.location.pathname.split('/').pop();

		if (!deviceName.includes('iphone') || lastCheckedUrl === currentUrl) return;
		if (!document.querySelector('input[name="capacity"]')) return;

		fetch(`https://dsapi.vodafone.com.au/device/postpaid/${deviceName}?serviceType=New`)
			.then(res => res.json())
			.then(data => {
				if (data.deviceStockStatus === 'Non-Orderable') {
					document.querySelectorAll('input[name="capacity"], input[name="color"]').forEach(i => i.disabled = true);
					console.log('no device');
					lastCheckedUrl = currentUrl;
					return;
				}
				deviceData = data;
				document.querySelectorAll('input[name="color"]').forEach(colorInput => {
					colorInput.addEventListener('change', function () {
						updateCapacityOptions(this.value);
					});


					if (colorInput.checked) {
						updateCapacityOptions(colorInput.value);
					}
				});

				lastCheckedUrl = currentUrl;
			})
			.catch(error => console.error('Error:', error));
	}

	new MutationObserver(checkAndDisable).observe(document.body, { childList: true, subtree: true });
	setTimeout(checkAndDisable, 500);
})();