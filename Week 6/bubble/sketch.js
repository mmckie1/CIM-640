var bubble0;

var bubbleArray= [];



function setup() {
  createCanvas(400,400);
  //bubble0 = new bubble(random(width),random(height),100);
  
  for(var i =0; i<10;i++){
    bubbleArray.push(new bubble(random(width),random(height),100));
  }
}

function draw() {
  background(255);
  //var bubbleState = bubble0.check(mouseX,mouseY);
  //bubble0.display(bubbleState);
  //bubble0.update(bubbleState);
  
  for(var i = 0; i<bubbleArray.length; i++){
     var bubbleState = bubbleArray[i].check(mouseX,mouseY);
     bubbleArray[i].display(bubbleState);
     bubbleArray[i].update(bubbleState);
  }
  
}

function bubble (tempX,tempY,tempSize){
  
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempSize;

  this.display = function(showHide){
    if(showHide == false){
    fill(100);
    ellipse(this.x,this.y,this.diameter,this.diameter);
    }
  }
    
    this.check = function(userX,userY){
      var curDist = dist(this.x,this.y,userX,userY);

      if (curDist < 50){
        return true;
      }else{
        return false;
      }
    }
  this.update = function(runUpdate){
    if (runUpdate == true){
    this.x = random(width);
    this.y = random(height);
    }
  }
  }  