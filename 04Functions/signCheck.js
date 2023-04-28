function signCheck(firstNumber, secondNumber, thirdNumber) {
  let negativeSigns = 0;
  let resultSign = "";

  if (firstNumber < 0) {
    negativeSigns++;
  }

  if (secondNumber < 0) {
    negativeSigns++;
  }

  if (thirdNumber < 0) {
    negativeSigns++;
  }

  if (negativeSigns % 2 === 0) {
    resultSign = "Positive";
  } else {
    resultSign = "Negative";
  }

  console.log(resultSign);
}

signCheck(-1, -2, -3);
