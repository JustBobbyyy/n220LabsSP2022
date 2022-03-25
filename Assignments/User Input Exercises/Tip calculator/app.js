//Bobby Ezenwelu
//n220
//3/21/2022
//Tip Calculator

// I brought out the input and divs from the html and brought it here onto javascript
let txtMoney = document.getElementById("txtMoney");
let TotalResult= document.getElementById("TotalResult");
let tipResult = document.getElementById("tipResult");


//Now make a function that will allow me to show the tip and the total in the console
//make a local variable for tip and the total
//then add the tip with the user input togethter for the total.
function moneyTip(){
    let tip = txtMoney.value * .2;
    let final = txtMoney.value + tip;
    let tips = tipResult.value;
    
    console.log( "Tip: $" + tip + " Total: " + final);
};