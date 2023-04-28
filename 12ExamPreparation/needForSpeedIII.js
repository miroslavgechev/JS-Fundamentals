function needForSpeed(input) {

    let carsCount = Number(input.shift());
    let garage = {};
    let mileageName = 'Mileage';
    let fuelName = 'Fuel';

    for (let index = 0; index < carsCount; index++) {
        let line = input.shift();
        let [car, mileage, fuel] = line.split('|');

        if (!garage.hasOwnProperty(car)) {
            garage[car] = {};
        }

        garage[car][mileageName] = mileage;
        garage[car][fuelName] = fuel;
    }

    for (let line of input) {
        if (line === 'Stop') {
            for (let [car, value] of Object.entries(garage)) {
                let carMileage = value[mileageName];
                let carFuel = value[fuelName];
                console.log(`${car} -> Mileage: ${carMileage} kms, Fuel in the tank: ${carFuel} lt.`)
            }
        }

        let [command, ...elements] = line.split(' : ');

        switch (command) {
            case 'Drive':
                drive(elements);
                sellCarCheck(elements);
                break;

            case 'Refuel':
                refuel(elements);
                break;

            case 'Revert':
                revert(elements);
                break;
        }
    }

    function drive(elements) {
        let [car, distance, fuel] = elements.join('|').split('|');
        let currentFuel = Number(garage[car][fuelName]);
        let currentMileage = Number(garage[car][mileageName]);
        distance = Number(distance);
        fuel = Number(fuel);

        if (currentFuel < fuel) {
            return console.log('Not enough fuel to make that ride');
        }

        garage[car][fuelName] = currentFuel - fuel;
        garage[car][mileageName] = currentMileage + distance;

        return console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
    }

    function sellCarCheck(elements) {
        let [car, distance, fuel] = elements.join('|').split('|');
        let currentMileage = Number(garage[car][mileageName]);

        if (currentMileage >= 100000) {
            delete garage[car];
            return console.log(`Time to sell the ${car}!`);
        }
    }

    function refuel(elements) {
        let [car, fuel] = elements.join('|').split('|');
        let currentFuel = Number(garage[car][fuelName]);
        let fuelDiff = 0;
        fuel = Number(fuel);

        if ((currentFuel + fuel) > 75) {
            fuelDiff = 75 - currentFuel;
            garage[car][fuelName] = 75;
        } else {
            fuelDiff = fuel;
            garage[car][fuelName] = currentFuel + fuel;
        }

        return console.log(`${car} refueled with ${fuelDiff} liters`)
    }

    function revert(elements) {
        let [car, kilometers] = elements.join('|').split('|');
        kilometers = Number(kilometers);
        let currentMileage = Number(garage[car][mileageName]);
        let newMileage = currentMileage - kilometers;

        if (newMileage < 10000) {
            newMileage = 10000;
            garage[car][mileageName] = newMileage;
            return
        } else {
            garage[car][mileageName] = newMileage;
            return console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        }
    }
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
)

console.log('------------------------------')

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
)