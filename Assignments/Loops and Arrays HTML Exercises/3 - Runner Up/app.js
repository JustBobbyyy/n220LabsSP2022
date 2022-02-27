//Bobby Ezenwelu
//n220
//2/24/2022
//3 - Runner Up


//bring out the div from the html
let runDiv=document.getElementById("run");

//bring out the second div from the html
let secondPlace=document.getElementById("secondPlace");

//create the the array with random times
//cretae a console to check the values in the console
let times= [10.7, 10.55, 5.6];
console.log(times);

//now go ahead and display the second and third place signs 
let second = 0;
let third = 0;

secondPlace.innerHTML = times[1] + " seconds";
runDiv.innerHTML = times[0] + " seconds";

