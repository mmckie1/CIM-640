var randomPositionX = 0;
var randomPositionY = 0;
var numberOfEllipse = 300;
var r, g, b;
function setup() {
  createCanvas(500, 500);
  
  background(255);
  r = random(255);
  g = random(255);
  b = random(255);
 



}

function draw() {
  background(255);
   for (var i = 0; i < numberOfEllipse; i++) {
    randomPositionX = random(width);
    randomPostitionY = random(height);
    if (randomPositionY = random(height)){
      frameRate(10);
      r = random(255);
      g = random(255);
      b = random(255);
      fill(color(r,g,b))
      ellipse(randomPositionX, randomPostitionY, 10, 10);
      rect(randomPositionX, randomPositionY,random(30),30)
     
    }
   }
}
  