function magicSum(inputArray, magicNumber) {
  let inputArrayLength = inputArray.length;

  for (let index = 0; index < inputArrayLength; index++) {

    for (let index2 = index + 1; index2 < inputArrayLength; index2++) {
     
        if (inputArray[index] + inputArray[index2] === magicNumber) {
            console.log(`${inputArray[index]} ${inputArray[index2]}`);
      }

    }
  }
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27);
