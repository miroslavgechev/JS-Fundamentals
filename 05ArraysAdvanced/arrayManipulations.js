function arrayManipulations(inputArray) {
  let arrayToManipulate = inputArray.shift().split(" ").map(Number);

  for (let index = 0; index < inputArray.length; index++) {
    let [command, firstNumber, secondNumber] = inputArray[index].split(" ");
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    switch (command) {
      case "Add":
        Add(firstNumber);
        break;
      case "Remove":
        Remove(firstNumber);
        break;
      case "RemoveAt":
        RemoveAt(firstNumber);
        break;
      case "Insert":
        Insert(firstNumber, secondNumber);
        break;
    }
  }

  console.log(arrayToManipulate.join(" "));

  function Add(number) {
    arrayToManipulate.push(number);
  }

  function Remove(number) {
    arrayToManipulate = arrayToManipulate.filter((el) => el !== number);
  }

  function RemoveAt(index) {
    arrayToManipulate.splice(index, 1);
  }

  function Insert(number, index) {
    arrayToManipulate.splice(index, 0, number);
  }
}

arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
