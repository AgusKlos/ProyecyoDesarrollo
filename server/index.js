const express = require('express');
const cors = require('cors');
const db = require('./database/db.js');
const bodyParser = require('body-parser');
const noticiasRoutes = require('./routes/noticias.js');
const comunidadesRoutes = require('./routes/comunidades.js');
const { getTodosComunidades } = require('./controllers/controllerComunidad.js');
const { createUsuarioXComunidad } = require('./controllers/controllerComunidadXUsuario.js');
const {loginUsuario } = require('./controllers/controllerUsuario.js');
const app = express();

// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:3001', 
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
//app.use('/api/noticias', noticiasRoutes);
app.use(noticiasRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

//metodos get
app.get('/');
app.get('/api/comunidades', getTodosComunidades);
//metodos post
app.post('/api/login', loginUsuario);
app.post('/api/comunidadXusuario', createUsuarioXComunidad);

const port = 8080;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});