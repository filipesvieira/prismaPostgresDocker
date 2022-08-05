import { PrismaClient } from "@prisma/client";

export async function insert(req: any) {
    let prisma: PrismaClient;
    prisma = new PrismaClient();
    try {
        let ad_clientes = await prisma.ad_cliente.createMany({
            data: req.body,
            skipDuplicates: true,
        });
        return(JSON.parse(JSON.stringify(ad_clientes)));
    } catch (error) {
        return(JSON.parse(JSON.stringify(error)));
    }
}

export async function get(req: any) {
    let prisma: PrismaClient;
    prisma = new PrismaClient();
    try {
        let ad_clientes = await prisma.ad_cliente.findMany();
        return(JSON.parse(JSON.stringify(ad_clientes)));
    } catch (error) {
        console.log("🚀 ~ file: index.ts ~ line 24 ~ get ~ error", error)
        return(JSON.parse(JSON.stringify(error)));
    }

}