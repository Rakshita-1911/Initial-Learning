1. What are the basic data types in TypeScript?

TypeScript is like JavaScript but with types. It helps you avoid bugs by telling you what kind of data a variable should hold.

Basictypes -

1. number =>   Any number, like 5 or 3.14
2. string =>	Text values
3. boolean	=>	true/false
4. any	=>	Can be anything 
5. null =>	A value that’s empty
6. undefined => Not assigned
7. array => List of values
8. tuple => Fixed types in fixed order
9. object => Custom data types 


2. What is a Generic data type?

Generics let you write flexible and reusable code that works with any data type.
Example - 
function identity<T>(value: T): T {
  return value;
}

identity<string>('Hello'); 
identity<number>(42);   

In above example , T is a generic type - it can be anything (number, string etc). the function reuseable.

3. What is type inferring in TypeScript?

In the Typescript , if we doesn't mention a type ,it guesses (infers) it based on what value you give.
Example -
let name = 'Ram'; 
we didn't wrote string but Typescript knowns that 'Ram' is a string so it treats name as a string.


4. What are the possible ways to define typing for functions?

There are 3 ways  -

1. Inline with function definition:
ex - 
function greet(name: string): string {
  return `Hello, ${name}`;
}

2. Using function expressions:
ex -
const add: (a: number, b: number) => number = (a, b) => a + b;

3.  With type alias:
ex -
type MathOperation = (x: number, y: number) => number;

const multiply: MathOperation = (x, y) => x * y;


5. How to define Generic type for Classes?

Generics let you write flexible and reusable code that works with any data type.

Example -

class Box<T> {
  content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>('hello');
