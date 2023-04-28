function palindromeOrNot(inputArray) {
  for (let index = 0; index < inputArray.length; index++) {
    let currentNumber = inputArray[index].toString();

    let reversedCurrentNumber = currentNumber
      .toString()
      .split('')
      .reverse()
      .join('');

    if (currentNumber === reversedCurrentNumber) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

palindromeOrNot([32, 2, 232, 1010]);
