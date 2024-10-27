import db from "../database/db.js";
import { DataTypes } from "sequelize";

const TipoPresencialidadModel = db.define('tipospresencialidad', {
    descripcion: {type: DataTypes.STRING},
    nombre: {type: DataTypes.STRING},
})

export default TipoPresencialidadModel 