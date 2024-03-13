const testController = (req,res) => {
    res.status(200).send("solicitud exitosa, pronto se mostrarán las películas")
};



module.exports = {
    testController
}