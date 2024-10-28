const NoticiaModel = require( '../models/modelNoticia');

// metodos CRUD


// todos los registros
const getTodosNoticias = async (req, res) => {
    try {
        const noticias = await NoticiaModel.findAll()
        res.json(noticias)
    }catch(error){
        console.error('Error al obtener las noticias:', error);
        res.status(500).json({ error: 'Error al obtener las noticias' });
    }
}

//un registro 
const getNoticia = async (req, res) => {
    try {
        const noticia = await NoticiaModel.findOne({
            where: { id: req.params.id }
        });
        if (!noticia) {
            return res.status(404).json({ message: 'Noticia no encontrada' });
        }
        res.json(noticia);
    } catch (error) {
        console.error('Error al obtener la noticia:', error);
        res.status(500).json({ message: error.message });
    }
}

//crear un registro
const createNoticia = async(req, res) => {
    try {
        const { titulo, descripcion, fecha, idUsuario } = req.body;

        // Validar que los campos no estén vacíos
        if (!titulo || !descripcion || !fecha || !idUsuario) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const noticia = await NoticiaModel.create({ titulo, descripcion, fecha, idUsuario });

        res.status(201).json({ message: 'Noticia creada con éxito', noticia }); // Cambiado a 201
    } catch(error){
        console.error('Error al crear la noticia:', error);
        res.status(500).json({ message: 'Error al crear la noticia', error: error.message }); // Cambiado a 500
    }
}

//actualizar un registro 
const updateNoticia = async (req, res) => {
    try {
        await NoticiaModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch(error){
        res.json({message: error.message})
    }
}

//Eliminar un regisro
const deleteNoticia = async (req, res) => {
    try {
        await NoticiaModel.destroy({
            where: {id:req.params.id}
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch(error){
        res.json({message: error.message})
    }
}


module.exports = {
    getTodosNoticias,
    getNoticia,
    deleteNoticia,
    updateNoticia,
    createNoticia,
};