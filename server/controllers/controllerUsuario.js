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
    const { nombre, apellido, mail, contrasenia } = req.body;
    const { id } = req.params;

    try {
        const usuario = await UsuarioModel.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        usuario.nombre = nombre || usuario.nombre;
        usuario.apellido = apellido || usuario.apellido;
        usuario.mail = mail || usuario.mail;
        usuario.contrasenia = contrasenia || usuario.contrasenia;

        await usuario.save();

        res.status(200).json({ message: 'Usuario actualizado correctamente', usuario });
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getTodosUsuarios,
    getUsuarioPorId,
    loginUsuario,
    createUsuario,
    updateUsuario
};
