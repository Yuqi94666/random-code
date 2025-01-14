let tabCount = 0;

function addTab() {
	tabCount++;
	const tabsContainer = document.getElementById('tabs'); 
	const newTab = document.createElement('div'); 
	newTab.className = 'tab'; 
	const imageUrl = document.getElementById('imageUrlInput').value;
    const tabText = document.getElementById('tabTextInput').value; 
	const icon = document.createElement('img');
    icon.src = imageUrl;
	const text = document.createElement('p');
	text.textContent = tabText;
	newTab.appendChild(icon);
	newTab.appendChild(text);
	tabsContainer.appendChild(newTab); 
	document.getElementById('tabTextInput').value = '';
	document.getElementById('imageUrlInput').value = '';

}

function deleteTab() {
	const tabsContainer = document.getElementById('tabs');
	if (tabsContainer.lastChild) {
		tabsContainer.removeChild(tabsContainer.lastChild);
		tabCount--;
		updateTabLayout();
	}
}

// function updateTabLayout() {
// 	console.log("updated");
// 	const tabs = document.querySelectorAll('.tab');
// 	// tabs.forEach(tab => tab.classList.remove('stretch'));

// 	if (tabCount % 2 !== 0) {
// 		console.log("jinlaile");
		
// 		const stretchTab = document.querySelector('.tab.stretch');
// 		console.log(stretchTab,"stretchTab");
		
// 		if (stretchTab) {
// 			l
// 			stretchTab.classList.add('stretch');
// 		} else {
// 			tabs[tabCount - 1].classList.add('stretch');
// 		}
// 	}
// }

// Initial layout update
// updateTabLayout();
