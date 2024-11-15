const ComunidadXUsuarioModel = require ('../models/modelComunidadXUsuario');
const ComunidadModel = require ('../models/modelComunidad');


//metodos CRUD

const createUsuarioXComunidad = async (req,res)=>{
    try{
        const {idComunidad,idUsuario}= req.body;
        const usuarioXComunidad= await ComunidadXUsuarioModel.create({idComunidad,idUsuario});
        res.json(usuarioXComunidad);
    }catch(error){
        res.json({message: error.message});
    }
};

const getComunidadesUsuario = async (req, res) => {
    const { id_Usuario } = req.query;
    try {
        const comunidadesdelUsuario = await ComunidadModel.findAll({
            include: [
                {
                    model: ComunidadXUsuarioModel,
                    where: { idUsuario: id_Usuario },
                    required: true,
                }
            ]
        });
        console.log('Comunidades del usuario:', comunidadesdelUsuario);
        res.json(comunidadesdelUsuario); 
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener comunidades' });
    }
};


module.exports={
    createUsuarioXComunidad,
    getComunidadesUsuario
}