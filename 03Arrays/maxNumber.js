function maxNumber(inputArray) {
  let inputArrayLength = inputArray.length;
  let topIntegersArray = [];

  for (let index = 0; index < inputArrayLength; index++) {
    let currentValue = inputArray[index];
    let isBigger = true;

    for (let index2 = index + 1; index2 < inputArrayLength; index2++) {
      if (currentValue <= inputArray[index2]) {
        isBigger = false;
        break;
      }
    }

    if (isBigger) {
      topIntegersArray.push(currentValue);
    }
  }

  console.log(topIntegersArray.join(" "));
}

maxNumber([14, 24, 3, 19, 15, 17]);
