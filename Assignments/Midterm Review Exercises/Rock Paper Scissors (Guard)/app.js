//Bobby Ezenwelu
//n220
//3/3/2022

//set the computer to zero
let computerNum = 0;

//bring the divs out from the html
let life = document.getElementById("life");
let you= document.getElementById("you");
let them = document.getElementById("them")

// set life to zero then set the inner html of life to life num
let lifeNum = 0;
life.innerHTML = lifeNum;

//set the inner html of you and them to""", so it can give space
you.innerHTML= "";
them.innerHTML= "";

//now make a functions for each instances of rock,paper, scissors, guard
//in the function make sure it has some sort of randomizer for rock, paper, scissors
// also in the functions set the computer to zero
//in the functions copy life.innerHTML = lifeNum
//in the functions set the you.innerHTML to either rock,paper, or scissors depending on the function
//in the functions set the them.innerHTML to either rock,paper, or scissors depending on the function
//also make two else if per function for the other two possibilities 

function check1(){
    computerNum = Math.floor(Math.random() * 3);
    if(computerNum === 0){
        life.innerHTML = lifeNum;
        you.innerHTML= "Rock";
        them.innerHTML= "Rock";
    }else if(computerNum === 1){
        lifeNum-= 1;
        life.innerHTML = lifeNum;
        you.innerHTML="Rock";
        them.innerHTML="Paper";
    }else if(computerNum === 2){
        lifeNum+= 1;
        life.innerHTML = lifeNum;
        you.innerHTML="Rock";
        them.innerHTML="Scissors";
    }
}

function check2(){
    computerNum = Math.floor(Math.random() * 3);
    if(computerNum === 0){
        lifeNum+= 1;
        life.innerHTML = lifeNum;
        you.innerHTML="Paper";
        them.innerHTML="Rock";
    }else if(computerNum === 1){
        life.innerHTML = lifeNum;
        you.innerHTML="Paper";
        them.innerHTML="Paper";
    }else if(computerNum === 2){
        lifeNum-= 1;
        life.innerHTML = lifeNum;
        you.innerHTML="Paper";
        them.innerHTML="Scissors";
    }
}

function check3(){
    computerNum = Math.floor(Math.random() * 3);
    if(computerNum === 0){
        lifeNum-= 1;
        life.innerHTML = lifeNum;
        you.innerHTML="Scissors";
        them.innerHTML="Rock";
    }else if(computerNum === 1){
        lifeNum-= 1;
        life.innerHTML = lifeNum;
        you.innerHTML="Scissors";
        them.innerHTML="Paper";
    }else if(computerNum === 2){
        life.innerHTML = lifeNum;
        you.innerHTML="Scissors";
        them.innerHTML="Scissors";
    }
}

function check4(){
    lifeNum-= 0.5;
    life.innerHTML = lifeNum;
    you.innerHTML= "Guard";
}