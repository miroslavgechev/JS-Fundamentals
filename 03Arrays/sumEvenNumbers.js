function sumEvenNumbers(inputArray) {
  let sum = 0;

  for (let i = 0; i < inputArray.length; i++) {
    
    let numParsed = Number(inputArray[i]);
    
    if (numParsed % 2 === 0) {
      sum += numParsed;
    }
  }

  console.log(sum);
}

sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
