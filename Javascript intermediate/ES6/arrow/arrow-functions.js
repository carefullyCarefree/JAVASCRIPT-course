// const years = [1909, 1890, 1987, 2000];
//
// //es5
// var ages5 = years.map(function(el) {
//     return 2018 - el;
// });
//
//
// //es6
// //with one argument
// let ages6 = years.map(el => 2018 - el);
//
// //with multiple arguments
// ages6 = years.map((el, index) => `Age element ${index - 1}: ${2018 - el}.`);
// console.log(ages6);
//
// //or
// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index - 1}: ${age}.`
// });
// console.log(ages6);



//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box numer ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
// box5.clickMe();
/*
EXPLANAINTION
Without the arrow function, the above function does not have access to the 'this' keyword. That means that we have to use a weird work around to make the function work.
With the arrow function, the function can use the 'this' keyword, and therefore needs no work around.
There are downsides to the 'this' keyword with arrow functions.
*/


//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box numer ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
// box6.clickMe();

//ES5
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr)
}

var friends = ['Bill', 'Stevie', 'Aaron'];
new Person('John').myFriends5(friends);



//ES6
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`
    );

    console.log(arr)
}

var friends = ['Bill', 'Stevie', 'Aaron'];
new Person('Mike').myFriends6(friends);
