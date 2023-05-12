let expression = "";

function updateDisplay(value) {
  expression += value;
  document.getElementById("operation").value = expression.slice(0, 18);
}

function clearDisplay() {
  expression = "";
  document.getElementById("operation").value = "";
}

function clearAllDisplay() {
  expression = "";
  document.getElementById("result").value = "";
}

function del() {
  expression = "";
  document.getElementById("operation").value = document
    .getElementById("operation")
    .value.slice(0, -1);
}

function calculate() {
  let answer = eval(expression);
  if (Number.isFinite(answer) && !Number.isInteger(answer)) {
    answer = answer.toFixed(4);
  }
  document.getElementById("result").value = answer;
  expression = answer;
}

function sqrt() {
  value = document.getElementById("operation").value;
  document.getElementById("operation").value = "√(" + value + ")";
  answer = Math.sqrt(expression);
  expression = answer;
}

function sqrt2() {
  value = document.getElementById("operation").value;
  document.getElementById("operation").value = "(" + value + ")²";
  answer = expression * expression;
  expression = answer;
}

function percent() {
  value = document.getElementById("operation").value;
  document.getElementById("operation").value = "(" + value + ")%";
  answer = expression / 100;
  expression = answer;
}

function negative() {
  value = document.getElementById("operation").value;
  document.getElementById("operation").value = "-(" + value + ")";
  answer = -expression;
  expression = answer;
}
