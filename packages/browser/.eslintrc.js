module.exports = {
  env: {
    browser: true,
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
    "test/",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {},
};
