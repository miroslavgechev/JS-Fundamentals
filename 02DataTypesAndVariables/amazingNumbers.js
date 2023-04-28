function amazingNumbers(numberInput) {
  let numberToString = numberInput.toString();
  let sum = 0;

  for (let i = 0; i < numberToString.length; i++) {
    sum += Number(numberToString[i]);
  }

  let printResult = sum.toString().includes(9);

  console.log(`${numberInput} Amazing? ${printResult ? "True" : "False"}`);
}

amazingNumbers(583472);
