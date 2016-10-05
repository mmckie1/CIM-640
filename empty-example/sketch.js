var player0;
var playerImg;
function setup() {
  createCanvas(500,500);
  //playerImg = loadImage("assets/Standing-mario.gif");
  //player0 = new players(width/2,height/2,playerImg);
  player = createSprite(width/2,height/2,40,40);
  var myAnimation = player.addAnimation("standing", "assets/Standing-mario.gif");
  
  player.addAnimation("running", "assets/Running-mario_01.png","assets/Running-mario_02.png","assets/Running-mario_03.png","assets/Running-mario_04.png");
  player.addAnimation("jumping", "assets/Jumping-mario.gif");
  player.addAnimation("dead", "assets/Dead-mario_01.png", "assets/Dead-mario_02.png")
  player0 = new players(width/2,height/2,myAnimation);
}

function draw() {
  background(255);
  player0.display();

  
}

function players(tempW,tempH,tempAnimation){
  this.x = tempW;
  this.y = tempH;
  this.img = tempImg;
  
  this.display = function(){
    image(this.img, this.x, this.y);
    //player = createSprite(screenW/2,screenH/2,40,40);
  }
}
