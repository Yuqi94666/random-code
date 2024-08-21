function performSearch(query) {
	const searchUrl = `https://www.tpg.com.au/api/sq?addr=${encodeURIComponent(
	  query
	)}`;
  
	fetch(searchUrl)
	  .then((response) => {
		console.log("Response status:", response.status);
		if (!response.ok) {
		  throw new Error("Network response was not ok " + response.statusText);
		}
		return response.json();
	  })
	  .then((data) => {
		console.log("Search Results:", data);
		handleSearchResponse(data);
	  })
	  .catch((error) => {
		console.error("Error:", error);
	  });
  }
  
  function handleSearchResponse(data) {
	if (
	  data.formed_fulladdress.includes("Alternatively") &&
	  data.formed_fulladdress.includes("Fibre to the Building")
	) {
	  displayToaster();
	} else {
	  console.log("fttb service not available:", data.Services);
	  removeToaster();
	}
  }
  
  function displayToaster() {
	  var desktopToasterBar = document.querySelector(".desktop-toaster-bar");
	  var mobileToasterBar = document.querySelector(".mobile-toaster-bar");
	  var desktopToaster = document.getElementById("desktop-toaster");
	  var mobileToaster = document.getElementById("mobile-toaster");
	  var closeBtnDesktop = document.getElementById("closeBtnDesktop");
	  var closeBtnMobile = document.getElementById("closeBtnMobile");
	  var arrowIconDesktop = document.getElementById("toasterIconDesktop");
	  var arrowIconMobile = document.getElementById("toasterIconMobile");
	  var viewPlans = document.getElementById("viewFttbPlans");
		var viewPlansMobile = document.getElementById("viewFttbPlansMobile");
	  
	  
	  desktopToasterBar.style.display = "block";
	  mobileToasterBar.style.display = "block";
	
	  closeBtnDesktop.addEventListener("click", function() {
			desktopToaster.style.display = "none";
			desktopToasterBar.style.display = "block";
			closeToasterTracking();
	  });
	  
	  arrowIconDesktop.addEventListener("click", function() {
			desktopToaster.style.display = "block";
			desktopToasterBar.style.display = "none";
				exploreToasterTracking();
		});
	  
	  
	  closeBtnMobile.addEventListener("click", function() {
			mobileToaster.style.display = "none";
			mobileToasterBar.style.display = "block";
				closeToasterTracking();
		});
	  
	  arrowIconMobile.addEventListener("click", function() {
				mobileToasterBar.style.display = "none";
				mobileToaster.style.display = "block";
						exploreToasterTracking();
		});
	
			viewPlans.addEventListener("click", function() {
						viewPlansTracking();
		});
	 viewPlansMobile.addEventListener("click", function() {
						viewPlansTracking();
		});
	
	addChangeAddressListener();
	}
  
  function removeToaster(){
	var desktopToasterBar = document.querySelector(".desktop-toaster-bar");
	var mobileToasterBar = document.querySelector(".mobile-toaster-bar");
	var desktopToaster = document.getElementById("desktop-toaster");
	var mobileToaster = document.getElementById("mobile-toaster");
	
	if (desktopToasterBar) desktopToasterBar.style.display = "none";
	if (mobileToasterBar) mobileToasterBar.style.display = "none";
	if (desktopToaster) desktopToaster.style.display = "none";
	if (mobileToaster) mobileToaster.style.display = "none";
  }
  
  
  function addChangeAddressListener() {
	var dynamicContainer = document.getElementById("dynamicSQResultContainer");
	if (!dynamicContainer) return;
  
	var changeAddressLink = Array.from(dynamicContainer.getElementsByTagName("a")).find(link => link.textContent.trim() === "Change address");
  
	if (changeAddressLink) {
	  changeAddressLink.addEventListener("click", function(event) {
		event.preventDefault();
		removeToaster(); 
	  });
	}
  }
  
  function closeToasterTracking(){
	dataLayer.push({
			  event: "GAevent",
			  optimizely_experiment: "DCP-12974 TPG VISION TOASTER",
			  optimizely_variant: "Variation#1",
			  page_referrer: document.referrer,
			  page_location: document.location.href,
					  eventValue: {
				action: "Toaster-Closed",
				category: "Toaster - FTTB",
				label: "Toaster-popup-closed"
			  }
			  });
				console.log("GA4 Custom Event - vision toaster close");
  }
  
  function exploreToasterTracking(){
	dataLayer.push({
			  event: "GAevent",
			  optimizely_experiment: "DCP-12974 TPG VISION TOASTER",
			  optimizely_variant: "Variation#1",
			  page_referrer: document.referrer,
			  page_location: document.location.href,
					  eventValue: {
				action: "Toaster-Expand",
				category: "Toaster - FTTB",
				label: "Toaster-popup-expand"
			  }
			  });
				console.log("GA4 Custom Event - vision toaster explore");
  }
  
  function viewPlansTracking(){
	dataLayer.push({
			  event: "GAevent",
			  optimizely_experiment: "DCP-12974 TPG VISION TOASTER",
			  optimizely_variant: "Variation#1",
			  page_referrer: document.referrer,
			  page_location: document.location.href,
					  eventValue: {
				action: "Toaster-button click",
				category: "Toaster - FTTB",
				label: "Toaster-Explore fibre plans"
					  }		 
			  });
				console.log("GA4 Custom Event - vision toaster view plans");
  }
  
  function observeDOMChanges() {
	const observer = new MutationObserver((mutations) => {
	  mutations.forEach((mutation) => {
		if (mutation.addedNodes.length) {
		  mutation.addedNodes.forEach((node) => {
			if (
			  node.nodeType === 1 &&
			  node.classList.contains("sq-result-title")
			) {
			  performSearch(node.textContent.trim());
			}
		  });
		}
	  });
	});
  
	observer.observe(document.body, {
	  childList: true,
	  subtree: true,
	});
  
	console.log("MutationObserver has been set up");
  }
  
  document.addEventListener("DOMContentLoaded", (event) => {
	document.body.style.overflow = "auto";
	observeDOMChanges();
  });
	