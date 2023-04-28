function passwordGenerator(input) {

    let initialPasswordString = input[0] + input[1];
    let password = '';
    let passKey = input[2];
    let passKeyIndex = 0;

    for (let char of initialPasswordString) {

        let currentChar = char.toLowerCase();
        let currentCharCode = currentChar.charCodeAt(0);

        if (currentCharCode === 97 || currentCharCode === 101 || currentCharCode === 105
            || currentCharCode === 111 || currentCharCode === 117) {

            password += passKey[passKeyIndex].toUpperCase();
            passKeyIndex++;

        } else {
            password += currentChar;
        }

        if (passKeyIndex >= passKey.length) {
            passKeyIndex = 0;
        }
    }

    password = password.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}

passwordGenerator([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
]);