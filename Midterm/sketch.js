var bgImg;
var groundImg;

var player0;
var playerImg;
var player;

var GROUND_Y = 350;
var SCENE_W = 1024;
var SCENE_H = 400;

function preload() {
  
} 

function setup() {
  createCanvas(500,600);
  
  //load background image
  bgImg = loadImage("assets/sky.png");
  
  //load ground
  groundImg = createSprite(width/2, 390);
  groundImg.addImage(loadImage("assets/top_ground.png"));
  
  //create player sprite
  player = createSprite(0,250);
  
  //load different states of player
  var myAnimation = player.addAnimation("standing", "assets/Sebastion_idle.png");
  player.addAnimation("running", "assets/Sebastion_running_01.png", "assets/Sebastion_running_02.png", "assets/Sebastion_running_03.png");
  player.addAnimation("jumping", "assets/Jumping-mario.gif");
  
  //create player object 
  player0 = new Sebastian(player);
}

function draw() {
  
  
  background(color(0,100,190));
  image(bgImg,-450,70);
  //camera.on();
 
  var curPlayerState = player0.check();
  player0.create(curPlayerState);
  drawSprites();
  
}

function Sebastian(tempSprite){
  
  this.sprite = tempSprite;
  //console.log(this.sprite);
  
  this.create = function(curState){
    
    this.sprite.velocity.y = 2;
    
    if(keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)){
      if (keyIsDown(LEFT_ARROW)){
        //face and move left 
        this.sprite.mirrorX(-1);
        this.sprite.velocity.x = -2;
      } else if (keyIsDown(RIGHT_ARROW)){
        //face and move right 
        this.sprite.mirrorX(1);
        this.sprite.velocity.x = 2;
      }
    } else {
      this.sprite.velocity.x = 0;
    }
    
    //console.log(curState);
    
    if (curState == true){
      if (this.sprite.velocity.x == 0){
        this.sprite.changeAnimation("standing");
      } else {
        this.sprite.changeAnimation("running");
      }
      this.sprite.velocity.y = 0;
    }
  
    
     if(this.sprite.position.x < 0){    
      this.sprite.position.x = 0;  
     }
     if(this.sprite.position.y < 0){    
      this.sprite.position.y = 0;  
     }
     if(this.sprite.position.x > 1000){
      this.sprite.position.x = 1000;  
     }
     if(this.sprite.position.y > SCENE_H){
      this.sprite.position.y = SCENE_H;
     }
     
     
    camera.position.x = this.sprite.position.x;
    camera.position.y = 200;
    camera.zoom = 1.5;
  }
  
  this.check = function(){
      
    if(this.sprite.collide(groundImg)){
      return true;
    } else {
      return false;
    }
    
  }
  
  
}
  
  
