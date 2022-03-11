//Bobby Ezenwelu

//1. Input one button in the html
//2. When button is clicked
//3. The the word in the input and repeat it threee times 

let Name= document.getElementById("Name");
let dvoutCome= document.getElementById("outCome");


function bob(){
    //get the input
    let Username = Name.value;
     //TODO:TRIPLE THE INPUT
   // let users= `${Username}, ${Username}, ${Username}` or by
   let val="";
   for (let i = 0; i <5; i++){
       val += Username + " ";
   }
   
    
    dvoutCome.innerHTML = val;
    console.log(users);
};

let FoodName= document.getElementById("FoodName");
let dvwhatFood= document.getElementById("whatFood");

function food(){
    let Username = FoodName.value;
    let users= `${Username}, ${Username}, ${Username}`
    
    dvwhatFood.innerHTML = users;
    console.log(users);
};

