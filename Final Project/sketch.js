//p5.speech is a JavaScript library that provides simple, 
//clear access to the Web Speech and Speech Recognition APIs, 
//allowing for the easy creation of sketches that can talk and listen.

//Designed to support the creation of new works of computational 
//literature, the RiTa† library provides tools for artists and 
//writers working with natural language in programmable media


// new P5.SpeechRec object 
var myRec = new p5.SpeechRec();
var scribble = new Scribble();
// do continuous recognition
//myRec.continuous = true;

var leftCanvas;
var rightCanvas;
var catArray = [];

var start = false;
var startButton;
var instructions;
// String containing the most recently detected speech.
var verse; 
// Array of String containing the most recently detected speech. 
var verseArray = [];

function setup() {
    
    createCanvas(800, 400);
		
		// instructions:
		textSize(12);
		textAlign(CENTER);
		text("Click Start to begin reading!", 600,100);
		
		leftCanvas = createGraphics(400,400);
		rightCanvas = createGraphics(400,400);

		//lexicon is a list of vocabulary words
		lexicon = new RiLexicon(); 
		scribble.bowing = 0.1;
		scribble.roughness = 2;
		
		//Pages to read
		//drawRightCanvas();
		//image(rightCanvas, 400, 0);
		
		//Animation
    drawLeftCanvas();
    image(leftCanvas, 0, 0);
		//drawBookCover();
		
		startButton = createButton('start');
		startButton.position(580,height/2);
		startButton.mousePressed(startReading);
		

		instructions = createElement('h2', 'Click Start to begin reading!');
		instructions.position(450,100);
		
		//controlls 
		triangle(300, 10, 200,50,100,20)

    
}

function draw() {
  frameRate(5);
  drawRightCanvas();
	image(rightCanvas, 400, 0);
  if (start == true) { 
    drawBookCover();
  }

}

function pageOne() {
  
}

function drawLeftCanvas() {
  leftCanvas.background(0,0,0);
  leftCanvas.fill(255,255,255);
  leftCanvas.textSize(20);
  leftCanvas.text("this is the left!", 50,50);
  
}

function drawRightCanvas() {
  rightCanvas.background(255, 100, 255);
  rightCanvas.fill(0,0,0);
}

function drawBookCover() {
  var xpos = 550;
  var ypos = 250;
  var xleft, xright, ytop, ybottom;
  
  //calculate the x and y coordinates for the border points of the hachure 
  xleft   = 480;
  xright  = 720;
  ytop    = 60;
  ybottom = 340;
  
  // the x coordinates of the border points of the hachure
  var xCoords = [xleft, xright, xright, xleft];
  // the y coordinates of the border points of the hachure
  var yCoords = [ytop, ytop, ybottom, ybottom];
  // the gap between two hachure lines
  var gap     = 3.5;
  // the angle of the hachure in degrees
  var angle   = 315;
  
  // fill the rect with a hachure
  strokeWeight(2);
  stroke(255,255,255);
  scribble.scribbleFilling(xCoords,yCoords,gap,angle);
  
  
  stroke(0)
  scribble.scribbleRect(600,height/2, 250, 300);
  
  //title
  fill(0,0,0);
  strokeWeight(1);
  textSize(12);
  text("The Very Hungry Caterpillar", 600, 100);
  text("by Eric Carle", 600, 150);
  
  
  //Caterpillar 
  //body
  for (var i = 0; i < 6; i++) {
    fill(0,random(255),0);
    scribble.scribbleEllipse(xpos,ypos,20,50);
    xpos = xpos + 20;
  }
  //eyes
  fill(255,255,255);
  strokeWeight(1);
  ellipse(650,240,5,5);
  ellipse(655,240,5,5);
  
  
}

function mousePressed() {
  start = true; 
}

function startReading() {
    instructions.html('');
    startButton.remove();
}
