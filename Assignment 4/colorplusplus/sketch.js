var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var boundary4 = 0;
var boundary5 = 0;
var boundary6 = 0;
var topBoundary = 0;
var bottomBoundary = 0;

var buttonSize = 100;

var currentArea = "";


var brushColor = "black";
var currentAreaColor = "green"

var brushColorArray = ["black","green","red","blue","yellow","orange","purple"];
var i = 0;
var r, g, b;

var brushSize = 10;

function setup() {
  createCanvas(600, 500);
  boundary0 = 0;
  boundary1 = 100;
  boundary2 = 200;
  boundary3 = 300;
  boundary4 = 400;
  boundary5 = 500;
  boundary6 = width;
  topBoundary = 400;
  bottomBoundary = height;
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  //background(255);
  //interface

  //Cycle through a Range of Colors
  fill(currentAreaColor);
  rect(boundary0, topBoundary, buttonSize, buttonSize);
  // Choose Color Randomly
  fill(r,g,b,127);
  rect(boundary1, topBoundary, buttonSize, buttonSize);
  //Make Brush Bigger
  fill("orange");
  rect(boundary4, topBoundary, buttonSize, buttonSize);
  //Make Brush Smaller
  fill("purple");
  rect(boundary5, topBoundary, buttonSize, buttonSize);

  fill(brushColor);
  ellipse(mouseX, mouseY, brushSize, brushSize);
  console.log(currentArea);
  if (mouseY >= topBoundary && mouseY < bottomBoundary) {
    if (mouseX > boundary0 && mouseX < boundary1) {
      //  console.log("area0");
      currentArea = "area0";
    } else if (mouseX > boundary1 && mouseX < boundary2) {
      //  console.log("area1");
      currentArea = "area1";
    } else if (mouseX > boundary4 && mouseX < boundary5) {
      //  console.log("area3");
      currentArea = "area2";
    } else if (mouseX > boundary5 && mouseX < boundary6) {
      //  console.log("area3");
      currentArea = "area3";
    }
  } else {
    currentArea = "";
  }
}

function mousePressed() {
  console.log(currentArea);
  if (currentArea == "area0") {
      i++;
      if (i >= brushColorArray.length){
        i=0;
      }
     brushColor = brushColorArray[i];
     currentAreaColor = brushColorArray[i];
  } else if (currentArea == "area1") {
    r = random(255);
    g = random(255);
    b = random(255);
    brushColor = color(r,g,b);
  } else if (currentArea == "area2") {
    brushSize++;
  } else if (currentArea == "area3") {
    brushSize--;
    if(brushSize < 10){
      brushSize = 10;
    }
  } else {
    brushColor = "black";
  }
}
