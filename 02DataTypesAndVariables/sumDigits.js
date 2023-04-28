function sumDigits(inputNumber) {
  let sum = 0;
  let currentDigit = inputNumber.toString();

  for (let index = 0; index < currentDigit.length; index++) {
    sum += Number(currentDigit[index]);
  }

  console.log(sum);

}

sumDigits(245678);