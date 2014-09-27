function initGame(){
	var main = function(){
		var now = Date.now();
		var delta = now - then;

		update(delta/1000);
		render();

		then = now;
		requestAnimationFrame(main);
	};
	var update = function(){

	};
	var render = function(){
		for(var y = 0; y < 20; i++){
			for(var x = 0; x < 20; i++){
				console.log("drawing");
				gctx.drawImage("public/assets/tiles/water.png",x*25,y*25,25,25);
			}
		};
	};
	var then = Date.now();
	main();
}