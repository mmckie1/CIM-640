var bgImg;

var player0;
var playerImg;
var player;

var groundImg;
var ground;

function setup() {
  createCanvas(512,432);
  
  groundImg = loadImage("assets/ground-top.gif");
  ground = createSprite(width/2,368); //image 800x200
  ground.addImage(groundImg);
  //playerImg = loadImage("assets/Standing-mario.gif");
  bgImg = loadImage("assets/sky.gif");
  player = createSprite(width/2,height/2,40,40);
  
  var myAnimation = player.addAnimation("standing", "assets/Standing-mario.gif");
  player.addAnimation("running", "assets/Running-mario_01.png","assets/Running-mario_02.png","assets/Running-mario_03.png","assets/Running-mario_04.png");
  player.addAnimation("jumping", "assets/Jumping-mario.gif");
  player.addAnimation("dead", "assets/Dead-mario_01.png", "assets/Dead-mario_02.png");
  //player0 = new players(width/2,height/2,playerImg);
  player0 = new players(width/2,height/2,player);
  
}

function draw() {
  //background(255);
  background(color(0,100,190));
  camera.off();
  image(bgImg);
  drawSprite(ground);
  player0.display();
  
  
  console.log("This is the current animation: " + player.getAnimationLabel()); 
  //console.log("This is the x velocity " + player.velocity.x); 
  //console.log("This is the x position " + player.position.x);
  //console.log("This is the y velocity " + player.velocity.y);
  console.log("This is the y position " + player.position.y);

}

function players(tempW,tempH,tempSprite){
  this.x = tempW;
  this.y = tempH;
  this.sprite = tempSprite;
  
  this.display = function(){
    
    if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)){
      if (keyIsDown(LEFT_ARROW)){
        this.sprite.mirrorX(-1);
        this.sprite.velocity.x = -2;
      }
      if (keyIsDown(RIGHT_ARROW)){
        this.sprite.mirrorX(1);
        this.sprite.velocity.x = 2;
      }
      this.sprite.position.y = 350;
      this.sprite.changeAnimation("running");
    }
    
    if (keyIsDown(UP_ARROW) && this.sprite.animation != "jumping" && this.sprite.position.y == 350 ){
      this.sprite.velocity.y = -5;
      this.sprite.changeAnimation("jumping");
    }
    
    if(!keyIsDown(LEFT_ARROW)  && !keyIsDown(RIGHT_ARROW) && !keyIsDown(UP_ARROW)){
      this.sprite.changeAnimation("standing");
      this.sprite.velocity.x = 0;
      this.sprite.position.y = 350;  
      if (player.position.y >= 250){
          this.sprite.position.y = 350;  
      }
    }
    
    drawSprite(this.sprite);
  }
  
  
}


