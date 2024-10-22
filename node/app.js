import db from './database/db.js';
import express from 'express';
import cors from 'cors';
import eventoRoutes from './routes/routes.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use('/eventos', eventoRoutes)

const conexion = async() => {
    try {
        await db.authenticate()
        console.log('Conexión exitosa con la BD.')
    } catch (error) {
        console.log(`No se puedo conectar a la base de datos: ${error.message}`);
    }

    app.get('/', (req, res)=>{
        res.send('Hola mundo')
    })

    app.listen(8000, ()=>{
        console.log('Server UP running in http://localhost:8000/')
    })
};

conexion();


