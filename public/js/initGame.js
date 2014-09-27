function initGame(){
	var gcanvas = document.createElement('game');
	var gctx = gcanvas.getContext('2d');
	var main = function(){
		var now = Date.now();
		var delta = now - then;
		then = now;
		requestAnimationFrame(main);
	};
	var update = function(){

	};
	var render = function(){
		for(var i = 0; i < 50; i++){
			gctx.drawImage("public/assets/tiles/water.png")
		};
	};
	var then = Date.now();
	main();
}