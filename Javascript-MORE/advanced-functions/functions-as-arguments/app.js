var years = [2000, 1990, 1959, 1902, 1783];

function arrayCalc(arr, fn) {
  //empty array for the ages associated with the birth years in the "years" array
  var ageArr = [];
  //Loop to loop through the array passed into the function as an argument
  for (var i = 0; i < arr.length; i++) {
    //pushing the items from the array that was passed into the funtion (years), but running them through the function passed in (calculateAge) first.
    ageArr.push(fn(arr[i]));
  }
  return ageArr;
}

function calculateAge(el) {
  return 2018 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

heartRate = arrayCalc(ages, maxHeartRate);
console.log(heartRate);

/*In the example above, a function is created that takes two arguments. I inturn passed in an array and a function as the arguments. */
