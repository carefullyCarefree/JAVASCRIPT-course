// This function takes the items in an array and prints them in reverse.
function printReverse(greek){
    for(var i = greek.length -1; i >= 0; i--){
    console.log(greek[i]);
  }
}
printReverse(["alpha", "beta", "gamma"]);


// This function is supposed to compare all the items in the array with the first item, in order to discover if they are all the same.
// stuff is the array. isUniform is the function the array is passed into. var first = stuff[0] defines that we are looking at the first item in the array. the forloop uses stuff.length to go through all the items in the array. the if statement does a comparison of each item while the loop is running.
function isUniform(stuff){
  var first = stuff[0]
  for(var i = 1; i < stuff.length; i++){
    if(stuff[i] !== first){
      return false;
    }
  }
  return true;
}
// passing in an argument
isUniform(["alpha", "beta", "gamma"])

// sumArray is supposed to return the sum of all the numbers in an array.

function sumArray(nums){
  var total = 0;
  nums.forEach(function(element){
    total += element;
  });
  return total;
}
nums([1, 2, 3, 5]);

function max(numbers){
  var max = numbers[0];
  for(var i = 1; i < numbers.length; i++){
    if(numbers[i] > max){
      max = numbers[i];
    }
  }
  return max;
}
max([1, 2, 6, 20, 3]);
