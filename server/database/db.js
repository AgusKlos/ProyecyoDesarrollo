const { Sequelize } = require('sequelize'); 

// Configura Sequelize para conectarse a la base de datos
const db = new Sequelize('mydb', 'root', '10203040', { // user: root, password: root
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = db;
