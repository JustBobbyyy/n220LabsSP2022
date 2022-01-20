//Bobby Ezenwelu
//1/18/2022
//n220


//setup the application
function setup() {
    var blue = [50, 158, 168];
    //create canvas size of 800 - big enough to draw on

    createCanvas(800,600);
    
    //make backgroud to blue
    background(blue)
fill(blue)
 circle(220,200,310)

    stroke(255,200,200);
    strokeWeight(37);

//make some circles for eyes for your weird face
//fill those eyes with nice colors
//make a big circle for the face
   
fill(255,171, 167);
  circle(300,150,50);
  circle(300,150,80);
  fill(255, 171, 167);
  circle(145,150,80);

  //make a smile and fill it as well
  fill(200,99,88);
  arc(225, 275, 100, 100, 0, PI, CHORD);

  // try and make a nose for your face if possible
  triangle(300, 250, 200, 350, 170, 200);

  
   
}
