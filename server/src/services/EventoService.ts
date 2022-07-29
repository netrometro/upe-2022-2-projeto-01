import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express-serve-static-core";

const prisma = new PrismaClient();

export const createEvento = async (req: Request, res: Response) => {
    const result = await prisma.evento.create({
        data: {
            ...req.body
        }
    })
    console.log(result)
    return res.json(result)
}

export const findAllEventos = async (res: Response) => {
    const eventos = await prisma.evento.findMany()
    console.log(eventos)
    return res.json(eventos)
}