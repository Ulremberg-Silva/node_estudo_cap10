const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const carrosRota = require('./routes/carros')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/carros', carrosRota );

// Inicia o servidor
const server = app.listen(3000, "localhost", function () {
    const host = server.address().address
    const port = server.address().port
    console.log("Servidor iniciado em http://%s:%s", host, port)
});
