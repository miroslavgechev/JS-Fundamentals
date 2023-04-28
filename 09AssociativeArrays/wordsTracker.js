function wordsTracker(inputData) {

    let wordCounter = {};
    let wordsToCount = inputData.shift().split(' ');


    for (let word of wordsToCount) {
        wordCounter[word] = 0;
    }

    for (let word of inputData) {
        if (wordCounter.hasOwnProperty(word)) {
            wordCounter[word] += 1;
        }
    }

    let wordCounterSort =
        Object
            .entries(wordCounter)
            .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    for (let [key, value] of wordCounterSort) {
        console.log(`${key} - ${value}`);
    }

}

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']

)