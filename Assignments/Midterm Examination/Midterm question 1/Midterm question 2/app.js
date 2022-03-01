//Bobby Ezenwelu
// n220
//3/1/2022
//Midterm question 1

//Write an application that has a div with the word "yes" inside of it.

let commandDiv= document.getElementById("command");
console.log(command)

//create a function called yes from the html
function yes(){
    command.innerHTML+="yes";
};

//create a function so when the mouse is clicked it will also say no sometimes
//somehow figure out a way so that in this function when the mouse it clicks twice
//it show "yes" once and "no" once
function no(){
    if(mouseClicked("yes")<2);
    command.innerHTML+="no";

};
