// Here We have an object
var phone = {
  name: "note 8",
  style: "smart",
  brand: "Samsung"
}
phone.name
// or
phone["name"]

// or you can add one piece at a time
var phone = {}
phone.name = "note 8"
phone.style = "smart"
phone["brand"] = "Samsung"

// adding an item to an object
phone["age"] = "2 months";
// or
phone.age = "2 months";

// changing the item in an object
phone.name = "Galaxy";
// or
phone["name"] = "Galaxy";

// ******data structure practice*******

// Dont forget about commas!
var bookshelf = [
  {
    title: "Sherlock Holmes",
    author: "Unknown",
    chapters: ["Chapter1", "Chapter2"]
  },
  {
    title: "Bible",
    author: "Jesus",
    books: ["Old Testiment", "New testiment"]
  }
]

var someObject = {
  friends: [
    {name: "Malfoy"},
    {name: "crabbe"},
    {name: "Goyle"}
  ],
  color: "baby blue",
  isEvil: true
};
someObject.friends[0].name //solution to retrieving "malfoy"
