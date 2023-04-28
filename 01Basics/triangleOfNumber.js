function triangleOfNumber(numberReceived) {
  for (let row = 1; row <= numberReceived; row++) {
    let printLine = '';

    for (let col = 1; col <= row; col++) {
      if (col === row) {
        printLine += `${row}`;
      } else {
        printLine += `${row} `;
      }
    }

    console.log(printLine);
  }
}

triangleOfNumber(3);
