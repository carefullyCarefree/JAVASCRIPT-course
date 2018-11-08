// Important thing to remember: a for loop doesnt have to look exactly the same for every problem. Each section does something different, but you can pass the array name in, in different places.
function printReverse(array){
  for(var i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
}

// Have to remember that when referencing an array in a function, its important to us [] after. When using a forloop, pass in [i] afterwards.
function isUniform(arr){
  var first = arr[0];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] !== first){
      return false;
    } else {
      return true;
    }
  }
}

// forEach has to start with the array.forEach so that it knows what its looping through. It also needs to have a function passed into it. In the function, you pass in any variable name, and then after the brackets you put what happens after each loop. Remember to reference that previous variable name, the same way i is referenced after a forloop.
function sumArray(num){
  var total = 0;
  num.forEach(function(stuff){
    total += stuff;
  });
  return total;
}

// these functions can get long and complicated. Sometimes the problem requires several steps. Remember everything you've learned so far. sometimes you need to define a variable first. Sometimes you need an if statement. Use everything in your toolbelt.The forloop is basic in this because theres an if statement inside of it.
function max(numbers){
  var max = numbers[0];
  for(var i = 1; i < numbers.length; i++){
    if(numbers[i] > max){
      max = numbers[i];
    }
  }
  return max;
}
