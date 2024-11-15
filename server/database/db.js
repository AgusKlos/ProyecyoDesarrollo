const { Sequelize } = require('sequelize'); 

// Configura Sequelize para conectarse a la base de datos
const db = new Sequelize('mydb', 'root', 'root', { // user: root, password: root
  host: 'localhost',
  dialect: 'mysql',
});

db.authenticate()
.then(() => {
  console.log('Conexión a la base de datos establecida con éxito.');
})
.catch(err => {
  console.error('No se pudo conectar a la base de datos:', err);
});

db.sync()
.then(() => {
  console.log('Conexión a la base de datos exitosa y tablas sincronizadas.');
})
.catch((error) => {
  console.error('Error al sincronizar la base de datos:', error);
});


module.exports = db;
