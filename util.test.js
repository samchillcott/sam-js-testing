const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
	const text = generateText("Anna", 28);
	expect(text).toBe("Anna (28 years old)");
});

test("should generate a valid text output", () => {
	const text = checkAndGenerate("Anna", 28);
	expect(text).toBe("Anna (28 years old)");
});

test("should create an element with text and correct class", async () => {
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 80,
		args: ["--window-size=1000,500"],
	});
	const page = await browser.newPage();
	await page.goto(
		"file:///Users/samchillcott/Desktop/DESK/CODE/GH Repos/js-testing-introduction/index.html"
	);
	await page.click("input#name");
	await page.type("input#name", "Anna");
	await page.click("input#age");
	await page.type("input#age", "28");
	await page.click("#btnAddUser");
	const finalText = await page.$eval(".user-item", (el) => el.textContent);
	expect(finalText).toBe("Anna (28 years old)");
}, 10000);
