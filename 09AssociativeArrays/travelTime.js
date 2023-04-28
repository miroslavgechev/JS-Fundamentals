function travelTime(inputData) {

    let destinationList = {};

    for (let line of inputData) {
        let [country, city, cost] = line.split(' > ');

        cost = Number(cost);

        if (!destinationList.hasOwnProperty(country)) {
            destinationList[country] = {};
        }

        if (!destinationList[country].hasOwnProperty(city)) {
            destinationList[country][city] = cost;
        } else {
            let currentCost = destinationList[country][city];
            if (currentCost > cost) {
                destinationList[country][city] = cost;
            }
        }
    }

    let sortedCountries = Object.keys(destinationList).sort((a, b) => a.localeCompare(b));

    for (let currentCountry of sortedCountries) {
        let sortedCities = Object.entries(destinationList[currentCountry]).sort(([keyA, valueA], [keyB, valueB]) => valueA - valueB);

        let printLine = (`${currentCountry} ->`);

        for (let kvp of sortedCities) {
            printLine += ` ${kvp[0]} -> ${kvp[1]}`;
        }

        console.log(printLine);
    }
}

travelTime(
    [
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]
)    