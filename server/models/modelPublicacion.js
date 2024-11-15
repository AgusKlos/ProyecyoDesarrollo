const db = require('../database/db.js');
const  {DataTypes}  = require('sequelize'); 

const PublicacionModel = db.define('publicaciones', {
    descripcion: {type: DataTypes.STRING},
    titulo: {type: DataTypes.STRING},
    idUsuario: {
        type: DataTypes.INTEGER,
        foreignKey: true
    },
    idComunidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
},{
    freezeTableName: true,  
    tableName: 'publicaciones',
    timestamps: false
})

module.exports = PublicacionModel;