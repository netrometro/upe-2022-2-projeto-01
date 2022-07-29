import express from 'express'
import { createEvento, findAllEventos } from '../services/EventoService'

const EventoController = express.Router()

EventoController.post('/evento', async (req, res) => {
    createEvento(req, res);
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
    const { tag } = req.query
    if(tag) {
       return res.json(`Acessando evento com tag ${tag}`)
    }
    
    return res.json('Informe a tag do evento no cabecalho, ex: /evento?tag=ja1Fg')
} )

export default EventoController