const express = require('express');
const { getTodosNoticias } = require('../controllers/controllerNoticia');

const router = express.Router();

// Ruta para obtener todas las noticias
router.get('/', getTodosNoticias);

export default router;