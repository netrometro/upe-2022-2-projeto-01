import express from 'express'
import {deleteUserById, userRegister} from '../services/UserService' 

const UserController = express.Router();

UserController.post('/register', async (req, res) => {
    userRegister(req, res)
})

export default UserController;

UserController.delete('/delete', async (req, res) => {
    deleteUserById(req, res)
})