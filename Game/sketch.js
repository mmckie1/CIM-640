var img;
function preload(){
 
}
function setup() {
   
  createCanvas(2560,1024);
  img = loadImage('assets/333217.jpg');
}

function draw() {
  //background(img);
  //image(img,0,0)
  image(img, 0, height/2, img.width/2, img.height/2);
}