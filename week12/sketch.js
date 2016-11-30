var img;

function preload() {
  img = loadImage("assets/smile.png")
}

function setup() {
  createCanvas(400, 400);
  img.loadPixels();
}

function draw() {
  image(img,0,0);
  
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {
      var loc = (x + y*img.width)*4;
      var r = img.pixels[loc];
      var g = img.pixels[loc+1];
      var b = img.pixels[loc+2];
      var a = img.pixels[loc+3];
     
      
      if(r == 255 && g == 0 && b == 0){
        img.pixels[loc] = random(0,255);
        img.pixels[loc+1] = random(0,255);
        img.pixels[loc+2] = random(0,255);
        img.pixels[loc+3] = random(0,255);
      }
      
    }
  }
  
  img.updatePixels();
  
}