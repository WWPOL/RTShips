var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

var player = {
	p1: {
		turn: true,
		ships: []
	},
	p2: {
		turn: false,
		ships: []
	}

}

var connectedUsers = []; //keep to two
var gameStart = false;

io.on('connection', function(socket){
	//stuff about connections
	socket.emit('initIdentity', socket.id);
	console.log("A user connected");
	connectedUsers.push(socket.id);
	console.log(connectedUsers);

	if(connectedUsers.length == 1){
		socket.emit('initIdentity', 'p1')
	}
	if(connectedUsers.length == 2){
		socket.emit("initIdentity", 'p2');
	}

	if (connectedUsers.length > 2) {
		console.log(connectedUsers.length + " users");
		io.to(socket.id).emit("full");
	}

	if (connectedUsers.length < 2) {
		io.to(socket.id).emit("waitForJoin");
	}

	if (connectedUsers.length == 2) {
		console.log("game start");
		gameStart = true;
		//initialize();
		io.emit("initGame");
	}

	socket.on('disconnect', function(){
		connectedUsers.splice(connectedUsers.indexOf(socket.id));
		console.log("A user disconnected");
		console.log(connectedUsers);
		io.emit("disconnect");
	});
	//////////////////////////

	socket.on("move", function (clientInfo) {
		var movingPlayer = clientInfo[0]; //p1 or p2
		var otherPlayer;
		if (movingPlayer === "p1") {
			otherPlayer = "p2";
		}
		else {
			otherPlayer = "p1";
		}
		
		if (player[movingPlayer].turn) {
			player = clientInfo[1]; //player object
			// console.log(movingPlayer + " " + otherPlayer);
			// player[movingPlayer].turn = false;
			// console.log("movingPlayer is " + movingPlayer + " and it is now " + player[movingPlayer].turn);
			// player[otherPlayer].turn = true;
			// console.log("otherPlayer is " + otherPlayer + " and it is now " + player[otherPlayer].turn);
			io.to(connectedUsers[(connectedUsers.indexOf(socket.id)+1)%2]).emit("yourTurn",player);
			//io.to(connectedUsers[(connectedUsers.indexOf(socket.id)+1)]).emit("endTurn", player);
			// console.log(movingPlayer + " " + player[movingPlayer].turn + "  " + otherPlayer + " " + player[otherPlayer].turn);
		}
		else {
			console.log(clientInfo[1]);
		}
	});

});

http.listen(3000, function(){
	console.log("listening on port 3000");
});

// function initialize() {
// 	console.log("initialize()");
// 	if (connectedUsers.length == 2) {
// 		io.to(connectedUsers[0]).emit("initIdentity", "p1");
// 		players.push({
// 			id: "p1",
// 			socket: connectedUsers[0],
// 			turn: true,
// 			ships: {}
// 		});
// 		io.to(connectedUsers[1]).emit("initIdentity", "p2");
// 		players.push({
// 			id: "p2",
// 			socket: connectedUsers[1],
// 			turn: false,
// 			ships: {}
// 		});
// 	}
// 	console.log(players);
// }
