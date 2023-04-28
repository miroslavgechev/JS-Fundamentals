function arrayManipulator(inputArray, commands){

    for(let index = 0; index < commands.length; index++){

        let currentCommandArray = commands[index].split(' ');
        let currentCommand = currentCommandArray[0];

        switch (currentCommand){
            case 'add':
                let indexToAdd = Number(currentCommandArray[1]);
                let elementToAdd = Number(currentCommandArray[2]);
                inputArray.splice(indexToAdd,0,elementToAdd);
                break;

            case 'addMany':
                let indexToStartAddition = Number(currentCommandArray[1]);
                let arrayToAdd = currentCommandArray.slice(2).map(Number).reverse();
                for(let number of arrayToAdd){
                    inputArray.splice(indexToStartAddition,0,number);
                }
                break;

            case 'contains':
                let numberToSearch = Number(currentCommandArray[1]);
                console.log(inputArray.indexOf(numberToSearch));
                break;

            case 'remove':
                let indexToRemoveElement = Number(currentCommandArray[1]);
                inputArray.splice(indexToRemoveElement, 1);
                break;

            case 'shift':
                let positionsToShift = Number(currentCommandArray[1]);
                for(let counter = 0; counter < positionsToShift; counter++){
                    let currentNumberToShift = inputArray.shift();
                    inputArray.push(currentNumberToShift);
                }
                break;

            case 'sumPairs':
                if(inputArray.length % 2 !== 0){
                    inputArray.push(0);
                }
                
                let sumPairs = [];
                
                for(let indexSumPairs = 0; indexSumPairs < inputArray.length; indexSumPairs += 2){
                    sumPairs.push(inputArray[indexSumPairs] + inputArray[indexSumPairs + 1]);
                }

                inputArray = [];
                inputArray = sumPairs.slice(0);
                break;

            case 'print':
                console.log(`[ ${inputArray.join(', ')} ]`);
                return;
        }

    }


}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
    
    )