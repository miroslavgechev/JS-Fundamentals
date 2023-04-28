function negativeOrPostivieNumbers(inputArray) {
  let resultArray = [];

  for (let element of inputArray) {
    //element = Number(element);

    if (element < 0) {
      resultArray.unshift(element);
    } else {
      resultArray.push(element);
    }
  }

  console.log(resultArray.join("\n"));
}

negativeOrPostivieNumbers(["7", "-2", "8", "9"]);
