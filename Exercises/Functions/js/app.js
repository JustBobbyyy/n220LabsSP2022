//Bobby Ezenwelu
// n220
//Functions


//Test Function
let myDist = distance(1,1, 30, 30);
let myDist2 = distance(50, 45, 60, 90);
let myDist3 = distance(1,1, 30,30);
console.log(myDist);

//function defintion
//dont repeat yourself(DRY)
function distance(x1,y1,x2,y2){
    let dx = x1 - x2;
    let dy = y1 - y2;

    
    let dist = Math.sqrt( (dx*dx) + (dy*dy) );
    return dist;
}