const { Router} = require("express");
const { moviesController } = require("../controllers/moviesControlllers");

const moviesRuote = Router ()

moviesRuote.get('/', moviesController);

module.exports = moviesRuote;