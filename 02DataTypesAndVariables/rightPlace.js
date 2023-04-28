function rightPlace(firstString, newChar, secondString) {
  let result = firstString.replace("_", newChar);

  console.log(result === secondString ? "Matched" : "Not Matched");
}

rightPlace('Str_ng', 'i', 'String');
