//Average of array nums in Javascript?
let nums = [10, 20, 30, 40, 50];

let total = nums.reduce((sum, num) => sum + num, 0);
let average = total / nums.length;

console.log("Average:", average);

//Swap Two Numbers by Reference
let obj = { a: 5, b: 10 };

function swap(obj) {
  let temp = obj.a;
  obj.a = obj.b;
  obj.b = temp;
}

swap(obj);
console.log(obj); 

//Print the Fibonacci Sequence
function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

console.log(fibonacci(10)); // First 10 Fibonacci numbers

//Sort an Array in Ascending and Descending Order
let numbers = [30, 10, 40, 20, 50];

let asc = [...numbers].sort((a, b) => a - b);

let desc = [...numbers].sort((a, b) => b - a);

console.log("Ascending:", asc);
console.log("Descending:", desc);

//Show a Variable Value in an HTML Webpage Using DOM

{/* <p id="output"></p> 

<script>
  let name = "Ram";
  document.getElementById("output").innerText = "Hello, " + name + "!";
</script> */}