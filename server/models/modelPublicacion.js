const db = require('../database/db.js');
const  {DataTypes}  = require('sequelize'); 

const PublicacionModel = db.define('publicaciones', {
    descripcion: {type: DataTypes.STRING},
    titulo: {type: DataTypes.STRING},
})

module.exports = PublicacionModel;