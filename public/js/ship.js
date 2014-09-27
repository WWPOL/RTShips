Ship = function(x,y,type) {
	this.x = x;
	this.y = y;
	this.type = type;
	if (this.type === "battleship") {

	} else if (this.type === "destroyer") {

	} else if (this.type === "scout") {

	} else if (this.type === "sub") {

	}
}

Ship.prototype.update() {
	this.x += 1;
	this.y += 1;
}