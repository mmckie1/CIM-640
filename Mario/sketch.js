var screenW = 512;
var screenH = 432;
var player;
var gameOver;
var bgImg;

var GRAVITY = 1;
var boundary;

function setup() {
  createCanvas(screenW,screenH);
 
  bgImg = loadImage("assets/sky.gif")
  
  //create a sprite and add the 3 animations
  player = createSprite(screenW/2,screenH/2,40,40);
  player.velocity.x=0;
  player.velocity.y=0;
  player.setCollider("circle",0,0,20);
  
  //label, first frame, last frame
  //the addAnimation method returns the added animation
  //that can be store in a temporary variable to change parameters
  var myAnimation = player.addAnimation("standing", "assets/Standing-mario.gif");
  //offX and offY is the distance of animation from the center of the sprite
  //in this case since the animations have different heights i want to adjust
  //the vertical offset to make the transition between floating and moving look better
  //myAnimation.offY = 18;
  
  player.addAnimation("running", "assets/Running-mario_01.png","assets/Running-mario_02.png","assets/Running-mario_03.png","assets/Running-mario_04.png");
  player.addAnimation("jumping", "assets/Jumping-mario.gif");
  player.addAnimation("dead", "assets/Dead-mario_01.png", "assets/Dead-mario_02.png");
  //updateSprites(true);
  

}

function draw() {


  
  if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)){
    if (keyIsDown(LEFT_ARROW)){
      player.mirrorX(-1);
      player.velocity.x = -2;
    } 
    if (keyIsDown(RIGHT_ARROW)){
      player.mirrorX(1);
      player.velocity.x = 2;
    }
    player.position.y = 200;
    player.changeAnimation("running");
  }
  
  
  if (keyIsDown(UP_ARROW)  ){
    player.velocity.y = -5;
    if (player.position.y <= 100){
      player.position.y = 200;  
    }
    player.changeAnimation("jumping");
  }
  
  
  if(!keyIsDown(LEFT_ARROW)  && !keyIsDown(RIGHT_ARROW) && !keyIsDown(UP_ARROW)){
    player.changeAnimation("standing");
    player.velocity.x = 0;
    player.position.y = 200;  
   // if (player.position.y >= 100){
     // player.position.y = 200;  
    //}
  }
 
  //console.log("This is the x velocity" + player.velocity.x); 
  //console.log("This is the x position" + player.position.x);
  //console.log("This is the y velocity" + player.velocity.y);
  //console.log("This is the y position" + player.position.y);
  
  background(color(0,100,190));
  camera.off();
  image(bgImg);
  drawSprites();

 
  
}






