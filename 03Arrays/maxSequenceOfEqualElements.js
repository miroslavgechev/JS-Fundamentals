function maxSequenceOfEqualElements(inputArray) {
  let inputArrayLength = inputArray.length;
  let arrayMaxSequence = [];

  for (let index = 0; index < inputArrayLength; index++) {
    let currentArray = [];
    currentArray.push(inputArray[index]);

    for (let index2 = index + 1; index2 < inputArrayLength; index2++) {
      if (inputArray[index] === inputArray[index2]) {
        currentArray.push(inputArray[index2]);
      } else {
        break;
      }
    }

    if (arrayMaxSequence.length < currentArray.length) {
      arrayMaxSequence = currentArray;
    }
  }

  console.log(arrayMaxSequence.join(" "));
}

maxSequenceOfEqualElements([4, 4, 4, 4]);
