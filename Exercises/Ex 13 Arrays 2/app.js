//Bobby Ezenwelu  
//n220
//4/7/2022
//Arrays 2/ Computation 

//arrays are a collection of variables 

let txtExample= document.getElementById("txtExample");
let dvFound= document.getElementById("dvFound");

let fakeSocial = [
    {name: "James", update: "Today i SAW A COOL DUDE"},
   {name: "Jacob", update: "I like nike shoes" },
   {name: "Macy", update: "I like the game of basketball"},
   {name: "Jake", update: "Some people are not who they say they are"}
]
//let socialNetworks = ["Instagram", "Twitter,", "Snapchat", "Facebook"]

/*function breakString(){
    let sentence = txtExample.value;


    console.log(sentence);

    let splitSentence = sentence.split(" ");
    console.log(splitSentence);
}*/


function calcScores(){
    var stringVals = txtExample.value

    
    let myArray= stringVals.split(",")
    
    //reduce array
    let sum= 0;

    for(let i=0;i< myArray.length; i++){
        sum += Number(myArray[i]);

    }

    console.log(sum);
}



/*function findInsta(){
    let lookingFor = "Instagram"

    console.log(lookingFor.toUpperCase());

    for(let i=0; i < socialNetworks.length; i++){
        if(socialNetworks[i].toUpperCase()==lookingFor.toUpperCase()){
            dvFound.innerHTML = "found it at "+ i;
            break;
        }
    }
}*/

/*function findInsta(){

    var element= socialNetworks.find(function(item) {
        return item == "Instagram"
    })
    console.log(element);
}*/

/*function findInsta() {
    console.log(fakeSocial[2].update)
    
    for (var i = 0; i< fakeSocial.length; i++) {
        let newEL = document.createElement("div")
        newEL.innerHTML= fakeSocial[i].name + ": "+ fakeSocial[i].update;
        dvFound.appendChild(newEL);
    }
    
}*/