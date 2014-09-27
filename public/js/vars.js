var score = 0;
var clientWidth = document.documentElement.clientWidth;
var clientHeight = document.documentElement.clientHeight;
var mouseX = 0;
var mouseY = 0;
var tiles = [];
var arrowkeys;
var name = "";
var players = {
	p1: {
		turn: true,
		ships: [new Ship(13,0,"battleship"), new Ship(14,0,"destroyer"), new Ship(15, 0, "scout"), new Ship(16,0,"sub")]
	},
	p2: {
		turn: false,
		ships: [new Ship(13, 27,"battleship"), new Ship(14, 28,"destroyer"), new Ship(15, 29, "scout"), new Ship(16, 29,"sub")]
	}
};