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
var pageText = ["The End","In the light of the moon a little egg lay on a leaf.", 
              "On Sunday morning the warm sun came up and pop! - out of the egg came a tiny and very hungry Caterpillar.",
              "He started to look for some food.", "On Monday he ate through 1 apple. But he was still humgry.", 
              "On Tuesday he ate through 2 pear, but he was still hungry.", "On Wednesday he ate through 3 plums, but he was still hungry."]; 
var pageNumber = 0;


//Button variables
var startButton;
var nextPage;

//Boolean variables
var instructions;
var start = false;
var next = false;
var previous = false;
var end = false;

//images 
var leaf;
var rightApple;
var leftApple;
var appleWhole;
var appleimg;
var rightPear;
var leftPear;
var wholePear;
var rightPlum;
var leftPlum;
var wholePlum;

// String containing the most recently detected speech.
var verse; 
// Array of String containing the most recently detected speech. 
var verseArray = [];


function preload() {
   
  
}

function setup() {
  //assign dimensions for canvas  
  createCanvas(800, 400);
  //create images 
	

	/* initial instructions do:
	    "Click start to begin reading"
	    create start button
	*/

	
	/*left canvas will be display area for story text do:
	    create left canvas graphic object 
	*/

	
	/*rightCanvas will be display are for story animation do:
	  creat right canvas graphic object 
	*/

		
	/*create an array of objects that will be the animation 
	  for each page do 
	*/
	

function draw() {
  frameRate(5);
  
  background(255, 100, 255);
  /*draw the right canvas
  if user clicks on start do:
    draw book cover
    draw next button
    */
 
  /*if user clicks on next button do:
  draw left canvas
  draw right canvas 
  displat page text on the left canvas
  display animation on the right canvas
  */
  
  /*if page number is comperable to the length of the page text array do:
    next = false*/
  
  



}

// functions that will draw left canvas elements 
function drawLeftCanvas() {
 
}

//function that will draw right canvas elements 
function drawRightCanvas() {

}

//function that draws the book cover 
function drawBookCover() {
  
  
}

//function that draws the next button 
function drawNextButton() {
  /*create next button
  position it in the botton right hand corner of the canvas
  call the nextPage() function when you click on it */  

}

function mousePressed() {
}

//when start button is click do:
function startReading() {
  /*start is true
  remove intial instructions 
  remove start button*/

}

//function called when the next button is clicked do:
function nextPage() {
  /*next is true
  incrament page number
  if page number is great than or equal to the length of th page text array 
  page number equals 0
  */
 
  }
  
}



