//Bobby Ezenwelu
//n220
//3/31/2022
//Is Divisible By Seven

// I want to create an application that with an input and a button

//now bring out the inputs on to here 
let txtNumber= document.getElementById("txtNumber");
let dvupdateNumber = document.getElementById("updateNumber");

function bySeven(){
    //update a div on the page to tell the user if what the user typed into the input -
    //-is divisible by 7 or not
    let number = txtNumber.value
    if(number %7==0)return ("true");
    else return ("false")
    //dvupdateNumber.innerHTML = number %7 == 0
}


// now make another function that should return either true if it is -
//-divisible  or false if it is not
function results(){
    let res = bySeven()
    dvupdateNumber.innerHTML= res 
}