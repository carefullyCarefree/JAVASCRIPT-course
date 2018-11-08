// John's eating out object
var eatingOut = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  total: [],
  calcTip: function(){
    var i;
    for(i = 0; i < this.bills.length; i++){
      var percentage;
      if (this.bills[i] < 50){
        percentage = .2;
      } else if (this.bills[i] > 50 && this.bills[i] < 200){
        percentage = .15;
      } else {
        percentage = .1;
      }
      this.tips.push(Math.round(this.bills[i] * percentage));
      this.total.push(Math.round(this.bills[i] * percentage) + this.bills[i]);
    }
  }
};

//John's bills, tips and totals calculated and put into arrays
console.log("John")
eatingOut.calcTip();
console.log("Bills: " + eatingOut.bills);
console.log("Tips: " + eatingOut.tips);
console.log("Totals: " + eatingOut.total);

//Mark's eating out object
var markEatingOut = {
  bills: [77, 375, 110, 45],
  tips: [],
  total: [],
  calcTip: function(){
    var i;
    for(i = 0; i < this.bills.length; i++){
      var percentage;
      if (this.bills[i] < 100){
        percentage = .2;
      } else if (this.bills[i] > 100 && this.bills[i] < 300){
        percentage = .1;
      } else {
        percentage = .25;
      }
      this.tips.push(Math.round(this.bills[i] * percentage));
      this.total.push(Math.round(this.bills[i] * percentage) + this.bills[i]);
    }
  }
};

//Mark's bills, tips and totals calculated out into arrays
console.log("mark");
markEatingOut.calcTip();
console.log("Bills: " + markEatingOut.bills);
console.log("Tips: " + markEatingOut.tips);
console.log("Totals: " + markEatingOut.total);


//The function to determine the average amount someone tips
function averageTips(tips){
  var i;
  var sum = 0;
  for(i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length
}
//The way to push the average into the people's eating out objects
eatingOut.average = averageTips(eatingOut.tips);
markEatingOut.average = averageTips(markEatingOut.tips);

//Loggin the information to the console
console.log("John's average tip amount: " + averageTips(eatingOut.tips));
console.log("Mark's average tip amount: " + averageTips(markEatingOut.tips));

//Determining who is the overall higher tipper
if (averageTips(eatingOut.tips) > averageTips(markEatingOut.tips)) {
  console.log("John's tips are higher on average.");
} else if (averageTips(eatingOut.tips) < averageTips(markEatingOut.tips)){
  console.log("Mark is the higher tipper on average.");
} else {
  console.log("They tipped the same");
}
