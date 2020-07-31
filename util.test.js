const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
	const text = generateText("Sam", 41);
	expect(text).toBe("Sam (41 years old)");
});

test("should generate a valid text output", () => {
	const text = checkAndGenerate("Sam", 41);
	expect(text).toBe("Sam (41 years old)");
});

test("should click around", async () => {
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
	await page.type("input#age", "32");
	await page.click("");
});
