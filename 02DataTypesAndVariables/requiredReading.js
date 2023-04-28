function requiredReading(numberOfPages, pagesPerHour, daysAvailable){

    let totalTimeToReadABook = numberOfPages / pagesPerHour;
    let requiredHoursPerDay = totalTimeToReadABook / daysAvailable;

    console.log(requiredHoursPerDay);

}

requiredReading(212,
    20 ,
    2 
    )