function mergeArrays(firstArray, secondArray){

    let arrayLength = firstArray.length;
    let newArray = [];

    for(let index = 0; index < arrayLength; index++){

        let currentElement;

        if(index % 2 === 0){
            currentElement = Number(firstArray[index]) + Number(secondArray[index]);
        } else {
            currentElement = firstArray[index] + secondArray[index];
        }

        newArray.push(currentElement);

    } 

    console.log(newArray.join(' - '));

}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);