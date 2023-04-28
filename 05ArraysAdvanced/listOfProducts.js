function listOfProducts(inputArray) {
  let resultArray = inputArray
    .sort()
    .map((element, index) => `${index + 1}.${element}`);

  console.log(resultArray.join('\n'));
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
