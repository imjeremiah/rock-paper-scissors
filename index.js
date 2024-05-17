/* 
initialize function named getComputerChoice
initialize variable named choice
initialize random number named rand - use Math.random()
logic: if random number is .33 or less, update choice to "rock"
logic: if random number is .66 or more, update choice to "paper"
logic: if random number is greater than .33 or less less than .66, update choice to "scissors"
return choice
*/

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

// console.log(getComputerChoice());

/* 
initialize function named getHumanChoice
initialize variable named choice - use prompt()
logic: choice options include 1 for rock, 2 for paper, 3 for scissors
logic: if user chooses 1, update choice to "rock"
logic: if user chooses 2, update choice to "paper"
logic: if user chooses 3, update choice to "scissors"
return choice
*/

function getHumanChoice() {

    let choice = prompt("choose 'rock', 'paper', or 'scissors'");

    return choice;
}

// console.log(getHumanChoice());

// initialize player score variables
let humanScore = 0;
let computerScore = 0;


/* 
initialize function named playRound- take in both choices as parameters
make human choice case insensitive
logic: rock beats scissors, scissors beats paper, paper beats rock
logic: if choices are the same- console log tie message
logic: if human choice beats computer choice- console log win message, increment human score
logic: if computer choice beats human choice- console log lose message, increment computer score
*/
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")) {
        console.log("Draw! Try Again...")
    } else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if((humanChoice === "scissors" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors")) {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
  
