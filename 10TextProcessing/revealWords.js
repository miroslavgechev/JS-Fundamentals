function revealWords(words, sentence) {

    let wordsArray = words.split(', ');
    let sentenceArray = sentence.split(' ');

    for (let wordToAdd of wordsArray) {

        for (let index = 0; index < sentenceArray.length; index++) {
            let currentWord = sentenceArray[index];

            if (currentWord.includes('*') && currentWord.length === wordToAdd.length) {
                sentenceArray[index] = wordToAdd;
            }
        }
    }

    console.log(sentenceArray.join(' '));
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
)