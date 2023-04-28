function convertToJSON(firstName, lastName, hairColor){

    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    };

    let personToString = JSON.stringify(person)
    console.log(personToString)
}

convertToJSON('George', 'Jones', 'Brown')