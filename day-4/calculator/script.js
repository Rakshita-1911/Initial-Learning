function calculate(operation) {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);
  const resultBox = document.getElementById("result");

  if (isNaN(a) || isNaN(b)) {
    resultBox.innerText = "Please enter valid numbers.";
    return;
  }

  if (operation === "multiply") {
    resultBox.innerText = "The result is : " + (a * b);
  } else if (operation === "divide") {
    resultBox.innerText = b === 0 ? "Cannot divide by zero." : "The result is : " + (a / b).toFixed(2);
  }
}
