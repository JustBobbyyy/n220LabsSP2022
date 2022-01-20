console.log("It works");
function setup(){
    var red= "#FF0000";
    
    createCanvas(600,400)
noStroke();

background(red)
}

function draw(){
    fill (214,41,0)
    rect(70, 60, 300, 50);


    fill (200,0,0);
    circle( 100, 100, 30);

    stroke(2);
    line(0, 500, 200, 20)
}