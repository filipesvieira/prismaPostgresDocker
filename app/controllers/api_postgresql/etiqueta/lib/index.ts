// const { PrismaClient } = require("@prisma/client");
import { PrismaClient as PrismaClientPostgreSql } from '../../../../../prisma/generated/postgresql';
import puppeteer from 'puppeteer';

export async function insert(req: any) {
    let prisma: any = new PrismaClientPostgreSql();
    try {
        let etiquetas = await prisma.tms_pedido_etiqueta.createMany({
            data: req.body,
            skipDuplicates: true,
        });
        return (JSON.parse(JSON.stringify(etiquetas)));
    } catch (error) {
        return (JSON.parse(JSON.stringify(error)));
    }
}

export async function get(req: any) {
    let prisma: any = new PrismaClientPostgreSql();
    try {
        let etiquetas = await prisma.tms_pedido_etiqueta.findMany();
        console.log("🚀 ~ file: index.ts ~ line 46 ~ get ~ etiquetas", etiquetas)
        return (JSON.parse(JSON.stringify(etiquetas)));
    } catch (error) {
        console.log("🚀 ~ file: index.ts ~ line 48 ~ get ~ error", error)
        return (JSON.parse(JSON.stringify(error)));
    }
}