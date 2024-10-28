const express = require('express');
const cors = require('cors');
const db = require('./database/db.js');
const bodyParser = require('body-parser');
const { getTodosUsuarios, loginUsuario } = require('./controllers/controllerUsuario.js');
const noticiasRoutes = require('./routes/noticias.js');
const comunidadesRoutes = require('./routes/comunidades.js');

const app = express();

// Middleware
//app.use(bodyParser.json());

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
//app.use('/api/noticias', noticiasRoutes);
app.use(noticiasRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});


app.get('/', getTodosUsuarios);

app.post('/api/login', loginUsuario);

app.use('/api/comunidades', comunidadesRoutes);


db.sync()
.then(() => {
  console.log('Modelos sincronizados con la base de datos.');
})
.catch(err => {
  console.error('Error al sincronizar los modelos:', err);
});

//const PORT = process.env.PORT || 8080;
//app.listen(PORT, () => {
//  console.log(`Servidor corriendo en http://localhost:${PORT}`);
//});

const port = 8080;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});