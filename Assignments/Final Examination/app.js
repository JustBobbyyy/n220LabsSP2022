//Bobby Ezenwelu
//n220
//2/23/2022
//Final Examination Program 1

//first make a div and then bring the div out on to the html
let motorsDiv= document.getElementById("motors");

// create an array that has the words from the instructions in it
let wheels=["cars", "bikes", "vans", "trucks", "velocipedes"];


// now create a variable so that it takes out the first entry or in this case word
//which is "cars" so it will not show up on the document
let firstElement = wheels.shift();
console.log(wheels)


//create a loop that will go through the array and bring out the the things in the array
//onto the document
for(let i =0; i< wheels.length; i++){
    motorsDiv.innerHTML += wheels [i] + " ";
    
};


