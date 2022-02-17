//Bobby Ezenwelu
//n220
//2/15/2022
//In Class Exercise

let alienDiv= document.getElementById("alien");

let parks= ["Holiday", "Marott", "Central", "Cool Creak"]
console.log(parks.length);

for(let i =0; i< parks.length; i++){
    alienDiv.innerHTML += parks[i]
};

parks.forEach((park)=> {
    alienDiv.innerHTML += park;
});
