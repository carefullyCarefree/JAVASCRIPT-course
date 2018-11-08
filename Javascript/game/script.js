var secretNumber = 4;

// var stringGuess = prompt("Guess a number");
// var guess = Number(stringGuess);

var guess = Number(prompt("Guess a number"));

if(guess === secretNumber) {
  alert("YOU GOT IT RIGHT!");
} else if (guess < secretNumber) {
  alert("Too Low");
} else {
  alert("Too High");
}
