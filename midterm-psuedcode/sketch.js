//to preload background images and sound 
function preload() {

  
} 

function setup() {
  
  //set volume for sound 

  //create ledge sprite and load ledge image 

  
  //load ground sprite and load ground image 
 
  //load goal post sprite and load goal post image 

  //create player sprite
  //create player object 

  //load different states of player

  
  //spawn coins randomly throughtout the game
  //for loop to add coins to group

  
  //create enemy sprite with different states 
  //create enemy object 

  
  //create player object 
  player0 = new Sebastian(player);
 
 
}

function draw() {
  
  background(color(0,100,190));
  image(bgImg02,-450,70);
  image(title,-100,70,200,100);
  image(bgImg01,-450,70);
  

  
 
  //check if player is colliding with ground
  //load player with controlls 
  //throw boolean statement 

  
  
  //draw sprites 
  

}

//player object 
function Sebastian(tempSprite){
  
  this.sprite = tempSprite;
  
  //function that controls player movement and interaction within the world 
  this.create = function(curState){
    
   /*   if left key or right key is pressed 
          if left is pressed do:
          face left 
          move left on the x-axis 
            
          else if right key is pressed do:
          face right 
          move right on the x-axis
        change the player state too running 
        else 
        the player is not moving 
   */
    
    
    //if player is on the ground and not moving left or right 
      //the animation is standing else he is running
    
    
    /* if up key is pressed and the player is on the ground 
        the player is moving up on the y-axis 
        the player state changes to jumping
        play jumping sound
    */
   
   
    /* when player overlaps coin do:
        call collect function 
    */

    /* when player overlaps with enemy 
        call overlapHandle function 
    */

  
  
    // calll enemy.controls function 

    //call score function 
    
    //finish function 
    
    
  }
  
  //function that check if player is touching the ground 
  this.check = function(){
    
    /* if the player collides with the ground 
        or the ledges
          return true
          else
          return false
    */
   
    
  }
  
}

//Enemy Object 
function Koopa(tempEne) {
  this.ene = tempEne;
  
  //function that set the boundries for enemy 
  this.controls = function(){  
  
    /* if the enemy is less than or equal to 300 
        the postion of the enemy is 300 
        the enemy is facing left
        the enemy is moving along the x-axis in a positive direction
       if the enemy is greater than or rqual to 450
        the position of the enemy is 450 
        the enemy us facing right
        the enemy is moving along the x-axis in a negative direction 
    */
    
  }
  
}
// finish line object 
function FinishLine(tempfin) {
  this.fin = tempfin;
  // function that controls the movement of the goal slider 
  this.controls = function(){
  
  
    
  }
  
}

//function to run to get the game score
function Score(tempX) {
  
}

//remove tokens when ovelapped and plays token sound
function collect(collector,collected) {
 
}

//function for when player interacts with enemy
function overlapHandle(tempPlayer,tempEnemy){
  
  //setting immovable to true makes the sprite immune to bouncing and displacment 

  
  //if player overlaps from the top of Enemy 
 
    //change enemy animation to squish and remove enemy
   
    //player bounces against temp Enemy 
 

    //if player overlaps from the side call die function
    
  }
  
}

//function for the death of player 
function die(playerToDie, killer){
  
  //remove player from canvas 
 

  //stop background audio 
 
  
  //play dieing audio 

  
  //call gameover function 
 

}
//function for winnig the game 
function Winner(tempThing){

}

//function lose the game 
function gameOver() {
  
}

//function for reseting the game 
function reset(){

}
  
  
  
