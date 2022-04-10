// SELECIONAR ELEMENTOS

const options = document.querySelector(".right-options");

// SELECIONAR BUTTONS
const computerBtn = options.querySelector(".computer");
const friendBtn = options.querySelector(".friend");
const playBtn = options.querySelector(".play");

// VARIAVES PARA GUARDAR INFORMAÇÕES DO USUARIO
let OPPONENT;

computerBtn.addEventListener("click", function () {
    OPPONENT = "computer";
    if (OPPONENT == "computer") {
        computerBtn.style.backgroundColor = "#00ff88";
        friendBtn.style.backgroundColor = "#514869";
        return;
    }

    switchActive(friendBtn, computerBtn);
});

friendBtn.addEventListener("click", function () {
    OPPONENT = "friend";
    if (OPPONENT == "friend") {
        computerBtn.style.backgroundColor = "#514869";
        friendBtn.style.backgroundColor = "#00ff88";
        return;
    }

    switchActive(computerBtn, friendBtn);
});


playBtn.addEventListener("click", function () {
    // CHECK SE O USER ESCOLHEU UM OPONENTE
    if (!OPPONENT) {
        computerBtn.style.backgroundColor = "#f00";
        friendBtn.style.backgroundColor = "#f00";
        return;
    }

    // CHECK SE O USER ESCOLHEU UM SIMBOLO

    // RUN THE GAME
    if (OPPONENT == "computer") {
        window.location.href = "AI.html";

    }
    if (OPPONENT == "friend") {
        window.location.href = "friend.html";


    }

});

