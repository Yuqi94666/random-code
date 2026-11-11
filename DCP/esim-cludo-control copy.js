const CAMPAIGN_ID = 'DCP-18720-esim-banner';

const InlinebannerCONSTANTS = {
	EXPERIMENT_ID: CAMPAIGN_ID,
	EXPERIMENT_VARIANT: 'control',
	TARGET_ELEMENT: '#cludo-search-results > div.search-banner > div:nth-child(2) > p > vha-hero-banner',
	INIT_RETRY_INTERVAL: 500,
	INIT_MAX_RETRIES: 20,
};

const CTAOBJ = {
	tracking: function (value) {
		try {
			if (typeof dataLayer !== 'undefined' && dataLayer) {
				croWD.utils.launchTracking(
					InlinebannerCONSTANTS.EXPERIMENT_ID,
					value,
					InlinebannerCONSTANTS.EXPERIMENT_VARIANT,
					''
				);

				window.optimizely = window.optimizely || [];
				window.optimizely.push({
					type: 'event',
					eventName: 'cludo_esim_banner_cta',
				});
			}
		} catch (error) {
			console.log('Error in tracking function:', error);
		}
	},

	applyChanges: function () {
		try {
			CTAOBJ.tracking('display');
			const banner = document.querySelector(
				InlinebannerCONSTANTS.TARGET_ELEMENT
			);

			if (!banner || !banner.shadowRoot) {
				console.log('[DCP] Banner or shadow root not found');
				return;
			}

			const shadowRoot = banner.shadowRoot;

			// Original CTA
			const originalCTA = shadowRoot.querySelector('vha-button');

			if (!originalCTA) {
				console.log('[DCP] Original CTA not found');
				return;
			}

			// Prevent duplicate listeners
			if (originalCTA.dataset.dcpTracked) {
				return;
			}

			originalCTA.dataset.dcpTracked = 'true';

			originalCTA.addEventListener('click', function () {
				const ctaText = originalCTA.textContent.trim();

				console.log('[DCP] Original CTA clicked:', ctaText);

				CTAOBJ.tracking('click ' + ctaText);
			});

			console.log('[DCP] Control CTA tracking attached');
		} catch (error) {
			console.log('Error in applyChanges:', error);
			CTAOBJ.tracking('error applyChanges');
		}
	},

	init: function () {
		let retries = 0;

		const int = setInterval(() => {
			const el = document.querySelector(
				InlinebannerCONSTANTS.TARGET_ELEMENT
			);

			const cta =
				el &&
				el.shadowRoot &&
				el.shadowRoot.querySelector('vha-button');

			const hasCroWD =
				typeof croWD !== 'undefined' && !!croWD;

			retries++;

			if (el && cta && hasCroWD) {
				clearInterval(int);
				CTAOBJ.applyChanges();
			} else if (retries >= InlinebannerCONSTANTS.INIT_MAX_RETRIES) {
				console.warn(
					'[DCP] Still waiting for banner CTA...'
				);
			}
		}, InlinebannerCONSTANTS.INIT_RETRY_INTERVAL);
	},
};

CTAOBJ.init();



function swapItems() {
	const ul = document.querySelector('#search-results > section > ul');

	if (!ul) return;

	const item1 = ul.querySelector('li:nth-child(1)');
	const item2 = ul.querySelector('li:nth-child(2)');
	const item3 = ul.querySelector('li:nth-child(3)');
	const item5 = ul.querySelector('li:nth-child(5)');

	if (!item1 || !item2 || !item3 || !item5) return;

	const placeholder = document.createElement('li');

	item3.parentNode.insertBefore(placeholder, item3);
	item5.parentNode.insertBefore(item3, item5);
	placeholder.parentNode.insertBefore(item5, placeholder);
	placeholder.remove();
}

swapItems();


function () {
	const params = new URLSearchParams(window.location.search);
	let cludo = params.get('cludoquery') || '';

	if (!cludo) {
		const hash = window.location.hash.replace(/^#/, '');
		const hashParams = new URLSearchParams(hash);
		cludo = hashParams.get('cludoquery') || '';
	}

	function sanitizeQuery(raw) {
		if (!raw) return '';
		let s = String(raw).replace(/\+/g, ' ');
		try {
			let prev;
			do {
				prev = s;
				s = decodeURIComponent(s);
			} while (s !== prev);
		} catch (e) { }
		s = s.replace(/%/g, '');
		s = s.replace(/[^\w\s.,\-\'&()]/g, '');
		s = s.replace(/\s+/g, ' ').trim();
		return s;
	}

	cludo = sanitizeQuery(cludo);
	if (!cludo) return false;

	const keywords = ["esim"];
	const value = cludo.toLowerCase();
	return keywords.some(function (k) {
		return value.includes(k.toLowerCase());
	});
}




function hasCludoQueryKeywords() {
	// Try query string first
	const params = new URLSearchParams(window.location.search);
	let cludo = params.get('cludoquery') || '';

	// If not in search, try the hash (e.g. #cludoquery=...)
	if (!cludo) {
		const hash = window.location.hash.replace(/^#/, '');
		const hashParams = new URLSearchParams(hash);
		cludo = hashParams.get('cludoquery') || '';
	}

	// Sanitize input: decode, convert + to spaces, remove stray % and strange characters, normalize whitespace
	function sanitizeQuery(raw) {
		if (!raw) return '';
		// convert + to space (common in form-encoded strings)
		let s = String(raw).replace(/\+/g, ' ');
		// attempt to decode percent-encoding repeatedly until stable
		try {
			let prev;
			do {
				prev = s;
				s = decodeURIComponent(s);
			} while (s !== prev);
		} catch (e) {
			// ignore decode errors and continue with best-effort string
		}
		// remove any leftover percent signs and control characters
		s = s.replace(/%/g, '');
		// allow letters, numbers, whitespace and common punctuation; strip other unusual chars
		s = s.replace(/[^\w\s.,\-\'&()]/g, '');
		// collapse multiple whitespace into single space and trim
		s = s.replace(/\s+/g, ' ').trim();
		return s;
	}

	cludo = sanitizeQuery(cludo);

	if (!cludo) return false;

	const keywords = [
		"esim",
	];

	const value = cludo.toLowerCase();
	return keywords.some(k => value.includes(k.toLowerCase()));
}


<vha-button class="primaryCTA" href="https://www.vodafone.com.au/mobile/esim" label="Find out more" target="_self" type="tertiary" dlkey="dataLayer" dleventname="eventTrack" dlpath="vca/search" dleventdata="{&quot;pageEventName&quot;:&quot;vca/bel&quot;,&quot;pageEventType&quot;:&quot;hero-banner&quot;,&quot;pageEventValue&quot;:&quot;click&quot;,&quot;pageEventAttributeTwo&quot;:&quot;Find out more&quot;}" dldisable="false" dldebug="false" custompageeventtype="hero-banner"><template shadowrootmode="open" shadowrootdelegatesfocus=""><!---->
	<a class="btn" style="background: transparent;color: #fff;" accesskey="" href="https://www.vodafone.com.au/mobile/esim" aria-label="Find out more" target="_self">
		<slot></slot>
	</a>
	<!----></template>
	Find out more
</vha-button>

<div class="cta-container">
    <vha-button class="primaryCTA" href="https://www.vodafone.com.au/support/device/replace-sim?tabs=physical-sim-to-an-esim" label="Switch to eSIM" target="_self"
        type="tertiary" dlkey="dataLayer" dleventname="eventTrack" dlpath="vca/search"
        dleventdata="{&quot;pageEventName&quot;:&quot;vca/bel&quot;,&quot;pageEventType&quot;:&quot;hero-banner&quot;,&quot;pageEventValue&quot;:&quot;click&quot;,&quot;pageEventAttributeTwo&quot;:&quot;Switch to eSIMe&quot;}"
        dldisable="false" dldebug="false" custompageeventtype="hero-banner"><template shadowrootmode="open"
            shadowrootdelegatesfocus="">
            <a class="btn" href="https://www.vodafone.com.au/support/device/replace-sim?tabs=physical-sim-to-an-esim" aria-label="Switch to eSIM" target="_self">
						<slot></slot>
            </a>
        </template>
        Switch to eSIM
    </vha-button>

		<vha-button class="primaryCTA secCTA" href="https://www.vodafone.com.au/support/device/esim" label="Manage your eSIM" target="_self"
        type="tertiary" dlkey="dataLayer" dleventname="eventTrack" dlpath="vca/search"
        dleventdata="{&quot;pageEventName&quot;:&quot;vca/bel&quot;,&quot;pageEventType&quot;:&quot;hero-banner&quot;,&quot;pageEventValue&quot;:&quot;click&quot;,&quot;pageEventAttributeTwo&quot;:&quot;Manage your eSIM&quot;}"
        dldisable="false" dldebug="false" custompageeventtype="hero-banner"><template shadowrootmode="open"
            shadowrootdelegatesfocus="">
            <a class="btn secCTA " style="background: transparent;color: #fff;" href="https://www.vodafone.com.au/support/device/esim" aria-label="Manage your eSIM" target="_self" >
						<slot></slot>
            </a>
					</template>
        Manage your eSIM
    </vha-button>