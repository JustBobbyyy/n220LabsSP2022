//Bobby Ezenwelu
//n220
//3/8/2022

let txtName = document.getElementById("txtName");
let dvStoryResult = document.getElementById("storyResult");



function generateStory(){
    let userName = txtName.value;
    let story = `${userName} is tired, and so ${userName} fell asleep on the train.`;
    dvStoryResult.innerHTML = story;

    txtName.value = "";


};