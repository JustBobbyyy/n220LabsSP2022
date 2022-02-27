//Bobby Ezenwelu
//n220
//2/23/2022
//In Class Exercise

let testArray= [20,45, 70,90]

countTwenties(testArray);
//create your array from the instructions
/*let numbers= [1,2, 25, 21]
console.log(numbers)

function count(){
    //if(numbers>20);
    return numbers[2]
}*/

function countTwenties(numberArray){
    for(var i= 0; i<numberArray; i++) {
        var count= 0
        if(numberArray[i]> 20){
            console.log(numberArray[i] + ":its greater than 20")
            count = count + 1;
            
        }
        console.log(count)
    }

    //return eithers 
    if(count < 3) {
        return -1;
    }
    //(if count is less than three): The count of those numbers


}


