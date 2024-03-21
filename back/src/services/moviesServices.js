const Movie = require("../models/Movie");

module.exports = {
  async getMovies() {
    const movies = await Movie.find();
    return movies;
  },

  async createMovies(movie) {
    const newMovie = await Movie.create(movie);
    return newMovie;
  }
};


