function phoneBook(inputData) {
    let phoneBookEntity = {};

    for (let element of inputData) {
        let [name, phoneNumber] = element.split(' ');
        phoneBookEntity[name] = phoneNumber;
    }

    for (let name in phoneBookEntity) {
        console.log(name, '->', phoneBookEntity[name]);
    }

}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)