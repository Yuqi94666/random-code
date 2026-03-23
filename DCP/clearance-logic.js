

'use strict';
let targetDevicesRaw = extension.targetDevices || '[]';
let emitter = extension.emitter || 'targetDevicesReady';

let ClearanceLogicFn = {
	aid: 'clearance-logic',

	observe: function () {
		croWD.hotbed.listen('croPageTrack', function () {
			ClearanceLogicFn.getPayload();
		});
		ClearanceLogicFn.getPayload();
	},

	normalize: function (str) {
		return String(str || '').toLowerCase().trim();
	},

	parseDevices: function (raw) {
		raw = String(raw || '').trim();
		if (!raw) return [];
		return JSON.parse(raw);
	},

	getPayload: function () {
		console.log("targetDevicesRaw:", targetDevicesRaw);

		let deviceList = this.parseDevices(targetDevicesRaw);
		console.log("deviceList:", deviceList);

		let payload = {
			devices: deviceList,

			hasDevice: function (name) {
				let n = ClearanceLogicFn.normalize(name);
				console.log("nname:", n);

				return deviceList.some(function (d) {
					return n.indexOf( ClearanceLogicFn.normalize(d)) > -1; // partial match
				});
			}
		};
		croWD.hotbed.fire(emitter, payload);
		console.log('[logic] emitted:', emitter, payload);
		return payload;
	}
};

let crowdMaxClearanceLogicFnCounter = 5;
let crowdFinderClearanceLogicFn = setInterval(function () {
	crowdMaxClearanceLogicFnCounter--;

	if (typeof croWD !== 'undefined') {
		clearInterval(crowdFinderClearanceLogicFn);
		ClearanceLogicFn.observe();
		croWD.cmdr('clearance-logic', 'inject');
	}

	if (crowdMaxClearanceLogicFnCounter <= 0) {
		clearInterval(crowdFinderClearanceLogicFn);
	}
}, 1000);