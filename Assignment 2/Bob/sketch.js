var pupilY = 50;
var pupilX = 150;
var x = 100;

var offsetX = 0;
var offsetY = 0;

var clickHere = false;
var blu = 'blue';
var message = false;
var i = 0;
var messageArray = new Array("Hi my name is Bob!", "I am Morgan's Spirit Animal.");

function setup() {
  createCanvas(500, 500);
   
 
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


  // When mouse moves reveal "click Here" button  
  if(clickHere == true){
    fill(blu);
    rect(10,20,80,40,20);
    fill('black');
    textSize(15);
    text("Click Here", 15,40);
  }

  //Reveal text box with message  
    if (message == true){
      fill('white');
      rect(300,300,150,100, 10);
      fill('black');
      textSize(20);
      text(messageArray[i],310,300,150,100);
    }  
  }

  //When mouse moves
  function mouseMoved(){
    clickHere = true;
}
  //When the user clicks the mouse
  function mousePressed(){
    //Check if mouse is on "click here" button
    var d = dist(mouseX,mouseY,10, 20)
      if (d<50){
        message = true;
      }
     
     i++;  
     if (i >= messageArray.length){
       i = 0;
     }
  }
  
  
  

  

