
function computerPlayer() { // selects computer choice
    let oneOfThree = Math.floor(Math.random() * 3);
    if (oneOfThree == 0) {
        return 'Rock';
    } else if (oneOfThree == 1) {
        return 'Paper';
    } else if (oneOfThree == 2) {
        return 'Scissors';
    }
}



function capitalize(playerSelection) { // changes selection to the right char
    const cap = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    return cap;
}


function gameStart() {
    let roundsPlayed = 0;
    let playerWin = 0;
    let computerWin = 0;
    let gameWinner = "";

    while (roundsPlayed < 5) {
        roundsPlayed++;
        const computerSelection = computerPlayer();
        playerSelection = prompt("Enter Rock, Paper or Scissors:");
        console.log(playRound(capitalize(playerSelection), computerSelection));
        if (roundsPlayed > 1) {
            console.log(" ");
        }
        console.log("Round: " + roundsPlayed + ":");
        console.log("Player win totals: " + playerWin);
        console.log("Computer win totals: " + computerWin);

        function playRound(playerSelection, computerSelection) { //defines win and lose
            let tie = "It's a tie! You have selected " + playerSelection + ' and the computer has selected ' + computerSelection;
            let win = 'You win! You selected ' + playerSelection + ' and the computer has selected ' + computerSelection;
            let lose = 'You lose! You selected ' + playerSelection + ' and the computer has selected ' + computerSelection;

            if (playerSelection === computerSelection) {
                return tie;
            } else if (((playerSelection === 'Paper') && (computerSelection === 'Rock')) || ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) || ((playerSelection === 'Rock') && (computerSelection === 'Scissors'))) {
                playerWin++;
                return win;
            } else if (((playerSelection === 'Paper') && (computerSelection === 'Scissors')) || ((playerSelection === 'Scissors') && (computerSelection === 'Rock')) || ((playerSelection === 'Rock') && (computerSelection === 'Paper'))) {
                computerWin++;
                return lose;
            }
        }
    }
    if (playerWin > computerWin) {
        alert("YOU WIN!");
    } else if (computerWin === playerWin) {
        alert("It's a tie!");
    } else {
        alert("YOU LOSE!");
    }
}
gameStart();