// document.addEventListener("DOMContentLoaded", function () {
//   const initiated = localStorage.getItem("checkout_initiated");
//   if (initiated === "1") {
//     alert("Welcome back! You previously started checkout.");
//     localStorage.removeItem("checkout_initiated");
//   } else {
//     const button = document.querySelector("mat-button-wrapper");
//     if (button) {
//       button.addEventListener("click", function () {
//         console.log("Buy Now button clicked");
//         localStorage.setItem("checkout_initiated", "1");
//       });
//     } else {
//       console.warn("Buy Now button not found.");
//     }
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const initiated = localStorage.getItem("checkout_initiated");
//   if (initiated === "1") {
//     alert("Welcome back! You previously started checkout.");
//     localStorage.removeItem("checkout_initiated");
//   } else {
//     document.body.addEventListener("click", function (e) {
//       const button = e.target.closest("button.mat-flat-button");
//       console.log("ssssssss",button);
//       console.log("e.target",e.target);
//         if (button) {
//           console.log("Buy Now button clicked");
//           localStorage.setItem("checkout_initiated", "1");
//         }
//     });
//   }
// });



let hasExited = false;

// Detect mouse movement toward top of the page
document.addEventListener("mouseout", function (e) {
	if (!e.toElement && !e.relatedTarget && e.clientY < 50) {
		if (!hasExited) {
			console.log("Exit intent detected: mouse moved to top");
			hasExited = true;
		}
	}
});

// Detect tab switch or minimize
document.addEventListener("visibilitychange", function () {
	if (document.visibilityState === "hidden") {
		console.log("Exit intent detected: tab switch or minimize");
		hasExited = true;
	} else if (document.visibilityState === "visible" && hasExited) {
		alert("Welcome back!");
		hasExited = false;
	}
});

// Detect page unload (back button or closing tab)
window.addEventListener("beforeunload", function (e) {
	console.log("Exit intent detected: page unload");
	e.preventDefault();
	e.returnValue = '';
});
