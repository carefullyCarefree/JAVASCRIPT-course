// var johnMass, johnHeight, johnBMI, markMass, markHeight, markBMI;
// johnMass = 20;
// johnHeight = 2;
// johnBMI = johnMass / (johnHeight * johnHeight);
//
// markMass = 30;
// markHeight = 3;
// markBMI = markMass / (markHeight * markHeight);
//
// //is Mark's BMI higher than John's?
// var higherBMI = markBMI > johnBMI;
//
// console.log("is Mark's BMI higher than John's? " + higherBMI)

// ********Ternary Operator*********
// var personName = "Bill";
// var personAge = 4;
//
// // personAge >= 18 ? console.log(personName + ' drinks beer.') : console.log(personName  + ' drinks juice.');
//
// var drink = personAge >= 18 ? 'beer' : 'juice';
//
// console.log(personName + " drinks " + drink);


var johnScore, mikeScore, maryScore;

johnScore = (89 + 120 + 103) / 3;
mikeScore = (116 + 94 + 123) / 3;
maryScore = (97 + 134 + 105) / 3;

console.log(johnScore, mikeScore, maryScore);

// if(mikeAverage > (johnAverage && maryAverage)){
//   console.log("Mike's team wins more on average.");
// } else if (johnAverage > (mikeAverage && maryAverage)){
//   console.log("John's team wins more on average.");
// } else {
//   console.log("Mary's team wins more on average.")
// }

mikeScore > (johnScore && maryScore) ? console.log("Mike's team wins more on average.") : johnScore > (mikeScore && maryScore) ? console.log("John's team wins more on average.") : console.log("Mary's team wins more on average.");

// mikeAverage > johnAverage ? console.log("Mike's team wins more on average.") : console.log("John's team wins more on average.");
