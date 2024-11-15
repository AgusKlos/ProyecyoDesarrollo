const express = require('express');
const cors = require('cors');
const db = require('./database/db.js');
const bodyParser = require('body-parser');
const noticiasRoutes = require('./routes/noticias.js');
const usuarioRoutes = require('./routes/usuarios.js');
const { getTodosComunidades, createComunidad } = require('./controllers/controllerComunidad.js');
const { createUsuarioXComunidad } = require('./controllers/controllerComunidadXUsuario.js');
const {loginUsuario, updateUsuario } = require('./controllers/controllerUsuario.js');
const { createUsuarioXEvento, getEventosUsuario } = require('./controllers/controllerEventoXUsuario.js');
const { getTodosEventos } = require('./controllers/controllerEvento.js');
const { getTodosNoticias } = require('./controllers/controllerNoticia.js');

const { getComunidadesUsuario} = require ('./controllers/controllerComunidadXUsuario.js')

const ComunidadModel = require('./models/modelComunidad.js');
const ComunidadXUsuarioModel = require('./models/modelComunidadXUsuario.js');

ComunidadModel.hasMany(ComunidadXUsuarioModel, { foreignKey: 'idComunidad' });
ComunidadXUsuarioModel.belongsTo(ComunidadModel, { foreignKey: 'idComunidad' });

const EventoModel = require('./models/modelEvento.js');
const EventoXUsuarioModel = require('./models/modelEventoXUsuario.js');

EventoModel.hasMany(EventoXUsuarioModel, { foreignKey: 'idEvento' });
EventoXUsuarioModel.belongsTo(EventoModel, { foreignKey: 'idEvento' });

const app = express();
const fs = require('fs');
const path = require('path');
const { getPublicacionesdeComunidad } = require('./controllers/controllerPublicacion.js');



const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuración de CORS
app.use(cors({
  origin: ['http://localhost:3000'],
    methods: ['GET', 'POST','DELETE','PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.json({limit: '10mb' })); 
app.use(bodyParser.urlencoded({ extended: true }));

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
app.use(noticiasRoutes);
//app.use('/api/comunidades', comunidadesRoutes);
//app.use(comunidadesRoutes);
app.use('/api/usuarios', usuarioRoutes)


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

//metodos get
app.get('/');
app.get('/getComunidadesUsuario', getComunidadesUsuario);
app.get('/getEventosUsuario',getEventosUsuario)
app.get('/comunidades', getTodosComunidades);
app.get('/eventos',getTodosEventos);
app.get('/noticias', getTodosNoticias);
app.get('/publicacionesdeComunidad', getPublicacionesdeComunidad);
//metodos post
app.post('/login', loginUsuario);
app.post('/updateperfil',updateUsuario);
app.post('/comunidadXusuario', createUsuarioXComunidad);
app.post('/eventosXusuario', createUsuarioXEvento);
app.post('/crearComunidad',createComunidad);
app.use('/uploads', express.static(path.join(__dirname, 'routes', 'uploads')));

const port = 8080;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
