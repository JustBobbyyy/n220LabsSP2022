//Bobby Ezenwelu
//n220
//3/21/2022
//Greeter

// bring out the div and input from the html
let txtName = document.getElementById("txtName");
let dvNameResult = document.getElementById("NameResult");


// make a function that will alllow me to output the phrase "Hello {Name}" to the developer console, 
//with {Name} being the value the user put into the input field
//make two local variables that would make a phrase hello with the user input
function generateName(){
    let userName = txtName.value;
    let name = `Hello ${userName}`;
    dvNameResult.innerHTML = name;
    console.log(name);
};