const UsuarioModel = require('../models/modelUsuario');

// Obtener todos los usuarios
const getTodosUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.findAll();
        
        // Mapea los resultados para obtener solo los dataValues
        const usuariosLimpios = usuarios.map(usuario => usuario.dataValues);

        res.json(usuariosLimpios);  // Enviar solo los valores limpios
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
            res.json(usuario.dataValues);  // Devolver solo el usuario encontrado
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({ message: error.message });
    }
};

// Login de usuario (sin encriptación de contraseña)
const loginUsuario = async (req, res) => {
    const { mail, contrasenia } = req.body;

    try {
        // Buscar el usuario por correo
        const usuario = await UsuarioModel.findOne({ where: { mail } });

        // Verificar si el usuario existe y si la contraseña coincide (sin encriptación)
        if (!usuario || usuario.contrasenia !== contrasenia) {
            return res.status(401).json({ message: 'Correo o contraseña incorrecta' });
        }

        // Si es exitoso, responde con los datos necesarios
        res.json({ message: 'Login exitoso', usuario: { id: usuario.idUsuario, nombre: usuario.nombre } });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getTodosUsuarios,
    getUsuarioPorId,
    loginUsuario,
};
