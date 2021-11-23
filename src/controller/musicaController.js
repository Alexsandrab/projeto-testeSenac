const musica = require("../models/musica.json");

const getAllMusica = (req, res) =>{
    console.log(req.url);
    res.status(200).send(musica);
};

module.exports = {
    getAllMusica,
}