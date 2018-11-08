var button = document.querySelector("button");
var isPink = false;

button.addEventListener("click", function(){
  if(isPink){
    document.querySelector("body").style.background = "blue";
  } else {
    document.body.style.background = "pink";
  }
  isPink = !isPink;
});
