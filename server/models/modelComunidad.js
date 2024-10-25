const db = require('../database/db');
const  {DataTypes}  = require('sequelize'); 

const ComunidadModel = db.define('Comunidad', {
    idComunidad: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {type: DataTypes.STRING},
    descripcion: {type: DataTypes.STRING},
},{
    freezeTableName: true,  
    tableName: 'Comunidad',
    timestamps: false
});

module.exports = ComunidadModel;
