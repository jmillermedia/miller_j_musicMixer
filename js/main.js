// JAVASCRIPT START

(() => {
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'), //adds all img tags into a node list
	loopButtons = document.querySelectorAll('.loopButton'),
	dropZones = document.querySelectorAll('.dropZone'),
	audioLoops = document.querySelectorAll('.audioLoops');

	function allowDrag(event) {
		console.log('Started dragging the image: ', event.target.id);

		event.dataTransfer.setData('draggedImage', this.id);
	}

	function allowDragOver(event) {
		console.log('Dragged something over me!');
		event.preventDefault();
	}

	function allowDrop(event) {
		console.log('dropped on me');
		let droppedImage = event.dataTransfer.getData('draggedImage'),
    	audioLoop = document.querySelector(`audio[data-key="${droppedImage}"]`);
		
		if (this.children.length > 0) { // if the div already has a child, stop the code
			return;
		}
		console.log(audioLoop);
		this.appendChild(document.querySelector(`#${droppedImage}`));
		this.querySelector(`#${droppedImage}`).classList.toggle('noFilter'); // removes the greyscale filter by toggling a CSS rule

		if (!audioLoop) { // ! tests for a negative result
			return;
		} 
	
		audioLoop.currentTime = 0;
		audioLoop.play();
	
	}

	// click on a button to remove it and stop the audio loop
	function removeButton(e) {
		let removeImage = event.dataTransfer.getData
		this.removeChild;
	}

	loopButtons.forEach(button => button.addEventListener('dragstart', allowDrag));
	// debugger;

	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver); // listen for dragover and run allowDragOver function when it occurs
		zone.addEventListener('drop', allowDrop); // listen for drop event and run allowDrop function when it occurs
		zone.addEventListener('click', removeButton);
	})

	loopButtons.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver); // listen for dragover and run allowDragOver function when it occurs
		zone.addEventListener('drop', allowDrop);
	})

	console.log(audioLoops);
})();