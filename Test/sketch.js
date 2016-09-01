var num = 12345;
var num1 = 2;
var pupilY = 50;
var pupilX = 150;
var x = 100;

function setup() {
  createCanvas(500, 500);
   background(0,255,0);
    
  
 
 // comments are for pussies 
 /* long comments is the way to go 
 about to write a book in this bitch */
 
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
    //line(30, 20, 100, 75);
    
    //nose
    rect(150, 150, 100, 100, 40);
    
    
  
}