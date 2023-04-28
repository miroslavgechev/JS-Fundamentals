function sortAnArrayBy2Criteria(inputArray) {
  inputArray.sort((a, b) => a.length - b.length || a.localeCompare(b));

  console.log(inputArray.join("\n"));
}
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
