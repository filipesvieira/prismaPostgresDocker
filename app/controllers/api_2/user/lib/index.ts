import { PrismaClient } from "@prisma/client";

export async function insert(req: any) {
    let prisma: PrismaClient;
    prisma = new PrismaClient();
    try {
        let users = await prisma.user.createMany({
            data: req.body,
            skipDuplicates: true,
        });
        return(JSON.parse(JSON.stringify(users)));
    } catch (error) {
        return(JSON.parse(JSON.stringify(error)));
    }
}

export async function get(req: any) {
    let prisma: PrismaClient;
    prisma = new PrismaClient();
    try {
        let users = await prisma.user.findMany();
        return(JSON.parse(JSON.stringify(users)));
    } catch (error) {
        return(JSON.parse(JSON.stringify(error)));
    }

}