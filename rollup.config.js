import terser from "@rollup/plugin-terser";
const pjson = require("./package.json");

module.exports = [
  {
    input: pjson.main,
    output: {
      file: `dist/${pjson.name}.min.js`,
      name: pjson.name,
      format: "umd",
    },
    plugins: [terser()],
  },
];
