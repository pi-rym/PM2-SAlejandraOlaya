const { Router } = require("express");
const moviesRuote = require('./moviesRoute')

const router = Router();

router.use("/movies",moviesRuote)

module.exports = router;