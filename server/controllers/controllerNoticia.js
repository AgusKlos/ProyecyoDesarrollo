const NoticiaModel = require('../models/modelNoticia');

// todos los registros
const getTodosNoticias = async (req, res) => {
    try {
        const noticias = await NoticiaModel.findAll();
        res.json(noticias);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// un registro 
const getNoticia = async (req, res) => {
    try {
        const noticia = await NoticiaModel.findAll({
            where: { id: req.params.id }
        });
        res.json(noticia);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// crear un registro
const createNoticia = async (req, res) => {
    try {
        const nuevaNoticia = await NoticiaModel.create(req.body);
        res.status(201).json({
            message: "¡Registro creado correctamente!",
            noticia: nuevaNoticia,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// actualizar un registro 
const updateNoticia = async (req, res) => {
    try {
        await NoticiaModel.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            message: "¡Registro actualizado correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// eliminar un registro
const deleteNoticia = async (req, res) => {
    try {
        await NoticiaModel.destroy({
            where: { id: req.params.id }
        });
        res.json({
            message: "¡Registro eliminado correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = {
    getTodosNoticias,
    getNoticia,
    createNoticia,
    updateNoticia,
    deleteNoticia,
};
