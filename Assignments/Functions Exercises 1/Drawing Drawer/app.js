//Bobby Ezenwelu
//n220
//2/3/2022
//Drawing Drawer


//create the object I want to make which are keys in this case
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
//now make sort of version of "keys" I guess
function draw(){
    drawOrange(mouseX,mouseY);
    
}
function drawOrange(x,y){
    fill(Orange.color);

    circle(mouseX,mouseY, Orange.width, Orange.height);

    fill(Orange.color);
    line(x,y,10,20);
}







