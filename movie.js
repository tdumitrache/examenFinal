class Movie {
    constructor(name, description, imageUrl, year, rating, date) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.year = year;
        this.rating = rating;
        this.date = date;
    }

    renderMovie() {
        const movieList = document.getElementById('movie-list');
        movieList.innerHTML += `
        <li>
            <div class="undefined">
            <p><strong>Name:</strong>${this.name}</p>
            <p><strong>Description:</strong> ${this.description}</p>
            <p><strong>Year:</strong> ${this.year}</p>
            <p><strong>Rating:</strong> ${this.rating}</p>
            <p><strong>Date when added: </strong>  ${this.date}</p>
            </div>
            <div>
            <img src="${this.imageUrl}" alt="image photo">
            </div>
        </li>    
        `;
    }
}

