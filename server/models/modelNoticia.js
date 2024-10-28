const db = require('../database/db.js');
const  {DataTypes}  = require('sequelize'); 

const NoticiaModel = db.define('Noticia', {
    idNoticia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcion: {type: DataTypes.STRING},
    fecha: {type: DataTypes.DATE},
    titulo: {type: DataTypes.STRING},
    idUsuario: {
        type: DataTypes.INTEGER,
        foreignKey: true
    }}, {
        freezeTableName: true,  
        tableName: 'Noticia',
        timestamps: false
    })

module.exports = NoticiaModel;