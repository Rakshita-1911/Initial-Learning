1. Explain as much as you know about objects in JavaScript?

In JavaScript, objects are used to store multiple values in a single variable.
They are like real-world objects — for example, a car has properties like color, brand, model, and methods like start() or drive().

JavaScript objects are collections of key-value pairs are called properties. Or An object is a collection of key-value pairs, where keys are strings (or symbols) and values can be anything — numbers, strings, functions, arrays, other objects, etc. These key-value pairs are called properties.

Example -
let person = {
  name: "Ram",
  age: 21,
  city: "Jaipur"
};

name, age, city => these are keys or properties
"Ram", 21, "Jaipur" => these are values
person => this is the object

How to Access Values in an Object
javascript -

console.log(person.name); // Ram
console.log(person["age"]); // 21

You can use dot notation: objectName.key Or bracket notation: objectName["key"].

How to Add or Update Properties - 

person.email = "ram@example.com"; 
person.age = 22;   

How to Delete a Property - 

delete person.age;

What are Methods in Objects?
A method is a function inside an object.

let user = {
  name: "Ram",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

user.greet(); // Hello Ram

2. Read the code :
// This is an object based vector template
var vector = {
_x: 0,
_y: 0,
create: function(x,y){
var obj = Object.create(this);
obj.setX(x);
obj.setY(y);
return obj;
},
}
Can you make a “class” based alternative to it? Using Javascript OOP features.


class Vector {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  setX(x) {
    this._x = x;
  }

  setY(y) {
    this._y = y;
  }

  getX() {
    return this._x;
  }

  getY() {
    return this._y;
  }
}
Example -
const v1 = new Vector(3, 4);  
console.log(v1.getX());             // Outputs: 3
console.log(v1.getY());             // Outputs: 4

v1.setX(10);                         // Change x value to 10
console.log(v1.getX());             // Outputs: 10

3. Do you think javascript is the language of the future?

I think JavaScript is the language of the future because it's used almost everywhere. Like, every website you open — whether it's Google, YouTube, or Instagram — they all use JavaScript to make the pages interactive. If I click a button and something cool happens, that’s probably JavaScript. 

It’s not just for the front end anymore, you can also use it for the back end with Node.js. So basically, you can build a full website or app using just one language, and that makes things easier. Plus, it's super popular, so there are tons of tutorials, job opportunities, and big companies using it. That's why I feel like learning JavaScript is like investing in your future.