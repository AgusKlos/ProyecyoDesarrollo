import express from "express";
import {getTodosEventos, getEvento, createEvento, updateEvento, deleteEvento} from '../controllers/EventoController.js'
const router = express.Router()

router.get('/', getTodosEventos)
router.get('/:id', getEvento)
router.get('/', createEvento)
router.get('/:id', updateEvento)
router.get('/:id', deleteEvento)

export default router