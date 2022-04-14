//Bobby Ezenwelu  
//n220
//4/7/2022
//Check Win Function


// basically for this assignment just pretty much do everything you did
//for the regular check win assignment but make a function inside the function I made
// that basically Accept an array of numbers
// Loop through the array checking for the win condition
// Return true if a win is found, and false is if is not found

let txtWin = document.getElementById("txtWin");
let dvFind= document.getElementById("dvFind");


function numberOne(){
    var stringVals = txtWin.value

    
    let myArray= stringVals.split(",");
    
    check();
}

function check(){
    var stringVals = txtWin.value
    let myArray= stringVals.split(",");
    let count =0;
    // let i =1
    for(let i=0;i< myArray.length; i++){
       if(myArray[i] == 1){
        count++;
       }else{
           count=0;
       }
       if(count == 3){
       dvFind.innerHTML= "winner"
        console.log("winner");  
       }else if(count < 3 && myArray.length - 1 == i){
        dvFind.innerHTML= "not winner" 
        console.log("not winner");  
       };
    };
}