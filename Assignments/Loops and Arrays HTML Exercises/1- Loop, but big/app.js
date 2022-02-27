//Bobby Ezenwelu
//n220
//2/23/2022
//Loop, but Big

// bring the div out from the html
let bagsDiv= document.getElementById("bags");

// make your array with the numbers in the instructions 
//make a console to see the numbers in the console
let numbers= ["1000", "2000", "3000", "4000", "5000"]
console.log(numbers);

//make a loop where it brings ou the vaules of the array

for(let i =0; i< numbers.length; i++){
    bagsDiv.innerHTML += numbers [i] + " ";
};