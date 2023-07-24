// Rock, Paper, Scissors: refactored with a While Loop & Arrays
window.onload = function game() {
  let playGame = confirm("Shall we play rock, paper, or scissors?");
  if (playGame) {
    let playerChoice = prompt("Please enter rock, paper, or scissors:");
    if (playerChoice) {
      let playerOne = playerChoice.trim().toLowerCase();
      if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {

        let computerChoice = Math.floor(Math.random() * 3 + 1);
        let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";

        let result = playerOne === computer ? "Tie game!"
          : playerOne === "rock" && computer === "paper" ?
            `player: ${playerOne}\ncomputer: ${computer}\nComputer wins!`
            : playerOne === "paper" && computer === "scissors" ?
              `player: ${playerOne}\ncomputer: ${computer}\nComputer wins!`
              : playerOne === "scissors" && computer === "rock" ? "Computer wins!"
                : `player: ${playerOne}\ncomputer: ${computer}\nPlayer wins!`;
        alert(result);

        let playAgain = confirm("Would you like to play again?");
        playAgain ? location.reload() : alert("Ok, thanks for playing.");
        // location.reload() reloads the web page 
      } else {
        alert("You didn't enter rock, paper, or scissors.");
        location.reload();
      }
    } else {
      alert("I guess you changed your mind. Maybe next time...");
    }
  } else {
    alert("OK, maybe next time...");
  }
}