function worldTour(inputData) {

    let route = inputData.shift();

    for (let index = 0; index < inputData.length; index++) {
        if (inputData[index] === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${route}`);
            break;
        }

        let [command, firstValue, secondValue] = inputData[index].split(':');

        switch (command) {
            case 'Add Stop':
                //"Add Stop:{index}:{string}":
                firstValue = Number(firstValue);
                if (route[firstValue]) {
                    let routeFirstPart = route.slice(0, firstValue);
                    let routeSecondPart = route.slice(firstValue);
                    route = routeFirstPart + secondValue + routeSecondPart;
                }
                break;

            case 'Remove Stop':
                //"Remove Stop:{start_index}:{end_index}"
                firstValue = Number(firstValue);
                secondValue = Number(secondValue);
                if (route[firstValue] && route[secondValue]) {
                    let stringToRemove = route.substring(firstValue, secondValue + 1);
                    route = route.replace(stringToRemove, '');
                };
                break;

            case 'Switch':
                //"Switch:{old_string}:{new_string}"
                let pattern = new RegExp(firstValue, 'g');
                route = route.replace(pattern, secondValue);
                break;
        }

        console.log(route);
    }
}

worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
)