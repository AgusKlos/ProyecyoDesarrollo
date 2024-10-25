const express = require('express');
const cors = require('cors');
const db = require('./database/db.js');
//const ComunidadModel = require('./models/modelComunidad.js');
const {getTodosUsuarios} = require('./controllers/controllerUsuario.js');

const app = express();
app.use(cors());
app.use(express.json());

db.sync()
  .then(() => {
    console.log('Conexión a la base de datos exitosa y tablas sincronizadas.');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });

  app.get('/', getTodosUsuarios);

app.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080');
});

