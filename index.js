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

    let choice = "";

    let selection = prompt("press '1' for ROCK, '2' for PAPER, '3' for SCISSORS");

    if (selection === "1") {
        choice = "rock";
    } else if (selection === '2') {
        choice = "paper";
    } else if (selection === '3') {
        choice = "scissors"
    }

    return choice;
}

console.log(getHumanChoice());