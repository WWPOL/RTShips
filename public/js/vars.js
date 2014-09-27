var score = 0;
var clientWidth = document.documentElement.clientWidth;
var clientHeight = document.documentElement.clientHeight;
var mouseX = 0;
var mouseY = 0;
var tiles;
var arrowkeys;
var name = "";
var players = {
	p1: {
		turn: true,
		ships: [new Ship(0,0,"battleship"), new Ship(1,0,"destroyer"), new Ship(2, 0, "scout"), new Ship(3,0,"sub")]
	},
	p2: {
		turn: false,
		ships: []
	}
};