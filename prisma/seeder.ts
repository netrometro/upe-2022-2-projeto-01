import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main =async () => {
    await prisma.usuario.create({
        data: {
            email: "gabriel@gmail.com",
            senha: "123456",
            nome: "Gabriel",
            apelido: "Gabrielzinho",
            avatar: "https://avatars2.githubusercontent.com/u/589998?s=460&v=4",
            eventos: {
                create: {
                    tag: "fig2022",
                    cor: "#ff0000",
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

