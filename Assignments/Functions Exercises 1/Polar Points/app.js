//Bobby Ezenwelu
//n220
//2/3/2022
//Polor Points 

function setup(){
    createCanvas(800,600);

}


function draw(){
    background(110,222,211);
    circle(400,300,200)
}

function polorPoint(r){
    x=  r * Math.sin(mouseX);
    y= r * Math.cos(mouseX);
};


