function sortMovies(sortType) {
    if (sortType === 'SORT_BY_NAME') {
            const localStorageMovies = getMovies();
            const sortedArray = localStorageMovies.sort((elem1, elem2) => (elem1.name.localeCompare(elem2.name)));
            setMovies(sortedArray);
            renderMovieList(sortedArray);
    }
    else if (sortType === 'SORT_BY_YEAR') {
        const localStorageMovies = getMovies();
        const sortedArray = localStorageMovies.sort((elem1, elem2) => (elem1.year - elem2.year));
        setMovies(sortedArray);
        renderMovieList(sortedArray);
    }
    else if (sortType === 'SORT_BY_DATE') {
        const localStorageMovies = getMovies();
        const sortedArray = localStorageMovies.sort((elem1, elem2) => {
            const elemArr1 = elem1.date.split('/');
            const elemArr2 = elem2.date.split('/');
            if (Number(elemArr1[0]) === Number(elemArr2[0])) {
                if (Number(elemArr1[1]) === Number(elemArr2[1])) {
                    return Number(elemArr1[2]) - Number(elemArr2[2]);
                }
                else {
                    return Number(elemArr1[1]) - Number(elemArr2[1]);
                }
            }
            else {
                return Number(elemArr1[0]) - Number(elemArr2[0]);
            }
        });
        setMovies(sortedArray);
        renderMovieList(sortedArray);
    }

    else if (sortType === 'SORT_BY_RATING') {
        const localStorageMovies = getMovies();
        const sortedArray = localStorageMovies.sort((elem1, elem2) => (elem1.rating - elem2.rating));
        setMovies(sortedArray);
        renderMovieList(sortedArray);
    }
}

function addSortingFunctionality() {
    const sortByName = document.querySelector('.sort-by-name');
    sortByName.addEventListener('click', function() {
        sortMovies('SORT_BY_NAME');
    });
    const sortByYear = document.querySelector('.sort-by-year');
    sortByYear.addEventListener('click', function() {
        sortMovies('SORT_BY_YEAR');
    });
    const sortByDate = document.querySelector('.sort-by-date');
    sortByDate.addEventListener('click', function() {
        sortMovies('SORT_BY_DATE');
    });
    const sortByRating = document.querySelector('.sort-by-rating');
    sortByRating.addEventListener('click', function() {
        sortMovies('SORT_BY_RATING');
    });
}

window.addEventListener('load', addSortingFunctionality);
