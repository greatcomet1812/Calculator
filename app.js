let result = document.getElementById("result");

function appendToResult(val) {
  result.value += val;
}

function clearResult() {
  result.value = "";
}

function toggleSign() {
  result.value = -result.value;
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function memAdd() {
  let mem = parseFloat(localStorage.getItem("mem")) || 0;
  mem += parseFloat(result.value);
  localStorage.setItem("mem", mem);
}

function memSub() {
  let mem = parseFloat(localStorage.getItem("mem")) || 0;
  mem -= parseFloat(result.value);
  localStorage.setItem("mem", mem);
}

function memRead() {
  let mem = parseFloat(localStorage.getItem("mem")) || 0;
  result.value = mem;
}

function calculate() {
  try {
    let expression = result.value
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

    function factorial(n) {
      if (n == 0 || n == 1) {
        return 1;
      } else {
        return n * factorial(n - 1);
      }
    }

    result.value = eval(expression);
  } catch (error) {
    result.value = "Error";
  }
}