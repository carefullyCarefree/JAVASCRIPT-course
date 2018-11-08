// function isEven(num){
//   if (num % 2 === 0){
//     return true;
//   } else {
//     return false;
//   }
// }
// or
funtion isEven(num){
  return num % 2 === 0;
}

// This is the equivalent of 4*3*2*1
function factorial(num) {
  var result = 1;
  for(var i = 1; i <= num; i++){
    result *= i;
  }
  return result;
}
number= 4
// or this longer version
function factorial(num) {
  if(num === 0){
    return 1;
  }
  var result = 1;
  for(var i = num-1; i >= 1; i--){
    result *= i;
  }
  return result;
}
number= 4


function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return(newStr)
}

kebabToSnake()
