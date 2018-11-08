var years = [1920, 2006, 1966, 2010, 1996];

function arrCalc (arr, fn) {
  var arrRes = [];
  var i;
  for (i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2018 - el;
}

function isDrivingAge (limit, el) {
  return el >= limit;
}

var ages = arrCalc(years, calculateAge);
var missouriDriving = arrCalc(ages, isDrivingAge.bind(this, 15));

console.log(ages);
console.log(missouriDriving);

//Tried to make this problem more interesting, but i couldn't get it to work for me.

// function personAge(age){
//   var i;
//   for(i = 0; i < age.length; i++){
//     if (age[i] >= missouriDriving) {
//       console.log("I can drive, because I am " + age[i] + " years old.");
//     } else {
//       console.log("I'm only " + age[i] + ", I can't drive yet.");
//     }
//   }
// }
//
//
// personAge(ages);
