var canvas;
var canvasContext;

window.onload = function(){
  canvas = document.querySelector("#gameCanvas");
  canvasContext = canvas.getContext("2d");
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(395,0,10,600);

}
