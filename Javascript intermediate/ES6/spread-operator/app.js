function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var ages = [12, 30, 69, 12];

//This will call the addFourAges function and use the elements in the ages array as arguments
var sum = addFourAges.apply(null, ages);
console.log(sum);

//spreads the array across all arguments with the dots
const sum2 = addFourAges(...ages);
console.log(sum2);

const familyMiller = ['Carol', 'Stevie', 'Wallie'];
const familyJones = ['Gil', 'Barnie', 'Fivell'];

const bigFamily = [...familyMiller, 'Mary', ...familyJones];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(curEl => curEl.style.color = 'purple');
