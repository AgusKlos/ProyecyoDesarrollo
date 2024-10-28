import express from 'express';
import { getTodosNoticias } from '../controllers/controllerNoticia'; 

const router = express.Router();

// Ruta para obtener todas las noticias
router.get('/', getTodosNoticias);

export default router;