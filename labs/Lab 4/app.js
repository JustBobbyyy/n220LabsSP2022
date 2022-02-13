//Bobby Ezenwelu  
//n220
//3/10/2022
//In Class Work

let tv={
    bodySize:300,
    bodyPos:100,
    screenSize:150,
    screenPos:180,
    bodyColor: 'black',
    screenColor: 'grey',

};

function setup(){
    createCanvas(500,500);
   
};

function draw(){
    if(mouseIsPressed){
        tv.bodyColor= 'grey'
    };
    
     background(150,220,111);
     fill('black');
     rect(tv.bodyPos,tv.bodyPos,tv.bodySize);
     fill('grey');
     rect(tv.screenPos,tv.screenPos, tv.screenSize);
    
     
};