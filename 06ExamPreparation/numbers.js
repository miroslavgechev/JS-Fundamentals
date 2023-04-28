function numbers(input){
    let arrayOfNumbers = input.split(' ').map(Number);

    let average = 0;
    let arrayTotal = 0;

    for(let number of arrayOfNumbers){
        arrayTotal += number;
    }

    average = arrayTotal / arrayOfNumbers.length;

    arrayOfNumbers = arrayOfNumbers.filter(num => num > average);
    arrayOfNumbers.sort((a,b) => (b - a));

    if(arrayOfNumbers.length === 0){
        console.log('No');
    } else if (arrayOfNumbers.length <= 5){
        console.log(arrayOfNumbers.join(' '));
    } else {
        console.log(arrayOfNumbers.slice(0, 5).join(' '));
    }

}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')