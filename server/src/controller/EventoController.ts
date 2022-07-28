import express from 'express'

const EventoController = express.Router()

//Adicionar rota para criar evento

EventoController.get('/eventos', (req, res) => {
    res.send("Listar todos os eventos.")
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

export default EventoController