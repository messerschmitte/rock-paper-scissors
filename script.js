oneOfThree = Math.floor(Math.random() * 3);



function computerPlayer() {
    if (oneOfThree == 0) {
        return 'Rock';
    } else if (oneOfThree == 1) {
        return 'Paper';
    } else if (oneOfThree == 2) {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let tie = "It's a tie! You have selected " + playerSelection + ' and the computer has selected ' + computerSelection;
    let win = 'You win! You selected ' + playerSelection + ' and the computer has selected ' + computerSelection;
    let lose = 'You lose! You selected ' + playerSelection + ' and the computer has selected ' + computerSelection;

    if (playerSelection === computerSelection) {
        return tie;
    } else if (((playerSelection === 'Paper') && (computerSelection === 'Rock')) || ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) || ((playerSelection === 'Rock') && (computerSelection === 'Scissors'))) {
        return win;
    } else if (((playerSelection === 'Paper') && (computerSelection === 'Scissors')) || ((playerSelection === 'Scissors') && (computerSelection === 'Rock')) || ((playerSelection === 'Rock') && (computerSelection === 'Paper'))) {
        return lose;
    }
}

function capitalize(playerSelection) {
    const cap = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    return cap;
}

const playerSelection = prompt('Enter Rock, Paper or Scissors:' );
const computerSelection = computerPlayer();
console.log(playRound(capitalize(playerSelection), computerSelection));