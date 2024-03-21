const { Router } = require("express");
const { moviesController } = require("../controllers/moviesControlllers");
const { movieCreationController } = require('../controllers/moviesControlllers');
const validateData = require('../middlewares/validations');

const moviesRuote = Router()

moviesRuote.get('/', moviesController);
moviesRuote.post('/',validateData, movieCreationController);

module.exports = moviesRuote;