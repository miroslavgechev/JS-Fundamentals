function sorting(inputArray) {
  let ascendingArray = inputArray.slice(0).sort((a, b) => a - b);
  let descendingArray = ascendingArray.slice(0).reverse();

  let resultArray = [];

  for (let index = 0; index < inputArray.length / 2; index++) {
    resultArray.push(descendingArray[index], ascendingArray[index]);
  }

  if(inputArray.length % 2 === 1){
    resultArray.pop()
  }

  console.log(resultArray.join(" "));
}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
