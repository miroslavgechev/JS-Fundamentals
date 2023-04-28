function perfectNumber(number){

    let perfectSum = 0;

    for(let currentNumber = 1; currentNumber < number; currentNumber++){

        if(number % currentNumber === 0){
            perfectSum += currentNumber;
        }

    }

    if(perfectSum === number){
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.')
    }

}

perfectNumber(28)