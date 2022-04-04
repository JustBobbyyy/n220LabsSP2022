//Bobby Ezenwelu
//n220
//3/31/2022
//Make Random

//let dvresults= document.getElementById("results").rannumber;





//Create a function that generates and returns a random whole number between 0 and 10. 

/*function results(){
    let number= 10
    console.log(number)
    let rannumber = Math.floor(Math.random() *number)
    return dvresults
    console.log(rannumber)
    
}
*/

//when clicked runs a function that: - Uses that function to generate a random number.-
// - Displays that number on the screen. 
/*function generateNumber(){
    let res = results()
    dvresults.innerHTML= res
    dvresults.innerHTML= "test";
}
*/


//I created a nested function that allows my to call a function -
//-to generate a random number
function generateNumber(){
    createRandom();
};


//create a function that generates a random number between 0 and 10
//also display the random number in a h1
function createRandom(){
    let num = Math.round(Math.random()* 10);
    document.getElementById("results").innerHTML = num
}



