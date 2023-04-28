function hogwarts(input) {

    let spell = input.shift();

    for (let index = 0; index < input.length; index++) {
        let [command, ...elements] = input[index].split(' ');

        let newSpell = '';

        if (command === 'Abracadabra') {
            break;
        }

        switch (command) {
            case 'Abjuration':
                for (let ch of spell) {
                    newSpell += ch.toUpperCase();
                }
                spell = newSpell;

                console.log(spell);
                break;

            case 'Necromancy':
                for (let ch of spell) {
                    newSpell += ch.toLowerCase();
                }
                spell = newSpell;

                console.log(spell);
                break;

            case 'Illusion':
                let illusionIndex = Number(elements[0]);
                let illusionChar = elements[1];

                if ((illusionIndex >= 0) && (illusionIndex < spell.length)) {
                    let firstPartOfSpell = spell.slice(0, illusionIndex);
                    let secondPartOfSpell = spell.slice(illusionIndex + 1);

                    spell = firstPartOfSpell + illusionChar + secondPartOfSpell;

                } else {
                    console.log('The spell was too weak.');
                    break;
                }

                console.log('Done!');
                break;

            case 'Divination':
                let firstSubstring = elements[0];
                let secondSubstring = elements[1];

                if (spell.includes(firstSubstring)) {
                    while (spell.includes(firstSubstring)) {
                        spell = spell.replace(firstSubstring, secondSubstring);
                    }
                } else {
                    break;
                }

                console.log(spell)
                break;

            case 'Alteration':
                let substring = elements[0];

                if (spell.includes(substring)) {
                    while (spell.includes(substring)) {
                        spell = spell.replace(substring, '');
                    }
                } else {
                    break;
                }

                console.log(spell)
                break;

            default:
                console.log('The spell did not work!');
                break;
        }
    }
}

hogwarts(["SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"])


