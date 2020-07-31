const { generateText } = require("./util");

test("should output name and age", () => {
    const test = generateText('Sam', 41);
    expect(text).ToBe('Sam (41 years old)');
});
