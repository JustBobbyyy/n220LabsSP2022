//Bobby Ezenwelu
//n220
//2/9/2022
//Bouncing Ball Refactor

//create a canvas
function setup() {
    createCanvas(600, 400)
};

//make a "ball" object
let ball = {
    x: 30,
    y: 40,
    size: 50,
    velocityX: 10,
    velocityY: 10,
};
//create a function draw 
//
function draw() {
    //get the ball to move in different directions but make sure it is not that fast
    ball.x += ball.velocityX + 1;
    ball.y += ball.velocityY + 1;
    //create four if statements that would stop the ball from going past the four walls
    if (ball.x > 600) {
        ball.x = 600;
        ball.velocityX *= -1;

    };
    if (ball.y > 400) {
        ball.y = 400;
        ball.velocityY *= -1;
    };

    if (ball.x < 0) {
        ball.x = 0;
        ball.velocityX *= -1;
    };

    if (ball.y < 0) {
        ball.y = 0;
        ball.velocityY *= -1;
    };

    console.log(ball.y)
    //create a background with a random color
    background('blue');
    // create a circle with using the varibaled from the global ball object
    circle(ball.x, ball.y, ball.size);
    fill('black');

};



