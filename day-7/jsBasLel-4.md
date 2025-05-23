1. What are anonymous functions in JavaScript?

An anonymous function is a function without a name.They're often used for short-term tasks or as arguments in other functions.
Example -
const greet = function() {
  console.log("Hello!");
};
We store this function inside a variable (greet), but the function itself has no name.

2. Explain strict comparison and abstract comparison in JavaScript?

-- Strict Comparison (===)

1. Compares value and type.
2. No automatic type conversion.

-- Abstract Comparison (==)

1. Compares values but converts types if needed.


3. Difference between Arrow functions and Regular functions.

-- Arrow function

1. Syntax is shorter.
2. Doesn't have it's own this keyword.
3. Code is neat.
ex - const add = (a, b) => a + b; 

--Regular function

1. Syntax is longer.
2. Has it's own this
3. Code look mess.
ex - function add(a, b) {
     return a + b;
     }

4. What is Hoisting in JavaScript?

Hoisting means JavaScript moves function and variable declarations to the top of the file before running the code.      

Functions declared with function are fully hoisted, but variables declared with let or const are not accessible before declaration.

5. JavaScript is a garbage collected programming language, explain how?

JavaScript has a Garbage Collector that automatically removes variables and objects that are no longer used.You don’t need to delete variables manually.

6. Explain Shallow Copy vs Deep Copy in JavaScript?

-- Shallow Copy 

1. Only copies the first level.

2. If the object has nested objects, it still points to the same inner objects.

-- Deep Copy

1. Copies everything, even nested objects.

2. So changes in copy do not affect the original.

7. What is Object.freeze()?

Object.freeze() makes an object unchangeable — you can’t add, update, or delete any properties.

Example - 
const user = { name: "Ram" };
Object.freeze(user);

user.name = "Naman";        //No change
user.age = 20;              //No addition

console.log(user);         // { name: "Ram" }
