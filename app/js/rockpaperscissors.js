////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove == computerMove) {
        winner = "tie";
    } else if (playerMove == "rock" && computerMove == "paper") {
        winner = "computer";
    } else if (playerMove == "paper" && computerMove == "scissors") {
        winner = "computer";
    } else if (playerMove == "scissors" && computerMove == "rock") {
        winner = "computer";
    } else {
        winner = "player";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for (var i=0; i<=5; i++) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();

        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        switch (getWinner (playerMove, computerMove)) {
            case 'tie':
                console.log('It is a tie.');
                break;
            case 'player':
                playerWins++;
                console.log('The Player wins.');
                break;
            case 'computer':
                computerWins++;
                console.log('The Computer wins.');
                break;
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins<x && computerWins<x) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        switch (getWinner (playerMove, computerMove)) {
            case 'tie':
                console.log('It is a tie.');
                break;
            case 'player':
                playerWins++;
                console.log('The Player wins.');
                break;
            case 'computer':
                computerWins++;
                console.log('The Computer wins.');
                break;
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}

//playToFive ();
playTo(3);

