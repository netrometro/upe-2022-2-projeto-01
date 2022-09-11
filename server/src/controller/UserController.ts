import express from 'express'
import {deleteUserById, findUserByEmail, updateUser, userRegister, login, findUserByApelido} from '../services/UserService' 
import { auth } from '../middleware/auth'

const UserController = express.Router();

UserController.post('/login', login)

UserController.post('/register', async (req, res) => {
    userRegister(req, res)
})

export default UserController;

UserController.put('/user/update', auth, async (req, res) => {
    updateUser(req, res)
})

UserController.delete('/user/delete', auth, async (req, res) => {
    deleteUserById(req, res)
})

UserController.get('/user/filter', async (req, res) => {
    findUserByApelido(req, res)
})