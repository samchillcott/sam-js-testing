const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
    const text = generateText('Sam', 41);
    expect(text).toBe('Sam (41 years old)');
});

test("should generate a valid text output", () => {
    const text = checkAndGenerate( 'Sam', 41);
    expect(text).toBe('Sam (41 years old)');
});

test ('shoud click around', async() => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto(
        
    )
})
