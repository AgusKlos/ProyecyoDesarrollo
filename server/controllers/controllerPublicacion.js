const PublicacionModel = require( '../models/modelPublicacion');

// metodos CRUD


// todos los registros
const getTodosPublicaciones = async (req, res) => {
    try {
        const publicaciones = await PublicacionModel.findAll()
        res.json(publicaciones)
    }catch(error){
        res.json({message: error.message})
    }
}

//un registro 
const getPublicacion = async (req, res) => {
    try {
        const Publicacion = PublicacionModel.findAll({
            where: {id:req.params.id}
        })
    }catch (error){
        res.json({message: error.message})
    }
}

//crear un registro
const createPublicacion = async(req, res) => {
    try {
        await PublicacionModel.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
    } catch(error){
        res.json({message: error.message})
    }
}

//actualizar un registro 
const updatePublicacion = async (req, res) => {
    try {
        await PublicacionModel.update(req.body, {
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
const deletePublicacion = async (req, res) => {
    try {
        await PublicacionModel.destroy({
            where: {id:req.params.id}
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch(error){
        res.json({message: error.message})
    }
}

const getPublicacionesdeComunidad = async (req, res) => {
    try {
        const publicaciones = await PublicacionModel.findAll({
            where: { idComunidad: req.params.idComunidad }
        });
        res.json(publicaciones);
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = {
    getTodosPublicaciones,
    getPublicacion,
    deletePublicacion,
    updatePublicacion,
    createPublicacion,
    getPublicacionesdeComunidad
};