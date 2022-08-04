import express from 'express'
import {userRegister} from '../services/UserService' 

const UserController = express.Router();

UserController.post('/register', async (req, res) => {
    userRegister(req, res)
})

export default UserController;