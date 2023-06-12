let player;
let computer;
let player_score = 0;
let computer_score = 0;
let Input = document.getElementById("game_number");
let roundleft = document.getElementById("rounds_left");
let gameover = document.getElementById("message");
let gameoverContainer = document.getElementById("message-box");

const playbtn = document.getElementById("play_game");
const rockbtn = document.getElementById("rock")
const paperbtn = document.getElementById("paper")
const scissorbtn = document.getElementById("scissor")

function playcall() {
    roundleft.innerText = Input.value;
    leftround = Input.value;
    if (leftround == Input.value) {
        rockbtn.classList.remove("btnselection");
        paperbtn.classList.remove("btnselection")
        scissorbtn.classList.remove("btnselection")

    }

    gameoverContainer.classList.remove("final_result_container")
    gameover.innerText = "";

}
const rock = () => {
    player = 0;
    computer = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    if (leftround > 0) {
        roundleft.innerText = --leftround
    }
    if (computer == 0) {
        document.querySelector("#turn").innerHTML = "Computer Pick Rock";
    }
    else if (computer == 1) {
        document.querySelector("#turn").innerHTML = "Computer Pick Paper";
    }
    else {
        document.querySelector("#turn").innerHTML = "Computer Pick Scissor";
    }

    if (computer == player) {
        document.querySelector("#message").innerHTML = "MATCH TIE";
    }
    else if (computer == 1) {
        document.querySelector("#message").innerHTML = "YOU LOSS!";
        computer_score = computer_score + 1;
        document.querySelector("#computer_points").innerHTML = computer_score;
    }
    else if (computer == 2) {
        document.querySelector("#message").innerHTML = "YOU WON!";
        player_score = player_score + 1;
        document.querySelector("#user_points").innerHTML = player_score;
    }    
    roundMessage()
    return;
}

const paper = () => {
    player = 1;
    computer = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    if (leftround > 0) {
        roundleft.innerText = --leftround
    }
    if (computer == 0) {
        document.querySelector("#turn").innerHTML = "Computer Pick Rock";
    }
    else if (computer == 1) {
        document.querySelector("#turn").innerHTML = "Computer Pick Paper";
    }
    else {
        document.querySelector("#turn").innerHTML = "Computer Pick Scissor";
    }

    if (computer == player) {
        document.querySelector("#message").innerHTML = "MATCH TIE";
    }
    else if (computer == 2) {
        document.querySelector("#message").innerHTML = "YOU LOSS!";
        computer_score = computer_score + 1;
        document.querySelector("#computer_points").innerHTML = computer_score;
    }
    else if (computer == 0) {
        document.querySelector("#message").innerHTML = "YOU WON!";
        player_score = player_score + 1;
        document.querySelector("#user_points").innerHTML = player_score;
    }
    roundMessage()
    return;
}

const scissor = () => {
    player = 2;
    computer = Math.floor(Math.random() * (2 - 0 + 1) + 0);

    if (leftround > 0) {
        roundleft.innerText = --leftround
    }
    if (computer == 0) {
        document.querySelector("#turn").innerHTML = "Computer Pick Rock";
    }
    else if (computer == 1) {
        document.querySelector("#turn").innerHTML = "Computer Pick Paper";
    }
    else {
        document.querySelector("#turn").innerHTML = "Computer Pick Scissor";
    }

    if (computer == player) {
        document.querySelector("#message").innerHTML = "MATCH TIE";
    }
    else if (computer == 0) {
        document.querySelector("#message").innerHTML = "YOU LOSS!";
        computer_score = computer_score + 1;
        document.querySelector("#computer_points").innerHTML = computer_score;
    }
    else if (computer == 1) {
        document.querySelector("#message").innerHTML = "YOU WON!";
        player_score = player_score + 1;
        document.querySelector("#user_points").innerHTML = player_score;
    }
    roundMessage()
    return;
}


function roundMessage(){
    if (leftround == 0) {

        if (player_score > computer_score) {
            gameoverContainer.classList.add("final_result_container")
            gameover.innerText = "GAME OVER !! YOU WON";

        } else if (player_score < computer_score) {
            gameoverContainer.classList.add("final_result_container")
            gameover.innerText = "GAME OVER !! YOU LOSS";
        }
        else if (computer_score == player_score) {
            gameoverContainer.classList.add("final_result_container")
            gameover.innerText = "GAME OVER !! MATCH TIE";
        }
        rockbtn.classList.remove("btnselection");
        paperbtn.classList.remove("btnselection")
        scissorbtn.classList.remove("btnselection")
        Input.value = 0
    }
}

playbtn.addEventListener("click", playcall)