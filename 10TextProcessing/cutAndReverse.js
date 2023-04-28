function cutAndReverse(input) {

    let reversedInput = input.split('').reverse().join('');
    let firstString = reversedInput.slice(input.length / 2);
    let secondString = reversedInput.slice(0, input.length / 2);

    console.log(firstString)
    console.log(secondString)
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')