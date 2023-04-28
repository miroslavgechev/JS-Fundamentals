function extractEmails(input) {

    let mailPattern = /(^|(?<=\s))[a-z|A-Z|0-9]{1}[\w.\-]+[a-z|A-Z|0-9]{1}@[a-z|A-Z|]{1}[a-zA-z-]+(\.[A-Za-z]{1}[A-Za-z]+){1}(\.[A-Za-z]+){0,1}/gm

    let mailCheck = input.match(mailPattern);

    if (mailCheck !== null) {
        mailCheck.forEach(element => console.log(element));
    }
}

extractEmails('Please contact us at: .info@invalid-host-.');
console.log('-----------------')
extractEmails('Please contact us at: support@github.com.');
console.log('-----------------')
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
console.log('-----------------')
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')