var bgImg01;
var bgImg02;
var groundImg;
var ground01;
var ground02;

var title;

var collectibles;
var koopa00;
var enemy;

var player0;
var player;


var audio;
var jumpSound;
var coinSound;

var GROUND_Y = 350;
var SCENE_W = 1024;
var SCENE_H = 400;

function preload() {
  
 audio = loadSound("assets/audio/Overworld.mp3");
 jumpSound = loadSound("assets/audio/Jump.mp3");
 dieSound = loadSound("assets/audio/Dead mario.mp3")
 coinSound = loadSound("assets/audio/Coin.mp3");
} 

function setup() {
  createCanvas(500,600);
  
  jumpSound.setVolume(0.5);
  dieSound.setVolume(0.5);
  coinSound.setVolume(0.5);
  audio.setVolume(0.5);
  audio.play();

  title = loadImage("assets/Super.png")
  
  //load background image
  bgImg02 = loadImage("assets/sky_2.png");
  bgImg01 = loadImage("assets/sky.png");
  
  //load ledges
  ground01 = createSprite(250,350);
  ground01.addImage(loadImage("assets/ledge.png"));
  
  ground02 = createSprite(300,350);
  ground02.addImage(loadImage("assets/tall_ledge.png"));
  
  //load ground
  groundImg = createSprite(width/2, 390);
  groundImg.addImage(loadImage("assets/top_ground.png"));
  
  //create player sprite
  player = createSprite(0,250);

  //load different states of player
  player.addAnimation("standing", "assets/Sebastion_idle.png");
  player.addAnimation("running", "assets/Sebastion_running_01.png", "assets/Sebastion_running_02.png", "assets/Sebastion_running_03.png");
  player.addAnimation("jumping", "assets/Sebastion_jumping.png");
  player.addAnimation("dead", "assets/Sebastion_dead01.png","assets/Sebastion_dead01.png");
  
  //load coins animation
  collectibles = new Group();
  for (var i=0; i<10; i++){
    var coins = createSprite(random(0,1000),345);
    coins.addAnimation("idle","assets/coins/coins_01.png","assets/coins/coins_02.png","assets/coins/coins_03.png","assets/coins/coins_04.png");
    collectibles.add(coins);
  }
  
  enemy = createSprite(300,345);
  enemy.addAnimation("walking", "assets/enemy/koopa_standing.png","assets/enemy/koppa_walking.png","assets/enemy/koopa_standing.png");
  
  
  koopa00 = new Koopa(enemy);
  
  //create player object 
  player0 = new Sebastian(player);
}

function draw() {
  
  background(color(0,100,190));
  image(bgImg02,-450,70);
  image(title,-100,70,200,100);
  image(bgImg01,-450,70);
  //camera.on();
 
  //check if player is colliding with ground
  var curPlayerState = player0.check();
  //load player with controlls 
  player0.create(curPlayerState);
  
  //koopa00.controls();

  
  //draw other sprites ie background and ground 
  drawSprites();
  

}


function Sebastian(tempSprite){
  
  this.sprite = tempSprite;
  
  this.create = function(curState){
    
    //gravity
    this.sprite.velocity.y = 3;
    
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
      this.sprite.changeAnimation("running");
    } else {
      this.sprite.velocity.x = 0;
    }
    
    //if player is on the ground and not moving left or right 
    //the animation is standing else he is running
    if (curState == true){
      if (this.sprite.velocity.x == 0){
        this.sprite.changeAnimation("standing");
      } else {
        this.sprite.changeAnimation("running");
      }
    }
    
    //jump controls 
    if (keyIsDown(UP_ARROW) && this.sprite.position.y <= 348){
        this.sprite.velocity.y = -5;
        this.sprite.changeAnimation("jumping");
        jumpSound.play();
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
     
    this.sprite.overlap(collectibles,collect);
    
    this.sprite.overlap(enemy, die);
  
    //this.sprite.overlap(ground01);
    //this.sprite.collide(ground01); 
    //this.sprite.collide(ground02);

    camera.position.x = this.sprite.position.x;
    camera.position.y = 200;
    camera.zoom = 1.5;
    
    koopa00.controls();
  }
  
  this.check = function(){
      
    if(this.sprite.collide(groundImg)|| this.sprite.collide(ground01)||this.sprite.collide(ground02)){
      return true;
    } else {
      return false;
    }
    
  }
  
}

function Koopa(tempEne) {
  this.ene = tempEne;
  
  this.controls = function(){  
  
    if (this.ene.position.x <= 300){
      this.ene.position.x = 300;
      this.ene.mirrorX(-1);
      this.ene.velocity.x = +1;
    }
    if (this.ene.position.x >= 450){
      this.ene.position.x = 450;
      this.ene.mirrorX(1);
      this.ene.velocity.x = -1;
    }

  }
  
  
}

function collect(collector,collected) {
  collected.remove();
  coinSound.play();
}

function die(playerToDie, killer){
  playerToDie.changeAnimation("dead");
  playerToDie.bounce(groundImg);
}
  
  
