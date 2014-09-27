function send(playerArray) {
	socket.emit("move", playerArray);
}