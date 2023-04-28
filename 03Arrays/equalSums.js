function equalSums(input) {
  let hasFound = false;
  let inputLength = input.length;

  for (let index = 0; index < inputLength; index++) {
    let leftSum = 0;
    let rigthSum = 0;

    for (let indexLeft = 0; indexLeft < index; indexLeft++) {
      leftSum += input[indexLeft];
    }

    for (let indexRight = index + 1; indexRight < inputLength; indexRight++) {
      rigthSum += input[indexRight];
    }

    if (leftSum === rigthSum) {
      console.log(index);
      hasFound = true;
    }
  }

  if (!hasFound) {
    console.log("no");
  }
}

equalSums([1]);
 