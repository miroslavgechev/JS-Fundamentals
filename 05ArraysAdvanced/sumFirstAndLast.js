function sumFirstAndLast(inputArray) {
  let firstNumber = Number(inputArray.shift());
  let lastNumber = Number(inputArray.pop());

  console.log(firstNumber + lastNumber);
}

sumFirstAndLast(["20", "30", "40"]);
