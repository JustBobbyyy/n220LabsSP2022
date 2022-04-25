//Bobby Ezenwelu
//n220
//4/12/2022
//Tic-Tac-Toe

//bring out the div from the HTML
let element = document.getElementById("spotPicker");

element.addEventListener("click", bigLine);

function bigLine(event){
    event.target.innerHTML= "X"
    console.log(spotPicker)
}


/*function setup() {
    //make the canvas 
    createCanvas(500, 500)
};

function draw() {
    background(200,200,200);
    line(300, 300, 300, 20);
    stroke(20);
    line(170, 300, 170, 20);
    stroke(20);
    //make the lines that go from left to right
    line(150, 250, 170, 100);
    stroke(20);
    
}*/