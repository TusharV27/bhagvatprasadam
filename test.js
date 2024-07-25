const puppeteer = require('puppeteer');

(async () => {
  const url = 'https://www.instagram.com/p/C9zrlInS6OS/';

  const browser = await puppeteer.launch({
    headless: true, // Run in headless mode
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  
  // Handle consent dialog if present
  page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });

  await page.goto(url, { waitUntil: 'networkidle2' });

  try {
    // Wait for the images to load
    await page.waitForSelector('img[decoding="auto"]');

    // Extract image sources
    const imageLinks = await page.evaluate(() => {
      const images = document.querySelectorAll('img[decoding="auto"]');
      return Array.from(images).map(img => img.src);
    });

    console.log(imageLinks);
  } catch (error) {
    console.error('Error fetching images:', error);
  }

  await browser.close();
})();
