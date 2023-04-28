function starEnigma(input) {

    let numberOfMessages = +input.shift();
    let messageCounter = 0;

    let regexPatternEncrypted = /[STARstar]+/g
    let encryptionSymbols = [];
    let encryptionSymbolsCounter = 0;

    let attackedPlanets = [];
    let destroyedPlanets = [];
    let attackedPlanetsCounter = 0;
    let destroyedPlanetsCounter = 0;

    let regexPatternDecrypted = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*?:(?<planetPopulation>\d+)[^@\-!:>]*?!(?<attackType>[A|D])![^@\-!:>]*?->[^@\-!:>]*?(?<soldierCount>\d+)/gm

    for (let message of input) {

        if (messageCounter === numberOfMessages) {
            break;
        }

        let decryptedMessage = [];
        let decryptedMessageToString = '';

        //Check if match is null, meaning no encryption letters are present.
        if (!message.match(regexPatternEncrypted)) {
            encryptionSymbolsCounter = 0
        } else {
            encryptionSymbols = message.match(regexPatternEncrypted).join('').split('');
            encryptionSymbolsCounter = encryptionSymbols.length;
        }

        message = message.split('');

        for (let el of message) {
            let newCharCode = el.charCodeAt(0) - encryptionSymbolsCounter;
            decryptedMessage.push(String.fromCharCode(newCharCode))
        }

        decryptedMessageToString = decryptedMessage.join('');

        let matches = decryptedMessageToString.match(regexPatternDecrypted);
        let valid = regexPatternDecrypted.exec(matches)

        if (valid) {
            let planetName = valid.groups.planetName;
            let planetPopulation = valid.groups.planetPopulation;
            let attackType = valid.groups.attackType;
            let soldierCount = valid.groups.soldierCount;

            if (attackType === 'A') {
                attackedPlanets.push(planetName);
                attackedPlanetsCounter++;
            } else if (attackType === 'D') {
                destroyedPlanets.push(planetName);
                destroyedPlanetsCounter++;
            }
        }

        messageCounter++;
        if (messageCounter === numberOfMessages) {
            break
        }
    }

    console.log(`Attacked planets: ${attackedPlanetsCounter}`);

    attackedPlanets.sort((a, b) => a.localeCompare(b));
    for (let planet of attackedPlanets) {
        console.log(`-> ${planet}`);
    }

    console.log(`Destroyed planets: ${destroyedPlanetsCounter}`);

    destroyedPlanets.sort((a, b) => a.localeCompare(b));
    for (let planet of destroyedPlanets) {
        console.log(`-> ${planet}`);
    }

}

starEnigma(['2',
    'CDoghudd4=63333$D$053333',
    'EHfsytsnhf?8555&I&2C9555SR']

)

// console.log("----------------")


// starEnigma(['3',
//     "tt(''DGsvywgerx>6444444444%H%1B9444",
//     'GQhrr|A977777(H(TTTT',
//     'EHfsytsnhf?8555&I&2C9555SR']

// )

