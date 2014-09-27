function initGame(){
	var gcanvas = document.getElementById('game');
	var gctx = gcanvas.getContext('2d');
	gcanvas.width = clientWidth;
	gcanvas.height = clientHeight;

	var players = {
		p1: {
			turn: true,
			ships: [new Ship(130,0,"battleship","red"), new Ship(140,0,"destroyer","red"), new Ship(150, 0, "scout","red"), new Ship(160,0,"sub","red")]
		},
		p2: {
			turn: false,
			ships: [new Ship(130, 270,"battleship","blue"), new Ship(140, 280,"destroyer","blue"), new Ship(150, 290, "scout","blue"), new Ship(160, 290,"sub","blue")]
		}
	};


	var tiles = [];

	var ship = new Ship(50,50,"battleship","red");

	for (var x = 0; x < 50;x++) {
		for (var y = 0; y < 30;y++) {
			var tile = new Tile(x*25,y*25,"water");
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

		update(delta/1000);
		render();

		then = now;
		update();
		render();
		requestAnimationFrame(main);
	};
	var update = function(){
		tiles.forEach(function(tile){
			tile.update();
		})
		ship.updateXY(ship.x + 3, ship.y + 3);
		ship.updateHealth(0);
	};
	var render = function(){
		tiles.forEach(function(tile){
			tile.draw(gctx);
		})
		ship.draw(gctx);
	};
	var then = Date.now();
	main();
}