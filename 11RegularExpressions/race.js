function race(input) {

    let participants = input.shift().split(', ');
    let standing = {};

    participants.forEach(participant => standing[participant] = 0);

    let nameRegEx = /[A-Za-z]/g
    let pointsRegEx = /[0-9]+/g

    for (let entry of input) {

        if (entry === 'end of race') {
            break;
        }

        let name = entry
            .match(nameRegEx)
            .join('');

        let points = entry
            .match(pointsRegEx)
            .join('')
            .split('')
            .reduce((a, b) => Number(a) + Number(b));

        if (standing.hasOwnProperty(name)) {
            let participantPoints = standing[name];
            standing[name] += participantPoints + points;
        }
    }

    sortedStandings = Object.entries(standing).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    console.log(`1st place: ${sortedStandings[0][0]}`);
    console.log(`2nd place: ${sortedStandings[1][0]}`);
    console.log(`3rd place: ${sortedStandings[2][0]}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)