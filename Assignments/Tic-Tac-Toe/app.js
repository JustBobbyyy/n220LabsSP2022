//Bobby Ezenwelu
//n220
//4/28/2022
//Tic-Tac-Toe


//take or really bring out the tic--game line out of the html onto here
let showBoxes = document.querySelector('.xando--game');

//make three variables, one that whwn the game is started is will start or true in this case
//one that will always start the first player with the letter X
// one that will alow me to put a ltter in an empty space
// in this case just put quotes but with noting in them.
let startGame = true;
let nowPlayer = "X";
let boxDisplay = ["", "", "", "", "", "", "", "", ""];

// make three more variables that will display different messages using tick marks
// something I learned during the semster
// one should show a message of whos turn it is
// one should show who one
//one should show if the game was a draw
let playerWon = () => `Player ${nowPlayer} has won!`;
let playerDraw = () => `Game ended in a draw!`;
let whichPlayer = () => `It's ${nowPlayer}'s turn`;

//now use the global variable at the top and bring it out so it displays on the website
showBoxes.innerHTML = whichPlayer();

function draw() {
    background(0);
}

// now make multiple arrays to show different ways a user can win the game based on the boxes
let winningPatterns = [
    [0, 1, 2],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [0, 4, 8],
    [3, 4, 5],

];

//make a function where it somehow changes from x and o by itself and show on the boxes
function nextLetter() {
    nowPlayer = nowPlayer === "X" ? "O" : "X";
    showBoxes.innerHTML = whichPlayer();
};


// make a function when I press a box a letter will be displayed (will need help)
function boxClicked(boxPressed, boxPressedIndex) {
    boxDisplay[boxPressedIndex] = nowPlayer;
    boxPressed.innerHTML = nowPlayer;
};


//create a function where inside the function if I all x's or o's in a row I should win the game
// I know I will need to use if, for and return statements for sure but will need help to figure it out
//After getting some help I need to just use the patterns above and if I get three in a way
//based on the function I should win, lose, or draw the game and then display it on the screen
// thats why patterns and boxdisplay is being used and create a constant as well for those patterns
function Results() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningPatterns[i];
        let a = boxDisplay[winCondition[0]];
        let b = boxDisplay[winCondition[1]];
        let c = boxDisplay[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        showBoxes.innerHTML = playerWon();
        startGame = false;
        return;
    }

    let roundDraw = !boxDisplay.includes("");
    if (roundDraw) {
        showBoxes.innerHTML = playerDraw();
        startGame = false;
        return;
    }

    nextLetter();
}

//create a function where a box is clicked that letter will actually show in the box
// data from the html and things like events will help with this
function handleCellClick(boxPressedEvent) {
    const boxPressed = boxPressedEvent.target;
    const boxPressedIndex = parseInt(boxPressed.getAttribute('data-box-index'));

    if (boxDisplay[boxPressedIndex] !== "" || !startGame) {
        return;
    }

    boxClicked(boxPressed, boxPressedIndex);
    Results();
}

// create a function for the button so that it resets the game
// using the code from the beginning and just putting it in this function would 
//essentially do just make the boxes blank again
function gameRestart() {
    startGame = true;
    nowPlayer = "X";
    boxDisplay = ["", "", "", "", "", "", "", "", ""];
    showBoxes.innerHTML = whichPlayer();
    document.querySelectorAll('.box').forEach(box => box.innerHTML = "");
}

//bring out the box from the html with a querySelector and let it listen for each click
//or in this case call the action from each of the divs made
document.querySelectorAll('.box').forEach(cell => cell.addEventListener('click', handleCellClick));
