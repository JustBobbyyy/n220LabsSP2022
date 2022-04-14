//Bobby Ezenwelu
//n220
//4/12/2022
//Events

/*let element = document.getElementById("eventTest");
element.addEventListener("click", itsClicked)

function itsClicked(){
    console.log("Yes");
}*/



let element = document.getElementById("eventTest");
element.addEventListener("click", itsClicked);

//get the attribute 
let response = element.getAttribute("data-response");
console.log(response);


function itsClicked(event) {
    event.target.innerHTML = "I've been clicked";
    event.target.style.backgroundColor = "#999";


    //get the attribute 
    let response = event.target.getAttribute("data-response");
    event.target.innerHTML = response;

}



