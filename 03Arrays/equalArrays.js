function equalArrays(arrayOne, arrayTwo) {
  let areEqual = true;
  let sum = 0;

  for (let index = 0; index < arrayOne.length; index++) {
   
    let currentValueArrayOne = Number(arrayOne[index]);
    let currentValueArrayTwo = Number(arrayTwo[index]);

    if (currentValueArrayOne !== currentValueArrayTwo) {
      areEqual = false;
      console.log(`Arrays are not identical. Found difference at ${index} index`);
      break;
    }

    sum += currentValueArrayOne;
  }

  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(["1"], ["10"]);
