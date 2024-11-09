const EventoXUsuarioModel= require('../models/modelEventoXUsuario');
const EventoModel = require ('../models/modelEvento');

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

const getEventosUsuario = async (req, res) => {
    const { id_Usuario } = req.query;
    try {
        const eventosdelUsuario = await EventoModel.findAll({
            include: [
                {
                    model: EventoXUsuarioModel,
                    where: { idUsuario: id_Usuario },
                    required: true,
                }
            ]
        });
        console.log(eventosdelUsuario);
        res.json(eventosdelUsuario); 
    } catch (error) {
        console.error('Error al obtener eventos:', error);
        //res.status(500).json({ error: 'Error al obtener eventos' });
    }
};

module.exports={
    createUsuarioXEvento,
    getEventosUsuario
}