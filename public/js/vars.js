var score = 0;
var clientWidth = document.documentElement.clientWidth;
var clientHeight = document.documentElement.clientHeight;
var players = {
	p1: {
		boolean: yourTurn,
		ships: []
	},
	p2: {
		boolean: yourTurn,
		ships: []
	}
}