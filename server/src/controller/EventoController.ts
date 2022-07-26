import express from 'express'
import { createEvento, findAllEventos, findEventoByTag, findEventoById, deleteEventoById, udpateEvento, findEventosByUserId } from '../services/EventoService'
import {auth } from '../middleware/auth'

const EventoController = express.Router()

EventoController.post('/evento', auth, async (req, res) => {
    createEvento(req, res)
})

EventoController.get('/eventos', auth,  async (req, res) => {
    findAllEventos(res)
})

EventoController.get('/eventos/usuario/:id', auth, (req, res) => {
    findEventosByUserId(req, res)
})

EventoController.get('/evento/:id', auth, (req, res) => {
    findEventoById(req, res)
})

EventoController.put('/evento/:id', auth, async (req, res) => {
    udpateEvento(req, res)
})

EventoController.delete('/evento/:id', auth, (req, res) => {
    deleteEventoById(req, res)
})

EventoController.get('/evento', auth, (req, res) => {
    findEventoByTag(req, res)
} )

export default EventoController