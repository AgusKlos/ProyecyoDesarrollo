import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ComunidadModel = db.define('comunidades', {
    descripcion: {type: DataTypes.STRING},
    nombre: {type: DataTypes.STRING},
})

export default ComunidadModel 