var todos = [];
window.setTimeout(function() {

var input = prompt("What would you like to do?")


while(input !== "quit"){
  if(input === "list"){
    listTodos();
  } else if(input === "new"){
    addTodo();
  } else if(input === "delete"){
    deleteTodo();
  }
  input = prompt("What would you like todo?")
}
console.log("ok, you quite the app");

function listTodos(){
  console.log("********")
  todos.forEach(function(todoList, indexLocation){
    console.log(indexLocation + ": " + todoList);
  });
  console.log("********")
}

function addTodo(){
    var newTodo = prompt("Add todo");
    todos.push(newTodo);
    console.log("added " + newTodo);
}

function deleteTodo() {
  index = prompt("Which todo would you like to delete?");
  todos.splice(index, 1);
  console.log("item " + index + " deleted");
}




}, 500);
// The arguments are in a specific order:
// - The first one represents each element in the array (per loop iteration) that .forEach was called on.
// - The second represents the index of said element.
// - The third represents the array that .forEach was called on (it will be the same for every iteration of the loop).
