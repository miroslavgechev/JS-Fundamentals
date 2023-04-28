function piccolo(inputData) {
    let parking = new Set();

    for (let line of inputData) {
        let [command, carPlate] = line.split(', ');

        if (command === 'IN') {
            parking.add(carPlate);
        } else {
            parking.delete(carPlate);
        }
    }

    let sortedPlates = Array.from(parking).sort();

    if (parking.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        console.log(sortedPlates.join('\n'));
    }

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)

console.log('=======')

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)