function catalogue(productsArray) {

    let catalogue = {};
    let keysArray = [];

    productsArray.forEach(element => {
        let [product, price] = element.split(' : ');
        catalogue[product] = +price;
    });

    for (let key in catalogue) {
        keysArray.push(key);
    }

    keysArray = keysArray.sort((a, b) => a.localeCompare(b));

    let currentCode = keysArray[0].charCodeAt(0);
    console.log(String.fromCharCode(currentCode));

    for (let element of keysArray) {
        let letterCode = element.charCodeAt(0)

        if (currentCode !== letterCode) {
            currentCode = letterCode;
            console.log(String.fromCharCode(currentCode));
        };

        console.log(`  ${element}: ${catalogue[element]}`);
    }

}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)