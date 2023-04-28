function processOddNumbers(inputArray) {
  let resultArray = inputArray
    .filter((el, i) => i % 2 === 1)
    .map((num) => num * 2)
    .reverse();

  console.log(resultArray.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
