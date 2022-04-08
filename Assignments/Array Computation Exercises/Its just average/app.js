//Bobby Ezenwelu  
//n220
//4/7/2022
//Its just average


let txtAverage = document.getElementById("txtAverage");
let dvMath = document.getElementById("dvMath")
let dvClacs = document.getElementById("dvCalcs")
let sum = 0;
let average = 0;

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