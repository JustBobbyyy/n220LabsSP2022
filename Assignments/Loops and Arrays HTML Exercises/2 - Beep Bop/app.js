//Bobby Ezenwelu
//n220
//2/24/2022
//2 - Beep Bop

//bring the div out the html 
let soundsDiv=document.getElementById("sounds");

//make a quote with nothing it basically ""
let txt = "";

//make an array with the words in the instructions
//make a console to check the values from the array
let noises= ["beep", "bop", "beepbop" ]
console.log(noises);

//make a loop to bring the values out the array
for(let i =1; i< 26; i++){

    //When the iterand is divisible by 3, write the word "beep" instead
//When the iterand is divisible by 5, write the word "bop" instead
//When the iterand is divisible by 3 AND 5, write "beepbop" instead
    
    if(i%3==0){
        txt += "Beep ";
        soundsDiv.innerHTML = txt;
    }else if(i%5 == 0){
        txt += "bop ";
        soundsDiv.innerHTML = txt;
    }else if(i%5 != 0 && i%3 != 0){
        txt += "beepbop ";
        soundsDiv.innerHTML = txt;
    }
};


/*noises.forEach((noises)=> {
    soundsDiv.innerHTML += noises;
});*/