(() => {
	console.log('fired');

	const theButton = document.querySelector("buttonHolder img");

	function changeHeadline() {
		document.querySelector("h1").textContent = "Hey there from JS!" 
		document.querySelector("p").textContent = "A fun game"

	}


	// set up the puzzle pieces and boards
	//

	theButton.addEventListener("click", changeHeadline)

	
})();
