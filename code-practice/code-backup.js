// 
const observer = new MutationObserver(() => {
	const modal = document.querySelector('.modal__terms');
	if (modal) {
	  // Find and hide the "NBN50" field in the modal
	  const nbn50Field = [...modal.querySelectorAll('b')].find((element) =>
		element.textContent.includes('NBN50')
	  );
	  if (nbn50Field) {
		nbn50Field.style.display = 'none';
	  }
  
	  // Stop observing after the modal is handled
	  observer.disconnect();
	}
  });
  
  // Start observing changes in the DOM
  observer.observe(document.body, { childList: true, subtree: true });
  