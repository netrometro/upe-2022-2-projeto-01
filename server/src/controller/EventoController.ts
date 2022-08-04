import express from 'express'
import { createEvento, findAllEventos, findEventoByTag, findEventoById }
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

EventoController.delete('/eventos/:id', (req, res) => {
    //Um usuario deve excluir um evento
    const id: number = +req.params.id
    res.send(`Apaga o item específico ${id}`)
})

EventoController.get('/evento', (req, res) => {
    findEventoByTag(req, res)
} )

export default EventoController