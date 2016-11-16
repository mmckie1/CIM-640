//p5.speech is a JavaScript library that provides simple, 
//clear access to the Web Speech and Speech Recognition APIs, 
//allowing for the easy creation of sketches that can talk and listen.

//Designed to support the creation of new works of computational 
//literature, the RiTa† library provides tools for artists and 
//writers working with natural language in programmable media


// new P5.SpeechRec object 
var myRec = new p5.SpeechRec();
// do continuous recognition
myRec.continuous = true;

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
		textSize(32);
		textAlign(CENTER);
		text("say something", width/2, height/2);
		
		//lexicon is a list of vocabulary words
		lexicon = new RiLexicon();  
    
    //function sets callback to fire when synthesis engine has reported a result.
    myRec.onResult = getResult;
    myRec.start();

}

function draw() {
  //why draw when you can talk!?!
   // step through the array with this for loop
  for(var i = 0; i < verseArray.length; i++) {
    //if word in array is a verb
    if(lexicon.isVerb(verseArray[i]) === true) {
      //fill('red');
      ellipse(10,10,10);
    }
  }
  
}

function getResult() {
  
  // if it is true that something was said
  if(myRec.resultValue === true) {
    //turn background green 
    background(192, 255, 192);
    //declare verse as a string containing the most recently detected speech
    verse = myRec.resultString;
    //print 'verse' in the middle of the canvas 
    text(verse, width/2, height/2);
    //split 'verse' into an array 
    verseArray = verse.split(" "); 
  }
  // step through the array with this for loop
 
    
  
}