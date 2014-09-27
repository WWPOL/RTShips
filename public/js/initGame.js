function initGame(name,players) {
	var game = new Phaser.Game(clientWidth,clientHeight,Phaser.CANVAS,'rtships',{preload: preload, create: create, update: update, render: render});

	function preload() {
		game.load.image('blueaircraftcarrier','assets/ships/blueaircraftcarrier.png');
		game.load.image('bluebattleship','assets/ships/bluebattleship.png');
		game.load.image('bluedestroyer','assets/ships/bluedestroyer.png');
		game.load.image('blueplane','assets/ships/blueplane.png');
		game.load.image('bluescout','assets/ships/bluescout.png');
		game.load.image('bluesub','assets/ships/bluesub.png');
		game.load.image('redaircraftcarrier','assets/ships/redaircraftcarrier.png');
		game.load.image('redbattleship','assets/ships/redbattleship.png');
		game.load.image('reddestroyer','assets/ships/reddestroyer.png');
		game.load.image('redplane','assets/ships/redplane.png');
		game.load.image('redscout','assets/ships/redscout.png');
		game.load.image('redsub','assets/ships/redsub.png');
		game.load.image('explosion','assets/ships/explosion.png');
		game.load.image('shell','assets/ships/shell.png');

		game.load.image('water', 'assets/tiles/water.png');
		game.load.image('fog', 'assets/tiles/fog.png');
		game.load.image('marked', 'assets/tiles/marked.png');

		game.load.audio('explosionsnd','assets/sounds/explosion.wav');
		game.load.audio('shoot', 'assets/sounds/shoot.wav');
	}

	var cursors;

	function create() {
		game.world.setBounds(0,0,3000,3000);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.stage.smoothed = false;
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		tiles = game.add.tileSprite(0,0,3000,3000, 'water');

		cursors = game.input.keyboard.createCursorKeys();
		for(var i = 0; i < players.p1.ships.length; i++){
			if(players.p1.ships.type =='battleship'){
				var p1Battleship = game.add.sprite(players.p1.ships[i].x*100, players.p1.ships[i].y*100, 'redbattleship');
			}else if(players.p1.ships.type == 'destroyer'){
				var p1Destroyer = game.add.sprite(players.p1.ships[i].x*100, players.p1.ships[i].y*100, 'reddestroyer');
			}else if(players.p1.ships.type == 'scout'){
				var p1Scout = game.add.sprite(players.p1.ships[i].x*100, players.p1.ships[i].y*100, 'redscout');
			}else if(players.p1.ships.type == 'sub'){
				var p1Sub = game.add.sprite(players.p1.ships[i].x*100, players.p1.ships[i].y*100, 'redsub');
			}
		}
		for(var i = 0; i < players.p2.ships.length; i++){
			if(players.p2.ships.type == 'battleship'){
				var p2Battleship = game.add.sprite(players.p2.ships[i].x*100, players.p2.ships[i].y*100, 'bluebattleship');
			}else if(players.p2.ships.type == 'destroyer'){
				var p2Destroyer = game.add.sprite(players.p2.ships[i].x*100, players.p2.ships[i].y*100, 'bluedestroyer');
			}else if(players.p2.ships.type == 'scout'){
				var p2Scout = game.add.sprite(players.p2.ships[i].x*100, players.p2.ships[i].y*100, 'bluescout');
			}else if(players.p2.ships.type == 'sub'){
				var p2Sub = game.add.sprite(players.p2.ships[i].x*100, players.p2.ships[i].y*100, 'bluesub');
			}
		}
	}

	function update() {
		if(players[name].turn){
			if (cursors.up.isDown) {
				game.camera.y -= 10;
			} else if (cursors.down.isDown) {
				game.camera.y += 10;
			}
			if (cursors.left.isDown) {
				game.camera.x -= 10;
			} else if (cursors.right.isDown) {
				game.camera.x += 10;
			}
		}
	}

	function render() {
		players.p1.ships.forEach(function(ship){

		});
		players.p2.ships.forEach(function(ship){

		});
	}
}