// select the input element
let result = document.getElementById("result");

// append a value to the input
function appendToResult(val) {
  result.value += val;
}

// clear input
function clearResult() {
  result.value = "";
}

// toggle the sign of the input
function toggleSign() {
  result.value = -result.value;
}

// backspace
function backspace() {
  result.value = result.value.slice(0, -1);
}

// add the value in the input element to the memory
function memAdd() {
  let mem = parseFloat(localStorage.getItem("mem")) || 0;
  mem += parseFloat(result.value);
  localStorage.setItem("mem", mem);
}

// subtract the value in the input element from the memory
function memSub() {
  let mem = parseFloat(localStorage.getItem("mem")) || 0;
  mem -= parseFloat(result.value);
  localStorage.setItem("mem", mem);
}

// read the value in the memory and display it in the input element
function memRead() {
  let mem = parseFloat(localStorage.getItem("mem")) || 0;
  result.value = mem;
}

function calculate() {
  try {
    let expression = result.value
    // replace special strings with corresponding Math functions
    .replace(/√/g, "Math.sqrt")
    .replace(/log/g, "Math.log10")
    .replace(/sin/g, "Math.sin")
    .replace(/asin/g, "Math.asin")
    .replace(/cos/g, "Math.cos")
    .replace(/acos/g, "Math.acos")
    .replace(/tan/g, "Math.tan")
    .replace(/atan/g, "Math.atan")
    .replace(/\^/g, "**")
    .replace(/pi/g, "Math.PI")
    .replace(/!/g, "factorial($&)");

    // calculate factorial
    function factorial(n) {
      if (n == 0 || n == 1) {
        return 1;
      } else {
        return n * factorial(n - 1);
      }
    }

    // evaluate the expression and display the result
    result.value = eval(expression);
  } catch (error) {
    result.value = "Error";
  }
}