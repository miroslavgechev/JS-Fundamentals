function lettersChangeNumbers(input) {
    let elements = input.split(' ')
        .filter(el => el.length > 1)
        .map(el => el.trim());

    let totalSum = 0;

    for (let element of elements) {
        let elementArray = element.split('');

        let firstLetter = elementArray.shift();
        let lastLetter = elementArray.pop();
        let number = Number(elementArray.join(''));

        let firstLetterCharCode = firstLetter.charCodeAt(0);
        let lastLetterCharCode = lastLetter.charCodeAt(0);
        let firstLetterValue = 0;
        let lastLetterValue = 0;

        let currentSum = 0;

        if (firstLetterCharCode >= 65 && firstLetterCharCode <= 90) {
            firstLetterValue = firstLetterCharCode - 64;
            currentSum = number / firstLetterValue;

        } else if (firstLetterCharCode >= 97 && firstLetterCharCode <= 122) {
            firstLetterValue = firstLetterCharCode - 96;
            currentSum = number * firstLetterValue;
        }

        if (lastLetterCharCode >= 65 && lastLetterCharCode <= 90) {
            lastLetterValue = lastLetterCharCode - 64;
            currentSum -= lastLetterValue;

        } else if (lastLetterCharCode >= 97 && lastLetterCharCode <= 122) {
            lastLetterValue = lastLetterCharCode - 96;
            currentSum += lastLetterValue;
        }

        totalSum += currentSum;

    }

    console.log(totalSum.toFixed(2));

}

lettersChangeNumbers('A12b s17G')
console.log('----------')
lettersChangeNumbers('P34562Z q2576f   H456z')
console.log('----------')
lettersChangeNumbers('a1A')