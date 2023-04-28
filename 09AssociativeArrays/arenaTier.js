function arenaTier(inputData) {

    let index = 0;
    let currentLine = inputData[index];
    index++;
    let gladiatorPool = {};
    let gladiatorsTotalSkill = {};

    while (currentLine !== 'Ave Cesar') {

        if (currentLine.includes('->')) {
            let [gladiator, technique, skill] = currentLine.split(' -> ');
            skill = +skill;

            if (!gladiatorPool.hasOwnProperty(gladiator)) {
                gladiatorPool[gladiator] = {};
            }

            if (!gladiatorPool[gladiator].hasOwnProperty(technique)) {
                gladiatorPool[gladiator][technique] = skill;
            } else {
                let currentSkill = gladiatorPool[gladiator][technique];

                if (currentSkill < skill) {
                    gladiatorPool[gladiator][technique] = skill;
                }
            }
        } else {
            let [gladiatorA, gladiatorB] = currentLine.split(' vs ');

            if (gladiatorPool.hasOwnProperty(gladiatorA) && gladiatorPool.hasOwnProperty(gladiatorB)) {

                let matchFound = false;
                for (let [techniqueA, skillA] of Object.entries(gladiatorPool[gladiatorA])) {
                    for (let [techniqueB, skillB] of Object.entries(gladiatorPool[gladiatorB])) {
                        if (techniqueA === techniqueB) {
                            if (skillA > skillB) {
                                delete gladiatorPool[gladiatorB];
                                matchFound = true;
                            } else {
                                delete gladiatorPool[gladiatorA];
                                matchFound = true;
                            }
                        }
                    }
                    if (matchFound) {
                        break;
                    }
                }
            }


        }
        currentLine = inputData[index];
        index++;
    }

    for (let currentGladiator of Object.keys(gladiatorPool)) {
        gladiatorsTotalSkill[currentGladiator] = 0;
        for (let value of Object.values(gladiatorPool[currentGladiator])) {
            gladiatorsTotalSkill[currentGladiator] += value;
        }
    }

    let gladiatorsTotalSkillSorted = Object.entries(gladiatorsTotalSkill).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA || keyA.localeCompare(keyB));

    for (let [gladiatorName, gladiatorTotalSkill] of gladiatorsTotalSkillSorted) {
        console.log(`${gladiatorName}: ${gladiatorTotalSkill} skill`);
        let sortedTechniquesAndSkills = Object.entries(gladiatorPool[gladiatorName]).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA || keyA.localeCompare(keyB));

        for (let [gladiatorTechnique, gladiatorSkill] of sortedTechniquesAndSkills) {
            console.log(`- ${gladiatorTechnique} <!> ${gladiatorSkill}`);
        }
    }
}

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]


)