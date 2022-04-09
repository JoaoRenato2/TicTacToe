import { man} from "./options.js";

const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");



const startGame = () => {

};


const placeMark = (cell, classtoAdd) => {
    cell.classList.add(classtoAdd);
};

const swapTurns = () => {
    man = !man;

    board.classList.remove('circle');
    board.classList.remove('x');

    if (man) {
        board.classList.add('circle');

    } else {
        board.classList.add('x');

    }
};

const handClick = (e) => {
    // Colocar o X ou O
    const cell = e.target;
    const classtoAdd = man ? "circle" : "x";

    placeMark(cell, classtoAdd);
    // Verificar Vitoria
    //Verificar Empate
    //Mudar Simbolo
    swapTurns();
};

for (const cell of cellElements) {
    cell.addEventListener("click", handClick, {
        once: true
    });
}