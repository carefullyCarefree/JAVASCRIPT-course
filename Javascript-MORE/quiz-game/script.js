//quiz game

// var question1 = {
//   question: "Is it rainy out?",
//   answers: ["Yes", "No", "It will be in a minute"],
//   correctAnswer: 0;
// }
//
// var question2 = {
//     question: "Is Hannah a software developer yet?",
//     answers: ["Not yet", "Of course", "Maybe a little"],
//     correctAnswer: 2;
// }

// function quizQuestions(num) {
//   return function(){
//     if (num === 1) {
//       question = "Is it rainy out?";
//       answers = ["Yes", "No", "It will be in a minute"];
//       correctAnswer = 0;
//     } else if (num = 2) {
//       question = "Is Hannah a software developer yet?";
//       answers = ["Not yet", "Of course", "Maybe a little"];
//       correctAnswer = 2;
//     } else {
//       question = "Should I buy an Apple computer?";
//       answers = ["Why?", "Most definitely", "Never"];
//       correctAnswer = 0;
//     }
//   }
// }
// var allQuestions = [
//   question1 = {
//     question: "Is it rainy out?",
//     answers: ["0: Yes", "1: No", "2: It will be in a minute"],
//     correctAnswer: 0
//   },
//   question2 = {
//       question: "Is Hannah a software developer yet?",
//       answers: ["0: Not yet", "1: Of course", "2: Maybe a little"],
//       correctAnswer: 2
//     },
//     question3 = {
//       question: "Should I buy an Apple computer?",
//       answers: ["0: Why?", "1: Most definitely", "2: Never"],
//       correctAnswer: 0
//     }
// ];
//
//
//   var selectQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];
//
// questionConstructor();
//
//
// function questionConstructor (question, answers, correct) {
//     console.log(question);
//     var i;
//     for(i = 0; i < answers.length; i++){
//       console.log(answers[i]);
//     }
//     var answer = prompt("type your answer");
//     answer = Number(answer);
//     if (answer === correct) {
//       console.log("That is correct!");
//     } else {
//       console.log("You are incorrect.")
//   }
// }




function allQuestions(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

allQuestions.prototype.displayQuestions = function() {
  console.log(this.question);
  var i;
  for (i = 0; i < this.answers.length; i++){
    console.log(i + ": " + this.answers[i]);
  }
}

allQuestions.prototype.checkAnswer = function (ans, callback) {
  var score;
  if (ans === this.correctAnswer) {
    console.log("CORRECT!");
    score = callback(true);
  } else {
    console.log("Wrong.");
    score = callback(false);
  }
  this.displayScore(score);
}

allQuestions.prototype.displayScore = function (score) {
  console.log("Your current score is: " + score);
  console.log("-------------------------");
}


function gameScore(score) {
  var score = 0;
  return function(correct) {
    if (correct) {
      score++;
    }
    return score;
  }
}

var keepScore = gameScore();

var q1 = new allQuestions("Is it rainy out?", ["Yes", "No", "It will be in a minute"], 0);
var q2 = new allQuestions("Is Hannah a software developer yet?", ["Not yet", "Of course", "Maybe a little"], 2);
var q3 = new allQuestions("Shoud I buy a Mac?", ["Why?", "definitely", "Never"], 0);

var questions = [q1, q2, q3];

function gamePlay() {
  var selectQuestion = Math.floor(Math.random() * questions.length);
  questions[selectQuestion].displayQuestions();
  var answer = prompt("type your answer");

  if (answer !== "exit"){
    questions[selectQuestion].checkAnswer(parseInt(answer), keepScore);
    gamePlay();
  } else {
    console.log("GAME OVER");
  }

}
gamePlay();




// function questionConstructor () {
//     var answer = prompt("type your answer");
//     answer = Number(answer);
//     if (answer === selectQuestion.correctAnswer) {
//       console.log("That is correct!");
//     } else {
//       console.log("You are incorrect.")
//   }
// }
