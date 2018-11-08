//variables
var numberOfSquares, colors, pickedColor, squares, rgbColor, message, h1, resetButton, modeButtons, winningScore, activePlayer, turnScore, play0Score, play0TurnScore, play1Score, play2TurnScore, scores;

activePlayer = 0;
winningScore = 15;
turnScore = 5;
numberOfSquares = 6;
colors = [];
pickedColor;
scores = [play0Score,play1Score];
squares = document.querySelectorAll(".square");
rgbColor = document.querySelector("#rgb");
message = document.querySelector("#message");
h1 = document.querySelector("header");
resetButton = document.querySelector("#reset");
modeButtons = document.querySelectorAll(".player");
play0Score = document.getElementById("play-0");
play0TurnScore = document.getElementById("turn-0");
play1Score = document.getElementById("play-1");
play2TurnScore = document.getElementById("turn-1");


/*
-add logic that ties them into the game
-add changing turn logic
-add a winning class
-figure out how to end the game
*/

function player() {
  if (activePlayer === 0) {
    turnScore = play0TurnScore.textContent;
  } else {
    turnScore = play1TurnScore.textContent;
  }
}

function turnScoreMeasure() {
  player();
  if (turnScore > 1) {
    turnScore -= 1;
  } else {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  }
}

function turn() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}

function turnToTotal() {

}


init();

function init(){
  setupPlayerButtonListeners();
  setupSquareEventListeners();
  reset();
}

function setupPlayerButtonListeners(){

reset();
}

function setupSquareEventListeners(){
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor !== pickedColor){
        this.style.backgroundColor = "transparent";
        message.textContent = "Try again"
        turnScoreMeasure();
      } else {
        message.textContent = "Correct!"
        winningColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }
    });
  }
}

resetButton.addEventListener("click", function(){
  reset();
});


//FUNCTIONS
function reset(){
  colors = generateRandomColors(numberOfSquares);
  resetButton.textContent = "NEW GAME";
  colors = generateRandomColors(numberOfSquares);
  pickedColor = selectedColor();
  rgbColor.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
      if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
      } else {
        squares[i].style.display = none;
      }
  }
  h1.style.backgroundColor = "rgb(6, 201, 221)";
  message.textContent = "";
}

function winningColor(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function selectedColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  // Make an array
  var arr = [];
  // repeat num times
  for(var i = 0; i < num; i++){
    // get random color and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " +  green + ", " + blue + ")";
}
//
//
// /* Ideas to continue learning:
// -Make it a two player game
// -Instead of "easy" and "hard" have a "player one" button and a "player two"
// -Instead of "new colors" have a "new game"
// -Discover a one to switch between turns
// -Find out how to keep score
// */
