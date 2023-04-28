function charactersInRange(firstChar, secondChar) {
  let startCharCode = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
  let endCharCode = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
  let resultArray = [];

  for (
    currentCharCode = startCharCode + 1;
    currentCharCode < endCharCode;
    currentCharCode++
  ) {
    resultArray.push(String.fromCharCode(currentCharCode));
  }

  console.log(resultArray.join(' '));

}

charactersInRange('#',
':'
);
