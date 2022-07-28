import express from 'express'

const EventoController = express.Router()

EventoController.get('/eventos', (req, res) => {
    res.send("Listar todos os eventos.")
})

EventoController.get('/eventos/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Retorna o item específico ${id}`)
})