//Bobby Ezenwelu  
//n220
//4/7/2022
//Check Win


//create a div, input and a button
//bring the div and the input out of html
let txtWin = document.getElementById("txtWin");
let dvFind= document.getElementById("dvFind");

//create a function for the button that 
//Uses a loop to check to see if there are three "1s" in a row in the array
// Displays the word "winner" or "not winner" on the document depending on the result
function numberOne(){
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
