const db = require('../database/db.js');
const { DataTypes } = require('sequelize');


const EventoXUsuarioModel = db.define('eventoxusuario', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idEvento: {
        type: DataTypes.INTEGER,
        foreignKey: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        foreignKey: true
    }
}, {
    freezeTableName: true,
    tableName: 'eventoxusuario',
    timestamps: false
});


module.exports = EventoXUsuarioModel;