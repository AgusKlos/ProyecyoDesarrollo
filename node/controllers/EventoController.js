import EventoModel from "../models/EventoModel.js";

// metodos CRUD


// todos los registros
export const getTodosEventos = async (req, res) => {
    try {
        const eventos = await EventoModel.findAll()
        res.json(eventos)
    }catch(error){
        res.json({message: error.message})
    }
}

//un registro 
export const getEvento = async (req, res) => {
    try {
        const Evento = EventoModel.findAll({
            where: {id:req.params.id}
        })
    }catch (error){
        res.json({message: error.message})
    }
}

//crear un registro
export const createEvento = async(req, res) => {
    try {
        await EventoModel.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
    } catch(error){
        res.json({message: error.message})
    }
}

//actualizar un registro 
export const updateEvento = async (req, res) => {
    try {
        await EventoModel.update(req.body, {
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
export const deleteEvento = async (req, res) => {
    try {
        await EventoModel.destroy({
            where: {id:req.params.id}
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch(error){
        res.json({message: error.message})
    }
}
