import express from 'express'
import { createEvento, findAllEventos, findEventoByTag } from '../services/EventoService'

const EventoController = express.Router()

EventoController.post('/evento', async (req, res) => {
    createEvento(req, res)
})

EventoController.get('/eventos', async (req, res) => {
    findAllEventos(res)
})

EventoController.get('/eventos/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Retorna o item específico ${id}`)
})

//Adicionar rota para atualizar evento

EventoController.delete('/eventos/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Apaga o item específico ${id}`)
})

EventoController.get('/evento', (req, res) => {
    findEventoByTag(req, res)
} )

export default EventoController