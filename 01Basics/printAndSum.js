function printAndSum(firstNumber, secondNumber) {
  let printLine = "";
  let sum = 0;

  for (
    let currentnumber = firstNumber;
    currentnumber <= secondNumber;
    currentnumber++
  ) {
    if (currentnumber === secondNumber) {
      printLine += `${currentnumber}`;
    } else {
      printLine += `${currentnumber} `;
    }

    sum += currentnumber;
  }

  console.log(printLine);
  console.log(`Sum: ${sum}`);
}

printAndSum(50, 60);
