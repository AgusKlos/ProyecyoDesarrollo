import db from "../database/db.js";
import { DataTypes } from "sequelize";

const PublicacionModel = db.define('publicaciones', {
    descripcion: {type: DataTypes.STRING},
    titulo: {type: DataTypes.STRING},
})

export default PublicacionModel 