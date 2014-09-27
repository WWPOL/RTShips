var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

var players = {};
var connectedUsers = []; //keep to two

io.on('connection', function(socket){
	console.log("A user connected");
	connectedUsers.push(socket.id);
	console.log(connectedUsers);

	if (connectedUsers.length > 2) {
		console.log(connectedUsers.length + " users");
		io.to(socket.id).emit("full");
	}

	if (connectedUsers.length == 2) {
		console.log("game start");
		io.emit("initgame");
	}

	socket.on('disconnect', function(){
		connectedUsers.splice(connectedUsers.indexOf(socket.id));
		console.log("A user disconnected");
		console.log(connectedUsers);
	});
});

http.listen(3000, function(){
	console.log("listening on port 3000");
})