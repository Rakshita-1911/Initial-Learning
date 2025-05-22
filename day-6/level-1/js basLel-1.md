1. What is JavaScript?
JavaScript is the Programming Language for the Web. It can update and change both HTML and CSS.It can calculate, manipulate and validate data.

2. What is the difference between `let` and `var`?
var is function-scoped. If declared within a function, it's only accessible within that function. If declared outside any function, it becomes a global variable.

let is block-scoped. It's only accessible within the block ({}, loop, or conditional statement) where it's defined.

3. Why do we prefer `const` over `var`?
Const is used for values that don’t change. Declares block-scoped variables that cannot be reassigned after their initial assignment but can be mutated.It's safer and avoids bugs.

4. What is the use of JavaScript in web browsers?
JavaScript is used in web browsers to make web pages interactive and dynamic. While HTML provides the structure and CSS handles the styling, JavaScript adds behavior.JavaScript can respond to user actions like clicking buttons, typing in a form, or scrolling, and can update the page without reloading it.

5. What are Objects?
An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.Ex-car is object in real life.

6. What is an array and how is it different from an Object in Javascript?
An array in JavaScript stores items in an ordered list, like a shopping list. An object stores data using named keys(key-value pairs).

7. What is a function?
A JavaScript function is a block of code designed to perform a particular task.

8. How can we implement call by value and call by reference in Javascript?

call by value ---

let num = 10;

function changeValue(x) {
  x = 20; 
}

changeValue(num);
console.log(num);      // Output: 10 

This means a copy of the value is passed to the function. Changing it inside the function won’t affect the original.Because num is a number (a primitive type), JavaScript passes only its value, not the original variable.

call by reference---

let person = { name: "Ram" };

function changeName(obj) {
  obj.name = "Shyam"; 
}

changeName(person);
console.log(person.name);       // Output: "Shyam"

This means the function receives a reference to the actual object, not a copy. So if we change it inside the function, it will affect the original.

9. What are the primitive data types in JavaScript?

Primitive types are the basic types of data:

String – text → "Hello"

Number – numbers → 42

Boolean – true/false → true

Undefined – variable declared but not given a value

Null – empty value

BigInt – very large numbers

Symbol – unique identifiers

10. What is DOM?
DOM (Document Object Model)

It’s basically the structure of the webpage, represented as a tree of objects. Every HTML element becomes a node in this tree.

With JavaScript, you can access and manipulate this tree — meaning you can change content, style, or structure without touching the HTML file directly.

11. Why do we need the DOM?
We need the DOM so that JavaScript can interact with the webpage. Without it, JavaScript wouldn’t know what to update or react to.
DOM makes a static HTML page into an interactive, live webpage.
DOM is how JavaScript communicates with your webpage.