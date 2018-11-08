//Parks - 3
/*
-Name and build year
-tree density of each park in town (number of trees/park area)
-average age of parks(sum of all ages/number of parks)
-the name of the park that has more than 1000 trees
*/


/*
-Create a class constructor to use with both trees and Streets
-create a subclass constructor for parks, and another for Streets
-create the separate parks and Streets
-create logic that tests the parks and streets
*/


class CityBirth {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends CityBirth {
    constructor (name, buildYear, numberOftrees, size, treeDensity) {
        super(name, buildYear);
        this.numberOftrees = numberOftrees;
        this.size = size;
        this.treeDensity = treeDensity;
    }
    density() {
        treeDensity = numberOftrees / size;
        console.log(`${this.name} has a tree density of ${this.treeDensity} per acre`)
    }

    age(year) {
       let parksAge = year - this.buildYear;

    }

}
const allParks = [new Park ('Old Snake', 1930, 103, 10),
                new Park ('Fluff', 1892, 1902, 20),
                new Park ('Mud Hole', 2000, 12, 2)];


let parkAverage = oldsnake.age(2018) + fluff.age(2018) + mudhole.age(2018) / 3;

let topTrees = (park) => {
    if (park.numberOftrees > 1000) {
        let topPark = park.name;
        console.log(`${topPark} has more than 1000 trees`);
    }
}

console.log("------PARK REPORT------");
console.log(`Our 3 parks have an average age of ${parkAverage} years`);
oldsnake.stateInfo();
mudhole.stateInfo();
fluff.stateInfo();
topTrees(oldsnake);
topTrees(fluff);
topTrees(mudhole);



//Streets - 4
//name and build year
//size classification of all streets: tiny/small/normal/big/huge. if unknown: normal


class Street extends CityBirth {
    constructor(name, buildYear, streetLength, size = 3) {
        super(name, buildYear);
        this.streetLength = streetLength;
        this.size;
    }
    sizeClass(strLen) {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal')
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street`)
}

const alllStreets = [new Street('Elf Road', 1973, 8, 3), new Street ('Moby Place', 1940, 0.5, 1), new Street ('Vance Way', 1994, 20, 4), new Street ('Erb', 1823, 192, 5)];
// let elfRoad = new Street('Elf Road', 1973, 8, 3);
// let mobyplace = new Street ('Moby Place', 1940, .5, 1);
// let vanceWay = new Street ('Vance Way', 1994, 20, 4);
// let erb = new Street ('Erb', 1823, 192, 5);

let streetTotal = elfRoad.streetLength + mobyplace.streetLength + vanceWay.streetLength + erb.streetLength;
let streetAverage = streetTotal / 4;

console.log(`Our 4 streets have a total length of ${streetTotal} miles, with an average of ${streetAverage}`);
elfRoad.stateInfo();
mobyplace.stateInfo();
vanceWay.stateInfo();
erb.stateInfo();
