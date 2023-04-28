function messageDecryptor(input) {

    let inputsCount = Number(input.shift());

    let pattern = /^(?<symbol>[%$])[A-Z][a-z]{2,}\1: [[0-9]+]\|[[0-9]+]\|[[0-9]+]\|$/g;
    let patternTag = /[A-Z][a-z]+/g;
    let patternNumbersOnly = /[0-9]+/g;

    for (let index = 0; index < inputsCount; index++) {
        let currentInput = input[index].match(pattern);

        if (currentInput) {

            let numbers = currentInput.join('').match(patternNumbersOnly);
            let tag = currentInput.join('').match(patternTag).join('');

            let decryptedMessage = ''

            for (let number of numbers) {
                decryptedMessage += String.fromCharCode(Number(number));
            }
            console.log(`${tag}: ${decryptedMessage}`)

        } else {
            console.log('Valid message not found!');
        }
    }
}

messageDecryptor(["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"])

console.log('---------------');

messageDecryptor(["3",
    "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
    "$tAGged$: [97][97][97]|",
    "$Request$: [73]|[115]|[105]|true"])

