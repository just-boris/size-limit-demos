// Define an array to store the to-do list items
let todoList = [];

// Function to add a new task to the to-do list
function addTask(task) {
  todoList.push({ task: task, completed: false });
}

// Function to remove a task from the to-do list
function removeTask(index) {
  if (index >= 0 && index < todoList.length) {
    todoList.splice(index, 1);
  } else {
    console.log("Invalid index!");
  }
}

// Function to mark a task as completed
function completeTask(index) {
  if (index >= 0 && index < todoList.length) {
    todoList[index].completed = true;
  } else {
    console.log("Invalid index!");
  }
}

// Function to display the current to-do list
function displayTodoList() {
  console.log("To-Do List:");
  for (let i = 0; i < todoList.length; i++) {
    const status = todoList[i].completed ? " [x]" : " [ ]";
    console.log(i + 1 + ".", status, todoList[i].task);
  }
}

// Adding tasks to the to-do list
addTask("Complete homework");
addTask("Go to the gym");
addTask("Buy groceries");

// Display the initial to-do list
displayTodoList();

// Marking task at index 1 as completed
completeTask(0);

// Display the updated to-do list
displayTodoList();

// Removing task at index 2
removeTask(1);

// Display the final to-do list
displayTodoList();
