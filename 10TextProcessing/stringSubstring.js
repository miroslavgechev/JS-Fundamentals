function stringSubstring(keyWord, text) {

    let textArray = text.split(' ').map(el => el.toLowerCase());
    let searchWord = keyWord.toLowerCase();

    for (let word of textArray) {
        if (word === searchWord) {
            console.log(keyWord);
            return;
        }
    }

    console.log(`${keyWord} not found!`)
}

stringSubstring('javascript',
    'JavaScript is the best programming language'
)