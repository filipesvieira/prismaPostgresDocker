import { jad_log } from './../../../../../prisma/generated/postgresql/index.d';
import puppeteer from 'puppeteer';
import { PrismaClient as PrismaClientPostgreSql } from '../../../../../prisma/generated/postgresql';
import { scrapJadlog } from '../functions';

export async function insert(req: any) {
    let prisma: any = new PrismaClientPostgreSql();
    try {
        let etiquetas = await prisma.jad_log.createMany({
            data: req.body,
            skipDuplicates: true,
        });
        return (JSON.parse(JSON.stringify(etiquetas)));
    } catch (error) {
        return (JSON.parse(JSON.stringify(error)));
    }
}

export async function get(req: any) {
    let respJadLog = await scrapJadlog();
    console.log("🚀 ~ file: index.ts ~ line 21 ~ get ~ respJadLog", respJadLog)
    return respJadLog;
    // let prisma: any = new PrismaClientPostgreSql();
    // try {
        // let etiquetas = await prisma.jad_log.findMany();
    //     return (JSON.parse(JSON.stringify(etiquetas)));
    // } catch (error) {
    //     return (JSON.parse(JSON.stringify(error)));
    // }
}