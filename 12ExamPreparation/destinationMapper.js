function destinationMapper(input){

    let pattern = /(?<borderElement>[=|\/]{1})(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/gm;
    let validInput;
    let destinations = [];
    let travelPoints = 0;

    while(validInput = pattern.exec(input)){
        let currentDestination = validInput.groups.destination;
        destinations.push(currentDestination);
        travelPoints += currentDestination.length;
    }
    
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="));

console.log('--------------------------');

destinationMapper(("ThisIs some InvalidInput"));

console.log('--------------------------');

destinationMapper((""))