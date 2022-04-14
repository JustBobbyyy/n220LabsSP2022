//Bobby Ezenwelu
//n220
//4/12/2022
//Flash Cards

let element = document.getElementById("Questions");
element.addEventListener("click" , askQuestions);

function askQuestions(event){
    let answer =event.target.getAttribute("data-answer");
    event.target.innerHTML = answer;
}