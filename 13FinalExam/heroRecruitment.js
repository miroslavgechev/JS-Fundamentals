function heroRecruitment(input) {

    let heroCollection = {};

    for (let index = 0; index < input.length; index++) {
        if (input[index] === 'End') {
            break;
        }

        let [command, heroName, spellName] = input[index].split(' ')

        switch (command) {
            case 'Enroll':
                if (heroCollection.hasOwnProperty(heroName)) {
                    console.log(`${heroName} is already enrolled.`);
                    break;
                }

                heroCollection[heroName] = new Set();
                break;

            case 'Learn':
                if (!heroCollection.hasOwnProperty(heroName)) {
                    console.log(`${heroName} doesn't exist.`);
                    break;
                }

                if (heroCollection[heroName].has(spellName)) {
                    console.log(`${heroName} has already learnt ${spellName}.`);
                    break;
                }

                heroCollection[heroName].add(spellName);
                break;

            case 'Unlearn':
                if (!heroCollection.hasOwnProperty(heroName)) {
                    console.log(`${heroName} doesn't exist.`);
                    break;
                }

                if (!heroCollection[heroName].has(spellName)) {
                    console.log(`${heroName} doesn't know ${spellName}.`);
                    break;
                }

                heroCollection[heroName].delete(spellName);
                break;
        }
    }

    console.log('Heroes:');

    for (let [hero, set] of Object.entries(heroCollection)) {
        let line = `== ${hero}: `
        let skillsSet = [];
        set.forEach(skill => skillsSet.push(skill));

        line += skillsSet.join(', ');

        console.log(line)
    }

}

heroRecruitment((["Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan ItShouldWork",
    "End"])
)

console.log('------------------');

heroRecruitment(["Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Unlearn Stefan NotFound",
    "End"])

console.log('------------------');

heroRecruitment(["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"])

console.log('------------------');

heroRecruitment(["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Stefan DiSpell",
    "Learn Peter Dispel",
    "End"])

