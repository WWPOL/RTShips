var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

var players = {}

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

	socket.on("move", function (ships) {
		var movingPlayer = "p" + (connectedUsers.indexOf(socket.id)+1);
		console.log(movingPlayer);
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
