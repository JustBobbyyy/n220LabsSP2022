// Bobby Ezenwelu
//n220
//2/3/22
//In class work

let position = { x: 0, y: 0 };

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if(mouseIsPressed) {
    postion.x = mouseX;
    postion.y = mouseY;   
 }
  
  let dist = distance( postion,  {x: mouseX, y: mouseY});
  
  if(zah > 120) {
    stroke("#FF0000");
  } else (zah < 120); {
    stroke("#000000");
  }
  
  line(postion.x, postion.y, mouseX, mouseY);
}

function distance(p1, p2) {
  
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  
  //return the distance
   return Math.sqrt(dx*dx + dy*dy);
}