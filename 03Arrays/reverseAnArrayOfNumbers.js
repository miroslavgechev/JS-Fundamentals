function reverseAnArrayOfNumbers(number, arrayOfElements) {
  let newArray = [];

  for (let i = 1; i <= number; i++) {
    newArray.push(arrayOfElements[i-1]);
  }

  let newArrayReversed = newArray.reverse()
  console.log(newArrayReversed.join(" "));
}

reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
