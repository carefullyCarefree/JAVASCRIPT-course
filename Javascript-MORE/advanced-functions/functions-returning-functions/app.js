//returning interview questions

// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + ', can you please explain what UX design is?');
//     }
//   } else if (job === 'teacher') {
//     return function(name) {
//       console.log("What subject do you teach, " + name + "?");
//     }
//   } else {
//     return function(name) {
//       console.log("What's your greatest fear, " + name + "?");
//     }
//   }
// }
//
// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
//
// teacherQuestion("Jill");
// designerQuestion("Mary");
//
// interviewQuestion("teacher")("Steve");


function lateExcuse (season) {
  if (season === 'summer') {
    return function (excuse) {
      console.log("It was so hot that " + excuse);
    }
  } else if (season === 'fall') {
    return function (excuse) {
      console.log("The leaves got in my way and " + excuse);
    }
  } else if (season === "winter") {
    return function (excuse) {
      console.log("My snot froze and " + excuse);
    }
  } else {
      console.log("I got bit by a moose.");
  }
}

lateExcuse("summer")("I ran into a tree.");
lateExcuse("summer")("I fainted from the heat.");
lateExcuse("fall")("I tripped over a dog.");
lateExcuse("winter")("I slipped on the steps.");
lateExcuse("winter")("I got barried in 9 inches of snow.");
lateExcuse("spring");
