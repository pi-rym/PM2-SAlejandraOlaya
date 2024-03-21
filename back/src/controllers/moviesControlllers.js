const moviesServices = require("../services/moviesServices");

const moviesController = async (req, res) => {
    try {
        const getAllMovies = await moviesServices.getMovies();
        res.status(200).json(getAllMovies);
    } catch (error) {
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
}

const movieCreationController = async (req, res) => {
    try {
        const { title, year, director, duration, genres, rate, poster } = req.body;
        const newMovie = await moviesServices.createMovies({ title, year, director, duration, genres, rate, poster })
        res.status(200).json(newMovie);
    } catch (error) {
        res.status(500).json({
            error: "Error al crear la pelicula"
        });
    }
}

module.exports = {
    moviesController,
    movieCreationController,
}