function hardWords(input) {

    let text = input[0];
    let wordsArray = input[1];
    let underscoresArray = [];

    for (let word of wordsArray) {
        let underscores = '_'.repeat(word.length);
        underscoresArray.push(underscores);

    }

    wordsArray.sort((a, b) => b.length - a.length)
    underscoresArray.sort((a, b) => b.length - a.length)

    for (let index = 0; index < underscoresArray.length; index++) {
        text = text.replace(underscoresArray[index], wordsArray[index]);
    }

    console.log(text)
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)