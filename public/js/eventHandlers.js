var mouseX;
var mouseY;
var mouseDown = false;

gcanvas.addEventListener("mousemove", function (e) {
	var rect = gcanvas.getBoundingClientRect();
	mouseX = e.clientX - rect.left;
	mouseY = e.clientY - rect.top;
}, false);

gamecanvas.addEventListener('mousedown', function (e) {
	mousedown = true; // Starts the firing if statement
}, false);
gamecanvas.addEventListener('mouseup', function (e) {
	mousedown = false;
}, false);
