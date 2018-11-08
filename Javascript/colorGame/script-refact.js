//variables

var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var rgbColor = document.querySelector("#rgb");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
  setupModeButtonListeners();
  setupSquareEventListeners();
  reset();
}

function setupModeButtonListeners(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
      reset();
    });
  }
}

function setupSquareEventListeners(){
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor !== pickedColor){
        this.style.backgroundColor = "transparent";
        message.textContent = "Try again"
      } else {
        message.textContent = "Correct!"
        winningColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
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
  resetButton.textContent = "NEW COLORS";
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
