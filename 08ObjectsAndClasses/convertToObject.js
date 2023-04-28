function convertToObject(jsonEntry){

    let object = JSON.parse(jsonEntry);

    for(let [key, value] of Object.entries(object)){
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')