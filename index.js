const root = document.getElementById('root');

const movies = [
    {
        name: 'The Titanic',
        description: 'Titanic is a 1997 American epic romance and disaster film directed, written, co-produced, and co-edited by James Cameron.',
        date: '2006/06/12',
        year: '1997',
        rating: '4.7',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/RMS_Titanic_3.jpg/1280px-RMS_Titanic_3.jpg'
        
    },
    {
        name: '300 Spartans',
        description: '300 is a 2007 American epic period action film based on the 1998 comic series of the same name by Frank Miller and Lynn Varley.',
        date: '2007/04/07',
        year: '2006',
        rating: '5.0',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5c/300poster.jpg'
    },
    {
        name: 'InterStellar',
        description: 'Interstellar is a 2014 epic science fiction film co-written, directed and produced by Christopher Nolan.',
        date: '2014/02/12',
        year: '2017',
        rating: '4.2',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg'
    }
];

function getMovies() {
    const localStorageMovies = localStorage.getItem("movies");
    const parsedMovies = JSON.parse(localStorageMovies);
    return parsedMovies;
}

function setMovies(movies) {
    const stringifiedMovies = JSON.stringify(movies);
    localStorage.setItem("movies", stringifiedMovies);
}

if (getMovies() === null){
    setMovies(movies);
}

function startRendering() {
    const localStorageMovies = getMovies();
    renderMovieList(localStorageMovies);
}



window.addEventListener('load', startRendering);
