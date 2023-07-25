// Rock, Paper, Scissors: refactored with a While Loop & Arrays

window.onload = function game() {
  let playGame = confirm("Shall we play rock, paper, or scissors?");
  if (playGame) {
    while (playGame) {
      const playerChoice = prompt("Please enter rock, paper, or scissors:");
      if (playerChoice || playerChoice === "") {
        const playerOne = playerChoice.trim().toLowerCase();
        if (
          playerOne === "rock" ||
          playerOne === "paper" ||
          playerOne === "scissors"
        ) {
          const computerChoice = Math.floor(Math.random() * 3);
          const rpsArray = ["rock", "paper", "scissors"];
          const computer = rpsArray[computerChoice];
          
          const result =
            playerOne === computer
              ? "Tie game!"
              : playerOne === "rock" && computer === "paper"
                ? `player: ${playerOne}\ncomputer: ${computer}\nComputer wins!`
                : playerOne === "paper" && computer === "scissors"
                  ? `player: ${playerOne}\ncomputer: ${computer}\nComputer wins!`
                  : playerOne === "scissors" && computer === "rock"
                    ? `player: ${playerOne}\ncomputer: ${computer}\nComputer wins!`
                    : `player: ${playerOne}\ncomputer: ${computer}\nPlayer wins!`;
          alert(result);

          playGame = confirm("Would you like to play again?");
          if (!playGame) alert("Ok, thanks for playing.");
          continue;
        } else {
          alert("You didn't enter rock, paper, or scissors.");
          continue;
        }
      } else {
        alert("I guess you changed your mind. Maybe next time...");
        break;
      }
    }
  } else {
    alert("Ok, maybe next time.");
  }
}