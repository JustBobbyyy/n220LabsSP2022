
let snowAmount = 10;

function shovel(shovelType){
    //put shovel down
    //push shovel forward
    //lift shovel
    //throw snow

    if(shovelType == "plastic"){
        snowAmount -= 2;
    }
    
    if(shovelType == "metal"){
        snowAmount -= 1;
    }

    return !(snowAmount > 0)
}

let res = shovel("plastic");
console.log("Is Done? " + res)

if(res != true){
    res = shovel("plastic");
    console.log

}

res = shovel("metal");
