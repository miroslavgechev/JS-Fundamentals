function reverseInPlace(inputArray){

    let workingArray = [];

    for (let element of inputArray){
        workingArray.push(element);
    }

    for(let i = 0; i < workingArray.length / 2; i++){

    let tempValue = workingArray[i];
    workingArray[i] = workingArray[workingArray.length - 1 - i];
    workingArray[workingArray.length - 1 - i] = tempValue

    }

    console.log(workingArray.join(' '));

}

reverseInPlace(['33', '123', '0', 'dd']);