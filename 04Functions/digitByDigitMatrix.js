function digitByDigitMatrix(number) {
  for (let i = 0; i < number; i++) {
    let resultArray = [];

    for (let j = 0; j < number; j++) {
      resultArray.push(number);
    }

    console.log(resultArray.join(" "));
  }
}

digitByDigitMatrix(3);
