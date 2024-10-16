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
