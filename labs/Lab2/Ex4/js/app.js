//Bobby Ezenwelu
//1/26/2022
//n220
//Ever Larger, until not

// create variables for my x,y and the diameter
var x = 200;
var y = 200;
var diameter = 1;
//setup the application
function setup() {

    //create a canvas
    createCanvas(400, 400);

}
//create a draw function
//change the background and ellipse to diffrent colors to see better
function draw() {
    background(150, 150, 130);
    
    fill(105, 205, 105);
    // create my circle or ellipse
     ellipse(x, y, diameter, diameter); 
     // make the circle even bigger
     diameter +=1;
     // make the circle or ellipse go back down to one after reaching a size of 200
    if (diameter > 200) {
        diameter = 1;
        diameter +=1;
        
    }

}


