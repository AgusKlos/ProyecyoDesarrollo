import db from "../database/db.js";
import { DataTypes } from "sequelize";

const NoticiaModel = db.define('noticias', {
    descripcion: {type: DataTypes.STRING},
    fecha: {type: DataTypes.DATE},
    titulo: {type: DataTypes.STRING},
    idUsuario: {
        type: DataTypes.INTEGER,
        foreignKey: true
    },
})

export default NoticiaModel 