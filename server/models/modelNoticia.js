const db = require('../database/db.js');
const { DataTypes } = require('sequelize');

const NoticiaModel = db.define('noticias', {
    descripcion: { type: DataTypes.TEXT },
    fecha: { type: DataTypes.DATE },
    titulo: { type: DataTypes.STRING },
    idUsuario: {
        type: DataTypes.INTEGER,
        foreignKey: true
    },
});

module.exports = NoticiaModel;
