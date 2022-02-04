//Bobby Ezenwelu
//n220
//2/3/2022
//Polor Points 

//set up the three functions that is needed for this application first
//Then fill fill the functions, one function at a time
//Create a canvas and a background of a random color
function setup(){
    createCanvas(600,300);
    background(110,222,211);
}


//fill the function draw with a cricle 
//Then above that circle have the translate line above all the drawing methods
//Add the variable res to this function as well just like in the intructions
function draw(){
    translate(100,100);
    
    res= polorPoint(50);
    
    circle(res.x,res.y,10);
   
    

    

}

//For this function I would want to put r in the parentheses and set it to a nice size number
//Just like in the intructions set x and y to what it is suppose to equal to.
//Also add the return part to this function from the intructions 
function polorPoint(r){
    x=  r * Math.sin(mouseX);
    y= r * Math.cos(mouseX);
    return createVector(x,y); 
};

//Test the function

