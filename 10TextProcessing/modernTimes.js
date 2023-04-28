function modernTimes(input) {

    let inputArray = input.split(' ');

    for (let word of inputArray) {

        let hasSymbol = false;

        if (word.startsWith('#') && word.length > 1) {
            let wordToLowerCase = word.toLowerCase();

            for (let index = 1; index < wordToLowerCase.length; index++) {
                let currentCharCode = wordToLowerCase.charCodeAt(index)
                if (currentCharCode < 97 || currentCharCode > 122) {
                    hasSymbol = true;
                    break;
                }
            }

            if (!hasSymbol) {
                console.log(word.slice(1));
            }
        }
    }
}

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')