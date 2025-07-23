// function topKFrequent(nums, k) {
// 	const freqMap = new Map();

// 	// Step 1: Count frequencies
// 	for (const num of nums) {
// 		console.log('111', freqMap.get(num));

// 		freqMap.set(num, (freqMap.get(num) || 0) + 1);
// 	}

// 	// Step 2: Convert map to array and sort by frequency
// 	const sorted = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

// 	// Step 3: Extract top k elements
// 	return sorted.slice(0, k).map(entry => entry[0]);
// }

// const nums = [1, 1, 1, 2, 2, 3];
// const k = 2;
// console.log(topKFrequent(nums, k)); // Output: [1, 2]

const colors = [
  "rgb(255, 0, 0)",
  "rgb(3, 222, 43)",
  "rgb(58, 3, 222)",
  "rgb(226, 250, 68)",
  "rgb(180, 80, 153)",
  "rgb(15, 209, 231)",
];
const swatchesContainer = document.getElementById("swatches");
const colorBox = document.getElementById("colorBox");
let selectedColors = [];

colors.forEach((color) => {
  const swatch = document.createElement("div");
  swatch.className = "swatch";
  swatch.style.backgroundColor = color;
  swatch.dataset.color = color;
  swatchesContainer.appendChild(swatch);
  swatch.addEventListener("click", () => {
    selectedColors.push(color);
    const currentColor = colorBox.style.backgroundColor;
    const newColor = color;

    console.log("currentColor  ", currentColor);

    if (currentColor === "") {
      colorBox.style.backgroundColor = color;
    } else {
      const blendColor = blendColors(parseRGB(currentColor), parseRGB(newColor));
      colorBox.style.backgroundColor = blendColor;
    }

    selectedColors.push(newColor);
    console.log("colorBox :", colorBox.style.backgroundColor);

    console.log("Selected:", selectedColors);
  });
});

function blendColors(c1, c2) {
  const r = Math.floor((c1.r + c2.r) / 2);
  const g = Math.floor((c1.g + c2.g) / 2);
  const b = Math.floor((c1.b + c2.b) / 2);
  return `rgb(${r}, ${g}, ${b})`;
}
function parseRGB(colorStr){
	const [r, g, b] = colorStr.match(/\d+/g).map(Number);
	return {r,g,b};
}
// function updateColors(){
// 	if(selectedColors.length === 0){

// 		return;
// 	}

// 	boxColor.style.backgroundColor = '';
// }
// Create swatches

// colors.forEach(color => {
//   const swatch = document.createElement('div');
//   swatch.className = 'swatch';
//   swatch.style.backgroundColor = color;
//   swatch.dataset.color = color;
//   swatch.addEventListener('click', () => toggleColor(swatch));
//   swatchesContainer.appendChild(swatch);
// });

// function toggleColor(swatch) {
//   const color = swatch.dataset.color;
//   if (selectedColors.includes(color)) {
//     selectedColors = selectedColors.filter(c => c !== color);
//     swatch.classList.remove('selected');
//   } else {
//     selectedColors.push(color);
//     swatch.classList.add('selected');
//   }
//   updateBlendedColor();
// }

// function updateBlendedColor() {
//   if (selectedColors.length === 0) {
//     colorBox.style.backgroundColor = 'white';
//     return;
//   }

//   const rgbValues = selectedColors.map(color => getRGB(color));
//   const blended = rgbValues.reduce((acc, rgb) => {
//     acc.r += rgb.r;
//     acc.g += rgb.g;
//     acc.b += rgb.b;
//     return acc;
//   }, { r: 0, g: 0, b: 0 });

//   const count = selectedColors.length;
//   const avgColor = `rgb(${Math.round(blended.r / count)}, ${Math.round(blended.g / count)}, ${Math.round(blended.b / count)})`;
//   colorBox.style.backgroundColor = avgColor;
// }

// function getRGB(color) {
//   const temp = document.createElement('div');
//   temp.style.color = color;
//   document.body.appendChild(temp);
//   const rgb = window.getComputedStyle(temp).color;
//   document.body.removeChild(temp);

//   const match = rgb.match(/\d+/g);
//   return {
//     r: parseInt(match[0]),
//     g: parseInt(match[1]),
//     b: parseInt(match[2])
//   };
// }
