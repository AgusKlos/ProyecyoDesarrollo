const db = require('../database/db.js');
const  {DataTypes}  = require('sequelize'); 

const GrupoModel = db.define('grupos', {
    nombre: {type: DataTypes.STRING},
})

export default GrupoModel 