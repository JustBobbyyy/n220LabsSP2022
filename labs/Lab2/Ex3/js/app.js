//Bobby Ezenwelu
//1/25/2022
//n220
//Puck Slide

let xPos = 0;
let yPos = 40;

let xSpeed = 2;
let ySpeed = 0;

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(144, 130, 110)
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;



    ellipse(mouseX, mouseY, 20, 20);

    if (mouseX < 200) {
        fill(3, 86, 252)
    }

    if (mouseX > 200) {
        fill(252, 3, 3);

    }

   
}