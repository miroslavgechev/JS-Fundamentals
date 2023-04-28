function distinctArray(inputArray) {
  let resultArray = [];

  for (let index = 0; index < inputArray.length; index++) {
    if (!resultArray.includes(inputArray[index])) {
      resultArray.push(inputArray[index]);
    }
  }

  console.log(resultArray.join(" "));
}

distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
