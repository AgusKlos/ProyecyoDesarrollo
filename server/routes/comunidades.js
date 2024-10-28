const express = require('express');
const { getTodosComunidades } = require('../controllers/controllerComunidad');

const router = express.Router();

// Ruta para obtener todas las comunidades
router.get('/', getTodosComunidades);

module.exports = router;
