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

var myFont;
var score = 0;

var goal01;
var goal02;
var goal_slider;
var finish;


var audio;
var jumpSound;
var coinSound;
var wonSound;

var GROUND_Y = 350;
var SCENE_W = 1024;
var SCENE_H = 400;

function preload() {
  
  //myFont = loadFont("assets/font/LCD_Solid.tff")
  
  audio = loadSound("assets/audio/Overworld.mp3");
  jumpSound = loadSound("assets/audio/Jump.mp3");
  dieSound = loadSound("assets/audio/Dead mario.mp3");
  wonSound = loadSound("assets/audio/Course-clear.mp3") 
  coinSound = loadSound("assets/audio/Coin.mp3");
  
  title = loadImage("assets/Super.png");
  //load background image
  bgImg02 = loadImage("assets/sky_2.png");
  bgImg01 = loadImage("assets/sky.png");
  
  goal01 = loadImage("assets/Goal-front.gif");
  goal02 = loadImage("assets/Goal-back.gif");
  //goal03 = loadImage("assets/Goal-slider.gif");
  
} 

function setup() {
  createCanvas(500,600);
  
  jumpSound.setVolume(0.5);
  dieSound.setVolume(0.5);
  coinSound.setVolume(0.5);
  audio.setVolume(0.5);
  audio.play();

  //load ledges
  ground02 = createSprite(250,350);
  ground02.addImage(loadImage("assets/ledge.png"));
  
  ground01 = createSprite(300,350);
  ground01.addImage(loadImage("assets/tall_ledge.png"));
  
  //load ground
  groundImg = createSprite(width/2, 390);
  groundImg.addImage(loadImage("assets/top_ground.png"));
  
  goal01 = createSprite(1020,286);
  goal01.addImage(loadImage("assets/Goal-front.gif"))
  
  goal02 = createSprite(985,286);
  goal02.addImage(loadImage("assets/Goal-back.gif"));
  
  goal_slider = createSprite(1000,345);
  goal_slider.addImage(loadImage("assets/Goal-slider.gif"));
  
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
  enemy.addAnimation("squish", "assets/enemy/squish_koppa02.png","assets/enemy/squish_koopa01.png","assets/enemy/squish_koppa02.png");
  
  finish = new FinishLine(goal_slider);
  
  koopa00 = new Koopa(enemy);
  
  //create player object 
  player0 = new Sebastian(player);
}

function draw() {
  
  background(color(0,100,190));
  image(bgImg02,-450,70);
  image(title,-100,70,200,100);
  image(bgImg01,-450,70);
  

  
 
  //check if player is colliding with ground
  var curPlayerState = player0.check();
  //load player with controlls 
  player0.create(curPlayerState);
  
  //koopa00.controls();
  //console.log(player0);
  
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
    if (keyIsDown(UP_ARROW) && this.sprite.position.y <= 348.5){
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
      Winner(this.sprite);
     }
     if(this.sprite.position.y > SCENE_H){
      this.sprite.position.y = SCENE_H;
     }
     
    this.sprite.overlap(collectibles,collect);
    
    this.sprite.overlap(enemy, overlapHandle);
  
    //this.sprite.overlap(ground01);
    //this.sprite.collide(ground01); 
    //this.sprite.collide(ground02);

   // console.log(this.sprite);
    camera.position.x = this.sprite.position.x;
    camera.position.y = 200;
    camera.zoom = 1.5;
    
    koopa00.controls();
    
    Score(this.sprite.position.x);
    
    finish.controls();
    
    
  }
  
  this.check = function(){
      
    if(this.sprite.collide(groundImg)|| this.sprite.collide(ground01)||this.sprite.collide(ground02)){
      return true;
    } else {
      return false;
    }
    
  }
  
}

//function sets the boundaries for koopa Enemy 
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

function FinishLine(tempfin) {
  this.fin = tempfin;
  
  this.controls = function(){
  
    if (this.fin.position.y <= 250) {
      this.fin.position.y = 250;
      this.fin.velocity.y = 1;
    }
    if (this.fin.position.y >= 345) {
      this.fin.position.y = 345;
      this.fin.velocity.y = -1;
    }
  
    
  }
  
}

function Score(tempX) {
  fill("#ffffff").strokeWeight(2).textSize(10);
  stroke(0);
  textFont("Georgia");
  text("Coins: " + score ,tempX-150,19);
}

//remove remove tokens when ovelapped and plays token sound
function collect(collector,collected) {
  collected.remove();
  coinSound.play();
  score++;
}

//function for when player interacts with enemy
function overlapHandle(tempPlayer,tempEnemy){
  
  //setting immovable to true makes the sprite immune to bouncing and displacment 
  tempEnemy.immovable = true;
  
  //if player overlaps from the top of Enemy 
  if (tempPlayer.position.y <= 330){
    //change enemy animation to squish and remove enemy
    tempEnemy.changeAnimation("squish");
    //player bounces against temp Enemy 
    tempPlayer.bounce(tempEnemy);
  } else {
    //if player overlaps from the side call die function
    die(tempPlayer,tempEnemy);
  }
  
}

//function for the death of player 
function die(playerToDie, killer){
  
  //remove player from canvas 
  playerToDie.remove();

  //stop background audio 
  audio.stop();
  
  //play dieing audio 
  dieSound.play();
  
  //call gameover function 
  gameOver();

}
//function for winnig the game 
function Winner(tempThing){
  audio.stop();
  wonSound.play();
  tempThing.remove();
}

//function lose the game 
function gameOver() {
  var button = createButton("Restart");
  button.mousePressed(reset);
  button.position(width/2,height/2);
}

//function for reseting the game 
function reset(){
  
}
  
  
  
