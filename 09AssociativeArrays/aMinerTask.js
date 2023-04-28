function aMinerTask(inputData) {

    let storage = {};

    for (let index = 0; index < inputData.length; index += 2) {
        let resource = inputData[index];
        let quantity = +inputData[index + 1];

        if (!storage.hasOwnProperty(resource)) {
            storage[resource] = 0;
        }

        storage[resource] += quantity;
    }

    for (let [key, value] of Object.entries(storage)) {
        console.log(`${key} -> ${value}`);
    }
}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
)