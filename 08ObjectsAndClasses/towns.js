function towns(input) {

    let towns = {};

    input.forEach(element => {
        let [townName, latitude, longitude] = element.split(' | ');

        latitude = +latitude;
        longitude = +longitude;

        towns.town = townName;
        towns.latitude = latitude.toFixed(2);
        towns.longitude = longitude.toFixed(2);

        console.log(towns)
    });

}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)