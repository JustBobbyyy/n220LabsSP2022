let size = 5;

function setup(){
    
    
    createCanvas(800,600);

}
    
      
        
        

   

function draw () { 
    background(0);
    
    circle(mouseX,mouseY, size);
    if (size <50){ 
        if (mouseIsPressed){
          size = size + 1   
        }
    }
    console.log(size)
         
       


}
