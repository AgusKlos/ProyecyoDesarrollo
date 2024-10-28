const db = require('../database/db.js');
const { DataTypes } = require('sequelize');

const EventoModel = db.define('eventos', {
    descripcion: {type: DataTypes.STRING},
    fecha: {type: DataTypes.DATE},
    nombre: {type: DataTypes.STRING},
})

module.exports = EventoModel;