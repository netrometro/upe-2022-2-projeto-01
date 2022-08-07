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

export const deleteUserById = async (req:Request, res: Response) => {
    const deleteUser = await prisma.usuario.delete({
        where: {
            id: req.body.id,
        }
    })
    return res.json(deleteUser)
}

