const musica = require("../models/musica.json");
const fs = require("fs");

const getAllMusica = (req, res) =>{
    console.log(req.url);
    res.status(200).send(musica);
};


const createMusica = (req, res) => {
    const{id, titulo, artista, ano, favorita} = req.body
    musica.push({id, titulo, artista, ano, favorita})
    fs.writeFile("./src/models/musica.json", JSON.stringify(musica), 'utf8', function (err) { // gravando novo filme no array de filmes
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("Arquivo atualizado com sucesso!")
            const musicaFound = musica.find(musica => musica.id == id); // recupero o filme que foi criei no array de filmes      
            res.status(200).send(musicaFound)
        }
    })
}

    




    
    
    


module.exports = {
    createMusica,
    getAllMusica,
}


