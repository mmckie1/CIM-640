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
   leaf = loadImage("assets/leaf.png");
   rightApple = loadImage("assets/right_apple.png");
   leftApple = loadImage("assets/left_apple.png");
   rightPear = loadImage("assets/right_pear.png");
   leftPear = loadImage("assets/left_pear.png");
   rightPlum = loadImage("assets/right_plum.png");
   leftPlum = loadImage("assets/left_plum.png");
   
  
}

function setup() {
    
  createCanvas(800, 400);
  
	appleimg = createImg("assets/whole_apple.png");
	wholePear = createImg("assets/whole_pear.png");
	wholePlum = createImg("assets/whole_plum.png");

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
		
	//array of objects that are the page animations
	book[0] = {
	  xL: 0,
	  xR: 800,
	  yT: 0,
	  yB: 400,
	  gap: 2,
	  angle: 315,

	  drawPage:function() {
	    background(255,255,255);
	    //cover
      // the x coordinates of the border points of the hachure
      var xCoor = [this.xL, this.xR, this.xR, this.xL];
      // the y coordinates of the border points of the hachure
	    var yCoor = [this.yT, this.yT, this.yB, this.yB];
      strokeWeight(2);
      stroke(0,0,0);
      // fill the grass with a hachure
      scribble.scribbleFilling(xCoor,yCoor,this.gap,this.angle);
      textSize(70);
	    fill(255,255,255);
	    text("The End!!", width/2,height/2);
	    
	  
	  } 
	}
	book[1] = {
	  xL: 400,
	  xR: 800,
	  yT: 300,
	  yB: 400,
	  gap: 2,
	  angle: 315,
  
    drawPage: function() {
      //stars
      
      //moon face
      noStroke();
      ellipse(700, 90, 150, 150);
     
      // moon left eye
      strokeWeight(2);
      stroke(0);
      ellipse(680, 90, 10, 10);
     
      //moon right eye
      ellipse(720, 90, 10, 10);
     
      //moon eyebrow
      scribble.scribbleLine(660,80,690,80);
      scribble.scribbleLine(700,80,740,80);
     
      //moon mouth
      scribble.scribbleCurve(690,110,720,110,695,110,690,150);
     
      //grass
      noStroke();
      fill(85,255,47);
      rect(400,300,400,400);
      // the x coordinates of the border points of the hachure
      var xCoor = [this.xL, this.xR, this.xR, this.xL];
      // the y coordinates of the border points of the hachure
	    var yCoor = [this.yT, this.yT, this.yB, this.yB];
      strokeWeight(2);
      stroke(85,200,47);
      // fill the grass with a hachure
      scribble.scribbleFilling(xCoor,yCoor,this.gap,this.angle);
      
      //leaf 
      image(leaf,530,160,200,200);
      
      //egg
      noStroke();
      fill(255,255,255);
      ellipse(600, 250, 20,30);

    }
	}
		
	book[2] = {
	  xL: 400,
	  xR: 800,
	  yT: 300,
	  yB: 400,
	  gap: 2,
	  angle: 315,
	  
	  sunY: 350,
	  sunSpeed: 3,
	  sunWidth: 100,
	  sunHeight: 100,
	  
	  eggX: 560,
	  
	  xpos: 550,
		ypos: 310,
  
    drawPage: function() {
      
      //rising sun
      noStroke();
      fill(255,165,0);
      ellipse(610,this.sunY,this.sunWidth,this.sunHeight);
      
      this.sunSpeed++;
      this.sunY = this.sunY - this.sunSpeed;
      this.sunWidth = this.sunWidth + 10;
      this.sunHeight = this.sunHeight + 10;
      
      if (this.sunY < 150) {
        this.sunY = 150;
      }
      
      if (this.sunWidth > 200 && this.sunHeight > 200) {
        this.sunWidth = 200;
        this.sunHeight = 200;
      }

      //grass
      noStroke();
      fill(85,255,47);
      rect(400,300,400,400);
      // the x coordinates of the border points of the hachure
      var xCoor = [this.xL, this.xR, this.xR, this.xL];
      // the y coordinates of the border points of the hachure
	    var yCoor = [this.yT, this.yT, this.yB, this.yB];
      strokeWeight(2);
      stroke(85,200,47);
      // fill the grass with a hachure
      scribble.scribbleFilling(xCoor,yCoor,this.gap,this.angle);
      
      //leaf 
      image(leaf,530,250,100,100);
      
      
      //egg
      noStroke();
      fill(255,255,255);
      ellipse(560, 300, 10,10);
      
      //egg breaks revealing very hungry caterpillar
      if(this.sunY === 150){
        image(leaf,530,250,100,100);
        
        arc(560,300,10,10, -HALF_PI,HALF_PI);
        arc(this.eggX,300,10,10, HALF_PI,-HALF_PI);
        
        this.eggX = this.eggX - 5;
        
        if (this.eggX < 550){
          this.eggX = 550;
        }
      }
      
        if(this.eggX <= 550){
          strokeWeight(1);
          stroke(0);
          for (var i = 0; i < 6; i++) {
            fill(0,random(255),0);
            scribble.scribbleEllipse(this.xpos,this.ypos,10,20);
            this.xpos = this.xpos + 10;
          }
        this.xpos++;  
         if (this.xpos > 600){
            this.xpos = 600;
          }
        }
      
      
      
    }
    
	}
		
	book[3] = {
		xpos: 450,
		ypos: 300,
		
		xL: 400,
	  xR: 800,
	  yT: 300,
	  yB: 400,
	  gap: 2,
	  angle: 315,
  
    drawPage: function() {
      
      //rising and setting sun  
      noStroke();
      var rg = map(abs((millis()%10000)-5000),0,5000,0,255);
      //background(rg,rg,0);
      push();
      translate(0,100);
      rotate(-PI);
      rotate(map(millis()%10000,0,10000,0,TWO_PI));
      //the Sun 
      fill(255-rg,165,0);
      ellipse(650,-100,150,150);
      pop();
      
      //grass
      noStroke();
      fill(85,255,47);
      rect(400,300,400,400);
      // the x coordinates of the border points of the hachure
      var xCoor = [this.xL, this.xR, this.xR, this.xL];
      // the y coordinates of the border points of the hachure
	    var yCoor = [this.yT, this.yT, this.yB, this.yB];
      strokeWeight(2);
      stroke(85,200,47);
      // fill the grass with a hachure
      scribble.scribbleFilling(xCoor,yCoor,this.gap,this.angle);
      
      //catepillar
      strokeWeight(1);
      stroke(0);
      for (var i = 0; i < 6; i++) {
        fill(0,random(255),0);
        scribble.scribbleEllipse(this.xpos,this.ypos,20,50);
        this.xpos = this.xpos + 20;
      }
      this.xpos++;
      
      if (this.xpos > 700){
        this.xpos = 405;
      }
      
   
   }
	}
		
	book[4] = {
	  xpos: 410,
		ypos: 300,
		
	  xL: 400,
	  xR: 800,
	  yT: 300,
	  yB: 400,
	  gap: 2,
	  angle: 315,
	  
    drawPage: function() {
      frameRate(5);
      //grass
      noStroke();
      fill(85,255,47);
      rect(400,300,400,400);
      // the x coordinates of the border points of the hachure
      var xCoor = [this.xL, this.xR, this.xR, this.xL];
      // the y coordinates of the border points of the hachure
	    var yCoor = [this.yT, this.yT, this.yB, this.yB];
      strokeWeight(2);
      stroke(85,200,47);
      // fill the grass with a hachure
      scribble.scribbleFilling(xCoor,yCoor,this.gap,this.angle);
      
      //apple
      image(rightApple,610,255,50,65);
      
      strokeWeight(1);
      stroke(0);
      for (var i = 0; i < 6; i++) {
        fill(0,random(255),0);
        scribble.scribbleEllipse(this.xpos,this.ypos,20,30);
        this.xpos = this.xpos + 20;
      }
      this.xpos = this.xpos+1;
      
      appleimg.position(600,280);
      appleimg.size(30,30);

      image(leftApple,560,250,50,70);
      
      if (this.xpos > 600) {
        appleimg.hide();
      }
      
      
      noStroke();
      fill(255,165,0);
      ellipse(700, 90, 150, 150);
    }
	}
	
	book[5] = {
	  xpos: 410,
		ypos: 300,
		
	  xL: 400,
	  xR: 800,
	  yT: 300,
	  yB: 400,
	  gap: 2,
	  angle: 315,
	  
    drawPage: function() {
      //grass
      noStroke();
      fill(85,255,47);
      rect(400,300,400,400);
      // the x coordinates of the border points of the hachure
      var xCoor = [this.xL, this.xR, this.xR, this.xL];
      // the y coordinates of the border points of the hachure
	    var yCoor = [this.yT, this.yT, this.yB, this.yB];
      strokeWeight(2);
      stroke(85,200,47);
      // fill the grass with a hachure
      scribble.scribbleFilling(xCoor,yCoor,this.gap,this.angle);
      
      //pear
      image(rightPear,610,255,50,65);
      
      strokeWeight(1);
      stroke(0);
      for (var i = 0; i < 6; i++) {
        fill(0,random(255),0);
        scribble.scribbleEllipse(this.xpos,this.ypos,20,30);
        this.xpos = this.xpos + 20;
      }
      this.xpos = this.xpos+1;
      
      wholePear.position(600,280);
      wholePear.size(30,30);

      image(leftPear,560,250,50,70);
      
      if (this.xpos > 600) {
        wholePear.hide();
      }
      
      
      noStroke();
      fill(255,165,0);
      ellipse(700, 90, 150, 150);
    }
	}
	
	book[6] = {
	  xpos: 410,
		ypos: 300,
		
	  xL: 400,
	  xR: 800,
	  yT: 300,
	  yB: 400,
	  gap: 2,
	  angle: 315,
	  
    drawPage: function() {
      //grass
      noStroke();
      fill(85,255,47);
      rect(400,300,400,400);
      // the x coordinates of the border points of the hachure
      var xCoor = [this.xL, this.xR, this.xR, this.xL];
      // the y coordinates of the border points of the hachure
	    var yCoor = [this.yT, this.yT, this.yB, this.yB];
      strokeWeight(2);
      stroke(85,200,47);
      // fill the grass with a hachure
      scribble.scribbleFilling(xCoor,yCoor,this.gap,this.angle);
      
      //plum
      image(rightPlum,610,275,30,45);
      
      strokeWeight(1);
      stroke(0);
      for (var i = 0; i < 6; i++) {
        fill(0,random(255),0);
        scribble.scribbleEllipse(this.xpos,this.ypos,20,30);
        this.xpos = this.xpos + 20;
      }
      this.xpos = this.xpos+1;
      
      wholePlum.position(600,280);
      wholePlum.size(30,30);

      image(leftPlum,560,250,50,70);
      
      if (this.xpos > 600) {
        wholePlum.hide();
      }
      
      
      noStroke();
      fill(255,165,0);
      ellipse(700, 90, 150, 150);
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
    text(pageText[pageNumber], 0, 100, 400, 100);
    book[pageNumber].drawPage();
  }
  if (pageNumber === pageText.length) {
    next = false;
    end = true;
  }
  console.log(pageNumber);

}


function drawLeftCanvas() {
  leftCanvas.background(0,0,0);
  leftCanvas.fill(255,255,255);
  leftCanvas.textSize(20);
  leftCanvas.text("Page " + pageNumber, 50,50);
  
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
  var yCoords = [ ytop, ytop, ybottom, ybottom ];
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
    pageNumber = 0;
  }
  
}



