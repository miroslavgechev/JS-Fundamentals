function triplesOfLatinLetter(stringNumber){

    for(let firstLetterCounter = 0; firstLetterCounter < stringNumber; firstLetterCounter++){
        firstLetterToPrint = String.fromCharCode(97 + firstLetterCounter);

        for(let secondLetterCounter = 0; secondLetterCounter < stringNumber; secondLetterCounter++){
            let secondLetterToPrint = String.fromCharCode(97 + secondLetterCounter);

            for(let thirdLetterCounter = 0; thirdLetterCounter < stringNumber; thirdLetterCounter++){
                let thirdLetterToPrint = String.fromCharCode(97 + thirdLetterCounter);
                console.log(firstLetterToPrint + secondLetterToPrint + thirdLetterToPrint);                
            }
        }
    }

}

triplesOfLatinLetter('10');