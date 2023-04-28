function spicesMustFlow(startingYield) {
  let daysMineOperated = 0;
  let totalAmountOfSpices = 0;

  let currentYield = startingYield;

  while (currentYield >= 100) {
    daysMineOperated++;
    totalAmountOfSpices += currentYield;
    totalAmountOfSpices -= 26; //consumed by miners

    currentYield -= 10;
  }

  console.log(daysMineOperated);
  if (totalAmountOfSpices === 0) {
    console.log(totalAmountOfSpices);
  } else {
    console.log(totalAmountOfSpices - 26);
  }
}

spicesMustFlow(0);
