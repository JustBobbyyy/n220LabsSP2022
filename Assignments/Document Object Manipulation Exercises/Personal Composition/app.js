//Bobby Ezenwelu
//n220
//2/17/2022
//Personal Composition

//let newEl=document.createElement("peace");

//customize
//newEl.innerHTML= "Testing";
//newEl.style.backgroundColor= "#ebcf34";
//newEl.style.width="40px"

//place the object on the page 
//document.body.appendChild(newEl);

//create a object like thing but in the index html and not here in javascript

//create a div id and in that same line, put a onmouseover function

//create a array from the the example that was taught to us in class on Tuesday
let places = ["Holiday", "Marott", "Central", "Cool Creak"]
let dvSquare= document.getElementById("square");

//create a function that turns the background to red when the mouse is over the area
function turnRed(){
    dvSquare.style.backgroundColor= ("#ff0000");
    //create something that puts some sort of phrase onto the square area
    //get that phrase from the array above in line 21
    dvSquare.innerHTML+="circle"
    dvSquare.innerHTML = places[0]

};
