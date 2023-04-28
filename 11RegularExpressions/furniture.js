function furniture(input) {

    let regex = />>(?<furniture>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;

    let inputToString = input.join(' ');
    let validInput;
    let totalSum = 0;
    let boughtFurnitureArray = [];


    while (validInput = regex.exec(inputToString)) {
        let { furniture, price, quantity } = validInput.groups;
        boughtFurnitureArray.push(furniture);
        totalSum += +price * +quantity;
    }

    console.log('Bought furniture:');
    boughtFurnitureArray.forEach(el => console.log(el));
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
)