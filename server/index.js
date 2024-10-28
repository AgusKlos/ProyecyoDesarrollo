const express = require('express');
const cors = require('cors');
const db = require('./database/db.js');
import bodyParser from 'body-parser';
const { getTodosUsuarios, loginUsuario } = require('./controllers/controllerUsuario.js');
import noticiasRoutes from './routes/noticias.js';

const app = express();


const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());

// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Sincronización de la base de datos
db.sync()
.then(() => {
  console.log('Conexión a la base de datos exitosa y tablas sincronizadas.');
})
.catch((error) => {
  console.error('Error al sincronizar la base de datos:', error);
});


// Rutas
app.use('/api/noticias', noticiasRoutes);

app.get('/', getTodosUsuarios);

app.post('/api/login', loginUsuario);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
