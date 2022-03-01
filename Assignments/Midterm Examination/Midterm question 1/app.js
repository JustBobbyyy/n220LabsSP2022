//Bobby Ezenwelu
// n220
//3/1/2022
//Midterm question 1

//first bring the div out from the html

let directionsDiv=document.getElementById("directions");

//create an array with the values given from the intructions

let points=["up-", "up-", "down-", "down-", "down-", "left-", "right-", "left-", "right-", "a-", "b-", "start-"];
console.log(points);

// write a for loop to now bring these values out of the loop

for(let i =0; i< points.length; i++){
    directionsDiv.innerHTML += points [i];
};