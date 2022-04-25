//Bobby Ezenwelu



const showBoxes = document.querySelector('.tic--game');

let startGame = true;
let nowPlayer = "X";
let boxDisplay = ["", "", "", "", "", "", "", "", ""];

const playerWon = () => `Player ${nowPlayer} has won!`;
const playerDraw = () => `Game ended in a draw!`;
const whichPlayer = () => `It's ${nowPlayer}'s turn`;

showBoxes.innerHTML = whichPlayer();

function draw(){
    backgroundColor(0,0,0);
}

const winningPatterns = [
    [0, 1, 2],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [0, 4, 8],
    [3, 4, 5],
];

function boxClicked(boxPressed, boxPressedIndex) {
    boxDisplay[boxPressedIndex] = nowPlayer;
    boxPressed.innerHTML = nowPlayer;
}

function nextLetter() {
    nowPlayer = nowPlayer === "X" ? "O" : "X";
    showBoxes.innerHTML = whichPlayer();
}

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

function handleCellClick(boxPressedEvent) {
    const boxPressed = boxPressedEvent.target;
    const boxPressedIndex = parseInt(boxPressed.getAttribute('data-box-index'));

    if (boxDisplay[boxPressedIndex] !== "" || !startGame) {
        return;
    }

    boxClicked(boxPressed, boxPressedIndex);
    Results();
}

function handleRestartGame() {
    startGame = true;
    nowPlayer = "X";
    boxDisplay = ["", "", "", "", "", "", "", "", ""];
    showBoxes.innerHTML = whichPlayer();
    document.querySelectorAll('.box').forEach(box => box.innerHTML = "");
}

document.querySelectorAll('.box').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);