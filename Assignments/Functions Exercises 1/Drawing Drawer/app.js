//Bobby Ezenwelu
//n220
//2/3/2022
//Drawing Drawer


//create the object I want to make which are oranges in this case
// give the keys some properties

let Orange= {
    height: 20,
    width: 20,
    color: "#fc7b03",
    weight: 5,
    calories: 45,
};

function setup(){
    //create canvas
    createCanvas(800,400);
    //change the background to a random color
    background(150,133,157)
}
//now make sort of version of "orange" I guess
function draw(){
    drawOrange(mouseX,mouseY);
    
}
// make a function for the oranges basically function drawOrange
function drawOrange(x,y){
    //create a circle but with some of the values being mouseX and mouse Y just like in the instructions
    fill(Orange.color);

    circle(mouseX,mouseY, Orange.width, Orange.height);

    fill(Orange.color);
    line(10,10,20);
}







