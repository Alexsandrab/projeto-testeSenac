const express = require('express');
const app = express();

const index = require('./routes/index');
const musica = require ('./require/musicaRoutes');

app.use((req, res, next) => {
    console.log("Nova requisição");

    next();
})

app.use('/', index);
app.use('/musica', musica);

module.exports = app;