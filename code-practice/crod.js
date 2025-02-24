if (!croWD) {
	var croWD;
	window.$ ? window.$ : window.$ = window.jQuery;
	(function (exports) {
	  'use strict';
	  function croWDxClient() {}
	  exports.croWDxClient = croWDxClient;
	  var document = window.document;
	  var isLocal = (window.location.host.indexOf('localhost') > -1 && window.location.port === '9999');
	  var loaderNow = new Date().getTime();
	  //window.performance polyfill
	  if ('performance' in window == false) {
		window.performance = {};
	  }
	  Date.now = (Date.now || function () { // thanks IE8
		return new Date().getTime();
	  });
	  if ('now' in window.performance == false) {
		var nowOffset = Date.now();
		if (performance.timing && performance.timing.navigationStart) {
		  nowOffset = performance.timing.navigationStart;
		}
		window.performance.now = function now() {
		  return Date.now() - nowOffset;
		};
	  }
	  croWDxClient.prototype = {
		croWDUtils: {
		  currentScriptSrc: 'https://www.vodafone.com.au/content/crowd/app/agents/',
		  campaignPath: function (aid) {
			var path = '';
			if (croWD.envPath) {
			  croWDxClient.prototype.croWDUtils.currentScriptSrc = croWD.envPath;
			}
			if (aid) {
			  path = croWDxClient.prototype.croWDUtils.currentScriptSrc.replace('/content/crowd/app/utils/loader-client.js', '/');
			} else {
			  path = croWDxClient.prototype.croWDUtils.currentScriptSrc.replace(/\/[CD][\S]*\/loader.js[\S]*/g, '/');
			}
			return path;
		  },
		  getCurrentScriptParameter: function (key) {
			return new URL(croWDxClient.prototype.croWDUtils.currentScriptSrc).searchParams.get(key);
		  },
		  isLocalAssetsExist: function (campaignOpts) {
			var hasLocalIndex = localStorage.getItem('__' + campaignOpts.agentId + '_html') !== null;
			var validTimeStamp = loaderNow <= parseInt(localStorage.getItem('__' + campaignOpts.agentId + '_timestamp'));
			if (hasLocalIndex && validTimeStamp && campaignOpts.saveToLocal) {
			  return true;
			} else {
			  localStorage.removeItem('__' + campaignOpts.agentId + '_html');
			  localStorage.removeItem('__' + campaignOpts.agentId + '_timestamp');
			  return false;
			}
		  },
		  isCampaignLoaded: function (campaignID) {
			return $('.' + campaignID).length > 0;
		  },
		  appendScript: function (location, script, inlineScript, isAsync, aid) {
			isAsync = (isAsync !== undefined ? isAsync : false);
			var js = document.createElement('script');
			js.type = 'text/javascript';
			js.defer = isAsync;
			js.async = isAsync;
			if (script !== null) {
			  js.src = script[1].indexOf('//') > -1 ? script[1] : croWDxClient.prototype.croWDUtils.campaignPath(aid) + aid + '/' + script[1];
			}
			if (inlineScript !== null) {
			  js.appendChild(document.createTextNode(inlineScript[1]));
			}
			location.appendChild(js);
		  },
		  appendStyle: function (location, style, aid) {
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = style.indexOf('//') > -1 ? style : croWDxClient.prototype.croWDUtils.campaignPath(aid) + aid + '/' + style;
			document.querySelector('head').appendChild(link);
		  },
		  filterScriptStyle: function (location, response, aid) {
			var re = /<script\b[\s\S]*?<\/script>/gm;
			var script;
			var htmlText = response;
			while ((script = re.exec(response))) {
			  var srcRe = /src=["|']([\s\S]*?)["|']/gm;
			  var src = srcRe.exec(script);
			  var inlineSrc = /\>([\s\S]+)<\/script>/gm.exec(script);
			  var asyncRe = /async=?(["|']([\s\S]*?)["|'])?/gm;
			  var asy = asyncRe.exec(script);
			  var isAsync = ((asy === null || asy[2] === 'false') ? false : true);
			  croWDxClient.prototype.croWDUtils.appendScript(location, src, inlineSrc, isAsync, aid);
			}
			var reSty = /<link\b[\s\S]*?\>/gm;
			var style;
			while ((style = reSty.exec(response))) {
			  var styRe = /href=["|']([\s\S]*?)["|']/gm;
			  var href = styRe.exec(style);
			  if (href !== null) {
				croWDxClient.prototype.croWDUtils.appendStyle(location, href[1], aid);
			  }
			}
			croWD.cmdr(aid, 'inject');
		  },
		  tidyCode: function (location, response, aid) {
			var re = /<script\b[\s\S]*?<\/script>/gm;
			var script;
			var htmlText = response;
			while ((script = re.exec(response))) {
			  if (script[0].indexOf('://') < 0) {
				htmlText = htmlText.replace(script[0], ''); //remove <script> from response string
			  }
			}
			var reSty = /<link\b[\s\S]*?\>/gm;
			var style;
			while ((style = reSty.exec(response))) {
			  if (style[0].indexOf('://') < 0) {
				htmlText = htmlText.replace(style[0], ''); //remove <style> from response string
			  }
			}
			return htmlText;
		  },
		  createCRODiv: function (sid, aid, insertType, response, t0) {
			var selector = document.querySelector(sid);
			var CROWDDiv = document.createElement('div');
			CROWDDiv.className = aid + ' CROWDDiv observeCROWDDiv';
			if (response !== null) {
			  if (!selector) {
				console.error('%ccaution: Selector ' + sid + ' is NOT found', 'color: #ff3d3d; font-style: italic; background-color: #ffefef; padding: 2px');
				// return false;
			  }
			  CROWDDiv.innerHTML = croWDxClient.prototype.croWDUtils.tidyCode(selector, response, aid);
			  switch (insertType) {
				case 'replace':
				  selector.innerHTML = CROWDDiv.outerHTML;
				  break;
				case 'before':
				  selector.insertAdjacentHTML('beforebegin', CROWDDiv.outerHTML);
				  break;
				case 'prepend':
				  selector.insertBefore(CROWDDiv, selector.firstChild);
				  break;
				case 'after':
				  selector.insertAdjacentHTML('afterend', CROWDDiv.outerHTML);
				  break;
				default:
				  //case 'append'
				  selector.appendChild(CROWDDiv);
				  break;
			  }
			  //add script to DOM after html injected
			  croWDxClient.prototype.croWDUtils.filterScriptStyle(selector, response, aid);
			  if (window.performance) {
				var t1 = window.performance.now(); // Loader work has done
				var loaderWorkingTime = parseInt(t1 - t0);
				var memory = window.performance.memory;
				var memoryUsage = 0;
				if (navigator.appName.indexOf('Internet Explorer') > -1 || navigator.appName.indexOf('Netscape') > -1) {
				  memoryUsage = 0;
				} else {
				  memoryUsage = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
				}
				var perfData = window.performance.timing;
				var connectTime = (perfData.responseEnd - perfData.requestStart);
				var pageLoadTime = (perfData.loadEventEnd - perfData.navigationStart);
				var renderTime = (perfData.domComplete - perfData.domLoading);
				croWD.performance[aid] = {
				  'connectTime': connectTime + 'ms',
				  'loadingTime': pageLoadTime + 'ms',
				  'renderTime': renderTime + 'ms',
				  'loaderWorkingTime': loaderWorkingTime + 'ms',
				  'memoryUsage': memoryUsage.toFixed(2) + '%'
				};
				var eventStatus = 'Normal';
				if ((connectTime > 1000 && connectTime < 3000) || (loaderWorkingTime > 2000 && loaderWorkingTime < 5000) || (memoryUsage > 10 && memoryUsage < 30)) {
				  eventStatus = 'Slow';
				} else if ((connectTime >= 3000) || (loaderWorkingTime >= 5000) || (memoryUsage >= 30)) {
				  eventStatus = 'Error';
				}
			  }
			} else {
			  console.error('%calert: Fetched ' + aid + ' State: ' + response.status + ' ' + url + ' return NULL', 'color: #ff3d3d; font-style: italic; background-color: #ffefef; padding: 2px');
			}
		  },
		  getRandomID: function(len, char){
			var length = len ? len: 4;
			var chars = char ? char : 'Aa#';
			var mask= '';
			if (chars.indexOf('a') > -1) {mask += 'abcdefghijklmnopqrstuvwxyz';}
			if (chars.indexOf('A') > -1) {mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';}
			if (chars.indexOf('#') > -1) {mask += '0123456789';}
			if (chars.indexOf('!') > -1) {mask += '~!@#$%^&*()_+-={}[]:;<>?,./|\\';}
  
			var result = '';
			for (var i = length; i > 0; --i) {
			  result += mask[Math.round(Math.random() * (mask.length - 1))];
			}
			return result.match(new RegExp('.{1,4}', 'g')).join("-");
		  },
		  launchTracking: function (track_name, track_value, variant_type, track_optional) { 
			//if (window.location.hostname.indexOf('vodafone.com.au') >= 0) {
			  try {
				if (typeof window.aepData !== 'undefined') {
				  var vType = variant_type ? variant_type : 'variant';
				  dataLayer.push({
					  'event': 'optimizely_event',
					  'optimizely_experiment': track_name,
					  'optimizely_variant': vType,
					  'page_referrer': document.referrer, //optional
					  'page_location': document.location.href, //optional
					  'link_text': track_name + '-' + track_value,
					  'link_url': track_optional
				  });
				}
			  } catch (e) {
				croWD.debug('launch tracking failed!' , e);
			  }
			//}
		   //else if (window.location.hostname.indexOf('tpg.com.au') >= 0) {
			  // TODO: check with Data Chapter what need here for TPG GA          
		   //}
		  },
		  foundElements: [],
		  getEleFromPage: function(selector, target, init){
			if(init){
			  /*
			  first time to find target elements from selector ensure arg init as 1;
			  otherwise, it will be treated as iteration loop to find child nodes by
			  adding found elements to global "foundElements" object
			  var foo= croWD.utils.getEleFromPage(document.getElementsByTagName('vha-section')[1], 'vha-rte', 1);
			  var bar = croWD.utils.getEleFromPage(document.getElementsByTagName('vha-section')[0], '.label', 1);
			  */
			  croWD.utils.foundElements = [];
			}
			var elArr = [];
			selector.childNodes.forEach(function(el){elArr.push(el)});
			if(selector.renderRoot){
			  selector.shadowRoot.childNodes.forEach(function(el){elArr.push(el)});
			}
			elArr.forEach(function(el){
			  if(el.nodeName != '#text' && el.nodeName != '#comment'){
				if(el.querySelectorAll(target).length){
		  //        console.log('found!');
		  //        console.log(el.querySelectorAll(target).length);
				  croWD.utils.foundElements.push(Array.from(el.querySelectorAll(target)));
  //                 croWD.utils.foundElements = croWD.utils.foundElements.flat();
				  
				}
				else if(el.renderRoot){
		  //        console.log('found in root!', elArr, selector, el);
				  if(el.shadowRoot.querySelectorAll(target).length){
					croWD.utils.foundElements.push(Array.from(el.shadowRoot.querySelectorAll(target)));
  //                   croWD.utils.foundElements = croWD.utils.foundElements.flat();
					//console.log('foundElements:', croWD.utils.foundElements);
					//return croWD.utils.foundElements;
				  }
				  else{
		  //          console.log('not found!', elArr, selector, el)
					croWD.utils.getEleFromPage(el, target)
				  }
				}
				else{
		  //        console.log('not found!', elArr, selector, el)
				  croWD.utils.getEleFromPage(el, target)
				}
			  }
			});
			return croWD.utils.foundElements = croWD.utils.foundElements.flat();
		  },
		  getReactFiber: function(node) {
			for (var key in node) {
				if (key.startsWith('__reactFiber$')) {
					return node[key];
				}
			}
			return null;
		  },
		  elementInViewport: function (scrollElement) {
			var elementTop = scrollElement.offset().top;
			var elementBottom = elementTop + scrollElement.outerHeight();
			var viewportTop = $(window).scrollTop();
			var viewportBottom = viewportTop + $(window).height();
			return elementBottom > viewportTop && elementTop < viewportBottom;
		  },
		  getUrlParameter: function (sParam) {
			var sPageURL = decodeURIComponent(window.location.search.substring(1)),
			  sURLVariables = sPageURL.split('&'),
			  sParameterName,
			  i;
			for (i = 0; i < sURLVariables.length; i++) {
			  sParameterName = sURLVariables[i].split('=');
			  if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			  }
			}
		  },
		  vars: {
			t_loader: null,
			t_jailbreak: null,
			t_version: null
		  },
		  getCookieByName: function (key) {
			var value = '; ' + document.cookie;
			var parts = value.split('; ' + key + '=');
			if (parts.length == 2) {
			  return parts.pop().split(';').shift();
			}
		  },
		  deleteCookieByName: function (name) {
			document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";
		  },
		  createCookie: function (cookieName, cookieValue, expiredays){
			var expirationDate = new Date();
			expirationDate.setTime(expirationDate.getTime() + (expiredays * 24 * 60 * 60 * 1000));
			document.cookie = cookieName + '=' + cookieValue.toString() + ';expires = ' + expirationDate.toUTCString() + '; path =/; domain='+ window.location.hostname.replace('www.','') + ';';
		  },
		  buildCSS: function (style) {
			var style = document.createElement('style');
			style.textContent = style;
			document.body.appendChild(style);
		  },
		  getMatches: function(string, regex, index) {
			index || (index = 1);
			var matches = [];
			var match;
			while (match = regex.exec(string)) {
				matches.push(decodeURIComponent(match[index]));
			}
			return matches;
		  },
		  // crypt: function (text) {
		  //   var textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
		  //   var byteHex = (n) => ('0' + Number(n).toString(16)).substr(-2);
		  //   var secretCoating = (code) => textToChars(croWDxClient.prototype.croWDUtils.secretKey).reduce((a, b) => a ^ b, code);
		  //   return text
		  //     .split('')
		  //     .map(textToChars)
		  //     .map(secretCoating)
		  //     .map(byteHex)
		  //     .join('');
		  // },
		  // decrypt: function (encoded) {
		  //   var textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
		  //   var secretCoating = (code) => textToChars(croWDxClient.prototype.croWDUtils.secretKey).reduce((a, b) => a ^ b, code);
		  //   return encoded
		  //     .match(/.{1,2}/g)
		  //     .map((hex) => parseInt(hex, 16))
		  //     .map(secretCoating)
		  //     .map((charCode) => String.fromCharCode(charCode))
		  //     .join('');
		  // },
		  fetchData: function(url, doneCB){
			var url = url;
			$.ajax({url:url, dataType: 'json'}).then(doneCB, croWD.croWDUtils.failCallback);
		  },
		  failCallback: function(xhr, error){
			croWD.debug('Failed!', xhr, error);
		  },
		},
		storage: {},
		msgr: {},
		log: [],
		profile: {},
		getProfile: function() {
		  croWD.profile = {
			'userClass': 'anonymous',
			'brand': window.location.hostname,
			'profileClarity': 0,
			'demographicAttrs': {
			  // TODO: waits for authCheck API to complete
			  'loginStatus': sessionStorage.getItem('vhaIsLoggedIn') || croWD.utils.getCookieByName('vfe.is.authenticated') || 'false',
			  'firstname': '',
			  'lastname': '',
			  'postcode': '',
			  'suburb': '',
			  'region': '',
			  'email': '',
			  'services': [] 
		  },
		  'footprintAttrs': {
			  'activiatedMSISDN': sessionStorage.getItem('com.adobe.reactor.dataElements.response.msisdn') || sessionStorage.getItem('com.adobe.reactor.dataElements.response.activeMsisdn'),
			  'lastAddressStatusMapping': JSON.parse(localStorage.getItem('addressStatusMapping')) || '',
			  'lastCustomerid': croWD.utils.getCookieByName('v_customerid') || '',
			  'lastMaskedMsisdn': sessionStorage.getItem('vhaMaskedMsisdn') || '',
			  'searchedWords': JSON.parse(localStorage.getItem('searchedWords')), // last 5 searching history
			  'lastQuitURL': localStorage.getItem('lastQuitURL')
		  },
		  'behaviourAttrs': {
			  //'interactions': aepData,
			  'viewedProducts': JSON.parse(localStorage.getItem('viewedProducts')),
			  'abandonedCart': JSON.parse(localStorage.getItem('vhaAbandonedCart')),
			  'cartExpiry': localStorage.getItem('vhaCartExpiry'),
			  'totalBundles': localStorage.getItem('vhaTotalBundles'),
			  'serviceType': localStorage.getItem('serviceType')
		  },
		  'trendAttrs': {
			  'landedURL': sessionStorage.getItem('com.adobe.reactor.core.visitorTracking.landingPage'),
			  'bestOffer': {} // TODO:call RTDM
		  }};
  
		  //todo: defined below for TPG
		  if(croWD.environment.indexOf('tpg')){
			croWD.profile.demographicAttrs.loginStatus = '';
			croWD.profile.footprintAttrs.activiatedMSISDN = '';
			croWD.profile.footprintAttrs.lastAddressStatusMapping = '';
			croWD.profile.footprintAttrs.lastCustomerid = '';
			croWD.profile.footprintAttrs.lastMaskedMsisdn = '';
			croWD.profile.footprintAttrs.searchedWords = '';
			croWD.profile.footprintAttrs.lastQuitURL = '';
			croWD.profile.behaviourAttrs.viewedProducts = '';
			croWD.profile.behaviourAttrs.abandonedCart = '';
			croWD.profile.behaviourAttrs.cartExpiry = '';
			croWD.profile.behaviourAttrs.totalBundles = '';
			croWD.profile.behaviourAttrs.serviceType = '';
			croWD.profile.trendAttrs.landedURL = '';
		  }
		   
		  //define user class & calculate profile clarity
		  if (croWD.profile.footprintAttrs.activiatedMSISDN != null) {
			croWD.profile.userClass = 'authenticated';
			croWD.profile.profileClarity += 50;
		  } else if (croWD.profile.demographicAttrs.loginStatus == 'true') {
			croWD.profile.userClass = 'identified';
			croWD.profile.profileClarity += 30;
		  } else if (croWD.profile.demographicAttrs.firstname == '' && (croWD.profile.behaviourAttrs.viewedProducts != null || croWD.profile.footprintAttrs.searchedWords.length > 0)) {
			croWD.profile.userClass = 'returning';
			croWD.profile.profileClarity += 10;
		  };
		  // calculate profile clarity
		  var clarityIncreament = 0;
		  Object.keys(croWD.profile).forEach(function (key) {
			// adjust increment base on info type
			switch (key) {
				case 'demographicAttrs':
					clarityIncreament = 2;
					break;
				case 'footprintAttrs':
					clarityIncreament = 1;
					break;
				case 'behaviourAttrs':
					clarityIncreament = 1;
					break;
				case 'trendAttrs':
					clarityIncreament = 1;
					break;
				default:
					break;
			}
			Object.keys(croWD.profile[key]).forEach(function (attr) {
				if (croWD.profile[key][attr] && croWD.profile.profileClarity <= 100) {
					croWD.profile.profileClarity += clarityIncreament;
					// max clarity is 100
					if (croWD.profile.profileClarity > 100) {
						croWD.profile.profileClarity = 100;
						return false;
					};
				};
			});
		  });
		},
		captureAttrs: function(){
		  localStorage.setItem('lastQuitURL', document.location.href); //set lastQuitURL
		  
		  //set searchedWords
		  var _searchedWords = JSON.parse(localStorage.getItem('searchedWords')) || [];
			if (document.location.href.includes('search#?')) {
				var urlHash = document.location.hash;
				var urlRegEx = new RegExp('=([^\&\=]*)&?', 'g');
				var searchAtts = croWDxClient.prototype.croWDUtils.getMatches(urlHash, urlRegEx);
				_searchedWords.push({
					'searchedKey': searchAtts[0],
					'searchedFrom': searchAtts[2]
				})
				if (_searchedWords.length > 5) {
				  _searchedWords.shift(); // last 5 searching history 
				}
				localStorage.setItem('searchedWords', JSON.stringify(_searchedWords));
			};
  
		  croWD.getProfile();
		},
		addToQ: function (fn) {
		  if (croWD.intervalQ.length <= 20) {
			croWD.intervalQ.push(fn);
		  } else {
			croWD.debug('Max 20 functions allowed in interval queue!');
		  }
		},
		removeFromQ: function (fn) {
		  try {
			croWD.intervalQ.splice(croWD.intervalQ.indexOf(fn), 1);
		  } catch (e) {
			croWD.debug('Fn not found or unable to remove. ' + e);
		  }
		},
		intervalQ: [],
		uniInterval: setInterval(function () {
		  croWD.intervalQ.forEach(function (fn) {
			try {
			  fn();
			} catch (e) {
			  croWD.debug('Issue found in intervalQ! ', e);
			}
		  });
		}, 500),
		setDebugger: function (value) {
		  croWD.utils.createCookie('croDebugger', value, 1000);
		  croWD.debug('croDebugger 🍪 is ' + value + '!');
		},
		isDebuggerMode: function () {
		  return this.croWDUtils.getCookieByName('croDebugger') == 'true';
		},
		debug: function (args) {
		  if (croWD.isDebuggerMode()) {
			console.log('%c🗿debugger »', 'color: #f9a34e; padding: 2px 0px;', ...arguments);
		  }
		},
		isObserving: false,
		mutationObserver: new MutationObserver(function (mutations) {
		  var mutation = mutations[mutations.length - 1];
		  if (!$(mutation.target).parents().hasClass('observeCROWDDiv') && !$(mutation.target).hasClass('observeCROWDDiv') && mutation.target.tagName !== 'BODY' && mutation.target.tagName !== 'HTML') {
			$(mutation.target).addClass('observeCROWDDiv');
		  }
		}),
		performance: {},
		
		cmdr: function (ele, eventType) {
		  var dt = new Date();
		  switch (eventType) {
			case 'click':
			  croWD.log.push({
				'Event': ele + ' has been clicked.',
				'timeStamp': dt
			  });
			  break;
			case 'stop':
			  croWD.log.push({
				'Event': ele + ' has been stopped from MSGR.',
				'timeStamp': dt
			  });
			  break;
			case 'rollback':
			  croWD.log.push({
				'Event': ele + ' has been rollbacked from MSGR.',
				'timeStamp': dt
			  });
			  break;
			case 'exists':
			  croWD.log.push({
				'Event': ele + ' exists, no need to load it again.',
				'timeStamp': dt
			  });
			  break;
			default:
			  // inject as default
			  croWD.log.push({
				'Event': ele + ' has been initialized.',
				'timeStamp': dt
			  });
			  break;
		  }
		},
		croWDloaderClient: {
		  fireObserver: function () {
			croWDxClient.prototype.isObserving = true;
			croWDxClient.prototype.mutationObserver.observe(document.documentElement, {
			  attributes: true,
			  characterData: true,
			  childList: true,
			  subtree: true,
			  attributeOldValue: true,
			  characterDataOldValue: true
			});
		  },
		  init: function (campaignOpts) {
			try {
			  if (!croWDxClient.prototype.isObserving && MutationObserver) {
				croWDxClient.prototype.croWDloaderClient.fireObserver();
			  }
			} catch (e) {
			  console.warn('MutationObserver is NOT supported with browser!');
			}
			if (campaignOpts.dependencies && campaignOpts.dependencies !== "" ) {
			  campaignOpts.dependencies.forEach(function (item, index, arr) {
				if (!croWDxClient.prototype.croWDUtils.isCampaignLoaded(item)) {
				  //load campaign
				  croWD.croWDloaderClient.loading({
					agentId: item,
					selector: 'body',
					injectType: 'prepend',
					description: item
				  });
				} else {
				  croWD.cmdr(item, 'exists');
				}
			  });
			}
			// check if any msg for this campaign
			if (croWDxClient.prototype.msgr[campaignOpts.agentId]) {
			  var actions = croWDxClient.prototype.msgr[campaignOpts.agentId].join('|').toLowerCase().split('|'); //lowercase
			  if (actions.includes('stop')) {
				// add to croWD.log
				croWD.cmdr(campaignOpts.agentId, 'stop');
				// if STOP found in messager
				console.group('Stopping ' + campaignOpts.agentId + ' :');
				console.log('%cwarning: Campaign has been stopped from action as per MSGR', 'color: #f6a11a; font-style: italic; background-color: #f4fff7; padding: 2px');
				console.log('ID: ' + campaignOpts.agentId);
				console.log('Selector: ' + campaignOpts.selector);
				console.log('Insert: ' + campaignOpts.injectType);
				console.log('Type: ' + campaignOpts.campaignType);
				console.log('Description: ' + campaignOpts.description);
				console.groupEnd();
				//stop right here
				return;
			  } else if (actions.includes('delay')) {
				// if delay found in messenger
				console.group('Delaying ' + campaignOpts.agentId + ' :');
				console.log('%cwarning: Campaign has been delayed from action as per MSGR', 'color: #f6a11a; font-style: italic; background-color: #f4fff7; padding: 2px');
				console.log('ID: ' + campaignOpts.agentId);
				console.log('Selector: ' + campaignOpts.selector);
				console.log('Insert: ' + campaignOpts.injectType);
				console.log('Type: ' + campaignOpts.campaignType);
				console.log('Description: ' + campaignOpts.description);
				console.groupEnd();
				//delay
				//TODO: for now delay only apply fixed 2 seconds
				setTimout(function () {
				  croWD.croWDloaderClient.loading(campaignOpts);
				}, 2000);
			  }
			} else {
			  croWD.croWDloaderClient.loading(campaignOpts);
			}
		  },
		  loading: function (campaignOpts) {
			if (!croWDxClient.prototype.croWDUtils.isCampaignLoaded(campaignOpts.agentId)) {
			  // add setInterval here
			  campaignOpts.max = 10;
			  campaignOpts.timer = setInterval(function () {
				//set defaults
				if (!campaignOpts.selector) {
				  campaignOpts.selector = 'body';
				}
				if (!campaignOpts.injectType) {
				  campaignOpts.injectType = 'append';
				}
				if (!campaignOpts.campaignType) {
				  campaignOpts.campaignType = 'live';
				}
				if (!campaignOpts.description) {
				  campaignOpts.description = 'Campaign ' + campaignOpts.agentId + ', please go to https://www.vodafone.com.au/content/crowd/app/agents/' + campaignOpts.agentId + '/via.js for more details.';
				}
				var el = document.querySelector(campaignOpts.selector);
				if (el) {
				  clearInterval(campaignOpts.timer);
				  campaignOpts.timer = null;
				  croWDxClient.prototype.storage[campaignOpts.agentId] = campaignOpts;
				  if (campaignOpts.message) {
					try {
					  // check if receiver has been loaded
					  if (croWDxClient.prototype.croWDUtils.isCampaignLoaded(campaignOpts.message.receiver) && campaignOpts.message.actions.includes('stop')) {
						$('.' + campaignOpts.message.receiver).remove();
						croWD.cmdr(aid, 'rollback');
					  }
					  // if msgr has existing receiver, add action to array
					  croWDxClient.prototype.msgr[campaignOpts.message.receiver] = croWDxClient.prototype.msgr[campaignOpts.message.receiver].concat(campaignOpts.message.actions);
					} catch (e) {
					  // else create a new object
					  croWDxClient.prototype.msgr[campaignOpts.message.receiver] = campaignOpts.message.actions;
					}
				  }
				  var t0 = window.performance.now(); // Loader initialized time stamp
				  var aid = campaignOpts.agentId;
				  var sid = campaignOpts.selector;
				  var insertType = campaignOpts.injectType;
				  var campaignType = campaignOpts.campaignType;
				  var description = campaignOpts.description;
				  window.location.href.replace(location.hash, '').replace(/[?&]+([^=&]+)=?([^&]*)?/gi,
					function (m, key, value) { // callback
					  croWDxClient.prototype.croWDUtils.vars[key] = value !== undefined ? value : '';
					});
				  var pg = 'local';
				  try {
					if (window.aepData) {
					  pg = window.aepData[0].response.path;
					}
				  } catch (e) {}
				  
				  if (croWDxClient.prototype.croWDUtils.vars.t_version) {
					aid = aid + '-' + croWDxClient.prototype.croWDUtils.vars['t_version'];
				  }
				  var url = croWDxClient.prototype.croWDUtils.campaignPath(aid) + aid + '/index.html';
				  //if no excludeDomain defined, use default
				  if (!campaignOpts.excludeDomain) {
					//↓↓↓↓↓ TO REVIEW - tweak POST MVP ↓↓↓↓↓
					campaignOpts.excludeDomain = [ // by default, not load campaign to any QA env for F&B
					  'localhost',
					  'test.cms.df.services.vodafone.com.au'
					];
				  }
				  campaignOpts.excludeDomain.forEach(function (ele, ind, arr) {
					if (window.location.host.indexOf(ele) > -1) {
					  console.warn('%calert: Blocked domain ' + ele + ' ! Loading paused for ' + aid + ' from ' + url, 'color: #ff3d3d; font-style: italic; background-color: #ffefef; padding: 2px');
					  return false; //blocked
					}
				  });
				  if (croWDxClient.prototype.croWDUtils.vars.t_loader === '0' || croWDxClient.prototype.croWDUtils.vars.t_loader === 'false') {
					if (croWDxClient.prototype.croWDUtils.vars.t_campaign) {
					  aid = croWDxClient.prototype.croWDUtils.vars.t_campaign;
					  url = croWDxClient.prototype.croWDUtils.campaignPath(aid) + aid + '/index.html';
					  console.warn('%calert: Loading campaign overridden by ' + aid + ' from ' + url, 'color: #00ff00; font-style: italic; background-color: #ffefef; padding: 2px');
					} else {
					  console.warn('%calert: Loading paused for ' + aid + ' from ' + url, 'color: #ff3d3d; font-style: italic; background-color: #ffefef; padding: 2px');
					  return false; //blocked
					}
				  }
				  if ((campaignType === 'demo' || campaignType === 'stopped') && croWDxClient.prototype.croWDUtils.vars.t_jailbreak !== '1') {
					return false; //blocked
				  }
				  if (croWDxClient.prototype.croWDUtils.isLocalAssetsExist(campaignOpts)) {
					var response = localStorage.getItem('__' + campaignOpts.agentId + '_html');
					croWDxClient.prototype.croWDUtils.createCRODiv(sid, aid, insertType, response, t0);
				  } else {
					$.ajax({
						method: 'GET',
						url: url,
					  })
					  .fail(function (jqXHR, textStatus) {
						console.error('%calert: Fetching ' + aid + ' State: ' + textStatus + ' from ' + url, 'color: #ff3d3d; font-style: italic; background-color: #ffefef; padding: 2px');
					  })
					  .done(function (response) {
						//save campaign index html to local storage with time stamp
						//if campaignOpts.saveToLocal variables not defined, use defaults
						if (!campaignOpts.saveToLocal) {
						  campaignOpts.saveToLocal = false;
						}
						if (!campaignOpts.expireDate) {
						  campaignOpts.expireDate = '';
						}
						if (!campaignOpts.lifeCycle) {
						  campaignOpts.lifeCycle = 0 * 24 * 60 * 60 * 1000;
						}
						if (window.localStorage && campaignOpts.saveToLocal) {
						  localStorage.setItem('__' + campaignOpts.agentId + '_html', response);
						  if (campaignOpts.expireDate !== '') {
							localStorage.setItem('__' + campaignOpts.agentId + '_timestamp', new Date(campaignOpts.expireDate).getTime());
						  } else {
							localStorage.setItem('__' + campaignOpts.agentId + '_timestamp', loaderNow + campaignOpts.lifeCycle);
						  }
						}
						croWDxClient.prototype.croWDUtils.createCRODiv(sid, aid, insertType, response, t0);
					  });
				  }
				} else {
				  campaignOpts.max--;
				  console.error('%ccaution: We are finding' + el + ' ...', 'color: #ff3d3d; font-style: italic; background-color: #ffefef; padding: 2px;');
				}
				if (campaignOpts.max === 0) {
				  clearInterval(campaignOpts.timer);
				  campaignOpts.timer = null;
				}
			  }, 1000);
			} else {
			  croWD.cmdr(campaignOpts.agentId, 'exists');
			}
		  }
		}
	  };
	  croWD = croWDxClient.prototype;
	  croWD.envPath = null;
	  croWD.client = croWD.croWDloaderClient;
	  croWD.utils = croWD.croWDUtils;
	  croWD.environment = 'VCA';
	  if (window.location.hostname.includes('myaccount.myvodafone.com.au')) {
		croWD.environment = 'myVF';
	  }
	  else if (window.location.hostname.includes('tpg.com.au')) {
		croWD.environment = 'tpg';
	  }
	  else if (window.location.hostname.includes('iinet.com.au')) {
		croWD.environment = 'iinet';
	  }
	  else if (window.location.hostname.includes('localhost')) {
		croWD.environment = 'local';
	  }
  
  
	  try{
		croWD.captureAttrs();
	  }catch(e){
		croWD.debug('profiling failed!' , e);
	  }
	  
	  (croWD.croObserver = function () {}).prototype = {
		listen: function (type, method, scope, context) {
		  var listeners, handlers;
		  if (!(listeners = this.listeners)) {
			listeners = this.listeners = {};
		  }
		  if (!(handlers = listeners[type])) {
			handlers = listeners[type] = [];
		  }
		  scope = (scope ? scope : window);
		  handlers.push({
			method: method,
			scope: scope,
			context: (context ? context : scope)
		  });
		},
		fire: function (type, data, context) {
		  var listeners, handlers, i, n, handler, scope;
		  if (!(listeners = this.listeners)) {
			return;
		  }
		  if (!(handlers = listeners[type])) {
			return;
		  }
		  for (i = 0, n = handlers.length; i < n; i++) {
			handler = handlers[i];
			if (typeof (context) !== 'undefined' && context !== handler.context) continue;
			if (handler.method.call(
				handler.scope, this, type, data
			  ) === false) {
			  return false;
			}
		  }
		  return true;
		}
	  };
	  croWD.hotbed = new croWD.croObserver();
	  //add to log
	  $(document).on('click touchend', '.observeCROWDDiv a, .observeCROWDDiv img, .observeCROWDDiv .btn', function () {
		var pathArr = [];
		var ele = '';
		var eleIndex = $(this).index(); // return node index, not base on classname or tag
		if ($(this).attr('id')) {
		  pathArr.unshift('#' + $(this).attr('id'));
		} else if ($(this).attr('class')) {
		  pathArr.unshift('.' + $(this).attr('class').replace(/\s/g, '.') + '(' + eleIndex + ')');
		} else {
		  pathArr.unshift('[' + $(this).prop('tagName') + '](' + eleIndex + ')');
		}
		var pathMax = 3;
		pathArr = getParentElementPath($(this), pathArr, pathMax);
		ele = pathArr.join(' -> ');
		croWD.cmdr(ele, 'click');
	  });
	  var getParentElementPath = function (el, arr, max) {
		if (max <= 0 || !el.parent()) {
		  return arr;
		}
		var name = '';
		var xarr = [];
		var eleIndex = el.parent().index(); // return node index, not base on classname or tag
		if (el.parent().attr('id')) {
		  arr.unshift('#' + el.parent().attr('id'));
		} else if (el.parent().attr('class')) {
		  arr.unshift('.' + el.parent().attr('class').replace(/\s/g, '.') + '(' + eleIndex + ')');
		} else {
		  arr.unshift('[' + el.parent().prop('tagName') + '](' + eleIndex + ')');
		}
		if (max > 0) {
		  return getParentElementPath(el.parent(), arr, max - 1);
		} else {
		  return arr;
		}
	  };
	  Object.size = function (obj) {
		var size = 0,
		  key;
		for (key in obj) {
		  if (obj.hasOwnProperty(key)) size++;
		}
		return size;
	  };
	}(this));
  }