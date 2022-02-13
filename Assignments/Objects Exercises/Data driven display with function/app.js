//Bobby Ezenwelu
//n220
//3/8/2022
//Data-driven display w/ function

//Make an object with all the properties for a graphic on the screen - width, height, color, position.
let Banana={
    height: 15,
    width: 15,
    weight: 10,
    color:"#fff700",
    size:70,
    thinness:80



};

//create a function setup
//create a canvas and make the background a random color
function setup(){
    createCanvas(800,600);
    background("#4287f5");

};
//setup a function draw for the banana object
function draw(){
    drawBanana(Banana);
    
}
//setup a function for the banana object so the the vaebales of the banabana can passthrough to this function
function drawBanana(objfruit){
    fill(objfruit.color);
//create an arc "banana" with the x and y variabale being the mouse
    arc(mouseX, mouseY, 80, objfruit.thinness, objfruit.size, PI + QUARTER_PI, CHORD);
    


}
