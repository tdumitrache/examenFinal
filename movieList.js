root.innerHTML += `
    
    <ul id="movie-list"></ul>
`

function renderMovieList(movies) {
    const movieList = document.querySelector('#movie-list');
    movieList.innerHTML = '';
    movies.forEach(function(element) {
        
        const movie = new Movie(element.name, element.description, element.imageUrl, element.year, element.rating, element.date);
        
        movie.renderMovie();
    });
}