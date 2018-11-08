// Object with a function in it

var obj = {
  name: "Bill",
  age: 27,
  isFriendly: true,
  sisters: ["Carol", "Susan"],
  add: function(x,y){
    return x + y;
  }
}
// call the function by referencing the object first
obj.add(12, 3);
