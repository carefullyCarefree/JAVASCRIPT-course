
function getUserChoice(userInput) {
  userInput =
  userInput.toLowerCase();
  if(userInput === "paper" || userInput === "rock" || userInput === "scissors"){
  return userInput;
} else {
  console.log("ERROR Please enter a valid choice");
}
}
getUserChoice("paper");

function getComputerChoice(){
  let randomNumber =
      Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 1:
      return "paper";
    case 2:
      return "rock";
    case 0:
      return "scissors"
  }
}
getComputerChoice()

function determineWinner(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return "Tie!";
  }
if (userChoice === "rock"){
  if(computerChoice === "paper"){
    return "Computer is the winner!";
  } else {
    return "You won!";
  }
}
if (userChoice === "paper"){
  if(computerChoice === "scissors"){
     return "Computer is the winner!";
  } else {
    return "You won!";
  }
}
if(userChoice === "scissors"){
  if(computerChoice === "rock"){
      return "Computer is the winner!";
  } else {
    return "You won!";
  }
}
}

function playGame(){
  var userChoice = getUserChoice('rock');
  var computerChoice = getComputerChoice('scissors');
console.log("User: " + userChoice);
  console.log("Computer: " + computerChoice);
  console.log (determineWinner(userChoice, computerChoice));
}
playGame()
