function netherRealm(input) {

    let demonNamesList = input.split(',').map(el => el.trim());
    let demons = {};

    let patternDemonHealth = /[^0-9+\-*/.]+/g;
    let patternDemonDamageDigits = /[+|-]?(?:\d+(?:\.\d*)?|\.\d+)/g;
    let patternDemonDamageSymbols = /[/*]/g;

    for (let demonName of demonNamesList) {
        let demonLetters = demonName.match(patternDemonHealth);

        if (demonLetters !== null) {
            demonLetters = demonLetters.join('').split('');
        } else {
            demonLetters = '';
        }

        let demonDigits = demonName.match(patternDemonDamageDigits);
        let demonSymbols = demonName.match(patternDemonDamageSymbols);

        let demonHealthPoints = 0;
        let demonDamagePoints = 0;

        if (!demons.hasOwnProperty(demonName)) {
            demons[demonName] = {};
        } else {
            demonHealthPoints = demons[demonName]['healthPoints'];
            demonDamagePoints = demons[demonName]['damagePoints'];
        }

        for (let char of demonLetters) {
            demonHealthPoints += char.charCodeAt(0);
        }
        demons[demonName]['healthPoints'] = demonHealthPoints;

        if (demonDigits != null) {
            for (let num of demonDigits) {
                demonDamagePoints += Number(num);
            }
        }

        if (demonSymbols != null) {
            for (let symbol of demonSymbols) {
                if (symbol === '*') {
                    demonDamagePoints *= 2;
                } else if (symbol === '/') {
                    demonDamagePoints /= 2;
                }
            }
        }

        demons[demonName]['damagePoints'] = demonDamagePoints;
    }

    let sortedDemonNames = Object.entries(demons).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
  
    for (let demonN of sortedDemonNames) {
        console.log(`${demonN[0]} - ${demons[demonN[0]]['healthPoints']} health, ${demons[demonN[0]]['damagePoints'].toFixed(2)} damage`);
    }

}

netherRealm('M3ph1st0**, Azazel')