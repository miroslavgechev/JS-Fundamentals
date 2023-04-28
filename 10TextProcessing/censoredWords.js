function censoredWords(text, word) {
    let outputArray = text.split(word);
    console.log(outputArray.join('*'.repeat(word.length)));
}

censoredWords('A small sentence with some words', 'small');