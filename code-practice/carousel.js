const carouselInner = document.querySelector('.carousel-inner');
const dots = document.querySelectorAll('.dot');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// Set initial positions
items.forEach((item, index) => {
    item.style.left = `${index * 100}%`;
});
document.querySelector('#prevBtn').addEventListener('click',()=>{
console.log('prevBtn clicked');
	currentIndex = (currentIndex > 0) ? currentIndex - 1 : dots.length - 1;
	updateCarousel();
})

document.getElementById('nextBtn').addEventListener('click', () => {
	console.log('nextBtn clicked');
	currentIndex = (currentIndex < dots.length - 1) ? currentIndex + 1 : 0;
	updateCarousel();
});

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		currentIndex = index;
		updateCarousel();
	});
});

function updateCarousel() {
    console.log('updated');
    carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

let debouncerTimer;
let address = documetn.getElementByClass(".sqAddress");
let address = documetn.getElementBy;
function fetchData() {
	
	let apiUrl = `https://www.tpg.com.au/api/sq?addr=${encodeURIComponent(
		address
	)}`;
	fetch(apiUrl).then(res => {
		if (!res.ok) {
			throw new Error("network response");
		}
		return res.json();
	}).then(data => {
		console.log('data:', data);
	})
}
if(addressInput){
	observer.observe(addressInput,{atrributes:true});
	console.log("this has value, ",address);
	
}
// function debounceFetch() {
// 	clearTimeout(debouncerTimer);
// 	debouncerTimer = setTimeout(fetchData, 500);
// }
// const addressInput = document.querySelector('.sqAddress');
// if(addressInput){
// 	observer.observe(addressInput,{atrributes:true});
// }
// addressInput.addEventListener('keyup', debounceFetch);
// addressInput.addEventListener('change', fetchData); // For drop-down selection
// addressInput.addEventListener('keypress', (event) => {
// 	if (event.key === 'Enter') {
// 		console.log("key press");
// 		fetchData();
// 	}
// });
// addressInput.addEventListener('input',()=>{
// 	let addValue = addressInput.value.trim();
// 	if(addValue){
// 		console.log("input")
// 		fetchData(addValue);
// 	}
// })
