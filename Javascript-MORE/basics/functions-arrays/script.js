// var lifeStyle = function(firstName, eatingHabits){
//   switch(eatingHabits){
//     case "healthy":
//       return firstName + " eats lots of vegetables";
//     case "occational":
//       return firstName + " eats some vegetables";
//     case "unhealthy":
//       return firstName + " eats garbage";
//     default:
//       return firstName + " has secret eating habits";
//   }
// }
//
// console.log(lifeStyle("Jill", "occational"));
// console.log(lifeStyle("Karen", "healthy"));
// console.log(lifeStyle("Fred", "unhealthy"));
// console.log(lifeStyle("Randa"));


//***********ARRAYS***************

// arr.push("something"); //adds something to the end of an array
// arr.unshift("something else"); //adds something to the beginning of the array
//
// arr.pop("something"); //removes last item from array
// arr.shift("something else"); //removes first item from the array


// *******CHALLENGE***********



// function johntips(bill){
//   if(bill < 50){
//     return bill * .2;
//   } else if (bill < 200){
//     return bill * .15;
//   } else {
//     return bill * .1;
//   }
// }
function johntips(bill){
  var percentage;
  if(bill < 50) {
    percentage = .2;
  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return Math.round(percentage * bill);
}

var johnsBills = [124, 48, 268];
var allJohnsTips = [johntips(johnsBills[0]), johntips(johnsBills[1]), johntips(johnsBills[2])];
var johnsTotals = [johnsBills[0] + allJohnsTips[0], johnsBills[1] + allJohnsTips[1], johnsBills[2] + allJohnsTips[2]];

console.log(allJohnsTips);
console.log(johnsTotals);
