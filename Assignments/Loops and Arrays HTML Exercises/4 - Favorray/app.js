//Bobby Ezenwelu
//n220
//2/24/2022
//4 - Favorray

//bring out the div from the html
let best=document.getElementById("best")


//create an array with m favorite things
let favs= ["basketball", "working out", "fried rice", "coaching", "sleeping"];

//let statement = favs [0] + " is one of my favorite things ";

//make a loop that brings the loop the values out of the loop
for(var i= 0; i<favs.length; i++){
    best.innerHTML += favs[i] + " is one of my favorite things <br>" ;
}

//let statement = favs [3] + " is one of my favorite things ";
//best.innerHTML= statement;