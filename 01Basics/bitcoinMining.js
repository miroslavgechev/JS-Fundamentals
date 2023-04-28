function bitcoinMining(input) {
  let bitcoinPrice = 11949.16;
  let goldPrice = 67.51;

  let inputLength = Object.keys(input).length;
  let index = 0;

  let bitcoinCount = 0;
  let dayOfFirstBitcoin = 0;
  let budget = 0;

  for (i = 0; i < inputLength; i++) {
    let gramsCurrentDay = input[index];
    index++;
    let budgetToBitcoinRatio = 0;

    if (index % 3 === 0) {
      gramsCurrentDay = gramsCurrentDay * 0.7;
    }

    budget += gramsCurrentDay * goldPrice;

    if (budget >= bitcoinPrice) {
      budgetToBitcoinRatio = Math.floor(budget / bitcoinPrice);
      budget -= bitcoinPrice * budgetToBitcoinRatio;
      bitcoinCount += budgetToBitcoinRatio;
    }

    if (bitcoinCount > 0 && dayOfFirstBitcoin === 0) {
      dayOfFirstBitcoin = index;
    }
  }

  console.log(`Bought bitcoins: ${bitcoinCount}`);
  if (bitcoinCount > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
  }

  let budgetRounded = Math.round(budget * 100) / 100;
  console.log(`Left money: ${budget.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
