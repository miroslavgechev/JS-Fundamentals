function oddOccurences(inputLine) {
    let occurences = new Map();

    let inputArray =
        inputLine
            .split(' ')
            .map(el => el.toLowerCase());

    for (let el of inputArray) {
        if (!occurences.has(el)) {
            occurences.set(el, 0);
        }
        occurences.set(el, occurences.get(el) + 1);
    }

    let filteredOccurences =
        Array
            .from(occurences)
            .filter(([key, value]) => value % 2 !== 0);

    let resultArray = [];

    for (let [key, value] of filteredOccurences) {
        resultArray.push(key);
    }

    console.log(resultArray.join(' '));
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');