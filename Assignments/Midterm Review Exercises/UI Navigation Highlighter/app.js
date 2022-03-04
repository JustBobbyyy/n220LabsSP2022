//Bobby Ezenwelu
//n220
//3/1/2022
//UI Navigation Highlighter


//First pull out the the div from html
//Make sure I bring the div out fr each and everyone of the divs that I create

let name1Div= document.getElementById("name1");
let name2Div= document.getElementById("name2");
let name3Div= document.getElementById("name3");
let name4Div= document.getElementById("name4");
let name5Div= document.getElementById("name5");
let name6Div= document.getElementById("name6");

//now set the inner html to random objects or names for each div
name1.innerHTML="phone";
name2.innerHTML="class";
name3.innerHTML="chair";
name4.innerHTML="table";
name5.innerHTML="charger";
name6.innerHTML="shoes";

//now create a function for each and every single div
// in that function make every other background color of the divs white except for the one that function is focused on
//for example "phone" will be a different color but the rest will be white
//also in each function make sure to bold the name you want specifically
//Also for the 7th div which will be added to the end of each function make sure -
//- to use an if statement then so when the certain object is clicked then it will print at the bottom

function color1(){
    name1Div.style.backgroundColor='#eb4034';
    name2Div.style.backgroundColor='#fcfcfc';
    name3Div.style.backgroundColor='#fcfcfc';
    name4Div.style.backgroundColor='#fcfcfc';
    name5Div.style.backgroundColor='#fcfcfc';
    name6Div.style.backgroundColor='#fcfcfc';

    name1.innerHTML="<b>phone</b>";
    name2.innerHTML="class";
    name3.innerHTML="chair";
    name4.innerHTML="table";
    name5.innerHTML="charger";
    name6.innerHTML="shoes";

    if(name1Div.style.backgroundColor='#eb4034'){
        name7.innerHTML+= " phone "
    }


};

function color2(){
    name1Div.style.backgroundColor='#fcfcfc';
    name2Div.style.backgroundColor='#bec2d4';
    name3Div.style.backgroundColor='#fcfcfc';
    name4Div.style.backgroundColor='#fcfcfc';
    name5Div.style.backgroundColor='#fcfcfc';
    name6Div.style.backgroundColor='#fcfcfc';

    name1.innerHTML="phone";
    name2.innerHTML="<b>class</b>";
    name3.innerHTML="chair";
    name4.innerHTML="table";
    name5.innerHTML="charger";
    name6.innerHTML="shoes";

    if(name2Div.style.backgroundColor='#bec2d4'){
        name7.innerHTML+= " class "
    }



};

function color3(){
    name1Div.style.backgroundColor='#fcfcfc'
    name2Div.style.backgroundColor='#fcfcfc';
    name3Div.style.backgroundColor='#ad101a';
    name4Div.style.backgroundColor='#fcfcfc';
    name5Div.style.backgroundColor='#fcfcfc';
    name6Div.style.backgroundColor='#fcfcfc';

    name1.innerHTML="phone";
    name2.innerHTML="class";
    name3.innerHTML="<b>chair</b>";
    name4.innerHTML="table";
    name5.innerHTML="charger";
    name6.innerHTML="shoes";

    if(name3Div.style.backgroundColor='#ad101a'){
        name7.innerHTML+= " chair "
    }


};

function color4(){
    name1Div.style.backgroundColor='#fcfcfc'
    name2Div.style.backgroundColor='#fcfcfc';
    name3Div.style.backgroundColor='#fcfcfc';
    name4Div.style.backgroundColor='#0a28cf';
    name5Div.style.backgroundColor='#fcfcfc';
    name6Div.style.backgroundColor='#fcfcfc';

    name1.innerHTML="phone";
    name2.innerHTML="class";
    name3.innerHTML="chair";
    name4.innerHTML="<b>table</b>";
    name5.innerHTML="charger";
    name6.innerHTML="shoes";

    if(name4Div.style.backgroundColor='#ad101a'){
        name7.innerHTML+= " table "
    }
    


};

function color5(){
    name1Div.style.backgroundColor='#fcfcfc'
    name2Div.style.backgroundColor='#fcfcfc';
    name3Div.style.backgroundColor='#fcfcfc';
    name4Div.style.backgroundColor='#fcfcfc';
    name5Div.style.backgroundColor='#2d4533';
    name6Div.style.backgroundColor='#fcfcfc';

    name1.innerHTML="phone";
    name2.innerHTML="class";
    name3.innerHTML="chair";
    name4.innerHTML="table";
    name5.innerHTML="<b>charger</b>";
    name6.innerHTML="shoes";

    if(name5Div.style.backgroundColor='#2d4533'){
        name7.innerHTML+= " charger "
    }


};

function color6(){
    name1Div.style.backgroundColor='#fcfcfc'
    name2Div.style.backgroundColor='#fcfcfc';
    name3Div.style.backgroundColor='#fcfcfc';
    name4Div.style.backgroundColor='#fcfcfc';
    name5Div.style.backgroundColor='#fcfcfc';
    name6Div.style.backgroundColor='#c7eb00';

    name1.innerHTML="phone";
    name2.innerHTML="class";
    name3.innerHTML="chair";
    name4.innerHTML="table";
    name5.innerHTML="charger";
    name6.innerHTML="<b>shoes</b>";

    if(name6Div.style.backgroundColor='#c7eb00'){
        name7.innerHTML+= " shoes "
    }
};