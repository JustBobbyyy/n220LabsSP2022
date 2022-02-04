//Bobby Ezenwelu
//n220
//2/3/2022
//Red Remover

function draw(){
    noRed= removeRed(color(170, 200, 150));
    fill(noRed)
    circle(250,200,150);


}

function removeRed(c){
    console.log(c);
    (c.setRed(0) );
    return c
}





