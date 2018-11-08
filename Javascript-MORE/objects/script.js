//function constructors have a capital first letter.

//example:

/* var Person = function(name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}
Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = "Smith"


var john = new Person("John", 1990, "teacher");
var karen = new Person("Karen", 1984, "spy");
var steve = new Person("Steve", 1929, "president");

john.calculateAge();
karen.calculateAge();
steve.calculateAge(); */


//=======OBJECT.CREATE============
/* Allows us to implement really complex inheritence structures in an easier way than function constructures because it allows us to specify which object should be a prototype  */

var personProto = {
  calculateAge: function() {
    console.log(2018 - this.yearOfBirth);
  }
}

var john = Object.create(personProto);

var jill = Object.create(personProto,
{
  name: { value: "Jane"},
  yearOfBirth: { value: 1809},
  job: { value: "spy"}
});
