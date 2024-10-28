const NoticiaModel = require( '../models/modelNoticia');

// metodos CRUD


// todos los registros
export const getTodosNoticias = async (req, res) => {
    try {
        const noticias = await NoticiaModel.findAll()
        res.json(noticias)
    }catch(error){
        console.error('Error al obtener las noticias:', error);
        res.status(500).json({ error: 'Error al obtener las noticias' });
    }
}

//un registro 
export const getNoticia = async (req, res) => {
    try {
        const Noticia = NoticiaModel.findAll({
            where: {id:req.params.id}
        })
    }catch (error){
        res.json({message: error.message})
    }
}

//crear un registro
export const createNoticia = async(req, res) => {
    try {
        await NoticiaModel.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
    } catch(error){
        res.json({message: error.message})
    }
}

//actualizar un registro 
export const updateNoticia = async (req, res) => {
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
export const deleteNoticia = async (req, res) => {
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