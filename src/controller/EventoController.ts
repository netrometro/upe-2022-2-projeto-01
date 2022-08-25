import express from 'express'
import { createEvento, findAllEventos, findEventoByTag, findEventoById, deleteEventoById, udpateEvento } from '../services/EventoService'

const EventoController = express.Router()

EventoController.post('/evento', async (req, res) => {
    createEvento(req, res)
})

EventoController.get('/eventos', async (req, res) => {
    findAllEventos(res)
})

EventoController.get('/evento/:id', (req, res) => {
    findEventoById(req, res)
})

EventoController.put('/evento/:id', async (req, res) => {
    udpateEvento(req, res)
})

EventoController.delete('/eventos', (req, res) => {
    deleteEventoById(req, res)
})

EventoController.get('/evento', (req, res) => {
    findEventoByTag(req, res)
} )

export default EventoController