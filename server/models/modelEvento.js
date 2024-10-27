import db from "../database/db.js";
import { DataTypes } from "sequelize";

const EventoModel = db.define('eventos', {
    descripcion: {type: DataTypes.STRING},
    fecha: {type: DataTypes.DATE},
    nombre: {type: DataTypes.STRING},
})

export default EventoModel 