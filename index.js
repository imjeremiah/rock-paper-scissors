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

console.log(getComputerChoice());