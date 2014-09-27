function initGame(name,socket) {
	var game = new Phaser.Game(clientWidth,clientHeight,Phaser.CANVAS,'rtships',{preload: preload, create: create, update: update, render: render});
	var socket = socket;
	var selected = null;

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

		game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 193, 71);
	}

	var cursors;
	var turnnote;
	var moving = false;
	var movex = 0;
	var movey = 0;

	var p1Sprites = [];
	var p2Sprites = [];

	function create() {
		game.world.setBounds(0,0,3000,3000);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.stage.smoothed = false;
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		
		for (var x = 0; x < 30; x++) {
			for (var y = 0; y < 30; y++) {
				var tile = game.add.sprite(x * 100, y * 100, 'water');
				console.log("tile");
				tiles.push(tile);
			}
		}

		cursors = game.input.keyboard.createCursorKeys();
		for(var i = 0; i < players.p1.ships.length; i++){
			if(players.p1.ships[i].type =='battleship'){
				var p1Battleship = game.add.sprite((players.p1.ships[i].x + 1)*100, players.p1.ships[i].y*100, 'redbattleship');
				p1Battleship.anchor.setTo(1.0, 1.0);
				p1Battleship.scale.y = -1;
				p1Battleship.inputEnabled = true;
			    p1Battleship.events.onInputDown.add(move, this);
				p1Sprites.push(p1Battleship);
			}else if(players.p1.ships[i].type == 'destroyer'){
				var p1Destroyer = game.add.sprite((players.p1.ships[i].x + 1)*100, players.p1.ships[i].y*100, 'reddestroyer');
				p1Destroyer.anchor.setTo(1.0, 1.0);
				p1Destroyer.scale.y = -1;
				p1Destroyer.inputEnabled = true;
			    p1Destroyer.events.onInputDown.add(move, this);
				p1Sprites.push(p1Destroyer);
			}else if(players.p1.ships[i].type == 'scout'){
				var p1Scout = game.add.sprite((players.p1.ships[i].x + 1)*100, players.p1.ships[i].y*100, 'redscout');
				p1Scout.anchor.setTo(1.0, 1.0);
				p1Scout.scale.y = -1;
				p1Scout.inputEnabled = true;
			    p1Scout.events.onInputDown.add(move, this);
				p1Sprites.push(p1Scout);
			}else if(players.p1.ships[i].type == 'sub'){
				var p1Sub = game.add.sprite((players.p1.ships[i].x + 1)*100, players.p1.ships[i].y*100, 'redsub');
				p1Sub.anchor.setTo(1.0, 1.0);
				p1Sub.scale.y = -1;
				p1Sub.inputEnabled = true;
			    p1Sub.events.onInputDown.add(move, this);
				p1Sprites.push(p1Sub);
			}
		}
		for(var i = 0; i < players.p2.ships.length; i++){
			if(players.p2.ships[i].type == 'battleship'){
				var p2Battleship = game.add.sprite(players.p2.ships[i].x*100, players.p2.ships[i].y*100, 'bluebattleship');
				p2Sprites.push(p2Battleship)
			}else if(players.p2.ships[i].type == 'destroyer'){
				var p2Destroyer = game.add.sprite(players.p2.ships[i].x*100, players.p2.ships[i].y*100, 'bluedestroyer');
				p2Sprites.push(p2Destroyer);
			}else if(players.p2.ships[i].type == 'scout'){
				var p2Scout = game.add.sprite(players.p2.ships[i].x*100, players.p2.ships[i].y*100, 'bluescout');
				p2Sprites.push(p2Scout);
			}else if(players.p2.ships[i].type == 'sub'){
				var p2Sub = game.add.sprite(players.p2.ships[i].x*100, players.p2.ships[i].y*100, 'bluesub');
				p2Sprites.push(p2Sub);
			}
		}

		turnnote = game.add.text(clientWidth / 2, 40, "It is not your turn!", {
	        font: "65px Arial",
	        fill: "#ff0044",
	        align: "center"
	    });
	    turnnote.fixedToCamera = true;
	    turnnote.anchor.setTo(0.5, 0.5);

	    button = game.add.button(clientWidth - 200, clientHeight - 100, 'button', actionOnClick, this, 2, 1, 0);
	    button.fixedToCamera = true;

	    if (name === "p1") {
	    	game.camera.x = 1800;
	    	game.camera.y = 0;
	    } else if (name === "p2") {
	    	game.camera.x = 1800;
	    	game.camera.y = 5000;
	    }
	}

	function update() {
		if (players[name].turn){
			turnnote.setText("");
		} else {
			turnnote.setText("It is not your turn!");
		}
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

	function render() {
		players.p1.ships.forEach(function(ship){

		});
		players.p2.ships.forEach(function(ship){

		});
	}

	function move(sprite) {
		console.log("start");
		if(players[name].turn){
			console.log(game.input.mousePointer.x);
			console.log(game.input.mousePointer.y);
			var xClick = Math.floor(game.input.mousePointer.x/100)*100;
			var yClick = Math.floor(game.input.mousePointer.y/100)*100;
			console.log(xClick);
			console.log(yClick);
			if(selected === null){
				console.log("no selected")
				selected = sprite;
			}else{
				selected.x = xClick;
				selected.y = yClick;
				selected = null;
				console.log("sprite is at (" + selected.x + ", " + selected.y + ")");
				console.log(p1Sprites);
			}
		}
	}

	function actionOnClick () {
	    socket.emit('move', [name, players]);
	}
}