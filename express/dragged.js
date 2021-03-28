
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", dragEnd);

let draggingElement = null,
	grabX = null,
	grabY = null;

function dragStart(e) {
	draggingElement = e.target.parentElement;
    const boundingBox = draggingElement.getBoundingClientRect();
    
	grabX = e.clientX - boundingBox.left;
	grabY = e.clientY - boundingBox.top;
}

function dragEnd() {
	draggingElement = null;
}

function drag(e) {
	if (draggingElement !== null) {
		const newX = e.clientX - grabX,
			  newY = e.clientY - grabY;

		draggingElement.style.top = newY + "px";
		draggingElement.style.left = newX + "px";
		draggingElement.style.position = "absolute";
		calElem = document.getElementById("calendar");
		calElemChild = document.getElementById("cal");
		if (draggingElement == calElem)
		{
			tasks = document.getElementById("tasks");
			tasks.style.top = calElemChild.style.height;
			console.log(tasks.style.top);
		}
		initialized = true;
		
	}
}
