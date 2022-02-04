//Bobby Ezenwelu
//n220
//2/3/2022
//Polor Points 

function setup(){
    createCanvas(600,300);
    background(110,222,211);
}



function draw(){
    translate(100,100);
    
    res= polorPoint(50);
    
    circle(res.x,res.y,10);
   
    

    

}

function polorPoint(r=20){
    x=  r * Math.sin(mouseX);
    y= r * Math.cos(mouseX);
    return createVector(x,y); 
};

//Test the function

