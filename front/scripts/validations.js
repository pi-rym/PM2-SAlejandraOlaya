const axios = require("axios");

async function submit(e) {
    e.preventDefault();
    const title = document.getElementById('titulo').value;
    const director = document.getElementById('director').value;
    const genre = document.getElementById('genres').value;
    const rate = document.getElementById('rate').value;
    const duration = document.getElementById('duration').value;
    const year = document.getElementById('year').value;
    const poster = document.getElementById('poster').value;

    if (title === '' || director === '' || genre === '' || rate === '' || duration === '' || year === '' || poster === '') {
        alert("Campos incompletos.");
        return;
    } else {
        alert ("Película creada exitosamente, ya puedes visualizarla en la página principal.");
    }

    const genres = genre.split(','); 
    try {
        const response = await axios.post('http://localhost:3000/movies', { title, director, genres, rate, duration, year, poster });
    } catch (error) {
        console.log(error.message);
    }
}

const newMovieForm = document.querySelector('.new-movie-form');
newMovieForm.addEventListener('submit', submit);

const submitButton = document.querySelector('.submit-button')
submitButton.addEventListener('click',submit);

function clean() {
    const selectTitle = document.getElementById('titulo').value = '';
    const selectDirector = document.getElementById('director').value = '';
    const selectGenres = document.getElementById('genres').value = '';
    const selectRate = document.getElementById('rate').value = '';
    const selectDuration = document.getElementById('duration').value = '';
    const selectYear = document.getElementById('year').value = '';
    const selectPoster = document.getElementById('poster').value = '';
}
const selectCleanButtom = document.querySelector('.clear-button');
selectCleanButtom.addEventListener('click', clean);