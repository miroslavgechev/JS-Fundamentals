function softUniBarIncome(input) {

    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]*\.?[0-9]+)\$/g
    let inputString = input.join(' ');
    let valid;
    let totalSum = 0;

    while (valid = pattern.exec(inputString)) {
        let price = valid.groups.count * valid.groups.price;
        console.log(`${valid.groups.customer}: ${valid.groups.product} - ${price.toFixed(2)}`)
        totalSum += price;
    }

    console.log(`Total income: ${totalSum.toFixed(2)}`)

}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
)