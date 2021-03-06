import { PrismaClient } from "@prisma/client";

export async function insert(req: any) {
    let prisma: PrismaClient;
    prisma = new PrismaClient();
    try {
        let jogadores = await prisma.jogador.createMany({
            data: req.body,
            skipDuplicates: true,
        });
        return(JSON.parse(JSON.stringify(jogadores)));
    } catch (error) {
        return(JSON.parse(JSON.stringify(error)));
    }
}

export async function get(req: any) {
    let prisma: PrismaClient;
    prisma = new PrismaClient();
    try {
        let jogadores = await prisma.jogador.findMany();
        return(JSON.parse(JSON.stringify(jogadores)));
    } catch (error) {
        return(JSON.parse(JSON.stringify(error)));
    }

}