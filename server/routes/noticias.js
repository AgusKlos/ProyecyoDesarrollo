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
const fs = require('fs');
const path = require('path');

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

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
        const { titulo, descripcion, categoria, fecha, idUsuario, imagen } = req.body;
        
        let imagenPath = null;
        
        if (imagen) {
            // Convertir la cadena base64 a un archivo físico
            const base64Data = imagen.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
            const fileName = Date.now() + '.png';  // Generar un nombre único para la imagen
            const filePath = path.join(__dirname, 'uploads', fileName);

            fs.writeFileSync(filePath, base64Data, 'base64');
            imagenPath = `/uploads/${fileName}`;  // Guardamos el path de la imagen
        }

        // Crear la noticia en la base de datos
        const nuevaNoticia = await NoticiaModel.create({
            titulo,
            descripcion,
            categoria,
            fecha,
            idUsuario,
            imagen: imagenPath,  // Guardar la ruta o la cadena base64 (según cómo lo manejes)
        });

        res.status(201).json({ mensaje: 'Noticia creada con éxito', noticia: nuevaNoticia });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la noticia' });
    }
});

module.exports = router;