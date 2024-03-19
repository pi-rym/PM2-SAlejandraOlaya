const server = require("./src/server");
const dbCon = require("./src/config/dbConfig")

dbCon().then((res) => {
    server.listen(3000, () => {
        console.log('servidor escuchando en el puerto 3000');
    });
}).catch((err) => {
    console.log('Fallo en la conexion', err.message)

})


