//How many more gallons of water will I drink before I die?


// function totalWater(deathAge) {
//   return function (currentAge) {
//     var yearsLeft = deathAge - currentAge;
//     var gallons = 182 * yearsLeft;
//     console.log("You will drink " + gallons + " more gallons of water before you die.");
//   }
// }
//
// var susan = totalWater(85)(26);
// var bill = totalWater(103)(17);


var susan = {
  name: "Susan Samuals",
  currentAge: 43,
  alreadyConsumed: 4.2,
  totalWater: function(deathAge) {
    return function (currentAge) {
      var yearsLeft = deathAge - currentAge;
      var gallons = 182 * yearsLeft;
      console.log(susan.name + " will drink " + gallons + " more gallons of water before she dies.");
    }
  },
  cupsOfTea: function(maxTea) {
    return function (alreadyConsumed) {
      var moreTea = maxTea - alreadyConsumed;
      console.log("You can have " + moreTea + " more cups of tea.");
    }
  }
}

console.log(susan.totalWater(87)(susan.currentAge));
console.log(susan.cupsOfTea(10)(susan.alreadyConsumed));

//How many more cups of tea can I drink before I need to pee?

// function cupsOfTea(maxTea) {
//   return function (alreadyConsumed) {
//     var moreTea = maxTea - alreadyConsumed;
//     console.log("You can have " + moreTea + " more cups of tea.");
//   }
// }
//
// cupsOfTea(10)(2.3);




function interviewQuestion(job) {
  return function (name) {
    if (job === "designer") {
      console.log(name + ", explain some fancy design stuff.");
    } else if (job === "teacher") {
      console.log("What do you like to teacher the most, " + name + "?");
    } else {
      console.log("Tell me something weird about you. Whats your greatest fear? Why did you parents name you " + name + "?");
    }
  }
}
interviewQuestion("teacher")("Crissa");
