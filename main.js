let computerChoice = computerSelection();
const numberOfRounds = 5;

// Random generation of Rock Paper or Scissors by the computer
function computerSelection() {
    let randomNumber = Math.floor(Math.random()*3 +1);
    switch(randomNumber) {
        case 1: return "paper";
        case 2: return "rock";
        case 3: return "scissors";
    }
}

// Verification that users has selected "Rock", "paper" or "scissors" and that it isn't a draw
function playerSelection(playerPick) {
    while(["rock","paper","scissors"].indexOf(playerPick) === -1) {
        playerPick = prompt("You must choose 'rock', 'paper' or 'scissors'").toLowerCase();
        return playerPick;
    }
    while(playerPick === computerChoice) {
        playerPick = prompt("That's a draw ! Try Again").toLowerCase();
        computerChoice = computerSelection(); //Rerolls to avoid the player picking counter now that they know the computer choice
    }
    return playerPick;
}

// plays a Round and return 1 if player wins, 0 if player looses
function playRound(playerPick,computerChoice) {
    if(playerPick == "rock") {
        switch(computerChoice) {
            case("scissors") : playerScore += 1; return 1;
            case("paper") : computerScore += 1; return 0;
        }
    }
    else if(playerPick == "paper") {
        switch(computerChoice) {
            case("rock") : playerScore += 1; return 1;
            case("scissors") : computerScore += 1; return 0;
        }
    }
    else if(playerPick == "scissors") {
        switch(computerChoice) {
            case("paper") : playerScore += 1; return 1;
            case("rock") : computerScore += 1; return 0;
        }
    }
}

//Plays 5 round
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < numberOfRounds && playerScore < 3 && computerScore < 3; i++) { //stops the game after 5 rounds OR a player reaching 3 victories
        computerChoice = computerSelection();
        let playerPick = playerSelection(prompt("Round "+ (i+1) + ": Rock, Paper or Scissors ? Choose Wisely.").toLowerCase());
        let currentWinner = playRound(playerPick,computerChoice);
        (currentWinner) ? console.log("You win ! Your " + playerPick + " beats their " + computerChoice + ". You : " + playerScore + " - " + computerScore + " : The computer") : 
        console.log("You loose ! Their " + computerChoice + " beats your " + playerPick + ". You : " + playerScore + " - " + computerScore + " : The computer");
    }
    (playerScore > computerScore) ? console.log("Final Score : " + playerScore + " - " + computerScore + " You are the master of Rock-Paper-Scissors") : 
    console.log("Final Score : " + playerScore + " - " + computerScore + " You just lost to a random number generator...");
}