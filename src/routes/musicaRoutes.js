const express = require('express');
const router = express.Router();
const controller = require ('../controller/musicaController');

router.get("/", controller.getAllMusica);
router.post("/", controller.createMusica);
//router.get("/:titulo", controller.getTitulo);
//router.get("/:id", controller.getMusica);
router.put("/:id", controller.updateMusica);

module.exports = router;