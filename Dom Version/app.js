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

    buttons.forEach((button) => {
        button.disabled = true

    });

}



function lose() {
    computerScore++
    computerscore_span.innerHTML = computerScore;
    if (computerScore === 5) {
        console.log("computer wins")
        disabledbuttons();
    };
    // document.getElementById(playerSelection).classList.add("green-glow");
};

function win() {
    playerScore++
    playscore_span.innerHTML = playerScore;
    if (playerScore === 5) {
        console.log("thats a wrap!")
        disabledbuttons();
    };
}

function tie() {
    computerscore_span.innerHTML = computerScore;
    playscore_span.innerHTML = playerScore;
    // if (playerScore === computerScore) {
    //     console.log("Nobody won!")
    //     disabledbuttons();
    // };
};


function playRound(playerSelection) {

    const computerSelection = computerPlay();
    // You lose...
    if (playerSelection === 'r' && computerSelection === 'p') {
        lose();
        results_p.innerHTML = "YOU LOSE! - Paper beats Rock!";
    }
    else if (playerSelection === 'p' && computerSelection === 's') {
        lose();
        results_p.innerHTML = "YOU LOSE! - Scissors beats Paper!";
    }
    else if (playerSelection === 's' && computerSelection === 'r') {
        lose();
        results_p.innerHTML = "YOU LOSE! - Rock beats Scissors!";
    }
    // You win...
    else if (playerSelection === 'r' && computerSelection === 's') {
        win();
        results_p.innerHTML = "YOU WIN! - Rock beats Scissors!";
    }
    else if (playerSelection === 'p' && computerSelection === 'r') {
        win();
        results_p.innerHTML = "YOU WIN! - Paper beats Rock!";
    }
    else if (playerSelection === 's' && computerSelection === 'p') {
        win();
        results_p.innerHTML = "YOU WIN! - Scissors beats Paper!";
    }
    // You both tie...
    else {
        tie();
        results_p.innerHTML = "Its a DRAW!"
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



// while result() {
//     if (playerScore >= computerScore) {
//         console.log("Nobody wins!")
//     }
//     else if (playerScore > computerScore) {
//         results_p.innerHTML = "you win the game!";
//     }
//     else {
//         return "You lose the game!! hahahaha"
//     };
// }



// for (let count = 0; count <= 4; count++) {




// }

run_game();


















