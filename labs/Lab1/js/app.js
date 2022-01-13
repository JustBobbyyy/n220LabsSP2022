console.log("It works");
function setup(){
    createCanvas(600,400)
}

function draw(){
    circle(300,mouseX,mouseY, framecount/50)
}