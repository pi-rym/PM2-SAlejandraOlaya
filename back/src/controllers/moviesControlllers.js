const moviesServices = require("../services/moviesServices");

const moviesController = async (req,res) => {
    try {
        const getAllMovies = await moviesServices.getMovies();
        res.status(200).json(getAllMovies);  
    } catch (error) {
        res.status (500).json({
            error: "Error interno del servidor"
        });
    }

}



module.exports = {
    moviesController,
}