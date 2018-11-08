// var firstPerson = {
//   firstName: "Bill",
//   birthYear: 1990,
//   calcAge: function(){
//     this.age = 2018 - this.birthYear;
//    return this.age;
//   }
// };
//
// console.log(firstPerson.calcAge());

// console.log("My name is: " + firstPerson.firstName + " " + firstPerson.lastName + " and I am " + firstPerson.calcAge() + " years old.");

// *********CHALLANGE*********

var mark = {
  fullName: "Mark Gates",
  mass: 98,
  height: 1.45,
  calcBMI: function(){
    this.bmi = (this.height * this.height) / this.mass;
    return this.bmi;
  }
};

var john = {
  fullName: "John Benning",
  mass: 69,
  height: 1.9,
  calcBMI: function(){
    this.bmi = (this.height * this.height) / this.mass;
    return this.bmi;
  }
};

if(mark.calcBMI() > john.calcBMI()){
  console.log(mark.fullName + " has a higher BMI.");
} else if(mark.calcBMI() < john.calcBMI()){
  console.log(john.fullName + " has the higher BMI");
} else {
  console.log("The BMIs of " + john.fullName + " " + mark.fullName + " are equal.")
}
