function lastKNumbersSequence(arrayLength, sumOfElementsCount) {
  let resultArray = [1];

  for (let index = 1; index < arrayLength; index++) {
    let currentSlice = resultArray.slice(-sumOfElementsCount);
    let currentSum = 0;

    for (let element of currentSlice) {
      currentSum += element;
    }

    resultArray.push(currentSum);
  }

  console.log(resultArray.join(" "));
}

lastKNumbersSequence(6, 3);
