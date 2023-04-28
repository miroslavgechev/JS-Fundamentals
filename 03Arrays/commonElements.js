function commonElements(firstArray, secondArray) {
  let arrayLength = firstArray.length;

  for (let index = 0; index < arrayLength; index++) {
    let currentElementFirstArray = firstArray[index];

    for (let index2 = 0; index2 < arrayLength; index2++) {
      if (currentElementFirstArray === secondArray[index2]) {
        console.log(secondArray[index2]);
      }
    }
  }
}

commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
