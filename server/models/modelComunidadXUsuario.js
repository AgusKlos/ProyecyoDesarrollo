const db = require('../database/db.js');
const  {DataTypes}  = require('sequelize'); 

const ComunidadXUsuarioModel = db.define('ComunidadXUsuario', {
    ID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idComunidad: {
        type: DataTypes.INTEGER,
        foreignKey: true
    },
    idUsuario:{
        type: DataTypes.INTEGER,
        foreignKey: true
    }
},{
    freezeTableName: true,  
    tableName: 'ComunidadXUsuario',
    timestamps: false
});

module.exports = ComunidadXUsuarioModel;