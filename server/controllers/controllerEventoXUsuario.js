const EventoXUsuarioModel= require('../models/modelEventoXUsuario');
const EventoModel = require ('../models/modelEvento');

//metodos CRUD

const createUsuarioXEvento = async (req,res)=>{
    try{
        const {idEvento,idUsuario}= req.body;
        const usuarioXEvento= await EventoXUsuarioModel.create({idEvento,idUsuario});
        res.json(usuario);
    }catch(error){
        res.json({message: error.message});
    }
};

const getEventosUsuario = async (req, res) => {
    const { id_Usuario } = req.query; // Usar query para consistencia con comunidad
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
        console.log('Eventos del usuario:', eventosdelUsuario);
        res.json(eventosdelUsuario);
    } catch (error) {
        console.error('Error al obtener eventos:', error);
        res.status(500).json({ error: 'Error al obtener eventos' });
    }
};


module.exports={
    createUsuarioXEvento,
    getEventosUsuario
}