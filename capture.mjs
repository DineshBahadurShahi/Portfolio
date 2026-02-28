import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        defaultViewport: {
            width: 1280,
            height: 720
        }
    });

    // 1. Nepali-English Date Converter
    const page1 = await browser.newPage();
    await page1.goto('https://nepali-english-date-converter.vercel.app/', { waitUntil: 'networkidle0' });
    await page1.screenshot({ path: 'public/date-converter.png' });

    // 2. Currency Converter
    const page2 = await browser.newPage();
    await page2.goto('https://currency-converter-topaz-kappa.vercel.app/', { waitUntil: 'networkidle0' });
    await page2.screenshot({ path: 'public/currency-converter.png' });

    await browser.close();
    console.log("Screenshots captured successfully.");
})();
