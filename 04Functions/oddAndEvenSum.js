function oddAndEvenSum(number) {
  let evenSum = 0;
  let oddSum = 0;

  let numberToString = String(number);

  for (let element of numberToString) {
    let elementToNumber = Number(element);

    if (elementToNumber % 2 === 0) {
      evenSum += elementToNumber;
    } else {
      oddSum += elementToNumber;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
