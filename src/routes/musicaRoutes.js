const express = require('express');
const router = express.Router();
const controller = require ('../controller/musicaController');

router.get("/", controller.getAll);
router.get("/empresas", controller.getAll);

module.exports = router;