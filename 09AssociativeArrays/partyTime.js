function partyTime(dataInput) {

    let normalGuestList = [];
    let vipGuestList = [];
    let partyStarted = false;

    for (let line of dataInput) {
        if (line === 'PARTY') {
            partyStarted = true;
            continue;
        }

        if (!partyStarted) {
            if (isNaN(line[0])) {
                normalGuestList.push(line);
            } else {
                vipGuestList.push(line);
            }
        } else {
            if (isNaN(line[0])) {
                let currentGuestIndex = normalGuestList.indexOf(line);
                normalGuestList.splice(currentGuestIndex, 1);
            } else {
                let currentGuestIndex = vipGuestList.indexOf(line);
                vipGuestList.splice(currentGuestIndex, 1);
            }

        }
    }

    console.log(normalGuestList.length + vipGuestList.length);
    //console.log(vipGuestList.join('\n'));
    //console.log(normalGuestList.join('\n'));
    
    for (let el of vipGuestList) {
        console.log(el);
    }

    for (let el of normalGuestList) {
        console.log(el);
    }

}

partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]



)