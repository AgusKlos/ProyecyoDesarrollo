const { getTodosComunidades } = require('../controllers/controllerComunidad');
const express = require('express');

const router = express.Router();

// Ruta para obtener todas las comunidades
router.get('/', getTodosComunidades);

const ComunidadModel = require('../models/modelComunidad'); // Asegúrate de que la ruta sea correcta
const { getComunidad } = require('../controllers/controllerComunidad');


// Ruta para obtener todas las comunidades
router.get('/api/comunidades', async (req, res) => {
    try {
        const comunidades = await ComunidadModel.findAll();
        res.json(comunidades);
    } catch (error) {
        console.error('Error al obtener comunidades:', error);
        res.status(500).json({ error: 'Error al obtener las comunidades' });
    }
});

// Ruta para obtener una comunidad específica
router.get('/api/comunidades/:id', getComunidad);

// Ruta para crear una nueva comunidad
router.post('/api/comunidades', async (req, res) => {
    try {
        const { nombre, descripcion, idUsuario } = req.body;
        
        const nuevaComunidad = await ComunidadModel.create({
            nombre,
            descripcion,
            idUsuario, 
        });

        res.status(201).json({ mensaje: 'Comunidad creada con éxito', comunidad: nuevaComunidad });
    } catch (error) {
        console.error('Error al crear la comunidad:', error);
        res.status(500).json({ error: 'Error al crear la comunidad' });
    }
});

module.exports = router;
