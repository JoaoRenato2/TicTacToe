// SELECIONAR ELEMENTOS
const options = document.querySelector(".right-options");
const gameOverElement = document.querySelector(".gameover");

// SELECIONAR BUTTONS
const computerBtn = options.querySelector(".computer");
const friendBtn = options.querySelector(".friend");
const xBtn = options.querySelector(".x");
const oBtn = options.querySelector(".o");
const playBtn = options.querySelector(".play");

// VARIAVES PARA GUARDAR INFORMAÇÕES DO USUARIO
let OPPONENT;
const player = new Object;

// ADICONANDO EVENTO EM CADA BUTTON
computerBtn.addEventListener("click", function () {
    OPPONENT = "computer";
    if(OPPONENT == "computer"){
        computerBtn.style.backgroundColor = "#00ff88";
        friendBtn.style.backgroundColor = "#514869";
        return;
    }

    switchActive(friendBtn, computerBtn);
});

friendBtn.addEventListener("click", function () {
    OPPONENT = "friend";
    if(OPPONENT == "friend"){
        computerBtn.style.backgroundColor = "#514869";
        friendBtn.style.backgroundColor = "#00ff88";
        return;
    }

    switchActive(computerBtn, friendBtn);
});

xBtn.addEventListener("click", function () {
    player.man = "X";
    player.computer = "O";
    player.friend = "O";
    if (player.man == "X") {
        xBtn.style.backgroundColor = "#00ff88";
        oBtn.style.backgroundColor = "#514869";

        return;
    }

    switchActive(oBtn, xBtn);
});

oBtn.addEventListener("click", function () {
    player.man = "O";
    player.computer = "X";
    player.friend = "X";
    if (player.man == "O") {
        xBtn.style.backgroundColor = "#514869";
        oBtn.style.backgroundColor = "#00ff88";

        return;
    }

    switchActive(xBtn, oBtn);
});

playBtn.addEventListener("click", function () {
    // CHECK SE O USER ESCOLHEU UM OPONENTE
    if (!OPPONENT) {
        computerBtn.style.backgroundColor = "#f00";
        friendBtn.style.backgroundColor = "#f00";
        return;
    }

    // CHECK SE O USER ESCOLHEU UM SIMBOLO
    if (!player.man) {
        xBtn.style.backgroundColor = "#f00";
        oBtn.style.backgroundColor = "#f00";

        return;
    }

    // RUN THE GAME
    if(OPPONENT == "computer"){
        window.location.href = "AI.html";
        init(player, OPPONENT);
    }
    if(OPPONENT == "friend"){
        window.location.href = "friend.html";
        init(player, OPPONENT);
    }

});

// SWITCH ACTIVE CLASS BETWEEN TWO ELEMENTS
function switchActive(off, on) {
    off.classList.remove("active");
    on.classList.add("active");
}