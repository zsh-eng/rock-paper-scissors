function game() {
	function resetGameIfEnd() {
		if (scores.computerScore >= 5 || scores.playerScore >= 5) {
			scores.computerScore = 0
			scores.playerScore = 0
		}
	}
	function generateComputerSelection() {
		let options = ["Rock", "Paper", "Scissors"]
		let selection = Math.floor(Math.random() * 3)
		return options[selection]
	}
	function getResult() {
		const isTie = playerSelection === computerSelection
		const isWin =
			(playerSelection === "Rock" && computerSelection === "Scissors") ||
			(playerSelection === "Scissors" && computerSelection === "Paper") ||
			(playerSelection === "Papers" && computerSelection === "Rock")

		const result = isTie ? "T" : isWin ? "W" : "L"
		return result
	}
	function displayResult() {
		resultsDiv.textContent += result
	}
	function updateScore() {
		if (result === 'W') {
			scores.playerScore += 1
		} else if (result === 'L') {
			scores.computerScore += 1
		}
	}
	function displayScore() {
		scoreDiv.textContent = `Score: ${scores.playerScore}-${scores.computerScore}`
	}
	function displayMessage() {
		if (scores.playerScore === 5) {
			messageDiv.textContent = "You Win!"
		} else if (scores.computerScore === 5) {
			messageDiv.textContent = "You Lose! Better luck next time!"
		} else {
			messageDiv.textContent = ""
		}
	}

	resetGameIfEnd()
	const playerSelection = this.textContent
	const computerSelection = generateComputerSelection()
	const result = getResult()
	updateScore()
	displayResult()
	displayScore()
	displayMessage()
}

// console.log(game());
function play() {}

const resultsDiv = document.querySelector("#results")
const scores = {
	'playerScore': 0,
	'computerScore': 0,
}
const scoreDiv = document.querySelector('#score')
const messageDiv = document.querySelector('#message')

const buttons = document.querySelectorAll("button")
buttons.forEach((btn) => {
	btn.addEventListener("click", game)
})
