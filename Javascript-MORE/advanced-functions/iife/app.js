// in an iife, you have to wrap the expression in parenthesis
//self-calling functions

(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();



(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
