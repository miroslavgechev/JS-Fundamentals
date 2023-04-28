function makeADictionary(jsonInputArray) {

    let dictionaryArray = [];
    let dictionary = {};
    let sortedTerms = [];

    jsonInputArray.forEach(element => {
        dictionaryArray.push(JSON.parse(element));
    });

    dictionaryArray.forEach(element => {
        let term = Object.keys(element);
        let definition = Object.values(element);

        dictionary[term] = definition;

    })

    sortedTerms = Object
        .keys(dictionary)
        .sort((a, b) => a.localeCompare(b));

    sortedTerms.forEach(element => {
        console.log(`Term: ${element} => Definition: ${dictionary[element]}`)
    })

}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]
)