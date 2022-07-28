import express from 'express'

const EventoController = express.Router()

EventoController.get('/eventos', (req, res) => {
    res.send("Listar todos os eventos.")
})
