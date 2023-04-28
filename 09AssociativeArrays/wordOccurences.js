function wordOccurences(inputData) {
    let wordMap = new Map();

    for (let element of inputData) {

        if (wordMap.has(element)) {
            let newValue = Number(wordMap.get(element)) + 1;
            wordMap.set(element, newValue);
        } else {
            wordMap.set(element, 1);
        }
    }

    let sortedMapArray = Array.from(wordMap).sort((a, b) => b[1] - a[1])

    for (let kvp of sortedMapArray) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }

}

wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])