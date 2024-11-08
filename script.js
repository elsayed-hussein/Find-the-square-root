let number = document.getElementById("number");
let calculateBtn = document.getElementById("calculate");
let result = document.getElementById("result");

function squareRoot(number) {
  if (number < 0) return NaN;
  if (number === 0 || number === 1) return number; //

  let start = 0;
  let end = number;
  let mid;
  let tolerance = 0.000001;

  while (end - start > tolerance) {
    mid = (start + end) / 2;
    if (mid * mid === number) {
      return mid;
    } else if (mid * mid < number) {
      start = mid;
    } else {
      end = mid;
    }
  }
  let srn = ((start + end) / 2).toFixed(5);
  return srn;
}

function calculate() {
  let numberValue = number.value;
  if (numberValue == 1) return (result.innerHTML = 1);
  let resultValue = squareRoot(numberValue);
  if (isNaN(resultValue)) {
    resultValue = "there is no square root";
  }

  result.innerHTML = resultValue;
}

calculateBtn.addEventListener("click", calculate);
