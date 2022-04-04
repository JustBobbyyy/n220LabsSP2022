//Bobby Ezenwelu
//n220
//3/31/2022
//Make Random 

let txtClean= document.getElementById("txtClean");
let dvRemove= document.getElementById("Remove");

function By(){
    let userName = txtClean.value;
    let story = `${userName}  # `;
    return story = story.replace("# ", " ");
    
    
}


function Up(){
    let res = By()
    dvRemove.innerHTML = res
    
}


// variable.value