//Bobby Ezenwelu  
//n220
//4/7/2022
//Its just average

//create two divs, a button, and an input in the html
//bring the divs and the input out of the html onto here


let txtAverage = document.getElementById("txtAverage");
let dvMath = document.getElementById("dvMath")
let dvClacs = document.getElementById("dvCalcs")

//create two variables for both the sum and the average
let sum = 0;
let average = 0;

//create a function for the button that does the following
// Takes in a list of comma-separated numbers from the user
// Splits that list into an array of numbers
// Converts the string version of the numbers into number versions
// Loops through the array and sums up the values
// Calculates the average of the array
function mathStuff() {
    var stringVals = txtAverage.value


    let myArray = stringVals.split(",")



    for (let i = 0; i < myArray.length; i++) {
        sum = sum + parseFloat(myArray[i]);

    }
    dvMath.innerHTML = "The sum: " + sum

        average = sum/( myArray.length)


    dvClacs.innerHTML = "The average: " + average
    console.log(average)


}