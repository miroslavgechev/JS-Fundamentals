function countStringOccurences(text, searchWord) {
    let textArray = text.split(' ');
    let counter = 0;

    for (let word of textArray) {
        if (word === searchWord) {
            counter++;
        }
    }

    console.log(counter);
}



countStringOccurences('This is a word and it also is a sentence',
    'is'
)