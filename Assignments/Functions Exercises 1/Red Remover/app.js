//Bobby Ezenwelu
//n220
//2/3/2022
//Red Remover

//Create a canvas and set the background to black
function setup(){
    createCanvas(600,300);
    background(0);
}
//setup function draw
function draw(){
   //set noRes to what it is suppose to equal to from the instructions
    noRed= removeRed(color(170, 200, 150));
    //draw a circle and then fill it with the argument noRed
    fill(noRed)
    circle(250,200,150);


}
//Create a removeRed function then make sure it works by using console.log
// Also make sure you return the color without red
function removeRed(c){
    console.log(c);
    (c.setRed(0) );
    return c
}





