const slideContainer = document.querySelector('.carousel-inner');
const images = document.querySelectorAll('.carousel-image');
const prev = document.querySelector('.prevbtn');
const next = document.querySelector('.nextbtn');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
// Update Carousel Display
function updateCarousel() {
    // Move the slide container to show the current image
    // slideContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
	images.forEach((img,index)=>{
		console.log('index:',currentIndex);
		img.classList.toggle('hidden', index !== currentIndex)
	})
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}
// Show Next Image
next.addEventListener('click', () => {
	console.log('currentIndex:',currentIndex);
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});
// Show Previous Image
prev.addEventListener('click', () => {
	console.log('currentIndex:',currentIndex);
	
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});
// Click on dots to go to the corresponding image
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});
// Initialize the carousel with the first dot active
updateCarousel();