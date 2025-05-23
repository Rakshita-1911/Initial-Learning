1. Why do we use functions in JavaScript?
We use functions to organize code and reuse it.A function is like a small machine that takes input, does some work, and gives output.
It helps make your code clean, short, and easy to understand.

2. What is Function Invocation?
Function invocation means calling or running a function.You do this by writing the function name with ().
Example -
function sayHello() {
  console.log("Hello Roxy!");
}
sayHello(); //this is func invocation

3. Does a function behave like an object in JavaScript?
In JavaScript, functions are special types of objects.You can add properties to them like objects.
Example -
function greet() {
  console.log("Hi!");
}
greet.language = "English";
console.log(greet.language); //output : English

Added a property language to the function just like we do in objects.

4. What are Events in JavaScript?
Events are actions or things that happen in the browser — like:A button click ,Typing on the keyboard ,Page load .

5. What is a string?
A string is text in JavaScript.
It’s written inside quotes – single (') or double (").
Example - let name = "Ram"; // now name is string

6. What is an array? Is it static or dynamic in JavaScript?
An array is a list of values stored in a single variable.
Example: ["apple", "banana", "mango"]
In javaScript, arrays are dynamic, which means- You can add, remove, or change values any time.

7. Difference between Map and Set?
Map -
1. Map stores key-value pairs.
2. Keys must be unique.

Set - 
1. Set stores only values.
2. Values must be unique.

8. Difference between Array and Map?
Array - 
1. It stores values.
2. Store using indexed order.
3. Values can be repeat.

Map - 
1. It stores key-value pair.
2. Keys can be strings , numbers.
3. Keys are unique.

9. What are array methods? List a few names.
Built-in functions for arrays — they help in adding, removing, searching, looping, etc.

array methods:

push() – Add at end
pop() – Remove from end
shift() – Remove from start
unshift() – Add at start
map() – Change each item
filter() – Keep some items
sort() – Sort items
reduce() - reduce them in single unit

10. In how many ways can we traverse through an array in JavaScript?

Few common ways:

for loop
for of loop
forEach() method
map() method
while loop
do while loop
