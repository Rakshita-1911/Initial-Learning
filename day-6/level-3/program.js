//Implementation of common array methods

const Arr = [10, 20, 30, 40, 50];

// a. forEach
function printItemsWithForEach(arr) {
  arr.forEach((item, index) => {
    console.log(`Index: ${index}, Value: ${item}`);
  });
}

// b. map
function doubleValues(arr) {
  return arr.map((num) => num * 3);
}

// c. filter
function filterGreaterThan35(arr) {
  return arr.filter((num) => num > 35);
}

// d. reduce
function sumAll(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

// e. includes
function hasThirty(arr) {
  return arr.includes(30);
}

// f. some
function anyAbove45(arr) {
  return arr.some((num) => num > 45);
}

// g. every
function allPositive(arr) {
  return arr.every((num) => num > 0);
}

printItemsWithForEach(Arr);
console.log("Doubled:", doubleValues(Arr));

console.log("Filtered >35:", filterGreaterThan35(Arr));

console.log("Sum:", sumAll(Arr));

console.log("Includes 30:", hasThirty(Arr));

console.log("Any above 45:", anyAbove45(Arr));

console.log("All positive:", allPositive(Arr));

//Simple array implementation

// 1. Creating an array
let fruits = ['apple', 'banana', 'mango'];

console.log(fruits);

// 2. Accessing elements
console.log(fruits[0]); 
console.log(fruits[1]); 

// 3. Adding an element
fruits.push('orange'); 
console.log(fruits); 

// 4. Removing the last element
fruits.pop(); 
console.log(fruits); 

// 5. Adding to the start
fruits.unshift('grapes');
console.log(fruits); 

// 6. Removing from the start
fruits.shift();
console.log(fruits); 

// 7. Loop through the array
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i}: ${fruits[i]}`);
}

// 8. Using forEach
fruits.forEach(function(fruit, index) {
  console.log(`forEach -> ${index}: ${fruit}`);
});


// ToDo List Task Management

let ToDo = [];
let Completed = [];

let nextId = 1; 

// 1. Add a new task
function add(title) {
  if (title.trim() === "") {
    return -1;
  }

  const task = {
    id: nextId++,
    task: title
  };

  ToDo.push(task);
  return task.id;
}

// 2. Remove a task by id
function remove(id) {
  const index = ToDo.findIndex(t => t.id === id);
  if (index !== -1) {
    ToDo.splice(index, 1);
    return true;
  }
  return false; 
}

// 3. Update a task's title
function update(id, newTitle) {
  const task = ToDo.find(t => t.id === id);
  if (task) {
    task.task = newTitle;
    return true;
  }
  return false; 
}

// 4. Mark a task as completed
function markAsCompleted(id) {
  const index = ToDo.findIndex(t => t.id === id);
  if (index !== -1) {
    const completedTask = ToDo.splice(index, 1)[0]; 
    Completed.push(completedTask); 
    return true;
  }
  return false; 
}

