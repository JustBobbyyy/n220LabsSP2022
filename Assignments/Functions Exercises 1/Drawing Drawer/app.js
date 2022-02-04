//Bobby Ezenwelu
//n220
//2/3/2022
//Drawing Drawer


//create the object I want to make which are keys in this case
// give the keys some properties

let Keys = {
    height: 20,
    width: 20,
    color: "D3D3D3",
    weight: 5,
    numKeys: 3,
};

function setup(){
    //create canvas
    createCanvas(800,400);
    //change the background to a random color
    background(150,133,157)
}
//now make sort of version of "keys" I guess
function draw(){
    drawKey(mouseX,mouseY);
    
}
function drawKey(x,y){
    fill(Keys.color);

    circle(mouseX,mouseY, Keys.width, Keys.height);

    fill(Keys.color);
    line(mouseX,mouseY,10,20);
}







