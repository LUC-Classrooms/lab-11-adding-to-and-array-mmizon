
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1); //create a new array of one element and assign it to "dots"

function setup() { //will run once 
  createCanvas(500, 300); //make canvas 500 pixels wide and 300 pixels tall 
  dots[0] = new Dot(width/2, height/2); //puts created dots in the center of the canvas
} //close function instructions

function draw() { //draw the below code on the canvas. runs continually unless otherwise coded
  background(200); //sets background color to grey
  
  for(let i = 0; i < dots.length; i++){ //creates a loop running the below code
    dots[i].move(); //array called "dots" from set up uses function "move"
    dots[i].display(); //array called "dots" from set up uses function "display" as defined on code lines 50-53. Basically shows the dots. 
  } //close function instructions
  textSize(24); //creates a textbox with text size 24
  fill(100, 0, 200); //makes text color purple
  text("'dots' array length: " + dots.length, 100, 100); //makes text say "'dots' array length:" then the numnber of however make dots on onscreen 
  /* the number in the text updates continually to adjust to how many dots are created 
  /*

} //close function instructions

function mousePressed(){ //function. if the mouse is pressed it will do as coded below
  let obj = new Dot(mouseX, mouseY); //sets "obj" as a new dot, set at the given coordinates as defined in the variables below. 
  dots.push(obj); //adds new items to the array. allows us to add more dots. 

  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */

}


function Dot(X, Y){ //creates the function of dot so we can reuse it. 
  
  this.x = X; //refers to x 
  this.y = Y; //refers to y 
  this.w = random (20, 50); //refers to w. sets the ellipse to be a random size
  this.sx = random(-5, 5); //refers to sx. allows ellipse to move random direction along the x axis
  this.sy = random(-5, 5); //refers to sx. allows ellipse to move random direction along the y axis
  this.r = random(0, 255); //refers to r. sets random color code for red input 
  this.g = random(0, 255); //refers to g. sets random color code for green input 
  this.b = random(0, 255); //refers to b. sets random color code for blue input 

  /*the above r, g, and b variables set the color of the dots to a random color every time a new one is created 
  /*
  
  this.display = function(){ //defines the display function 
    fill(this.r, this.g, this.b); //use the determined variables above to assign a random color to the ellipse so it can be displayed
    ellipse(this.x, this.y, this.w, this.w); //creates the ellipse in the center of the canvas with a random size
  } //close function instructions
  
  this.move = function(){ //defines the function "move" 
    this.x += this.sx; //uses the above-determined variable sx to randomly move the dot vertically 
    this.y += this.sy; //uses the above-determined variable sx to randomly move the dot horizontally 
    
    if (this.x < 0 || this.x > width){ //sets horizontal boundaries for the dot so it doesn't go off screen 
        this.sx *= -1; //tells it to go the opposite direction if it hits the edge of the horizontal boundaries 
    } //close if statement instructions
    if (this.y < 0 || this.y > height){ //sets vertical boundaries for the dot so it doesn't go off screen 
        this.sy *= -1; //tells the dot to go the opposite direction if it hits the edge of the vertical boundaries 
    } //close if statement instructions
  } //close function instructions
    
} //close function instructions
