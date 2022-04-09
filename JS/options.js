// SELECIONAR ELEMENTOS
const options = document.querySelector(".right-options");



// SELECIONAR BUTTONS
const computerBtn = options.querySelector(".computer");
const friendBtn = options.querySelector(".friend");
const xBtn = options.querySelector(".x");
const oBtn = options.querySelector(".o");
const playBtn = options.querySelector(".play");

// VARIAVES PARA GUARDAR INFORMAÇÕES DO USUARIO
let OPPONENT;
export var man;
export var computer;
export var friend;


// ADICONANDO EVENTO EM CADA BUTTON
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

xBtn.addEventListener("click", function () {
    man = "x";
    computer = "circle";
    friend = "cirlce";
    if (man == "x") {
        xBtn.style.backgroundColor = "#00ff88";
        oBtn.style.backgroundColor = "#514869";
        
        return;
    }
    

    switchActive(oBtn, xBtn);
});

oBtn.addEventListener("click", function () {
    man = "circle";
    computer = "x";
    friend = "x";
    if (man == "circle") {
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
    if (!man) {
        xBtn.style.backgroundColor = "#f00";
        oBtn.style.backgroundColor = "#f00";

        return;
    }

    // RUN THE GAME
    if (OPPONENT == "computer") {
        window.location.href = "AI.html";
        
    }
    if (OPPONENT == "friend") {
        window.location.href = "friend.html";
        
        
    }

});

export{computerBtn,friendBtn,xBtn,oBtn,playBtn};

// SWITCH ACTIVE CLASS BETWEEN TWO ELEMENTS
function switchActive(off, on) {
    off.classList.remove("active");
    on.classList.add("active");
}