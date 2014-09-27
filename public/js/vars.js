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
		ships: []
	},
	p2: {
		turn: false;
		ships: []
	}
};