const { generateText } = require("./util");

test("should output name and age", () => {
    const text = generateText('Sam', 41);
    expect(text).toBe('Sam (41 years old)');
});
