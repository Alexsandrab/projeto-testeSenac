const express = require('express');
const router = express.Router();
const controller = require ('../controller/musicaController');

router.get("/", controller.getAllMusica);
router.post("/", controller.createMusica);
//router.get("/empresas", controller.getAll);

module.exports = router;