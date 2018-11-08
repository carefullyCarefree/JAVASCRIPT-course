// var num = -10;
//
// while (num < 20){
//   console.log(num);
//   num++
// }
// var num = 10;
//
// while (num <= 40){
//   console.log(num);
//   num+=2
// }
// var num = 300;
//
// while (num <= 333){
//   if (num % 2 !== 0)
//   console.log(num);
//   num+=1
// }
// var num = 5;
//
// while (num <= 50){
//   if(num % 5 === 0 && num % 3 === 0){
//   console.log(num);
//   }
//   num++
// }

// var str = "Goodbye";
// var count = 0;
// while(count < str.length) {
//   console.log(str[count]);
//   count++
// }




var answer = prompt("Is it Christmas yet?");
// while(answer.indexOf("yes") === -1) is an option to check if the answer contains the word "yes"
while(answer !== "yes" && answer !== "yeah"){
  var answer = prompt("Is it Christmas yet?");
}
alert("MERRY CHRISTMAS!!");
