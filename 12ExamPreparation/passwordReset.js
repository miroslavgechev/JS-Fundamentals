function passwordReset(input) {

    let password = input.shift();

    for (let line of input) {
        if (line === 'Done') {
            console.log(`Your password is: ${password}`);
            break;
        }

        let [command, ...elements] = line.split(' ');

        switch (command) {
            case 'TakeOdd':
                takeOdd();
                break;

            case 'Cut':
                cut(elements);
                break;

            case 'Substitute':
                substitute(elements);
                break;
        }

    }

    function takeOdd() {
        let tempPassword = '';
        for (let index = 1; index < password.length; index += 2) {
            tempPassword += password[index];
        }
        password = tempPassword;
        return console.log(password);
    }

    function cut(elements) {
        let [cutIndex, cutLength] = elements;
        if (password[cutIndex]) {
            let firstSubstring = password.slice(0, +cutIndex);
            let secondSubstring = password.slice(+cutIndex + +cutLength);
            password = firstSubstring + secondSubstring;
            return console.log(password);
        }
    }

    function substitute(elements) {
        let substring = elements[0];
        let substitute = elements[1];

        let isValid = false;

        while (password.includes(substring)) {
            password = password.replace(substring, substitute);
            isValid = true;
        }

        if (isValid) {
            return console.log(password)
        } else {
            return console.log('Nothing to replace!');
        }
    }
}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
)

console.log('----------------------')

passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
)