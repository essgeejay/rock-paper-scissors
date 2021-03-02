let tieScore = 0;
let playerScore = 0;
let computerScore = 0;
const rock_btn = document.getElementById("btnRock")
const paper_btn = document.getElementById("btnPaper")
const scissors_btn = document.getElementById("btnScissors")


// A function that randomises the choice for the computer. 
function computerPlay() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection) {

    const computerSelection = computerPlay();

    // You lose...
    if (playerSelection === 'r' && computerSelection === 'p') {
        computerScore++
        return console.log("YOU LOSE! - Paper beats Rock!");
    }
    else if (playerSelection === 'p' && computerSelection === 's') {
        computerScore++
        return console.log("YOU LOSE! - scissors beats paper!");
    }
    else if (playerSelection === 's' && computerSelection === 'r') {
        computerScore++
        return console.log("YOU LOSE! - rock beats scissors!");
    }
    // You win...
    else if (playerSelection === 'r' && computerSelection === 's') {
        playerScore++
        return console.log("YOU WIN! - rock beats scissors!");
    }
    else if (playerSelection === 'p' && computerSelection === 'r') {
        playerScore++
        return console.log("YOU WIN! - Paper beats Rock!");
    }
    else if (playerSelection === 's' && computerSelection === 'p') {
        playerScore++
        return console.log("YOU WIN! - Scissors beats Paper!");
    }
    // You both tie...
    else {
        tieScore++
        return console.log("Both tie!!")
    }

}


function run_game() {
    // this controls the button clicks
    rock_btn.addEventListener("click", function () {
        playRound("r");
        console.log("you picked Rock")

    })

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
















