const express = require("express")
const router = require("./routes/indexRouter");

const server = express();

server.use(router);


module.exports = server;