// Bobby Ezenwelu
//2/1/2022
//In Class Exercise

let ballX = 10;
let ballY = 10;
let ballcolor ="#990000";

let objBall = {
    x: 12,
    y: 10, 
    ballColor: "9900000",
    size: 25
};


function setup (){
    createCanvas(652, 399);

    fill(222,211,211)
    circle(objBall.x, objBall.y, objBall.size)
    
}
