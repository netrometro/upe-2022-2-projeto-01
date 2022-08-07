import express from 'express'
import {deleteUserById, findUserByEmail, userRegister} from '../services/UserService' 

const UserController = express.Router();

UserController.post('/register', async (req, res) => {
    userRegister(req, res)
})

export default UserController;

UserController.get('/list', async (req, res) => {
    findUserByEmail(req, res)
} )

UserController.delete('/delete', async (req, res) => {
    deleteUserById(req, res)
})