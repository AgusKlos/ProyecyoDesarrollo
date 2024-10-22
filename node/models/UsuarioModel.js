import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UsuarioModel = db.define('usuarios', {
    apellido: {type: DataTypes.STRING},
    nombre: {type: DataTypes.STRING},
    edad: {type: DataTypes.INTEGER},
    mail: {type: DataTypes.STRING},
    contrasenia: {type: DataTypes.STRING},
})

export default UsuarioModel 