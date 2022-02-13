//Bobby Ezenwelu
//n220
//3/8/2022
//Virtual "Pets"

//create the pet and its properrties
let Pet = {
    x: 1,
    y: 1,
    size: 40,
    offsetX: 0,

};

//create a function setup
//create a canvas and a random color
function setup() {
    createCanvas(800, 600);
    ;
};
//create a function draw
//create a random background
function draw() {
    background("#32a891")
    //try and bring the circle back to the mouse when I press on the mouse
    // Also try and figure out a way that the circle does not start right on the mouse
    if (mouseIsPressed) {
        Pet.offsetX--;
    } else {
        Pet.offsetX++;
        // try and make the circle go away from the mouse when I am not pressing on the mouse
    } if (Pet.offsetX < 0) {
        Pet.offsetX = 0;
    }

    //make a cricle
    circle(mouseX + Pet.offsetX, mouseY, Pet.size);
}
