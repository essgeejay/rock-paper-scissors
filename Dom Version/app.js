let tieScore = 0;
let playerScore = 0;
let computerScore = 0;

// these variables are dom elements to playerScore and computerScore above!
const playscore_span = document.getElementById("userscore");
const computerscore_span = document.getElementById("compscore");

// not using getElementbyID - instead were using a *querySelector because were calling a class. using the dot notation. 
const scoreboard_div = document.getElementsByClassName('.keepscore');

// this should change the static text into dynamic text
const results_p = document.querySelector('.result > p');

const rock_btn = document.getElementById("btnRock");
const paper_btn = document.getElementById("btnPaper");
const scissors_btn = document.getElementById("btnScissors");
const buttons = document.querySelectorAll('button');


// A function that randomises the choice for the computer. 
function computerPlay() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disabledbuttons() {
    // disable all buttons once the game reaches 5
    buttons.forEach((button) => {
        button.disabled = true
    });

}

function win() {
    playerScore++
    playscore_span.innerHTML = playerScore;
    if ((playerScore === 5) && (playerScore > computerScore)) {
        results_p.innerHTML = "WINWINWINWIWNIN"
        console.log("YOU WIN - buttons disabled");
        disabledbuttons();
    };
}

function lose() {
    computerScore++
    computerscore_span.innerHTML = computerScore;
    if ((computerScore === 5) && (computerScore > playerScore)) {
        results_p.innerHTML = "LOSWELOSELSOE"
        console.log("YOU LOSE - buttons disabled");
        disabledbuttons();
    };
    // document.getElementById(playerSelection).classList.add("green-glow");
};

function tie() {
    computerscore_span.innerHTML = computerScore;
    playscore_span.innerHTML = playerScore;
};


function playRound(playerSelection) {

    const computerSelection = computerPlay();
    // You lose...
    if (playerSelection === 'r' && computerSelection === 'p') {
        results_p.innerHTML = "Paper beats Rock!";
        lose();
    }
    else if (playerSelection === 'p' && computerSelection === 's') {
        results_p.innerHTML = "Scissors beats Paper!";
        lose();
    }
    else if (playerSelection === 's' && computerSelection === 'r') {
        results_p.innerHTML = "Rock beats Scissors!";
        lose();
    }
    // You win...
    else if (playerSelection === 'r' && computerSelection === 's') {
        results_p.innerHTML = "Rock beats Scissors!";
        win();
    }
    else if (playerSelection === 'p' && computerSelection === 'r') {
        results_p.innerHTML = "Paper beats Rock!";
        win();
    }
    else if (playerSelection === 's' && computerSelection === 'p') {
        results_p.innerHTML = "Scissors beats Paper!";
        win();
    }
    // You both tie...
    else {
        results_p.innerHTML = "Its a DRAW!"
        tie();
    };

}


function run_game() {
    // this controls the button clicks - using es6 methods
    rock_btn.addEventListener('click', () => playRound("r"));

    paper_btn.addEventListener("click", function () {
        playRound("p");
        console.log("you picked Paper")
    })

    scissors_btn.addEventListener("click", function () {
        playRound("s");
        console.log("you picked Scissors")
    })
};


run_game();


















