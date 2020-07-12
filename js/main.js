// JAVASCRIPT START

(() => {
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'), //adds all img tags into a node list
	loopButtons = document.querySelectorAll('.loopButton'),
	dropZones = document.querySelectorAll('.dropZone');

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
		let droppedImage = event.dataTransfer.getData('draggedImage');
		
		this.target.appendChild(document.querySelector(`${droppedImage}`));
	}

	loopButtons.forEach(button => button.addEventListener('dragstart', allowDrag));
	// debugger;

	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
	})

	console.log(puzzleButtons);
})();