const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send({
        titulo: 'Playlist aleatória de músicas aleatórias de uma pessoa aleatória',
        data: "19/11/2021"
    });
});

module.exports = router;