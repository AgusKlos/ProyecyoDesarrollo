const { Sequelize } = require('sequelize'); 

// Configura Sequelize para conectarse a la base de datos
const db = new Sequelize('mydb', 'root', '10203040', { // esto cambien si no les hace la conex a la BD
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = db;
