function evenAndOddSubtraction(inputArray) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < inputArray.length; i++) {
    let currentNumber = inputArray[i];

    if (currentNumber % 2 === 0) {
      sumEven += currentNumber;
    } else {
      sumOdd += currentNumber;
    }
  }

  console.log(sumEven - sumOdd);
}

evenAndOddSubtraction([3, 5, 7, 9]);
