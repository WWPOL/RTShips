function initGame(name) {
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
		if(name == "p1"){
			players[name].ships.forEach(function(ship)){

			}
		}else{
			players[p2].ships.forEach(function(ship)){
				
			}
		}
	}
}