var flowers = ["daisy", "rose", "holly", "orchid"];
// <!-- adds an item to the array -->
flowers.push("violet");
// removes last item from the array
flowers.pop();

// adds an item to the beginning of the array
flowers.unshift("sunflower");
// removes item from the front of the array
flowers.shift();

// returns the location of the item in the array. If the item isn't in the array, a -1 will be returned.
flowers.indexOf("daisy"); //0

// create a new array out of parts of an existing array with slice
var niece = flowers.slice(0, 1);
// or leave the paranthesis empty to copy the entire array
var newFlowers = flowers.slice();

// nested arrays
var foods = [
  ["lettuce", "spinach", "cabbage"],
  ["pizza", "tacos", "sandwiches"],
  ["olives", "beans", "corn"]
];
// below will select the third array, and the first item in that array
foods[2][0]

// use a for loop to go through all items in an array
for(var = i; i < colors.length; i++){
  console.log([i]);
}
// forEach goes through each item in the named array and does something
flowers.forEach(function(argument){
  console.log("i love" + argument);
});
// different way of using the forEach
function printFlower(flower){
  console.log(flower);
}
flowers.forEach(printFlower);
// using a while loop
count = 0;
while(count < flower.length){
  console.log(flower[count]);
  count++;
}
