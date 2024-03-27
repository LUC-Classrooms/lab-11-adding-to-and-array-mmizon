
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1); //create a new array of one element and assign it to "dots"

function setup() { //will run once 
  createCanvas(500, 300); //make canvas
  dots[0] = new Dot(width/2, height/2); //puts created dots in the center of the canvas
}

function draw() { //draw the below code on the canvas. runs continually unless otherwise coded
  background(200); //sets background color to grey
  
  for(let i = 0; i < dots.length; i++){ //creates a loop running the below code
    dots[i].move(); 
    dots[i].display(); 
  }
  textSize(24); //creates a textbox with text size 24
  fill(100, 0, 200); //makes text color purple
  text("'dots' array length: " + dots.length, 100, 100); //makes text say "'dots' array length:" then the numnber of however make dots on onscreen 
  /* the number in the text updates continually to adjust to how many dots are created 
  /*

}

function mousePressed(){
  let obj = new Dot(mouseX, mouseY);
  dots.push(obj);

  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */

}


function Dot(X, Y){
  
  this.x = X;
  this.y = Y;
  this.w = random (20, 50);
  this.sx = random(-5, 5);
  this.sy = random(-5, 5);
  this.r = random(0, 255);
  this.g = random(0, 255);
  this.b = random(0, 255);
  
  this.display = function(){
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.w, this.w);
  }
  
  this.move = function(){
    this.x += this.sx;
    this.y += this.sy;
    
    if (this.x < 0 || this.x > width){
        this.sx *= -1;
    }
    if (this.y < 0 || this.y > height){
        this.sy *= -1;
    }
  }
    
}
