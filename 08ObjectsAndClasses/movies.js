function movies(inputLines) {

    let movieArray = [];

    inputLines.forEach(el => {
        if (el.includes('addMovie')) {
            let movieName = el.replace('addMovie ', '');
            movieArray.push({ name: movieName });
        } else if (el.includes('directedBy')) {
            let [movieName, director] = el.split(' directedBy ');
            movieArray.forEach(movie => {
                if (movieName === movie.name) {
                    movie.director = director;
                }
            })
        } else if (el.includes('onDate')) {
            let [movieName, date] = el.split(' onDate ');
            movieArray.forEach(movie => {
                if (movie.name === movieName) {
                    movie.date = date;
                }
            })
        }
    });

    movieArray.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }

    })
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)