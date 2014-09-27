Tile = function(x,y,type) {
	this.x = x;
	this.y = y;
	this.type = type;
	this.sprite = new Image();
	this.sprite.src = 'assets/tiles/' + this.type + '.png';
}

Tile.prototype.update = function(switchtile){
	if (switchtile) {
		this.sprite.src = 'assets/tiles/' + this.type + '.png';
	}
}

Tile.prototype.draw = function(ctx) {
	ctx.save();
	ctx.translate(this.x, this.y);
	ctx.drawImage(this.sprite, 0,0, 50, 50);
	ctx.restore();
}