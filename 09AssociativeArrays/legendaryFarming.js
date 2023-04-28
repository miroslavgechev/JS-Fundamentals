function legendaryFarming(dataInput) {

    let legendary = {
        'shards': 0,
        'motes': 0,
        'fragments': 0
    };

    let junk = {};

    let dataInputArray = dataInput.split(' ');

    for (let index = 0; index < dataInputArray.length; index += 2) {
        let quantity = +dataInputArray[index];
        let material = dataInputArray[index + 1].toLowerCase();

        if (material === 'shards' || material === 'fragments' || material === 'motes') {

            legendary[material] += quantity;

        } else {
            if (junk.hasOwnProperty(material)) {
                junk[material] += quantity;
            } else {
                junk[material] = quantity;
            }

        }
        
        if (legendary[material] >= 250) {
            legendary[material] -= 250;
            let materialToPrint = ''

            switch (material) {
                case 'shards': materialToPrint = 'Shadowmourne'; break;
                case 'fragments': materialToPrint = 'Valanyr'; break;
                case 'motes': materialToPrint = 'Dragonwrath'; break;
            }

            console.log(`${materialToPrint} obtained!`);
            break;
        }
    }

    let sortedLegendaryMaterials = Object.entries(legendary).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA || keyA.localeCompare(keyB));
    for (let [key, value] of sortedLegendaryMaterials) {
        console.log(`${key}: ${value}`);
    }

    let sortedJunkMaterials = Object.entries(junk).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
    for (let [key, value] of sortedJunkMaterials) {
        console.log(`${key}: ${value}`);
    }
}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')