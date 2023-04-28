function integerAndFloat(firstNumber, secondNumber, thirdNumber) {
  let sum = firstNumber + secondNumber + thirdNumber;

  console.log(`${sum} - ${sum === parseInt(sum) ? "Integer" : "Float"}`);
}

integerAndFloat(100, 200, 303);
