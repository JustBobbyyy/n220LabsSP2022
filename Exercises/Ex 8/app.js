//Bobby Ezenwelu
//n220
//In Class Work
//2/22/2022

//first create an object
//Then fill the object with its width, height, size etc
let objphone ={
    height:80,
    width:150,
    size:20,
    weight:5,
    mouseX:10,
    mouseY:10,
};

//create a canvas and give it a random color
function setup(){
  createCanvas(600,400);
    background(111,211,111);

};

function draw(){
    objphone.mouseX = mouseX
    rect(objphone.mouseX,100,objphone.height,objphone.width)
    circle(150,200,40)
    
};