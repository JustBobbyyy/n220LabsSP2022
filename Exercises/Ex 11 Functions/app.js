//Bobby Ezenwelu
//n220
//3/29/2022
//FUNCTIONS

// Three things about functions are:
// Group together logically related code to be reused
// Can PRODUCE A VALUE
//"Task oriented" - calculateDistance, addBurgerPatty
//Take inputs - parameters
// Fuctions are a way to package up a block of code to run on command
// There are two types of scopes local and global
//Local: Variables created inside of a function. Only accessible inside that function
//Global: Variables created outside of a function. Accessible from anywhere 
// -inside of your program (even within functions)


//global variables

let playerOne = sayHelloMultiple("Bob", 12);
let playerTwo = sayHelloMultiple("Tom", 10);
let p1div = document.getElementById("p1div");
let p2div = document.getElementById("p2div");
let score = 10;

//setup
updateUI();


function increaseScore(){
    score++;
    playerOne = sayHelloMultiple("Bob", score);
    playerTwo = sayHelloMultiple("Tom", score);
    updateUI()
}
function updateUI(){
    p1div.innerHTML= `Player one: ${playerOne}`;
    p2div.innerHTML= `Player two: ${playerTwo}`;
}



//create a function 
function sayHelloMultiple(name, timestoSay){
    let workingName = name;
    let lastLetter= name[name.length-1];
    console.log(lastLetter);
    for(let i = 0; i < timestoSay; i++){
        workingName += lastLetter 
    }
    return workingName;
};


/*
//Example of a global variable
var awesomeVariable = "Pretty cool"

myFunc()

function myFunc(){
    console.log(awesomeVariable);
};

function myOtherFunction(){
    console.log(awesomeVariable);
}
*/
