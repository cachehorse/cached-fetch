const assert = require("assert/strict");
const cachedFetch = require("../lib/index.js");

const runner = (name, { input, output }) => {
  try {
    console.log(`Running: '${name}':\n`);

    const result = cachedFetch(input);
    assert.strictEqual(result, output);

    console.log("Passed!\n");
  } catch (error) {
    console.error(error.message);
  }
};

runner("sample test", {
  input: "wow",
  output: "wow",
});
