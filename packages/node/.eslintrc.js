module.exports = {
  env: {
    es2021: true,
    node: true,
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
    "*.test.ts",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {},
};
