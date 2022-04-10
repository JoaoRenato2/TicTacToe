const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");
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

let isCircleTurn;
const winnigCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

var confettiSettings = {
    target: 'my-canvas'
};
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

const removeClass = () => {
    if(isCircleTurn == "x"){
        board.classList.remove("circle");
    }else{
        board.classList.remove("x");
    }

}

window.onload = () => {
    selectBtnX.onclick = () => {
        panel2.classList.add("hide");
        panel.classList.add("show");
        player.classList.add("show");
        isCircleTurn = false;
        board.classList.add("x");

    }
    selectBtnO.onclick = () => {
        panel2.classList.add("hide");
        panel.classList.add("show");
        player.classList.add("show");
        isCircleTurn = true;
        board.classList.add("circle");
    }
}


const startGame = () => {

    

    for (const cell of cellElements) {
        cell.classList.remove("circle");
        cell.classList.remove("x");
        board.classList.remove("x");
        board.classList.remove("circle");
        cell.removeEventListener("click", handClick);

        cell.addEventListener("click", handClick, {
            once: true
        });
    }
    

    panel2.classList.remove("hide");
    panel.classList.remove("show");
    player.classList.remove("show");
    winnermessage.classList.remove("active");
    timessage.classList.remove("active");
    player.classList.remove("hide");
    confet.classList.remove("active");
    
    isCircleTurn;

};

const endGame = (isDraw) => {
    if (isDraw) {

        timessage.classList.add("active");
        player.classList.add("hide");

    } else {
        winnermessage.classList.add("active");
        player.classList.add("hide");
        message.innerText = isCircleTurn ? "Circulo Venceu" : "X venceu";
        confet.classList.add("active");
    }
};



const checkforwin = (currentPlayer) => {
    return winnigCombination.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const checkForDraw = () => {
    return [...cellElements].every((cell) => {
      return cell.classList.contains("x") || cell.classList.contains("circle");
    });
  };
const placeMark = (cell, classtoAdd) => {
    cell.classList.add(classtoAdd);
};

const setBoardHoverClass = () => {
    board.classList.remove('circle');
    board.classList.remove('x');

    if (isCircleTurn) {
        board.classList.add('circle');

    } else {
        board.classList.add('x');

    }
}

const swapTurns = () => {
    isCircleTurn = !isCircleTurn;

    setBoardHoverClass();
};


const handClick = (e) => {
    // Colocar o X ou O
    const cell = e.target;
    const classtoAdd = isCircleTurn ? "circle" : "x";
    
    placeMark(cell, classtoAdd);
    // Verificar Vitoria
    const isWin = checkforwin(classtoAdd);
    //Verificar Empate
    const isDraw = checkForDraw();
    if (isWin) {
        endGame(false)

    }else if (isDraw){
        endGame(true)
    }else{
        //Mudar Simbolo
        swapTurns();
    }
    

    
    
};

startGame();
selectBtnAgain.addEventListener("click", startGame);
selectBtnAgainTie.addEventListener("click", startGame);