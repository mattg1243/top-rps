function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
    let ranIndx = Math.floor(Math.random() * moves.length);
    return moves[ranIndx];
}

function playerPlay() {
    console.log("What do you pick, rock paper or scissors?")
}

function rps() {

    console.log(`The computer plays ${computerSelection}`)

    if (computerSelection === 'paper') {
        console.log("Sorry, you lost. Paper beats Rock!")
    } else if (computerSelection === 'scissors') {
        console.log("Congrats, you won. Rock beats Scissors!")
    } else if (computerSelection === 'rock') {
        console.log("Its a tie!")
    }
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(rps())

