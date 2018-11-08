function sing() {
  console.log("twinkle...");
  console.log("little star...");
}
// setInterval(anotherFunction, interval(ms))
setInterval(sing, 2000);
// stops interval
clearInterval()

// using an anonymous function
setInterval(function(){
  console.log("I am an anonymous function");
  console.log("woo");
}, 2000);
