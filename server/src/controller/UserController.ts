import express from 'express'
import {deleteUserById, findUserByEmail, updateUser, userRegister, login} from '../services/UserService' 
import { auth } from '../middleware/auth'

const UserController = express.Router();

UserController.post('/login', login)

UserController.post('/register', async (req, res) => {
    userRegister(req, res)
})

export default UserController;

UserController.put('/update', auth, async (req, res) => {
    updateUser(req, res)
})

UserController.post('/list', auth, async (req, res) => {
    findUserByEmail(req, res)
} )

UserController.delete('/delete', auth, async (req, res) => {
    deleteUserById(req, res)
})
