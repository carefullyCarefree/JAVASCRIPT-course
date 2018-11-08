// The method below will print out 3, 6, and 9. the function defined inside the forEach could be named anything

var stuff = [3, "twenty", 10, 9, "buckle", 6];

stuff.forEach(function(blah){
  if(blah% 3 === 0) {
    console.log(blah);
  }
});


// Now here is the for loop version

var stuff = [3, "twenty", 10, 9, "buckle", 6];
// .length determines that we are looking for the position in something. Always use [] after array name to refer to something in the array.
for(var i = 0; i < stuff.length; i++){
  if(stuff[i] % 3 === 0){
    console.log(stuff[i]);
  }
}
