function pascalCaseSplitter(input) {

    let startIndex = 0;
    let endIndex = 0;
    let resultArray = [];

    for (let index = 1; index < input.length; index++) {

        if (input.charCodeAt(index) >= 65 && input.charCodeAt(index) <= 90) {
            endIndex = index;
            resultArray.push(input.substring(startIndex, endIndex));
            startIndex = index;
        }

        if (index === input.length - 1) {
            resultArray.push(input.slice(startIndex))
        }
    }

    console.log(resultArray.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')