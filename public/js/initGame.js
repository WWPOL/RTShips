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
		game.load.image('cursor','assets/ships/cursor.png');

		game.load.image('water', 'assets/tiles/water.png');
		game.load.image('fog', 'assets/tiles/fog.png');
		game.load.image('marked', 'assets/tiles/marked.png');

		game.load.audio('explosionsnd','assets/sounds/explosion.wav');
		game.load.audio('shoot', 'assets/sounds/shoot.wav');
	}

	var cursors;
	var offsetX = 0;
	var offsetY = 0;

	function create() {
		game.world.setBounds(0,0,5000,5000);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.stage.smoothed = false;
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		tiles = game.add.tileSprite(0,0,5000,5000, 'water');
		//tiles.fixedToCamera = true;
		cursor = game.add.sprite(clientWidth/2,clientHeight/2,'cursor');
			//game.physics.arcade.enable(cursor);
			//game.camera.follow(cursor);

		cursors = game.input.keyboard.createCursorKeys();
	}

	function update() {
		cursor.x = game.input.mousePointer.x + offsetX;
		cursor.y = game.input.mousePointer.y + offsetY;
		if (cursors.up.isDown) {
			game.camera.y -= 5;
			offsetY -= 5;
		} else if (cursors.down.isDown) {
			game.camera.y += 5;
			offsetY += 5;
		}
		if (cursors.left.isDown) {
			game.camera.x -= 5;
			offsetX -= 5;
		} else if (cursors.right.isDown) {
			game.camera.x += 5;
			offsetX += 5;
		}
	}

	function render() {
	}
}