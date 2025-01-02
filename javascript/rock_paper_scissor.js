const score={
    wins:0,
    losses:0,
    ties:0
}
const ScoreElem = document.getElementById("display-score");
ScoreElem.innerText = `ties: ${score.ties}  wins: ${score.wins} losses: ${score.losses}`;
function getComputerMove() {
    const randomNumber = Math.random();
  
    if (randomNumber < 1 / 3) {
      return 'rock';
    } else if (randomNumber < 2 / 3) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }
  
  function playGame(playerMove) {
    const computerMove = getComputerMove();
    let result = '';
  
    if (playerMove === computerMove) {
      result = 'Tie.';
      score.ties++;
    } else if (
      (playerMove === 'rock' && computerMove === 'scissors') ||
      (playerMove === 'paper' && computerMove === 'rock') ||
      (playerMove === 'scissors' && computerMove === 'paper')
    ) {
      result = 'You win.';
      score.wins++;
    } else {
      result = 'You lose.';
      score.losses++;
    }
    ScoreElem.innerText = `ties: ${score.ties}  wins: ${score.wins} losses: ${score.losses}`;
    // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
    //       ties: ${score.ties} , wins: ${score.wins}, losses: ${score.losses}`
      
    // );
  }

 function resetScore(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    ScoreElem.innerText = `ties: ${score.ties}  wins: ${score.wins} losses: ${score.losses}`;
 }