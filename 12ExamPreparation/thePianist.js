function thePianist(input) {

    let initialPieces = Number(input.shift());
    let pieces = {};

    for (let index = 0; index < initialPieces; index++) {

        let [piece, composer, key] = input[index].split('|');
        if (!pieces.hasOwnProperty(piece)) {
            pieces[piece] = {};
        }

        pieces[piece][composer] = key;
    }

    for (let index = initialPieces; index < input.length; index++) {
        let currentLine = input[index];

        if (currentLine === 'Stop') {
            for (let [piece, values] of Object.entries(pieces)) {
                let composer = Object.keys(values);
                let key = Object.values(values);
                console.log(`${piece} -> Composer: ${composer}, Key: ${key}`)
            }
        }

        let [command, ...elements] = currentLine.split('|');

        switch (command) {
            case 'Add':
                addPiece(elements);
                break;

            case 'Remove':
                removePiece(elements);
                break;

            case 'ChangeKey':
                changeKey(elements);
                break;
        }
    }

    function addPiece(elements) {
        let [pieceToAdd, composerToAdd, keyToAdd] = elements.join('|').split('|');

        if (pieces.hasOwnProperty(pieceToAdd)) {
            return console.log(`${pieceToAdd} is already in the collection!`)
        } else {
            pieces[pieceToAdd] = {};
            pieces[pieceToAdd][composerToAdd] = keyToAdd;
            return console.log(`${pieceToAdd} by ${composerToAdd} in ${keyToAdd} added to the collection!`)
        }
    }

    function removePiece(elements) {
        let pieceToRemove = elements.join('');

        if (pieces.hasOwnProperty(pieceToRemove)) {
            delete pieces[pieceToRemove];
            return console.log(`Successfully removed ${pieceToRemove}!`)
        } else {
            return console.log(`Invalid operation! ${pieceToRemove} does not exist in the collection.`)
        }
    }

    function changeKey(elements) {
        let [pieceToChangeKey, newKey] = elements.join('|').split('|');

        if (pieces.hasOwnProperty(pieceToChangeKey)) {
            let tempComposer = Object.keys(pieces[pieceToChangeKey]);
            pieces[pieceToChangeKey][tempComposer] = newKey;
            return console.log(`Changed the key of ${pieceToChangeKey} to ${newKey}!`);
        } else {
            return console.log(`Invalid operation! ${pieceToChangeKey} does not exist in the collection.`);
        }
    }

}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)

console.log(`---------`)

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
)