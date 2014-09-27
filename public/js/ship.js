Ship = function(x,y,type) {
	this.x = x;
	this.y = y;
	this.type = type;
	this.actions = 10;
	this.alive = true;
	if (this.type === "battleship") {
		this.sight = 3
		this.speed = 1
		this.damage = 5
		this.health = 15
	} else if (this.type === "destroyer") {
		this.sight = 4
		this.speed = 2
		this.damage = 3
		this.health = 10
	} else if (this.type === "scout") {
		this.sight = 4
		this.speed = 3
		this.damage = 1
		this.health = 5
	} else if (this.type === "sub") {
		this.sight = 3
		this.speed = 2
		this.damage = 3
		this.health = 1
	}
}

Ship.prototype.updateXY(x, y) {
	this.x = x;
	this.y = y;
};
Ship.prototype.updateHealth = function(damageDone) {
	this.health -= damageDone;
	if(this.health <= 0){
		this.alive = false;
	}
};