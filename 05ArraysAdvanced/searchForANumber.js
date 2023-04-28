function searchForANumber(inputArray, commands) {
  let elementsToTake = commands[0];
  let elementsToDelete = commands[1];
  let elementToFind = commands[2];
  let elementToFindCounter = 0;

  let resultArray = inputArray.slice(0, elementsToTake);
  resultArray.splice(0, elementsToDelete);

  for (let number of resultArray) {
    if (number === elementToFind) {
      elementToFindCounter++;
    }
  }

  console.log(`Number ${elementToFind} occurs ${elementToFindCounter} times.`);
}

searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    );
