function meetings(inputData) {
    let meetingsList = {};

    for (let element of inputData) {
        let [day, person] = element.split(' ');

        if (meetingsList.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingsList[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let key in meetingsList) {
        console.log(`${key} -> ${meetingsList[key]}`);
    }

}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)