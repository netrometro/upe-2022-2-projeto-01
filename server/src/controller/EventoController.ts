import express from 'express'

const EventoController = express.Router()

EventoController.post('/evento', (req, res) => {

})

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

EventoController.get('/evento', (req, res) => {
    const { tag } = req.query
    if(tag) {
       return res.json(`Acessando evento com tag ${tag}`)
    }
    
    return res.json('Informe a tag do evento no cabecalho, ex: /evento?tag=ja1Fg')
} )

export default EventoController