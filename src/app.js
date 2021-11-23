const express = require('express');
const app = express();

app.use(express.json());

const index = require('./routes/index');
const musica = require ('./routes/musicaRoutes');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    console.log("Nova requisição");

    next();
})

app.use('/', index);
app.use('/musica', musica);

module.exports = app;