/* Classes
//ES5
var Cat5 = function(name, yearOfBirth, favoriteToy) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.favoriteToy = favoriteToy;
}

Cat5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}
var fluffy5 = new Cat5 ('Fluffy', 2010, 'squirrels');

//ES6
class Cat6 {
    constructor (name, yearOfBirth, favoriteToy) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.favoriteToy = favoriteToy;
    }
    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
}

const fluffy6 = new Cat6('Fluffy', 2010, "squirrels");
*/


//CLASSES WITH SUBCLASSES
//ES5
var Cat5 = function(name, yearOfBirth, favoriteToy) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.favoriteToy = favoriteToy;
}

Cat5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var CatSkills5 = function(name, yearOfBirth, favoriteToy, reading, assasination)
{
    Cat5.call(this, name, yearOfBirth, favoriteToy);
    this.reading = reading;
    this.assasination = assasination;
}
//You have to create a prototype property before you can create prototypes?
CatSkills5.prototype = Object.create(Cat5.prototype);

//Cat5 will not inherit this prototype
CatSkills5.prototype.killedAnother = function() {
    this.assasination++
    console.log(this.assasination);
}

var sniffles = new CatSkills5('Sniffles', 2017, 'Markers', 'books', 27);

sniffles.calculateAge();
sniffles.killedAnother();

//ES6
class Cat6 {
    constructor (name, yearOfBirth, favoriteToy) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.favoriteToy = favoriteToy;
    }
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class CatSkills6 extends Cat6 {
    constructor(name, yearOfBirth, favoriteToy, reading, assasination) {
        super(name, yearOfBirth, favoriteToy);
        this.reading = reading
        this.assasination = assasination;
    }
    killedAnother() {
        this.assasination++
        console.log(this.assasination);
    }
}

const sniffles6 = new CatSkills6('Sniffles', 2017, 'Markers', 'books', 27);

sniffles6.killedAnother();
sniffles6.calculateAge();
