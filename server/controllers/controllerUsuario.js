const UsuarioModel = require('../models/modelUsuario');

// Obtener todos los usuarios
const getTodosUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.findAll();
        
        
        const usuariosLimpios = usuarios.map(usuario => usuario.dataValues);

        res.json(usuariosLimpios);  
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ message: error.message });
    }
};

// Obtener un usuario por ID
const getUsuarioPorId = async (req, res) => {
    try {
        const usuario = await UsuarioModel.findOne({
            where: { idUsuario: req.params.id }
        });

        if (usuario) {
            res.json(usuario.dataValues);  
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({ message: error.message });
    }
};

// Login de usuario 
const loginUsuario = async (req, res) => {
    const { mail, contrasenia } = req.body;

    try {
        
        const usuario = await UsuarioModel.findOne({ where: { mail } });
          
        if (!usuario || usuario.contrasenia !== contrasenia) {
            return res.status(401).json({ message: 'Correo o contraseña incorrecta' });
        }
        
        res.json({ message: 'Login exitoso', usuario: { id: usuario.idUsuario, nombre: usuario.nombre, apellido: usuario.apellido } });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createUsuario = async(req, res) => {
    try {
        await UsuarioModel.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
    } catch(error){
        res.json({message: error.message})
    }
}

const updateUsuario = async (req, res) => {
    try {
        const {nombre, apellido, mail, contrasenia} = req.body;
        await UsuarioModel.update(
            {nombre, apellido, mail, contrasenia}, 
            {where: {id:req.params.id}}
        )
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch(error){
        res.json({message: error.message})
    }
};

//los usuarios no se deberán eliminar para que no haya inconsistencia en los registros de eventos, comunidades, etc

module.exports = {
    getTodosUsuarios,
    getUsuarioPorId,
    loginUsuario,
    createUsuario,
    updateUsuario
};
