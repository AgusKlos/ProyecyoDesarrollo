const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');

router.put('/usuario/:id', UsuarioController.updateUsuario);

module.exports = router;