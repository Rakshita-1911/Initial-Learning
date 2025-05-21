let a = 5;
let b = 6;
let c = 7;

let s = (a + b + c) / 2; //semi-perimeter

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); //area

console.log("The area of the triangle is: " + area.toFixed(2));
