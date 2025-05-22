const assert = require("assert/strict");
const CachedFetch = require("../lib/index.js");

const fakeFetch = async (uri, options) => {
  return { uri, options };
};

const { get } = CachedFetch({ apiKey: "122", fetch: fakeFetch });

const runner = async (name, { input, output }) => {
  try {
    const result = await get(input);
    assert.deepEqual(result, output);

    console.log(`✅ ${name}`);
  } catch (error) {
    console.log(`❌ ${name}`);
  }
};

runner("Basic HTTP request to <https://mockhttp.org/get>", {
  input: "https://mockhttp.org/get",
  output: {
    options: { headers: { "X-API-Key": "122" } },
    uri: "https://api.cache.horse/get?uri=https%3A%2F%2Fmockhttp.org%2Fget",
  },
});

runner(
  "Multiple HTTP requests to <https://dummyjson.com/http/200> & <https://dummyjson.com/test>",
  {
    input: ["https://dummyjson.com/http/200", "https://dummyjson.com/test"],
    output: {
      options: { headers: { "X-API-Key": "122" } },
      uri: "https://api.cache.horse/get?uris=https%3A%2F%2Fdummyjson.com%2Fhttp%2F200%7Chttps%3A%2F%2Fdummyjson.com%2Ftest",
    },
  },
);
