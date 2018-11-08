// function isFullAge(...years) {
//     years.forEach(curEl => console.log((2018 - curEl) >= 18));
// }
//
// isFullAge(1990, 2000, 1987, 2005);

//The above is an example of why ES6 makes things easier. The following is how you can accomplish the same thing in ES5

// function isFullAge5() {
//     var agesArr = Array.prototype.slice.call(arguments);
//
//     agesArr.forEach(function(curEl) {
//         console.log((2018 - curEl) >= 18);
//     });
// }
//
// isFullAge5(1990, 2000, 1987, 2005);



//ES5
function isFullAge5(limit) {
    //using the slice method, start copying the arguments into a new array but exclude the limit given
    var agesArr = Array.prototype.slice.call(arguments, 1);

    agesArr.forEach(function(curEl) {
        console.log((2018 - curEl) >= limit);
    });
}

isFullAge5(21, 1990, 2000, 1987, 2005);


//ES6
function isFullAge(limit, ...years) {
    years.forEach(curEl => console.log((2018 - curEl) >= limit));
}

isFullAge(21, 1990, 2000, 1987, 2005);
