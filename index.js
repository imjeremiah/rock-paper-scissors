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
let currentRound = 0;
  
function playGame() {

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")) {
            roundResult.textContent = `Draw! ${humanChoice} ties ${computerChoice}`;
        } else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        } else if((humanChoice === "scissors" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors")) {
            computerScore++;
            roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        }

        round.textContent = `ROUND ${++currentRound}:`;

        score.textContent = `SCORE - You: ${humanScore}, Computer: ${computerScore}`;

        if (humanScore === 5 || computerScore === 5) {
            if (humanScore > computerScore) {
                alert(`WINNER! You won the game with a score of ${humanScore} to ${computerScore}`);
            } else {
                alert(`LOSER! You lost the game with a score of ${computerScore} to ${humanScore}`);
            }
            window.location.reload();
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

    const results = document.createElement("div");
    body.appendChild(results);

    const round = document.createElement("p");
    results.appendChild(round);

    const roundResult = document.createElement("p");
    results.appendChild(roundResult);

    const score = document.createElement("p");
    results.appendChild(score);

    const winner = document.createElement("p");
    results.appendChild(winner);
}

playGame();
