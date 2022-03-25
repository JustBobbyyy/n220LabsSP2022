//Bobby Ezenwelu
//n220
//3/24/2022
//Password Protected 

//bring out the div and inputs from the html
var username = document.getElementById("username");
var password = document.getElementById("password");
let div = document.getElementById("check");


//make a function that includes the username and password inputs 
//and then bring 
function login() {
    if(username.value == "username" && password.value == "password"){
         div.innerHTML= "Success!"
    }else{
        div.innerHTML= "Wrong Information"
    }

};