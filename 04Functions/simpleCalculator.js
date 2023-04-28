function simpleCalculator(firstNumber, secondNumber, operator){

    let result = 0;

    switch(operator){
        case 'multiply': result = (firstNumber, secondNumber) => firstNumber * secondNumber; break;
        case 'divide': result = (firstNumber, secondNumber) => firstNumber / secondNumber; break;
        case 'add': result = (firstNumber, secondNumber) => firstNumber + secondNumber; break;
        case 'subtract': result = (firstNumber, secondNumber) => firstNumber - secondNumber; break;
    }

    console.log(result(firstNumber, secondNumber));
}

simpleCalculator(5, 5, 'multiply');