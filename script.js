function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
    let ranIndx = Math.floor(Math.random() * moves.length);
    return moves[ranIndx];
}

function playerPlay() {
    console.log("What do you pick, rock paper or scissors?")
}

function rps(playerSelection, computerSelection) {

    let winner;

    console.log(`The computer plays ${computerSelection}`)

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log("Sorry, you lost. Paper beats Rock!")
            winner = 'computer';
        } else if (computerSelection === 'scissors') {
            console.log("Congrats, you won. Rock beats Scissors!")
            winner = 'player';
        } else if (computerSelection === 'rock') {
            console.log("Its a tie!")
            winner = 'tie';
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            console.log("Its a tie!")
            winner = 'tie';
        } else if (computerSelection === 'scissors') {
            console.log("Sorry, you lost. Scissors beats Paper!")
            winner = 'computer';
        } else if (computerSelection === 'rock') {
            console.log("Congrats, you won. Paper beats Rock!")
            winner = 'player';
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log("Congrats, you won. Scissor beats Paper!")
            winner = 'player';
        } else if (computerSelection === 'scissors') {
            console.log("Its a tie!")
            winner = 'tie';
        } else if (computerSelection === 'rock') {
            console.log("Sorry, you lost. Rock beats Scissors!")
            winner = 'computer';
        }
    }

    return winner
}


function game() {

    let playerScore = 0, computerScore = 0, ties = 0;     
    
    for (let i=0; i < 5; i++) {
        
        let computerSelection = computerPlay();
        let playerSelection = prompt('Make a move: rock, paper, or scissors: ');
        console.log(computerSelection);
        let roundWinner = rps(computerSelection, playerSelection);
        console.log("roundWinner = " + roundWinner);
        
        if (roundWinner === 'computer') {
            computerScore++;
        } else if (roundWinner === 'player') {
            playerScore++;
        } else if (roundWinner === 'tie') {
            ties++;
        }
    }

    if (playerScore > computerScore) {
        console.log('You won the game!') 
    } else {
        console.log('Sorry, better luck next time.')
    }
    console.log(`The score was player: ${playerScore} computer: ${computerScore} with ${ties} ties.`)
}

game();