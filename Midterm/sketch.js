var bgImg;
var groundImg;

var player0;
var playerImg;
var player;

var GROUND_Y = 350;

var touchGround = false;

function setup() {
  createCanvas(512,432);
  
  //load background image
  bgImg = loadImage("assets/sky.gif");
  
  //load ground
  groundImg = createSprite(width/2, 368);
  groundImg.addImage(loadImage("assets/ground-top.gif"))
  
  //create player sprite
  player = createSprite(width/2,350);
  
  //load different states of player
  var myAnimation = player.addAnimation("standing", "assets/Standing-mario.gif");
  player.addAnimation("running", "assets/Running-mario_01.png", "assets/Running-mario_02.png", "assets/Running-mario_03.png", "assets/Running-mario_04.png");
  player.addAnimation("jumping", "assets/Jumping-mario.gif");
  
  //create player object 
  player0 = new Sebastian(player);
}

function draw() {
  
  background(color(0,100,190));
  camera.on();
  image(bgImg);
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
    
    //console.log(this.sprite.velocity.y);
    
    if(curState == true){
      this.sprite.velocity.y = 0;
    }
    
    if (curState == true && keyIsDown(UP_ARROW)) {
      this.sprite.velocity.y = -5;
    } else if (this.sprite.position.y < 325){
      //this.sprite.velocity.y = 0;
      this.sprite.position.y = 350;
    }
    
    if (curState == true){
      if (this.sprite.velocity.x == 0){
        this.sprite.changeAnimation("standing");
      } else {
        this.sprite.changeAnimation("running");
      }
    }

    //drawSprite(this.sprite);
  }
  
  this.check = function(){
      
    if(this.sprite.collide){
      return true;
    } else {
      return false;
    }
    
  }
  
  
}
  
  
