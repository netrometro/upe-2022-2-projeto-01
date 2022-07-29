import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main =async () => {
    await prisma.usuario.create({
        data: {
            email: "gabriel@gmail.com",
            nome: "Gabriel",
            eventos: {
                create: {
                    titulo: "Evento FIG",
                    descricao: "Todo mundo ir ver Filipe Ret",
                    dataEvento: "2020-01-01"
                }
            }
        }    
    })
}

main()
    .then(async() => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

