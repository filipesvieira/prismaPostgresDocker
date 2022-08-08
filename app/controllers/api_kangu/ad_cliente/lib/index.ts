import { PrismaClient } from "@prisma/client";
console.log("🚀 ~ file: index.ts ~ line 2 ~ PrismaClient", PrismaClient)

export async function insert(req: any) {
    let prisma: PrismaClient;
    prisma = new PrismaClient();
    try {
        let ad_clientes = await prisma.ad_cliente.createMany({
            data: req.body,
            skipDuplicates: true,
        });
        console.log("🚀 ~ file: index.ts ~ line 11 ~ insert ~ ad_clientes", ad_clientes)
        return(JSON.parse(JSON.stringify(ad_clientes)));
    } catch (error) {
        console.log("🚀 ~ file: index.ts ~ line 13 ~ insert ~ error", error)
        return(JSON.parse(JSON.stringify(error)));
    }
}

export async function get(req: any) {
    let prisma: PrismaClient;
    prisma = new PrismaClient();
    try {
        let ad_clientes = await prisma.ad_cliente.findMany();
        console.log("🚀 ~ file: index.ts ~ line 22 ~ get ~ ad_clientes", ad_clientes)
        return(JSON.parse(JSON.stringify(ad_clientes)));
    } catch (error) {
        console.log("🚀 ~ file: index.ts ~ line 24 ~ get ~ error", error)
        return(JSON.parse(JSON.stringify(error)));
    }

}