//p5.speech is a JavaScript library that provides simple, 
//clear access to the Web Speech and Speech Recognition APIs, 
//allowing for the easy creation of sketches that can talk and listen.

//Designed to support the creation of new works of computational 
//literature, the RiTa† library provides tools for artists and 
//writers working with natural language in programmable media


// new P5.SpeechRec object 
var myRec = new p5.SpeechRec();
// do continuous recognition
//myRec.continuous = true;

//new p5.scribble object
var scribble = new Scribble();

var leftCanvas;
var rightCanvas;
var book = [];
var pageText = [,"In the light of the moon a little egg lay on a leaf.", 
              "On Sunday morning the warm sun came up and pop! - out of the egg came a tiny and very hungry Caterpillar.",
              "He started to look for some food.", "On Monday he ate through 1 apple. But he was still humgry.", 
              "On Tuesday he ate through 2 pear, but he was still hungry.", "On Wednesday he ate through 3 plums, but he was still hungry."]; 
var pageNumber = 0;

var catArray = [];

//Button variables
var startButton;
var nextPage;

//Boolean variables
var instructions;
var start = false;
var next = false;
var previous = false;

//images 
var leaf;

// String containing the most recently detected speech.
var verse; 
// Array of String containing the most recently detected speech. 
var verseArray = [];


function preload() {
  //leaf = loadIamge("assets/");
  
}

function setup() {
    
  createCanvas(800, 400);
		
	// instructions:
	textSize(12);
	textAlign(CENTER);
	text("Click Start to begin reading!", 600,100);
	
	//left canvas will be display area for story text	
	leftCanvas = createGraphics(400,400);
	
	//rightCanvas will be display are for story animation
	rightCanvas = createGraphics(400,400);

	//lexicon is a list of vocabulary words
	lexicon = new RiLexicon(); 
	scribble.bowing = 0.1;
	scribble.roughness = 2;

	
	startButton = createButton('start');
	startButton.position(580,height/2);
	startButton.mousePressed(startReading);
  
  //instructions
	instructions = createElement('h2', 'Click Start to begin reading!');
	instructions.position(450,100);
		
	//array of objects
	//page animations 
	book[1] = {
  
    drawPage: function() {
     //moon face
     scribble.scribbleEllipse(700, 90, 100, 100);
     
     // moon left eye
     scribble.scribbleEllipse(680, 90, 10, 10);
     
     //moon right eye
     scribble.scribbleEllipse(720, 90, 10, 10);
     
     //moon eyebrow
     stroke(0);
     scribble.scribbleLine(660,80,690,80);
     scribble.scribbleLine(700,80,740,80);
     
     //moon mouth
     scribble.scribbleCurve(660,100,690,100,660,100,690,200);

     //image(leaf,0,0);
    }
	}
		
	book[2] = {
  
    drawPage: function() {
     scribble.scribbleRect(700, 90, 100, 100);
    }
	}
		
	book[3] = {
		xpos: 550,
		ypos: 250,
  
    drawPage: function() {
      for (var i = 0; i < 6; i++) {
        fill(0,random(255),0);
        scribble.scribbleEllipse(this.xpos,this.ypos,20,50);
        this.xpos = this.xpos + 20;
      }
      if (this.xpos = 400){
        this.xpos = 550;
      }
     //eyes
     fill(255,255,255);
     strokeWeight(1);
     ellipse(650,240,5,5);
     ellipse(655,240,5,5);
   }
	}
		
	book[4] = {
    drawPage: function() {
      scribble.scribbleRect(700, 90, 100, 100);
    }
	}
	
	book[5] = {
    drawPage: function() {
      scribble.scribbleEllipse(700, 90, 100, 100);
    }
	}
	
	book[6] = {
    drawPage: function() {
      scribble.scribbleRect(700, 90, 100, 100);
    }
	}	
		
	
}

function draw() {
  frameRate(5);
  
  background(255, 100, 255);
  drawRightCanvas();
	image(rightCanvas, 400, 0);
  if (start === true) { 
    drawBookCover();
    drawNextButton();
  }
  
  if (next === true){
    drawLeftCanvas();
    image(leftCanvas, 0, 0);
    drawRightCanvas();
	  image(rightCanvas, 400, 0);
    drawRightCanvas();
	  image(rightCanvas, 400, 0);
    text(pageText[pageNumber], 0, 100, 400, 100);
    book[pageNumber].drawPage();
  }

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

function drawNextButton() {
  	nextButton = createButton('next');
		nextButton.position(700,370);
		nextButton.mousePressed(nextPage);
}

function mousePressed() {
}

function startReading() {
  start = true; 
  instructions.html('');
  startButton.remove();
}

function nextPage() {
  next = true;
  pageNumber++;
  
  if(pageNumber >= pageText.length){
    pageNumber = 1;
  }
  
}


