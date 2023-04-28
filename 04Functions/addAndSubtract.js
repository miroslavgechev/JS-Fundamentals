function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
  let sumFirstAndSecondDigit = sum(firstNumber, secondNumber);
  let result = subtract(sumFirstAndSecondDigit, thirdNumber);

  console.log(result);

  function sum(firstNum, secondNum) {
    return firstNum + secondNum;
  }

  function subtract(sumNum, thirdNumber) {
    return sumNum - thirdNumber;
  }
}

addAndSubtract(23, 6, 10)
