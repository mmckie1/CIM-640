var screenW = 512;
var screenH = 432;

var player;
var bgImg;
var groundImg;
var GROUND_Y = 368;

function setup() {

  createCanvas(screenW,screenH);
 
  bgImg = loadImage("assets/sky.gif");
  groundImg = loadImage("assets/ground-top.gif");
  ground = createSprite(screenW/2, GROUND_Y); //image 800x200
  ground.addImage(groundImg);
  
  //create a sprite and add the 3 animations
  player = createSprite(screenW/2,screenH/2,40,40);
  //player.velocity.x=0;
  //player.velocity.y=0;
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
  
  //player.animation = "standing";
  
  

}

function draw() {


  player.velocity.x = 0;
  
  if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)){
    if (keyIsDown(LEFT_ARROW)){
      player.mirrorX(-1);
      player.velocity.x = -2;
    } 
    if (keyIsDown(RIGHT_ARROW)){
      player.mirrorX(1);
      player.velocity.x = 2;
    }
    player.position.y = 350;
    //player.changeAnimation("running");
  }
  
  if (keyIsDown(UP_ARROW) && player.getAnimationLabel() != "jumping" ){
      player.velocity.y = -5;
      if (player.position.y <= 250){
          player.position.y = 350;  
      }
    player.changeAnimation("jumping");
  }
  
  
  if(!keyIsDown(LEFT_ARROW)  && !keyIsDown(RIGHT_ARROW) && !keyIsDown(UP_ARROW)){
    player.changeAnimation("standing");
    player.velocity.x = 0;
    player.position.y = 350;  
    if (player.position.y >= 250){
        player.position.y = 350;  
    }
  }
  
  if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)){
    player.changeAnimation("running");
  } //else {
    //player.changeAnimation("standing");
  //}
  
  console.log("This is the current animation: " + player.getAnimationLabel()); 
  //console.log("This is the x velocity" + player.velocity.x); 
  //console.log("This is the x position" + player.position.x);
  //console.log("This is the y velocity" + player.velocity.y);
  //console.log("This is the y position" + player.position.y);
  
  background(color(0,100,190));
  camera.off();
  image(bgImg);
  drawSprite(player);
  drawSprite(ground);
  
}








