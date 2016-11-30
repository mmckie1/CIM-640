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
var button;
var instructions;
// String containing the most recently detected speech.
var verse; 
// Array of String containing the most recently detected speech. 
var verseArray = [];

function setup() {
    
    //graphics
    createCanvas(800, 400);
		//background(255, 255, 255);
		//fill(0, 0, 0, 255);
		
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
		
		drawRightCanvas();
		image(rightCanvas, 400, 0);
		//drawBookCover();
		
		button = createButton('start');
		button.position(580,height/2);
		button.mousePressed(startReading
		
		instructions = createElement('Click Start to begin reading!');
		instructions.position(200,100);
    

}

function draw() {
  
  drawLeftCanvas();
  
  image(leftCanvas, 0, 0);


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
  //rightCanvas.textSize(15);
  //rightCanvas.textAlign(CENTER);
  //rightCanvas.text("Click Start to begin reading!",200,100);



}

function drawBookCover() {
  var x = 550;
  var y = 250;
  var bounce = 2;
  
  strokeWeight(2);
  scribble.scribbleRect(600,height/2, 250, 300);
  fill(0,0,0);
  textSize(12);
  text("The Very Hungry Caterpillar", 600, 100);

  y = y + bounce;
  
  if (y > 300 || y < 250){
    bounce = bounce * -1;
  }
    
  //Caterpillar
  for (var i = 0; i < 6; i++) {
    fill('rgb(0,255,0)');
    scribble.scribbleEllipse(x,y,20,50);
    x = x + 20;
  }
  fill(255,255,255);
  strokeWeight(1);
  ellipse(650,240,5,5);
  ellipse(655,240,5,5);
}

function mousePressed() {
  start = true; 
}

function startReading() {
    drawBookCover();
}
