function companyUsers(inputData) {

    let companies = new Map();

    for (let line of inputData) {
        let [companyName, employee] = line.split(' -> ');

        if (!companies.has(companyName)) {
            companies.set(companyName, new Set());
        }

        companies.get(companyName).add(employee);
    }

    companiesSorted = Array.from(companies).sort(([keyA, valueA], [keyB, valueB]) =>
        keyA.localeCompare(keyB));

    for (let [key, values] of companiesSorted) {
        console.log(key);

        for (let value of values) {
            console.log(`-- ${value}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]
)