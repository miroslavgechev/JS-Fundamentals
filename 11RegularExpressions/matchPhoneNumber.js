function matchPhoneNumber(inputData) {
    let regexPattern = /\+359([ |-])2\1[0-9]{3}\1[0-9]{4}\b/g;
    let validPhoneNumbers = [];

    let validPhoneNumber = regexPattern.exec(inputData);

    while (validPhoneNumber) {
        validPhoneNumbers.push(validPhoneNumber[0]);
        validPhoneNumber = regexPattern.exec(inputData);
    }

    console.log(validPhoneNumbers.join(', '));

}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);