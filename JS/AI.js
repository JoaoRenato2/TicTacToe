const cellElements = document.querySelectorAll("[data-cell]");
const tabuleiro = document.querySelector("[data-board]");
const panel = document.querySelector(".panel");
const player = document.querySelector(".player");
const panel2 = document.querySelector(".panel2");

const selectBox = document.querySelector("select-box");
const selectBtnX = document.querySelector(".playerX");
const selectBtnO = document.querySelector(".playerO");
const selectBtnAgain = document.querySelector("[button]");
const selectBtnAgainTie = document.querySelector("[button-tie]");

const winnermessage = document.querySelector(".winning-message");
const timessage = document.querySelector(".tie-message");
const message = document.querySelector("[data-winning-message-text]")
const confet = document.querySelector("#my-canvas")

const f = "false";
const v = "true";
var ai;
var human;
var originBoard;

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
//Efeito Confete
var confettiSettings = {
    target: 'my-canvas'
};
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();



window.onload = () => {
    selectBtnX.onclick = () => {
        panel2.classList.add("hide");
        panel.classList.add("show");
        player.classList.add("show");
        tabuleiro.classList.add("ai");
        human = true;
        ai = false;

    }
    selectBtnO.onclick = () => {
        panel2.classList.add("hide");
        panel.classList.add("show");
        player.classList.add("show");
        tabuleiro.classList.add("human");
        human = false;
        ai = true;
        if (ai === true) {
            turn(bestSpot(), ai);
        }

    }
}


const startGame = () => {
    originBoard = Array.from(Array(9).keys());
    for (var i = 0; i < cellElements.length; i++) {
        //Resetar o game
        cellElements[i].classList.remove("human");
        cellElements[i].classList.remove("ai");
        tabuleiro.classList.remove("ai");
        tabuleiro.classList.remove("human");
        cellElements[i].removeEventListener("click", turnClick);
        cellElements[i].addEventListener('click', turnClick, false);
        cellElements[i].innerText = '';
    }

    // Resetar o game 
    panel2.classList.remove("hide");
    panel.classList.remove("show");
    player.classList.remove("show");
    winnermessage.classList.remove("active");
    timessage.classList.remove("active");
    player.classList.remove("hide");
    confet.classList.remove("active");



};


function turnClick(square) {
    if (typeof originBoard[square.target.id] == 'number') {
        turn(square.target.id, human);
        if (!checkWin(originBoard, human) && !checkTie())
            turn(bestSpot(), ai);
    }

}

function turn(squareId, player) {
    originBoard[squareId] = player;
    console.log(originBoard);
    if (player === human) {
        if (human === false) {
            document.getElementById(squareId).classList.add("human");
        } else {
            document.getElementById(squareId).classList.add("ai");
        }
    }
    if (player === ai) {
        if (ai === false) {
            document.getElementById(squareId).classList.add("human");
        } else {
            document.getElementById(squareId).classList.add("ai");
        }
    }
    let gameWon = checkWin(originBoard, player)
	if (gameWon) gameOver(gameWon)
}


function checkWin(board, player) {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = {
                index: index,
                player: player
            };
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon) {
    winnermessage.classList.add("active");
    player.classList.add("hide");
    confet.classList.add("active");
    declareWinner(gameWon.player == human ? "Você venceu!" : "Você Perdeu.")
}

function declareWinner(who) {
	document.querySelector("[data-winning-message-text]").innerText = who;
}

function emptySquares() {
    return originBoard.filter(s => typeof s === 'number');
}

function bestSpot() {
    return emptySquares()[0];

}

function checkTie() {
    if (emptySquares().length == 0) {
        for (var i = 0; i < cellElements.length; i++) {
            cellElements[i].removeEventListener('click', turnClick, false);
        }
        timessage.classList.add("active");
        player.classList.add("hide");
        return true;
    }
    return false;
}





startGame();
selectBtnAgain.addEventListener("click", startGame);
selectBtnAgainTie.addEventListener("click", startGame);