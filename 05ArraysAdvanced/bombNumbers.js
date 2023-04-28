function bombNumbers(inputArray, bombAndPower) {
  let bomb = bombAndPower[0];
  let bombPower = bombAndPower[1];
  let sum = 0;

  while (inputArray.includes(bomb)) {
      let index = inputArray.indexOf(bomb);
      let elementsToRemove = bombPower * 2 + 1;
      let startIndex = index - bombPower;

      if (startIndex < 0) {
          elementsToRemove += startIndex;
          startIndex = 0;
      }
      inputArray.splice(startIndex, elementsToRemove);
  }

  for(let element of inputArray){
    sum += element;
  }
  console.log(sum);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
[2, 1]);
