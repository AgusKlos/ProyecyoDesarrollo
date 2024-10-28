const express = require('express');
const cors = require('cors');
const db = require('./database/db.js');
const { getTodosUsuarios, loginUsuario } = require('./controllers/controllerUsuario.js');
const { getTodosNoticias, getNoticia, createNoticia, updateNoticia, deleteNoticia } = require('./controllers/controllerNoticia.js');
const app = express();

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
app.get('/', getTodosUsuarios);
app.post('/api/login', loginUsuario);
app.post('/api/noticias', getTodosNoticias, getNoticia, createNoticia, updateNoticia, deleteNoticia); 

app.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080');
});
