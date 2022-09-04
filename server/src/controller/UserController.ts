import express from 'express'
import {deleteUserById, findUserByEmail, updateUser, userRegister, login} from '../services/UserService' 
import { auth } from '../middleware/auth'

const UserController = express.Router();

UserController.post('/login', login)

UserController.use(auth)

UserController.post('/register', async (req, res) => {
    userRegister(req, res)
})

export default UserController;

UserController.put('/update', async (req, res) => {
    updateUser(req, res)
})

UserController.post('/list', async (req, res) => {
    findUserByEmail(req, res)
} )

UserController.delete('/delete', async (req, res) => {
    deleteUserById(req, res)
})
