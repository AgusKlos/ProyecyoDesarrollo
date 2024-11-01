const db = require('../database/db.js');
const { DataTypes } = require('sequelize');

const NoticiaModel = db.define('Noticia', {
    idNoticia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false 
    },
    titulo: {
        type: DataTypes.STRING(100), 
        allowNull: false 
    },
    descripcion: {
        type: DataTypes.TEXT, 
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false 
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            model: 'Usuario', 
            key: 'idUsuario'
        }
    }
}, {
    freezeTableName: true,
    tableName: 'Noticia',
    timestamps: false
});

module.exports = NoticiaModel;