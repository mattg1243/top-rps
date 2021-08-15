function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
    let ranIndx = Math.floor(Math.random() * moves.length);
    return moves[ranIndx];
}

function playerPlay() {
    console.log("What do you pick, rock paper or scissors?")
}

function rps() {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Enter your move : ");

    console.log(`The computer plays ${computerSelection}`)

    if () {
        
    }
}