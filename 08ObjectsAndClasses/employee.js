function employee(input) {

    let employeeList = [];

    input.forEach(el => {
        let [name, personalNumber] = [el, el.length];
        employeeList.push({ name, personalNumber })
    });

    employeeList.forEach(el => {
        console.log(`Name: ${el.name} -- Personal Number: ${el.personalNumber}`)
    })

}

employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)