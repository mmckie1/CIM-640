/**
 * Level state.
 */
function Level() {
	Phaser.State.call(this);
	// TODO: generated method.
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
Level.prototype = proto;
Level.prototype.constructor = Level;

Level.prototype.preload = function() {
	this.load.pack('level', 'assets/assets-pack.json');
};

Level.prototype.init = function(){
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	
	this.world.resize(512, 432);
	this.world.setBounds(0,0,1200,432);
	
	this.physics.startSystem(Phaser.Physics.ARCADE);
	this.physics.arcade.gravity.y = 800;
};

Level.prototype.create = function() {
	
	this.scene = new Scene1(this.game);
	
	// camera
	this.camera.follow(this.scene.fPlayer);
	
	// background
	//this.scene.fSky_2.fixedToCamera = true;
	
	this.scene.fCollisionLayer.setAll("body.immovable", true);
	this.scene.fCollisionLayer.setAll("body.allowGravity", false);
	
	this.scene.fCollisionLayer.setAll("renderable", false);
	
	this.scene.fCoins.setAll("body.allowGravity",false);
	
	
	this.stage.backgroundColor = '#7bc2d9';
};

Level.prototype.update = function() {
	
	this.physics.arcade.collide(this.scene.fPlayer, this.scene.fCollisionLayer);
	
	if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
		//face left
		this.scene.fPlayer.scale.x = 1;
	} else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
		//face right 
		this.scene.fPlayer.scale.x = -1;
	}
	
	if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
		//move to the left 
		this.scene.fPlayer.body.velocity.x = -200;
	} else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
		//move to the right 
		this.scene.fPlayer.body.velocity.x = 200;
	} else {
		this.scene.fPlayer.body.velocity.x = 0;
	}
	
	var touching = this.scene.fPlayer.body.touching.down;
	
	if (touching && this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
		//jump if the player is on top of a platform and the up key is pressed 
		this.scene.fPlayer.body.velocity.y = -400;
	}
	
	if (touching) {
		if (this.scene.fPlayer.body.velocity.x == 0) {
			//if it is not moving horizontally play the idle
			this.scene.fPlayer.play("idle");
		} else {
			//if it is moving play the walk
			this.scene.fPlayer.play("walk");
		}
	}
	
	//this.physics.arcade.overlap(this.scene.fPlayer, this.scene.fCoins, this.scene.playerVsCoin, null, this);
	this.physics.arcade.overlap(this.scene.fPlayer, this.scene.fCoins, this.scene.playerVsCoin, null, this);
};

/**
 * @param {Phaser.Sprite} player
 * @param {Phaser.Sprite} coin
 */
Level.prototype.playerVsCoin = function(player, coin){
	coin.kill();
};