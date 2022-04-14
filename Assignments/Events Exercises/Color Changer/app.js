//Bobby Ezenwelu
//n220
//4/12/2022
//Color Changer

let element = document.getElementById("eventTest");
//Using only one event handler, write event listeners to respond 
//to a click on each element. 
element.addEventListener("click", firstColor);

function firstColor(event){
    

    let response = event.target.getAttribute("data-response");
    event.target.style.backgroundColor = response;
}