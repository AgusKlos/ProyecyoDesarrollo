import ComunidadModel from "../models/ComunidadModel.js";

// metodos CRUD


// todos los registros
export const getTodosComunidades = async (req, res) => {
    try {
        const comunidades = await ComunidadModel.findAll()
        res.json(comunidades)
    }catch(error){
        res.json({message: error.message})
    }
}

//un registro 
export const getComunidad = async (req, res) => {
    try {
        const Comunidad = ComunidadModel.findAll({
            where: {id:req.params.id}
        })
    }catch (error){
        res.json({message: error.message})
    }
}

//crear un registro
export const createComunidad = async(req, res) => {
    try {
        await ComunidadModel.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
    } catch(error){
        res.json({message: error.message})
    }
}

//actualizar un registro 
export const updateComunidad = async (req, res) => {
    try {
        await ComunidadModel.update(req.body, {
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
export const deleteComunidad = async (req, res) => {
    try {
        await ComunidadModel.destroy({
            where: {id:req.params.id}
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch(error){
        res.json({message: error.message})
    }
}
