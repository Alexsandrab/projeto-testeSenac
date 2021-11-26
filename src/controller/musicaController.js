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
    const getMusica = (req, res) => {
        const musicaId = req.params.id
        const musicaFound = musica.find((musica) => musica.id == musicaId)

        if (musicaFound){
            res.status(200).send(musicaFound)
        }else{
            res.status(404).send({message:"Empresa não encontrada"})
        }
    
    }

    const getTitulo = (req, res) => {
        const nomeTitulo = req.params.titulo
        const tituloFound = musica.find((musica) => musica.titulo == nomeTitulo)

        if (tituloFound){
            res.status(200).send(tituloFound)
        }else{
            res.status(404).send({message:"Titulo não encontrado"})
        }
    
    }

    const updateMusica = (req, res) => {
        try {
            const musicaId = req.params.id
            const musicaToUpdate = req.body //Pego o corpo da requisição com as alterações 
    
            const musicaFound = musica.find(musica => musica.id == musicaId) // separo o filme que irei atualizar      
            const musicaIndex = musica.indexOf(musicaFound) // separo o indice do filme no array de filmes
    
            if (musicaIndex >= 0) { // verifico se o filme existe no array de filmes
                musica.splice(musicaIndex, 1, musicaToUpdate) //busco no array o filme, excluo o registro antigo e substituo pelo novo 
            } else {
                res.status(404).send({ message: "Música não encontrado para ser atualizado" })
            }
    
            fs.writeFile("./src/models/musica.json", JSON.stringify(musica), 'utf8', function (err) { // gravo meu json de filmes atualizado
                if (err) {
                    res.status(500).send({ message: err }) // caso dê erro retorno status 500
                } else {
                    console.log("Arquivo de música atualizado com sucesso!")
                    const musicaUpdated = musica.find(musica => musica.id == musicaId) // separo o filme que modifiquei no array
                    res.status(200).send(musicaUpdated) // envio o filme modificado como resposta
                }
            })
        } catch (err) {
            res.status(500).send({ message: err }) // caso dê erro retorno status 500
        }
    }
    


module.exports = {
    getTitulo,
    updateMusica,
    getMusica,
    createMusica,
    getAllMusica,
}


