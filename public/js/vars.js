var score = 0;
var clientWidth = document.documentElement.clientWidth;
var clientHeight = document.documentElement.clientHeight;
var players = {
	p1: {
		yourTurn: true,
		ships: []
	},
	p2: {
		yourTurn: false,
		ships: []
	}
}