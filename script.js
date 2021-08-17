const topmessage = document.querySelector('#topmsgbox')
const bottommessage = document.querySelector('#bottommsgbox');
const choiceButtons = document.querySelectorAll('.choicebtn');
const rockSelect = document.querySelector('#rockSelect');
const paperSelect = document.querySelector('#paperSelect');
const scissorsSelect = document.querySelector('#scissorsSelect');

let playerChoice;
let playerScore = 0, computerScore = 0, ties = 0;

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        playerChoice = button.textContent;
        rps(playerChoice);
    })
})

function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
    let ranIndx = Math.floor(Math.random() * moves.length);
    return moves[ranIndx];
}


function rps(playerSelection) {

    let winner;

    computerSelection = computerPlay();

    topmessage.textContent = `The computer plays ${computerSelection}`;

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            // message.textContent = "Sorry, you lost. Paper beats Rock!"
            winner = 'computer';
        } else if (computerSelection === 'scissors') {
            // message.textContent = "Congrats, you won. Rock beats Scissors!"
            winner = 'player';
        } else if (computerSelection === 'rock') {
            // message.textContent = "Its a tie!"
            winner = 'tie';
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            // message.textContent = "Its a tie!";
            winner = 'tie';
        } else if (computerSelection === 'scissors') {
            // message.textContent = "Sorry, you lost. Scissors beats Paper!";
            winner = 'computer';
        } else if (computerSelection === 'rock') {
            // message.textContent = "Congrats, you won. Paper beats Rock!";
            winner = 'player';
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            // message.textContent = "Congrats, you won. Scissor beats Paper!";
            winner = 'player';
        } else if (computerSelection === 'scissors') {
            // message.textContent = "Its a tie!";
            winner = 'tie';
        } else if (computerSelection === 'rock') {
            // message.textContent = "Sorry, you lost. Rock beats Scissors!";
            winner = 'computer';
        }
    }

    if (winner === 'player') {
        playerScore++;
    } else if  (winner === 'computer') {
        computerScore++;
    } else if (winner === 'tie') {
        ties++;
    }

    bottommessage.textContent = `The score is Player : ${playerScore}  Computer : ${computerScore}  Ties : ${ties}`;
    return winner
}
/*
window.addEventListener()

function rockBtnClick() {
    playerChoice = 'rock';
    rps(playerChoice);
}

function paperBtnClick() {
    playerChoice = 'paper';
    rps(playerChoice);
}

function scissorsBtnClick() {
    playerChoice = 'scissors';
    rps(playerChoice);
}

/*
rockSelect.addEventListener('click', () => {
    playerChoice = 'rock';
    rps(playerChoice);
})

paperSelect.addEventListener('click', () => {
    playerChoice = 'paper';
    rps(playerChoice);
})

scissorsSelect.addEventListener('click', () => {
    playerChoice = 'scissors';
    rps(playerChoice);
})


function game() {

    let playerScore = 0, computerScore = 0, ties = 0;     
    
    for (let i=0; i < Infinity; i++) {

        rockBtnClick.addEventListener('click', () => {
            playerChoice = 'rock';
            rps(playerChoice);
        })
        
        paperBtnClick.addEventListener('click', () => {
            playerChoice = 'paper';
            rps(playerChoice);
        })
        
        scissorsBtnClick.addEventListener('click', () => {
            playerChoice = 'scissors';
            rps(playerChoice);
        })
        
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
    } else if (playerScore < computerScore) {
        console.log('Sorry, better luck next time.')
    } else if (playerScore === computerScore) {

    }
    console.log(`The score was player: ${playerScore} computer: ${computerScore} with ${ties} ties.`)
}


let playerChoice, computerChoice;




let i = 0;

while (i = 0) {
    winner = rps(playerChoice, computerChoice);

    if (winner === 'computer') {
        computerScore++;
    } else if (winner === 'player') {
        playerScore++;
    } else if (winner === 'tie') {
        ties++;
    }
}
*/
