function addressBook(inputData) {

    let addressBookList = {};

    for (let line of inputData) {
        let [name, address] = line.split(':');
        addressBookList[name] = address;
    }

    let entries = Object.entries(addressBookList);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let key of entries) {
        console.log(`${key[0]} -> ${key[1]}`);
    }

}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)