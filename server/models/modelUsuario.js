const db = require('../database/db.js');
const  {DataTypes}  = require('sequelize'); 

const UsuarioModel = db.define('Usuario', {
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    apellido: {type: DataTypes.STRING},
    nombre: {type: DataTypes.STRING},
    edad: {type: DataTypes.INTEGER},
    mail: {type: DataTypes.STRING},
    contrasenia: {type: DataTypes.STRING},
    idProfesion:{
        type: DataTypes.INTEGER,
        foreignKey: true
    }
},{
    freezeTableName: true,  
    tableName: 'Usuario',
    timestamps: false
})

module.exports = UsuarioModel; 