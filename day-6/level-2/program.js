// Reverse an Array
let arr = [1, 2, 3, 4, 5, 6];
let reversedArr = arr.reverse();
console.log("Reversed:", reversedArr);

//Explain the properties of the join() array method via program
let words = ["My", "name", "is", "ram"];
let sentence = words.join(" "); 

console.log(sentence); 

//Show all the values of an array in a html webpage using DOM and forEach method?

let fruits = ["Apple", "Banana", "Mango"];

let list = document.getElementById("fruitList");

fruits.forEach(fruit => {
  let item = document.createElement("li"); 
  item.textContent = fruit;               
  list.appendChild(item);             
});

//Merge two sets in JavaScript
let set1 = new Set([1, 2, 3]);
let set2 = new Set([3, 4, 5]);

let mergedSet = new Set([...set1, ...set2]);

console.log(mergedSet); 
