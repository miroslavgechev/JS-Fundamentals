function condenseArrayToNumber(inputArray) {

  while (inputArray.length > 1) {
    let tempArray = [];

    for (let i = 0; i < inputArray.length - 1; i++) {
      tempArray.push(inputArray[i] + inputArray[i + 1]);
    }

    inputArray = tempArray;
  }

  console.log(inputArray.join());
}

condenseArrayToNumber([2, 10, 3]);
