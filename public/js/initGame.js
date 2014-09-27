function initGame(){
	var gcanvas = document.getElementById('game');
	var gctx = gcanvas.getContext('2d');
	gcanvas.width = clientWidth;
	gcanvas.height = clientHeight;
	var tiles = [];


	for (var x = 0; x < gcanvas.width/50;x++) {
		for (var y = 0; y < gcanvas.height/50;y++) {
			var tile = new Tile(x*50,y*50,"water");
			tiles.push(tile);
		}
	}

	gcanvas.addEventListener("mousemove", function (e) {
		var rect = gcanvas.getBoundingClientRect();
		mouseX = e.clientX - rect.left;
		mouseY = e.clientY - rect.top;
	}, false);

	gcanvas.addEventListener('mousedown', function (e) {
		mousedown = true; // Starts the firing if statement
	}, false);
	gcanvas.addEventListener('mouseup', function (e) {
		mousedown = false;
	}, false);

	var main = function(){
		var now = Date.now();
		var delta = now - then;
		then = now;
		update();
		render(gctx);
		requestAnimationFrame(main);
	};
	var update = function(){
		tiles.forEach(function(tile){
			tile.update();
		})
	};
	var render = function(ctx){
		tiles.forEach(function(tile){
			tile.draw(ctx);
		})
	};
	var then = Date.now();
	main();
}