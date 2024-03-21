const axios = require("axios");
const createElement = require("./utils");

async function init() {
    try {
        const response = await axios.get('http://localhost:3000/movies');

        response.data.forEach(movie => {
            console.log({movie})
            const cardContainer = createElement('div', 'col-3');
            const card = createElement('div', 'card');

            const img = createElement('img', 'card-img-top')
            img.src = movie.poster;
            img.alt = movie.title;
            card.appendChild(img);

            const cardBody = createElement('div', 'card-body');

            const cardTitle = createElement('h5', 'card-title');
            cardTitle.innerHTML = movie.title;

            const directorDiv = createElement('div', 'card-text');
            directorDiv.innerHTML = `Director: ${movie.director}`

            const genresDiv = createElement('div', 'card-text')
            genresDiv.innerHTML = `Genres: ${movie.genres.join(', ')}`

            const rateDiv = createElement('div', 'card-text')
            rateDiv.innerHTML = `Rate: ${movie.rate}`

            const durationDiv = createElement('div', 'card-text');
            durationDiv.innerHTML = `Duration: ${movie.duration}`;

            const timeDiv = createElement('div', 'card-text');
            timeDiv.innerHTML = `Year: ${movie.year}`;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(directorDiv);
            cardBody.appendChild(genresDiv);
            cardBody.appendChild(rateDiv);
            cardBody.appendChild(durationDiv);
            cardBody.appendChild(timeDiv);
            card.appendChild(cardBody);
            cardContainer.appendChild(card);
            const moviesContainer = document.getElementById('movies')
            console.log({cardContainer})
            moviesContainer.appendChild(cardContainer);
        });
    } catch (error) {
        console.log(error.message);
        
    }
}

init();