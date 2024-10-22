import db from "../database/db.js";
import { DataTypes } from "sequelize";

const GrupoModel = db.define('grupos', {
    nombre: {type: DataTypes.STRING},
})

export default GrupoModel 