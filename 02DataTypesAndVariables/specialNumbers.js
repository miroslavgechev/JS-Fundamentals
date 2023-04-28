function specialNumbers(receivedNumber) {
  for (let currentNumber = 1; currentNumber <= receivedNumber; currentNumber++) {
    let isSpecial = false;
    let currentSum = 0;

    let currentNumberCycled = currentNumber;

    while (currentNumberCycled !== 0) {
      currentSum += currentNumberCycled % 10;
      currentNumberCycled = parseInt(currentNumberCycled / 10);
    }

    if (currentSum === 5 || currentSum === 7 || currentSum === 11) {
      isSpecial = true;
    }

    console.log(`${currentNumber} -> ${isSpecial ? "True" : "False"}`);
  }
}

specialNumbers(20);
