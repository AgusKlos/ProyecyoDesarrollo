const db = require('../database/db.js');
const { DataTypes } = require('sequelize');
const EventoXUsuarioModel = require ('./modelEventoXUsuario.js');

const EventoModel = db.define('eventos', {
    idEvento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcion: {type: DataTypes.STRING},
    fecha: {type: DataTypes.DATE},
    nombre: {type: DataTypes.STRING},
    lugar: {type: DataTypes.STRING},
    direccion: {type: DataTypes.STRING},
    idTipoPresencialidad: {
        type: DataTypes.INTEGER,
        foreignKey: true
    }
},{
    freezeTableName: true,  
    tableName: 'Evento',
    timestamps: false
})


module.exports = EventoModel;