import puppeteer from 'puppeteer';
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './file.csv',
    header: ['identificacao', 'cep', 'endereco', 'bairro', 'cidade', 'estado']
});

export async function scrapJadlog() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto('https://www.jadlog.com.br/jadlog/unidades', {
        waitUntil: 'load'
    });
    // await page.goto('https://www.mercadolivre.com.br/', {
    //     waitUntil: 'load'
    // });
    // await page.type('.nav-search-input', 'Tenis fila futsal 88');
    // await page.click('.nav-search-btn');
    // await page.waitForNavigation();

    const spanValue = await page.$eval('.ui-paginator-current', el => el.textContent?.replace('(1 of ', '').slice(0, -1));
    let lastNumber = Number(spanValue);
    await page.$eval('iframe[id^=neoassist-widget-frame-1]', el => el.remove());
    await page.waitForTimeout(500);
    await page.click('a[id^="j_idt20_"]');
    let arrayResult: any = [];
    for (let indexPage = 1; indexPage <= lastNumber; indexPage++) {
        const data = await Promise.all(await page.$$eval('table tbody tr', tds => tds.map((td) => {
            return td.outerHTML;
        })));
        for (let indexTd = 0; indexTd < data.length; indexTd++) {
            const element = data[indexTd];
            const regex = new RegExp('<tr\s*[^>]*><td\s*[^>]*><span\s*[^>]*>Identificação<\/span>(.*?)<\/td><td\s*[^>]*><span\s*[^>]*>Cep:<\/span>(.*?)<\/td><td\s*[^>]*><span\s*[^>]*>Endereço<\/span>(.*?)<\/td><td\s*[^>]*><span\s*[^>]*>Bairro<\/span>(.*?)<\/td><td\s*[^>]*><span\s*[^>]*>Cidade<\/span>(.*?)<\/td><td\s*[^>]*><span\s*[^>]*>Estado<\/span>(.*?)<\/td><\/tr>');
            const dataArray = Object(element.match(regex));
            let objectLocalization = {
                identificacao: dataArray[1],
                cep: dataArray[2],
                endereco: dataArray[3],
                bairro: dataArray[4],
                cidade: dataArray[5],
                estado: dataArray[6],
            }
            arrayResult.push(objectLocalization);
        }
        await Promise.all([
            await page.click('a[class^="ui-paginator-next"]'),
            await page.waitForTimeout(500),
        ]);
        console.log(`Click ${indexPage} of ${lastNumber}`);
    }
    // const arrayResult = [
    //     { id: 1, name: 'Tom' },
    //     { id: 1, name: 'Tom' },
    //     { id: 2, name: 'Nick' },
    //     { id: 2, name: 'Nick' },
    // ];
    const uniqueIds: any = [];
    const unique = arrayResult.filter((element: any) => {
        const isDuplicate = uniqueIds.includes(element.identificacao);
        if (!isDuplicate) {
            uniqueIds.push(element.identificacao);
            return true;
        }
        return false;
    });

    csvWriter.writeRecords(unique)       // returns a promise
        .then(() => {
            console.log('...Done');
        });
    return unique;
    // await browser.close();
}