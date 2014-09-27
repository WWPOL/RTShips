Ship = function(x,y,type,color) {
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
		this.sprite = new Image();
		this.sprite.src = 'assets/ships/' + color + "battleship.png";
	} else if (this.type === "destroyer") {
		this.sight = 4
		this.speed = 2
		this.damage = 3
		this.health = 10
		this.sprite = new Image();
		this.sprite.src = 'assets/ships/' + color + "destroyer.png";
	} else if (this.type === "scout") {
		this.sight = 4
		this.speed = 3
		this.damage = 1
		this.health = 5
		this.sprite = new Image();
		this.sprite.src = 'assets/ships/' + color + "scout.png";
	} else if (this.type === "sub") {
		this.sight = 3
		this.speed = 2
		this.damage = 3
		this.health = 1
		this.sprite = new Image();
		this.sprite.src = 'assets/ships/' + color + "sub.png";
	}
}


Ship.prototype.updateXY = function(x, y) {
	this.x = x;
	this.y = y;
};
Ship.prototype.updateHealth = function(damageDone) {
	this.health -= damageDone;
	if(this.health <= 0){
		this.alive = false;
	}
};
Ship.prototype.draw = function(ctx) {
	if (this.alive) {
		ctx.save();
		ctx.translate(this.x, this.y);
		//ctx.rotate(this.direction);
		if (this.type === "battleship") {
			ctx.drawImage(this.sprite, 0,0, 25, 75);
		} else if (this.type === "destroyer") {
			ctx.drawImage(this.sprite,0,0, 25, 50)
		} else if (this.type === "scout") {
			ctx.drawImage(this.sprite,0,0, 25, 25)
		} else if (this.type === "sub") {
			ctx.drawImage(this.sprite,0,0, 25, 25)
		}
		ctx.restore();
	}
}