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
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
	if (playerMove === computerMove) {
		return "tie";
	}

	switch (playerMove) {
		case 'rock':
			if (computerMove === 'paper') {
				console.log('\n' + "@@@@@@@@@@@@@@@ Computer Wins! @@@@@@@@@@@@@@@" + '\n');
				return 'computer';
			} else {   // computer must be scissors
				console.log('\n' + "@@@@@@@@@@@@@@@ Human Wins! @@@@@@@@@@@@@@@" + '\n');
				return "player";
			}
			break;

		case "paper":
			if (computerMove === 'rock') {
				console.log('\n' + "@@@@@@@@@@@@@@@ Human Wins! @@@@@@@@@@@@@@@" + '\n');
				return 'player';
			} else {  // computer must be scissors
				console.log('\n' + "@@@@@@@@@@@@@@@ Computer Wins! @@@@@@@@@@@@@@@" + '\n');
				return "computer";
			}
			break;

		case "scissors":
			if (computerMove === 'rock') {
				console.log('\n' + "@@@@@@@@@@@@@@@ Computer Wins! @@@@@@@@@@@@@@@" + '\n');
				return "computer";
			} else {   // computer must be paper
				console.log('\n' + "@@@@@@@@@@@@@@@ Human Wins! @@@@@@@@@@@@@@@" + '\n');
				return "player";
			}
			break;

		default:
			console.log('\n' + "Silly Human; you MUST choose 'rock', 'paper', or 'scissors'!" + '\n');
			return "You screwed up!";
	}	
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors!" + "\n");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    for (var i = 1; ; i++) {
    	// getPlayerMove will return a string value: 'rock,' 'paper,' or 'scissors'
    	console.log("Round " + i + ":");
    	playerMove = getPlayerMove();
    	console.log("Player move: " + playerMove);
    	computerMove = getComputerMove();
    	console.log("Computer move: " + computerMove);

    	//getWinner() returns a string: 'player' or 'computer' or 'tie'
    	winner = getWinner(playerMove, computerMove);
    	if (winner === 'player') {
    		playerWins += 1;
    		console.log("********** " + winner + ' won round ' + i + " **********");
    	} else if (winner === "computer") {
    		computerWins +=1;
    		console.log("********** " + winner + ' won round ' + i + " **********");
    	} else if (winner === 'tie') {
            console.log('Round ' + i + ' was a tie.');
    	} else {
            console.log("Something went wrong! Try again." + '\n');
        }

    	console.log("Scoreboard: Player - " + playerWins + '; Computer - ' + computerWins + "\n");

    	if (playerWins === 5) {
    		console.log("You won the match!");
    		return [playerWins, computerWins];
    	} else if (computerWins === 5) {
    		console.log("The computer won the match!");
    		return [playerWins, computerWins]; 
    	}  
	}
}

playToFive();

