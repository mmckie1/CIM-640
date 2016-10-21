window.onload = function() {
	// Create your Phaser game and inject it into an auto-created canvas.
	// We did it in a window.onload event, but you can do it anywhere (requireJS
	// load, anonymous function, jQuery dom ready, - whatever floats your boat)
	var width = window.innerWidth;
	var height = window.innerHeight;
	var f = height / width;
	
	if (width > height){
		width = 512;
		height = width * f;
	} else {
		height = 432;
		width = 432 / f;
	}
	
	//var game = new Phaser.Game(1200, 432, Phaser.AUTO);
	var game = new Phaser.Game(width, height, Phaser.AUTO);

	// Add the States your game has.
	// game.state.add("Boot", Boot);
	// game.state.add("Menu", Menu);
	// game.state.add("Preload", Preload);
	game.state.add("Level", Level, true);

	// Now start the Boot state.
	// game.state.start("Boot");
};
