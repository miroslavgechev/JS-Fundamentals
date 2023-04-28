function replaceRepeatingChars(input){

    let result = input[0];
    let index = 1;

    while(index < input.length){
        if(input[index - 1] !== input[index]){
            result += input[index];
        }
        index++;
    }

    console.log(result)
}

replaceRepeatingChars('qqqwerqwecccwd');