// Generated by Phaser Editor v1.2.1

/**
 * Scene1.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function Scene1(aGame, aParent) {
	Phaser.Group.call(this, aGame, aParent);

	/* --- pre-init-begin --- */

	// you can insert code here

	/* --- pre-init-end --- */

	var sky_2 = this.game.add.tileSprite(-20, -278, 1252, 639, 'sky_2', null, this);

	var sky = this.game.add.tileSprite(-14, -70, 1267, 432, 'sky', null, this);

	this.game.add.tileSprite(-1, 314, 1224, 16, 'top', null, this);

	this.game.add.tileSprite(-1, 330, 1226, 121, 'filler', null, this);

	var coins = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this);
	coins.position.setTo(149, 0);

	this.game.add.sprite(232, 293, 'regular-coins', 0, coins);

	this.game.add.sprite(248, 293, 'regular-coins', 0, coins);

	this.game.add.sprite(262, 293, 'regular-coins', 0, coins);

	this.game.add.sprite(277, 293, 'regular-coins', 0, coins);

	var player = this.game.add.sprite(48, 294, 'player', 0, this);
	player.anchor.setTo(0.5, 0.0);
	player.animations.add('walk', [0, 1, 2, 3], 15, true);
	player.animations.add('idle', [0], 0, false);
	this.game.physics.arcade.enable(player);
	player.body.setSize(16.20562744140625, 23.21502685546875, -0.40185546875, -2.009368896484375);

	var collisionLayer = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this);
	collisionLayer.position.setTo(1, 0);

	var physics = this.game.add.tileSprite(-2, 317, 1223, 16, 'collider', null, collisionLayer);

	 // public fields

	this.fSky_2 = sky_2;
	this.fSky = sky;
	this.fCoins = coins;
	this.fPlayer = player;
	this.fCollisionLayer = collisionLayer;
	this.fPhysics = physics;

	/* --- post-init-begin --- */

	// you can insert code here

	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var Scene1_proto = Object.create(Phaser.Group.prototype);
Scene1.prototype = Scene1_proto;
Scene1.prototype.constructor = Phaser.Group;

/* --- end generated code --- */

// you can insert code here

