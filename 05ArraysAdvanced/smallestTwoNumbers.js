function smallestTwoNumbers(inputArray) {
  let sortedInputArrayAscending = inputArray.sort((a, b) => a - b);
  let smallestTwoNumbers = sortedInputArrayAscending.slice(0, 2);

  console.log(smallestTwoNumbers.join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);
