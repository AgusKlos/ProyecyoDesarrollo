const UsuarioModel= require('../models/modelUsuario');

// metodos CRUD

const getTodosUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.findAll();
        
        // Mapea los resultados para obtener solo los dataValues
        const usuariosLimpios = usuarios.map(usuario => usuario.dataValues);

        res.json(usuariosLimpios);  // Enviar solo los valores limpios
    } catch (error) {
        console.error('Error al obtener comunidades:', error);
        res.status(500).json({ message: error.message });
    }
};

const getUsuarioPorId = async (req, res) => {
    try {
        // Asegúrate de recibir el "id" en la URL
        const usuario = await UsuarioModel.findOne({
            where: { id: req.params.id }
        });

        if (usuario) {
            res.json(usuario.dataValues);  // Devolver solo el usuario encontrado
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({ message: error.message });
    }
};


module.exports={
    getTodosUsuarios,
    getUsuarioPorId
}


