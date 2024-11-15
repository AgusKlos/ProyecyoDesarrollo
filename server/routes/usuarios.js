const express = require('express');
const router = express.Router();
const {
    getTodosUsuarios,      
    getUsuarioPorId,       
    loginUsuario,          
    createUsuario,         
    updateUsuario          
} = require('../controllers/controllerUsuario'); 

router.post('/', createUsuario);         
router.put('/:id', updateUsuario);        
router.get('/', getTodosUsuarios);        
router.get('/:id', getUsuarioPorId);    
router.post('/login', loginUsuario);   

module.exports = router;

