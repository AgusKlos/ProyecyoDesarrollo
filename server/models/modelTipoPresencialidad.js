const db = require('../database/db.js');
const  {DataTypes}  = require('sequelize'); 

const TipoPresencialidadModel = db.define('tipospresencialidad', {
    descripcion: {type: DataTypes.STRING},
    nombre: {type: DataTypes.STRING},
})

module.exports = TipoPresencialidadModel;