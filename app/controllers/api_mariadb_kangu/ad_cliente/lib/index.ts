// const { PrismaClient } = require("@prisma/client");
import { PrismaClient as PrismaClientMariaDbKangu } from '../../../../../prisma/generated/mariadb_kangu';

export async function insert(req: any) {
    // let prisma: any = new PrismaClientMariaDbKangu();
    // try {
    //     let ad_clientes = await prisma.ad_cliente.createMany({
    //         data: req.body,
    //         skipDuplicates: true,
    //     });
    //     return(JSON.parse(JSON.stringify(ad_clientes)));
    // } catch (error) {
    //     console.log("🚀 ~ file: index.ts ~ line 13 ~ insert ~ error", error)
    //     return(JSON.parse(JSON.stringify(error)));
    // }
    return (JSON.parse(JSON.stringify({ MSG: 'Not working!' })));
}

export async function get(req: any) {
    let prisma: any = new PrismaClientMariaDbKangu();
    try {
        let ad_clientes = await prisma.ad_cliente.findMany();
        return (JSON.parse(JSON.stringify(ad_clientes)));
    } catch (error) {
        console.log("🚀 ~ file: index.ts ~ line 24 ~ get ~ error", error)
        return (JSON.parse(JSON.stringify(error)));
    }
}