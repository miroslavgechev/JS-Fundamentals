function sumOfOddNumbers(number) {
  let sum = 0;

  for (let i = 1; i <= number * 2; i += 2) {
    console.log(i);
    sum += i;
  }

  console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
