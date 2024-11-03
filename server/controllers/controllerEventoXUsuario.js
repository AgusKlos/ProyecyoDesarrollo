const EventoXUsuarioModel = require('../models/modelEventoXUsuario');

//metodos CRUD

const createUsuarioXEvento = async (req,res)=>{
    try{
        const {idEvento,idUsuario}= req.body;
        const usuarioXEvento= await EventoXUsuarioModel.create({idEvento,idUsuario});
        res.json('Registro agregado con exito');
    }catch(error){
        res.json({message: error.message});
    }
};

module.exports={
    createUsuarioXEvento
}