//Bobby Ezenwelu
//1/27/2022
//In Class Work



let x = 50
let y = 50
var greeting = "Hello World"
function setup (){
    
}
function draw(){
     createCanvas (800,600);   
    
    text("Hello World", 50 ,50);

    x = x + 50;
    y = y + 50;

    text(greeting, 50, 50);
    greeting += "d";
    
    }