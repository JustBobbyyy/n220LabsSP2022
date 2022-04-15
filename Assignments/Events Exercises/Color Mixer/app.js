//Bobby Ezenwelu
//n220
//4/12/2022
//Color Mixer


//bring out the div from the HTML
let showResults = document.getElementById("showResults");

//create three global variables for the colors
let r = 100;
let g = 110;
let b = 120;


showResults.style.backgroundColor = "rgb(" + r + ","+ g + "," + b +")"

//create three functions that basically repsond to the actions in the HTML
//also that will not go over 255 becuase that is the highest rgb can go

function colorRed(event){
    let response = event.target.getAttribute("data-value");
    response = parseInt(response);
    event.target.style.backgroundColor = response;
    if(r < 255){
        r += response;
    }else if(r > 255){
        r = 255;
    };

    showResults.style.backgroundColor = "rgb(" + r + ","+ g + "," + b +")"

};


function colorGreen(event){
let response = event.target.getAttribute("data-value");
    response = parseInt(response);
    event.target.style.backgroundColor = response;
    if(g < 255){
        g += response;
    }else if(g > 255){
        g = 255;
    };
    showResults.style.backgroundColor = "rgb(" + r + ","+ g + "," + b +")"
}


function colorBlue(event){
let response = event.target.getAttribute("data-value");
    response = parseInt(response);
    event.target.style.backgroundColor = response;
    if(b < 255){
        b += response;
    }else if(b > 255){
        b = 255;
    };
    showResults.style.backgroundColor = "rgb(" + r + ","+ g + "," + b +")"
}