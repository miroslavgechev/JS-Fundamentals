function coffeeLover(inputArray) {
  let coffeeList = inputArray.shift().split(" ");
  let numberOfCommands = Number(inputArray.shift());
  let commandCounter = 1;
  let currentCommand = [];
  let currentOperation;

  while (commandCounter <= numberOfCommands) {
    commandCounter++;
    currentCommand = inputArray.shift().split(" ");
    currentOperation = currentCommand[0];

    switch (currentOperation) {
      case "Include":
        let coffeeToPush = currentCommand[1];
        coffeeList.push(coffeeToPush);
        break;

      case "Remove":
        let startPosition = currentCommand[1];
        let coffeeCount = Number(currentCommand[2]);

        if (coffeeCount <= coffeeList.length) {
          if (startPosition === "first") {
            coffeeList.splice(0, coffeeCount);
          } else if (startPosition === "last") {
            coffeeList.splice(-coffeeCount);
          }
        }
        break;

      case "Prefer":
        let indexFirstCoffee = currentCommand[1];
        let indexSecondCoffee = currentCommand[2];
        let tempValueHolder;

        if (indexFirstCoffee >= 0 || indexFirstCoffee < coffeeList.length) {
          if (indexSecondCoffee >= 0 || indexSecondCoffee < coffeeList.length) {
            tempValueHolder = coffeeList[indexFirstCoffee];
            coffeeList[indexFirstCoffee] = coffeeList[indexSecondCoffee];
            coffeeList[indexSecondCoffee] = tempValueHolder;
          }
        }
        break;

      case "Reverse":
        coffeeList = coffeeList.reverse();
        break;
    }
  }

  console.log("Coffees:");
  console.log(coffeeList.join(" "));
}

coffeeLover([
  "Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
  "3",
  "Include OrdinaryCoffee",
  "Remove first 1",
  "Prefer 4 1",
]);
