root.innerHTML += `
    <form id="add-movie">
        <div>
            <label for="name">Name:</label>
            <input type="text" name="name" id="name"/>
        </div>
        <input id="submit" type="submit"/>
    </form>
    <div class="buttons">
        <button class="sort-by-name">Sort By Name</button>
        <button class="sort-by-year">Sort By Year</button>
        <button class="sort-by-rating">Sort By Rating</button>
        <button class="sort-by-date">Sort By Date</button>
    </div>
`

function handleErrorEvent() {
    const error = document.createElement('div');
    const message = document.createElement('p');
    message.innerHTML = 'Please fill in the inputs above...'
    error.append(message);
    error.classList.add('error');

    const form = document.querySelector('form');
    const root = document.querySelector('#root');
    root.insertBefore(error, form);

    setTimeout(function() {
        error.remove();
    }, 3000);
}

function addFormFunctionality() {
    const form = document.querySelector('#add-movie');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        fetch(`https://www.omdbapi.com/?apikey=fced3ba8&t=${event.target.name.value}`)
            .then(response => response.json())
            .then(data => {
                
                const movie = new Movie(data.Title, data.Plot, data.Poster, data.Year, data.imdbRating, new Date().toJSON().slice(0,10).replace(/-/g,'/'));
                

                if (document.getElementById('name').value === '') {
                    handleErrorEvent();
                } else {
                    const localStorageMovies = getMovies();
                    localStorageMovies.push(movie);
                    setMovies(localStorageMovies);
                    renderMovieList(localStorageMovies);    
                }

                document.getElementById('name').value = '';

                const undefinedDivs = Array.from(document.querySelectorAll('.undefined'));
                undefinedDivs.forEach(div => {
                    if (div.children[0].innerText.includes('undefined')) {
                        div.parentElement.remove();
                    }
                })
                
                
            });
        
    })
}

window.addEventListener('load', addFormFunctionality);