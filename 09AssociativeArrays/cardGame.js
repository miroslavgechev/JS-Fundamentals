function cardGame(input) {

    let cardPower = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }

    let cardType = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4
    }

    let players = {};

    for (let line of input) {
        let [name, ...cards] = line.split(': ');
        cards = cards.join().split(', ');

        if (!players.hasOwnProperty(name)) {
            players[name] = new Set();
        }

        for (let card of cards) {
            players[name].add(card);
        }
    }

    for (let key in players) {
        let sum = 0;
        let values = Array.from(players[key]);

        for (let el of values) {
            let typeOfCard = el.slice(-1);
            let powerOfCard = el.slice(0, el.length - 1);
            sum += cardPower[powerOfCard] * cardType[typeOfCard];
        }

        console.log(`${key}: ${sum}`);
    }
}

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]
)
