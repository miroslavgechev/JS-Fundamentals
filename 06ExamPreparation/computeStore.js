function computeStore(input) {
  let index = 0;
  let currentValue = input[index];
  index++;
  let totalSum = 0;
  let totalSumWithTaxes = 0;

  while (currentValue !== "special" && currentValue !== "regular") {
    let currentValueToNumber = Number(currentValue);

    if (currentValueToNumber < 0) {
      console.log("Invalid price!");
      currentValue = input[index];
      index++;
      continue;
    }

    totalSum += currentValueToNumber;

    currentValue = input[index];
    index++;
  }

  totalSumWithTaxes = totalSum * 1.2;
  taxes = totalSumWithTaxes - totalSum;

  if (totalSumWithTaxes === 0) {
    console.log("Invalid order!");
  } else if (currentValue === "special") {
    totalSumWithTaxes *= 0.9;
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${totalSum.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalSumWithTaxes.toFixed(2)}$`);
  } else if (currentValue === "regular") {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${totalSum.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalSumWithTaxes.toFixed(2)}$`);
  }
}

computeStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);
