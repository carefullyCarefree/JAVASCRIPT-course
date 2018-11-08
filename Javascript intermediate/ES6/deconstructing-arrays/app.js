//ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

//ES6
// const [name, age] = ['John', 26];
// console.log(name);
// console.log(age);

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };
// const {firstName, lastName} = obj;
// // console.log(firstName);
// // console.log(lastName);
//
// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);
//
//
// function calcAgeRetire(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }
//
// const [age, retirement] = calcAgeRetire(2000);
// console.log(age);
// console.log(retirement);


const boxes = document.querySelectorAll('.box');

const boxesArr = Array.from(boxes);
boxesArr.forEach(cur => cur.style.backgroundColor = 'blue');

// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'blue');

//ES5
// for(var i = 0; i < boxesArr.length; i++) {
//     if (boxesArr[i].className === 'blue box') {
//         continue;
//     }
//
//     boxesArr[i].textContent = 'I changes to blue';
// }


//ES6 version
for (const curEl of boxesArr) {
    if (curEl.className.includes('blue')) {
        continue;
    }
    curEl.textContent = 'I changes to blue';
}

//array methods
var ages = [12, 40, 3, 13, 4];

var adult = ages.map(function(cur) {
    return cur >= 18;
});
console.log(adult);

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
