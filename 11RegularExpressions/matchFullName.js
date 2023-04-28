function matchFullName(data) {

    let regexPattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}\b/g;
    let resultArray = data.match(regexPattern);

    console.log(resultArray.join(' '));

}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")