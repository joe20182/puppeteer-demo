const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    // default mac chrome installed path
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://www.bibigoex.com/');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();