const puppeteer = require('puppeteer');

(async ()=> {
//esta funcion no hace nada pero se la mete dentro deuna funcion anonima.
console.log('Lanzamos navegador');
const browser = await puppeteer.launch({headless:false});
const page = await browser.newPage();
await page.goto('wikipedia.org')
console.log('Cerramos navegador');
//browser.close();
console.log('navegador cerrado')
})();