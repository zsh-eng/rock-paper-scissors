function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors']
    let selection = Math.floor(Math.random()*3)
    return options[selection]
}

function playRound(playerSelection, computerSelection) {
    function checkWin() {
        let result = (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'papers' && computerSelection == 'rock')
        
        return result
    }
    
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection == computerSelection) {
        return 0
    } else if (checkWin()) {
        return 1
    } else {
        return -1
    }
}

function game() {
    function gameResult() {
        if (playerScore > computerScore) {
            return 'Congrats! You win!'
        } else if (playerScore < computerScore) {
            return 'You lose! Better luck next time!'
        } else {
            return "It's a tie!"
        }
    }
    
    let playerScore = 0
    let computerScore = 0

    for (i = 0; i < 5; i++) {
        let playerSelection = prompt('What are you going to play?')
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
        let computerSelection = computerPlay()
        roundResult = playRound(playerSelection, computerSelection)

        if (roundResult == 1) {
            playerScore++
            console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        } else if (roundResult == -1) {
            computerScore++
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        } else {
            console.log(`You both played ${playerSelection}! It's a tie!`)
        }
    }

    return gameResult()
}

console.log(game())
    