//Bobby Ezenwelu
//n220
//Loops and Arrays
//2/21/2022

//let i= 0;
//while loops- good for when you know it WILL END, but
// not how many iterations it will take
//while(i<5)
//{
//    console.log(i);
//    i++;
//};

//console.log("Done! Final i value:  "+ i);

//know the things below

let sleepCounter= document.getElementById("sleepCounter");

//for(var i = 0; i<20; i++) {
//    sleepCounter.innerHTML += i + "sheep <br />";
//}

//console.log("Done! final y value " +i);

let fruits= ["apple", "orange", "strawberry", "balckberry", "kiwi"];
//let times= [9.86, 10.11, 7.99, 20.22];
console.log(fruits);

let statement = "My favorite fruit is: " + fruits[2];
sleepCounter.innerHTML= statement;

console.log(fruits[2])