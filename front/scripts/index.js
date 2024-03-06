const movies = document.getElementById('movies')

$.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
    data.forEach(movie => {

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('col-3');
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = movie.poster;
    img.alt = movie.title;
    img.classList.add('card-img-top');
    card.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = movie.title;

    const directorDiv = document.createElement('div');
    directorDiv.classList.add('card-text');
    directorDiv.innerHTML = `Director: ${movie.director}`

    const genresDiv = document.createElement('div')
    genresDiv.classList.add('card-text');
    genresDiv.innerHTML = `Genres: ${movie.genre.join(', ')}`

    const rateDiv = document.createElement('div')
    rateDiv.classList.add('card-text')
    rateDiv.innerHTML = `Rate: ${movie.rate}`

    const durationDiv = document.createElement('div');
    durationDiv.classList.add('card-text');
    durationDiv.innerHTML = `Duration: ${movie.duration}`;

    const timeDiv = document.createElement('div');
    timeDiv.classList.add('card-text');
    timeDiv.innerHTML = `Year: ${movie.year}`;


    cardBody.appendChild(cardTitle);
    cardBody.appendChild(directorDiv);
    cardBody.appendChild(genresDiv);
    cardBody.appendChild(rateDiv);
    cardBody.appendChild(durationDiv);
    cardBody.appendChild(timeDiv);
    card.appendChild(cardBody);
    cardContainer.appendChild(card);
    movies.appendChild(cardContainer);

    });
});
