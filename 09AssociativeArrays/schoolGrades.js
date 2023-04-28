function schoolGrades(inputData) {
    let students = {};

    for (let line of inputData) {
        let [name, ...grades] = line.split(' ');

        if (students.hasOwnProperty(name)) {
            let currentAverageGrade = students[name];
            for (let grade of grades) {
                currentAverageGrade.push(grade);
            }
            students[name] = currentAverageGrade;
        } else {
            students[name] = grades;
        }
    }

    for (let [key, entries] of Object.entries(students)) {
        let sumOfGrades = 0;
        let gradesCount = entries.length;
        let averageGrade = 0;

        for (let grade of entries) {
            sumOfGrades += +grade;
        }

        averageGrade = sumOfGrades / gradesCount;

        students[key] = averageGrade;
    }

    let entries = Object.entries(students).sort((a, b) => a[0].localeCompare(b[0]));

    for (let kvp of entries) {
        console.log(`${kvp[0]}: ${kvp[1].toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)