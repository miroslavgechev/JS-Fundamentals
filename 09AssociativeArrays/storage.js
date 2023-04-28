function storage(inputData) {

    let storageList = new Map();

    for (let line of inputData) {
        let [product, quantity] = line.split(' ');

        if (storageList.has(product)) {
            let newQuantity = +storageList.get(product) + +quantity;
            storageList.set(product, newQuantity);
        } else {
            storageList.set(product, quantity);
        }
    }

    for (let kvp of storageList) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)