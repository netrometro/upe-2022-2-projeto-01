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

export const udpateEvento = async(req : Request, res: Response) => {
    const { tag, cor, titulo, descricao, dataEvento } = req.body
    const result = await prisma.evento.update({
        where: { 
            id: +req.params.id
         },
        data: {
            ...req.body
        }
    })
    return res.json(result)
}

export const findAllEventos = async (res: Response) => {
    const eventos = await prisma.evento.findMany()
    
    if(!eventos) {
        return res.status(404).json({
            message: 'Nenhum evento encontrado'
        })
    }

    console.log(eventos)
    return res.json(eventos)
}

export const findEventosByUserId = async (req: Request, res: Response) => {
    const usuarioReqId = +req.params.id
    const eventos = await prisma.evento.findMany()

    const filterEventos = eventos.filter(evento => evento.usuarioId == usuarioReqId)

    console.log(filterEventos)
    return res.json(filterEventos)
}

export const findEventoById = async (req: Request, res: Response) => {
    const evento = await prisma.evento.findUnique({
        where : { 
            id: +req.params.id,
        }
    })

    if(!evento) {
        return res.status(404).json({
            message: 'Nenhum evento encontrado'
        })
    }

    console.log(evento)
    return res.json(evento)
}

export const deleteEventoById = async (req: Request, res: Response) => {
    const deleteEvento = await prisma.evento.delete({
        where : {
            id: +req.params.id,
        }
    })

    if(!deleteEvento) {
        return res.status(404).json({
            message: "Evento não encontrado"
        })
    }

    console.log("Apagado: ", deleteEvento)
    return res.json()
}

export const findEventoByTag = async (req : Request, res : Response) => {
    const tag = req.query.tag?.toString()
    const evento = await prisma.evento.findUnique({
        where : {
            tag: tag
        }
    })

    if(!evento) {
        return res.status(404).json({
            message: 'Evento não encontrado'
        })
    }

    console.log(evento)
    return res.json(evento)
}