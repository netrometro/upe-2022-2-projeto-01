import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express-serve-static-core";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

const prisma = new PrismaClient()

export const userRegister = async (req:Request, res: Response) => {
    const usuario = await prisma.usuario.findUnique({
        where: {
            email: req.body.email
        }
    })
      
    if(!usuario){
        const senhaHash = await bcrypt.hash(req.body.senha, 10)

        const result = await prisma.usuario.create({
            data: {
                ...req.body,
                senha: senhaHash,
                eventos: undefined
            }
        })
        return res.json(result)
    } else {
        return res.json({message: "Usuario ja existe"})
    }
}

export const updateUser = async (req: Request, res: Response) => {
    delete req.body.senha
    delete req.body.email
    const updateUser = await prisma.usuario.update({
        where: {
          id: req.body.id
        },
        data: {
            ...req.body
        },
      })
    console.log(updateUser)
    return res.json(updateUser)
}

export const findUserByEmail = async (req:Request, res: Response) => {
    const usuario = await prisma.usuario.findUnique({
        where: {
            email: req.body.email
        }
    })
    console.log(usuario)
    return res.json(usuario)
}

export const findUserByApelido = async (req: Request, res: Response) => {
    const listuser = await prisma.usuario.findMany({
        skip: req.body.skip,
        take: 10,
        where: {
          apelido: {
            contains: req.body.apelido
          },
        },
      })
    console.log(listuser)
    return res.json(listuser)

}

export const deleteUserById = async (req:Request, res: Response) => {
    const deleteUser = await prisma.usuario.delete({
        where: {
            id: req.body.id,
        }
    })
    console.log(deleteUser)
    return res.json(deleteUser)
}

export const login = async (req:Request, res: Response) => {

    const usuario = await prisma.usuario.findUnique({
        where: {
            email: req.body.email
        }
    })

    if(usuario){
        const senhaValida = await bcrypt.compare(req.body.senha, usuario.senha)
        if(senhaValida){
            const token = jwt.sign({id: usuario.id}, "jwttoken", {expiresIn: '1d'}) // Adicionar biblioteca do .env para esconder a chave
            const data = {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                token: token
            }

            return res.json(data)
        } else {
            return res.json({message: "Senha invalida"})
        }
    } else {
        return res.json({message: "Usuario nao existe"})
    }
}