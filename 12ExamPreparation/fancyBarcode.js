function fancyBarcode(inputData) {

    let barcodeCount = Number(inputData.shift());

    let barcodePattern = /(?<begin>@[#]+)(?<barcodeCode>[A-Z][A-Za-z0-9]{4,}[A-Z])(?<end>@[#]+)/g;
    let numbersPattern = /[0-9]+/;

    for (let index = 0; index < barcodeCount; index++) {
        let currentBarcode = inputData[index].match(barcodePattern);
        if (currentBarcode) {
            let barcodeSymbols = '';

            for (let ch of currentBarcode[0]) {
                if (numbersPattern.test(ch)) {
                    barcodeSymbols += ch;
                }
            }

            if (barcodeSymbols !== '') {
                console.log(`Product group: ${barcodeSymbols}`);
            } else {
                console.log('Product group: 00');
            }

        } else {
            console.log('Invalid barcode')
        }

    }
}

fancyBarcode(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]
);