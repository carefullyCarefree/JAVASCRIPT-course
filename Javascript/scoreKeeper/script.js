var playOne = document.querySelector("#one");
var playTwo = document.querySelector("#two");
var first = document.querySelector("#first");
var second = document.querySelector("#second");
var play = document.querySelector("#play");
var input = document.querySelector("input");
var reset = document.querySelector("#reset");

//I have to remember things like the below variables. If you can define it as a variable, do.
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;



playOne.addEventListener("click", function(){
  if(!gameOver){
    p1score++;
    if(p1score === winningScore){
      first.classList.add("oneHit");
      gameOver = true;
    }
    first.textContent = p1score;
  }
});

playTwo.addEventListener("click", function(){
  if(!gameOver){
    p2score++;
    if(p2score === winningScore){
      second.classList.add("oneHit");
      gameOver = true;
    }
    second.textContent = p2score;
  }
});

reset.addEventListener("click", function(){
  resetGame();
});

function resetGame(){
  first.textContent = 0;
  first.classList.remove("oneHit");
  second.textContent = 0;
  second.classList.remove("oneHit");
  gameOver = false;
  p1score = 0;
  p2score = 0;
}



input.addEventListener("change", function(){
  play.textContent = input.value; //Could replace the "input" in this line with "this"
  winningScore = Number(input.value);//Have to use the "Number" opperator, otherwise it will be comparing numbers and strings.
  resetGame();
});
