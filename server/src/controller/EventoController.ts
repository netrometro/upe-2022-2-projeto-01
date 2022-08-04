import express from 'express'
import { createEvento, findAllEventos, findEventoByTag, findEventoById, deleteEventoById }
    from '../services/EventoService'

const EventoController = express.Router()

EventoController.post('/evento', async (req, res) => {
    createEvento(req, res)
})

EventoController.get('/eventos', async (req, res) => {
    findAllEventos(res)
})

EventoController.get('/eventoById', (req, res) => {
    findEventoById(req, res)
})

//Adicionar rota para atualizar evento

EventoController.delete('/eventos', (req, res) => {
    deleteEventoById(req, res)
})

EventoController.get('/eventoByTag', (req, res) => {
    findEventoByTag(req, res)
} )

export default EventoController