var num = 12345;
var num1 = 2;
var pupilY = 50;
var pupilX = 150;
var x = 100;

function setup() {
  createCanvas(500, 500);
   background(0,255,0);
    
 
}

function draw() {
    
    //define color for head & eyes)
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
    ellipse(pupilX,pupilY,50,50);
    ellipse(pupilX+100,pupilY,50,50);
    
    //whiskers
    //line(150, 200, 100, 150);

    //nose
    rect(150, 150, 100, 100, 40);
    fill('black');
    text("Click Here", 10,30);
  
}

function mousePressed() {
  hello = "Hi, my name is Bob."
  fill('white');
  rect(300,300,150,100, 10);
  fill('black');
  textSize(20);
  text(hello,310,300,150,100);
  
}

