var pupilY = 50;
var pupilX = 150;
var x = 100;

var offsetX = 0;
var offsetY = 0;

var clickHere = false;
var blu = 'blue';
var message = false;

function setup() {
  createCanvas(500, 500);
//   background(0,255,0);

 
}

function draw() {
    background(0,255,0);
    //define color for head)
    var brwn = color(210,105,30);
    fill(brwn);
    //head
    ellipse(200,100, 200, 200)
    fill('white')
    //eyes
    ellipse(150,50,100,100);
    ellipse(250,50,100,100);
   
    
    var blck = color(65);
    fill(blck);
    // pupils
    offsetX = map(mouseX, 0, width, -10,10);
    offsetY = map(mouseY, 0, width, -10,10)
    ellipse(pupilX+offsetX, pupilY+offsetY,50,50);
    ellipse(pupilX+100+offsetX,pupilY+offsetY,50,50);
    
    //whiskers
    //line(150, 200, 100, 150);

    //nose
    rect(150, 150, 100, 100, 40);
    fill('black');
    //text("Click Here", 20,30);
    //fill(blu);
    //rect(10,20,80,40);
  
  if(clickHere == true){
    fill(blu);
    rect(10,20,80,40,20);
    fill('black');
    textSize(15);
    text("Click Here", 15,40);
  }
  
    if (message == true){
    hello = "Hi, my name is Bob."
    fill('white');
    rect(300,300,150,100, 10);
    fill('black');
    textSize(20);
    text(hello,310,300,150,100);
  }
}
  function mouseMoved(){
    clickHere = true;
}

  function mousePressed(){
    var d = dist(mouseX,mouseY,10, 20)
      if (d<50){
        message = true;
      }
  }
  
  

  

