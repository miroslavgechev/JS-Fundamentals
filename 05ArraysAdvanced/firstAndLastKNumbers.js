function firstAndLastKNumbers(inputArray) {
  let kElements = inputArray.shift();

  console.log(inputArray.slice(0, kElements).join(" "));
  console.log(inputArray.slice(-kElements).join(" "));
}

firstAndLastKNumbers([2, 7, 8, 9]);
