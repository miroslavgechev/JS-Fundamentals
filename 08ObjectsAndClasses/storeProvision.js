function storeProvision(inputStock, inputOrdered) {

    let storedProducts = {};

    for (let index = 0; index < inputStock.length; index += 2) {
        let item = inputStock[index];
        storedProducts[item] = +inputStock[index + 1];
    }

    for (let index = 0; index < inputOrdered.length; index += 2) {
        let item = inputOrdered[index];

        if (storedProducts.hasOwnProperty(item)) {
            storedProducts[item] += +inputOrdered[index + 1];
        } else {
            storedProducts[item] = +inputOrdered[index + 1];
        }

    }

    for (let product in storedProducts) {
        console.log(`${product} -> ${storedProducts[product]}`)
    }

}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)