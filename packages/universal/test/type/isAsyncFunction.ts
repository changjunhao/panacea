import { isAsyncFunction } from "../../src/";

export default () => {
  test("isAsyncFunction(async function () {})", () => {
    expect(isAsyncFunction(async function () {})).toBe(true);
  });
  test("isGeneratorFunction(function () {})", () => {
    expect(isAsyncFunction(function () {})).toBe(false);
  });
};
