const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
    const text = generateText('Sam', 41);
    expect(text).toBe('Sam (41 years old)');
});

test("should generate a valid text output", () => {
    const text = checkAndGenerate( 'Sam', 41);
    expect(text).toBe('Sam (41 years old)');
})
