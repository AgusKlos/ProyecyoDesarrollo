const ComunidadModel= require( '../models/modelComunidad');

// metodos CRUD

// todos los registros
const getTodosComunidades = async (req, res) => {
    try {
        const comunidades = await ComunidadModel.findAll();
        
        const comunidadesLimpias = comunidades.map(comunidad => comunidad.dataValues);

        res.json(comunidadesLimpias);  
    } catch (error) {
        console.error('Error al obtener comunidades:', error);
        res.status(500).json({ error: 'Error al obtener las comunidades' });
    }
};


//un registro 
const getComunidad = async (req, res) => {
    try {
        const comunidad = await ComunidadModel.findOne({
            where: { id: req.params.id },
        });

        if (!comunidad) {
            return res.status(404).json({ error: 'Comunidad no encontrada' });
        }

        res.json(comunidad);
    } catch (error) {
        console.error('Error al obtener la comunidad:', error);
        res.status(500).json({ error: 'Error al obtener la comunidad' });
    }
};
//crear un registro
const createComunidad = async(req, res) => {
    const {idComunidad,idUsuario,nombre,descripcion} = req.body;
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
const updateComunidad = async (req, res) => {
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
const deleteComunidad = async (req, res) => {
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

module.exports = {
    getTodosComunidades,
    getComunidad,
    createComunidad,
    updateComunidad,
    deleteComunidad
};