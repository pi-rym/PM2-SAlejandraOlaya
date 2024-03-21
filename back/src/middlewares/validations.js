function validateData(req, res, next) {
    const { title, year, director, duration, genres, rate, poster } = req.body;
    if (!title || !year || !director || !duration || !genres || !rate || !poster) {
        return res.status(400).json({ error: 'Todos los campos del formulario son obligatorios.' });
    }
    next();
}

module.exports = validateData;