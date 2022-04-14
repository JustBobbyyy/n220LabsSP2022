//Bobby Ezenwelu
//n220
//4/12/2022
//Flash Cards


//bring the div out from the HTML
// that add an addEventListner as well just lik in hte video
let element = document.getElementById("Questions");
element.addEventListener("click" , askQuestions);

//create a function that will basically respond to the actions that you made in the HTMLS
function askQuestions(event){
    let answer =event.target.getAttribute("data-answer");
    event.target.innerHTML = answer;
}