let x = 0;


function setup () {
    createCanvas(600,400);
    //draw person

   

}

function draw(){
   x=x+1;
   if(x>200) x = 0;
    fill((1+ Math.sin(frameCount / 20))* 255);
    drawPerson(mouseX, mouseY);
    fill((1+ Math.sin(frameCount / 20))* 255);
    drawPerson(mouseX - 20, mouseY- 20);
    fill(x,0,0);
    drawPerson(mouseX+ 20, mouseY+ 20);

}
//functions 
function drawPerson(x,y){
    //draw person
     circle(x,y,40);
    circle(x-7,y-2,5);
    circle(x+7,y-2,5);
    square(x+5,y+15,10);
    square(x-15,y+15,10);
}
