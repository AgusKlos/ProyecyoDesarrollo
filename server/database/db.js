const { Sequelize } = require('sequelize'); 

// Configura Sequelize para conectarse a la base de datos
const db = new Sequelize('mydb', 'root', '10203040', { // user: root, password: root
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

module.exports = db;
