module.exports = {
  env: {
    es2021: true,
  },
  extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: [
    ".eslintrc.js",
    "rollup.config.js",
    "jest.config.js",
    "package.json",
    "tsconfig.json",
    "node_modules",
    "*.d.ts",
    "test/*",
    "esm/*",
    "lib/*",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "no-self-compare": "off",
    "no-nested-ternary": "off",
    "no-plusplus": "off",
  },
};
