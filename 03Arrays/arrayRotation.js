function arrayRotation(array, rotationsCount){

    while(rotationsCount !== 0){

        let currentElement = array.shift();
        array.push(currentElement);

        rotationsCount--;
    }
    
    console.log(array.join(' '));

}

arrayRotation([51, 47, 32, 61, 21], 2);