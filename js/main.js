// JAVASCRIPT START

(() => {
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'), //adds all img tags into a node list
	loopButtons = document.querySelectorAll('.loopButton'),
	dropZones = document.querySelectorAll('.dropZone'),
	audioLoops = document.querySelectorAll('.audioLoops'),
	buttonHole = document.querySelectorAll('.buttonHole'),
	showHowTo = document.querySelector('#howTo'),
	lightBox = document.querySelector('#howToLB'),
	closeLB = document.querySelector('#closeLB');

	function allowDrag(event) {
		event.dataTransfer.setData('draggedImage', this.id);
	}

	function allowDragOver(event) {
		event.preventDefault();
	}

	function allowDrop(event) {
		let droppedImage = event.dataTransfer.getData('draggedImage'),
    	audioLoop = document.querySelector(`audio[data-key="${droppedImage}"]`);
		
		if (this.children.length > 0) { // if the div already has a child, stop the code
			return;
		}
		this.appendChild(document.querySelector(`#${droppedImage}`));
		this.querySelector(`#${droppedImage}`).classList.toggle('noFilter'); // removes the greyscale filter by toggling a CSS rule

		if (!audioLoop) { // ! tests for a negative result
			return;
		} 
	
		audioLoop.currentTime = 0;
		audioLoop.play();
	
	}

	function allowStopage() {
		event.preventDefault();
	}

	function allowStopDrop() {
		let droppedStop = event.dataTransfer.getData('draggedImage'),
    	audioLoop = document.querySelector(`audio[data-key="${droppedStop}"]`);
		
		if (this.children.length > 0) { // if the div already has a child, stop the code
			return;
		}
		this.appendChild(document.querySelector(`#${droppedStop}`));
		this.querySelector(`#${droppedStop}`).classList.toggle('noFilter'); // removes the greyscale filter by toggling a CSS rule

		if (!audioLoop) { // ! tests for a negative result
			return;
		} 
	
		audioLoop.currentTime = 0;
		audioLoop.pause();
	}

	function hideLightbox() {
		lightBox.classList.toggle('hidden');
	}

	function showLightbox() {
		lightBox.classList.remove('hidden');
	}

	loopButtons.forEach(button => button.addEventListener('dragstart', allowDrag));
	// debugger;

	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver); // listen for dragover and run allowDragOver function when it occurs
		zone.addEventListener('drop', allowDrop); // listen for drop event and run allowDrop function when it occurs
	})

	buttonHole.forEach(hole => {
		hole.addEventListener('dragover', allowStopage);
		hole.addEventListener('drop', allowStopDrop);
	})

	loopButtons.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver); // listen for dragover and run allowDragOver function when it occurs
		zone.addEventListener('drop', allowDrop);
	})

	closeLB.addEventListener('click', hideLightbox);
	showHowTo.addEventListener('click', showLightbox)
})();