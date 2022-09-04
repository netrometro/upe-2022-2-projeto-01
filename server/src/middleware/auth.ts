import { NextFunction, Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'

export const auth = async (req: Request, res: Response, next: NextFunction) => {

  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).send({ error: 'O token de autenticação é necessário' })
  }

  const [ ,token ] = authHeader.split(' ')

  try {
    jwt.verify(token, "jwttoken")
    next()
  } catch(err) {
    return res.status(401).send({ error: 'Token inválido' })
  }
}
