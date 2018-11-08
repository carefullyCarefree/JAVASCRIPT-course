var userName = "Hannah";
if (userName == "") {
      console.log("Hello");
    } else {
      console.log("Welcome " + userName);
    }

var userQuestion = "Will I find my lunch money?";
console.log(userName + " wants to know " + userQuestion);

var randomNumber = Math.floor(Math.random() * 6);

var eightBall = "";

switch(randomNumber) {
    case 0:
        eightBall = "Yes";
        break;
    case 1:
        eightBall = "No";
        break;
    case 2:
        eightBall = "Maybe on Tuesday";
        break;
    case 3:
        eightBall = "Only if you beg";
        break;
    case 4:
        eightBall = "No. Never in a million years";
        break;
    case 5:
        eightBall = "Ask again";
        break;
    case 6:
        eightBall = "Why?";
}

console.log(eightBall)
