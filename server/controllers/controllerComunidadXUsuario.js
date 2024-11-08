const ComunidadXUsuarioModel = require ('../models/modelComunidadXUsuario');
const ComunidadModel = require ('../models/modelComunidad');


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

const getComunidadesUsuario =async (req,res)=>{
  //const {id_Usuario}= req.body;
  //console.log(id_Usuario);
  const comunidadesdelUsuario = await ComunidadModel.findAll({
    include: [
      {
        model: ComunidadXUsuarioModel,
        where: { idUsuario : req.body  },
        required: true // Esto asegura que solo se obtengan las comunidades en las que está el usuario
      }
    ]
  }).then(comunidades => {
      console.log('Comunidades en las que está el usuario:', comunidades);
    })
    .catch(error => {
      console.error('Error al obtener comunidades:', error);
    });
} //pasado por parametro

module.exports={
    createUsuarioXComunidad,
    getComunidadesUsuario,
}