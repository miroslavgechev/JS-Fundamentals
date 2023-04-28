function factorialDivision(firstNumber, secondNumber) {
  let firstNumberFactorial = calculateFactorial(firstNumber);
  let secondNumberFactorial = calculateFactorial(secondNumber);

  let result = (firstNumberFactorial, secondNumberFactorial) =>
    firstNumberFactorial / secondNumberFactorial;

  console.log(result(firstNumberFactorial, secondNumberFactorial).toFixed(2));

  function calculateFactorial(number) {
    let result = 1;

    for (let currentNumber = number; currentNumber > 0; currentNumber--) {
      result *= currentNumber;
    }

    return result;
  }
}

factorialDivision(5, 2);
