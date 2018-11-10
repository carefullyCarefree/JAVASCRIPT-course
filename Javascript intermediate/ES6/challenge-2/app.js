/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class BuildBirth {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends BuildBirth {
    constructor (name, buildYear, numTrees, parkArea) {
        super (name, buildYear);
        this.numTrees = numTrees;
        this.parkArea = parkArea;
    }
    treeDensity() {
        return parseFloat(this.numTrees / this.parkArea).toFixed(2);
    }
    calcAge() {
        return 2018 - this.buildYear;
    }
}

const shyamon = new Park('Shyamon', 1938, 29, 3);
const lola = new Park('Lola', 2010, 32, 1);
const bree = new Park('Bree', 1820, 1790, 20);
const average = (shyamon.calcAge() + lola.calcAge() + bree.calcAge()) / 3;

const parkList = [shyamon, lola, bree];
const lotsOfTrees = (parks) => {
    parks.forEach((el) => {
        if (el.numTrees > 1000) {
            return el.name;
        }
    })
}



console.log('-------PARK REPORT--------');
console.log(`Our parks have an average age of ${average} years`);
console.log(`${shyamon.name} has a tree density of ${shyamon.treeDensity()} per square mile`);
console.log(`${lola.name} has a tree density of ${lola.treeDensity()} per square mile`);
console.log(`${bree.name} has a tree density of ${bree.treeDensity()} per square mile`);

console.log(lotsOfTrees(parkList));




class Street extends BuildBirth {
    constructor(name, buildYear, streetLength, size = 'normal') {
        super(name, buildYear);
        this.streetLength = streetLength;
        this.size = size;
    }
    sizeClass() {
        if (this.size <= 1) {
            return 'tiny';
        } else if (this.size <= 2) {
            return 'small';
        } else if (this.size <= 3) {
            return 'normal';
        } else if (this.size <= 4) {
            return 'large';
        } else if (this.size >= 5) {
            return 'huge';
        } else {
            return 'normal';
        }
        // let strSize = new Map(this.size);
        // strSize.set(1, 'tiny');
        // strSize.set(2, 'small');
        // strSize.set(3, 'normal')
        // strSize.set(4, 'large');
        // strSize.set(5, 'huge');
    }
}

const parker = new Street ('Parker', 1920, 3, 2);
const evner = new Street ('Evner', 1987, 5, 3);
const bigle = new Street('Bigle', 1936, 10, 5);
const momo = new Street ('Momo', 2001, 1, 1);
const total = parker.streetLength + evner.streetLength + bigle.streetLength + momo.streetLength;
const streetAverage = total / 4;


function parkReport (p) {

}

function streetReport (s) {
    console.log(`${s.name}, built in ${s.buildYear}, is a ${s.sizeClass()} street.`);
}

console.log('---------STREET REPORT---------');
console.log(`Our 4 streets have a total lenght of ${total} miles, with an average of ${streetAverage} miles.`);
streetReport(parker);
streetReport(evner);
streetReport(bigle);
streetReport(momo);
// console.log(`${parker.name}, built in ${parker.buildYear}, is a ${parker.sizeClass()} street.`);
// console.log(`${evner.name}, built in ${evner.buildYear}, is a ${evner.sizeClass()} street.`);
// console.log(`${bigle.name}, built in ${bigle.buildYear}, is a ${bigle.sizeClass()} street.`);
// console.log(`${momo.name}, built in ${momo.buildYear}, is a ${momo.sizeClass()} street.`);
