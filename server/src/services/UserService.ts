import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express-serve-static-core";

const prisma = new PrismaClient()
export const userRegister = async (req:Request, res: Response) => {
    const usuario = await prisma.usuario.findUnique({
        where: {
            email: req.body.email
        }
    })
      
    if(!usuario){
        const result = await prisma.usuario.create({
            data: {
                ...req.body
            }
        })
        console.log(result)
        return res.json(result)
    }else{
        return res.json({
            message: "Usuario ja existe"
        })
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

export const deleteUserById = async (req:Request, res: Response) => {
    const deleteUser = await prisma.usuario.delete({
        where: {
            id: req.body.id,
        }
    })
    console.log(deleteUser)
    return res.json(deleteUser)
}

