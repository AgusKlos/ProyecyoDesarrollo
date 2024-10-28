const db = require('../database/db.js');
const  {DataTypes}  = require('sequelize'); 

const ProfesionModel = db.define('profesiones', {
    descripcion: {type: DataTypes.STRING},
    fecha: {type: DataTypes.DATE},
    nombre: {type: DataTypes.STRING},
})

export default ProfesionModel 