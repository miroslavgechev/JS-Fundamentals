function addAndSubtract(originalArray) {

  let originalSum = 0;
  let modifiedSum = 0;
  let modifiedArray = [];
  let originalArrayLength = originalArray.length;

  for (let index = 0; index < originalArrayLength; index++) {

    if (originalArray[index] % 2 === 0) {

      modifiedArray.push(originalArray[index] + index);

    } else {

      modifiedArray.push(originalArray[index] - index);

    }

    originalSum += originalArray[index];
    modifiedSum += modifiedArray[index];

  }

  console.log(modifiedArray);
  console.log(originalSum);
  console.log(modifiedSum);

}

addAndSubtract([5, 15, 23, 56, 35]);
