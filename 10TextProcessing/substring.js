function substring(stringInput, startIndex, count){

    let output = stringInput.substring(startIndex, startIndex + count);
    console.log(output);

}

substring('ASentence', 1, 8);
console.log('-----------');
substring('SkipWord', 4, 7);