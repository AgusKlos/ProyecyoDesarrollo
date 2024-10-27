import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ProfesionModel = db.define('profesiones', {
    descripcion: {type: DataTypes.STRING},
    fecha: {type: DataTypes.DATE},
    nombre: {type: DataTypes.STRING},
})

export default ProfesionModel 