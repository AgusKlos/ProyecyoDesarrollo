/*const express = require('express');
const { getTodosNoticias } = require('../controllers/controllerNoticia');

const router = express.Router();

// Ruta para obtener todas las noticias
router.get('/', getTodosNoticias);

module.exports = router; */

const express = require('express');
const router = express.Router();
const NoticiaModel = require('../models/modelNoticia'); // Asegúrate de que la ruta sea correcta
const { getNoticia } = require('../controllers/controllerNoticia');

// Ruta para obtener todas las noticias
router.get('/api/noticias', async (req, res) => {
    try {
        const noticias = await NoticiaModel.findAll();
        res.json(noticias);
    } catch (error) {
        console.error('Error al obtener noticias:', error);
        res.status(500).json({ error: 'Error al obtener las noticias' });
    }
});

// Ruta para obtener una noticia específica
router.get('/api/noticias/:id', getNoticia); 

// Ruta para crear una nueva noticia
router.post('/api/noticias', async (req, res) => {
    try {
        const noticia = await NoticiaModel.create(req.body);
        res.status(201).json({ message: 'Noticia creada con éxito', noticia });
    } catch (error) {
        console.error('Error al crear la noticia:', error);
        res.status(500).json({ message: 'Error al crear la noticia' });
    }
});

module.exports = router;