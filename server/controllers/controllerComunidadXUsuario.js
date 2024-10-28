const ComunidadXUsuarioModel = require ('../models/modelComunidadXUsuario');

//metodos CRUD

const createUsuarioXComunidad = async (req,res)=>{
    try{
        const {idComunidad,idUsuario}= req.body;
        const usuarioXComunidad= await ComunidadXUsuarioModel.create({idComunidad,idUsuario});
        res.json('Registro agregado con exito');
    }catch(error){
        res.json({message: error.message});
    }
};

module.exports={
    createUsuarioXComunidad
}