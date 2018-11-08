// variables
var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = selectedColor();
var rgbColor = document.querySelector("#rgb");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");


rgbColor.textContent = pickedColor;

// *******event listeners************
for(var i = 0; i < squares.length; i++){
  // asigns colors
  squares[i].style.backgroundColor = colors[i];
// does logic
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;

    if(clickedColor !== pickedColor){
      this.style.backgroundColor = "transparent";
      message.textContent = "Try again"
    } else {
      message.textContent = "Correct!"
      winningColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
      reset.textContent = "Play Again?";
    }
  });
}

easyButton.addEventListener("click", function(){
  easyButton.classList.add("blue");
  hardButton.classList.remove("blue");
  var numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);

  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  pickedColor = selectedColor();
  rgbColor.textContent = pickedColor;
});

hardButton.addEventListener("click", function(){
  easyButton.classList.remove("blue");
  hardButton.classList.add("blue");
  var numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);

  for(var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
  }
  pickedColor = selectedColor();
  rgbColor.textContent = pickedColor;
});

reset.addEventListener("click", function(){
  this.textContent = "NEW COLORS";
  colors = generateRandomColors(numberOfSquares);
  pickedColor = selectedColor();
  rgbColor.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    // asigns colors
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "rgb(6, 201, 221)";
  message.textContent = "";
});

// functions
function winningColor(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}
// This code works, but I'm sure theres a reason that they did things differently
// function winningColor(){
//   for(var i = 0; i < squares.length; i++){
//     squares[i].style.backgroundColor = pickedColor;
//   }
// }
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


/* Ideas to continue learning:
-Make it a two player game
-Instead of "easy" and "hard" have a "player one" button and a "player two"
-Instead of "new colors" have a "new game"
-Discover a one to switch between turns
-Find out how to keep score
*/
