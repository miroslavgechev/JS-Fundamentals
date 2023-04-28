function trains(inputArray) {
  let wagons = inputArray[0].split(" ").map(Number);
  let maxCapacity = Number(inputArray[1]);

  for (let index = 2; index < inputArray.length; index++) {
    let currentValue = inputArray[index].split(" ");

    if (currentValue[0] === "Add") {
      wagons.push(currentValue[1]);
    } else {
      currentValue[0] = +currentValue[0];
      for (let index2 = 0; index2 < wagons.length; index2++) {
        if (wagons[index2] + currentValue[0] <= maxCapacity) {
          wagons[index2] += currentValue[0];
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}

trains(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
