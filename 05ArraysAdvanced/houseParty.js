function houseParty(inputArray) {
  let listOfGuests = [];

  for (let index = 0; index < inputArray.length; index++) {
    let currentValues = inputArray[index].split(" ");
    let nameOfGuest = currentValues[0];

    if (!currentValues.includes("not")) {
      if (!listOfGuests.includes(nameOfGuest)) {
        listOfGuests.push(nameOfGuest);
      } else {
        console.log(`${nameOfGuest} is already in the list!`);
      }
    } else {
      if (listOfGuests.includes(nameOfGuest)) {
        listOfGuests = listOfGuests.filter((el) => el !== nameOfGuest);
      } else {
        console.log(`${nameOfGuest} is not in the list!`);
      }
    }
  }

  console.log(listOfGuests.join("\n"));
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
