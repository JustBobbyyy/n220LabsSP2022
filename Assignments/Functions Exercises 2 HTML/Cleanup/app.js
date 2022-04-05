//Bobby Ezenwelu
//n220
//3/31/2022
//Make Random 

//Write a web page to test the function - one button and input, and one div
let txtClean= document.getElementById("txtClean");
let dvRemove= document.getElementById("Remove");


    
//create a function that removes the "#" whenever presses the button 
//Find a way so that it removes "#" everytime the user puts it in the input
function By(){
   let userName = txtClean.value;
    let story = `${userName}`;
    //console.log(story)
    return story.replace(/#/g," ");

  
    
};
  

//create a function that brings out the button
function Up(){
    let res = By()
    dvRemove.innerHTML = res
    console.log(res)
};


// variable.value