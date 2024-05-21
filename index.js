function getComputerChoice() {
    let choice = "";

    let rand = Math.random();

    if (rand <= .33) {
        choice = "rock";
    } else if (rand >= .66) {
        choice = "paper";
    } else {
        choice = "scissors"
    }

    return choice;
}

let humanScore = 0;
let computerScore = 0;
  
function playGame() {
    function playRound(humanChoice, computerChoice) {
    
        if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")) {
            console.log(`Draw! ${humanChoice} ties ${computerChoice}`);
        } else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else if((humanChoice === "scissors" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors")) {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");

    rock.textContent = "ROCK";
    paper.textContent = "PAPER";
    scissors.textContent = "SCISSORS";

    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });

    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });

    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });

    const buttons = document.createElement("div");

    const body = document.querySelector("body");

    body.appendChild(buttons);

    buttons.appendChild(rock);
    buttons.appendChild(paper);
    buttons.appendChild(scissors);

    if (humanScore > computerScore) {
        console.log(`WINNER! You won the game with a score of ${humanScore} to ${computerScore}`)
    } else if (computerScore > humanScore) {
        console.log(`LOSER! You lost the game with a score of ${computerScore} to ${humanScore}`)
    } else if (computerScore === humanScore) {
        console.log(`DRAW! You tied the game with a score of ${computerScore} to ${humanScore}`)
    }
}

playGame();
