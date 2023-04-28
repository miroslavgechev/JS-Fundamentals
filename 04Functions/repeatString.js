function repeatString(string, repeatCount) {
  let resultString = "";

  for (let index = 0; index < repeatCount; index++) {
    resultString += string;
  }

  console.log(resultString);
}

repeatString("abc", 3);
