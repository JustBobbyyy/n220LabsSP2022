//Bobby Ezenwelu
//n220
//4/12/2022
//Color Changer

//bring out the div from the HTML
let element = document.getElementById("eventTest");
//Using only one event handler, write event listeners to respond 
//to a click on each element. 
element.addEventListener("click", firstColor);


//create a function that will basically respond to the information in the HTML
function firstColor(event){
    

    let response = event.target.getAttribute("data-response");
    event.target.style.backgroundColor = response;
}